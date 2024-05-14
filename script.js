// Função para mostrar as visualizações em cada noticia 
function updateViewCountForCurrentNews() {
  if (window.location.pathname.includes("/noticias/noticia-")) {
    let newsIdentifier = window.location.pathname.split("/").pop().split(".")[0];

    let checkCount = localStorage.getItem('checkCount-' + newsIdentifier) || 0;

    checkCount++;

    localStorage.setItem('checkCount-' + newsIdentifier, checkCount);
    
    let elements = document.querySelectorAll('.check-count.identifier-' + newsIdentifier);
    elements.forEach(function(element) {
      element.innerText = checkCount;
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  if (!window.location.pathname.includes("/noticias/noticia-")) {
    return;
  }

  updateViewCountForCurrentNews();
});

// Função para mostrar o total de visualizações na página principal
  document.addEventListener('DOMContentLoaded', function() {
    let newsIdentifiers = ['noticia-1', 'noticia-2', 'noticia-3', 'noticia-4'];

    newsIdentifiers.forEach(function(identifier) {
      updateTotalViewCountForNews(identifier);
    });
  });

  function updateTotalViewCountForNews(identifier) {
    let totalViews = localStorage.getItem('checkCount-' + identifier) || 0;
    let elements = document.querySelectorAll('.total-views.identifier-' + identifier);
    
    elements.forEach(function(element) {
      element.innerText = totalViews + " Visualizações";
    });
  }

// Função para mostra o tal de visualizações na página de tecnologia 

function updateTotalViewsTecnologia() {
  let totalViewsNoticia1 = localStorage.getItem('totalViewsNoticia1') || 0;
  let totalViewsNoticia4 = localStorage.getItem('totalViewsNoticia4') || 0;

  document.getElementById('total-views-noticia-1').textContent = totalViewsNoticia1;
  document.getElementById('total-views-noticia-4').textContent = totalViewsNoticia4;
}

document.addEventListener('DOMContentLoaded', function() {
  updateTotalViewsTecnologia();
});

//Função para resetar o contador de visualização

function resetAndViewCount(identifier) {
  localStorage.removeItem('checkCount-' + identifier);
  updateViewCount(identifier); 
}

resetViewCount('noticia-1');
resetViewCount('noticia-2');
resetViewCount('noticia-3');
resetViewCount('noticia-4');