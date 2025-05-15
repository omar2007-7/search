const body = $("body");
const input = $("#input");
const icon = $("#icon");
const inputp = $("#inputp");
const search = $("#search");
const cross = $("#cross");

let i = 1;

search.on("click", () => {
    if (!cross.hasClass("cross")) {
        icon.removeClass("iconr");
        input.removeClass("inputr");
        inputp.removeClass("inputpr");
        search.removeClass("searchr");
        icon.addClass("icon");
        input.addClass("input");
        inputp.addClass("inputp");
        search.addClass("search");
    }
});
cross.on("click", () => {
    icon.removeClass("icon");
    input.removeClass("input");
    inputp.removeClass("inputp");
    search.removeClass("search");
    icon.addClass("iconr");
    input.addClass("inputr");
    inputp.addClass("inputpr");
    search.addClass("searchr");
    cross.addClass("cross");

    setTimeout(() => {
        cross.removeClass("cross");
    }, 3000);
});



const welcome = $("#welcome");
welcome.on("mouseover", () => {
    welcome.addClass("hoverd");
});

welcome.on("mouseout", () => {
    welcome.removeClass("hoverd");
});

const theme_button1 = $("#theme1");
const theme_button2 = $("#theme2");
const theme_button3 = $("#theme3");
const theme_button4 = $("#theme4");
const theme_button5 = $("#theme5");
const theme_button6 = $("#theme6");
const h = $("h1")

theme_button1.on("click", () => {
   body.css("backgroundImage", `url(./assets/images/i1.jpg)`);
    h.css("color"," rgba(0, 0, 0, 0.5)")
});
theme_button2.on("click", () => {
   body.css("backgroundImage", `url(./assets/images/i2.jpg)`);
   h.css("color","white")
});
theme_button3.on("click", () => {
    body.css("backgroundImage", `url(./assets/images/i3.jpg)`);
    h.css("color"," white")
});
theme_button4.on("click", () => {
body.css("backgroundImage", `url(./assets/images/i4.jpg)`);
 h.css("color","rgb(200, 255, 2)")
});
theme_button5.on("click", () => {
body.css("backgroundImage", `url(./assets/images/i5.jpg)`);
 h.css("color"," rgba(0, 0, 200)")
});
theme_button6.on("click", () => {
body.css("backgroundImage", `url(./assets/images/i6.jpg)`);
 h.css("color"," rgba(0, 0, 0)")
});
