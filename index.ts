import { TorrentModule } from "./modules";

const movieController1 = TorrentModule.MovieController;

movieController1
  .getMovieInTopQuality("")
  .then((movies) => {
    console.log(movies);
  })
  .catch(console.error);
