// Copy affiliate or category links to clipboard
function wireCopyButtons(){
  document.querySelectorAll('[data-copy]').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const text = btn.getAttribute('data-copy');
      try{
        await navigator.clipboard.writeText(text);
        const prev = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(()=>btn.textContent = prev, 1400);
      }catch(e){
        btn.textContent = 'Copy failed';
        setTimeout(()=>btn.textContent='Copy Link', 1400);
      }
    });
  });

  // Category share buttons
  document.querySelectorAll('.share-btn').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      try{
        await navigator.clipboard.writeText(btn.dataset.share || location.href);
        const prev = btn.textContent;
        btn.textContent = 'Link copied!';
        setTimeout(()=>btn.textContent = prev, 1500);
      }catch(e){}
    });
  });
}
document.addEventListener('DOMContentLoaded', wireCopyButtons);
