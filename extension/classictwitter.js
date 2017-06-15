function remove(){
  setTimeout(function(){
    document.body.classList.remove("edge-design");
  },20);
}
remove();

setTimeout(remove,20);

window.addEventListener("hashchange", function(){
  setTimeout(remove,20);
});
window.addEventListener("popstate", function(){
  setTimeout(remove,20);
});
window.addEventListener("beforeunload", function() {
  setTimeout(remove,20);
});

var observer = new MutationObserver(function(m) {
    m.forEach(function(mutation) {
        remove();
    });
});
observer.observe(document.querySelector("body"),  {
    attributes: true
});
