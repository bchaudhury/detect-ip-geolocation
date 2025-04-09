import React from 'react';
import { useState, useEffect } from 'react';
import './GetIP.css';


const GetIP = () => {

    const [ip, setIp] = useState('');
    const [geoInfo, setGeoInfo] = useState({});

    useEffect(() => {
        const fetchIP = async () => {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const data = await response.json();
                setIp(data.ip);
            } catch (error) {
                console.error('Error fetching IP:', error);
            }
        };

        const fetchGeoInfo = async () => {
            try {
                const response = await fetch(`https://ipapi.co/${ip}/json/`);
                const data = await response.json();
                setGeoInfo(data);
            } catch (error) {
                console.error('Error fetching geo info:', error);
            }
        };

        fetchIP();
        if (ip) {
            fetchGeoInfo();
        }
    })

  return (
    <div className='GetIP'>
        <h1>Your IP Address</h1>
        <p>{ip}</p>
        <h2>Geo Information</h2>
        <p>City: {geoInfo.city}</p>
        <p>Region: {geoInfo.region}</p>
        <p>Country: {geoInfo.country_name}</p>
        <p>Latitude: {geoInfo.latitude}</p>
        <p>Longitude: {geoInfo.longitude}</p>      
    </div>
  )
}

export default GetIP;
