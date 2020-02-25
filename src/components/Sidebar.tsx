import * as React from "react";

interface SidebarProps {
    name: string;
}

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
    return (
        <div>
            <div>name</div>
            <div>{props.name}</div>
        </div>
    );
}

export default Sidebar;
