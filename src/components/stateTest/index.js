import React from 'react';
import store from "../../store";
import { actionTypes } from '../../actions/actionTypes';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StateHeader from './stateHeader';
import StateMainView from './stateMainView';
import apiAgent from '../../api/agent';

class StateTest extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

        // subscribe to state changes from the store, to bring the store's state into the component
        store.subscribe(() => {
            this.setState(store.getState())
        });
        this.props.loadArticles(apiAgent.Articles.all());
    }

    onStateChangeClick = () => {

        // dispatch the 'TOGGLE' action that triggers state change
        store.dispatch({ type: actionTypes.APP_TOGGLE });
    }

    render() {
        return (
            <div>
                <StateHeader appName={this.props.appName}></StateHeader>
                <button className="btn btn-primary" onClick={this.onStateChangeClick}>Change!</button>
                <div className="form-group">
                    <label htmlFor="checked-input">Is checked?</label>
                    <input id="checked-input" type="checkbox" readOnly checked={!!this.state.checked}></input>
                </div>
                <div className="container page">
                    <div className="row">
                        <StateMainView/>

                        <div className="col-md-3">
                            <div className="sidebar">
                                <p>Popular tags</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

StateTest.propTypes = {
    appName: PropTypes.string
}

const mapStateToProps = state => ({
    appName: state.appName
});

const mapDispatchToProps = (dispatch) => ({
    loadArticles: (payload) => dispatch({ type: actionTypes.HOME_PAGE_LOADED, payload })
});

export default connect(
    mapStateToProps, // the mapper redux state => props 
    mapDispatchToProps
)(StateTest);
