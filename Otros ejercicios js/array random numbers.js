function generateRandom1000() {
  return Math.ceil( (Math.random())*1000 );
}

var myArray = Array(10)
                .fill(0)
                .map( function() {
                  return generateRandom1000();
                })