export default function sortLike(array, type){
    return array.reduce((arr, obj) => {

        const key = obj[type]
        const subArr = arr[key] ?? []

        return {...arr, [key]: [...subArr, obj]}
    }, {})
}
