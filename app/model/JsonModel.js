Ext.define('JsonEditor.model.JsonModel', {
  extend: 'Ext.data.TreeModel',
  requires: [
    'Ext.data.field.String',
    'Ext.data.field.Boolean'
  ],
  fields: [{
    type: 'string',
    name: 'text',
    mapping: 'title'
  }, {
    name: 'title',
    type: 'string'
  }, {
    defaultValue: '',
    name: 'pText',
    type: 'auto'
  }, {
    allowNull: false,
    name: 'isTocEntry',
    type: 'boolean'
  }, {
    allowNull: false,
    name: 'pageNum',
    type: 'string'
  }, {
    allowNull: false,
    name: 'total',
    persist: false,
    type: 'int'
  }, {
    defaultValue: false,
    name: 'restrictedTopicId',
    type: 'auto'
  }, {
    allowNull: false,
    defaultValue: false,
    name: 'complete',
    type: 'boolean'
  }, {
    name: 'pType',
    type: 'string'
  }, {
    name: 'linkID',
    type: 'string'
  }, {
    name: 'bookmark',
    type: 'string'
  }]
});