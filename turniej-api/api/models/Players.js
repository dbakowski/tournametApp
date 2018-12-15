/**
 * Players.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes:{
    nickname: {type: 'string', required: true, unique: true},
    className: {type: 'string', required: true},
    team: {type: 'string', required: true},
    rank: {type: 'string'},
  },

};

