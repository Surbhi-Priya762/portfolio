document.querySelectorAll(".project-card img").forEach(image => {

    image.onclick = () => {

        let popup = document.createElement("div");
        popup.classList.add("popup");

        popup.innerHTML = `
            <span class="close-btn">&times;</span>
            <img src="${image.src}">
        `;

        document.body.appendChild(popup);

        popup.querySelector(".close-btn").onclick = () => {
            popup.remove();
        };
    };

});