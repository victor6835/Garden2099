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



// menu---------------------------------------------------------
// .main-menu .container .menu-list

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

// onlineShop---------------------------------------------------------------
//.main-onlineShop .shop-list
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

// .main-onlineShop .shop-list .icon-cart
let iconCarts = document.querySelectorAll(".icon-cart");
for (let iconCart of iconCarts) {
    iconCart.onclick = e => {
        alert("商品已加入購物車");
        return false;
    }
}

//itemPage

let itemSmalls = document.querySelectorAll(".itemSmallPic");
for (let itemSmall of itemSmalls) {
    itemSmall.onclick = e => {
        e.preventDefault()
        let src = e.target.getAttribute("src");
        document.getElementById("itemBigPic").setAttribute("src", src);
    }
}

// cart------------------------------------------------------------------------
function updateQuantity(btnElement, change) {
    const qtyInput = btnElement.parentNode.querySelector('.qty');
    let currentQuantity = parseInt(qtyInput.value);

    if (currentQuantity + change >= 0) {
        currentQuantity += change;
        qtyInput.value = currentQuantity;
        updateTotal();
    }
}

function removeProduct(btnElement) {
    const qtyInput = btnElement.parentNode.parentNode.querySelector('.qty');
    qtyInput.value = 0;
    updateTotal();
}

function updateTotal() {
    let total = 0;
    let resultTotal = 0;

    document.querySelectorAll('.product').forEach((product) => {
        const price = parseFloat(product.getAttribute('data-price'));
        const quantity = parseInt(product.querySelector('.qty').value);
        const itemTotal = price * quantity;

        total += itemTotal;
    });

    if (total > 0) {
        resultTotal = total + 60;
    }

    document.getElementById('totalAmount').textContent = "$" + total.toFixed(2);
    document.getElementById('totalAmountResult').textContent = "$" + resultTotal.toFixed(2);
}

/*
function updateQuantity(btnElement, change) {
    // console.log(btnElement);
    // console.log(btnElement.parentNode);
    const qtyInput = btnElement.parentNode.querySelector('.qty');
    // console.log(qtyInput);
    // console.log(qtyInput.value);
    let currentQuantity = parseInt(qtyInput.value);
    // 初始:0 下一個:1  
    if (currentQuantity + change >= 0) {
        currentQuantity += change;
        
        qtyInput.value = currentQuantity;
        updateTotal();
    }
}

function removeProduct(btnElement) {
    console.log(btnElement);
    // console.log(btnElement);
    // console.log(btnElement.parentNode.parentNode)
    const qtyInput = btnElement.parentNode.parentNode.querySelector('.qty');
    console.log(qtyInput)
    qtyInput.value = 0;
    updateTotal();
}

function updateTotal() {
    let total = 0;

    document.querySelectorAll('.product').forEach((product) => {
        // console.log(document.querySelectorAll('.product'));
        // console.log(product);
        const price = parseFloat(product.getAttribute('data-price'));
        const quantity = parseInt(product.querySelector('.qty').value);
        const itemTotal = price * quantity;
        // console.log(price);
        total += itemTotal; // 總金額不包含運費
        if(quantity > 0){
            resultTotal = total + 60;
        }else{
            total = 0
            resultTotal = 0;
        }
    });

    document.getElementById('totalAmount').textContent = "$" + total.toFixed(2);
    document.getElementById('totalAmountResult').textContent = "$" + resultTotal.toFixed(2);
}
*/





//order-confirm(random-number)-----------------------------------------------

// 等待整個文檔都載入完畢
document.addEventListener('DOMContentLoaded', function () {
    // 獲取顯示訂單編號的元素
    let orderNumberElement = document.getElementById('order-number');
    let randomOrderNumber = generateRandomOrderNumber();
    // 將生成的訂單編號設置到元素中
    orderNumberElement.textContent = randomOrderNumber;
});

// 生成隨機的十位數訂單編號的函數
function generateRandomOrderNumber() {
    // 生成一個介於 1000000000 到 9999999999 之間的隨機數
    let randomNum = Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000;
    // 轉換為字符串，並返回前十位
    return String(randomNum).substring(0, 10);
}


// index(放在上面干擾)------------------------------------------------------------------
//.picinfo .tobar-phone
$(document).ready(function () {
    // 檢查視窗寬度是否小於等於 768px
    function checkWindowSize() {
        if ($(window).width() <= 768) {
            let shopCategories = ["外觀", "內部", "料理", "科技工廠"];
            let shopIds = ["#outside-phone", "#inside-phone", "#dishes-phone", "#techLab-phone"];
            let currentIndex = 0;

            // 初始狀態，顯示 #outside-phone 的內容
            $("#topbarText").text(shopCategories[currentIndex]);
            $(".shopintro").hide();
            $(shopIds[currentIndex]).show();

            $("#topbarNext").click(function () {
                // 增加索引，如果必要，進行循環
                currentIndex = (currentIndex + 1) % shopCategories.length;

                // 更新店舖類別文字
                $("#topbarText").text(shopCategories[currentIndex]);

                // 隱藏所有的 shopintro，並顯示當前選中的 shopintro
                $(".shopintro").hide();
                $(shopIds[currentIndex]).show();

                // 阻止默認的鏈接行為
                return false;
            });

            $("#topbarLast").click(function () {
                // 減少索引，如果必要，進行循環
                currentIndex = (currentIndex - 1 + shopCategories.length) % shopCategories.length;

                // 更新店舖類別文字
                $("#topbarText").text(shopCategories[currentIndex]);

                // 隱藏所有的 shopintro，並顯示當前選中的 shopintro
                $(".shopintro").hide();
                $(shopIds[currentIndex]).show();

                // 阻止默認的鏈接行為
                return false;
            });
        }
    }

    // 頁面加載時檢查一次視窗大小
    checkWindowSize();

    // 監聽視窗大小變更事件
    $(window).resize(function () {
        // 檢查視窗大小
        checkWindowSize();
    });
});