module.exports = {


  friendlyName: 'Teams create',

  description: 'Form for creating teams',

  inputs: {
    name: {
      type: 'string',
    },
  },

  exits: {
    form: {
      description: 'Renders view with form',
      responseType: 'view',
      viewTemplatePath: 'pages/teams-panel/create'
    },
    view: {
      description: 'Redirects to view of team',
      responseType: 'redirect'
    }
  },

  fn: async function (inputs, exits) {
    if(inputs.name) {
      var model = await Teams.create({
        name: inputs.name,
      }).fetch();
    }

    return model
      ? exits.view('/teams-panel/view?id=' + model.id)
      : exits.form();
  }

};
