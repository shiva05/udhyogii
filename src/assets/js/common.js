document.getElementById('files').addEventListener('change', previewFile, false);

/*
Function to preview the files loaded
*/
function previewFile() {

  // New files attached
  var files = document.querySelector('input[type=file]').files;

  if (files) {

    iterateFile(files);

  } else {
    alert("File no detected");
    //If the file is not detected it will     be removed
    $('#imagen' + nFiles).remove();
  }

}

function iterateFile(file2) {
  //alert("Number of Files adding : " + file2.length);
  for (x = 0; x < file2.length; x++) {
    var file = file2[x];
    var reader = new FileReader()

    reader.addEventListener("load", function(event) {
      //Thumbnail generated
      var picFile = event.target;
      $('<img class="box"  height="80" width="80" src="' + picFile.result + '">').appendTo('.container');

      $('.box').draggable({
        cursor: 'move',
        containment : '.container'
      });

    });

    reader.readAsDataURL(file);

  }

}
