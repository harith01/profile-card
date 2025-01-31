
function displayCurrentTimeUTC() {
    const time = new Date().toUTCString()
    return time
}

const el = document.querySelector('.my-el')
el.innerText = displayCurrentTimeUTC()