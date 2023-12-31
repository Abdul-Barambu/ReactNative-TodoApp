import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default TodoItem = ({ item, pressHandler }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <View style={styles.item}>
                    <MaterialIcons name="delete" size={18} color="#333" />
                    <Text style={styles.itemText}>{item.text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "coral",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        flexDirection: 'row',
    },

    itemText: {
        marginLeft: 10
    }
})