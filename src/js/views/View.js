export default class View {
    _data  

    render(data){
        this._data = data;
        const markup = this._getMarkup()
        this._clearHTML();
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
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
    
      renderError(errMessage){
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