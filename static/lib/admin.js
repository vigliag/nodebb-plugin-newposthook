'use strict';
/* globals $, app, socket */

define('admin/plugins/newposthook', ['settings'], function(Settings) {

	var ACP = {};

	ACP.init = function() {
		Settings.load('newposthook', $('.newposthook-settings'));

		$('#save').on('click', function() {
			Settings.save('newposthook', $('.newposthook-settings'), function() {
				app.alert({
					type: 'success',
					alert_id: 'newposthook-saved',
					title: 'Settings Saved',
					message: 'Please reload your NodeBB to apply these settings',
					clickfn: function() {
						socket.emit('admin.reload');
					}
				});
			});
		});
	};

	return ACP;
});