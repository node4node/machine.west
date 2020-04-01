import "reflect-metadata";
import { container } from "tsyringe";
import * as SERVICES from "./services";
import * as REPOSITORIES from "./repos";
import * as CONTROLLERS from "./controllers";
const TorrentClient = require("torrent-search-api");

TorrentClient.enablePublicProviders();

container.register("ITorrentClient", {
  useValue: TorrentClient,
});

container.register("ITorrentRepo", {
  useClass: REPOSITORIES.TorrentRepo,
});

container.register("IMovieService", {
  useClass: SERVICES.MovieService,
});

const MovieController = container.resolve(CONTROLLERS.MovieController);

export { MovieController };
