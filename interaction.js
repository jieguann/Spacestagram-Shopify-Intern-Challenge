


insiderContainer1 = document.getElementById("insiderContatiner1");

insiderContainer2 = document.getElementById("insiderContatiner2");



insiderContainer1.innerHTML = "";
insiderContainer2.innerHTML = "";
function display(length, data){
    for(let i =0; i<Math.floor(length/2); i++){

        const imgSrc = data["photos"][i].img_src;
        const titleText = data["photos"][i].id;
        const cameraFullName = data["photos"][i]["camera"].full_name;
        const landingData = data["photos"][i]["rover"].landing_date;
        const roverName = data["photos"][i]["rover"].name;

        // console.log(obj);

        // var divBoxContainer = document.createElement("div")
        // divBoxContainer.
        // var h1Text = document.createElement("h1");
        // h1Text.innerHTML = "Title";
        // container.appendChild(h1Text);
        insiderContainer1.innerHTML +=
            '<div class="boxContainer">' +
            `<h2>Id: ${titleText}</h2>`+
            `<img src=${imgSrc}>` +
            `<p>Landing Date: ${landingData}</p>`+

            `<p>Camera Full Name: ${cameraFullName}</p>`+

            `<p>Rover Name: ${roverName}</p>`+

            `<div class="thumbs"><i onclick="clickButton(this)" class="fa fa-thumbs-up"></i></div>` +



        '</div>';

    }



    for(let i = Math.floor(length/2); i<length; i++){

        const imgSrc = data["photos"][i].img_src;
        const titleText = data["photos"][i].id;

        const cameraFullName = data["photos"][i]["camera"].full_name;
        const landingData = data["photos"][i]["rover"].landing_date;

        const roverName = data["photos"][i]["rover"].name;
        // console.log(obj);

        // var divBoxContainer = document.createElement("div")
        // divBoxContainer.
        // var h1Text = document.createElement("h1");
        // h1Text.innerHTML = "Title";
        // container.appendChild(h1Text);
        insiderContainer2.innerHTML +=
            '<div class="boxContainer">' +
            `<h2>Id: ${titleText}</h2>`+
            `<img src=${imgSrc}>` +
            `<p>Rover Landing Date: ${landingData}</p>`+

            `<p>Camera Full Name: ${cameraFullName}</p>`+

            `<p>Rover Name: ${roverName}</p>`+

            '<div class="thumbs"><i onclick="clickButton(this)" class="fa fa-thumbs-up"></i></div>'

        '</div>';}



}



function clickButton(x) {
    x.classList.toggle("fa-thumbs-down");
}

const api_url =
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=I0nzTEnpql08vAHHPzTfqvdDugHUONPQEtS9sGGu";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();

    display(Object.keys(data.photos).length, data);



}


// Calling that async function
getapi(api_url);

