function addNote() {
    const title = document.getElementById("title").value;
    const note = document.getElementById("note").value;

    if (title && note) {
        const notesList = document.getElementById("notes-list");
        const li = document.createElement("li");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const button = document.createElement("button");

        h2.innerText = title;
        p.innerText = note;
        button.innerText = "Delete";
        button.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(h2);
        li.appendChild(p);
        li.appendChild(button);
        notesList.appendChild(li);

        document.getElementById("title").value = "";
        document.getElementById("note").value = "";
    } else {
        alert("Please enter both title and note!");
    }
}
