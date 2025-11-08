// navigation.js
document.querySelectorAll('.mobile-menu-button').forEach(btn=>{
  btn.addEventListener('click', ()=> {
    const menu = document.querySelector('.mobile-menu');
    if(!menu) return;
    menu.classList.toggle('hidden');
  });
});

// add 'active' class based on path
document.querySelectorAll('a.nav-link').forEach(a=>{
  try {
    const href = a.getAttribute('href');
    if(location.pathname.endsWith(href)) a.classList.add('active');
  } catch(e){}
});
