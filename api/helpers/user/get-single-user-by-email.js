module.exports = {


  friendlyName: 'Get single user by email',


  description: '',


  inputs: {
    email: {
      type: 'string',
      isEmail: true,
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


  fn: async function ({email}, exits) {

    // Get single user by email.
    const user = await User.findOne({
      where: {
        email: email,
      }
    });

    // Send back the result through the success exit.
    return exits.success(user);

  }


};

