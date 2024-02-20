/**
 * types
 */
import {
  CardOwnerDescription,
  CardOwnerSubheadline,
} from "../../types/CardOwner.types";

interface CardOwner {
  name: string;
  description: CardOwnerDescription;
  subHeadline: CardOwnerSubheadline;
  benefits: string[];
  image: string;
  btnText: string;
}

export { CardOwner };
