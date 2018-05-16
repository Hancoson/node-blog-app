/**
 * @Author: Guoxing.han 
 * @Date: 2018-04-28 16:14:42 
 * @version 0.0.1 
 */

const Articles = require('./../dto/Articles')
const config = require('./../../config/config')

const Schemas = function () {
  let schemaMap = {};
  schemaMap[config.tableNameArticle] = Articles;

  return schemaMap
}

module.exports = new Schemas()