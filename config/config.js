require('dotenv').config()
module.exports =
{
  "secret" : process.env.SECRET_KEY,
  "development": {
    "username": process.env.PG_USERNAME || '',
    "password": process.env.PG_PASSWORD || '',
    "database": process.env.PG_DATABASE || 'qrbackenddev',
    "host": process.env.PG_HOSTNAME || '',
    "dialect": "postgres",
    "logging": false
  },
  "production": {
    "username": process.env.RDS_USERNAME || '',
    "password": process.env.RDS_PASSWORD || '',
    "database": process.env.RDS_DB_NAME || 'qrbackenddev',
    "host": process.env.RDS_HOSTNAME || '',
    "port": process.env.RDS_PORT || '5432',
    "dialect": "postgres"
  }
}
