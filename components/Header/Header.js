import './Header.css'

const template = () => {
  return `
  <header>
    <a href="#top" class="logo-link">
      <img src="./assets/logo.png" alt="Logo" class="logo" />
    </a>
    <nav>
      <ul>
        <li>
          <a href="#aboutme" class="scroll-link">About me</a>
        </li>
        <li>
          <a href="#education" class="scroll-link">Education</a>
        </li>
        <li>
          <a href="#experience" class="scroll-link">Experience</a>
        </li>
        <li>
          <a href="#projects" class="scroll-link">Projects</a>
        </li>
      </ul>
    </nav>
  </header>
  `
}

const Header = () => {
  return template()
}

export default Header

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.scroll-link')

  links.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault()

      const targetId = this.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 150,
          behavior: 'smooth'
        })
      }
    })
  })
})
