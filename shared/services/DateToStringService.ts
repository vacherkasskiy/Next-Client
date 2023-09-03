const getDateString = (data: Date) => {
    const date = new Date(data)
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day}.${month}.${year}`
}

const getTimeString = (data: Date) => {
    const date = new Date(data)
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours}:${minutes}`
}

export {
    getDateString,
    getTimeString,
}