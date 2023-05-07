export default class View {
    _data  

    render(data){
      if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();
        this._data = data;
        const markup = this._getMarkup()
        this._clearHTML();
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
      }

      update(data){
         this._data = data;
        const newMarkup = this._getMarkup()
        const newDom = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDom.querySelectorAll('*'));
        const currElements = Array.from(this._parentEl.querySelectorAll('*'));
        newElements.forEach((newEl, i) =>{
          const currEl = currElements[i];
          //Not using as we are not comparing any text
          /*
          if(!newEl.isEqualNode(currEl) && newEl.firstChild?.nodeValue.trim() !=='') {
            console.log(newEl.firstChild?.nodeValue.trim())
            currEl.textContent === newEl.textContent;
          }
          */
          if(!newEl.isEqualNode(currEl)) {            
          Array.from(newEl.attributes).forEach(attr => currEl.setAttribute(attr.name, attr.value))
          }
        })
        
      }

      renderSpinner(){
        const markup = 
        `<div class="loader-wrapper">
        <div class="loader is-loading"></div>
        </div>`
        this._clearHTML();
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
      }
    
      _clearHTML(){
        this._parentEl.innerHTML = ``;
      }
    
      renderError(errMessage = this._errorMessage){
        const markup = 
        `
        <div class="warning-msg">
        <i class="fa fa-warning"></i>
         ${errMessage}
        </div>               
        `
        this._clearHTML();
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
      }
    

}