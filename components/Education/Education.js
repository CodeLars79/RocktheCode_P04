import data from '../../data/data'
import './Education.css'

const template = () => {
  return `
    <section class="education" id="education">
      <h2>Education</h2>
      ${data.education
        .map(
          (edu) => `
        <div class="education-item">
          <h3>${edu.degree}</h3>
          <p>${edu.university}</p>
          <p>${edu.graduationYear}</p>
          <p>${edu.honors}</p></br>
          <h4>Relevant Courses</h4>
          <ul class="relevant-courses">
            ${edu.relevantCourses
              .map(
                (course) => `
            <li>
              <p>${course}</p>
            </li>
            `
              )
              .join('')}
          </ul>
        </div>
        `
        )
        .join('')}
    </section>
  `
}

const Education = () => {
  return template()
}

export default Education
