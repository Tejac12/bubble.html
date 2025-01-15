const P = document.getElementById("grand")
P.addEventListener('click', () => {
    setTimeout(() => {
        alert("grand is clicked")
        P.style.backgroundColor = "pink"
    }, 1000);
}, false)
const G = document.getElementById("parent")
G.addEventListener('click', (e) => {
    e.stopPropagation()
    setTimeout(() => {
        alert("parent is clicked")
        G.style.backgroundColor = "lightblue"
    }, 2000)
}, true)

const C = document.getElementById("child")
C.addEventListener('click', () => {
    setTimeout(() => {
        alert("child is clicked")
        C.style.backgroundColor = "orange"
    }, 3000);
}, false)