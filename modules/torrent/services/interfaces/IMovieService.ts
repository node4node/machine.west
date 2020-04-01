export interface IMovieService {
  getMovieIn4k(movieTitle: string): Promise<any[]>;
}
