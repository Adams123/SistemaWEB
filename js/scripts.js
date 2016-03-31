(function() {
  var app = angular.module('twitter', []);

  app.controller('StoreController', function(){
    this.publications=users;
  }),

  app.controller('PostsController', function() {
    this.post = {};

    this.addPost = function(input) {
      input.users.push(this.users);
      input.users.posts.push(this.post);
      this.post = {};
    };
  });


  app.controller('FirstController', function( $scope, Data){
     $scope.Data = Data;
  });

  app.controller('SecondController', function($scope, Data){
    $scope.Data = Data;
  });

app.factory('Data', function(){
    return {Data: ''}
});


var users = [
    {
      name: 'Rogerio',
      login: 'rogerio@gmail.com',
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
      name: 'Ricardo',
      login: 'Ricardo@gmail.com',
      pass: '123456',
      picture: '',
      descricao: 'Sou o Ricardo',
      nascimento: '22/07/1990',
      posts: [{
        text: "Ola eu sou o Ricardo",
        date: "31/03/2016"
      }, {
        text: "So testando tambem",
        date: "22/07/2021"
      }]
    }
  ];

  var Data = [
  {
  FirstName: 'Adams'
}
  ];

})();


