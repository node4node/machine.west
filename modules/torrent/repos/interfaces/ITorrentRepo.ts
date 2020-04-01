export interface ITorrentRepo {
  findMovies(query: string, limit?: number): Promise<any>;
}
