import { TIMEOUT_PERIOD } from "./config"

export const timeout = function(sec){
  return new Promise(
    function(_, reject){
      setTimeout(function(){
         reject(new Error (`Timed out; the request took too much time`)) 
      },sec * 1000)

    }
  )
}

export const getJson = async function(url){
  try{
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_PERIOD)]);    
    const data = await res.json();
    if (!res.ok) {
      throw new Error(`There is an error...${res.statusText} 🔥🔥🔥🔥🔥`)
    }  
    return data;
  }catch(err){
    throw err
  }
}
