const dirtyBin = [
    { type: 'shirt',        isWhite: true },
    { type: 'sock',         isWhite: true },
    { type: 'shorts',       isWhite: true },
    { type: 'sock',         isWhite: true },
    { type: 'sock',         isWhite: false },
    { type: 'shorts',       isWhite: false },
    { type: 'pants',        isWhite: true },
    { type: 'button-down',  isWhite: true },
    { type: 'sock',         isWhite: true },
    { type: 'shorts',       isWhite: false },
    { type: 'lino pants',   isWhite: false, isDelicate: true },
    { type: 'pants',        isWhite: false },
    { type: 'sock',         isWhite: true },
    { type: 'underwear',    isWhite: true },
    { type: 'pants',        isWhite: false },
    { type: 'sock',         isWhite: false },
    { type: 'button-down',  isWhite: true },
    { type: 'long-sleeve',  isWhite: false },
    { type: 'underwear',    isWhite: true },
    { type: 'sock',         isWhite: false },
    { type: 'underwear',    isWhite: false },
    { type: 'long-sleeve',  isWhite: true },
    { type: 'sock',         isWhite: false },
    { type: 'underwear',    isWhite: false },
    { type: 'long-sleeve',  isWhite: false },
    { type: 'button-down',  isWhite: true }
];

function separateDrityLaundry(dirtyBin) {
    const whiteDirtyBin = [];
    const nonWhiteDirtyBin = [];
    // const firstPiece = dirtyBin[0];
    dirtyBin.forEach(item => {
        if (item.isWhite) {
            whiteDirtyBin.push(item);
        } else {
            nonWhiteDirtyBin.push(item);
        }
    });

    return {
        whites: whiteDirtyBin,
        nonWhites: nonWhiteDirtyBin
    }
}

// const { whites, nonWhites } = separateDrityLaundry(dirtyBin);



function dryer(item) {
    if (item.isDelicate) {
        console.log(`Air drying: ${item.type}`);
    } else {
        console.log(`Drying: ${item.type} in the machine`);
    }
    return item;
}

function dryCleanLaundry (cleanBin) {
    const dryItems = [];
    cleanBin.forEach(item => {
        dryItems.push(dryer(item));
    });

    return dryItems;
}
