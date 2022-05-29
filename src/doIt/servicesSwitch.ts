import openSpotify from "./openSpotify"

function servicesSwitch (service: { service: string }) {
  switch (service.service) {
    case 'openSpotify':
      openSpotify()
      break
    default:
      console.log('Ainda n sei fazer isso')
      break
  }
}

export default servicesSwitch