import { Movie } from "../../models/movie";

export interface ITorrentRepo {
  getByImdbId(id: string): Promise<Movie[]>;
  findMovies(query: string, limit?: 25 | 50 | 100): Promise<Movie[]>;
}
