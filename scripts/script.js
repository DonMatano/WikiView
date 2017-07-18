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
        showMoreInfoModal();
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

function showMoreInfoModal() {
    var message = "This is a magical scroll. It know's what you want. If you just <b>click or tap</b> on it only once it will ask you what you want.";
    message += "If you <b>double tap or double click</b> it, will show you any wikipedia it feels like. Enjoy the magical scroll.";
    bootbox.alert({
        message: message,
        size: "large",
        backdrop: true
    });
}

function search(topic) {

    var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
    url += topic;

    $.ajax({
        type: "GET",
        url: url,
        data: {},
        dataType: "jsonp",
        success: function(response) {
            console.log(response);
            showResultList(response.query.pages);
        },
        error: function(err) {
            alert(err.toString());
        },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Api-User-Agent", "Mwakimamatano@gmail.com");
        }
    });


}

function showResultList(pages) {
    var searchURL = "http://en.wikipedia.org/?curid=";
    $("p").fadeOut(2000).remove();
    var html = "";
    // html += "<h2 class='text-center' id='topInstruction'>Click/tap here to make a new search or double click/tap to make a random search.</h2>";
    html += "<div class='list-group' >";
    for (var singlePage in pages) {
        if (pages.hasOwnProperty(singlePage)) {
            console.log(pages[singlePage]);
            html += "<a href='" + searchURL + pages[singlePage].pageid + "' target='_blank' class='list-group-item'>";
            html += "<h4 class='list-group-item-heading'> " + pages[singlePage].title + "</h4>";
            html += "<p class='list-group-item-text'>" + pages[singlePage].extract + "</p></a>";
        }
    }

    html += "</div>";

    $("#theScroll").fadeIn(2000).html(html);

    $(".list-group").on("click", function(event) {
        event.stopPropagation();
    });

}

function randomSearch() {
    RANDOM_URL = "https://en.wikipedia.org/wiki/Special:Random";
    var win = window.open(RANDOM_URL, "_blank");
    win.focus();
}