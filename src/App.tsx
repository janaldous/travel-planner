import React from 'react';
import './App.scss';
import SimpleMap from './components/SimpleMap';
import { Sidebar, SidebarProps } from './components/Sidebar';

const App:React.FC = () => {

    const [clickedPlace, setClickedPlace] = React.useState<SidebarProps>({name: "", area: ""});

    return (
        <div className="container">
            <header>Travel planner</header>

            <nav>
                <Sidebar
                    name={clickedPlace.name}
                    area={clickedPlace.area}
                />
            </nav>

            <main>
                <SimpleMap 
                    onMarkerClick={setClickedPlace}
                />
            </main>

            <aside></aside>

            <footer></footer>
        </div>
    );
}

export default App;
