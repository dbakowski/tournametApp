module.exports = {


  friendlyName: 'Single article',

  description: 'Shows table with single article info',

  inputs: {
    id: {
      type: 'string',
      required: true
    }
  },

  exits: {
    success: {
      description: 'Renders table with single article',
      responseType: 'view',
      viewTemplatePath: 'pages/articles-panel/view'
    },
    notFound: {
      description: 'No articles with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },

  fn: async function (inputs, exits) {

    const model = await Articles.findOne({id: inputs.id});

    if (!model) { return exits.notFound(); }

    return exits.success({model: model});
  }

};
