import shell from 'shelljs'

function openSpotify (search?: string) {
  shell.exec(`xdg-open https://open.spotify.com/${search ? search : ''}`)
}

export default openSpotify