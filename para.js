var spa = document.querySelectorAll(".p1");
spa.forEach((text) => {
    const word = text.textContent.split('')
    text.innerHTML = ''
    word.forEach((el, index) => {
        word[index] = `<span> <i>${word[
            index
        ]}</i></span>`

    })
    text.innerHTML = word.join(' ')
    const child = document.querySelectorAll(`span > i`);
    child.forEach((data, index) => {
        data.style.animationDelay = `${index * 0.06}s`
    })
})