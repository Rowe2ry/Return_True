const express = require('express'); // send and receive data through custom api routes
const session = require('express-session'); // will use for authentication
const exphbs = require('express-handlebars'); // template engine for dynamic HTML
const routes = require('./controllers'); // go to my custom routes to separate concerns
const connection = require('./config/connection'); // use the configuration file to get into the database using the credentials in the ENV
const path = require('path');

const hbs = exphbs.create({}); // express handlebars docs say to do this

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();

const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json()); // read and write to JSON: true
app.use(express.urlencoded({ extended: true })); // allow URL info to be parsed in JS
app.use(express.static(path.join(__dirname, 'public'))); // allow relative pathing

app.use(session({
    secret: 'Dont tell anyone',
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: connection
    })
}));

app.use(routes);

connection.sync({ force: false }). then(() => {
    app.listen(PORT, () => {
        console.log(`server now listening at http://localhost:${PORT}`);
    })
});