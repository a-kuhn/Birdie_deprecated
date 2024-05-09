import { getAllBirds, getRandomBirds, getBirdsByFamily } from '@services/BirdsService';


export const createGame = (filtersToApply) => {
    const birdFamily = filtersToApply.birdFamily
        ? getBirdsByFamily(filtersToApply.selectedFamily)
        : getAllBirds();

    const randomBirds = getRandomBirds(birdFamily, filtersToApply.birdsNumber);

    return randomBirds;
};

// filtersToApply = {"birdsNumber": "25", "selectedCountry": "US", "selectedCountyRegion": "", "selectedFamily": "falcon1", "selectedStateProvince": "US-MA"}

// createGame = (fitlersToApply) => {
// build path for location code
// get species list for region
// randomize order & save first (count)
// get birds by speciesCode
// }