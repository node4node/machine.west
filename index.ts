import { TorrentModule } from "./modules";
require("dotenv").config();
import { LOGGER } from "./utils";
const movieController1 = TorrentModule.MovieController;
const CURRENT_ENVIRONMENT = process.env.ENVIRONMENT;

LOGGER.info(`Current environment: [ ${CURRENT_ENVIRONMENT} ] `, {
  context: "Index.ts",
});
movieController1
  .getMovieInTopQuality("Avengers")
  .then((movies) => {
    console.log(movies);
  })
  .catch(console.error);
