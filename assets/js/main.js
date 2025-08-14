(function(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.getElementById('nav-links');
  if(toggle && links){
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  const y = document.getElementById('year');
  if(y){ y.textContent = String(new Date().getFullYear()); }
})();
