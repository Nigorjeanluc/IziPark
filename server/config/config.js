import dotenv from 'dotenv';

dotenv.config();

const generateCredentials = (database, host) => ({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database,
  host,
  dialect: 'postgres'
});

const development = generateCredentials(process.env.DEVELOP_DB_NAME, process.env.HOST);
const test = generateCredentials(process.env.TEST_DB_NAME, process.env.HOST);
const production = generateCredentials(process.env.PRODUCTION_DB_NAME, process.env.HOST);

export default {
  development,
  test,
  production
};

export {
  development,
  test,
  production
};
