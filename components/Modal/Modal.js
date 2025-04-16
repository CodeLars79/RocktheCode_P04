import './Modal.css'

export const Modal = () => {
  return `
    <div id="contactModal" class="modal hidden">
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <h3 id="modaltitle">Drop me a line...</h3>
        <form action="https://formsubmit.co/2974e4026038a8ba9a4eb6e6464d1b10" method="POST" id="contactForm">
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" required></textarea>
          <div class="form-button-container">
            <button type="submit">Send</button>
          </div>
        </form>
        <div id="toast" class="toast hidden"></div>
      </div>
    </div>
  `
}

export const addModalListeners = () => {
  const modal = document.getElementById('contactModal')
  const openBtn = document.getElementById('openModalBtn')
  const closeBtn = modal.querySelector('.close-button')
  const form = modal.querySelector('#contactForm')
  const toast = modal.querySelector('#toast')

  const showToast = (message, type = 'success') => {
    toast.textContent = message
    toast.className = `toast show ${type}`
    setTimeout(() => {
      toast.classList.remove('show')
    }, 3000)
  }

  openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
  })

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden')
  })

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const formData = new FormData(form)

    try {
      const response = await fetch(
        'https://formsubmit.co/2974e4026038a8ba9a4eb6e6464d1b10',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json'
          }
        }
      )

      if (response.ok) {
        showToast('Thanks! Your message was sent.', 'success')
        form.reset()
        setTimeout(() => {
          modal.classList.add('hidden')
        }, 4000)
      } else {
        showToast('Oops! Something went wrong.', 'error')
      }
    } catch (error) {
      showToast('Error sending the message. Please try again.', 'error')
    }
  })

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden')
    }
  })
}
