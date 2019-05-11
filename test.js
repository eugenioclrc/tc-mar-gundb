setTimeout(function(){
  window.testgun = Gun('https://guntest.herokuapp.com/gun'); // open idle connection
  window.testgun.get('test').on(function(data){ testgun.count = (testgun.count || 0) + 1 }); // read 1 value, do nothing
}, 5000); // wait 5 seconds to not interfere with site load
