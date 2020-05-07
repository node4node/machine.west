import { TorrentModule } from "./modules";
require("dotenv").config();
import { LOGGER } from "./utils";
const showController = TorrentModule.ShowController;
const CURRENT_ENVIRONMENT = process.env.ENVIRONMENT;

LOGGER.info(`Current environment: [ ${CURRENT_ENVIRONMENT} ] `, {
  context: "Index.ts",
});

showController
  .getShowByImdbId("tt2442560")
  .then((show) => {
    console.log(show);
  })
  .catch(console.error);
