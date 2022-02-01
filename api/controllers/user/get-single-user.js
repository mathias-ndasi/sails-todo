module.exports = {


  friendlyName: 'Get single user',


  description: 'This is an action file to get single users.',


  inputs: {
    userId: {
      type: 'number',
      required: true,
      min: 1
    }
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
    },
    userNotFound: {
      statusCode: 404,
      description: 'User with the given credentials not found.'
    }
  },


  fn: async function ({userId}, exits) {

    // All done.
    try {
      sails.log('This is the user id', userId);
      const user = User.find({
        where: {
          id: parseInt(userId),
        }
      });

      return exits.success({ data: user });
    } catch (error) {
      sails.log.error(error);
      return exits.serverError({ error: error.message });
    }

  }


};
