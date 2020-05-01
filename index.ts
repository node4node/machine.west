import { TorrentModule } from "./modules";
require("dotenv").config();
import { LOGGER } from "./utils";
const showController = TorrentModule.ShowController;
const CURRENT_ENVIRONMENT = process.env.ENVIRONMENT;

LOGGER.info(`Current environment: [ ${CURRENT_ENVIRONMENT} ] `, {
  context: "Index.ts",
});

showController
  .getShow("The Outsider")
  .then((show) => {
    console.log(show);
  })
  .catch(console.error);
