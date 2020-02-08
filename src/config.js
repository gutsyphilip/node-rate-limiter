import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const loadEnvVariable = envName => {
  const env = process.env[envName];
  if (env == null) {
    throw new Error(`Environment variable => ${envName} is undefined.`);
  }
  return env;
};

const config = {
  APP: {
    PORT: loadEnvVariable('PORT') || 8080
  },
  DB: {
    URL: loadEnvVariable('MONGODB_URI')
  }
};

export default config;
