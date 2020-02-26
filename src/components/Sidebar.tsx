import * as React from "react";
import "./Sidebar.scss";

export interface SidebarProps {
    name: string;
    area: string;
}

export const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
    return (
        <div className="sidebar">
            <div className="row">
                <div className="label">Name</div>
                <div className="value">{props.name}</div>
            </div>
            <div className="row">
                <div className="label">Area</div>
                <div className="value">{props.area}</div>
            </div>
        </div>
    );
}
