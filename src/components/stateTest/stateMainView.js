import React from 'react';
import StateArticleList from './stateArticlesList';
import { connect } from 'react-redux';

const StateMainView = (props) => {
    return <div className="col-md-9">
        <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                    <a href="" className="nav-link active">Global feed</a>
                </li>
            </ul>
        </div>
        <StateArticleList articles={props.articles}/>
    </div>
}

const mapStateToProps = (state) => ({
    articles: state.articles
});

const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StateMainView);
