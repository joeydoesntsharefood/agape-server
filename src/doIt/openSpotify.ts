import shell from 'shelljs'
import { format } from '../resources/format'

function openSpotify (search?: string) {
  shell.exec(`xdg-open https://open.spotify.com/${search ? `search/${format.forSearch(search)}` : ''}`)
}

export default openSpotify