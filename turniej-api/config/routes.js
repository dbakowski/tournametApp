/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  //TODO: Rewrite everything to machine-as-action.

  '/': {view: 'pages/homepage'},

  //Players
  'GET /players-panel/': {action: 'players-panel/index'},
  'GET /players-panel/index': {action: 'players-panel/index'},
  'GET /players-panel/view': {action: 'players-panel/view'},
  'POST /players-panel/delete': {action: 'players-panel/delete'},
  '/players-panel/create': {action: 'players-panel/create'},
  '/players-panel/update': {action: 'players-panel/update'},

  //Players search
  'GET /players/search/team/:team': 'PlayersController.searchPlayersByTeam',
  'GET /players/search/rank/:rank': 'PlayersController.searchPlayersByRank',
  'GET /players/search/nickname/:nickname': 'PlayersController.searchPlayersByNickname',
  'GET /players/search/classname/:classname': 'PlayersController.searchPlayersByClassname',

  //Players strict search
  'GET /players/team/:team': 'PlayersController.getPlayersByTeam',
  'GET /players/rank/:rank': 'PlayersController.getPlayersByRank',
  'GET /players/nickname/:nickname': 'PlayersController.getPlayersByNickname',
  'GET /players/classname/:classname': 'PlayersController.getPlayersByClassname',

  //Teams
  'GET /teams-panel/': {action: 'teams-panel/index'},
  'GET /teams-panel/index': {action: 'teams-panel/index'},
  'GET /teams-panel/view': {action: 'teams-panel/view'},
  'POST /teams-panel/delete': {action: 'teams-panel/delete'},
  '/teams-panel/create': {action: 'teams-panel/create'},
  '/teams-panel/update': {action: 'teams-panel/update'},
  'GET /teams': 'TeamsController.getTeams',

  //Teams search
  'GET /teams/search/name/:name': 'TeamsController.searchTeamsByName',

  //Teams strict search
  'GET /teams/name/:name': 'TeamsController.getTeamByName',


  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/


};
