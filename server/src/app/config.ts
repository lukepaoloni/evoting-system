import * as dotenv from 'dotenv';
import {
  inject,
  toBoolean,
  toString,
  toNumber,
  toArray,
  toObject,
} from 'typescript-stringcaster';
dotenv.config();
const source = process.env;

class Config {
  @inject({ cast: toNumber, defaultValue: 4000, source })
  APP_PORT: number;

  @inject({ cast: toString, defaultValue: 'asecret', source })
  JWT_SECRET_KEY: string;

  @inject({ cast: toString, source })
  SESSION_EXPIRES_IN: string;
}

export default new Config();
