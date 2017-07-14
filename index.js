const Douxieme = require('douxieme')
    , Options = require('./options.json')
    , middleware = require('./middleware')

var options_parsed = {};

const Bot = new Douxieme(Options);

Bot.loadCommands(`${__dirname}/commands/`);
Bot.loadEvents(`${__dirname}/events/`);
Bot.loadMiddleware(middleware)

Bot.connect();
