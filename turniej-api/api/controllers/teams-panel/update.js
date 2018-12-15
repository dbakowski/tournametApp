module.exports = {


  friendlyName: 'Update',


  description: 'Update players.',


  inputs: {
    id: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
  },


  exits: {
    form: {
      description: 'Renders view with form',
      responseType: 'view',
      viewTemplatePath: 'pages/teams-panel/update'
    },
    view: {
      description: 'Redirects to view of team',
      responseType: 'redirect'
    },
    noId: {
      description: 'Redirects user if no team id is passed by GET',
      responseType: 'notFound'
    }
  },


  fn: async function (inputs, exits) {
    if (!inputs.id) {
      return exits.noId();
    }

    const model = await Teams.findOne({id: inputs.id});

    if(model && inputs.name) {
      await Teams.update(model).set({
        name: inputs.name,
      });

      return exits.view('/teams-panel/view?id=' + model.id)
    }

    return exits.form({team: model});
  }

};
