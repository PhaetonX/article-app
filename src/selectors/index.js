import {createSelector} from 'reselect';

const articlesGet = state => state.articles;
const filtersGet = state => state.filters;

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
