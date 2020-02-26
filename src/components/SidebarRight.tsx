import * as React from "react";
import "./SidebarRight.scss";

export interface SidebarRightProps {
    onDayClick: (day: number) => void;
}

export const SidebarRight: React.FC<SidebarRightProps> = (props: SidebarRightProps) => {
    
    const days = Array.from(Array(14).keys())

    const handleDayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e.currentTarget.id);
        props.onDayClick(+e.currentTarget.id);
    };

    return (
        <div className="sidebar-right">
            {days.map((x, key) => <div id={`${x+1}`} key={key} onClick={handleDayClick}>Day {x+1}</div>)}
            <div id={"-101"} onClick={handleDayClick} onMouseOver={handleDayClick}>Show all</div>
        </div>
    );
}
