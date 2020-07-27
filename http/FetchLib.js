import apiKey from './../config/apiKey';
export const geoCode = async (lat, lon) => {
    const url = "https://developers.zomato.com/api/v2.1/geocode?lat="+lat+"&lon="+lon;
    const response = await fetch(url,{
        headers:{
            'Accept': 'application/json',
            'user-key': apiKey
        }
    });
    const data = await response.json();
    return data;
}