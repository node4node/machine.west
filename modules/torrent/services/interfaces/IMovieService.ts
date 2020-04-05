export interface IMovieService {
  getMovieByImdbId(id: string): Promise<any>;
  getMovieIn4k(movieTitle: string): Promise<any[]>;
}
