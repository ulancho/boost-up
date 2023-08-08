//dd.mm.yyyy
export const dateConvert = (dateStrings) => {
    if (dateStrings) {
        const date = new Date(dateStrings);
        let getYear = date.toLocaleString('default', { year: 'numeric' });
        let getMonth = date.toLocaleString('default', { month: '2-digit' });
        let getDay = date.toLocaleString('default', { day: '2-digit' });

        return getDay + '.' + getMonth + '.' + getYear;
    } else {
        return null;
    }
};
