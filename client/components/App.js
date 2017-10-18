import React from 'react';
import DevTools from 'mobx-react-devtools';
import Table from './Table';
import Footer from './Footer';

class App extends React.Component {

    render() {
        return (
            <div>
                <DevTools/>
                <Table/>
                <Footer/>
            </div>

        )
    }
}

export default App;