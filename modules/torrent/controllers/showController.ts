import { inject, injectable } from "tsyringe";
import { CoreController } from "./coreController";
import { QUALITIES } from "../../../utils";
import { ShowDTO } from "../dtos";
import { IShowService } from "../services/interfaces";
import { ShowMAPPER as MAPPER } from "../mappers/showMapper";

@injectable()
export class ShowController extends CoreController {
  public async getShowByImdbId(id: string): Promise<ShowDTO[]> {
    this.log(`getShowByImdbId() ID: ${id}`);
    const show_array = await this.showService.getShowByImdbId(id);
    return show_array.map(MAPPER.toDTO);
  }
  constructor(@inject("IShowService") private showService: IShowService) {
    super();
  }

  public async getShow(
    keyword: string,
    quality: QUALITIES = QUALITIES["1080p"]
  ): Promise<ShowDTO> {
    this.log(`getShow() Keyword: ${keyword} Quality: ${quality}`);
    const show = await this.showService.getShow(keyword, quality);
    return MAPPER.toDTO(show);
  }
}
