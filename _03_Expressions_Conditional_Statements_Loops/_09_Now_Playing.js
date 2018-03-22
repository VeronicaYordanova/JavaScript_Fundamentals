function nowPlaying(array) {
    let trackName = String(array[0]);
    let artistName = String(array[1]);
    let duration = String(array[2]);

    console.log(`Now Playing: ${artistName} - ${trackName} [${duration}]`)
}
nowPlaying(['Number One', 'Nelly', '4:09'])