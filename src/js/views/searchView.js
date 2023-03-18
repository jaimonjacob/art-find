import View from "./View"

class SearchView extends View{
    _parentEL = document.querySelector(`.search-form`)

    getQuery(){
        const query = document.querySelector('.search-field').value;
        document.querySelector('.search-field').value = ``
        return query
    }

    _clearInput(){
        document.querySelector('.search__field').value = '';
    }

    addHandler(handler){
        this._parentEL.addEventListener('submit', function(e){
            e.preventDefault()
            handler();
        })
    }

}

export default new SearchView;
