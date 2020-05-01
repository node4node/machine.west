import { QUALITIES } from "../../../../utils";
import { Show } from "../../models";

export interface IShowService {
  getShow(keyword: string, movie_quality: QUALITIES): Promise<Show>;
}
