import React from 'react';
import { Map, GoogleApiWrapper, Marker, MapProps } from 'google-maps-react';
import "./Marker.scss";
import "./SimpleMap.scss";
import { ClickedPlace } from '../components/Sidebar';
import { Place } from "../domain/Model";

interface SimpleMapProps {
    onMarkerClick: (place: ClickedPlace) => void;
    places: Array<Place>;
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

    const [selected, setSelected] = React.useState<string>();

    const typeToColor = (type: string): string => {
        switch (type) {
            case "poi": return "blue";
            case "accommodation": return "green";
            default: return "red";
        }
    }

    const handleMouseOver = React.useCallback((_props: any, marker: any, e: any) => {
        console.log(_props);
        if (selected !== _props.title) {
            const item = props.places.filter(x => x.text === _props.title)[0];
            props.onMarkerClick({name: item.text, area: item.area, day: item.day});
            setSelected(_props.title);
        }
    }, [props, selected]);

    const handleMouseOut = React.useCallback(() => {
        // props.onMarkerClick({name: "", area: ""});
        // setSelected("");
    }, []);

    return (
        <div className="main-map">
            <Map
                google={props.google}
                zoom={defaultProps.zoom}
                initialCenter={defaultProps.center}
            >
                {props.places.length > 0 && props.places.map((marker, key) => {
                    return (
                        <Marker
                            key={key}
                            position={{lat: marker.lat, lng: marker.lng}}
                            title={marker.text}
                            // icon={`http://maps.google.com/mapfiles/ms/icons/${typeToColor(marker.type)}-dot.png`}
                            onClick={handleMouseOver}
                            onMouseover={handleMouseOver}
                            onMouseout={handleMouseOut}
                        />
                    );
                })}
            </Map>
        </div>
    );
};

export { SimpleMap };

export default GoogleApiWrapper(() => {
    let API_KEY = "";
    if (process.env.REACT_APP_MAPS_API_KEY) {
        API_KEY = process.env.REACT_APP_MAPS_API_KEY;
    } else {
        throw new Error("API key does not exist");
    }
    return {
        apiKey: API_KEY
    };
  })(SimpleMap);