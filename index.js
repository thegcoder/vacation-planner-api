const express = require('express');
const app = express();

const routes = require('./routes');
const swaggerDocs = require('./docs');

const controllers = require('./controllers');

app.use(express.urlencoded({extended: true}));

app.use(express.json());

routes(app, controllers);
swaggerDocs(app);

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
