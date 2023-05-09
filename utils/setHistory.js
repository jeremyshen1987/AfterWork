export default function setHistory(type, name, id, img_url){

    const history_list = JSON.parse(localStorage.getItem('history_after_work')) ?? []

    if(history_list.filter(li => li.id === id).length > 0){
        return
    }

    const obj = {
        type: type,
        name: name,
        id: id,
        img_url: img_url
    }

    history_list.unshift(obj)
    

    if(history_list.length > 10){
        history_list.pop()
    }

    localStorage.setItem('history_after_work' , JSON.stringify(history_list))
}