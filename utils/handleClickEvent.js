export default function handleClickEvent(e){

    const overlay = document.getElementById('overlay')
    const panel = document.getElementById('panel')
    const searchBar = document.getElementById('search')

    if(e.target.classList.contains('search_do_not_touch') || e.target.classList.contains('suggestion_item')){
        return
    }

    overlay.style.display = 'none'
    panel.style.display = 'none'
    panel.style.zIndex = 1

    
    searchBar.style.borderRadius = '36px'

}