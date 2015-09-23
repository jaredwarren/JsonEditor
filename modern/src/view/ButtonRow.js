Ext.define('JsonEditor.view.ButtonRow', {
  extend: 'Ext.dataview.component.ListItem',
  xtype: 'buttonrow',

  requires: [
    'Ext.SegmentedButton',
    'Ext.Button'
  ],

  config: {
    padding: 10,
    layout: 'hbox',
    items: [{
      xtype: 'component',
      flex: 1,
      html: 'Sample component inside dataitem'
    }, {
      xtype: 'segmentedbutton',
      items: [{
        xtype: 'button',
        text: 'MyButton2'
      }, {
        xtype: 'button',
        text: 'MyButton3'
      }]
    }]
  },

  updateRecord: function(record) {
    // Provide an implementation to update this container's child items
  }
  /*,
  getHeader: function() {
    return '1';
  }*/

});