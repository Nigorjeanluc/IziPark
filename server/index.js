import express from 'express';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';

import apiDocumentation from '../swagger.json';
import allRoutes from './routes/allRoutes';

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const basePath = '/api';
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

app.use(basePath, allRoutes);

app.use(`${basePath}/documentation`, swaggerUi.serve, swaggerUi.setup(apiDocumentation));

app.get('**', (req, res) => {
  res.status(400).send({
    status: 400,
    message: `Hey !! You are Welcome to BareFoot Nomad, Use the link below its documentation of application`,
    data: `/api/documentation`
  });
});
export default app;
