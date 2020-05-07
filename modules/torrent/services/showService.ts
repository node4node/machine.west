import { IShowService } from "./interfaces/IShowService";
import { ITorrentRepo } from "../repos/interfaces";
import { inject, injectable } from "tsyringe";
import { Show } from "../models";
import { QUALITIES } from "../../../utils";
import { inspect } from "util";
import { failsafe } from "../../../utils";

@injectable()
export class ShowService implements IShowService {
  constructor(@inject("ITorrentRepo") private repo: ITorrentRepo) {}
  public async getShowByImdbId(imbd_id: string): Promise<Show[]> {
    try {
      const shows = (await failsafe(
        this.repo.getByImdbId.bind(this.repo),
        imbd_id,
        "TV"
      )) as Show[];
      return shows;
    } catch (e) {
      console.error(
        `Experienced an error: ${inspect(e, false, 4, true)}\ngetShowByImdbId() ID ${imbd_id}`
      );
      throw e;
    }
  }

  public async getShow(keyword: string, quality: QUALITIES): Promise<Show> {
    let result = null;
    try {
      const shows = await failsafe<Show[]>(this.repo.findShows.bind(this.repo), keyword, 100); // await this._getShow(keyword);
      result = this.extractIdeal(shows, quality);
    } catch (error) {
      console.error(`Experienced an error: ${inspect(error, false, 4, true)}`);
      result = error;
    }
    return result;
  }

  private extractIdeal(shows: Show[], quality: QUALITIES): Show {
    let shows_of_certain_quality = shows.filter((x) => x.title.match(quality));
    shows_of_certain_quality = shows_of_certain_quality.sort((a, b) => a.size - b.size);
    const ideal_movie = shows_of_certain_quality[0];
    return ideal_movie;
  }
}
