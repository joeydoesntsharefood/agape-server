import { optionsServices } from "../doIt/constants";
import openSpotify from "../doIt/openSpotify";

function getOptions (service: any) {
  switch (service) {
    case 'openSpotify':
      return optionsServices.spotify
    default:
      return [] 
  }
}

export default getOptions