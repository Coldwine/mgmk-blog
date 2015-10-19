import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    createPost(model) {
      let post = this.store.createRecord('post', {
        title: model.title,
        text: model.text,
        author: model.author,
        createdDate: new Date()
      });
      post.save();
    }
  }
});
