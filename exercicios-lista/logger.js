const { createLogger, transports, format } = require('winston');

module.exports = createLogger({
  format: format.combine(
    format.simple(),
    format.timestamp(),
    format.printf(
      (info) =>
        `[${info.timestamp}] ${info.level.toUpperCase()} ${info.message}`
    )
  ),
  transports: [
    new transports.File({
      maxsize: 5120000,
      maxFiles: 5,
      filename: `${__dirname}/logs/exercicios.log`,
    }),
    new transports.Console({
      level: 'debug',
    }),
  ],
});
