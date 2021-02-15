//Интерфейс для человека.

export interface ResidentModels {
  id: number;
  name: string;
	height: number;
	mass: number;
	gender: string;
  url: string;
  func: getResidentInfo;
}

interface getResidentInfo {
  (id: number): void;
}
