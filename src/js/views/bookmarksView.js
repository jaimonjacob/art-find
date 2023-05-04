import View from "./View.js"

class BookmarksView extends View{
    _parentEl = document.querySelector(".navbar-dropdown")
    _errorMessage = 'No items bookmarked yet'

    addEventHandlerBookmarks(handler){
        window.addEventListener('load', handler)
    }
    
    _getMarkup(){        
        return this._data.map(el => this._getMarkupItems(el)).join('')
    }

    _getMarkupItems(data){
        return `
        <div class="favs mt-2">
        <a class="box favs-link" href=#${data.artId}>${data.artTitle}</a>
        </div>
        `
    }

}
export default new BookmarksView;
