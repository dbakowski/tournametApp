module.exports = {


  friendlyName: 'Article create',

  description: 'Form for creating article',

  inputs: {
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
      viewTemplatePath: 'pages/articles-panel/create'
    },
    view: {
      description: 'Redirects to view of team',
      responseType: 'redirect'
    }
  },

  fn: async function (inputs, exits) {
    if(inputs.position && inputs.title && inputs.body) {
      var model = await Articles.create({
        position: inputs.position,
        title: inputs.title,
        body: inputs.body,
      }).fetch();
    }

    return model
      ? exits.view('/articles-panel/view?id=' + model.id)
      : exits.form();
  }

};
