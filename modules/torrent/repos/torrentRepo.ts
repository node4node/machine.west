import { ITorrentRepo } from "./interfaces";
import { ITorrentClient } from "./interfaces/ITorrentClient";
import { injectable, inject } from "tsyringe";
import { Movie } from "../models/movie";
import { MovieMAPPER } from "../mappers/movieMapper";
import { ShowMAPPER } from "../mappers/showMapper";
import { Show } from "../models";
const { CATEGORY } = require("rarbg-api");

@injectable()
export class TorrentRepo implements ITorrentRepo {
  constructor(
    @inject("ITorrentClient") private torrentClient: ITorrentClient
  ) {}
  public async findShows(
    keyword: string,
    limit?: 25 | 50 | 100 | undefined
  ): Promise<Show[]> {
    const shows = await this.torrentClient.search(keyword, {
      limit: limit,
      category: CATEGORY["TV"],
      sort: "seeders",
      format: "json_extended",
    });
    return shows.map(ShowMAPPER.toDomain);
  }
  async getByImdbId(id: string): Promise<Movie[]> {
    const movies = await this.torrentClient.search(
      id,
      {
        format: "json_extended",
        sort: "seeders",
      },
      "imdb"
    );

    return movies.map(MovieMAPPER.toDomain);
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
    return movies.map(MovieMAPPER.toDomain);
  }
}
