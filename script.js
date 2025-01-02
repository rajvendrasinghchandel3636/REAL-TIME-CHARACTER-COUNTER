const textArea = document.getElementById("textarea")
const totalChar = document.getElementById("totalchar")
const remainChar = document.getElementById("remainchar")

textArea.addEventListener('keyup', ()=>{
    updatecounter()
});
function updatecounter(){
    totalChar.innerText = textArea.value.length;
    remainChar.innerText= textArea.getAttribute("maxLength") - textArea.value.length;
}