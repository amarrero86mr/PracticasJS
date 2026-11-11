

function setStorage (chat) {
    const stringifyCaht = JSON.stringify(chat)
    localStorage.setItem('personSpam', stringifyCaht)
}

export default setStorage;