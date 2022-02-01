module.exports = {


  friendlyName: 'Get single user by id',


  description: '',


  inputs: {
    userId: {
      type: 'number',
      required: true
    }
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


  fn: async function ({userId}, exits) {

    // Get single user by id.
    const user = await User.findOne({
      where: {
        id: userId,
      }
    });

    // Send back the result through the success exit.
    return exits.success(user);

  }


};

