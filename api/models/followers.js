//followers model

module.exports = {
  attributes: {
      id: {
          type: 'integer',
          required: 'true'
      },
      follower:{
          type: 'integer',
          required: 'true'
      },
      follows:
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
