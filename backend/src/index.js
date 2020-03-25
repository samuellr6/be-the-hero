/**
 * Rota e Recurso
 */

/**
 * Método HTTP
 * 
 * GET: Buscar uma instrução do back-end
 * POST: Criar uma informação no back-end 
 * PUT: Alterar uma informação no back-end
 * DELETE: deletar uma informação
 */
/**
 * Tipos de parâmetros:
 * 
 * Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */
/**
 * app.post('/users', (request, response) =>{
 * const body = request.body;
 * console.log(body);
 *  return Response.json({
 *  });
 * });
  */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * No SQL: MongDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM  users
  * Query Builder: table('users').select('*').where()
  */

 const express = require('express');
 const cors = require('cors');
 const routes = require('./routes');
 
 const app = express(); 
 
 app.use(cors());
 app.use(express.json());
 app.use(routes);

app.listen(3333);
