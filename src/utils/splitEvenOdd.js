export const splitEvenOdd = (items) => {
    const evenItems = items.filter((_, i) => i % 2 === 0);
    const oddItems = items.filter((_, i) => i % 2 !== 0);

    return [evenItems, oddItems];
}