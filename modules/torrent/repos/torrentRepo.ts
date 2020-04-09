import { ITorrentRepo } from "./interfaces";
import { ITorrentClient } from "./interfaces/ITorrentClient";
import { injectable, inject } from "tsyringe";
import { Movie } from "../models/movie";
import { MovieMAPPER as MAPPER } from "../mappers/movieMapper";
const { CATEGORY } = require("rarbg-api");

@injectable()
export class TorrentRepo implements ITorrentRepo {
  constructor(
    @inject("ITorrentClient") private torrentClient: ITorrentClient
  ) {}
  async getByImdbId(id: string): Promise<Movie[]> {
    const movies = await this.torrentClient.search(
      id,
      {
        format: "json_extended",
        sort: "seeders",
      },
      "imdb"
    );

    return movies.map(MAPPER.toDomain);
  }
  public async findMovies(
    query: string,
    limit: 25 | 50 | 100 = 25
  ): Promise<Movie[]> {
    const movies = await this.torrentClient.search(query, {
      limit: limit,
      category: CATEGORY["MOVIES"],
      sort: "seeders",
      format: "json_extended",
    });
    return movies.map(MAPPER.toDomain);
  }
}
