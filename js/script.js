var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//parent class
var Locations = /** @class */ (function () {
    function Locations(country, city, zip, address, teaserImg) {
        this.country = country;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.teaserImg = teaserImg;
    }
    Locations.prototype.display = function () {
        return "<div class=\"row align-items-center flex-sm-column flex-md-row\">\n\t\t\t<div class=\"col-md-5 col-sm-10 offset-1\"><img class=\"card-img img-thumbnail\" src=\"" + this.teaserImg + "\"></div>\n\t\t\t<div class=\"col-md-5 col-sm-10 h2 text-center text-light\"> " + this.country + " - " + this.city + "</div>\n\t\t</div>";
    };
    return Locations;
}());
;
//child of locations
var Place = /** @class */ (function (_super) {
    __extends(Place, _super);
    function Place(country, city, name, zip, address, teaserImg) {
        var _this = _super.call(this, country, city, zip, address, teaserImg) || this;
        _this.country = country;
        _this.city = city;
        _this.name = name;
        _this.zip = zip;
        _this.address = address;
        _this.teaserImg = teaserImg;
        return _this;
    }
    Place.prototype.display = function () {
        return "<div class=\"row align-items-center flex-lg-row\">\n\t\t<div class=\"d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens\">\n\t\t\t<img class=\"card-img\" style=\"object-fit:cover\" src=\"" + this.teaserImg + "\">\n\t\t</div>\n\t\t<div class=\"col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0\">\n\t\t\t<p><b><u>Place</u>: " + this.name + "</b></p>\n\t\t\t<p>Address: " + this.address + "</p>\n\t\t\t<p>ZIP: " + this.zip + "</p>\n\t\t</div></div><hr class=\"d-sm-block d-lg-none\">";
    };
    return Place;
}(Locations));
;
//child of locations
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(country, city, name, zip, address, teaserImg, foodType, tel, webpage) {
        var _this = _super.call(this, country, city, zip, address, teaserImg) || this;
        _this.country = country;
        _this.city = city;
        _this.name = name;
        _this.zip = zip;
        _this.address = address;
        _this.teaserImg = teaserImg;
        _this.foodType = foodType;
        _this.tel = tel;
        _this.webpage = webpage;
        return _this;
    }
    Restaurant.prototype.display = function () {
        return "<div class=\"row align-items-center flex-lg-row\">\n\t\t<div class=\"d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens\">\n\t\t\t<img style=\"object-fit:cover\" class=\"card-img\" src=\"" + this.teaserImg + "\">\n\t\t</div>\n\t\t<div class=\"col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0\">\n\t\t\t<p><b><u>Restaurant</u>: " + this.name + "</b></p>\n\t\t\t<p>This restaurant serves " + this.foodType + "</p>\n\t\t\t<p>Address: " + this.address + "</p>\n\t\t\t<p>ZIP: " + this.zip + "</p>\n\t\t\t<p>Tel.: " + this.tel + "</p>\n\t\t\t<a href=\"" + this.webpage + "\">Website</a>\n\t\t</div></div><hr class=\"d-sm-block d-lg-none\">";
    };
    return Restaurant;
}(Locations));
;
//child of locations
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(country, city, name, zip, address, date, time, price, teaserImg) {
        var _this = _super.call(this, country, city, zip, address, teaserImg) || this;
        _this.country = country;
        _this.city = city;
        _this.name = name;
        _this.zip = zip;
        _this.address = address;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        _this.teaserImg = teaserImg;
        return _this;
    }
    Events.prototype.display = function () {
        return "<div class=\"row align-items-center flex-lg-row\">\n\t\t\t<div class=\"d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens\">\n\t\t\t\t<img style=\"object-fit:cover\" class=\"card-img\" src=\"" + this.teaserImg + "\">\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0\">\n\t\t\t\t<p><b><u>Event</u>: " + this.name + "</b></p>\n\t\t\t\t<p>Date: " + this.date + "</p>\n\t\t\t\t<p>Time: " + this.time + "</p>\n\t\t\t\t<p>Price: " + this.price + "</p>\n\t\t\t\t<p>Address: " + this.address + "</p>\n\t\t\t\t<p>ZIP: " + this.zip + "</p>\n\t\t\t</div></div>";
    };
    return Events;
}(Locations));
//setting data
var osaka = new Locations("Japan", "Ōsaka", "", "", "./img/osaka.jpg");
var osakaPlace = new Place("Japan", "Ōsaka", "Ōsaka Castle (Ōsaka-jō)", "540-0002 Ōsaka", "1-1 Osakajo, Chuo Ward", "./img/osakaPlace.jpg");
var osakaRes = new Restaurant("Japan", "Ōsaka", "The Ritz-Carlton", "530-0001 Ōsaka", "2-5-25 Umeda Kita-ku", "./img/osakaRestaurant.jpg", "Japanese Food", "+81-6-6343-7020", "https://www.ritzcarlton.com/en/hotels/japan/tokyo/dining");
var osakaEvent = new Events("Japan", "Ōsaka", "Hanami (Cherry-Blossom-Festival)", "540-0002 Ōsaka", "1-1 Osakajo, Chuo Ward", "04.04.2020", "9:00-17:00", "1.65 €", "./img/osakaEvent.jpg");
var garda = new Locations("Italy", "Garda", "", "", "./img/garda.jpg");
var gardaPlace = new Place("Italy", "Garda", "Gardaland", "37014 Castelnuovo del Garda", "Via Derna, 4", "./img/gardaPlace.jpg");
var gardaRes = new Restaurant("Italy", "Garda", "Dolci Colli", "37019 Peschiera del Garda", "Via Mantova, 117", "./img/gardaRestaurant.jpg", "Italian Food", "+390457550552", "https://www.dolcicolli.com/de/hotel-dolci-colli/restaurant");
var gardaEvent = new Events("Italy", "Garda", "Halloween Party", "37014 Castelnuovo del Garda", "Via Derna, 4", "31.10.2019", "18:30-00:00", "25 €", "./img/gardaEvent.jpg");
//setting Arrays
var allData = [
    [osaka.display(), garda.display()],
    [osakaPlace.display(), gardaPlace.display()],
    [osakaRes.display(), gardaRes.display()],
    [osakaEvent.display(), gardaEvent.display()]
];
//appending
document.querySelector("body").innerHTML += "<div class=\"container\"><div class=\"accordion\" id=\"accordionExample\"></div></div>";
var base = document.getElementById("accordionExample");
//loop
for (var i = 0; i < allData[0].length; i++) {
    base.innerHTML += "<div class=\"card\">\n                            <div class=\"card-header bg-dark\" id=\"heading" + +i + "\">\n                                <h2 class=\"mb-0\">\n                                    <button style=\"width :100%\" class=\"btn btn-link text-decoration-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse" + +i + "\" aria-expanded=\"false\" aria-controls=\"collapse" + +i + "\">\n                                        " + allData[0][i] + "\n                                    </button>\n                                </h2>\n                            </div>\n                            <div id=\"collapse" + +i + "\" class=\"collapse\" aria-labelledby=\"heading" + +i + "\" data-parent=\"#accordionExample\">\n                                <div class=\"card-body d-flex flex-column flex-lg-row\" id=\"data" + +i + "\">";
    var datas = document.getElementById("data" + i);
    for (var j = 1; j < allData.length; j++) {
        datas.innerHTML += "<div id=\"dataBase" + +j + "\">" + allData[j][i] + "</div>";
    }
    "</div>\n                            </div>\n                        </div>";
}
//make divs on lg screens 30% of screen width
$(window).on("load resize click", function divWidth() {
    var imgSize = $(window).width() / 3.2;
    if ($(window).width() > 992) {
        $("[id^='dataBase']").css("width", imgSize + "px");
    }
    else {
        $("[id^='dataBase']").css("width", "100%");
    }
});
//footer
$(".container").append("<div class=\"d-flex justify-content-center\"><button class=\"btn btn-dark m-2\" id=\"newEntry\" style=\"font-size:1.5rem\">New Entry</button></div>\n\t<footer class=\"bg-dark text-light text-center\">&copy Barbara Anissin</footer>");
//BONUS FORM
$("#newEntry").on("click", newItem);
var idNum = 10;
function newItem() {
    idNum += 1;
    base.innerHTML += "<div class=\"card\">\n\t                            <div class=\"card-header bg-dark\" id=\"heading" + +idNum + "\">\n\t                                <h2 class=\"mb-0\">\n\t                                    <button style=\"width :100%\" class=\"btn btn-link text-decoration-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse" + +idNum + "\" aria-expanded=\"true\" aria-controls=\"collapse" + +idNum + "\">\n\t                                       <div class=\"row align-items-center flex-sm-column flex-md-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5 col-sm-10 offset-1\" id=\"appendImgHere" + +idNum + "\"><p style=\"color:white\">click me to edit</p></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5 col-sm-10 h2 text-center text-light\" id=\"userCountry" + +idNum + "\">Country - City</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t                                    </button>\n\t                                </h2>\n\t                            </div>\n\t                            <div id=\"collapse" + +idNum + "\" class=\"collapse\" aria-labelledby=\"heading" + +idNum + "\" data-parent=\"#accordionExample\">\n\t                                <div class=\"card-body d-flex flex-column flex-lg-row\" id=\"data" + +idNum + "\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"mx-auto\">\n\t\t\t\t\t\t\t\t\t\t\t<p><b><u>Country</u></b>: <input value=\"France\" id=\"country" + +idNum + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<p><b><u>City</u></b>: <input value=\"Paris\" id=\"city" + +idNum + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<p>Web-Address of an Image: <input placeholder=\"https://...\" id=\"firstImg" + +idNum + "\" type=\"text\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t<p><b>Place</b>: <input value=\"Eiffelturm\" id=\"placeP" + +idNum + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<p>Address: <input value=\"Champ de Mars, 5 Avenue Anatole\" id=\"addressP" + +idNum + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<p>ZIP: <input value=\"75007 Paris\" id=\"zipP" + +idNum + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<p>Image: <input placeholder=\"https://...\" id=\"placeImg" + +idNum + "\" type=\"text\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t<p><b>Restaurant</b>: <input value=\"Le Jules Verne\" id=\"restaR" + +idNum + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<p>This restaurant serves: <input value=\"French Food\" id=\"foodTypeR" + +idNum + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<p>Address: <input value=\"Champ de Mars, 5 Avenue Anatole\" id=\"addressR" + +idNum + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<p>ZIP: <input value=\"75007 Paris\" id=\"zipR" + +idNum + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<p>Tel.: <input placeholder=\"+43 000...\" id=\"telR" + +idNum + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<p>Website: <input value=\"https://www.restaurants-toureiffel.com/en/jules-verne-restaurant.html\" id=\"websiteR" + +idNum + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<p>Image: <input placeholder=\"https://...\" id=\"restaImg" + +idNum + "\" type=\"text\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t<p><b>Event</b>: <input value=\"Carneval\" id=\"eventE" + +idNum + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<p>Date: <input id=\"dateE" + +idNum + "\" type=\"date\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<p>Time: <span class=\"float-right\"><input value=\"18:00\" id=\"timeStartE" + +idNum + "\" type=\"time\"></input> - <input value=\"23:00\" id=\"timeEndE" + +idNum + "\" type=\"time\"></input></span></p>\n\t\t\t\t\t\t\t\t\t\t\t<p>Price: <input value=\"20\" id=\"priceE" + +idNum + "\" type=\"number\"></input>&euro;</p>\n\t\t\t\t\t\t\t\t\t\t\t<p>Address: <input placeholder=\"Champ de Mars, 5 Avenue Anatole\" id=\"addressE" + +idNum + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<p>ZIP: <input placeholder=\"75007 Paris\" id=\"zipE" + +idNum + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<p>Image: <input placeholder=\"https://...\" id=\"eventImg" + +idNum + "\" type=\"text\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark float-right\" onclick=\"addEntry(this.id)\" id=\"submit" + +idNum + "\">Submit</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t                            </div>\n\t                        </div>";
}
//append users input
function addEntry(xy) {
    var current = Number((xy).slice(6));
    var userArr = [];
    userArr.push([[$("#country" + current).val(), $("#city" + current).val(), $("#firstImg" + current).val()],
        [$("#placeP" + current).val(), $("#addressP" + current).val(), $("#zipP" + current).val(), $("#placeImg" + current).val()],
        [$("#restaR" + current).val(), $("#foodTypeR" + current).val(), $("#addressR" + current).val(), $("#zipR" + current).val(), $("#telR" + current).val(), $("#websiteR" + current).val(), $("#restaImg" + current).val()],
        [$("#eventE" + current).val(), $("#dateE" + current).val(), $("#timeStartE" + current).val(), $("#timeEndE" + current).val(), $("#priceE" + current).val(), $("#addressE" + current).val(), $("#zipE" + current).val(), $("#eventImg" + current).val()]]);
    $(".mx-auto").remove();
    $("#appendImgHere" + current).html("<img class=\"card-img img-thumbnail\" src=\"" + userArr[0][0][2] + "\">");
    $("#userCountry" + current).text(userArr[0][0][0] + " - " + userArr[0][0][1]);
    $("#data" + current).append("\n\t\t<div id=\"dataBase" + +current + "a\">\n\t\t\t<div class=\"row align-items-center flex-lg-row\">\n\t\t\t\t<div class=\"d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens\">\n\t\t\t\t\t<img class=\"card-img\" style=\"object-fit:cover\" src=\"" + userArr[0][1][3] + "\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0\">\n\t\t\t\t\t<p><b><u>Place</u>: " + userArr[0][1][0] + "</b></p>\n\t\t\t\t\t<p>Address: " + userArr[0][1][1] + "</p>\n\t\t\t\t\t<p>ZIP: " + userArr[0][1][2] + "</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div><hr class=\"d-sm-block d-lg-none\">\n\n\t\t<div id=\"dataBase" + +current + "b\">\n\t\t\t<div class=\"row align-items-center flex-lg-row\">\n\t\t\t\t<div class=\"d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens\">\n\t\t\t\t\t<img style=\"object-fit:cover\" class=\"card-img\" src=\"" + userArr[0][2][6] + "\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0\">\n\t\t\t\t\t<p><b><u>Restaurant</u>: " + userArr[0][2][0] + "</b></p>\n\t\t\t\t\t<p>This restaurant serves " + userArr[0][2][1] + "</p>\n\t\t\t\t\t<p>Address: " + userArr[0][2][2] + "</p>\n\t\t\t\t\t<p>ZIP: " + userArr[0][2][3] + "</p>\n\t\t\t\t\t<p>Tel.: " + userArr[0][2][4] + "</p>\n\t\t\t\t\t<a href=\"" + userArr[0][2][5] + "\">Website</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div><hr class=\"d-sm-block d-lg-none\">\n\n\t\t<div id=\"dataBase" + +current + "c\">\n\t\t\t<div class=\"row align-items-center flex-lg-row\">\n\t\t\t\t<div class=\"d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens\">\n\t\t\t\t\t<img style=\"object-fit:cover\" class=\"card-img\" src=\"" + userArr[0][3][7] + "\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0\">\n\t\t\t\t\t<p><b><u>Event</u>: " + userArr[0][3][0] + "</b></p>\n\t\t\t\t\t<p>Date: " + userArr[0][3][1] + "</p>\n\t\t\t\t\t<p>Time: " + userArr[0][3][2] + " - " + userArr[0][3][3] + "</p>\n\t\t\t\t\t<p>Price: " + userArr[0][3][4] + "&euro;</p>\n\t\t\t\t\t<p>Address: " + userArr[0][3][5] + "</p>\n\t\t\t\t\t<p>ZIP: " + userArr[0][3][6] + "</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>");
}
;
