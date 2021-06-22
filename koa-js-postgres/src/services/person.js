
const personDao = require('../dao/person')



class PersonService {
    createPerson(personDto) {
        const {first_name, last_name, email } = personDto
        return personDao.createPerson(firstName, last_name, email)
    }
}

module.exports = new PersonService()