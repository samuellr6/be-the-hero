const connection = require('../database/connection');

module.exports = {
    async index(Request, Response) {
        const ong_id = Request.headers.authorization;

        const incidents = await connection('incidents')
        .where('org_id', ong_id)
        .select('*');

        return Response.json(incidents);
    }
}