/**
 * @author Diego
 */

Ext.define('GeoReminder.store.list',{
	extend: 'Ext.data.Store',
	config: {
		model: 'GeoReminder.model.list',
		data: [
		{id:1,Name:'Jordan'},
		{id:2,Name:'Rolando'}]
	}
});
