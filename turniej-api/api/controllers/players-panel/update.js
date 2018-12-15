module.exports = {


  friendlyName: 'Update',


  description: 'Update players.',


  inputs: {
    id: {
      type: 'string'
    },
    nickname: {
      type: 'string'
    },
    className: {
      type: 'string'
    },
    team: {
      type: 'string'
    },
    rank: {
      type: 'string'
    }
  },


  exits: {
    form: {
      description: 'Renders view with form',
      responseType: 'view',
      viewTemplatePath: 'pages/players-panel/update'
    },
    view: {
      description: 'Redirects to view of player',
      responseType: 'redirect'
    },
    noId: {
      description: 'Redirects user if no player id is passed by GET',
      responseType: 'notFound'
    }
  },


  fn: async function (inputs, exits) {
    if (!inputs.id) {
      return exits.noId();
    }

    const player = await Players.findOne({id: inputs.id});

    if(player && inputs.nickname && inputs.className && inputs.team) {
      await Players.update(player).set({
        nickname: inputs.nickname,
        className: inputs.className,
        team: inputs.team,
        rank: inputs.rank
      });

      return exits.view('/players-panel/view?id=' + player.id)
    }

    return exits.form({player: player});
  }

};
