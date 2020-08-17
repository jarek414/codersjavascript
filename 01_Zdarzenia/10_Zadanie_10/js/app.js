const a = document.getElementById("a");
const b = document.getElementById("b");

// Tutaj this wskazuje na obiekt document (Ponieważ kontext wywołania funkcji
// addEventListener to właśnie document)
console.log("obiekt document: ", this);

a.addEventListener("click", function (event) {
  // Tutaj this wskazuje na element DOM o id a
  console.log("a: ", this);
});

b.addEventListener("click", function (event) {
  // Tutaj this wskazuje na element DOM o id b
  console.log("b: ", this);


  function innerFuncOne(element) {
    // Tutaj this wskazuje na element Window, bo funkcja została
    //wywołana bez żadnego kontekstu. // dodalbym parapetr jako element, nastepnie zmianil mu color
    // const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16)
    // this.color = randomColor
    console.log("innerFuncOne: ", this);
  }

  innerFuncOne();

});
