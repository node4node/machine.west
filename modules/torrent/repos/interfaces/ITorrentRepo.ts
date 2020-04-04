export interface ITorrentRepo {
  findMovies(query: string, limit?: 25 | 50 | 100): Promise<any>;
}
