import { getRandomBirds, getBirdsByFamily } from '@services/BirdsService';

export const createRandomGame = (count) => {
    const birds = getRandomBirds(count);
    return birds;
}

export const createGame = (filtersToApply) => {
    const birds = getBirdsByFamily(filtersToApply.selectedFamily)
    return birds;
};

// createGame = (fitlersToApply) => {
// build path for location code
// get species list for region
// randomize order & save first (count)
// get birds by speciesCode
// }