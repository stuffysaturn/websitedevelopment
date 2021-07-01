function getParameter(){
    let parameters = new URLSearchParams(window.location.search);
    document.getElementById("caption").innerHTML = parameters.get("bar");
    document.querySelector(".source").src = "https://source.unsplash.com/1000x500/?" + parameters.get("bar");
}
