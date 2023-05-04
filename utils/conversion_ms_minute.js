export default function conversion_ms_minute(ms){

    const total_seconds = ms /1000
    const minute = parseInt(total_seconds / 60)
    const second = parseInt(total_seconds % 60) 

    return `${minute}:${second}`
}