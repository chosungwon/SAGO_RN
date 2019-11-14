import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  FlatList
} from 'react-native';

class Photos extends Component {

  state = {
    data: []
  }

  _renderItem = ({item}) => (
      <View style={{borderBottomWidth:1, marginTop: 20}}>
        <Image source={{ uri: `https://myuksal-saso.s3.ap-northeast-2.amazonaws.com${item.photo_small}` }} style={{ height: 500}} />\
        <Text>{item.user.name}</Text>
        <Text>ISO = {item.iso}</Text>
      </View>
  );

  // _getData 함수 수정
// ?lastpk=${this.state.data[this.state.data.length - 1].pk}
  _getData = () => {
    const url = `https://test.projectsago.com/api/board/public`;
    fetch(url)
        .then(r => r.json())
        .then(data => {
          this.setState({
            data: this.state.data.concat(data.data)
          })
        });
  }

  _ScrollgetData = () => {
    const url = `https://test.projectsago.com/api/board/public?lastpk=${this.state.data[this.state.data.length - 1].pk}`;
    fetch(url)
        .then(r => r.json())
        .then(data => {
          this.setState({
            data: this.state.data.concat(data.data)
          })
        });
  }

  componentDidMount() {
    this._getData();
  }

  // here
  _handleLoadMore = () => {
    this._ScrollgetData();
  }

  render() {
    return (
        <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
            // keyExtractor={(item) => item.id}
            onEndReached={this._handleLoadMore}
            onEndReachedThreshold={1}
        />
    );
  }
}

export default Photos;
