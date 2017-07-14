Instance of douxieme, which is a fork of the Nagato Discord bot core.

This is the thing you actually run as a Discord bot.

Set up (will have more steps when Postgres stuff is implemented):
* Copy the below code block to ``options.json`` and modify accordingly
* ``npm install`` and ``npm start``

Guide to `options.json`:

```js
{
  "Eris": {
    // Options to call to the Eris library
  },
  "Help": {
    "helpCommands": [
      // Commands that return the command list
      "help",
      "commands"
    ],
    // if set to embed, use the magic of EMBEDS. if not, use text :(
    "helpFormat": "embed"
  },
  "Logger": {
    // console logging options
    "logCommands": true,
    "logInfo": true,
    "logWarn": true,
    "logError": true,
    "logDebug": true,
    "timeStamps": true
  },
  "MessageHandler": {
    "defaultPrefixes": [
      // array of prefix(es) that are always enabled
      //
      // special use-case (also applies to prefixes key):
      // "mention" is an @mention of the bot
    ],
    "prefixes": [
      // default bot prefix(es), replaced by the prefix set by the guild
    ],
    "userRestricted": [
      // array of user IDs who can't use any commands
      // probably for testing purposes because this is hardcoded and honestly
      // a bit of an ass to change
    ]
  },
  "Owners":
  [
    // array of user IDs that have full control of bot
    // not actually used for anything at the moment
    // (though this can be used in middleware.js)
  ],
  "Token": "your bot token here"
}
```
