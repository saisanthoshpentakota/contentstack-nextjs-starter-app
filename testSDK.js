let GLOBAL_VARIABLE = undefined;

export function init() {
  console.log('init', GLOBAL_VARIABLE);
  const randomID = Math.random().toString(36).substring(7);
  GLOBAL_VARIABLE = randomID;
}

export function reset() {
  GLOBAL_VARIABLE = undefined;
}

export function getGlobalVariable() {
  return GLOBAL_VARIABLE;
}

export async function someAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('someAsync');
    }, 100);
  });
}