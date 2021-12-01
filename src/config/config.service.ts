import { TypeOrmModuleOptions } from '@nestjs/typeorm';

//eslint-disable-next-line
require('dotenv').config();

class ConfigService {
  private env: Record<string, string | undefined>;
  constructor(env) {
    this.env = env;
  }

  private getValueByKey(key: string, throwError?: boolean) {
    const val = this.env[key];
    if (!val && throwError) throw new Error('Key not found!');
    return val;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValueByKey(k, true));
    return this;
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.getValueByKey('POSTGRES_HOST'),
      port: Number(this.getValueByKey('POSTGRES_PORT')),
      database: this.getValueByKey('POSTGRES_DATABASE'),
      username: this.getValueByKey('POSTGRES_USER'),
      entities: ['dist/**/*.entity.js'],
      password: this.getValueByKey('POSTGRES_PASSWORD'),
      synchronize: true,
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'POSTGRES_HOST',
  'POSTGRES_PORT',
  'POSTGRES_DATABASE',
  'POSTGRES_USER',
]);

export default configService;
