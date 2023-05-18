import React, { useState } from 'react'
import { Image, StyleSheet, FlatList, View, TouchableOpacity, Text } from 'react-native'



function Offers({ item, navigation }){

const onPressClaimOffer = () => {}

function offersItem({ item }){
return (
<View style={styles.offers_item}>
<Image
    style={styles.offer_image}
    source={{uri: item.offer_image}}
    />
<Text style={styles.offer_title} numberOfLines={1}>{item.offer_title}</Text>
<Text style={styles.offer_description}>{item.offer_description}</Text>
<TouchableOpacity  onPress={onPressClaimOffer}>
    <View style={styles.claim_offer}>{'ClaimOffer'}</View>
</TouchableOpacity>
</View>
)}

return (
<FlatList
    style={styles.offers}
    data={item}
    renderItem={offersItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Offers;

const styles = StyleSheet.create({
offer_image: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  },
offer_title: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 2,
    marginHorizontal: 10,
    marginTop: 5
  },
offer_description: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingHorizontal: 2,
    marginHorizontal: 10,
    marginTop: 5
  },
claim_offer: {
    flex:1,
    padding:10,
    margin: 5,
    textAlign:'center',
    backgroundColor:'#1ACDA5',
    color:'white'
  }
});