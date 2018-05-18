Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() { return Meteor.subscribe('ClientData'); },
  loadingTemplate: 'loading'
});

Router.route('/', {
  name: 'AddClientData'
});

Router.route('/client/:_id', {
  name: 'UpdateClientData',
  data: function() { return ClientData.findOne(this.params._id); }
});

Router.route('/edit', {
    name: 'EditClientData',
});

Router.route('/readme', {
    name: 'Readme',
});