import React from 'react';
import ArticlePreview from './stateArticlePreview';

const StateArticleList = (props) => {
    if (!props.articles)
        return <div className="article-preview">Loading...</div>

    if (props.articles.length === 0)
        return <div className="article-preview">No articles here...</div>

    let articleItems = props.articles.map(article => <ArticlePreview article={article} key={article.slug}/>);
    return  <div>{articleItems}</div>
}

export default StateArticleList;