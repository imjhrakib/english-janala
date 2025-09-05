const loadLessons = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all"
  fetch(url).then((res) => res.json()).then((json) => {
    displayLesson(json.data)
  })
}

// load Level by words
const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`
  fetch(url).then((res) => res.json()).then((json) => {
    displayLevelWord(json.data)
  })
}

const displayLevelWord = (words) => {
  const wordContainer = document.getElementById("word-container")
  wordContainer.innerHTML = ""

  if (words.length == 0) {
    wordContainer.innerHTML = `
      <div class="text-center mx-auto col-span-full py-10 space-y-4 font-bangla">
        <img src="./assets/alert-error.png" class="mx-auto"/>
        <h2 class="text-xl text-[#79716B] font-medium">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</h2>      
        <p class="text-4xl font-bold">নেক্সট Lesson এ যান</p>
      </div>
    
    `
    return
  }  

  words.forEach(word => {
    const card = document.createElement("div")
    card.innerHTML = `
      <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
        <h2 class="font-bold text-2xl">${word.word?word.word:"Word not found"}</h2>
        <p class="font-semibold">Meaning/ Pronunciation</p>
        <p class="font-medium text-2xl font-bangla">${word.meaning?word.meaning:"Meaning not found"} / ${word.pronunciation?word.pronunciation:"Pronunciation not found"}</p>
        <div class="flex justify-between">
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
        </div>
    </div>
    `
    wordContainer.appendChild(card)
  });
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
      <button onClick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i> Learn - ${lesson.level_no}
      </button>
    
    `
    // append into container
    levelContainer.append(btnDiv)
  }

}

loadLessons()