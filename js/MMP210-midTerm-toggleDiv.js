function toggleDiv (targetId, link) {
    //pull out reference to element

    var target = document.getElementById(targetId);
    var link = document.getElementById(link);
    //if you can see it because it is block
    if (target.style.display == "block"){
        //set display to none
        target.style.display = "none";
        link.innerHTML = "...See Answer";

    } else {
        // or make it visible
        target.style.display = "block";
        link.innerHTML = "Hide";
    }
}

document.getElementById("topLink").onclick=function(evt)
{
    evt.preventDefault();
    toggleDiv('hiddenDivTop', 'topLink');
};

document.getElementById("topLink2").onclick=function(evt)
{
    evt.preventDefault();
    toggleDiv('hiddenDivTop2', 'topLink2');
};

document.getElementById("topLink3").onclick=function(evt)
{
    evt.preventDefault();
    toggleDiv('hiddenDivTop3', 'topLink3');
};

document.getElementById("topLink4").onclick=function(evt)
{
    evt.preventDefault();
    toggleDiv('hiddenDivTop4', 'topLink4');
};

document.getElementById("topLink5").onclick=function(evt)
{
    evt.preventDefault();
    toggleDiv('hiddenDivTop5', 'topLink5');
};

document.getElementById("topLink6").onclick=function(evt)
{
    evt.preventDefault();
    toggleDiv('hiddenDivTop6', 'topLink6');
};