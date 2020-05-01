import { Movie } from "../../models/movie";
import { Show } from "../../models";

export interface ITorrentRepo {
  findShows(keyword: string, limit?: 25 | 50 | 100): Promise<Show[]>;
  getByImdbId(id: string): Promise<Movie[]>;
  findMovies(query: string, limit?: 25 | 50 | 100): Promise<Movie[]>;
}
