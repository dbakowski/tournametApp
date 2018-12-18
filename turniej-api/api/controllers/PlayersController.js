/**
 * PlayersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async searchPlayersByNickname(req, res) {
    return res.send(await Players.find({nickname: {'contains': req.param('nickname')}}))
  },

  async searchPlayersByTeam(req, res) {
    return res.send(await Players.find({team: {'contains': req.param('team')}}))
  },

  async searchPlayersByRank(req, res) {
    return res.send(await Players.find({rank: {'contains': req.param('rank')}}))
  },

  async searchPlayersByClassname(req, res) {
    return res.send(await Players.find({className: {'contains': req.param('classname')}}))
  },

  async getPlayersByNickname(req, res) {
    return res.send(await Players.find({nickname:req.param('nickname')}))
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
