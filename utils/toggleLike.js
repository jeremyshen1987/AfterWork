export default function toggleLike(type, name, id, likes, setLikes){

    console.log('toggle', id)

    const hasLiked = likes.filter(like => like.id === id)

    console.log('hasliked', hasLiked)

    if(hasLiked.length > 0){
        console.log('fail')
        setLikes(likes.filter(like => like.id !== id))
        return
    }

    const likeObj = {
        type: type,
        name: name,
        id: id
    }

    console.log('obj', likeObj)

    setLikes([...likes, likeObj])

}