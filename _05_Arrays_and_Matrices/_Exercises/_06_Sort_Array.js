function sortArray(input) {
    input.sort(twoCriteriaSort)
    input.forEach(element => console.log(element))

    function twoCriteriaSort(current, next) {
        if(current.length > next.length) {
            return 1
        } else if(current.length < next.length) {
            return -1
        } else {
            return current > next
        }
    }
}
sortArray(['alpha', 'beta', 'gamma']);
