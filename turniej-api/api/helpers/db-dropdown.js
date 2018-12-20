module.exports = {


  friendlyName: 'Db Dropdown',


  description: 'Creates dropdown filled with data from database.',


  inputs: {
    model: {
      type: 'ref',
      required: true,
      description: 'Database model',
    },
    field: {
      type: 'string',
      required: true,
      description: 'Database field'
    },
    name: {
      type: 'string',
      description: 'Input name and id'
    }
  },


  exits: {
    success: {
      description: 'Return dropdown HTML.',
    },
  },


  fn: async function (inputs, exits) {
    const models = await inputs.model.find();
    let html = '<select';

    html += inputs.name
      ? ' name="' + inputs.name + '" id="' + inputs.name + '">'
      : '>';

    models.forEach(function (model) {
      html += '<option value="' + model[inputs.field] + '">' + model[inputs.field] + '</option>';
    });

    html += '</select>';

    //TODO: add if no teams

    return exits.success(html);
  }


};

