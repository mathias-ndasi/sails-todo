module.exports = {


  friendlyName: 'User',


  description: 'User something.',


  inputs: {
    firstName: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 100
    },
    lastName: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 100
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true
    },
    password: {
      type: 'string',
      required: true
    },
    address: {
      type: 'string',
      required: false,
      minLength: 3,
      maxLength: 100
    },
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
    invalidEmail: {
      statusCode: 400,
      description: 'The provided email address is invalid.',
    },
    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    }
  },


  fn: async function (inputs) {

    // All done.
    sails.log('It is working', inputs);
    return 'It is working';

  }


};
