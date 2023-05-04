import { API_URL, RESULST_PER_PAGE, MAX_RESULT_LIMIT } from './config.js'

import {getJson} from './helpers.js'

export const state = {
  art:{},
  search: {
  query:'',
  currPage: 1,
  resPerPage: RESULST_PER_PAGE,
  results: []
  },
  bookmarks: []
  }

export const loadArt = async function(id){
try{
  const data = await getJson(`${API_URL}${id}`) 
  const results = data.data
  state.art = {
    artId: results.id,
    artTitle: results.title,
    artDescription: results.wall_description ? results.wall_description : (results.digital_description ? results.digital_description: results.tombstone),
    artUrl: results.url,
    artImage: results.images.web.url,
    artArtist: results.creditline,
    artDate: results.creation_date
}
state.bookmarks.some(el=> el.artId === id) ? state.art.bookmarked = true : state.art.bookmarked = false;
} catch(err){
  throw err
}  
}

export const loadSearchResults  = async function(query){
  try{
    //&limit=20 (limiting search)
    const data = await getJson(`${API_URL}?q=${query}&limit=${MAX_RESULT_LIMIT}&has_image=1`)  
    //state.art.search.query = query;
    const results = data.data  
    if (results.length === 0) {
      throw new Error(`No items returned...🔥🔥🔥🔥🔥`)
    }   
    state.search.query = query;
    state.search.results = results.map(el => {
      return {
        artId: el.id,
        artTitle: el.title,
        artDescription: el.wall_description,
        artUrl: el.url,
        artImage: el.images.web.url,
        artArtist: el.creditline,
        artDate: el.creation_date
      }
    })
    state.search.currPage = 1;  
  } catch(err){
    throw err
  }  
  }

export const persistStorage = function (data){
  localStorage.setItem('bookmarks', JSON.stringify(data))
}


export const addBookmarks = function(art){
  state.bookmarks.push(art);
  if (art.artId === state.art.artId) state.art.bookmarked = true;
  persistStorage(state.bookmarks);
}

export const deleteBookmarks = function(id){
  const bIndex = state.bookmarks.findIndex(el => el.artId === id)
  state.bookmarks.splice(bIndex, 1);
  if(id===state.art.artId) state.art.bookmarked = false
  persistStorage(state.bookmarks);
}

export const restoreStorage = function(){
  const retrivedData = JSON.parse(localStorage.getItem('bookmarks'))
  if (retrivedData) state.bookmarks = retrivedData;
}

export const showResultsPerPage = function(currPage = state.search.currPage){
  const start = (currPage -1) * state.search.resPerPage;
  const end = currPage * state.search.resPerPage;
  state.search.currPage = currPage;
  return state.search.results.slice(start,end)
}