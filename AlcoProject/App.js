import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';
import { Picker} from '@react-native-community/picker';
import RadioForm from 'react-native-simple-radio-button';


export default function App() {
  const [numbBottles, setnumbottles] = useState(1);
  const [time, settime] = useState(1);
  const [gender, setgender] = useState('male');
  const [weight, setWeight] = useState(0);
  const [promilles, setPromilles] = useState(0);

  const Gender = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'}
  ];

  function calculate(){
    let result = 0;
    if (gender == 'male'){
      result = (((numbBottles * 0.33 * 8 * 4.5)- (weight/10)) * time) / (weight * 0.7)
    }
    else{
      result = (((numbBottles * 0.33 * 8 * 4.5)- (weight/10)) * time) / (weight * 0.6) 
    }
    setPromilles(result);
  }
  
  return (
    <View style={styles.container}>
      <View>
        <Text>Weight</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setWeight(text)}
          placeholder="In Kilograms"
          keyboardType='numeric'></TextInput>
      </View>

      <View>
        <Text>Bottles</Text>
        <Picker
          selectedValue={numbBottles}
          style={{height: 50, width: 300}}
          onValueChange={(itemValue) => setnumbottles(itemValue)
          //this.setState({language: itemValue})
         }>
          <Picker.Item label="1 Beer" value={1}/>
          <Picker.Item label="2 Beers" value={2}/>
          <Picker.Item label="3 Beers" value={3}/>
          <Picker.Item label="4 Beers" value={4}/>
          <Picker.Item label="5 Beers" value={5}/>
          <Picker.Item label="6 Beers" value={6}/>
        </Picker>
      </View>

      <View>
        <Text>Time</Text>
        <Picker
          selectedValue={time}
          style={{height: 50, width: 300}}
          onValueChange={(itemValue) => settime(itemValue)
          //this.setState({language: itemValue})
         }>
          <Picker.Item label="1 Hour" value={1}/>
          <Picker.Item label="2 Hours" value={2}/>
          <Picker.Item label="3 Hours" value={3}/>
          <Picker.Item label="4 Hours" value={4}/>
          <Picker.Item label="5 Hours" value={5}/>
          <Picker.Item label="6 Hours" value={6}/>
        </Picker>
      </View>

      <View>
        <Text>Gender</Text>
        <RadioForm
          radio_props={Gender}
          initial ={1}
          onPress={(value)=> setgender(value)}></RadioForm>
      </View>

      <View>
        <Text>{promilles.toFixed(0)}</Text>
        <Button onPress = {calculate} title = "Calculate"> </Button>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
