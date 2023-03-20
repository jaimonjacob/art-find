import View from "./View"

class PaginationView extends View{
    _parentEl = document.querySelector(`.pagination`)


    _getMarkup(){
    //Decide the page number to show
    const currPage = this._data.currPage;
    const numPages =  Math.ceil(this._data.results.length/this._data.resPerPage)
    console.log(numPages) 
    console.log(currPage)  
    
    //Identify the number of pages

     //if the current page is 1 and there are more pages
     if (currPage === 1 && numPages > 1) {
      return `
      <div class="nav-btn">
      </div>


        <button data-goto=${currPage+1} class="has-text-primary pagination-next">
        <span>${currPage+1}</span>
        <span class="icon">
          <i class="fa fa-arrow-right"></i>
        </span>
        </button>
        
        `
     }

    //if the current page is the last page
    if (currPage === numPages && numPages > 1) { 
      return `
        <button data-goto=${currPage-1} class="has-text-primary pagination-previous">
        <span class="icon">
          <i class="fa fa-arrow-left"></i>
        </span>
        <span>${currPage-1}</span>
      </button>`

    }
        
     //if the current page is any other page
      
     if (currPage > 1 && numPages > 1) {
        return ` 
        <button data-goto=${currPage-1} class="has-text-primary pagination-previous">
        <span class="icon">
          <i class="fa fa-arrow-left"></i>
        </span>
        <span>${currPage-1}</span>
      </button>
    
      <button data-goto=${currPage+1} class="has-text-primary pagination-next">
      <span>${currPage+1}</span>
      <span class="icon">
        <i class="fa fa-arrow-right"></i>
      </span>
      </button>
      `
    }
   
    //if the current page is 1 and there are no  other pages 
    return ``
    //Show the buttons based on the current page
    //Add event handler to find and run the click
}

addHandler(handler){
  this._parentEl.addEventListener(`click`, function(e){
    const btn = e.target.closest(`button`)
    if(!btn) return;
    const goTo = +btn.dataset.goto
    console.log(goTo)
    handler(goTo)
  })
}

}

export default new PaginationView;
