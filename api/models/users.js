/**
 * WEB.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
//user model
module.exports = {
    //user full name
  attributes: {
      id: {
          type: 'integer',
          required: 'true'
      },
      nome: {
          type: 'string',
          required: 'true'
                },
      password: {
          type: 'string',
          required: 'true'
      },
      //user age
      birthday: {
          type: 'date',
          required: 'true'
      },
      bio: {
          type: 'string',
          required: 'true'
      }
  }
};

