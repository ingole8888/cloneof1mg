import navbar from "../componants/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
import footer from "../componants/footer.js";
document.getElementById("footer").innerHTML=footer();

document.getElementById("save").addEventListener('click',save);

function save(){


    let details={
        first_name:document.getElementById("first_name").value,
        last_name:document.getElementById("last_name").value,
        address:document.getElementById("address").value,
        city:document.getElementById("city").value,
        state:document.getElementById("state").value,
        zip:document.getElementById("zip").value,

    };
    
    localStorage.setItem('details',JSON.stringify(details));
    console.log(details);
    window.location.href="/htmlfiles/checkout.html"
}