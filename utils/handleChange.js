import search from "./search"

export default function handleChange(e, searchObj ,setSearchObj){

    const searchBar = document.getElementById('search')
    searchBar.style.borderRadius = '36px'

    const panel = document.getElementsByClassName('panel')[0]
    panel.style.display = 'none'

    setSearchObj({
        ...searchObj,
        [e.target.name]: e.target.value
    })
    console.log('search obj', searchObj)
}


