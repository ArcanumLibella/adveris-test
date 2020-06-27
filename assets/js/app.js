/* Votre code JS ici */
const ctas = document.querySelectorAll('.cta')

for (let index = 0; index < ctas.length; index++) {
  const cta = ctas[index]
  cta.addEventListener('click', () => {
    cta.parentNode.parentNode.parentNode.parentNode.style.display = 'none'
  })
}
