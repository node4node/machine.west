import { Show } from "../models";
import { ShowDTO } from "../dtos";

export class ShowMAPPER {
  public static toDTO(x: Show): ShowDTO {
    return {
      category: x.category,
      downloadLink: x.download,
      size: x.size,
      title: x.title,
      imdb_id: x.episode_info?.imdb,
    };
  }

  public static toDomain(x: any): Show {
    return Show.create(x);
  }
  toPersistence(x: Show) {
    throw new Error("Method not implemented.");
  }
}
