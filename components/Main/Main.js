import './Main.css'
import { AboutMe } from '../AboutMe/AboutMe'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'

let currentSection = 'Experience'

const template = () => {
  return `
  <main>
    ${AboutMe()}
    <div class="button-container">
      <button id="experienceButton" class="${
        currentSection === 'Experience' ? 'active' : ''
      }">Experience</button>
      <button id="educationButton" class="${
        currentSection === 'Education' ? 'active' : ''
      }">Education</button>
    </div>
    <div id="content" class="content-transition">
      ${currentSection === 'Experience' ? Experience() : Education()}
    </div>
    ${Projects()}
  </main>
  `
}

export const Main = () => {
  return template()
}

export const addMainListeners = () => {
  const experienceButton = document.querySelector('#experienceButton')
  const educationButton = document.querySelector('#educationButton')
  const content = document.querySelector('#content')

  const updateContent = (newSection) => {
    content.classList.add('fade-out')
    setTimeout(() => {
      content.innerHTML =
        newSection === 'Experience' ? Experience() : Education()
      content.classList.remove('fade-out')
      content.classList.add('fade-in')
      setTimeout(() => content.classList.remove('fade-in'), 100)
    }, 100)
  }

  experienceButton.addEventListener('click', () => {
    if (currentSection !== 'Experience') {
      currentSection = 'Experience'
      updateContent(currentSection)
      updateButtonState()
    }
  })

  educationButton.addEventListener('click', () => {
    if (currentSection !== 'Education') {
      currentSection = 'Education'
      updateContent(currentSection)
      updateButtonState()
    }
  })

  const updateButtonState = () => {
    experienceButton.classList.toggle('active', currentSection === 'Experience')
    educationButton.classList.toggle('active', currentSection === 'Education')
  }

  updateButtonState()
}
