const bcrypt = require('bcrypt');

module.exports = {


  friendlyName: 'Check password',


  description: 'This is a helper function to check if password if valid.',


  inputs: {
    password: {
      type: 'string',
      requried: true,
      maxLength: 200,
      description: 'Raw user input password.'
    },
    hash: {
      type: 'string',
      requried: true,
      maxLength: 200,
      description: 'Hashed user password.'
    },
  },


  exits: {

    success: {
      description: 'All done.',
    },
    serverError: {
      description: 'An error occured. Contact an admin for assistance.'
    },
    error: {
      description: 'Unable to hash password. Contat Admin for help.'
    }

  },


  fn: async function (inputs, exits) {
    try {
      bcrypt.compare(inputs.password, inputs.hash, (error, isValidPassword) => {
        if (error) {
          const errorMessage = 'Error occurred during password validity check.';
          sails.log.error(errorMessage);
          exits.error({ message: errorMessage });
        }

        sails.log('Password is valid.');
        exits.success({ isValidPassword });
      });
    } catch (error) {
      sails.log.error(error);
      exits.serverError({ message: error.message, data: error });
    }
  }


};

