export const getRegionSearchUrl = (regionName?: string): string => {
    if (!regionName) return "https://www.google.com/maps/search/Farmacia+Xana";

    const query = encodeURIComponent(`Farmacia Xana ${regionName}`);
    return `https://www.google.com/maps/search/${query}`;
};