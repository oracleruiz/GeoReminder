Ext.define('GeoReminder.view.list',{
	extend: 'Ext.List',
	xtype: 'list',
	config: {
		itemTpl:'{id} {Name}',
		store: 'list',
		onItemDisclosure: true	
		}	
});
