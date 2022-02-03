import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Bubble, Day, SystemMessage, GiftedChat } from 'react-native-gifted-chat';
import { Platform, KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase';
import "firebase/firestore";


//configuring firebase keys
const firebaseConfig = {
  apiKey: "AIzaSyD5ywqNz_umYt053y1yuqMrDIJKjbhbsUk",
  authDomain: "chatapp-6c06a.firebaseapp.com",
  projectId: "chatapp-6c06a",
  storageBucket: "chatapp-6c06a.appspot.com",
  messagingSenderId: "666952714959",
  appId: "1:666952714959:web:fb5d02e71a2298c747c5ba"
};


export class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      uid: 0,
      user: {
        _id: "",
        name: "",
        avatar: "",
      },
    };


  //initializing firebase
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
   // reference to the Firestore messages collection
   this.referenceChatMessages = firebase.firestore().collection('messages');
   this.refMsgsUser = null;

  };

  componentDidMount() {
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });

     // user authentication
     this.authUnsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        await firebase.auth().signInAnonymously();
      }
    
       //update user state with currently active user data
       this.setState({
        uid: user.uid,
        messages: [],
        user: {
          _id: user.uid,
          name: name,
          avatar: "https://placeimg.com/140/140/any",
        },
      });
      // listens for updates in the collection
      this.unsubscribe = this.referenceChatMessages
        .orderBy("createdAt", "desc")
        .onSnapshot(this.onCollectionUpdate)
    });

  };


  // Add messages to database
  addMessages() { 
    const message = this.state.messages[0];
    // add a new messages to the collection
    this.referenceChatMessages.add({
      _id: message._id,
      text: message.text || null,
      createdAt: message.createdAt,
      user: {
        _id: message.user._id,
        name: message.user.name,
        avatar: message.user.avatar
      } 
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
     }), () => {
      this.addMessages();
    })
  };

renderBubble(props) {
  return (
    <Bubble
    {...props}
    wrapperStyle={{
      right: {
        backgroundColor: '#000',
      }
    }}
    />
  )
};


componentWillUnmount() {
  //unsubscribe from collection updates
  this.authUnsubscribe();
  this.unsubscribe();
}


// changes for system messages
renderSystemMessage(props) {
  return (
    <SystemMessage
      {...props}
      textStyle={{
        color: "#fff",
      }}
    />
  );
}

// day message
  renderDay(props) {
    return (
      <Day
        {...props}
        textStyle={{
          color: "#fff",
        }}
      />
    );
  }


  render() {
    
    let bgColor = this.props.route.params.bgColor;
 
    return (
      <View style={styles.container}>
        <View style={{...styles.container, backgroundColor: bgColor ? bgColor: '#FFF'}}  >
 
        
  <GiftedChat
  renderBubble={this.renderBubble.bind(this)}
  renderSystemMessage={this.renderSystemMessage.bind(this)}
  renderDay={this.renderDay.bind(this)}
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: this.state.user._id,
          name: this.state.user.name,
          avatar: this.state.user.avatar
        }}
      />
      
      
{ Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
    container: {
       flex:1,  
    },
    
 
  
 })