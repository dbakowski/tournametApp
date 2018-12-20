module.exports = {


  friendlyName: 'Single match',

  description: 'Shows table with single match info',

  inputs: {
    id: {
      type: 'string',
      required: true
    }
  },

  exits: {
    success: {
      description: 'Renders table with single match',
      responseType: 'view',
      viewTemplatePath: 'pages/matches-panel/view'
    },
    notFound: {
      description: 'No match with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },

  fn: async function (inputs, exits) {

    const model = await Matches.findOne({id: inputs.id});
    //TODO: Change to model in every controller

    if (!model) { return exits.notFound(); }

    return exits.success({model: model});
  }

};
