//share model

module.exports = {
  attributes: {
      id: {
          type: 'integer',
          required: 'true'
      },
      tweet:{
          type: 'integer',
          required: 'true'
      },
      user:
      {
          type: 'integer',
          required: 'true'
      },
      timestamp:
      {
          type: 'timestamp',
          required: 'true'
      }
      }
};
