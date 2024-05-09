import birdsData from '@assets/data/BirdsData.json';

export const getAllBirds = () => {
    return birdsData;
};

export const getRandomBirds = (allBirds, count) => {
    return allBirds.sort(() => Math.random() - Math.random()).slice(0, count);
}

export const getBirdsByFamily = (famComNameCode) => {
    return birdsData.filter(bird => bird.famComNameCode === famComNameCode);
};

export const getUniqueFamilies = () => {
    return birdsData.reduce((acc, bird) => {
        if (!acc.some(family => family.famComNameCode === bird.famComNameCode)) {
            acc.push({
                famComNameCode: bird.famComNameCode,
                famComName: bird.famComName,
            });
        }
        return acc;
    }, []);
};