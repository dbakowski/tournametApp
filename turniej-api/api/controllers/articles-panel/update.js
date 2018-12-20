module.exports = {


  friendlyName: 'Update article',


  description: 'Update article',

  inputs: {
    id: {
      type: 'string'
    },
    position: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    body: {
      type: 'string',
    },
  },

  exits: {
    form: {
      description: 'Renders view with form',
      responseType: 'view',
      viewTemplatePath: 'pages/articles-panel/update'
    },
    view: {
      description: 'Redirects to view of team',
      responseType: 'redirect'
    },
    noId: {
      description: 'Redirects user if no team id is passed by GET',
      responseType: 'notFound'
    }
  },


  fn: async function (inputs, exits) {
    if (!inputs.id) {
      return exits.noId();
    }

    const model = await Articles.findOne({id: inputs.id});

    console.log(model);

    if (model && inputs.position && inputs.title && inputs.body) {
      await Articles.update(model).set({
        position: inputs.position,
        title: inputs.title,
        body: inputs.body,
      });

      return exits.view('/articles-panel/view?id=' + model.id)
    }

    return exits.form({model: model});
  }

};
