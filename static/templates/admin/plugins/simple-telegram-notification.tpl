<form role="form" class="simple-telegram-notification-settings">
	<div class="row">
		<div class="col-sm-2 col-xs-12 settings-header">General</div>
		<div class="col-sm-10 col-xs-12">
			<p class="lead">
				Please set the url to send the notification to
			</p>
			<div class="form-group">
				<label for="url">Bot Token</label>
				<input type="text" id="token" name="token" title="Token" class="form-control" placeholder="Insert the bot token here">
			</div>
			<div class="form-group">
				<label for="recipient">Group identifier</label>
				<input type="text" id="recipient" name="recipient" title="recipient" class="form-control" placeholder="ID of the group/user here">
			</div>
		</div>
	</div>
</form>

<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
	<i class="material-icons">save</i>
</button>