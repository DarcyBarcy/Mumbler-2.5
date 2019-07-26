
var comments = new Array();

window.onload = init;

function init(){
  var submitBut = document.getElementById("submit");
  submitBut.onclick = getComments;
  // getComments();
}

function Comment(username, comment){
  this.username = username;
  this.comment = comment;
  this.done = false;
}


function getComments(){
  var usernameOf = document.getElementById('user').value;
  var commentary = document.getElementById('com').value;
  var commentObj = new Comment(usernameOf, commentary);
  comments.push(commentObj);
  addComment(commentObj);
  //addComments();
}

function addComments(){
  var ul = document.getElementById("commentList");
  for (var i = 0; i < comments.length; i++){
    var comment1 = comments[i];
    var li = document.createElement("li");
    li.innerHTML =  comment1.username + comment1.comment + comments.length;
    ul.appendChild(li);
    document.forms[0].reset();
  }
}

function addComment(commentItem){
  var ul = document.getElementById('commentList');
  var li = document.createElement("li");
  li.innerHTML = commentItem.username + ":" + commentItem.comment;
  ul.appendChild(li);
  document.forms[0].reset();
}
