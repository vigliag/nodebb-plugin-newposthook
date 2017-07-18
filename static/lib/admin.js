'use strict';
/* globals $, app, socket */

define('admin/plugins/simple-telegram-notification', ['settings'], function(Settings) {

	var ACP = {};

	ACP.init = function() {
		Settings.load('simple-telegram-notification', $('.simple-telegram-notification-settings'));

		$('#save').on('click', function() {
			Settings.save('simple-telegram-notification', $('.simple-telegram-notification-settings'), function() {
				app.alert({
					type: 'success',
					alert_id: 'simple-telegram-notification-saved',
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