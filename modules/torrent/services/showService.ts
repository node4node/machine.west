import { IShowService } from "./interfaces/IShowService";
import { ITorrentRepo } from "../repos/interfaces";
import { inject, injectable } from "tsyringe";
import { Show } from "../models";
import { QUALITIES } from "../../../utils";
import { inspect } from "util";
import retry from "retry";

@injectable()
export class ShowService implements IShowService {
  constructor(@inject("ITorrentRepo") private repo: ITorrentRepo) {}

  private _getShow(keyword: string) {
    return new Promise<Show[]>((resolve, reject) => {
      const operation = retry.operation({
        retries: 5,
      });

      operation.attempt(async () => {
        try {
          const shows = await this.repo.findShows(keyword, 100);
          return resolve(shows);
        } catch (error) {
          if (operation.retry(error)) {
            return;
          } else return reject(operation.mainError());
        }
      });
    });
  }

  public async getShow(keyword: string, quality: QUALITIES): Promise<Show> {
    let result = null;
    try {
      const shows = await this._getShow(keyword);
      result = this.extractIdeal(shows, quality);
    } catch (error) {
      console.error(`Experienced an error: ${inspect(error, false, 4, true)}`);
      result = error;
    }
    return result;
  }

  private extractIdeal(shows: Show[], quality: QUALITIES): Show {
    let shows_of_certain_quality = shows.filter((x) => x.title.match(quality));
    shows_of_certain_quality = shows_of_certain_quality.sort(
      (a, b) => a.size - b.size
    );
    const ideal_movie = shows_of_certain_quality[0];
    return ideal_movie;
  }
}
