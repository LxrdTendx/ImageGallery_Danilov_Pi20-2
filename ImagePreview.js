import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image, Modal} from 'react-native';
import ZoomView from 'react-native-border-zoom-view';

export default function ImagePreview(props){
    console.log(props);
    return (
      <View style={{marginTop: 22}}>
      <ZoomView style={{height: '100%', width: '100%'}}
          minZoom={1}   
          maxZoom={2}
          zoomLevels={2}>
        
        <View style={{margin:"auto"}} >
            <Text style={{margin:"auto", fontSize: 25}}>This picture created by {props.item.author}</Text>
            <Image source={{uri:props.item.download_url}} style={{ width: 1200, height: 750}}/>
        </View>
      </ZoomView>
      </View>
    );
  }