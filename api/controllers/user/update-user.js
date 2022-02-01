module.exports = {


  friendlyName: 'Update user',


  description: 'This is an action file for updating a given user.',


  inputs: {
    firstName: {
      type: 'string',
      minLength: 3,
      maxLength: 100
    },
    lastName: {
      type: 'string',
      minLength: 3,
      maxLength: 100
    },
    email: {
      type: 'string',
      unique: true,
      isEmail: true
    },
    address: {
      type: 'string',
      minLength: 3,
      maxLength: 100
    },
  },


  exits: {
    success: {
      statusCode: 200,
      message: 'success',
      description: 'User was updated successfully.',
    },
    serverError: {
      statusCode: 500,
      description: 'An error occured. Contact an admin for assistance.'
    },
    error: {
      statusCode: 400,
      description: 'Error occured processing request.'
    },
    userNotFound: {
      statusCode: 404,
      description: 'User with the given credentials not found.'
    }
  },


  fn: async function (inputs, exits) {
    try {
      const firstName = inputs.firstName;
      const lastName = inputs.lastName;
      const email = inputs.email;
      const address = inputs.address;
      const currentUser = await User.fetchOne({
        where: {
          email=this.req.user.email,
        },
      });

    } catch (error) {
      sails.log.error(error);
      return exits.serverError({ error: error.message });
    }

  }


};
