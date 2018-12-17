module.exports = {


  friendlyName: 'Players create',

  description: 'Form for creating players',

  inputs: {
    nickname: {
      type: 'string',
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
      viewTemplatePath: 'pages/players-panel/create'
    },
    view: {
      description: 'Redirects to view of player',
      responseType: 'redirect'
    }
  },

  fn: async function (inputs, exits) {
    if(inputs.nickname && inputs.className && inputs.team) {
      var player = await Players.create({
        nickname: inputs.nickname,
        className: inputs.className,
        team: inputs.team,
        rank: inputs.rank
      }).fetch();
    }
    else {
      var teamsDropdown = await sails.helpers.dbDropdown(Teams, 'name', 'team');
    }

    return player
      ? exits.view('/players-panel/view?id=' + player.id)
      : exits.form({dropdown: teamsDropdown});
  }

};
