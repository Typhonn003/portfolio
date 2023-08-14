interface Links {
  demonstration: string | null;
  repository: string;
}

export interface ProjectData {
  id: number;
  img: string;
  name: string;
  description: string;
  techs: string[];
  links: Links;
}
