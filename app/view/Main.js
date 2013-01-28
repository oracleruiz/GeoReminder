Ext.define('GeoReminder.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
        'GeoReminder.view.list',
        'GeoReminder.view.listDetail'
    ],
    config: {

        items: [
            { 
            	xtype: 'list',
                title: 'Welcome to Georeminder'
            }]
    }
});
