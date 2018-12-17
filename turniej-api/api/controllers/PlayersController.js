/**
 * PlayersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async getPlayersByTeam(req, res) {
    return res.send(await Players.find({team: req.param('team')}))
  },

  async getPlayersByRank(req, res) {
    return res.send(await Players.find({rank: req.param('rank')}))

  },

  async getPlayersByNickname(req, res) {
    return res.send(await Players.find({nickname: req.param('nickname')}))

  },

  async getPlayersByClassname(req, res) {
    return res.send(await Players.find({className: req.param('classname')}))

  },
};
