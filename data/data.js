const data = {
  name: 'Lars Sorensen',
  address: '',
  email: 'laaars79@yahoo.dk',
  avatar: './assets/avatar.jpg',
  aboutMe:
    "As a dedicated designer, web developer, and architect, I bring a unique blend of skills and experiences to every project. I hold a Master's degree in Architecture and soon a Web Development Certification. My goal is to create elegantly simple designs and innovative digital experiences. With a quiet confidence, an innate curiosity, and a commitment to continual improvement, I strive to push the boundaries of design and technology. <br><br>Born and raised in Denmark. Based in Barcelona (ES) for the past 15+ years.<br>Fluent in Danish, English and Spanish.<br>I'm a family guy, I enjoy making my own pizza and love a good documentary.",

  education: [
    {
      degree: 'Full Stack Developer',
      university: 'Rock the Code (ES)',
      graduationYear: 'Ongoing',
      honors: '',
      relevantCourses: ['Web Development Fundamentals', 'Frontend Development']
    },
    {
      degree: 'Master of Architecture (M.Arch)',
      university:
        'Academy of Fine Arts, School of Architecture, Copenhagen (DK)',
      graduationYear: 2006,
      honors: '',
      relevantCourses: ['Architecture', 'Design', 'Urbanism']
    }
  ],
  workExperience: [
    {
      position: 'Web Developer',
      company: 'Self-employed',
      startDate: '2024',
      endDate: 'Present',
      description:
        'Driven by a passion for digital design, I am dedicated to bridging the gap between physical architecture and the digital realm. Embarking on a steady journey towards tech, hopefully crafting solutions that inspire and engage.'
    },
    {
      position: 'Architect',
      company: 'Various Architecture Firms',
      startDate: '2007',
      endDate: 'Present',
      description:
        'As an architect with expertise across all stages of the building process, I have been focusing on project detailing and pioneering building envelope solutions. I have lead teams from initial sketches through to completed projects. I am known for my collaborative spirit, flexibility, and commitment to continuous growth and learning.'
    }
  ],
  skills: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'VS Code', 'Sass'],
  projects: [
    {
      title: 'E-commerce Website',
      description:
        'The Bloomify landing page template is an e-commerce platform showcasing the content of an online store selling greenery. A minimalistic, full responsive design created exclusively with HTML and CSS. ',
      link: 'https://01-landingpage.netlify.app/',
      preview: './assets/P01.jpg'
    },
    {
      title: 'Art Platform',
      description:
        'Good Urbanite is an art platform with dynamic content creation. Art posters are generated with JavaScript by iterating through an array with a loop, and the posters are rendered in the HTML using the DOM.',
      link: 'https://02-artspace-filters.netlify.app/',
      preview: './assets/P02.jpg'
    },
    {
      title: 'Photo App',
      description:
        'The Photozy project focuses on using asynchronous code. All the displayed data is retrieved from an opensource API and showcased through free search. It is an interactive application developed with Vite using HTML, CSS and JavaScript.',
      link: 'https://03-async.netlify.app',
      preview: './assets/P03.jpg'
    }
  ]
}

export default data
