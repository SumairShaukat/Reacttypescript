import { shuffle } from "lodash";
import data from "./data";

export type CharacterType = {
  name: string;
  alignment: string;
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
  total: number;
};

export const fetchCharacter = (): Promise<CharacterType> => {
  const [characters] = shuffle(data);
  return Promise.resolve(characters);
};
