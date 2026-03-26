(function() {
  let currentPage = 1;
  const pages = document.querySelectorAll('.challenge-page');
  const prevBtn = document.getElementById('prevPage');
  const nextBtn = document.getElementById('nextPage');
  const pageInfo = document.getElementById('pageInfo');

  if (!pages.length || !prevBtn || !nextBtn || !pageInfo) return;

  function updatePagination() {
    pages.forEach((p, idx) => {
      if (idx === currentPage - 1) {
        p.classList.add('active');
        p.style.display = 'block';
      } else {
        p.classList.remove('active');
        p.style.display = 'none';
      }
    });

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === pages.length;
    pageInfo.innerText = `${currentPage} / ${pages.length}`;
  }

  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
    }
  };

  nextBtn.onclick = () => {
    if (currentPage < pages.length) {
      currentPage++;
      updatePagination();
    }
  };

  if (pages.length <= 1) {
    nextBtn.disabled = true;
  }
  
  updatePagination();
})();
