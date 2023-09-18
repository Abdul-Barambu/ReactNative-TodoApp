import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AppTodo from './components/AppTodo';
import SandBox from './components/SandBox';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: 1 },
    { text: 'make an App', key: 2 },
    { text: 'play on the switch', key: 3 },
  ])

  const pressHandler = (key) => {
    setTodos(prevTodo => (
      prevTodo.filter(todo => todo.key != key)
    ))
  }

  const submitHandler = (text) => {

    if (text.length > 3) {
      setTodos(prevTodo => (
        [
          { text: text, key: Math.random() },
          ...prevTodo
        ]
      ))
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 characters long', [
        { text: 'Understood', onPress: (() => console.log('alert closed')) }
      ])
    }

  }

  return (
    // <SandBox />
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AppTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 40,
    // paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  content: {
    padding: 40,
    flex: 1
  },

  list: {
    marginTop: 20,
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 10
  },

  header: {
    backgroundColor: 'red',
    padding: 20
  },

  text: {
    fontWeight: 'bold',
  },

  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },

  buttonContainer: {
    marginTop: 20
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },

  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24
  },

  itemGreen: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "lightgreen",
    fontSize: 24,
    marginHorizontal: 10
  }
});







// Comments for already used examples code

// ********* Style **********
// <View style={styles.container}>
//   <View style={styles.header}>
//     <Text style={styles.text}>Hello World</Text>
//   </View>
//   <View style={styles.body}>
//   <Text style={styles.text}>Lorem ipsum <Text>test</Text> dolar sit amet</Text>
//   <Text>Lorem ipsum dolar sit amet</Text>
//   <Text>Lorem ipsum dolar sit amet</Text>
//   </View>
// </View>



// ********** UseSate and update state **********
// <Text>My name is {name}</Text>
//   <Text>His name is {person.name} and his age is {person.age}</Text>
//   <View style={styles.buttonContainer}>
//     <Button title='Update name' onPress={handleChaneName} />
//   </View>

// const [name, setName] = useState('Shaun')
// const [person, setPerson] = useState({
//   name: 'Mario',
//   age: 40
// })

// const handleChaneName = () => {
//   setName('Chun-li')
//   setPerson({
//     name: "Isa",
//     age: "23"
//   })
// }




// ********** text inputs **********
{/* <Text>Enter your name: </Text>
      <TextInput
      multiline
        style={styles.input}
        placeholder='e.g John Doe'
        onChangeText={(value) => setName(value)} //OnChangeText take the value of the input as arg
      />
      <Text>Enter your age: </Text>
      <TextInput
      keyboardType='numeric'
        style={styles.input}
        placeholder='e.g 99'
        onChangeText={(value) => setAge(value)} //OnChangeText take the value of the input as arg
      />
      <Text>Name is {name} and the age is {age} </Text> 
      const [name, setName] = useState('Shaun')
  const [age, setAge] = useState('30')
*/}

// ********** Map List & FlatList with filter
{/* FlatList */ }
{/* <FlatList
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.itemGreen}>{item.name}</Text>
          </TouchableOpacity>
        )} /> */}

{/* <ScrollView>
        {
          people.map((item) => {
            return (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )
          })
        }
      </ScrollView> */
  // const [people, setPeople] = useState([
  //   { name: "Isa", id: 1 },
  //   { name: "Umar", id: 2 },
  //   { name: "Usman", id: 3 },
  //   { name: "Yahya", id: 4 },
  //   { name: "James", id: 5 },
  //   { name: "Jone", id: 6 },
  //   { name: "Jane", id: 7 },
  // ])

  // const pressHandler = (id) => {
  //   console.log(id)
  //   setPeople(prevPerson => (
  //     prevPerson.filter(person => person.id != id)
  //   ))
  // }
}