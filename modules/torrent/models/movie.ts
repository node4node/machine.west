import { v4 as uuidv4 } from "uuid";
import { v4 } from "uuid/interfaces";

export interface MovieProperties {
  id: string;
  title: string;
  category: string;
  download: string;
  seeders: number;
  leechers: number;
  size: number;
  pubdate: string;
  episode_info: Partial<EpisodeInfo>;
  ranked: number;
  info_page: string;
}

export interface EpisodeInfo {
  imdb: string;
  themoviedb: string;
}

export class Movie {
  public get title(): string {
    return <string>this.props.title;
  }
  public set title(v: string) {
    this.props.title = v;
  }

  public get category(): string {
    return <string>this.props.category;
  }
  public set category(v: string) {
    this.props.category = v;
  }

  public get download(): string {
    return <string>this.props.download;
  }
  public set download(v: string) {
    this.props.download = v;
  }

  public get seeders(): number {
    return <number>this.props.seeders;
  }
  public set seeders(v: number) {
    this.props.seeders = v;
  }

  public get leechers(): number {
    return <number>this.props.leechers;
  }
  public set leechers(v: number) {
    this.props.leechers = v;
  }

  public get size(): number {
    return <number>this.props.size;
  }
  public set size(v: number) {
    this.props.size = v;
  }

  public get pubdate(): string {
    return <string>this.props.pubdate;
  }
  public set pubdate(v: string) {
    this.props.pubdate = v;
  }

  public get episode_info(): Partial<EpisodeInfo> {
    return <Partial<EpisodeInfo>>this.props.episode_info;
  }
  public set episode_info(v: Partial<EpisodeInfo>) {
    this.props.episode_info = v;
  }

  public get ranked(): number {
    return <number>this.props.ranked;
  }
  public set ranked(v: number) {
    this.props.ranked = v;
  }

  public get info_page(): string {
    return <string>this.props.info_page;
  }
  public set info_page(v: string) {
    this.props.info_page = v;
  }

  private defaultProperties: MovieProperties = {
    id: uuidv4(),
    title: "",
    category: "",
    download: "",
    seeders: 0,
    leechers: 0,
    size: 0,
    pubdate: "",
    episode_info: { imdb: "", themoviedb: "" },
    ranked: 0,
    info_page: "",
  };

  readonly id: string = "";

  private constructor(private props: Partial<MovieProperties>) {
    this.props = { ...this.defaultProperties, ...this.props };
  }

  public static create(props: Partial<MovieProperties>): Movie {
    return new Movie(props);
  }
}
