const express = require('express');
const sequelize = require('sequelize');
const mysql = require('mysql2');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

const hbs = exphbs.create({});

const app = express();

const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.AsyncQueueError({ force: false }). then(() => {
    app.listen(PORT, () => {
        console.log(`server now listening at http://localhost:${PORT}`);
    })
});