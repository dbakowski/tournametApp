async function addPlayersToTeams(teams) {
  for (let team of teams) {
    team.players = await Players.find({team: team.name});
  }
}

/**
 * TeamsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  async getTeams(req, res) {
    const teams = await Teams.find();

    await addPlayersToTeams(teams);

    return res.send(teams);
  },

  async getTeamByName(req, res) {
    const team = await Teams.find({name: req.param('name')});

    await addPlayersToTeams(team);

    return res.send(team)
  },

  async searchTeamsByName(req, res) {
    const teams = await Teams.find({name: {'contains': req.param('name')}});

    await addPlayersToTeams(teams);

    return res.send(teams)
  },
};

