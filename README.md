# PlaylistExtractor
Software to download a whole playlist from youtube created by the author in details section. Based on [PlaylistDownloader](https://github.com/ArielAleksandrus/PlaylistDownloader) with some link queries changes.

This software may not work in most cases, as the author must have included youtube links to the description, so it is recommended to check [PlaylistDownloader](https://github.com/ArielAleksandrus/PlaylistDownloader)

### Requirements:
- [nodejs](https://nodejs.org/)
- [youtube-dl](https://github.com/rg3/youtube-dl/)
- [cheerio](https://github.com/cheeriojs/cheerio) (already included)

### Usage:
1. Find a youtube video where the author created a playlist in details section (e.g. [this link](https://www.youtube.com/watch?v=7ZeINKopgFw&lc))
2. Copy the URL
3. Execute PlaylistDownloader with the link as the parameter, wrapped by double quotes: `./downloadplaylist.sh "<link here>" <options>`
4. Check the output to see if there are any errors. Also, check the folder "YoutubePlaylist" in your Videos folder, in your home directory.

### Options:
    --audio-only                       Downloads only the audio, as mp3, on Music folder, in the home directory

### Example:
`./downloadplaylist.sh "https://www.youtube.com/watch?v=7ZeINKopgFw&lc" --audio-only`

