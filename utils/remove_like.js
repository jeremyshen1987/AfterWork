export function remove_like(id, setLikes){

    let liked_LS = JSON.parse(localStorage.getItem('liked_after_work'))

    liked_LS = liked_LS.filter(item => item.id !== id)
    localStorage.setItem('liked_after_work' , JSON.stringify(liked_LS))

    setLikes(liked_LS)

}