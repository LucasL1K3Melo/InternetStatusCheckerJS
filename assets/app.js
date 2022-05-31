console.log("OK!")

/*  Selecting all required elements!  */

const wrapper = document.querySelector(".wrapper"),
toast =  wrapper.querySelector(".toast")
wifiIcon = wrapper.querySelector(".icon")
title = wrapper.querySelector("span")
subTitle = wrapper.querySelector("p")

window.onload = () => { // Once window loaded
    function ajax(){
        let xhr = new XMLHttpRequest(); // Creating a new xml object
        
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); // Sending GET request to thist URL;
        xhr.onload = (event) => { // Once Ajax loaded;
            
            //console.log(xhr.response); // Getting responde of that get request;

            // If ajax status return 200 or less than 300 that mean user is getting data/response from that provided URL;
            // If user is onlijne, he's getting response of 200 status code;
            if(xhr.status == 200 && xhr.status < 300) {
                console.log("All is good!");
                toast.classList.add("online");
                title.innerText = "You're online now.";
                subTitle.innerText = "Your internet connection is ok!";
                wifiIcon.innerHTML = '';


            } else { // Something's gone wrong with internet connection;
                offline(); // Calling function on both conditions;
            }

        };
        xhr.onerro = () => { // User is getting incorrect URL Status or returning 404 or other error;

            console.log("Offline status."); // Debug console;
            offline(); // Calling function on both conditions;
            
        };
        xhr.send();
    
    }; // End ajax();

    function offline(){
        toast.classList.add("offline");
        title.innerText = "You're offline now.";
        subTitle.innerText = "Oops! Internet is disconected!";
        wifiIcon.innerHTML = '';
    }
    
    setInterval(() => {
        ajax(); // Calling Ajax function;

    }, 100); // 100ms time check

}