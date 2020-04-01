export interface ITorrentClient {
  enablePublicProviders(): void;
  search<T>(query: string, category: string, limit?: number): Promise<T[]>;
  disableAllProviders(): void;
  enableProvider(provider: string): void;
}
