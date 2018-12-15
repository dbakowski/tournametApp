module.exports = {

  friendlyName: 'Players index',

  description: 'Lists all players in a table',

  inputs: {
  },

  exits: {
    success: {
      description: 'Renders index view',
      responseType: 'view',
      viewTemplatePath: 'pages/players-panel/index'
    },
    notFound: {
      description: 'No players was found in the database.',
      responseType: 'notFound'
    }
  },

  fn: async function (inputs, exits) {

    const models = await Players.find();

    if (!models) { return exits.notFound(); }

    return exits.success({players: models});
  }

};
