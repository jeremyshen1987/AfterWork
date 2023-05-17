function upperCase(word){

    if(typeof word === 'string'){
        const first = word[0].toUpperCase()
        const rest = word.slice(1)
        return first + rest
    }

    return null

}

module.exports = upperCase