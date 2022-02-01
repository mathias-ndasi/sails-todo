module.exports = {


  friendlyName: 'Get all users',


  description: 'This is a helper function that returns a list of all active users in our system.',


  inputs: {

  },


  exits: {

    success: {
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

  },


  fn: async function (inputs, exits) {

    // Get all users.
    const users = await User.find({
      where: {
        active: true
      }
    });

    // Send back the result through the success exit.
    return exits.success(users);

  }


};

