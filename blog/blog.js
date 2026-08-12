const header=document.querySelector('.site-header');
const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('.main-nav');
if(header)window.addEventListener('scroll',()=>header.classList.toggle('is-scrolled',window.scrollY>50),{passive:true});
if(menuButton&&menu){menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')))}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const filters=[...document.querySelectorAll('[data-filter]')];
const posts=[...document.querySelectorAll('[data-category]')];
const search=document.querySelector('#blog-search');
let active='todos';
const applyFilters=()=>{const query=(search?.value||'').toLocaleLowerCase('pt-BR').trim();let visible=0;posts.forEach(post=>{const matchesCategory=active==='todos'||post.dataset.category===active;const matchesQuery=!query||post.innerText.toLocaleLowerCase('pt-BR').includes(query);const show=matchesCategory&&matchesQuery;post.hidden=!show;if(show)visible++});const empty=document.querySelector('.empty');if(empty)empty.style.display=visible?'none':'block'};
filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));button.classList.add('active');active=button.dataset.filter;applyFilters()}));
search?.addEventListener('input',applyFilters);
document.querySelectorAll('[data-copy-link]').forEach(button=>button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);button.textContent='Link copiado'}catch{button.textContent='Copie o endereço da página'}}));
