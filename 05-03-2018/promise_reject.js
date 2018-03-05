//PROMISE.REJECT
function resolved(result) {
  console.log('Resolved');
}

function rejected(result) {
  console.log(result);
}

Promise.reject(new Error('fail')).then(resolved, rejected);

