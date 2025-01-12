function stringSorter(list, getValue) {
    return list.sort((a, b) => {
        const valueA = getValue(a).toLowerCase();
        const valueB = getValue(b).toLowerCase();

        if (valueA > valueB) {
            return 1;
        } else if (valueA < valueB) {
            return -1;
        } else {
            return 0;
        }
    });
}

module.exports = {
    stringSorter,
};
