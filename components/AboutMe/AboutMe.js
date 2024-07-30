import data from '../../data/data'
import './AboutMe.css'

const template = () => {
  return `
    <section class="aboutme" id="aboutme">
      <h2>Hi, I'm Lars. </br>Great to meet you!</h2>
      <img class="avatar" src=${data.avatar} alt=${data.name}/>
      <ul>
      ${data.skills
        .map(
          (skill) => `<li>
      <p>${skill}</p>
      </li>`
        )
        .join('')}
    </ul>
      <p>${data.aboutMe}</p>
      <p>${data.address}</p>
      <a href=${`mailto:${data.email}`}>Say Hello!</a>
    </section>
  `
}

export const AboutMe = () => {
  return template()
}

export const addAboutListeners = () => {
  const avatar = document.querySelector('.avatar')
  const originalSrc = avatar.src
  const winkingSrc = './assets/avatarWinking.jpg'

  avatar.addEventListener('click', (e) => {
    e.target.src = winkingSrc
    e.target.classList.add('tilt')

    setTimeout(() => {
      e.target.src = originalSrc
      e.target.classList.remove('tilt')
    }, 700)
  })
}
