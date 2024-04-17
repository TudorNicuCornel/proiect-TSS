async function expectedText(actual, expected) {
    if(actual!=expected)
        return false;
    return true;
}

module.exports = {
    expectedText
};
  