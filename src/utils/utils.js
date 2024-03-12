
export function capitaliseFirstLetter(phrase){
    return `${phrase.slice(0,1).toUpperCase()}${phrase.slice(1)}`
}

export function dateToLocal (dateToChange) {
    const dateWithoutZ = dateToChange.slice(0, -1)
	const formattedDate = new Date(dateWithoutZ)
	return formattedDate.toLocaleString()
}