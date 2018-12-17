/**
 * PlayersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async getPlayersByNickname(req, res) {
    return res.send(await Players.find({nickname: {'contains': req.param('nickname')}}))
  },

  async getPlayersByTeam(req, res) {
    return res.send(await Players.find({team: req.param('team')}))
  },

  async getPlayersByRank(req, res) {
    return res.send(await Players.find({rank: req.param('rank')}))
  },

  async getPlayersByClassname(req, res) {
    return res.send(await Players.find({className: req.param('classname')}))
  },
};
