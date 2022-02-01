module.exports = {


  friendlyName: 'Get all users',


  description: 'This is the endpoint for getting all active users',


  inputs: {

  },


  exits: {
    success: {
      statusCode: 200,
      message: 'success',
      description: 'All done.',
    },
    serverError: {
      statusCode: 500,
      description: 'An error occured. Contact an admin for assistance.'
    },
    error: {
      statusCode: 400,
      description: 'Error occured processing request.'
    }
  },


  fn: async function (inputs, exits) {

    // All done.
    try {
      const users = await sails.helpers.user.getAllUsers();

      return exits.success({ data: users });
    } catch (error) {
      sails.log.error(error);
      return exits.serverError({ error: error.message });
    }
  }


};
