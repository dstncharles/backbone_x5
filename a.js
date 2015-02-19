(function(){
    'use strict';
// -------------
// Models / Collections
// -------------
var BlogModel = Backbone.Model.extend({
  defaults:{
    title:'',
    body: ''
  },
});

var BlogsModels = Backbone.Collection.extend({
  url:'https://api.parse.com/1/classes/post'
});

// -------------
// Views / (Presentation / Interation)
// -------------
var PostView = Backbone.View.extend({
  tagName: 'form',
  template: _.template($('#blog-post-template').html()),

  createPost: function(event){
    event.preventDefault();
    this.collection.create({title:'', body:''});
  },

  render: function(){
    $('.app-container').append(this.el);
    this.$el.append(this.template);
  },


  events: {
     'submit': 'createPost'
   }
});

// -------------
// Router / Application State
// -------------

// -------------
// Configuration
// -------------
$.ajaxSetup({
    headers: {
      "X-Parse-Application-Id": "2APrfn4zrmVL6HDoCLvS5hR1buvm2chNAJki70Ld",
      "X-Parse-REST-API-Key": "wjOqR7hA3d9ZrsW9HBVNJuzieRAZtlUH5KGHn9M8"
    }
  });

// -------------
// Glue code
// -------------
$(document).ready(function(){
window.blog = new BlogModel();
window.post = new PostView({
  model: blog
});
post.render();
});

})();
