module.exports = {


  friendlyName: 'Single team',

  description: 'Shows table with single team info',

  inputs: {
    id: {
      type: 'string',
      required: true
    }
  },

  exits: {
    success: {
      description: 'Renders table with single team',
      responseType: 'view',
      viewTemplatePath: 'pages/teams-panel/view'
    },
    notFound: {
      description: 'No teams with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },

  fn: async function (inputs, exits) {

    const model = await Teams.findOne({id: inputs.id});

    if (!model) { return exits.notFound(); }

    return exits.success({team: model});
  }

};
