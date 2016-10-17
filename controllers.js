(function() {
  'use strict';

  const app = angular.module('redditApp');

  app.filter('timeAgo', ['$interval', function ($interval){
    // trigger digest every 60 seconds
    $interval(function (){}, 60000);

    function fromNowFilter(time){
      return moment(time).fromNow();
    }

    fromNowFilter.$stateful = true;
    return fromNowFilter;
  }]);

  app.controller('newPostController', function($scope, $rootScope) {
    $rootScope.posts = [{id: 1, title: 'Pretty Kitty', author: 'CrazyCatLady28', image: 'https://placekitten.com/200/300', description: 'This is my new cat(#8)! Her name is muffin!', votes: 2, time: new Date().getTime() - 99999999999, comments: [{author: 'CatsRLame', comment: 'That cat is ugly, only losers like cats!'}, {author: 'CrazyCatLady28', comment: 'My cats are beautiful, and I am not a loser!'}]}, {id: 2, title: 'Nicholas Cage', author: 'NickLover', image: 'http://www.placecage.com/200/300', description: 'My TRUE love and my future husband!', votes: -6, time: new Date() - 9999999999, comments: [{author: 'CageTheBeast', comment: 'Call me!'}]}, {id: 3, title: 'Another Post', author: 'anonymous', image: 'http://www.placehold.it/200x300', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', votes: 54, time: new Date().getTime() - 999999, comments: []}];
    this.submitForm = function(form) {
      $rootScope.posts.push({id: $rootScope.posts[$rootScope.posts.length - 1].id + 1,title: form.title, author: form.author, image: form.image, description: form.description, votes: 0, time: new Date(), comments: []});
      $('#modal1').closeModal();
    };
  });

  app.controller('postController', function($scope, $rootScope) {
    $rootScope.clicked = 1;
    this.newComment = function(e) {
      $rootScope.clicked = e.target.dataset.id;
      $('#modal2').openModal();
    };
    this.submitCommentForm = function(form) {
      var searchIndex = $rootScope.posts.findIndex(curr => curr.id == $rootScope.clicked);
      $rootScope.posts[searchIndex].comments.push({author: form.author, comment: form.comment});
      $('#modal2').closeModal();
    };

    this.changeVotes = function(vote, post) {
      return post.votes += vote;
    };
  });
}());
