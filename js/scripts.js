if (navigator.serviceWorker) {
 
  navigator.serviceWorker.register('/service-worker.js')
 
  .then( function (registration) {
    console.log('Success!', registration.scope)
  }) 
  .catch( function(error) {
    console.log('Failure!', error)
  })

  console.log('All done!')
  
}
