import { Movie } from "../models/movie";
import { MovieDTO } from "../dtos";

export class MovieMAPPER {
  public static toDTO(x: Movie): MovieDTO {
    return {
      category: x.category,
      downloadLink: x.download,
      imdb_id: <string>x.episode_info.imdb,
      moviedb_id: <string>x.episode_info.themoviedb,
      size: x.size,
      title: x.title,
    };
  }

  public static toDomain(x: any): Movie {
    return Movie.create(x);
  }
  toPersistence(x: Movie) {
    throw new Error("Method not implemented.");
  }
}
