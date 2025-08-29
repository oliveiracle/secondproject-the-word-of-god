// Pega todos os botões de categoria
const categoryButtons = document.querySelectorAll('.category-btn');
// Pega todos os grupos de subcategorias
const subcategoryGroups = document.querySelectorAll('.subcategory-group');

// Para cada botão de categoria, adicione um 'escutador' de clique
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Esconda todos os grupos de subcategorias
    subcategoryGroups.forEach(group => {
      group.classList.remove('active');
    });

    // Pega o ID do grupo que corresponde ao botão clicado
    // Exemplo: 'angry-btn' se transforma em 'angry-group'
    const targetGroupId = button.id.replace('-btn', '-group');
    const targetGroup = document.getElementById(targetGroupId);

    // Se o grupo existir, mostre-o adicionando a classe 'active'
    if (targetGroup) {
      targetGroup.classList.add('active');
    }
  });
});