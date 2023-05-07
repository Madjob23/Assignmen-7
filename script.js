var index = 0;
var colors = ["red", "blue", "orange", "yellow", "green", "purple", "black", "violet", "indigo", "cyan", "aliceblue"];
function colorChange()
{
    document.getElementsByTagName("body")[0].style.background = colors[index++];
    if (index > colors.length - 1)
        index = 0;
}

function change1()
{
    document.getElementById("div1").style.borderColor = colors[index++];
    if (index > colors.length - 1)
        index = 0;
}

function change2()
{
    document.getElementById("div2").style.borderColor = colors[index++];
    if (index > colors.length - 1)
        index = 0;
}

function changeH()
{
    document.getElementById("header").style.color = colors[index++];
    if (index > colors.length - 1)
        index = 0;
}