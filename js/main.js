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

//picinfo>left-big & smallpic
let smallIntros = document.querySelectorAll(".smallpics");

for (let smallIntro of smallIntros) {
    smallIntro.onclick = e => {
        e.preventDefault();
        let src = e.target.getAttribute("src");

        // 使用querySelectorAll選擇所有匹配的元素
        let leftBigImgs = document.querySelectorAll(".left-big-img");
        
        // 遍歷NodeList，為每個元素設置src屬性
        leftBigImgs.forEach(leftBigImg => {
            leftBigImg.setAttribute("src", src);
        });
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

// onlineShop-------------------------------------------
//.main-onlineShop .shop-list---------------------------------
let onlineTopbars = document.querySelectorAll(".online-topbar");
for (let onlineTopbar of onlineTopbars) {
    onlineTopbar.onclick = function (event) {
        event.preventDefault();
        let href = this.getAttribute("href");
        if (href.startsWith("#")) {
            let targetId = href.substring(1);

            document.querySelector(".online-topbar.active").classList.remove("active");
            document.querySelector(".shop-list.active").classList.remove("active");
            this.classList.add("active");

            document.getElementById(targetId).classList.add("active")
        }
    }
}

// .main-onlineShop .shop-list .icon-cart-----------------------------------
let iconCarts = document.querySelectorAll(".icon-cart");
for(let iconCart of iconCarts){
    iconCart.onclick = e =>{
        alert("商品已加入購物車");
        return false;
    }
}

//itemPage

let itemSmalls = document.querySelectorAll(".itemSmallPic");
for(let itemSmall of itemSmalls){
    itemSmall.onclick = e =>{
        e.preventDefault()
        let src = e.target.getAttribute("src");
        document.getElementById("itemBigPic").setAttribute("src", src);
    }
}


