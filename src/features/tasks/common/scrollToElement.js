export const scrollToElement = (id) => {
  document
    .getElementById(id)
    .scrollIntoView({ behavior: 'smooth', alignTo: false, inline: 'center' })
}
