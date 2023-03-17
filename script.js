import * as model from './model.js'

const parentEl = document.querySelector('.art-view')

const renderResult = async function () {
  const id = window.location.hash.slice(1);
  if (!id) return; 
  const loader = `<div class="loader-wrapper">
  <div class="loader is-loading"></div>
</div>`
  parentEl.insertAdjacentHTML('afterbegin', loader)
  await model.loadArt(id);
  parentEl.innerHTML = ''
  const html = `<!-- START ARTICLE -->

                <div class="card item-detail article">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content has-text-centered">
                            
                            <!-- START TITLE -->

                                <p class="title article-title">${model.state.art.artTitle}</p>
                                <p class="subtitle is-6 article-subtitle">
                                    <a href=${model.state.art.artUrl} target="_blank">${model.state.art.artArtist}</a> on ${model.state.art.artDate}
                                </p>
                                <!-- END TITLE -->
                            </div>
                        </div> 

                        <!-- START FEATURED IMAGE -->

                        <div class="has-text-centered m-5">
                          <figure class="image is-inline-block">
                            <img  src=${model.state.art.artImage}>
                          </figure>
                        </div>

                        <!-- END FEATURED IMAGE -->

                        <!-- START ARTICLE IMAGE -->


                        <div class="content article-body">
                            <p>
                            ${model.state.art.artDescription}
                            </p>
                            <p>
                                To view the item, click <a href=${model.state.art.artUrl} target="_blank">here.</a>
                            
                            </p>


                        </div>
                    </div>
                </div>
                <!-- END ARTICLE -->`


  parentEl.insertAdjacentHTML('afterbegin', html)
  console.log(state);
  console.log(model.state.art.artTitle)
}


window.addEventListener('hashchange', renderResult)
window.addEventListener('load', renderResult)





