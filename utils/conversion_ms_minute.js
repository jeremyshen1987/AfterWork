export default function conversion_ms_minute(ms){

    const total_seconds = ms /1000
    const minute = parseInt(total_seconds / 60)
    const second = parseInt(total_seconds % 60) < 10 ? String(parseInt(total_seconds % 60)).padStart(2,'0') : parseInt(total_seconds % 60)

    return `${minute}:${second}`
}