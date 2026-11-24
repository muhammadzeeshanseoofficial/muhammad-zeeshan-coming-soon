// Mobile nav, Services dropdown, FAQ accordion, blog filters
(function(){
  var t=document.querySelector('.nav-toggle'),n=document.getElementById('main-nav');
  if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o);});}
  document.querySelectorAll('.dd-btn').forEach(function(b){
    var m=document.getElementById(b.getAttribute('aria-controls'));
    b.addEventListener('click',function(e){e.stopPropagation();var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);m.classList.toggle('open',!o);});
    document.addEventListener('click',function(e){if(!m.contains(e.target)){b.setAttribute('aria-expanded','false');m.classList.remove('open');}});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'){b.setAttribute('aria-expanded','false');m.classList.remove('open');}});
  });
  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click',function(){var a=document.getElementById(q.getAttribute('aria-controls'));var o=q.getAttribute('aria-expanded')==='true';q.setAttribute('aria-expanded',!o);a.hidden=o;});
  });
  var f=document.querySelector('.filters');
  if(f){f.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;f.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b);});var c=b.dataset.f;document.querySelectorAll('[data-cluster]').forEach(function(p){p.hidden=!(c==='all'||p.dataset.cluster===c);});});}
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
