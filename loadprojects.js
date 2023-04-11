function loadprojects(){
    fetch('links.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let html = '';
            data.forEach(function(pages){
                html += `
                <div class="portfolio-box">
                <img src="${pages.image}" alt="">
                <div class="portfolio-layer">
                    <h4>${pages.title}</h4>
                    <p>${pages.description}</p>
                    <div class="preview">
                        <a href="assets/pages${pages.page}/index.html"><i class='bx bx-window-alt' ></i></a>
                        <a href="${pages.link}"><i class='bx bxl-github' ></i></a>
                    </div>
                </div>
            </div>
                `;
            })
            document.getElementById('portfolio-container').innerHTML = html;
        })
        .catch(function(error){
            console.log(error);
        })
}
loadprojects();