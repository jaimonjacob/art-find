import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as model from './model.js'
import artView from './views/artView.js'
import searchView from './views/searchView.js'
import resultsView from './views/resultsView.js'

const renderResult = async function (){ 
try {
  const id = window.location.hash.slice(1);
  if (!id) return; 
  artView.renderSpinner();
  await model.loadArt(id);  
  artView.render(model.state.art);
} catch(err){
  artView.renderError(err);
}
}

const showSearchResults = async function(){
  const query = searchView.getQuery();
  resultsView.renderSpinner();
  await model.loadSearchResults(query);
  resultsView.render(model.state.search.results)
  console.log(query)
}


const init = function(){
  artView.addHandler(renderResult)
  searchView.addHandler(showSearchResults)
}

init();



