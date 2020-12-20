import React from 'react';
import locations from '../../data.json';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './index.css'

export default function Home() {
    return (
        <MapContainer center={[locations.restaurants[0].latitude, locations.restaurants[0].longitude]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                locations.restaurants.map(location => {
                    console.log(location.latitude, location.longitude);
                    return (
                        (
                            <Marker position={[location.latitude, location.longitude]}>
                                <Popup>
                                    {`${location.streetaddress}, ${location.city}, ${location.state}, ${location.country}`}
                                </Popup>
                            </Marker>
                        )
                    )
                })
            }
        </MapContainer>
    )
}