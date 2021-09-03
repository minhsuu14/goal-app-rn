import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({itemData, id, pressDelete}) => {
  return (
    <TouchableOpacity onPress={pressDelete.bind(this,id)}>
      <View style={styles.listItem}>
        <Text>{itemData.item.value}</Text>
      </View>
    </TouchableOpacity>
  )}

const styles = StyleSheet.create({
    listItem: {
        padding : 10, margin : 10, borderColor : 'black', borderWidth : 1, backgroundColor : '#ccc'
      } 
})

export default GoalItem;