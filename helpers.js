export const getJson = async function(url){
  try{
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }catch(err){
    console.log(`Error caught from getJSON ${err}`)
}
}
