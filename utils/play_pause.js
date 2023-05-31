

export function mock_play_pause(e, album_id, track_number, name, player, setPlayer){

    //showing warning message
    const current_container = e.currentTarget.parentNode
    const track_name = current_container.querySelectorAll(":scope #track_name")[0]
    track_name.style.color = 'red'
    track_name.textContent = 'I do not have spotify premium, so playing a sample song for you instead!'


    //if the song is playing and you click play in another track, previus player button is removed and  track name and number is restored 
    if(player.track_num !== track_number && player.track_num !== null){

        const div = document.getElementById(player.track_num)

        const play_btn = div.querySelectorAll(":scope .play_btn")[0]
        const track_num_tag = div.querySelectorAll(":scope .track_num")[0]
        const track_name = div.querySelectorAll(":scope #track_name")[0]

        play_btn.style.display = 'none'
        track_num_tag.textContent = player.track_num
        track_name.style.color = 'white'
        track_name.textContent = player.track_name

        //song will keep playing since it is the same sample song...
        setPlayer({
            ...player,
            isPlaying: true,
            track_num: track_number
        })

        return
    }


    setPlayer({
        isPlaying: !player.isPlaying,
        album_id: album_id,
        track_num: track_number,
        track_name: name
    })



}