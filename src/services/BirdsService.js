import birdsData from '@assets/data/BirdsData.json';

export const getAllBirds = () => {
    return birdsData;
};

export const getRandomBirds = (count) => {
    return birdsData.sort(() => Math.random() - Math.random()).slice(0, count);
}

export const getBirdsByFamily = (famComNameCode) => {
    return birdsData.filter(bird => bird.famComNameCode === famComNameCode);
};
