export default function changeCategories(e, selectCategories,setSelectCategories, word){

    const buttons = document.getElementsByClassName('categories_btn')[0].children

    if(word === 'all'){

        setSelectCategories([])

        for(const i of buttons){
            i.classList.remove('active_btn')
        }
        e.target.classList.add('active_btn')
        return;
    }

    if(selectCategories.indexOf(word) >= 0){

        setSelectCategories(selectCategories.filter(cat => cat !== word))
    }else{
        setSelectCategories([...selectCategories, word])
    }
    
    e.target.classList.toggle('active_btn')
    //remove styling on first button('all)
    buttons[0].classList.remove('active_btn')

    console.log(e.target)
    console.log(word)
}