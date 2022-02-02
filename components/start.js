import React from 'react';
import { View, Text, Button,  StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/FontAwesome";


const  colors = {
  color1: "#090C08",
  color2: "#474056",
  color3: "#8A95A5",
  color4: "#B9C6AE"
}

let bgColor = '';


export class Start extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      name: '',
      bgColor: '',
  }
};



  /* background of chat screen*/
  changeBgColor = (newColor) => {
    bgColor = colors.color1;
    this.setState({ bgColor: newColor });
  };




  render() {
    return (
    <ImageBackground source={require('../BgImage.png')} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        

        <Text style={styles.title}>ChatApp</Text>
      
      
        <View style={styles.box1} > 

        <View style={styles.input}>
        <Icon name="user" size={30} color="#888" style={styles.icon}/>
        <TextInput accessible={true}
                  accessibilityLabel="Your Name"
                  accessibilityHint="Type the name you want to use in the chat session"
        style={styles.inputText} onChangeText={(name) => this.setState({name})} value={this.state.name} placeholder='Your Name' />
        </View>
        


        <View style={styles.colorBox}>
          
          <View style={styles.colorTextBox}>
        <Text style= {styles.colorText}>Choose Background Color:</Text>
        </View>

        <View style={styles.color}>
          <TouchableOpacity accessible={true}
                 accessibilityLabel="black background"
                 accessibilityHint="Adds black background to the chat screen"
                 accessibilityRole="button" 
                 style={styles.color1} onPress={() => this.changeBgColor(colors.color1)}></TouchableOpacity>
        <TouchableOpacity accessible={true}
                 accessibilityLabel="purple background"
                 accessibilityHint="Adds purple background to the chat screen"
                 accessibilityRole="button" 
        style={styles.color2}  onPress={() => this.changeBgColor(colors.color2)}></TouchableOpacity>
        <TouchableOpacity accessible={true}
                 accessibilityLabel="blue background"
                 accessibilityHint="Adds blue background to the chat screen"
                 accessibilityRole="button" 
        style={styles.color3} onPress={() => this.changeBgColor(colors.color3)}></TouchableOpacity>
        <TouchableOpacity accessible={true}
                 accessibilityLabel="green background"
                 accessibilityHint="Adds green background to the chat screen"
                 accessibilityRole="button" 
        style={styles.color4} onPress={() => this.changeBgColor(colors.color4)}></TouchableOpacity>
        </View>
        
        </View>
        

        
        <View style={styles.button}>
          <TouchableOpacity accessible={true}
              accessibilityLabel="Start chatting"
              accessibilityHint="Lets you enter the chat screen"
              accessibilityRole="button"
          style={styles.buttonHeight} onPress={() => this.props.navigation.navigate('Chat', { name: this.state.name, bgColor: this.state.bgColor } )}><Text style={styles.buttonText}>Start Chatting</Text></TouchableOpacity> 
        </View>


        </View>
        
      </View>
      </ImageBackground>
    )
  }
};

const styles = StyleSheet.create({
   container: {
      flex:1,
      justifyContent: 'center', 
      alignItems: 'center', 
      flexShrink: 1,
   },
   box1: {
   
    marginBottom: 30,
     height: '44%',
     width: '88%',
     backgroundColor: '#FFFFFF',
     justifyContent: 'space-evenly',
     alignItems: 'center',
     flexShrink: 0,

   },
   title: {
     flex: 1,
     fontSize: 45,
     fontWeight: 'bold',
     color: '#FFFFFF',
     marginTop: 50,
     justifyContent: 'center', 
      alignItems: 'center',
   },
   image:{
     justifyContent:'center',
     width: '100%',
     height: '100%', 
   },
   button: {
    height: 70, 
     width: '88%',
     marginBottom: -15,
     flexShrink: 0,
   },
   buttonHeight: { 
     backgroundColor: '#757083',
     height: 60, 
     width: '100%',
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'stretch'
   },
   buttonText: {
     color: '#FFFFFF',
     fontSize: 16,
     fontWeight: 'bold',
     marginTop:15,
   },
   color: { 
     width: 50,
     height: 50,
     borderRadius: 25, 
     marginRight: 10,
     marginLeft: 0,
     width: 250,
     flexDirection: 'row',
     justifyContent: 'space-between',
     flexShrink: 0,
     alignItems: "flex-start",
     flexShrink:0,
     
   },
   color1: {
    backgroundColor: '#090C08',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor:'#090C08',
   },
   color2: {
    backgroundColor: '#474056',
    width: 50,
     height: 50,
     borderRadius: 25, 
  },
  color3: {
    backgroundColor: '#8A95A5',
    width: 50,
     height: 50,
     borderRadius: 25, 
  },
  color4: {
    backgroundColor: '#B9C6AE',
    width: 50,
     height: 50,
     borderRadius: 25, 
  },
  colorBox: {
    width: '88%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center', 
    position: 'relative',
    marginRight: 40,
    flexShrink: 0,
  
  },
  input: {
    alignItems: "flex-start",
    flexDirection: "row",
    height: 60,
    width: '88%',
   borderColor: '#757083',
   borderWidth: 1,
   position: 'relative',
   marginTop: -5,
   marginBottom: -5,
   flexShrink: 0,


  },
  icon: {
    margin: 10,
    opacity: .5, 
  },
  inputText: {
    marginTop:15,
    marginLeft: 2,
    opacity: .5,
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
  },
  colorText: {
    color: '#757083',
    fontWeight: '300', 
    fontSize: 16,
    opacity: 1,
    marginBottom: 9,
    marginLeft: 5,
  },
  colorTextBox: {
    alignItems: "stretch",
    width: '88%',
     flexDirection: 'row',
     justifyContent: 'space-between',
  }
})