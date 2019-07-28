const routes = (app, controllers) => {
  /**
  * @swagger
  *
  * /api/all/{type}:
  *    get:
  *      description: View all destinations or users
  *      produces:
  *        - application/json
  *      parameters:
  *        - name: type
  *          description: The destination or user name
  *          in: path
  *          type: string
  *      responses:
  *        200:
  *          description: all values
  */
  app.get('/api/all/:type', async function (req, res) {
      let type = req.params.type;
      let value = {};

      try {
        value = await controllers.all(type);
      } catch (error) {
        value = error;
      }

      res.json(value);
  });
  /**
  * @swagger
  *
  * /api/create/{type}:
  *    post:
  *      summary: Creates destinations or users
  *      produces:
  *        - application/json
  *      parameters:
  *        - name: type
  *          description: The destination or user name
  *          in: path
  *          type: string
  *        - name: data
  *          description: The destination or user
  *          in: body
  *      responses:
  *        200:
  *          description: a new destination or user
  */
  app.post('/api/create/:type', async function (req, res) {
      let type = req.params.type;
      let data = req.body;
      let value = {};

      try {
        value = await controllers.create(type, data);
      } catch (error) {
        value = error;
      }

      res.json(value);
  });
  /**
  * @swagger
  *
  * /api/read/{type}/{id}:
  *    get:
  *      description: View all destinations or users
  *      produces:
  *        - application/json
  *      parameters:
  *        - name: type
  *          description: The destination or user name
  *          in: path
  *          type: string
  *        - name: id
  *          description: The id of the destination or user
  *          in: path
  *          type: string
  *      responses:
  *        200:
  *          description: Get a destination or user
  */
  app.get('/api/read/:type/:id', async function (req, res) {
      let type = req.params.type;
      let id = req.params.id;
      let value = {};

      console.log(`Read type ${type} with id ${id}`);

      try {
        value = await controllers.read(type, id);
      } catch (error) {
        value = error;
      }

      res.json(value);
  });
  /**
  * @swagger
  *
  * /api/update/{type}/{id}:
  *    post:
  *      summary: Creates destinations or users
  *      produces:
  *        - application/json
  *      parameters:
  *        - name: type
  *          description: The destination or user name
  *          in: path
  *          type: string
  *        - name: id
  *          description: The destination or user id
  *          in: path
  *          type: string
  *        - name: name
  *          description: The destination or user
  *          in: body
  *      responses:
  *        200:
  *          description: a new destination or user
  */
  app.post('/api/update/:type/:id', async function (req, res) {
      let type = req.params.type;
      let id = req.params.id;
      let data = req.body;
      let value = {};

      console.log(`Update type ${type} with id ${id}`);

      try {
        value = await controllers.update(type, id, data);
      } catch (error) {
        value = error;
      }

      res.json(value);
  });
  /**
  * @swagger
  *
  * /api/delete/{type}/{id}:
  *    post:
  *      summary: Creates destinations or users
  *      produces:
  *        - application/json
  *      parameters:
  *        - name: type
  *          description: The destination or user name
  *          in: path
  *          type: string
  *        - name: id
  *          description: The destination or user id
  *          in: path
  *          type: string
  *        - name: name
  *          description: The destination or user
  *          in: body
  *      responses:
  *        200:
  *          description: a new destination or user
  */
  app.post('/api/delete/:type/:id', async function (req, res) {
      let type = req.params.type;
      let id = req.params.id;
      let value = {};

      console.log(`Get all ${type}`);

      try {
        value = await controllers.deleter(type, id);
      } catch (error) {
        value = error;
      }

      res.json(value);
  });
}

module.exports = routes;
