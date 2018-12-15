module.exports = {


  friendlyName: 'Single player',

  description: 'Shows table with single player info',

  inputs: {
    id: {
      type: 'string',
      required: true
    }
  },

  exits: {
    success: {
      description: 'Renders table with single player',
      responseType: 'view',
      viewTemplatePath: 'pages/players-panel/view'
    },
    notFound: {
      description: 'No player with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },

  fn: async function (inputs, exits) {

    const player = await Players.findOne({id: inputs.id});

    if (!player) { return exits.notFound(); }

    return exits.success({player: player});
  }

};
