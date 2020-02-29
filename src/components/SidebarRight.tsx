import * as React from "react";
import "./SidebarRight.scss";

export interface SidebarRightProps {
    onDayClick: (day: number) => void;
}

export const SidebarRight: React.FC<SidebarRightProps> = (props: SidebarRightProps) => {
    
    const days = Array.from(Array(14).keys())

    const handleDayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        props.onDayClick(+e.currentTarget.id.substring("day-".length));
    };

    return (
        <div className="sidebar-right">
            {days.map((x, key) => <div id={`day-${x+1}`} key={key} onClick={handleDayClick}>Day {x+1}</div>)}
            <div id={"day--101"} onClick={handleDayClick} onMouseOver={handleDayClick}>Show all</div>
        </div>
    );
}
