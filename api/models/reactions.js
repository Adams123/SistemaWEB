module.exports = {
    //user full name
  attributes: {
      tweet: {
          type: 'integer',
          required: 'true'
      },
      user: {
          type: 'integer',
          required: 'true'
      },
      reaction:{
          type: 'b',
          required: 'true'
      },
      timestamp:
      {
          type: 'timestamp',
          required: 'true'
      }
  }
};

