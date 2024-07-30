import './Footer.css'

const template = () => {
  return `
    <footer>
      <ul>
        <li><img src="./assets/logoWhite.png" alt="white logo" class="logoWhite"></li>
        <li><p class="tagline">Living, growing and improving with each day...</p></li>
        <li class="social-icons">
          <a href="mailto:laaars79@yahoo.dk" target="_blank"><img src="./assets/mail.svg" alt="mail"></a>
          <a href="https://github.com/CodeLars79" target="_blank"><img src="./assets/github.svg" alt="github"></a>
          <a href="https://www.linkedin.com/in/lars-bcn/" target="_blank"><img src="./assets/linkedin.svg" alt="linkedin"></a>
        </li>
        <li><p>2024 ©️ Lars Sørensen</p></li>
      </ul>
    </footer>
  `
}

const Footer = () => {
  return template()
}

export default Footer
