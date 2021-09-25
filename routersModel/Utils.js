const getData = async (arrChap) => {
    try {
        return await Promise.all(arrChap.map(arr => capTerms(arr)));
    }
    catch (e) {
        return status.code(500).json({
            errorMessage: 'error'
        })
    }
}

const capTerms = async (arr) => {
    try {
        arr.term = arr.term.charAt(0).toUpperCase() + arr.term.substr(1).toLowerCase();
    } catch (e) {
        return status.code(500).json({
            errorMessage: 'error'
        })
    }
}

module.exports = {
    getData
}