//group models

module.exports = {
    //user full name
  attributes: {
      id: {
          type: 'integer',
          required: 'true'
      },
      group: [
          {
              id: {
                  type: 'integer',
                  required: 'true'
              },
              list: [
                  {
                      nome: {
                          type: 'string',
                          required: 'true'
                      },
                      users:{
                          type: 'integer',
                          required: 'true'
                      },
                      relativeId:{
                          type: 'integer',
                          required: 'true'
                      }
                  }
              ]
          }
      ]
  }
};
