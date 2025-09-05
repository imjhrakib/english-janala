const loadLessons = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all"
  fetch(url).then((res) => res.json()).then((json) => {
    displayLesson(json.data)
  })
}

const displayLesson = (lessons) => {
  // get the container & empty container
  const levelContainer = document.getElementById("level-container")
  levelContainer.innerHTML = ""

  // get into every lessons
  for (let lesson of lessons) {
    // create element
    const btnDiv = document.createElement("div")
    btnDiv.innerHTML = `
      <button class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i> Learn - ${lesson.level_no}
      </button>
    
    `
    // append into container
    levelContainer.append(btnDiv)
  }

}

loadLessons()