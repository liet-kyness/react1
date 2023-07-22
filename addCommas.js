function addCommas(num) {
    let res = num.toLocaleString('en-US');
    return res;
};

module.exports = addCommas;