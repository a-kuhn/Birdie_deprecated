// Import the bird data directly into the utility module
import birdsData from '@assets/data/BirdsData.json';

export const getAllBirds = () => {
    return birdsData;
};

export const getBirdsByFamily = (famComNameCode) => {
    return birdsData.filter(famComNameCode);
};
