import { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import axios from "axios";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
//import { categories, questions } from '../data-hardcoded/data';
import { getQuestionsByCatId, randomValuesFromArray } from '../data_helpers/dataHelpers';

// export default function CategoriesScreen({ navigation }) {
  
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Choose A Category</Text>
//       <Button
//         title="General/Interpersonal"
//         onPress={() =>
//           navigation.navigate('Question', {catId: 1})                    
//         }
//       />

//       <Button
//         title="Customer Service Scenarios"
//         onPress={() => {
          
//           navigation.navigate('Question', {catId: 2});
//         }}
//       />

//       <Button
//         title="IT Technical"
//         onPress={() => {
          
//           navigation.navigate('Question', {catId: 3}) 
          
//         }}
//       />

//       <Button
//         title="Managament Scenarios"
//         onPress={() => {
          
//           navigation.navigate('Question', {catId: 4});
//         }}
//       />
//     </View>
//   );
// }

export default function CategoriesScreen({navigation}) {
   const [categories, setCategories] = useState([]);
   const [questions, setQuestions] = useState([]);

   useEffect(() => {
      axios.get("http://localhost:8080/categories")
           .then((response) => {
           setCategories(response.data)
           
       }).catch((error) => {
           console.log(error);
     });
  }, [])

  useEffect(() => {
      axios.get("http://localhost:8080/questions")
           .then((response) => {
           setQuestions(response.data)
       }).catch((error) => {
           console.log(error);
     });
  }, [])

   const categoriesList = categories.map((cat) => 
            <Button
                key={cat.id}
                title={cat.name}
             onPress={() => {
                 let QuestionsByCategory = getQuestionsByCatId(name, questions)
                 let randomQuestionsArray = randomValuesFromArray(QuestionsByCategory);
                 navigation.navigate('Question', {array: randomQuestionsArray})  
             }                  
            }
             />
          );
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {categoriesList}
     </View>
   )
};