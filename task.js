const button = document.getElementById('eventbtn');
const text = document.getElementById('text')
button.addEventListener('click',function(){
    text.innerHTML='this is a changed text'
  alert('button clicked')
})