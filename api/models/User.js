/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'user',
  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    firstName: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 100,
      description: 'This is the first name of the user.',
      columnName: 'first_name',
      columnType: 'varchar(100) CHARACTER SET utf8mb4'
    },
    lastName: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 100,
      description: 'This is the last name of the user.',
      columnName: 'last_name',
      columnType: 'varchar(100) CHARACTER SET utf8mb4'
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      description: 'This is the user email address. This is unique to every user object,',
      columnName: 'email',
      columnType: 'varchar(100) CHARACTER SET utf8mb4'
    },
    address: {
      type: 'string',
      required: false,
      columnName: 'address',
      description: 'This is the user address.',
      columnType: 'varchar(100) CHARACTER SET utf8mb4'
    },
    active: {
      type: 'boolean',
      defaultsTo: true,
      description: 'This is an indicator for an active user or not.',
      columnName: 'active'
    },
    salt: {
      type: 'string',
      maxLength: 50,
      description: 'The password salt.',
      columnName: 'salt',
      columnType: 'varchar(30) CHARACTER SET utf8mb4'
    },
    password: {
      type: 'string',
      required: true,
      allowNull: false,
      description: 'The password hash',
      columnName: 'password',
      columnType: 'varchar(200) CHARACTER SET utf8mb4 '
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    todos: {
      collection: 'todo',
      via: 'userId'
    }
  },
  customToJSON: () => {
    return _.omit(this, ['password', 'salt', 'updatedAt', 'createdAt']);
  },
  beforeCreate: async (values, proceed) => {

    const passwordHashPayload = await sails.helpers.passwords.hashPassword(values.password);

    // Update user password and salt parameters
    values.password = passwordHashPayload.password;
    values.salt = passwordHashPayload.salt;

    return proceed();
  },
  comparePassword: (password, encryptedPassword) => {
    return new Promise((resolve, reject) => {
      
    })
  }
};
