# Simple Telegram Notification Plugin for NodeBB

This plugin allows to send notifications to a telegram group by means of a bot

### Creating the bot
- create a telegram bot
- add it to a group
- [take chat id of the group](https://stackoverflow.com/questions/32423837/telegram-bot-how-to-get-a-group-chat-id)

### Installing the plugin
- `git clone` me
- inside the plugin directory`sudo npm link`
- inside nodebb's directory `npm link nodebb-plugin-simple-telegram-notification` then `npm install`
- rebuild `./nodebb build`
- start nodebb in dev mode, so you can see logs `./nodebb dev`

### Configuration
- enable the plugin from nodebb's admin panel
- go to config, set bot token and the chat id of the group/recipient
- restart nodebb

### Done
- create some new topic, and it should work

### TODO
- blacklist some categories from the forum