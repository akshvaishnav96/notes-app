shownotes();
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function () {
  let text = document.getElementById("addtext");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.push(text.value);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  text.value = "";
  shownotes();
});
let addbtn2 = document.getElementById("addbtn");
addbtn2.addEventListener("click", function () {
  let title = document.getElementById("addtitle");
  let titlevalue = localStorage.getItem("title");
  if (titlevalue == null) {
    titleobj = [];
  } else {
    titleobj = JSON.parse(titlevalue);
  }
  titleobj.push(title.value);
  localStorage.setItem("title", JSON.stringify(titleobj));
  title.value = "";
  shownotes();
});

function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `<div class="notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
        <h5 style = "color:purple">Note:${index + 1}<h5>
        <hr>
          <p style = "color:brown" class="card-text"  >${element}</p>
          <button class="btn btn-primary" id = "${index}" onclick="deleteNote(this.id)">Delete Note</button>
          </div>
      </div>`;    
  });

  let notesarea = document.getElementById("notesn");
  notes = localStorage.getItem("notes");

  if (notesobj.length != 0) {
    notesarea.innerHTML = html;
  } else {
    notesarea.innerHTML = "please add some note's";
  }
}

function deleteNote(index) {
  console.log("i m deleting", index);
  notes = localStorage.getItem("notes");
  if (notes == 0) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  shownotes();
}

let search = document.getElementById("searchtxt");
search.addEventListener("input", function () {
  inputVal = search.value;
  let notes = document.getElementsByClassName("notecard");
  Array.from(notes).forEach(function (element) {
    let notetext = element.getElementsByTagName("p")[0].innerText;

    if (notetext.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
  let title = document.getElementsByClassName("notecard");
  Array.from(notes).forEach(function (element) {
    let titletext = element.getElementsByTagName("h5")[0].innerText;
    if (titletext.includes(inputVal)) {
      element.style.display = "block";
    }
  });
});
