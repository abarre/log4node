var log4node = require('log4node'),
    log = new log4node.Log4Node('warning', 'test.log');

log.setPrefix("[%l - toto] ");

log.warning("titi1");

setTimeout(function() {
  log.error("titi2")
}, 2000);


