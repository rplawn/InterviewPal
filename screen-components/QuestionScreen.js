//import * as React from 'react';
import React, {useState, useEffect} from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { answers } from '../data-hardcoded/data';
import { addAnswer } from '../data_helpers/dataHelpers';

// export default function QuestionScreen({ route, navigation }) {
//   const { catId, questionId } = route.params;

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>This is the category number for this question: {catId}</Text>
//       <Text>This is the question number: {questionId}</Text>
//       {questionId > 3 
//         ?  <Button title="Summary" onPress={() => {navigation.navigate('Summary')}}/>
//         : <Button
//         title="Next Question"
//         onPress={() => navigation.push('Question', {catId: catId, questionId: questionId + 1})}
//       />
//       }
//     </View>
//   );
// }

export default function QuestionScreen({ route, navigation }) {
  const { array, questionIndex} = route.params;
  const [text, onChangeText] = useState("Your answer");
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{time}</Text>
      <Text>This is the category number for this question: </Text>
      <Text>This is the question number for this question: {questionIndex}</Text>
      <Text>{array[questionIndex].text}</Text>
      <TextInput style={{width: 300, height: 100, margin: 12, borderWidth: 1, padding: 10}} 
        placeholder="type your answer" 
        onChangeText={onChangeText}
        multiline={true} 
        value={text}
        />
      {questionIndex > 2
        ?  <Button 
            title="Summary" 
            disabled={text === "Your answer" ? true: false}
            onPress={() => {
                 addAnswer(text, array[questionIndex].id, answers )
                 navigation.navigate('Summary',{array: array, arrayofAns: answers})
               }
              }
            />
        : <Button
        title="Next Question"
        disabled={text === "Your answer" ? true: false}
        onPress={() => {
              addAnswer(text, array[questionIndex].id, answers )
              navigation.push('Question', {array: array, questionIndex: questionIndex + 1, arrayofAns: answers})
           }
         }
      />
      }
    </View>
  );
}