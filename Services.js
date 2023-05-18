import React, { useState } from 'react'
import { Image, StyleSheet, FlatList, View, Text } from 'react-native'



function Services({ item, navigation }){



function servicesItem({ item }){
return (
<View style={styles.services_item}>
<Image
    style={styles.service_icon}
    source={{uri: item.service_icon}}
    />
<Text style={styles.service_name} numberOfLines={1}>{item.service_name}</Text>
</View>
)}

return (
<FlatList
    style={styles.services}
    data={item}
    renderItem={servicesItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Services;

const styles = StyleSheet.create({
service_icon: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  },
service_name: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 2,
    marginHorizontal: 10,
    marginTop: 5
  }
});