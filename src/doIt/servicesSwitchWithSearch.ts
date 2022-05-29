import openSpotify from "./openSpotify"

function servicesSwitchWithSearch (data: { service: string, code: string, search: string }) {
  switch (data.service) {
    case 'openSpotify':
      openSpotify(data.search)
      break
    default:
      console.log('Ainda n sei fazer isso')
      break
  }
}

export default servicesSwitchWithSearch