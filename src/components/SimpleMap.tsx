import React from 'react';
import { Map, GoogleApiWrapper, Marker, MapProps } from 'google-maps-react';
import "./Marker.scss";
import "./SimpleMap.scss";

type TimeOfDay = "am" | "pm" | "sunset" | "sunrise";

interface MarkerProps {
    lat: number;
    lng: number;
    area: string;
    day?: number;
    time?: TimeOfDay;
    address?: string;
    text: string;
}
// const Marker = (props: MarkerProps) => {
//     return (<div className={`marker ${props.area}`}>{props.text}</div>)
// };

interface SimpleMapProps {
    onMarkerClick: (place: string) => void
}

const SimpleMap: React.FC<SimpleMapProps & MapProps> = (props:SimpleMapProps & MapProps) => {
    const defaultProps = {
        key: "",
        center: {
            lat: -8.4680806,
            lng: 115.0553262
        },
        zoom: 10
    };

    const markers: Array<MarkerProps> = [
        {lat: -8.7467172, lng: 115.1645983, area: "airport", text: "DPS"},
        {lat: -8.3327693, lng: 115.1963798, area: "ubud-1", text: "Nungnung waterfall"},
        {lat: -8.5187433, lng: 115.256314, area: "ubud-1", text: "Monkey Forest"},
        {lat: -8.4340403, lng: 115.2770682, area: "ubud-1", text: "Tegallalang Rice Terrace"},
        {lat: -8.5036172, lng: 115.2525151, area: "ubud-2", time: "sunset", text: "Campuhan Ridge Walk"},
        {lat: -8.4157038, lng: 115.3131155, area: "ubud-2", text: "Trita Empul Temple"},
        {lat: -8.4400724, lng: 115.3845629, area: "ubud-2", text: "Tukad Cepung Waterfall"},
        {lat: -8.37031, lng: 115.1291833, area: "ubud-2", time: "sunset", text: "Jatiluwih Rice Terrace"},
        {lat: -8.275177, lng: 115.16466, area: "ubud-3", text: "Ulun Danu Beratan Temple"},
        {lat: -8.2491846, lng: 115.1554435, area: "ubud-3", text: "Handara Gate", address: "Jl. Raya Singaraja-Denpasar, Pancasari, Kec. Sukasada, Kabupaten Buleleng, Bali 81161, Indonesia"},
        {lat: -8.1776622, lng: 115.1823556, area: "ubud-3", text: "Sekumpul Waterfall", address: "Sekumpul, Lemukih, Sawan, Kabupaten Buleleng, Bali 81171, Indonesia"},
        {lat: -8.5932639, lng: 115.3357545, area: "ubud-4", text: "Sababay Winery", address: "Jalan Professor Doktor Ida Bagus Mantra No.333X Keramas, Medahan, Kec. Blahbatuh, Kabupaten Gianyar, Bali 80581, Indonesia"},
        {lat: -8.5646216, lng: 115.2384176, area: "accommodation", text: "Anulekha Resort and Villa", address: "Banjar Silungan, Desa Lodtunduh, Ubud, Lodtunduh, Gianyar, Kabupaten Gianyar, Bali 80571, Indonesia"},
        {lat: -8.5265533, lng: 115.2666751, area: "accommodation", text: "Menzel Ubud", address: "Jl. Yudistira, Banjar Kalah, Peliatan, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571, Indonesia"},
        {lat: -8.513759, lng: 115.2777813, area: "accommodation", text: "The Hidden Paradise Hill Suites & Villas", address: "Jl. Dukuh Geria, Pejeng Kawan, Tampaksiring, Gianyar, Bali 80571, Indonesia"},

        {lat: -8.5340796, lng: 115.5073219, area: "gili-1", text: "Padang Bai Port"},
        {lat: -8.8293566, lng: 115.0840778, area: "canggu-1", text: "Uluwatu Temple"},
        {lat: -8.8339299, lng: 115.0852831, area: "canggu-1", text: "Korang Boma"},
        {lat: -8.8057033, lng: 115.1108537, area: "canggu-1", text: "Bingin Beach"},
        {lat: -8.792266, lng: 115.1212226, area: "canggu-1", text: "Balangan Beach"},
        {lat: -8.8456792, lng: 115.1479048, area: "canggu-1", text: "Sundays Beach Club"},
        {lat: -8.8475143, lng: 115.1507311, area: "canggu-1", text: "Karma Beach"},
        {lat: -8.8111524, lng: 115.1016356, area: "canggu-1", text: "Padang-Padang Beach"},
        {lat: -8.6504964, lng: 115.1356257, area: "accommodation", text: "ExoticA Bali Villa B&B", address: "Jalan Pantai Batu Bolong No.32 B, Canggu, Kuta Utara, Canggu, Kuta Utara Canggu Kuta Utara, Canggu, North Kuta, Badung Regency, Bali 80361, Indonesia"},
    ];

    const handleMouseOver = React.useCallback((_props: any, marker: any, e: any) => {
        console.log(_props);
        props.onMarkerClick(_props.title)
    }, [props]);

    return (
        <div className="main-map">
            <Map
                google={props.google}
                zoom={defaultProps.zoom}
                initialCenter={defaultProps.center}
            >
                {markers.length > 0 && markers.map((marker, key) => {
                    return (
                        <Marker 
                            key={key}
                            position={{lat: marker.lat, lng: marker.lng}}
                            title={marker.text}
                            onClick={handleMouseOver}
                        />
                    );
                })}
            </Map>
        </div>
    );
}

export { SimpleMap };

export default GoogleApiWrapper(() => ({
    apiKey: "AIzaSyDbcM5AOjEOn5tp18yfzV2jep_1gCdtmgo"
  }))(SimpleMap);