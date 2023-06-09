import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as model from './model.js'
import artView from './views/artView.js'
import searchView from './views/searchView.js'
import resultsView from './views/resultsView.js'
import paginationView from './views/paginationView.js'
import bookmarksView from './views/bookmarksView.js'

const renderResult = async function (){ 
try {
  const id = +(window.location.hash.slice(1));
  if (!id) return; 
  artView.renderSpinner();
  await model.loadArt(id); 
  artView.render(model.state.art);
} catch(err){
  artView.renderError(err);
}
}

const showSearchResults = async function(){
  try{
    const query = searchView.getQuery();
    resultsView.renderSpinner();
    await model.loadSearchResults(query);
    resultsView.render(model.showResultsPerPage())
    paginationView.render(model.state.search)    
  } catch(err){
    resultsView.renderError(err);
  }
  }


const showPagination = function(goTo){
  resultsView.render(model.showResultsPerPage(goTo))
  paginationView.render(model.state.search)
 
}

const controlBookmarks = function(){ 
  model.state.art.bookmarked ? model.deleteBookmarks(model.state.art.artId) : model.addBookmarks(model.state.art); 
  artView.update(model.state.art)
  bookmarksView.render(model.state.bookmarks)
}

const controlLoadBookmarks = function(){
  model.restoreStorage();
  bookmarksView.render(model.state.bookmarks)
}

const init = function(){
  bookmarksView.addEventHandlerBookmarks(controlLoadBookmarks)
  artView.addHandlerBookmarks(controlBookmarks)
  artView.addHandler(renderResult)
  searchView.addHandler(showSearchResults)
  paginationView.addHandler(showPagination)
}

init();