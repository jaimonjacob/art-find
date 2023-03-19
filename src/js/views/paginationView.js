import View from "./View"

class PaginationView extends View{
    _parentEl = document.querySelector(`.pagination`)


    _getMarkup(){
    //Decide the page number to show
    const currPage = this._data.currPage;
    const numPages =  Math.ceil(this._data.results.length/this._data.resPerPage)
    console.log(numPages)  
    
    //Identify the number of pages

     //if the current page is 1 and there are more pages
     if (currPage === 1 && numPages > 1) {
        return `first page, more pages`

     }

    //if the current page is the last page
    if (currPage === numPages && numPages > 1) {
        return `last  page`

    }
        
     //if the current page is any other page 
     if (currPage > 1 && numPages > 1) {
        return `any other page`

    }
   
    //if the current page is 1 and there are no  other pages 
     
    return `only one page`


    //Show the buttons based on the current page

    //Add event handler to find and run the click
}
}

export default new PaginationView;
