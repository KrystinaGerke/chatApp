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
  } };



  
  changeBgColor = (newColor) => {
    bgColor = colors.color1;
    this.setState({ bgColor: newColor });
  };



  

  render() {
    return (
    <ImageBackground source={require('../BgImage.png')} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        

        <Text style={styles.title}>ChatApp</Text>
      
        <View style={styles.box1}> 

        <View style={styles.input}>
        <Icon name="user" size={30} color="#888" style={styles.icon}/>
        <TextInput style={styles.inputText} onChangeText={(name) => this.setState({name})} value={this.state.name} placeholder='Your Name' />
        </View>
        


        <View style={styles.colorBox}>
          
          <View style={styles.colorTextBox}>
        <Text style= {styles.colorText}>Choose Background Color:</Text>
        </View>

        <View style={styles.color}>
          <TouchableOpacity title='' color={colors.color1}  style={styles.color1} onPress={() => this.changeBgColor(colors.color1)}></TouchableOpacity>
        <TouchableOpacity style={styles.color2}  onPress={() => this.changeBgColor(colors.color2)}></TouchableOpacity>
        <TouchableOpacity style={styles.color3} onPress={() => this.changeBgColor(colors.color3)}></TouchableOpacity>
        <TouchableOpacity style={styles.color4} onPress={() => this.changeBgColor(colors.color4)}></TouchableOpacity>
        </View>
        
        </View>
        

        
        <View style={styles.button}>
          <Button color='#757083' style={styles.buttonHeight}
          title="Start Chatting" 
          onPress={() => this.props.navigation.navigate('Chat', { name: this.state.name, bgColor: this.state.bgColor } )}/> 
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
   },
   box1: {
    marginBottom: 30,
     height: '44%',
     width: '88%',
     backgroundColor: '#FFFFFF',
     justifyContent: 'space-evenly',
     alignItems: 'center',
     flexShrink:0,
     flexGrow: 0,
     maxWidth: '88%',
     maxHeight: '44%',
     
  
   },
   title: {
     flex: 1,
     fontSize: 45,
     fontWeight: 'bold',
     color: '#FFFFFF',
     marginTop: 60,
     justifyContent: 'center', 
      alignItems: 'center' 
   },
   image:{
     justifyContent:'center',
     width: '100%',
     height: '100%'
   },
   button: {
     
     width: '88%',
   },
   buttonHeight: {
     minHeight: 70,
     paddingVertical: 500,
     color: '#FFFFFF',
     backgroundColor: '#757083',
     fontSize: 16,
     fontWeight: 'bold',
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
  
  },
  input: {
    alignItems: "flex-start",
    flexDirection: "row",
    height: 50,
    width: '88%',
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
   opacity: .5,
   borderColor: '#757083',
   borderWidth: 1,
   position: 'relative',
   

  },
  icon: {
    margin: 10,
    opacity: .50, 
  },
  inputText: {
    marginTop:9,
    marginLeft: 2,
  },
  colorText: {
    color: '#757083', 
    opacity: .5,
    marginBottom: 9,
  },
  colorTextBox: {
    alignItems: "stretch",
    width: '88%',
     flexDirection: 'row',
     justifyContent: 'space-between',
  }
})