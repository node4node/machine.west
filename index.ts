import { TorrentModule } from "./modules";
require("dotenv").config();
const movieController1 = TorrentModule.MovieController;
const CURRENT_ENVIRONMENT = process.env.ENVIRONMENT;

console.log(`Current environment: [ ${CURRENT_ENVIRONMENT} ] `);
movieController1
  .getMovieInTopQuality("")
  .then((movies) => {
    console.log(movies);
  })
  .catch(console.error);
