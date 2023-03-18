import View from "./View.js"

class ResultsView extends View{
    _parentEl = document.querySelector(".search-results")

    _getMarkup(){        
        return this._data.map(el => this._getMarkupItems(el)).join('')
    }


    _getMarkupItems(data){
        return `
        <a href=#${data.artId}>
        <div class="list-item">
        <div class="list-item-image">
         <figure class="image is-64x64">
        <img class="is-rounded" src=${data.artImage}>
        </figure>
        </div>

        <div class="list-item-content">
        <div class="list-item-title">${data.artTitle}</div>
         <div class="list-item-description">${data.artArtist}</div>
        </div>
        </div>
        </a>
        `
    }

}
export default new ResultsView;
