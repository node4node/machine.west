export interface ITorrentRepo {
  getByImdbId(id: string): Promise<any>;
  findMovies(query: string, limit?: 25 | 50 | 100): Promise<any>;
}
