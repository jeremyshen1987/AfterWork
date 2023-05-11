export function Like_Btn_on(e){

    const t = e.currentTarget
    const elm = t.querySelectorAll(":scope  #like_playlist_track")[0]
    
    elm.style.display = 'inline-block'
}

export function Like_Btn_off(e){

    const t = e.currentTarget
    const elm = t.querySelectorAll(":scope  #like_playlist_track")[0]

    elm.style.display = 'none'
}