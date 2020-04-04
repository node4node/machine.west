interface ListOptions {
  category?: number[];
  limit?: 25 | 50 | 100;
  sort?: "last" | "seeders" | "leechers";
  min_seeders?: number;
  min_leechers?: number;
  format?: "json" | "json_extended";
  ranked?: number;
}

type SearchType = "imdb" | "tvdb" | "themoviedb" | "tvrage";

interface SearchOptions {
  keyword: string;
  options?: ListOptions;
  type?: SearchType;
}

export interface ITorrentClient {
  enablePublicProviders(): void;
  // search<T>(query: string, category: string, limit?: number): Promise<T[]>;
  disableAllProviders(): void;
  enableProvider(provider: string): void;

  // rarbg_api methods
  list(options: ListOptions): Promise<object[]>;
  search(
    keyword: string,
    options?: ListOptions,
    type?: SearchType
  ): Promise<object[]>;
}
