const bcrypt = require('bcrypt');

module.exports = {


  friendlyName: 'Hash password',


  description: 'This is a helper function for hashing password.',


  inputs: {
    password: {
      type: 'string',
      requried: true,
      maxLength: 200,
      description: 'Raw user input password.'
    }
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
      bcrypt.genSalt(10, (error, salt) => {
        if (error) {
          const errorMessage = 'Error occurred during generating password salt. Contact admin for help.';
          sails.log.error(errorMessage);
          exits.error({ message: errorMessage });
        }

        bcrypt.hash(inputs.password, salt, (error, hash) => {
          if (error) {
            const errorMessage = 'Error occurred during hashing password. Contact admin for help.';
            sails.log.error(errorMessage);
            exits.error({ message: errorMessage });
          }

          sails.log('Password hashed successfully.');
          const hashed = {
            salt: salt,
            password: hash
          };

          exits.success(hashed);
        });
      });

    } catch (error) {
      sails.log.error(error);
      exits.serverError({ message: error.message, data: error });
    }
  }


};

