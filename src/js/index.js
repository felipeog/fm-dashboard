const htmlElement = document.querySelector('html')
const themeToggle = document.querySelector('.toggle')

const toggleTheme = () => {
  const currentTheme = htmlElement.getAttribute('data-theme')
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'

  htmlElement.setAttribute('data-theme', nextTheme)
}

const init = () => {
  themeToggle.addEventListener('click', toggleTheme)
}

window.addEventListener('load', init)
