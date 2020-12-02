(async () => {
    try {
        const { promisify } = require("util");
        const { readdir } = require("fs");
        const readdirAsync = promisify(readdir);
        const path = require("path");
        const { createClient } = require("contentful-management");
        const { default: runMigration } = require("contentful-migration/built/bin/cli");

        // utility fns
        const getVersionOfFile = (file) => file.replace(".js", "").replace(/_/g, ".");
        const getFileOfVersion = (version) => version.replace(/\./g, "_") + ".js";

        //
        // Configuration variables
        //
        const [, , SPACE_ID, ENVIRONMENT_INPUT, CMA_ACCESS_TOKEN] = process.argv;
        const MIGRATIONS_DIR = path.join(".", "migrations");

        var ENVIRONMENT_ID = "";

        let environment;
        console.log("Running with the following configuration");
        console.log(`SPACE_ID: ${SPACE_ID}`);

    } catch (e) {
        console.error(e);
        process.exit(1);
    }
  })();
  
  
  
  function getStringDate(){
    var d = new Date();
    function pad(n){return n<10 ? '0'+n : n}
    return d.toISOString().substring(0, 10)
    + '-'
    + pad(d.getUTCHours())
    + pad(d.getUTCMinutes())
  }
