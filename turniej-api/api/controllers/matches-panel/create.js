module.exports = {


  friendlyName: 'Matches create',

  description: 'Form for creating matches',

  inputs: {
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
      viewTemplatePath: 'pages/matches-panel/create'
    },
    view: {
      description: 'Redirects to view of player',
      responseType: 'redirect'
    }
  },

  fn: async function (inputs, exits) {
    //TODO: change all creates to look more like update
    if(inputs.no && inputs.date) {

      var match = await Matches.create({
        no: inputs.no,
        teamnameTop: inputs.teamnameTop,
        teamnameBottom: inputs.teamnameBottom,
        isWinnerTop: !!inputs.isWinnerTop,
        isWinnerBottom: !!inputs.isWinnerBottom,
        scoreTop: inputs.scoreTop,
        scoreBottom: inputs.scoreBottom,
        date: inputs.date
      }).fetch();
    }
    else {
      var teamsDropdownTop = await sails.helpers.dbDropdown(Teams, 'name', 'teamnameTop');
      var teamsDropdownBottom = await sails.helpers.dbDropdown(Teams, 'name', 'teamnameBottom');
    }

    return match
      ? exits.view('/matches-panel/view?id=' + match.id)
      : exits.form({dropdownTop: teamsDropdownTop, dropdownBottom: teamsDropdownBottom});
  }

};
