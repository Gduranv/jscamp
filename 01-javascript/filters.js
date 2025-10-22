const filter = document.querySelector('#filter-location')
const mensaje = document.querySelector('#filter-selected-value')
const buscador = document.querySelector('#empleos-search-input')
const jobs = document.querySelectorAll('.job-listing-card')

buscador.addEventListener('input', function () {
  const busqueda = buscador.value.toLowerCase()
  console.log(busqueda)
  jobs.forEach(job => {
    const titulo = job.getAttribute('data-titulo').toLowerCase()
    const isShown = titulo === '' || titulo.includes(busqueda)
    job.classList.toggle('is-hidden', isShown === false)
  })

})

filter.addEventListener('change', function () {
  
  const selectedValue = filter.value

  if (selectedValue) {
    mensaje.textContent = `Has seleccionado: ${selectedValue}`
  } else {
    mensaje.textContent = ''
  }

  jobs.forEach(job => {
    // const modalidad = job.dataset.modalidad
    const modalidad = job.getAttribute('data-modalidad')
    const isShown = selectedValue === '' || selectedValue === modalidad
    job.classList.toggle('is-hidden', isShown === false)

  })
})