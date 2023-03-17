import {API_URL} from './config.js'
import {getJson} from './helpers.js'

export const state = {
  art:{},
  search: {
  query:'',
  results: []
  }
}


export const loadArt = async function(id){
  const results = await getJson(`${API_URL}${id}`)  
  state.art = {
    artId: results.data.id,
    artTitle: results.data.title,
    artDescription: results.data.wall_description,
    artUrl: results.data.url,
    artImage: results.data.images.web.url,
    artArtist: results.data.creditline,
    artDate: results.data.creation_date
  }  
}