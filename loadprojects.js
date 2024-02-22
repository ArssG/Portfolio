function loadprojects() {
    fetch('info.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let html = '';
            data.forEach(function (pages) {
                html += `
                <div class="portfolio-box">
                    <img src="${pages.image}" alt="">
                    <div class="portfolio-layer">
                        <h4>${pages.title}</h4>
                        <p>${pages.description}</p>
                        <div class="preview">
                            ${generateButtons(pages)}
                        </div>
                    </div>
                </div>
                `;
            })
            document.getElementById('portfolio-container').innerHTML = html;
        })
        .catch(function (error) {
            console.log(error);
        })
}

function generateButtons(pages) {
    let buttonsHtml = '';

    if (pages.showpagebutton) {
        buttonsHtml += `<a href="assets/pages/${pages.page}/index.html" target="_blank" ><i class='bx bx-window-alt'  ></i></a>`;
    }

    if (pages.showgitbutton) {
        buttonsHtml += `<a href="${pages.link}" target="_blank" ><i class='bx bxl-github' ></i></a>`;
    }

    return buttonsHtml;
}

loadprojects();
