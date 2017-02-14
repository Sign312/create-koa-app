#!/usr/bin/env node

let fileCmd = require('file-cmd')
let path = require('path')

let cwdPath = process.cwd()

let appName = process.argv[2]

fileCmd.cp(
    path.join(__dirname, 'koa-base-boilerplate'),
    cwdPath,
    appName
).then(function () {
    console.log('\n' + appName + ' have been created\n')
    console.log(
        `you can type 'cd ${appName} && npm install' to build your app.
then, you can type 'node app.js' to start your app for the first time.
happy hacking ^.^`
    )
}).catch(function (e) {
    console.error(e)
})