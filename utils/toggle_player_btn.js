
export function Player_Btn_on(e, album_id, track_number, player){

    if(player.album_id === album_id && player.track_num === track_number){
        return
    }

    const t = e.currentTarget
    const play_btn = t.querySelectorAll(":scope .play_btn")[0]
    const track_num_tag = t.querySelectorAll(":scope .track_num")[0]
    
    track_num_tag.textContent = ''
    play_btn.style.display = 'inline-block'

}

export function Player_Btn_off(e, album_id, track_number, player){

    if(player.album_id === album_id && player.track_num === track_number){
        return
    }

    const t = e.currentTarget
    const play_btn = t.querySelectorAll(":scope .play_btn")[0]
    const track_num_tag = t.querySelectorAll(":scope .track_num")[0]

    play_btn.style.display = 'none'
    track_num_tag.textContent = track_number

}