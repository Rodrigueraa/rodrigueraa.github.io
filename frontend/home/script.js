const select = document.getElementById('categorias');
const input = document.querySelector('.search-input');
const items = document.querySelectorAll('.list-item');

select.addEventListener('change', filterItems);
input.addEventListener('keyup', filterItems);

function filterItems() {
  const categoriaSelecionada = select.value.toLowerCase();
  const termoPesquisado = input.value.toLowerCase();
  
  items.forEach(item => {
    const categoriaItem = item.getAttribute('data-categoria').toLowerCase();
    const tituloItem = item.textContent.toLowerCase();

    if (categoriaSelecionada === '' || categoriaSelecionada === categoriaItem) {
      if (tituloItem.includes(termoPesquisado)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    } else {
      item.style.display = 'none';
    }
  });
}
