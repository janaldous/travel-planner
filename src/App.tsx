import React from 'react';
import './App.scss';
import SimpleMap from './components/SimpleMap';
import Sidebar from './components/Sidebar';

const App:React.FC = () => {

    const [clickedPlace, setClickedPlace] = React.useState<string>("click a marker");

    return (
        <div className="container">
            <header>Travel planner</header>

            <nav>
                <Sidebar
                    name={clickedPlace}
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
