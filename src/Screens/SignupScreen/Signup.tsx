import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Button, Text,Left,Right,Body,Title,Grid,Col,Row,Footer,FooterTab,Form,Item,Label,Input,Card,CardItem } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

export default class Welcome extends Component<any> {
  state = {
    loading: true
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('../../../node_modules/native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('../../../node_modules/native-base/Fonts/Roboto_medium.ttf'),
    })
    this.setState({ loading: false })
  }
  navigation(){
      console.log("check if signup is success");
  }
  render(){
    if (this.state.loading) {
      return (
        <View></View>
      );
    }
    return (
        <Container>
        <Content>
            <Card transparent>
                <CardItem>
                <Body>
                    <Text>
                        Create Account
                    </Text>
                </Body>
                </CardItem>
            </Card>
            <Form>
                <Item floatingLabel>
                    <Label>FirstName</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>LastName</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>Email Id</Label>
                    <Input />
                </Item>
                <Item floatingLabel last>
                    <Label>Mobile Number</Label>
                    <Input />
                </Item>
            </Form>
        </Content>
          <Footer>
            <Button primary onPress={this.navigation}>
                <Text>Signup</Text>
              </Button>
          </Footer>
      </Container>
        
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
}
});
