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

body.css("backgroundImage", `url(./assets/images/i${i}.jpg)`);