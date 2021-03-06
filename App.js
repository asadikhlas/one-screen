import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  WebView,
  Image,
  TouchableNativeFeedback
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Footer,
  FooterTab,
  Body
} from "native-base";
import ChartBar from "./components/barChart";
import Chart from "./components/chart";
import Cards from './components/cards';

export default class App extends Component {
  state = {
    currentId: 1
  };

  changeId = id => {
    this.setState({
      currentId: id
    });
  };

  showVideo = () => {
    const { currentId } = this.state;

    switch (currentId) {
      case 1:
        return "https://www.youtube.com/embed/a3ICNMQW7Ok";

      case 2:
        return "https://www.youtube.com/embed/xcJtL7QggTI";

      case 3:
        return "https://www.youtube.com/embed/Bey4XXJAqS8";

      case 4:
        return "https://www.youtube.com/embed/S-thTTqefls";

      case 5:
        return "https://www.youtube.com/embed/E5ln4uR4TwQ";

      case 6:
        return "https://www.youtube.com/embed/tO01J-M3g0U";

      case 7:
        return "https://www.youtube.com/embed/K1_k03Gvd5g";

      case 9:
        return "https://www.youtube.com/embed/pSA0x4JIUJs";

      case 10:
        return "https://www.youtube.com/embed/S-thTTqefls";

      default:
        return "https://www.youtube.com/embed/Bey4XXJAqS8";
    }
  };

  render() {
    const BUTTONS1 = [
      {
        name: "Auto Beauty",
        url: "https://image.flaticon.com/icons/png/512/38/38964.png",
        id: 1
      },

      {
        name: "LIquify",
        url:
          "http://www.sclance.com/pngs/cursor-icon-png/cursor_icon_png_356270.png",
        id: 2
      },

      {
        name: "Facelift",
        url:
          "https://cdn1.iconfinder.com/data/icons/surgery/450/facelift-512.png",
        id: 3
      },

      {
        name: "Bigger Eyes",
        url:
          "https://cdn2.iconfinder.com/data/icons/emoticons-hand-drawn/80/Big_Mischievous_Eyes-512.png",

        id: 4
      },
      {
        name: "Dark Circles",
        url:
          "https://cdn2.iconfinder.com/data/icons/natural-beauty/100/dark_circles-512.png",
        id: 5
      }
    ];

    const BUTTONS2 = [
      {
        name: "Smiling",
        url: "http://simpleicon.com/wp-content/uploads/smile.png",
        id: 6
      },

      {
        name: "Softening",
        url:
          "https://www.pngrepo.com/png/75742/170/emoticon-face-with-the-mouth-at-one-side-like-a-small-smile-in-a-rounded-square.png",
        id: 7
      },

      {
        name: "Whitening",
        url: "https://png.pngtree.com/svg/20161020/5101007c9d.png",
        id: 8
      },

      {
        name: "Blemishe",
        url: "https://static.thenounproject.com/png/944433-200.png",

        id: 9
      },
      {
        name: "Small Nose",
        url:
          "https://cdn.iconscout.com/icon/premium/png-256-thumb/itchy-nose-777715.png",
        id: 10
      }
    ];

    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Text style={{ color: "white", fontSize: 25 }}>Header</Text>
          </Body>
        </Header>

        <Content>
          <View>


            <Cards />
            <Chart />
            <ChartBar />
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-end"
            }}
          >
            <WebView
              style={{ height: 210, marginHorizontal: 5, marginTop: 25 }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ uri: this.showVideo() }}
            />
          </View>
        </Content>

        <View style={styles.footer}>
          <Footer>
            <FooterTab style={{ backgroundColor: "white" }}>
              {BUTTONS1.map(item => (
                <TouchableNativeFeedback
                  key={item.id}
                  onPress={() => this.changeId(item.id)}
                >
                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginHorizontal: 10
                    }}
                  >
                    <View>
                      <Image
                        style={{ width: 21, height: 21 }}
                        source={{ uri: item.url }}
                      />
                    </View>

                    <View>
                      <Text style={{ fontSize: 12, marginTop: 8 }}>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </TouchableNativeFeedback>
              ))}
            </FooterTab>
          </Footer>

          <Footer>
            <FooterTab style={{ backgroundColor: "white" }}>
              {BUTTONS2.map(item => (
                <TouchableNativeFeedback
                  key={item.id}
                  onPress={() => this.changeId(item.id)}
                >
                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginHorizontal: 10
                    }}
                  >
                    <View>
                      <Image
                        style={{ width: 21, height: 21, marginHorizontal: 10 }}
                        source={{ uri: item.url }}
                      />
                    </View>

                    <View>
                      <Text style={{ fontSize: 12, marginTop: 8 }}>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </TouchableNativeFeedback>
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
    color: "white"
  },

  chart: {
    height: 100,
    width: 100
  },

  footer: {
    borderTopWidth: 2,
    borderColor: "black",
    borderBottomWidth: 0,
    backgroundColor: "white",
    overflow: "hidden",
    marginBottom: 20,
    paddingTop: 15
  },

  textCont: {
    fontSize: 10,
    color: "black",
    fontWeight: "500"
  }
});
