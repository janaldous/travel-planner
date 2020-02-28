import * as React from "react";
import "./Sidebar.scss";
import { Place } from "../domain/Model";

export interface SidebarProps {
    clickedPlace?: ClickedPlace;
    day?: number;
    places?: Array<Place>;
}

export interface ClickedPlace {
    name: string;
    area: string;
    day?: number;
}

export const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
    
    const clickedPlace = props.clickedPlace;

    return (
        <div className="sidebar">
            { clickedPlace && (
            <div className="clicked-place">
                <div className="row">
                    <div className="label">Name</div>
                    <div className="value">{clickedPlace.name}</div>
                </div>
                <div className="row">
                    <div className="label">Area</div>
                    <div className="value">{clickedPlace.area}</div>
                </div>
            </div>)}
            { props.day && props.places && (
            <div>
                <div className="label">Showing day {props.day}</div>
                <ul>
                    {props.places.map((place, key) => (<li key={key}>{place.text}</li>))}
                </ul>
            </div>)}
        </div>
    );
}
