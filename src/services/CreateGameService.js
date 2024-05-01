import { getRandomBirds, getBirdsByFamily } from '@services/BirdsService';

export const createRandomGame = (count) => {
    const birds = getRandomBirds(count);
    return birds;
}

export const createCustomGame = (filtersToApply) => {
    const birds = getBirdsByFamily(filtersToApply)
    return birds;
};