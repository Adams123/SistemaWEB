module.exports = {
    //user full name
  attributes: {
      id: {
          type: 'integer',
          required: 'true'
      },
      user: {
          type: 'integer',
          required: 'true'
      },
      title:{
          type: 'string',
          required: 'true'
      },
      text:{
          type: 'string',
          required: 'true'
      },
      timestamp:
      {
          type: 'timestamp',
          required: 'true'
      }
  }
};

