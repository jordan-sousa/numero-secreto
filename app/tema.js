document.addEventListener('DOMContentLoaded', function () {
    const bodyElement = document.body
    const toggleButton = document.getElementById('mudar-tema')
    const mudarTema = document.querySelector('#mudar-tema img')
    let isDayMode = true
  
    toggleButton.addEventListener('click', function () {
      isDayMode = !isDayMode
      updateTheme()
    });

    function updateTheme() {
      if (isDayMode) {
        applyDayMode()
      } else {
        applyNightMode()
      }
    }
  
    function applyDayMode() {
      bodyElement.style.background = '#1E1826'
      bodyElement.style.color = '#fff'
      mudarTema.setAttribute('src', 'img/sol.jpg')
    }
  
    function applyNightMode() {
      bodyElement.style.background = '#fff'
      bodyElement.style.color = '#1E1826'
      mudarTema.setAttribute('src', 'img/lua.png')
    }
  });
  