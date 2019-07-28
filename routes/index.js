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

      console.log(`Get all ${type}`);

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
  *      consumes:
  *        - application/json
  *      parameters:
  *        - name: type
  *          description: The destination or user name
  *          in: path
  *          type: string
  *        - name: name
  *          description: The destination or user
  *          in: body
  *          schema:
  *            type: object
  *            properties:
  *              name:
  *                type: string
  *              email:
  *                type: string
  *      responses:
  *        200:
  *          description: all values
  */
  app.post('/api/create/:type', async function (req, res) {
      let type = req.params.type;
      let data = req.body;
      let value = {};

      console.log(data);

      try {
        value = await controllers.create(type, data);
      } catch (error) {
        value = error;
      }

      res.json(value);
  });

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
