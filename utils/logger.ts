import * as winston from "winston";

const appLogFormat = winston.format.printf((info) => {
  return `${info.timestamp} [${info.context}] ${info.level} : ${info.message}`;
});

const LOGGER: winston.Logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(winston.format.timestamp(), appLogFormat),
  transports: [
    new winston.transports.File({
      level: "info",
      dirname: "logs",
      filename: "general.log",
    }),
  ],
});

export { LOGGER };
