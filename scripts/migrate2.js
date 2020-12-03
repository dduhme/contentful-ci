#!/usr/bin/env node

(async () => {
    try {
        const { promisify } = require("util");
        const { readdir } = require("fs");
        const readdirAsync = promisify(readdir);
        const path = require("path");
        const { createClient } = require("contentful-management");
        const { default: runMigration } = require("contentful-migration/built/bin/cli");

        //
        // Configuration variables
        //
        const [, , SPACE_ID, ENVIRONMENT_INPUT, CMA_ACCESS_TOKEN] = process.argv;
        const MIGRATIONS_DIR = path.join(".", "migrations");

        const client = createClient({
            accessToken: CMA_ACCESS_TOKEN,
        });
        const space = await client.getSpace(SPACE_ID);

        var ENVIRONMENT_ID = "";

        let environment;
        console.log("Running with the following configuration");
        console.log(`SPACE_ID: ${SPACE_ID}`);

        // ---------------------------------------------------------------------------
        if (ENVIRONMENT_INPUT == "master") {
            console.log(`Running on ${ENVIRONMENT_INPUT}.`);
            ENVIRONMENT_ID = `${ENVIRONMENT_INPUT}-`.concat(getStringDate());
        } else {
            console.log(`Running on branch ${ENVIRONMENT_INPUT}.`);
            ENVIRONMENT_ID = ENVIRONMENT_INPUT;
        } 
        console.log(`ENVIRONMENT_ID: ${ENVIRONMENT_ID}`);

        // ---------------------------------------------------------------------------
        console.log("Export contente model");

        // ---------------------------------------------------------------------------
        console.log("Create new master environment");

        // ---------------------------------------------------------------------------
        console.log("Import content model to target environment");

        // ---------------------------------------------------------------------------
        console.log("Update master alias");


    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();

function getStringDate() {
    var d = new Date();
    function pad(n) {
        return n < 10 ? "0" + n : n;
    }
    return (
        d.toISOString().substring(0, 10) +
        "-" +
        pad(d.getUTCHours()) +
        pad(d.getUTCMinutes())
    );
}