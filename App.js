import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView, Dimensions, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Footer, FooterTab, Button, Icon, Body } from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Chart from './chart'


export default class App extends Component {


  state = {
    currentId: 1

  }

  // Later on in your component
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      ...Ionicons.font,
    });
  }


  changeId = id => {
    this.setState({
      currentId: id
    })
  }

  showVideo = () => {
    const { currentId } = this.state;

    switch (currentId) {
      case 1:
        return "https://www.youtube.com/embed/MgaKDY1M4Pc"

      case 2:
        return "https://www.youtube.com/embed/Aznb7eemR_s"

      default:
        return "https://www.youtube.com/embed/MgaKDY1M4Pc"
    }
  }

  render() {
    console.log(this.state.currentId)

    const BUTTONS1 = [
      {
        name: 'Beauty',
        iconName: 'apps',
        id: 1
      },

      {
        name: 'Camera',
        iconName: 'camera',
        id: 2
      },


      {
        name: 'Navigate',
        iconName: 'navigate',
        id: 3
      },

      {
        name: 'Contact',
        iconName: 'person',
        id: 4
      },
      {
        name: 'ETC',
        iconName: 'arrow-dropleft',
        id: 5
      },
    ]


    const BUTTONS2 = [
      {
        name: 'Apps',
        url: 'https://img.icons8.com/material/4ac144/256/twitter.png',
        id: 6
      },

      {
        name: 'Camera',
        url: './assets/unt.png',
        id: 7
      },


      {
        name: 'Navigate',
        url: './assets/unt.png',

        id: 8
      },

      {
        name: 'Contact',
        url: './assets/unt.png',

        id: 9
      },
      {
        name: 'ETC',
        url: './assets/unt.png',
        id: 10
      },
    ]

    const url = './assets/unt.png'

    const screenWidth = Math.round(Dimensions.get('window').width);

    return (
      <Container style={styles.container}>

        <Header>
          <Body>
            <Text style={{ color: 'white', fontSize: 25, }}>Header</Text>
          </Body>
        </Header>

        <Content>

          <View>
            <Card style={{ marginRight: 230, marginLeft: 40, marginTop: 35 }}>
              <CardItem>
                <Text>
                  User
                </Text>
              </CardItem>
            </Card>
            <Card style={{ marginRight: 230, marginLeft: 40, }}>
              <CardItem>
                <Text>
                  Users
                </Text>

              </CardItem>
            </Card>
            <Chart />
          </View>


          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
            <WebView
              style={{ height: 180, marginTop: 5, marginRight: 5, marginLeft: 5 }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ uri: this.showVideo() }}
            />

          </View>
        </Content>


        <View style={styles.footer}>
          <Footer>
            <FooterTab style={{ backgroundColor: 'white' }}>


              {BUTTONS1.map(item => (
                <Button vertical key={item.id} onPress={() => this.changeId(item.id)}>
                  <Icon name={item.iconName} />
                  <Text>{item.name}</Text>
                </Button>
              ))}

            </FooterTab>
          </Footer>

          <Footer >
            <FooterTab style={{ backgroundColor: 'white', }}>



              {BUTTONS2.map(item => (
                <Button vertical key={item.id} onPress={() => this.changeId(item.id)}>
                  <Image style={{width: 28, height: 28}} source={{uri: item.url}} />

                  <Text>{item.name}</Text>
                </Button>
              ))}

            </FooterTab>
          </Footer>
        </View>

      </Container>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    color: 'white',
  },

  chart: {
    height: 100,
    width: 100,
  },

  footer: {
    borderTopWidth: 2,
    borderColor: 'black',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    overflow: 'hidden',
    marginBottom: 20,
    paddingTop: 15,
  },

  textCont: {
    fontSize: 10,
    color: 'black',
    fontWeight: '500',
  }
});
