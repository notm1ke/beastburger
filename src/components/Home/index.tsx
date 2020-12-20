import React from 'react';
import locations from '../../data.json';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './index.css'

export default function Home() {
    return (
        <MapContainer center={[39.8283, -98.5795]} zoom={4.5} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | ilefa squad'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                locations.restaurants.map(location => {
                    return (
                        <Marker position={[location.latitude, location.longitude]}>
                            <Popup>
                                {`${location.streetaddress}, ${location.city}, ${location.state}, ${location.country}`}
                                <br/><a href={`https://www.google.com/maps/place/${location.streetaddress.replace(' ', '+')},+${location.city},+${location.state}+${location.zip}/@${location.latitude},${location.longitude}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-map fa-fw"></i> Google Maps</a>
                            </Popup>
                        </Marker>
                    )
                })
            }
        </MapContainer>
    )
}