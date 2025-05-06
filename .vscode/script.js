function trocarDeModo() {
  const html = document.documentElement
  if (html.classList.contains("modoclaro")) {
    html.classList.remove("modoclaro")
  } else {
    html.classList.add("modoclaro")
  }

  const img = document.querySelector("#perfil img")

  if (html.classList.contains("modoclaro")) {
    img.setAttribute("src", "./imagens/socialsemfundo.png")
  } else {
    img.setAttribute("src", "./imagens/Perfilsemfundo.png")
  }
}
