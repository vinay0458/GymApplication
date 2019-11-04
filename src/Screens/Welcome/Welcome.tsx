import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Button, Text,Left,Right,Body,Title,Grid,Col,Row,Footer,FooterTab } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Login from '../LoginScreen/Login';
import Signup from '../SignupScreen/Signup';
interface props {
  navigation?: {
      [key: string]: any,
  };
}
export default class Welcome extends Component<props> {
  state = {
    loading: true
  }
  constructor(props) {
    super(props);
    this.navigation = this.navigation.bind(this);
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('../../../node_modules/native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('../../../node_modules/native-base/Fonts/Roboto_medium.ttf'),
    })
    this.setState({ loading: false });
    console.log("fonts loaded");
  }
  navigation(){
    console.log("this navigation",this);
    this.setState({ loading: true });
  }
  render(){
    if (this.state.loading) {
      return (
        <View></View>
      );
    }
    return (
      <Container>
          {/* <Header>
            <Left />
            <Body>
              <Title>Welcome Trainer</Title>
            </Body>
          </Header> */}
          <Content>
            <Text>Welcome Trainer</Text>
            <Text>Trainer Text..........</Text>
          </Content>
          <Footer>
            <Left>
              <Button primary onPress={()=> this.props.navigation.navigate("Signup")}>
                <Text >Sign Up!</Text>
              </Button>
            </Left>
            <Right>
              <Button primary onPress={()=> this.props.navigation.navigate("Login")}>
                <Text>Login</Text>
              </Button>
            </Right>
          </Footer>
      </Container>
        
    );
  }
  
}
const App = createStackNavigator({
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
}
});
