function submit(){
  let title = document.getElementById("title").value
  let author = document.getElementById("author").value
  let isbn = document.getElementById("isbn").value

  if(title==""||author==""||isbn== ""|| title+author==""|| title+isbn==""|| author+isbn==""){
    setTimeout(()=>{
      document.getElementById("books").style.display="none"
    },3000);
    document.getElementById("books").innerHTML="please provide every detail of your book!!"
    document.getElementById("books").style.backgroundColor="red"
    document.getElementById("books").style.transition="2s"
  }
  else{


    document.getElementById("rip").innerHTML +=`
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td  class="delete">X</td>
    `
    setTimeout(()=>{
    document.getElementById("books").style.display="none"

   
  },3000);
  document.getElementById("books").innerHTML= "book added"
  document.getElementById("books").style.backgroundColor="green"
  document.getElementById("books").style.transition="2s"
}
let currentTask = document.querySelectorAll(".delete");
for(let i=0;i<currentTask.length;i++){
  currentTask[i].onclick=function(){
    this.parentNode.remove();
  }
}
}