export default function overlay_off(e, overlay, panel){

    overlay.current.style.display = 'none'
    panel.current.style.display = 'none'
    panel.current.style.zIndex = 1
    e.target.style.zIndex = 1
    
}