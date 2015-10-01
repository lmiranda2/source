//overall app logic and loader...
function travelNotes() {
  "use strict";

  $('.remove-all-notes').hide();

  function removeNote(event)
  {
    event.preventDefault();
    var self = this;
    $(this.parentElement).fadeOut("slow", function()
      {
        self.parentElement.remove();
        if($('.note-output p').length == 0)
          $('.remove-all-notes').fadeOut("slow", $('.remove-all-notes').hide);

      });
  }

  //manage input field and new note output
  function createNote() {
    //object for wrapper html for note
    var $note = $("<p>");
    //define input field
    var $note_text = $(".note-input input");
    //conditional check for input field
    if ($note_text.val() !== "") {
    //set content for note
    $note.html($note_text.val());

    var removeButton = $("<a href='' class='remove-note'>X</a>");
    removeButton.on("click", removeNote);

    $note.append(removeButton);
    //hide new note to setup fadeIn...
    $note.hide();
    //append note text to note-output
    $(".note-output").append($note);
    //fadeIn hidden new note
    $note.fadeIn("slow");
    $note_text.val("");

    $('.remove-all-notes').show();
    }
  }

  function removeAllNotes()
  {
    $('.note-output p').fadeOut("slow", $(".note-output p").remove);
    $('.remove-all-notes').fadeOut("slow", $(".remove-all-notes").hide);
  }

  //handle user event for `add` button click
  $(".remove-all-notes").on("click", function(e) {
    removeAllNotes();
  });

  $(".note-input>button").on("click", function(e) {
    createNote();
  });

  //handle user event for keyboard press
  $(".note-input input").on("keypress", function(e){
    //check code for keyboard press
    if (e.keyCode === 13) {
      createNote();
    }
  });

};

$(document).ready(travelNotes);
