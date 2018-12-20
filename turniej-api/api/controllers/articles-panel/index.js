module.exports = {

  friendlyName: 'Articles index',

  description: 'Lists all articles in a table',

  inputs: {
  },

  exits: {
    success: {
      description: 'Renders index view',
      responseType: 'view',
      viewTemplatePath: 'pages/articles-panel/index'
    },
    notFound: {
      description: 'No article was found in the database.',
      responseType: 'notFound'
    }
  },

  fn: async function (inputs, exits) {

    const models = await Articles.find();

    if (!models) { return exits.notFound(); }

    return exits.success({models: models});
  }

};
