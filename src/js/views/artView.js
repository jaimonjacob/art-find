import View from "./View";

class ArtView extends View {
  _parentEl = document.querySelector('.art-view')  

  addHandler(handler){
    window.addEventListener('hashchange', handler)
  window.addEventListener('load', handler)
  }

  _getMarkup(){
    return`<!-- START ARTICLE -->

                <div class="card item-detail article">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content has-text-centered">
                            
                            <!-- START TITLE -->

                                <p class="title article-title">${this._data.artTitle}</p>
                                <p class="subtitle is-6 article-subtitle">
                                    <a href=${this._data.artUrl} target="_blank">${this._data.artArtist}</a> ${this._data.artDate}
                                </p>
                                <!-- END TITLE -->
                            </div>
                        </div> 

                        <!-- START FEATURED IMAGE -->

                        <div class="has-text-centered m-5">
                          <figure class="image is-inline-block">
                            <img  src=${this._data.artImage}>
                          </figure>
                        </div>

                        <!-- END FEATURED IMAGE -->

                        <!-- START ARTICLE IMAGE -->


                        <div class="content article-body">
                            <p>
                            ${this._data.artDescription}
                            </p>
                            <p>
                                To view the item, click <a href=${this._data.artUrl} target="_blank">here.</a>
                            
                            </p>


                        </div>
                    </div>
                </div>
                <!-- END ARTICLE -->`
  } 

}

export default new ArtView();