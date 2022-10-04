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

module.exports = {
  getCategories
} 