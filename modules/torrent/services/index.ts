import { TorrentRepo } from "../repos";
import { MovieService as MovieServiceClass } from "./movieService";

const MovieService = new MovieServiceClass(TorrentRepo);

export { MovieService };
