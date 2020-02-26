import React from 'react';
import './App.scss';
import SimpleMap from './components/SimpleMap';
import { Sidebar, ClickedPlace } from './components/Sidebar';
import { SidebarRight } from './components/SidebarRight';

const App:React.FC = () => {

    const [clickedPlace, setClickedPlace] = React.useState<ClickedPlace>();
    const [day, setDay] = React.useState<number>();

    return (
        <div className="container">
            <header>Travel planner</header>

            <nav>
                <Sidebar
                    clickedPlace={clickedPlace}
                    day={day}
                />
            </nav>

            <main>
                <SimpleMap 
                    onMarkerClick={setClickedPlace}
                />
            </main>

            <aside>
                <SidebarRight
                    onDayClick={setDay}
                />
            </aside>

            <footer></footer>
        </div>
    );
}

export default App;
