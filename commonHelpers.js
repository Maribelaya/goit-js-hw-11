import{i as n,S as l}from"./assets/vendor-5b791d57.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const c=document.querySelector("form"),u=document.querySelector("input"),m=document.querySelector(".gallery");c.addEventListener("submit",s=>{s.preventDefault();const i=u.value;f(i)});function f(s){const a=`https://pixabay.com/api/?key=42469788-7d7013196b534fb1bad6f4ac3&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(a).then(o=>{if(o.ok)return o.json();throw new Error(o.status)}).then(o=>{if(o.hits.length===0)n.error({position:"topRight",timeout:2e3,transitionIn:"fadeInUp",message:"Sorry, there are no images matching your search query. Please try again!"});else{const e=o.hits.map(r=>`
                <li class="gallery-item"><a href="${r.largeImageURL}">
                <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}"></a>
                <ul class="gallery-image-data">
                <li class="data-quantity"><b>Likes </b>${r.likes}</li>
                <li class="data-quantity"><b>Views </b>${r.views}</li>
                <li class="data-quantity"><b>Comments </b>${r.comments}</li>
                <li class="data-quantity"><b>Downloads </b>${r.downloads}</li>
                </ul>
                </li>`).join("");m.insertAdjacentHTML("beforeend",e),new l(".gallery a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",fadeSpeed:150,captionSelector:"img",captionDelay:250}).on("show.simplelightbox").refresh(),hideLoader()}}).catch(o=>{console.log(o)})}
//# sourceMappingURL=commonHelpers.js.map