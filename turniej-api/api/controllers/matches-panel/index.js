module.exports = {

  friendlyName: 'Matches index',

  description: 'Lists all matches in a table',

  inputs: {
  },

  exits: {
    success: {
      description: 'Renders index view',
      responseType: 'view',
      viewTemplatePath: 'pages/matches-panel/index'
    },
    notFound: {
      description: 'No matches was found in the database.',
      responseType: 'notFound'
    }
  },

  fn: async function (inputs, exits) {

    const models = await Matches.find();

    if (!models) { return exits.notFound(); }

    return exits.success({matches: models});
  }

};
