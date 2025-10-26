enum Environment {
  LOCAL = 1,
  DEVELOPMENT = "DEV",
  STAGING = 2,
  PRODUCTION
}

function runTests(environmentStatus: Environment){
  console.log(`The tests are running in the ${environmentStatus} environment.`);
}

runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);

