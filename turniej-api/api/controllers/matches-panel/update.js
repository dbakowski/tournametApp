module.exports = {


  friendlyName: 'Matches update',

  description: 'Form for updating matches',

  inputs: {
    id: {
      type: 'string',
      description: 'Match id'
    },
    no: {
      type: 'number',
      description: 'Match number',
    },
    teamnameTop: {
      type: 'string',
      description: 'Name of the team displayed on top in match'
    },
    teamnameBottom: {
      type: 'string',
      description: 'Name of the team displayed on bottom in match'
    },
    isWinnerTop: {
      type: 'string',
      description: 'Is top team winner'
    },
    isWinnerBottom: {
      type: 'string',
      description: 'Is bottom team winner'
    },
    scoreTop: {
      type: 'string',
      description: "Score displayed on top"
    },
    scoreBottom: {
      type: 'string',
      description: "Score displayed on bottom"
    },
    date: {
      type: 'string',
      description: 'Match date'
    }
  },


  exits: {
    form: {
      description: 'Renders view with form',
      responseType: 'view',
      viewTemplatePath: 'pages/matches-panel/update'
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

    const match = await Matches.findOne({id: inputs.id});

    if(match && inputs.no && inputs.date) {

      await Matches.update(match).set({
        no: inputs.no,
        teamnameTop: inputs.teamnameTop,
        teamnameBottom: inputs.teamnameBottom,
        isWinnerTop: !!inputs.isWinnerTop,
        isWinnerBottom: !!inputs.isWinnerBottom,
        scoreTop: inputs.scoreTop,
        scoreBottom: inputs.scoreBottom,
        date: inputs.date
      });

      return exits.view('/matches-panel/view?id=' + match.id)
    }

    var teamsDropdownTop = await sails.helpers.dbDropdown(Teams, 'name', 'teamnameTop');
    var teamsDropdownBottom = await sails.helpers.dbDropdown(Teams, 'name', 'teamnameBottom');

    return exits.form({match: match,  dropdownTop: teamsDropdownTop, dropdownBottom: teamsDropdownBottom});
  }

};
