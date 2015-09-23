Ext.define('JsonEditor.view.JsonNestedList', {
	extend: 'Ext.dataview.NestedList',
	xtype: 'jsonnestedlist',
	requires: [
		'JsonEditor.view.ButtonRow'
	],
	config: {
	},
	listConfig: {
		defaultType: 'buttonrow',
		useComponents: true
	},
	store: 'JsonTreeStore'
});