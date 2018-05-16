/**
 * @Author: Guoxing.han 
 * @Date: 2018-04-11 11:48:10 
 * @version 0.0.1 
 */
const log4js = require('log4js')

log4js.configure({
  appenders: {
    out: { type: 'console' },
    file: {
      type: "dateFile",
      filename: 'logs/info.log',
      pattern: "_yyyy-MM-dd.log",
      alwaysIncludePattern: true,
    }
  },
  categories: {
    logInfo: { appenders: ['file'], level: 'info' },
    default: { appenders: ['out'], level: 'info' }
  },
  replaceConsole: true
});
const logger = log4js.getLogger('logInfo');

module.exports = {
  express: log4js.connectLogger(logger, { level: 'info' })
};