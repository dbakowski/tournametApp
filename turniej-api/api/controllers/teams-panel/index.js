module.exports = {

  friendlyName: 'Teams index',

  description: 'Lists all teams in a table',

  inputs: {
  },

  exits: {
    success: {
      description: 'Renders index view',
      responseType: 'view',
      viewTemplatePath: 'pages/teams-panel/index'
    },
    notFound: {
      description: 'No teams was found in the database.',
      responseType: 'notFound'
    }
  },

  fn: async function (inputs, exits) {

    const models = await Teams.find();

    if (!models) { return exits.notFound(); }

    return exits.success({teams: models});
  }

};
