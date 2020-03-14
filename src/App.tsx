import React from 'react';
import './App.scss';
import SimpleMap from './components/SimpleMap';
import { Sidebar, ClickedPlace } from './components/Sidebar';
import { SidebarRight } from './components/SidebarRight';
import { Place } from "./domain/Model";
import { PlaceControllerApi } from "typescript-fetch-api";
import { PlaceEntity } from "typescript-fetch-api/dist/models/PlaceEntity";

const App:React.FC = () => {

    const markers: Array<Place> = [
        {lat: -8.7467172, lng: 115.1645983, area: "airport", day: 1, type: "airport",  text: "DPS"},
        {lat: -8.3327693, lng: 115.1963798, area: "ubud-1", day: 2, type: "poi", text: "Nungnung waterfall"},
        {lat: -8.5187433, lng: 115.256314, area: "ubud-1", day: 2, type: "poi", text: "Monkey Forest"},
        {lat: -8.4340403, lng: 115.2770682, area: "ubud-1", day: 2, type: "poi", text: "Tegallalang Rice Terrace"},
        {lat: -8.5036172, lng: 115.2525151, area: "ubud-2", day: 3, type: "poi", time: "sunset", text: "Campuhan Ridge Walk"},
        {lat: -8.4157038, lng: 115.3131155, area: "ubud-2", day: 3, type: "poi", text: "Trita Empul Temple"},
        {lat: -8.4400724, lng: 115.3845629, area: "ubud-2", day: 3, type: "poi", text: "Tukad Cepung Waterfall"},
        {lat: -8.37031, lng: 115.1291833, area: "ubud-2", day: 3, type: "poi", time: "sunset", text: "Jatiluwih Rice Terrace"},
        {lat: -8.275177, lng: 115.16466, area: "ubud-3", day: 4, type: "poi", text: "Ulun Danu Beratan Temple"},
        {lat: -8.2491846, lng: 115.1554435, area: "ubud-3", day: 4, type: "poi", text: "Handara Gate", address: "Jl. Raya Singaraja-Denpasar, Pancasari, Kec. Sukasada, Kabupaten Buleleng, Bali 81161, Indonesia"},
        {lat: -8.1776622, lng: 115.1823556, area: "ubud-3", day: 4, type: "poi", text: "Sekumpul Waterfall", address: "Sekumpul, Lemukih, Sawan, Kabupaten Buleleng, Bali 81171, Indonesia"},
        {lat: -8.5932639, lng: 115.3357545, area: "ubud-4", day: 5, type: "poi", text: "Sababay Winery", address: "Jalan Professor Doktor Ida Bagus Mantra No.333X Keramas, Medahan, Kec. Blahbatuh, Kabupaten Gianyar, Bali 80581, Indonesia"},
        {lat: -8.5646216, lng: 115.2384176, area: "ubud-1", day: 6, type: "accommodation", text: "Anulekha Resort and Villa", address: "Banjar Silungan, Desa Lodtunduh, Ubud, Lodtunduh, Gianyar, Kabupaten Gianyar, Bali 80571, Indonesia"},
        {lat: -8.5265533, lng: 115.2666751, area: "ubud-1", day: 6, type: "accommodation", text: "Menzel Ubud", address: "Jl. Yudistira, Banjar Kalah, Peliatan, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571, Indonesia"},
        {lat: -8.513759, lng: 115.2777813, area: "ubud-1", day: 6, type: "accommodation", text: "The Hidden Paradise Hill Suites & Villas", address: "Jl. Dukuh Geria, Pejeng Kawan, Tampaksiring, Gianyar, Bali 80571, Indonesia"},

        {lat: -8.5340796, lng: 115.5073219, area: "gili-1", day: 7, type: "poi", text: "Padang Bai Port"},
        {lat: -8.8293566, lng: 115.0840778, area: "canggu-1", day: 10, type: "poi", text: "Uluwatu Temple"},
        {lat: -8.8339299, lng: 115.0852831, area: "canggu-1", day: 10, type: "poi", text: "Korang Boma"},
        {lat: -8.8057033, lng: 115.1108537, area: "canggu-1", day: 10, type: "poi", text: "Bingin Beach"},
        {lat: -8.792266, lng: 115.1212226, area: "canggu-1", day: 10, type: "poi", text: "Balangan Beach"},
        {lat: -8.8456792, lng: 115.1479048, area: "canggu-1", day: 10, type: "poi", text: "Sundays Beach Club"},
        {lat: -8.8475143, lng: 115.1507311, area: "canggu-1", day: 10, type: "poi", text: "Karma Beach"},
        {lat: -8.8111524, lng: 115.1016356, area: "canggu-1", day: 10, type: "poi", text: "Padang-Padang Beach"},
        {lat: -8.6504964, lng: 115.1356257, area: "canggu-1", day: 10, type: "accommodation", text: "ExoticA Bali Villa B&B", address: "Jalan Pantai Batu Bolong No.32 B, Canggu, Kuta Utara, Canggu, Kuta Utara Canggu Kuta Utara, Canggu, North Kuta, Badung Regency, Bali 80361, Indonesia"},
        {lat: -8.5115242, lng: 115.2560823, area: "ubud-1", day: 6, type: "accommodation", text: "Adiwana Bisma"},
    ];

    const [clickedPlace, setClickedPlace] = React.useState<ClickedPlace>();
    const [day, setDay] = React.useState<number>();
    const [places, setPlaces] = React.useState<Array<Place>>(markers);
    const [placesRest, setPlacesRest] = React.useState<Array<PlaceEntity>>();

    const handleSetDay = (day: number) => {
        if (day === -101) {
            setPlaces(markers);
        } else {
            const places = markers.filter(x => x.day === day);
            setPlaces(places);
            setDay(day);
        }
    };

    React.useEffect(() => {
        const placeApi = new PlaceControllerApi();

        (async () => {
            const response = await placeApi.getAllPlacesUsingGET();
            setPlacesRest(response);
        })();
    }, []);

    return (
        <div className="container">
            <header>Travel planner</header>

            <nav>
                <Sidebar
                    clickedPlace={clickedPlace}
                    day={day}
                    places={places}
                />
                <div id="places-rest">
                    <ul>{placesRest?.map((place, key) => (<li key={key}>{place.name}</li>))}</ul>
                </div>
            </nav>

            <main>
                <SimpleMap 
                    onMarkerClick={setClickedPlace}
                    places={places || []}
                />
            </main>

            <aside>
                <SidebarRight
                    onDayClick={handleSetDay}
                />
            </aside>

            <footer></footer>
        </div>
    );
}

export default App;
