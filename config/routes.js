/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  // Auth Routes
  'POST /api/v1/auth/signup': { action: 'auth/signup' },
  'POST /api/v1/auth/login': { action: 'auth/login' },

  // User Routes
  'GET /api/v1/users': { action: 'user/get-all-users' },
  'GET /api/v1/users/:userId': { action: 'user/get-single-user' },
  'PUT /api/v1/users/:userId': { action: 'user/update-user' },
  'DELETE /api/v1/users/:userId': { action: 'user/delete-user' },

  // Todo Routes
  'GET /api/v1/todos': { action: 'todo/get-all-todos' },
  'GET /api/v1/todos/:todoId': { action: 'todo/get-single-todos' },
  'GET /api/v1/todos/user': { action: 'todo/get-all-user-todos' },
  'POST /api/v1/todos': { action: 'todo/create-todo' },
  'PUT /api/v1/todos/:todoId': { action: 'todo/udpate-todo' },
  'DELETE /api/v1/todos/:todoId': { action: 'todo/delete-todo' },
};
