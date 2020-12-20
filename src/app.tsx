import React, { useEffect, useState } from 'react';
import GitHubCorners from '@uiw/react-github-corners';

import {
    getCachedResults,
    getGoogleMapsUrl,
    getRestaurants,
    getStoreStatusText,
    getStreetAddress
} from './util';

import {
    MapContainer,
    Marker,
    Popup,
    TileLayer
} from 'react-leaflet';

import './index.css'

export default function Home() {
    const [locations, setLocations] = useState(getCachedResults() as any[]);
    
    useEffect(() => {
        getRestaurants().then(res => setLocations(res))
    }, []);

    return (
        <MapContainer center={[39.8283, -98.5795]} zoom={4.5} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | ilefa squad'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                locations.map(location => {
                    return (
                        <Marker position={[location.latitude, location.longitude]} key={location.id}>
                            <Popup>
                                <b>{location.name}</b><br/>
                                <span dangerouslySetInnerHTML={{ __html: getStoreStatusText(location)}}></span> - {location.telephone}<br/>
                                {getStreetAddress(location)}<br/>
                                <a className='shine text-blue' href={getGoogleMapsUrl(location)} target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-map fa-fw"></i> Open in Google Maps
                                </a>
                            </Popup>
                        </Marker>
                    )
                })
            }
            <div className="leaflet-top leaflet-right">
                <div className="leaflet-control leaflet-bar github-bar">
                    <GitHubCorners
                        bgColor='#2c3e50'
                        position='right'
                        target='_blank'
                        href='https://github.com/notm1ke/beastburger'
                    />
                </div>
            </div>
        </MapContainer>
    )
}