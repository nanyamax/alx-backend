import { createClient } from 'redis';

const redisConfig = {
  host: 'localhost',
  port: '6379',
};

const client = createClient(redisConfig)
  .on('connect', () => {
    console.log('Redis client connected to the server');
  })
  .on('error', (err) =>
    console.log('Redis client not connected to the server: ', err)
  );
