<form role="form" id="simple-telegram-notification-settings">
	<div class="row">
		<div class="col-sm-2 col-xs-12 settings-header">General</div>
		<div class="col-sm-10 col-xs-12">
			<p class="lead">
				Enter Bot details here
			</p>
			<div class="form-group">
				<label for="url">Bot Token</label>
				<input data-key="token" type="text" name="token" title="token" class="form-control" placeholder="Insert the bot token here">
			</div>
			<div class="form-group">
				<label for="recipient">Group identifier</label>
				<input data-key="recipient" type="text" name="recipient" title="recipient" class="form-control" placeholder="ID of the group/user here">
			</div>
			<div class="form-group">
				<label for="message">Message text</label>
				<input data-key="message" type="text" name="message" title="message" class="form-control" placeholder="Notification message here">
			</div>
		</div>
	</div>
</form>

<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
	<i class="material-icons">save</i>
</button>

<script>
$(function(){
	 require(['settings'], function (settings) {
		var wrapperID = '#simple-telegram-notification-settings';
		var wrapper = $(wrapperID);
		var pluginID = 'simpleTelegramNotification';

		settings.sync(pluginID, wrapper, function(err){
			if(err) console.log(err);
		});

		$('#save').on('click', function(event) {
			event.preventDefault();
			console.log(settings.get())
			settings.persist(pluginID , wrapper, function() {
				console.log(wrapper);
				socket.emit('admin.settings.syncSimpleTelegramNotification');
			});
		});
	 });
});
</script>