export default function handleClickEvent(e, overlay, panel){

    console.log('click event ')

    if(e.target.classList.contains('search_bar') || e.target.classList.contains('suggestion_item')){

        return
    }

    overlay.style.display = 'none'
    panel.style.display = 'none'
    panel.style.zIndex = 1

}