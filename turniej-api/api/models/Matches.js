/**
 * Matches.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    no: {
      type: 'number',
      required: true,
      description: 'Match number',
      unique: true
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
      type: 'boolean',
      description: 'Is top team winner'
    },
    isWinnerBottom: {
      type: 'boolean',
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
  }

};

