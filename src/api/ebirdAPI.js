import axios from 'axios';

const EBIRD_API_KEY = process.env.EBIRD_API_KEY;
const eBirdApi = axios.create({
    baseURL: 'https://api.ebird.org/v2',
    headers: {
        'X-eBirdApiToken': EBIRD_API_KEY,
    },
});

const subNational1Url = `/ref/region/list/subnational1`;
const subNational2Url = `/ref/region/list/subnational2`;

export const getSubnational1Regions = (selectedCountry) => {
    return new Promise((resolve, reject) => {
        eBirdApi
            .get(`${subNational1Url}/${selectedCountry}`)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            });
    }).catch(err => {
        console.log('An error occurred:', err);
    });
};

export const getSubnational2Regions = (selectedStateProvince) => {
    return new Promise((resolve, reject) => {
        eBirdApi
            .get(`${subNational2Url}/${selectedStateProvince}`)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            });
    }).catch(err => {
        console.log('An error occurred:', err);
    });
};