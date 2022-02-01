const myResponse = require("../../responses/myResponse");

module.exports = {


  friendlyName: 'Signup',


  description: 'Signup auth.',


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
    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    }
  },


  fn: async function (inputs, exits) {

    try {
      // All done.
      const existingUser = await sails.helpers.user.getSingleUserByEmail(inputs.email);

      if (existingUser) {
        return exits.emailAlreadyInUse({ message: 'User with email already exist.' });
      }

      const user = await User.create({ ...inputs }).fetch();
      sails.log(`User with email=${user.email} was successfully registered.`);
      exits.success(myResponse(user));
      // exits.success({
      //   message: 'User was successfully registered.',
      //   data: user,
      // });
    } catch (error) {
      sails.log.error(error);
      return exits.serverError({ error: error.message });
    }
  }
};
