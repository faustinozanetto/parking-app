import type { Config } from './config.interface';

const defaultConfig: Config = {
  nest: {
    port: 4000,
  },
  cors: {
    enabled: true,
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
};

export default (): Config => defaultConfig;
