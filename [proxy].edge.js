import {
  init,
  reset,
  someAsync,
} from './testSDK';

export default async function handler(request) {
  init();

  await someAsync();

  reset();

  return await fetch(request);
}
