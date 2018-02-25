import React from 'react';
import { StyleSheet, Button, TextInput, Alert, TouchableHighlight, FlatList, ScrollView, Image, Text, View, } from 'react-native';

const COMMUNITY_MEMBERS = [
  {
    name: 'Monte Thakkar',
    image: 'https://avatars2.githubusercontent.com/u/7840686?s=400&v=4',
    github_username: 'monte9'
  },
  {
    name: 'Ryan Liszewski',
    image: 'https://avatars3.githubusercontent.com/u/5275250?s=460&v=4',
    github_username: 'ryanliszewski'
  },
  {
    name: 'Thomas Zhu',
    image: 'http://thomaszhu.com/resources/thomas_avatar.jpeg',
    github_username: 'thomashzhu'
  },
  {
    name: 'Bhavesh Chowdhury',
    image: 'https://avatars3.githubusercontent.com/u/13439148?s=460&v=4',
    github_username: 'bhaveshc789'
  },
  {
    name: 'Sukhjit Singh',
    image: 'https://avatars1.githubusercontent.com/u/18251293?s=400&u=1ee2922f2dd90d94bb4efbec7cc815ef510a0ad7&v=4',
    github_username: 'sukhjitsingh'
  },
  {
    name: 'Prakash Gurung',
    image: 'https://avatars.githubusercontent.com/makkhay',
    github_username: 'makkhay'
  },
  {
    name: 'Nicholas Szeto',
    image: 'https://avatars1.githubusercontent.com/u/23561635?s=460&v=4',
    github_username: 'niszeto'
  },
  {
    name: 'Emanuel Saunders',
    image: 'https://scontent-lax3-2.cdninstagram.com/vp/1ee634d2bdf29d5a327858a15ccfdf42/5B26F2E8/t51.2885-19/s150x150/18160691_1198139890329419_5383374010954285056_a.jpg',
    github_username: 'saundemanu'
  },
  {
    name: 'William Hua',
    image: 'https://avatars3.githubusercontent.com/u/36139326?s=460&v=4',
    github_username: 'william-hua'
  },
  {
    name: 'Mitul Savani',
    image: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/18556546_1553987881278489_849408995015005895_o.jpg?oh=bb65219475a9cbac85ca7090e7ee877b&oe=5ADE398B',
    github_username: 'mitulsavani'
  },
  {
    name: 'Jakhongir Khusanov',
    image: 'https://avatars0.githubusercontent.com/u/25942541?s=460&v=4',
    github_username: 'jkhusanov'
  },
  {
    name: 'Teodora Caneva',
    image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/c44.0.320.320/p320x320/20914645_1579156895438534_1027285013181250707_n.jpg?oh=0ff1b3c4c8bc8e00edb84cecd660d0fe&oe=5B1C897A',
    github_username: 'kodekat'
  },
  {
    name: 'Affaan Ghazzali',
    image: 'https://avatars0.githubusercontent.com/u/32111151?s=460&v=4',
    github_username: 'affaanghazzali'
  },
  {
    name: 'Girish Rawat',
    image: 'https://avatars2.githubusercontent.com/u/6697235?s=460&v=4',
    github_username: 'GirishRawat'
  },
  {
    name: 'Karan Gupta',
    image: 'https://avatars1.githubusercontent.com/u/19352928?s=460&v=4',
    github_username: 'karanguptak9'
  }
]

let randomHex = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this);

    this.state = {
      phrase: '',
      backgroundColor: '#27EE6A'
    };

  }
  onClick() {
    this.setState({ backgroundColor: randomHex() });
  }

  handleSubmit = () => {
    const { phrase } = this.state
    if (phrase === 'mars' || phrase === 'MARS') {
      Alert.alert(
        'Success',
        'Fuck yeah!🎉',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      )
    }
  }

  render() {
    onButtonPress = () => {
      this.setState({ backgroundColor: '#434343' });
    }
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.imageView1}
            source={{ uri: 'http://aviatstudios.com/wp-content/uploads/2016/11/chrisPhillipsGifAnimations4.gif' }}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Image
              style={styles.imageView2}
              source={{ uri: 'https://media.giphy.com/media/d2ZhMH5dkQtFo4Mw/giphy.gif' }}
            />
            <Image
              style={styles.imageView3}
              source={{ uri: 'https://im-01.gifer.com/S5qc.gif' }}
            />
          </View>
        </View>
        <View style={[styles.changeColorContainer, { backgroundColor: this.state.backgroundColor }]}>
          <View style={{ width: 200 }}>
            <Button style={{ flex: 1 }}
              onPress={this.onClick}
              title="change background">
            </Button>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={{ textAlign:'center',height: 40, width: 140, color: 'white', borderColor: 'white', borderWidth: 1 }}
              placeholder="Enter secret phase"
              placeholderTextColor='#fff'
              value={this.state.phrase}
              onChangeText={(phrase) => this.setState({ phrase })}
              onSubmitEditing={this.handleSubmit()}
            />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <FlatList
            data={COMMUNITY_MEMBERS}
            renderItem={({ item, index }) => (
              <View style={styles.flatListContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: item.image }}
                    style={
                      {
                        width: 60,
                        height: 60,
                        borderRadius: 30
                      }}
                  />
                </View>
                <View style={styles.innerContainer}>
                  <Text> {item.name} </Text>
                </View>

                <View style={styles.innerContainer}>
                  <Text> @{item.github_username} </Text>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  flatListContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#434343',
    padding: 10,
    flex: 1,
    flexDirection: 'row',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    height: 150,
    backgroundColor: '#fc5c7d'
  },
  changeColorContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: randomHex(),
    height: 300
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    // paddingLeft: 20
  },
  instructions: {
    color: 'white'
  },
  imageView1: {
    flex: 1,
    height: 250
  },
  imageView2: {
    flex: 2,
    height: 200
  },
  imageView3: {
    flex: 1,
    height: 200
  },
  buttonView: {
    width: 300,
    height: 300
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'yellow'
  }
});
