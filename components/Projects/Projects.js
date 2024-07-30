import data from '../../data/data'
import './Projects.css'

const template = () => {
  return `
  <section class="projects" id="projects">
    <h2>Recent Projects</h2>
    <ul>
      ${data.projects
        .map(
          (project) => `
      <li>
        <div class="img-container">
          <img src=${project.preview} alt=${project.title} />
        </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href=${project.link} target="_blank">Liveview</a>
      </li>
      `
        )
        .join('')}
    </ul>
  </section>
  `
}

const Projects = () => {
  return template()
}

export default Projects
