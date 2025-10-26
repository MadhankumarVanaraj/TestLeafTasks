var Environment;
(function (Environment) {
    Environment[Environment["LOCAL"] = 1] = "LOCAL";
    Environment["DEVELOPMENT"] = "DEV";
    Environment[Environment["STAGING"] = 2] = "STAGING";
    Environment[Environment["PRODUCTION"] = 3] = "PRODUCTION";
})(Environment || (Environment = {}));
function runTests(environmentStatus) {
    console.log("The tests are running in the ".concat(environmentStatus, " environment."));
}
runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
