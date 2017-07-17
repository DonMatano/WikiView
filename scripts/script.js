$(document).ready(function() {

    var DELAY = 700,
        clicks = 0,
        timer = null;

    $("#theScroll").on("click", function() {
            clicks++; //increase the clicks made

            if (clicks === 1) {
                timer = setTimeout(function() {
                    showSearchModal(); //Do single click action
                    clicks = 0; //After action reset counter
                }, DELAY);
            } else //It's a double click
            {
                clearTimeout(timer); //prevent single-click action
                randomSearch(); //page double clicked, do a random search
                clicks = 0; //after action performed, reset counter
            }
        })
        .on("dblclick", function(event) {
            event.preventDefault(); //cancel system double-click event
        });

    $("#learnMoreLink").on("click", function(event) {
        event.stopPropagation(); //Stop the click event of theScroll from happening
    });

    $(".list-group-item").on("click", function(event) {
        event.stopPropagation();
    });

});


function showSearchModal() {
    bootbox.prompt({
        title: "What do you want to search for?",

        callback: function(result) {
            if (result) {
                search(result);
            }
        },
        buttons: {
            confirm: {
                label: "Search <i class='glyphicon glyphicon-search'>"
            }
        },
        backdrop: true,
        className: "center-block"
    });
}

function search(topic) {
    $("p").fadeOut(1200, function() {
        html = "";
        html += "<div class='list-group'>";
        html += "<a href='#' class='list-group-item'>";
        html += "<h4 class='list-group-item-heading'> Heading 1</h4>";
        html += "<p class='list-group-item-text'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>";
        html += "</a>";
        html += "<a href='#' class='list-group-item'>";
        html += "<h4 class='list-group-item-heading'> Heading 1</h4>";
        html += "<p class='list-group-item-text'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>";
        html += "</a>";
        html += "<a href='#' class='list-group-item'>";
        html += "<h4 class='list-group-item-heading'> Heading 1</h4>";
        html += "<p class='list-group-item-text'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>";
        html += "</a>";
        html += "<a href='#' class='list-group-item'>";
        html += "<h4 class='list-group-item-heading'> Heading 1</h4>";
        html += "<p class='list-group-item-text'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>";
        html += "</a>";
        html += "<a href='#' class='list-group-item'>";
        html += "<h4 class='list-group-item-heading'> Heading 1</h4>";
        html += "<p class='list-group-item-text'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>";
        html += "</a>";
        html += "<a href='#' class='list-group-item'>";
        html += "<h4 class='list-group-item-heading'> Heading 1</h4>";
        html += "<p class='list-group-item-text'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>";
        html += "</a>";
        html += "<a href='#' class='list-group-item'>";
        html += "<h4 class='list-group-item-heading'> Heading 1</h4>";
        html += "<p class='list-group-item-text'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>";
        html += "</a>";
        html += "<a href='#' class='list-group-item'>";
        html += "<h4 class='list-group-item-heading'> Heading 1</h4>";
        html += "<p class='list-group-item-text'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>";
        html += "</a>";
        html += "<a href='#' class='list-group-item'>";
        html += "<h4 class='list-group-item-heading'> Heading 1</h4>";
        html += "<p class='list-group-item-text'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>";
        html += "</a>";
        html += "<a href='#' class='list-group-item'>";
        html += "<h4 class='list-group-item-heading'> Heading 1</h4>";
        html += "<p class='list-group-item-text'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>";
        html += "</a>";
        html += "</div>";

        $("#theScroll").fadeIn(2000).html(html);
    });
}


function randomSearch() {
    RANDOM_URL = "https://en.wikipedia.org/wiki/Special:Random";
    var win = window.open(RANDOM_URL, "_blank");
    win.focus();
}