var modal = document.getElementById("DownloadModal");
var span = $(".close")[0];
var downloadbutton = $(".DownloadButton")[0];
var agreedbutton = $("#agreed");
var err = document.getElementById("err");

var songs = {
    "Through the Roof": ["kgU75fgVhnU", "./MusicFiles/Through_The_roof.mp3"],
    "A Spring Night": ["u62hWAkDTjk", "./MusicFiles/A_Spring_Night.mp3"],
    "Before the Fight": ["N_l7pafcsZ8", "./MusicFiles/Before_The_Fight.mp3"],
    "The Two of us #2": ["B26i3HiP8YM", "./MusicFiles/The_Two_Of_Us_2"]
}

function Download(fp) {
    modal.style.display = "block";
    downloadbutton.onclick = function() {
        if (agreedbutton.is(":checked")) {
            modal.style.display = "none";
            err.style.visibility = "hidden";

            var link = document.createElement("a");
            link.download = fp;
            link.href = fp;
            link.target = "_blank";
            document.body.append(link);
            link.click();
            link.remove()
        } else {
            err.style.visibility = "visible";
        }

    }
}

function MakeButton(name, songtable) {
    var headerText = `<h2 style="margin-bottom:8px;">${name}</h2>`;
    var embedText = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${songtable[0]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    var downloadText = `<a href="#" onclick="Download('${songtable[1]}')">Download this song</a>`

    document.getElementById("content").innerHTML += `<hr><div class="Song">${headerText} ${embedText}<br>${downloadText}</div><hr><br>`;
}

for (const [key, value] of Object.entries(songs)) {
    MakeButton(key, value);
}

span.onclick = function() {
    modal.style.display = "none";
    err.style.visibility = "hidden";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        err.style.visibility = "hidden";
    }
}