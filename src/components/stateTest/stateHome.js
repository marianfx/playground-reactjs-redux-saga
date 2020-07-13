import React from 'react';
import StateBanner from './stateBanner';

class StateHome extends React.Component {

    render() {
        return (
            <div className="home-page">
                <StateBanner appName={this.props.appName}/>

                <div className="container page">
                    <div className="row">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default StateHome;