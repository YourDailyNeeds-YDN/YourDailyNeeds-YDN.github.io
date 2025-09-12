document.addEventListener('click', async (e) => {
  const btn = e.target.closest('[data-copy]'); if (!btn) return;
  try{ await navigator.clipboard.writeText(btn.getAttribute('data-copy').trim());
    const original = btn.textContent; btn.textContent='Copied!'; setTimeout(()=>btn.textContent=original,1200);
  }catch(e){ alert('Copy failed. Long-press to copy.'); }
});