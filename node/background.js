/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4,
maxerr: 50, node: true */
/*global $, define, brackets */

(function () {
    'use strict';
    console.log('running karma with cwd: ', process.cwd());
    var server = require('karma').server;
    var args = JSON.parse(process.argv[2]);
    var data = {
//        'singleRun': true,
        configFile: args.configFile || 'karma.conf.js',
        'reporters': ['brackets'],
        'colors': false
    };
    try {
        server.start(data);
    } catch (e) {
        console.error("ERROR WHILE STARTING KARMA SERVER", e);
    }
}());