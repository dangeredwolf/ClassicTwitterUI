var w=window,d=document;

function r(){
  setTimeout(function(){
    d.body.classList.remove("edge-design");
  });
}
r();

w.addEventListener("popstate",r);

(new MutationObserver(r)).observe(d.querySelector("body"),{attributes:1});
