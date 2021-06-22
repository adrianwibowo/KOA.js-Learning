
const personService = require('../services/person')


class PersonController {
   async createPerson(ctx) { // onli receive request and gelegate it to services(logic) and send them back response
        try {
            // const id = await personService.createPerson(ctx.request.body)
            console.log(ctx)
            ctx.status = 201
        } catch (err) {
            ctx.status = 401
            console.log(err);
        }
    }
}

module.exports = new PersonController()