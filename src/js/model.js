import {API_URL} from './config.js'
import { RESULST_PER_PAGE } from './config.js'
import {getJson} from './helpers.js'

export const state = {
  art:{},
  search: {
  query:'',
  currPage: '',
  resPerPage: RESULST_PER_PAGE,
  results: []
  }
}

export const loadArt = async function(id){
try{
  const data = await getJson(`${API_URL}${id}`) 
  const results = data.data
  state.art = {
    artId: results.id,
    artTitle: results.title,
    artDescription: results.wall_description ? results.wall_description : (results.digital_description ? results.digital_description: results.tombstone),
    artImage: results.images.web.url,
    artArtist: results.creditline,
    artDate: results.creation_date
}
} catch(err){
  throw err
}  
}

export const loadSearchResults  = async function(query){
  try{
    const data = await getJson(`${API_URL}?q=${query}&limit=20&has_image=1`)  
    //state.art.search.query = query;
    const results = data.data    
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
  } catch(err){
    throw err
  }  
  }



export const showResultsPerPage = function(currPage){
  const start = (currPage -1) * state.search.resPerPage;
  const end = currPage * state.search.resPerPage;
  return state.search.results.slice(start,end)
}