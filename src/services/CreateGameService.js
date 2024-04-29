import { getRandomBirds, getBirdsByFamily } from '@services/BirdsService';

export const createRandomGame = (count) => {
    const birds = getRandomBirds(count);
    return birds;
}