(function() {
  'use strict';

  const app = angular.module('redditApp');

  app.controller('newPostController', function($scope, $rootScope) {
    $rootScope.posts = [{title: 'Pretty Kitty', author: 'CrazyCatLady28', image: 'https://placekitten.com/200/300', description: 'This is my new cat(#8)! Her name is muffin!', votes: 2, time: new Date().getTime() - 99999999999}, {title: 'Nicholas Cage', author: 'NickLover', image: 'http://www.placecage.com/200/300', description: 'My TRUE love and my future husband!', votes: -6, time: new Date() - 9999999999}, {title: 'Another Post', author: 'anonymous', image: 'http://www.placehold.it/200x300', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', votes: 54, time: new Date()}];
    this.submitForm = function(form) {
      $rootScope.posts.push({title: form.title, author: form.author, image: form.image, description: form.description, votes: 0, time: new Date()});

      $('#modal1').closeModal();
    };
  });

  app.controller('postController', function($scope, $rootScope) {
    this.changeVotes = function(vote, post) {
      return post.votes += vote;
    };
  });
}());
