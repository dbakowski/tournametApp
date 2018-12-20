module.exports = {


  friendlyName: 'Delete',


  description: 'Delete match by id passed by POST',


  inputs: {
    id: {
      type: 'string',
      required: true
    }
  },

  exits: {
    notFound: {
      description: 'Could not find record with passed id',
      statusCode: 404
    },
    success: {
      description: 'Deleted successfully',
      statusCode: 200
    }
  },


  fn: async function (inputs, exits) {
    return await Matches.destroyOne({id: inputs.id})
      ? exits.success()
      : exits.notFound();
  }

};
