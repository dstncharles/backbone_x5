(function(){
    'use strict';
// -------------
// Models / Collections
// -------------
var Blog = Backbone.Model.extend({
  defaults:{
    title:'',
    body: ''
  },
});

var Blogs = Backbone.Collection.extend({
  url:'https://api.parse.com/1/classes/post'
});

// -------------
// Views / (Presentation / Interation)
// -------------
var Post = Backbone.View.extend({
  tagName: 'form',
  template: _.template($('#blog-post-template').html()),

  render: function(){
    $('.app-container').append(this.el);
    this.$el.append(this.template);
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
window.blog = new Blog();
window.post = new Post({
  model: blog
});
post.render();
});

})();
