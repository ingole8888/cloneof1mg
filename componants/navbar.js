function navbar(){
    return `
    <div id="navbox1">
    <div>
        <a href="">
            <img
        src="https://www.1mg.com/images/tata_1mg_logo.svg"
        >
        </a>
    </div>
    <div><a href=""><h3>MEDICINES</h3></a></div>
    <div><a href=""><h3>LAB TESTS</h3></a></div>
    <div><a href=""><h3>CONSULT DOCTORS</h3></a></div>
    <div><a href=""><h3>COVID-19</h3></a></div>
    <div><a href=""><h3>AYURVEDA</h3></a></div>
    <div><a href=""><h3>CARE PLAN</h3></a></div>
    <div>
       <a href="">
        <img
        src="data:image/png;base64,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"
        >
       </a>
    </div>
    <div><a href=""><h3>OFFERS</h3></a></div>
    <div>
       <a href="">
        <img
        src="data:image/png;base64,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"
        >
       </a>
    </div>
</div>
<div id="navbox2">
    <div id="box">
        <div><input placeholder="Enter your city Name"></div>
       <div> <input placeholder="Search for product or Medicine"></div>
       <div><a href=""><button>Search</button></a></div>
    </div>
    <div id="box">
        <div><a href="">Quick Buy </a></div>
        <div><a href=""><button>Quick Order</button></a></div>
    </div>
</div>
<div id="navbox3">
        <a href="">Health resource center</a>
        <a href=""> | Covid essential </a>
        <a href=""> | Featured </a>
        <a href=""> | Vitamin and Nutrition </a>
        <a href=""> | Diabetes </a>
        <a href=""> | Healthcare Devices </a>
        <a href=""> | Personal care </a>
        <a href=""> | Health </a>
        <a href=""> | Ayurveda and Homeopathy </a>
</div>
    `;
}
export default navbar;