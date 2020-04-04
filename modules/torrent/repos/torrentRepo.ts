import { ITorrentRepo } from "./interfaces";
import { ITorrentClient } from "./interfaces/ITorrentClient";
import { injectable, inject } from "tsyringe";
const { CATEGORY } = require("rarbg-api");

@injectable()
export class TorrentRepo implements ITorrentRepo {
  constructor(
    @inject("ITorrentClient") private torrentClient: ITorrentClient
  ) {}
  public async findMovies(
    query: string,
    limit: 25 | 50 | 100 = 25
  ): Promise<any> {
    const movies = await this.torrentClient.search(query, {
      limit: limit,
      category: CATEGORY["4K"],
      sort: "seeders",
      format: "json_extended",
    });
    return movies;
  }
}
