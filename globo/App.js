import React from 'react';
import {Home} from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';
import {StackNavigator} from 'react-navigation';

const MyRootes = StackNavigator({
  HomeRT:{
    screen: Home
  },
  ContactRT:{
    screen: Contact
  }
},
  {
    initialRouteName: 'HomeRT'
  }

); 

export default class App extends React.Component {
  render(){
    return (
      <MyRootes/>
    );
  }
  
}
