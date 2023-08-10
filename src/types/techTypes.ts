import { IconBaseProps } from "react-icons";

export interface TechData {
  [key: string]: {
    logo: React.ReactElement<IconBaseProps>;
    color: string;
    name: string;
  };
}
