export default function overlay_on(e, overlay, panel){

    e.stopPropagation()
    e.target.style.zIndex = 12

    panel.current.style.display = 'block'
    panel.current.style.zIndex = 12
    
    overlay.current.style.display = 'block'
}