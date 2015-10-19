import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPost(model) {
      this.sendAction('createPost', model);

      this.set('newPost.title', null);
      this.set('newPost.author', null);
      this.set('newPost.text', null);
    }
  }
});
