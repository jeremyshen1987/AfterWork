export default function overlay_on(e, overlay, panel){

    e.stopPropagation()
    e.target.style.zIndex = 12

    panel.style.display = 'block'
    panel.style.zIndex = 12
    
    overlay.style.display = 'block'
}