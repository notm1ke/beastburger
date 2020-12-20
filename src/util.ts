import axios from 'axios';
import cache from './data.json';

import { Restaurant } from './react-app-env';

// @ts-ignore
export const getGoogleMapsUrl = ({streetaddress, city, state, zip, latitude, longitude}) => {
    return `https://www.google.com/maps/place/${streetaddress.replace(' ', '+')},+${city},+${state}+${zip}/@${latitude},${longitude}`;
}

// @ts-ignore
export const getStreetAddress = ({streetaddress, city, state, country}) => {
    return `${streetaddress}, ${city}, ${state}, ${country}`;
}

// @ts-ignore
export const getStoreStatusText = ({iscurrentlyopen}) => iscurrentlyopen 
    ? "<span class='open'>Currently Open</span>"
    : "<span class='closed'>Closed</span>";

export const getRestaurants = (): Promise<Restaurant[]> => axios.get('https://api.chepri.io/mrbeastburger/custom/dineengine/vendor/olo/restaurants')
    .then(res => res.data)
    .then(data => {
        return data.restaurants;
    })
    .catch(err => {
        return cache;
    });

export const getCachedResults = () => cache.restaurants;