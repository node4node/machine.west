import { TorrentModule } from "../modules";
import { MovieController } from "../modules/torrent/controllers";
import { QUALITIES } from "../utils";

describe("A MovieController", () => {
  let movieController: MovieController;
  beforeAll(() => {
    movieController = TorrentModule.MovieController;
  });
  test("Should return at least one movie", async () => {
    const result = await movieController.getMovieInTopQuality("Bank");
    expect(result.length).toBeGreaterThanOrEqual(1);
  });

  test("Should return movies with 'Avenge' in the title", async () => {
    const result = await movieController.getMovieInTopQuality("Avenge");
    expect(result.length).toBeGreaterThanOrEqual(1);
    const { title } = result[0];
    expect(title).toMatch("Avenge");
  });

  test("Should return movie with specified quality", async () => {
    const result = await movieController.getMovie(
      "Wolf Of Wall Street",
      QUALITIES["1080p"]
    );

    expect(result.title).toMatch("1080p");
  });

  test("Should return movie with imdb ID 'tt1598778'", async () => {
    const result = await movieController.getMovieByImdbId("tt1598778");
    const { imdb_id } = result;
    expect(imdb_id).toEqual<string>("tt1598778");
  });
});
