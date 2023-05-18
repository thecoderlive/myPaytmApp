import React, { useState, useEffect, useReducer } from 'react'
import { ActivityIndicator, Image, StyleSheet, ScrollView, View, Text } from 'react-native'

import { actionCreators, initialState, reducer } from './reducer'
import { api } from './api'
import { data } from './data'
import * as items from './home_data'
import Services from './Services'
import Offers from './Offers'

function Home({ navigation, route }){ 
const url = (api.home ?? \"home/\") + (route?.params?.id ?? '')
const [state, dispatch] = useReducer(reducer, initialState)

const { item, history, loading, error } = state



async function getItem() {
      dispatch(actionCreators.loading())

      try {
        if (url in history){
           dispatch(actionCreators.local(history[url]))
        } else if (url.indexOf('http') > -1){
          const response = await fetch(url)
          const json = await response.json()
          if(json){
            dispatch(actionCreators.success(route.params?.id ? json : json[0], url))
          }   
        } else {
          const json = route.params?.id ? data[route.params?.id] : items.item
          dispatch(actionCreators.success(json, url))
        }
      } catch (e) {
        dispatch(actionCreators.failure())
      }
    }

useEffect(() => {
    getItem();
}, []);
  
if (loading) {
    return (
        <View style={styles.center}>
        <ActivityIndicator animating={true} />
        </View>
    )
}

return(
<ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
<Image
    style={styles.logo}
    source={{uri: item.logo}}
    />
<Text style={styles.balance} numberOfLines={1}>{item.balance}</Text>
<Services item={'services' in item ? item.services: item} navigation={navigation}/>
<Offers item={'offers' in item ? item.offers: item} navigation={navigation}/>
</ScrollView>
)}

export default Home;

const styles = StyleSheet.create({
center:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
logo: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  },
balance: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 2,
    marginHorizontal: 10,
    marginTop: 5
  }
});