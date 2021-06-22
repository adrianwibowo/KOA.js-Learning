const db = require('../db/db')

class PersonDao {
    async createPerson(firstName, lastName, email) {
        const [id] = await db('Persons').insert({
            email,
            first_name:  firstName,
            last_name: lastName
        })
        .returning('id')
        return id
    }
}


module.exports = new PersonDao()