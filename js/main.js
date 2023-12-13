// index-------------------------------------------------------
// picinfo>topbar
let topbarLinks = document.querySelectorAll(".topbar-link");
for (let topbarLink of topbarLinks) {
    topbarLink.onclick = function (event) {
        event.preventDefault(); // 防止跳頁
        let href = this.getAttribute("href");
        if (href.startsWith("#")) {
            let targetId = href.substring(1);

            document.querySelector(".topbar-link.active").classList.remove("active");
            document.querySelector(".shopintro.active").classList.remove("active");//刪除原本有active的，再將點擊的加上active

            this.classList.add("active");
            document.getElementById(targetId).classList.add("active");//刪除原本有active的，再將點擊的加上active
        }
    }
}

// menu----------------------------------------------------
// .main-menu .container .menu-list------------------------

let menuSideLists = document.querySelectorAll(".side-list");
for (let menuSideList of menuSideLists) {
    menuSideList.onclick = function (event) {
        event.preventDefault();
        let href = this.getAttribute("href");
        if (href.startsWith("#")) {
            let targetId = href.substring(1);

            document.querySelector(".side-list.active").classList.remove("active");
            document.querySelector(".menu-list.active").classList.remove("active");
            this.classList.add("active");

            document.getElementById(targetId).classList.add("active")
        }
    }
}


