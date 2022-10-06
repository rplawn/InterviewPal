//Gets an array of questions based on category ID
export const getQuestionsByCatId  = (id, array) => {
  let newArray = [];
  for (q of array) {
    if (q.category === id) {
      newArray.push(q)
   }
  }
return newArray
  };

//Creates an array of 4 randomized questions
export const randomValuesFromArray = (array) => {
  let arrayCopy = [...array]
  let randomQuestions = []
    
  for(let i = 0; i < 4; i++) {
     const randNum = Math.floor(Math.random() * arrayCopy.length);
     let splicedItem = arrayCopy.splice(randNum, 1)[0]
     randomQuestions.push(splicedItem)
 }
   return randomQuestions;
};

//inserts answer object into answer array
export const addAnswer = (ansText, id, ansArray) => {
    ansArray.push({
         answerId: ansArray.length + 1,
         answer: ansText,
         questionId: id
       }
      )
};

//retrieves the last answer entered associated with a question
export const lastAnswerByQuestionID = (array, qId) => {
   let ansArray = []
    for(const ans of array) {
       if (ans.questionid === qId) {
          ansArray.push(ans)
          
       }
    }
    return ansArray[ansArray.length - 1].answer
}
