"use strict";

var meta = require.main.require('./src/meta');

let settings = null;
meta.settings.get('newposthook', function(err, sett) {
	settings = sett;
});

let axios = require('axios');

var controllers = require('./lib/controllers'),
	plugin = {};

plugin.init = function(params, callback) {
	var router = params.router,
		hostMiddleware = params.middleware,
		hostControllers = params.controllers;
		
	// We create two routes for every view. One API call, and the actual route itself.
	// Just add the buildHeader middleware to your route and NodeBB will take care of everything for you.

	router.get('/admin/plugins/newposthook', hostMiddleware.admin.buildHeader, controllers.renderAdminPage);
	router.get('/api/admin/plugins/newposthook', controllers.renderAdminPage);

	callback();
};

plugin.addAdminNavigation = function(header, callback) {
	header.plugins.push({
		route: '/plugins/newposthook',
		icon: 'fa-tint',
		name: 'New Post Hook'
	});

	callback(null, header);
};

plugin.onTopicCreated = function(data, callback){
	var payload = {
		topic: data.topic,
		content: data.data.content
	} 

	if(settings.url){
		var url = settings.url + '/topic';
		console.log(" sending " + url + " " + JSON.stringify(payload));

		axios.post(url, payload).then(function(){
			console.log("success")
		}).catch(function(e){
			console.error(e.message);
		});
	}

	callback(null, data);
}


module.exports = plugin;