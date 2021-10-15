export function getUnicPrograms(data) {
    const items = [];
    const titles = {};

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        
        if (!titles[item.title] && item.specializedSubjects.length === 10) {
            items.push(item);
            titles[item.title] = true;
        }


        if (items.length > 4) {
            return items;
        }
    }

    return items;
}
