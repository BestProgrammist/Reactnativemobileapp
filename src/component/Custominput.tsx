import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Custominput = ({value, setValue, placeholder, secure, inputMode}) => {
    return (
      <View style={styles.container}>
        <TextInput 
            placeholder={placeholder} 
            style={styles.input} 
            value={value}
            onChange={setValue}
            secureTextEntry={secure}
            inputMode={inputMode}
            />
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: '90%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        margin: 15

    },
    input: {

    }
})

export default Custominput