import common from "../utils/common";

export interface IHandlebars {
  context: typeof common;
  templateSourcePath: string;
  tagName?: string;
}

export interface Game {
  team_home_id: string;
  team_home_name: string;
  team_home_score: number;
  team_away_id: string;
  team_away_name: string;
  team_away_score: number;
}

export interface Round {
  round: number;
  games: Game[];
}

export type Matches = Round[];
