export default function handleClickEvent(e, overlay, panel){


    if(e.target.classList.contains('search_do_not_touch') || e.target.classList.contains('suggestion_item')){
        return
    }

    overlay.style.display = 'none'
    panel.style.display = 'none'
    panel.style.zIndex = 1

}