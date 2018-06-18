import {createSelector} from 'reselect';

const articlesGet = state => state.articles;
const filtersGet = state => state.filters;
const commentsGet = state => state.comments;
const idGet = (state, props) => props.id;

export const filtratedArticlesSelector = createSelector(articlesGet, filtersGet, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters;

    return articles.filter(article => {
        const published = Date.parse(article.date);
        return (
            ( !selected.length || selected.includes(article.id) ) &&
            ( !from || !to || (published > Date.parse(from) && published < Date.parse(to)) )
        )
    });
});


export const commentsSelector = createSelector(commentsGet, idGet, (comments, id) => {
    return  comments[id]
});