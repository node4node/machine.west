import { ITorrentRepo } from "./interfaces";
import { ITorrentClient } from "./interfaces/ITorrentClient";
import { injectable, inject } from "tsyringe";

@injectable()
export class TorrentRepo implements ITorrentRepo {
  constructor(
    @inject("ITorrentClient") private torrentClient: ITorrentClient
  ) {}
  public async findMovies(query: string, limit: number = 30): Promise<any> {
    console.log(`** [TorrentRepo] findMovies() **\n
    query: '${query}'  limit: ${limit}`);
    const movies = await this.torrentClient.search<any>(query, "Movies", limit);
    return movies;
  }
}
