import { TorrentModule } from "../modules";
import { MovieController } from "../modules/torrent/controllers";

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
    console.log(result[0]);
    const { title } = result[0];
    expect(title).toMatch("Avenge");
  });
});
