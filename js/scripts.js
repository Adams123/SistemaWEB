(function() {
  var app = angular.module('twitter', []);

  app.controller('StoreController', function(){
    this.publications=publications;
  }),

  app.controller('PostsController', function() {
    this.post = {};

    this.addPost = function(input) {
      input.publications.push(this.publications);
      input.publications.posts.push(this.post);
      this.post = {};
    };
  });

var users = [
    {
      name: 'Rogerio',
      login: 'rogerio@gmail.com'
      pass: '123456',
      picture: '',
      descricao: 'Sou o Rogerio',
      nascimento: '22/07/2000',
      posts: [{
        text: "Ola, eu sou o Rogerio",
        date: "22/07/2015"
      }, {
        text: "So testando",
        date: "11/03/2016"
      }]
    }, {
      name: 'Andre',
      login: 'andre@gmail.com'
      pass: '123456',
      picture: '',
      descricao: 'Sou o Andre',
      nascimento: '22/07/1990',
      posts: [{
        text: "Ola eu sou o Andre",
        date: "31/03/2016"
      }, {
        text: "So testando tambem",
        date: "22/07/2021"
      }]
    }
  ];
})();
