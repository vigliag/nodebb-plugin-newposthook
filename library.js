"use strict";

var meta = require.main.require('./src/meta');
var nconf = module.parent.require('nconf');

let settings = null;
meta.settings.get('simple-telegram-notification', function(err, sett) {
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

	router.get('/admin/plugins/simple-telegram-notification', hostMiddleware.admin.buildHeader, controllers.renderAdminPage);
	router.get('/api/admin/plugins/simple-telegram-notification', controllers.renderAdminPage);

	callback();
};

plugin.addAdminNavigation = function(header, callback) {
	header.plugins.push({
		route: '/plugins/simple-telegram-notification',
		icon: 'fa-tint',
		name: 'New Post Hook'
	});

	callback(null, header);
};

plugin.onTopicCreated = function(data, callback){
	let token = settings.token;
	let recipient = settings.recipient;

	if(!token || !recipient){
		console.log("token or recipient not set");
		return callback(null, data);
	} 

	console.log("TOPIC :" + JSON.stringify({topic: data.topic, content: data.data.content}));

	var telegramUrl = "https://api.telegram.org/bot" + token + "/sendMessage";

	var topicLink = nconf.get('url') + '/topic/' + data.topic.slug
	var payload = {
		chat_id : recipient,
		text : "Nuovo topic " + data.topic.title + " sul forum " + topicLink
	}

	axios.post(telegramUrl, payload).then(function(res){
		console.log("success!");
		console.log(res);
	}).catch(function(e){
		console.error(e.message);
	});

	callback(null, data);
}


module.exports = plugin;