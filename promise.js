// old way to do callback
function getTempCallback(location, callback) {
  callback(undefined, 74);
  callback('City not found');
}

getTempCallback('Houston', function(err, temp) {
  if(err) {
    getTempCallback
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(64);
      reject('The city wasn\'t found');
    }, 1000);
  });
}

getTempPromise('San Antonio').then(function(temp) {
  console.log('promise success', temp);
}, function() {
  console.log('promise error', err);
});
