export default function toggleLike(type, name, id, img_url, likes, setLikes){


    const hasLiked = likes.filter(like => like.id === id)

    let liked_LS = JSON.parse(localStorage.getItem('liked_after_work')) ?? []

    if(hasLiked.length > 0){

        liked_LS = liked_LS.filter(item => item.id !== id)
        localStorage.setItem('liked_after_work' , JSON.stringify(liked_LS))

        setLikes(likes.filter(like => like.id !== id))

        return
    }

    const likeObj = {
        type: type,
        name: name,
        id: id,
        img_url: img_url
    }

    liked_LS.unshift(likeObj)
    localStorage.setItem('liked_after_work' , JSON.stringify(liked_LS))

    setLikes([...likes, likeObj])

}