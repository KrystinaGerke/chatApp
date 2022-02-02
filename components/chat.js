import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Bubble, Day, SystemMessage, GiftedChat } from 'react-native-gifted-chat';
import { Platform, KeyboardAvoidingView } from 'react-native';



export class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    }
  };

  componentDidMount() {
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });
 // OR ...
    // let { name } = this.props.route.params;
    this.setState({
      messages: [
        {
          _id: 1,
          text: "My first message!",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Chatbob",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
        {
          _id: 2,
          text: "You entered the chat",
          createdAt: new Date(),
          system: true,
        },
      ],
    })
  };


  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
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
          _id: 1,
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