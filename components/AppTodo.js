import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

export default AppTodo = ({submitHandler}) => {

    const [text, setText] = useState('')

    const changeHandler = (value) => {
        setText(value)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New todo...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='Add Todo' color='coral' />
        </View>
    )
}

// Styling
const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})