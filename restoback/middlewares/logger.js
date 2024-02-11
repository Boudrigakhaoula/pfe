const express = require('express');
const router = express.Router();
const chalk = require('chalk');
const moment = require('moment');

const logger = (req, res, next) => {
    // get user ip, method, url, user Agent, req,status
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const method = req.method;
    const url = req.url;
    const userAgent = req.headers['user-agent'];
    const status = res.statusCode;

    // Color Time on Gray, Method on White, URL on White, Status based on the status, User Agent on Magenta, IP on gray
    const time = chalk.gray(new Date().toLocaleTimeString());
    const methodColor = chalk.white(method);
    const urlColor = chalk.white(url);
    const statusColor = status >= 500 ? chalk.red(status) : status >= 400 ? chalk.yellow(status) : status >= 300 ? chalk.cyan(status) : chalk.green(status);

    // Get the device type from the user agent
    // const deviceType = userAgent.match(/\(([^)]+)\)/)[1].split(';')[0];
    // const deviceTypeColor = chalk.magenta(deviceType);

    const ipColor = chalk.gray(ip);

    console.log(`[${time}] ${methodColor} ${urlColor} ${statusColor} ${ipColor}`);

    next();
};

module.exports = logger;
