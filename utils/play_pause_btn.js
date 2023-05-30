

export function play_pause_btn(album_id, track_number, setPlayer){

    console.log('play pause')
    setPlayer({
        status: 'playing',
        album_id: album_id,
        track_num: track_number
    })

}