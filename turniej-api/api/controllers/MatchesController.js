/**
 * MatchesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async searchMatchesByNo(req, res) {
    return res.send(await Matches.find({no: req.param('no')}));
  }

};

