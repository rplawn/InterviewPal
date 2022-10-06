const Pool = require('pg').Pool
const pool = new Pool({
  user: 'labber',
  host: 'localhost',
  database: 'interviewpal',
  password: 'password',
  port: 5432,
})

const getCategories = (request, response) => {
  pool.query('SELECT * FROM categories ORDER BY id ASC', (error, results) => {
   if(error) {
     throw error
   }
    response.status(200).json(results.rows)
})
};

const getQuestions = (request, response) => {
  pool.query('SELECT * FROM questions ORDER BY id ASC', (error, results) => {
   if(error) {
     throw error
   }
    response.status(200).json(results.rows)
})
};

const getAnswers = (request, response) => {
  pool.query('SELECT * FROM answers ORDER BY id ASC', (error, results) => {
   if(error) {
     throw error
   }
    response.status(200).json(results.rows)
})
};

const addAnswer = (request, response) => {
  const { answer, questionid } = request.body

  pool.query('INSERT INTO answers (answer, questionid) VALUES ($1, $2)', [answer, questionid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

module.exports = {
  getCategories,
  getQuestions,
  getAnswers,
  addAnswer
} 