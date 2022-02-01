module.exports = {


  friendlyName: 'Login',


  description: 'Login auth.',


  inputs: {
    email: {
      type: 'string',
      isEmail: true,
      required: true,
      description: 'This is the email address of the the user.',
    },
    password: {
      type: 'string',
      required: true,
      description: 'This is the plain password of the user.',
    }
  },


  exits: {
    success: {
      statusCode: 201,
      description: 'User created sucessfully!!!',
      data: null
    },
    serverError: {
      statusCode: 500,
      description: 'An error occured. Contact an admin for assistance.'
    },
    error: {
      statusCode: 500,
      description: 'Unable to create new user. Contat Admin for help.'
    },
    invalidCredentials: {
      statusCode: 400,
      description: 'The provided email or password is invalid.',
    },
  },


  fn: async function (inputs, exits) {

    // All done.
    return 'ok';

  }


};
