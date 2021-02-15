//Интерфейс планеты и каталога.

import { ResidentModels } from "./Residents";

export interface PlanetModel {
  id: number;
  name: string;
  climate: string;
  population: number;
  rotation_period: number;
  diameter: number;
  gravity: string;
  terrain: string;
  residents: string[];
  people: ResidentModels[];
  url: string;
  img: string;
}

export interface ApiPlanetsModel {
  count: number,
	next: string;
	previous: string;
	results: PlanetModel[];
}
