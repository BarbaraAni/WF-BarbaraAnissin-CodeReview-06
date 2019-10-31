//parent class
class Locations {
	constructor(public country: string, public city: string, public zip: string, public address: string, public teaserImg: string){}
	display(){
		return `<div class="row align-items-center flex-sm-column flex-md-row">
			<div class="col-md-5 col-sm-10 offset-1"><img class="card-img img-thumbnail" src="${this.teaserImg}"></div>
			<div class="col-md-5 col-sm-10 h2 text-center text-light"> ${this.country} - ${this.city}</div>
		</div>`
	}
};

//child of locations
class Place extends Locations {
	constructor(public country: string, public city: string, public name: string, public zip: string, public address: string, public teaserImg: string) {
		super(country, city, zip, address, teaserImg);	
	}
	display(){
		return `<div class="row align-items-center flex-lg-row">
		<div class="d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens">
			<img class="card-img" style="object-fit:cover" src="${this.teaserImg}">
		</div>
		<div class="col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0">
			<p><b><u>Place</u>: ${this.name}</b></p>
			<p>Address: ${this.address}</p>
			<p>ZIP: ${this.zip}</p>
		</div></div><hr class="d-sm-block d-lg-none">`
	}
};

//child of locations
class Restaurant extends Locations {
	constructor(public country: string, public city: string, public name: string, public zip: string, public address: string, public teaserImg: string, public foodType: string, public tel: string, public webpage:string) {
		super(country, city, zip, address, teaserImg);
	}
	display(){
		return `<div class="row align-items-center flex-lg-row">
		<div class="d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens">
			<img style="object-fit:cover" class="card-img" src="${this.teaserImg}">
		</div>
		<div class="col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0">
			<p><b><u>Restaurant</u>: ${this.name}</b></p>
			<p>This restaurant serves ${this.foodType}</p>
			<p>Address: ${this.address}</p>
			<p>ZIP: ${this.zip}</p>
			<p>Tel.: ${this.tel}</p>
			<a href="${this.webpage}">Website</a>
		</div></div><hr class="d-sm-block d-lg-none">`
	}
};

//child of locations
class Events extends Locations {
	constructor(public country: string, public city: string, public name: string, public zip: string, public address: string, public date: string, public time: string, public price: string, public teaserImg: string) {
		super(country, city, zip, address, teaserImg);
	}
	display(){
		return `<div class="row align-items-center flex-lg-row">
			<div class="d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens">
				<img style="object-fit:cover" class="card-img" src="${this.teaserImg}">
			</div>
			<div class="col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0">
				<p><b><u>Event</u>: ${this.name}</b></p>
				<p>Date: ${this.date}</p>
				<p>Time: ${this.time}</p>
				<p>Price: ${this.price}</p>
				<p>Address: ${this.address}</p>
				<p>ZIP: ${this.zip}</p>
			</div></div>`
	}
}

//setting data
let osaka = new Locations("Japan", "Ōsaka", "", "", "./img/osaka.jpg")
let osakaPlace = new Place("Japan", "Ōsaka", "Ōsaka Castle (Ōsaka-jō)", "540-0002 Ōsaka", "1-1 Osakajo, Chuo Ward", "./img/osakaPlace.jpg")
let osakaRes = new Restaurant("Japan", "Ōsaka", "The Ritz-Carlton", "530-0001 Ōsaka", "2-5-25 Umeda Kita-ku", "./img/osakaRestaurant.jpg", "Japanese Food", "+81-6-6343-7020", "https://www.ritzcarlton.com/en/hotels/japan/tokyo/dining")
let osakaEvent = new Events("Japan", "Ōsaka", "Hanami (Cherry-Blossom-Festival)", "540-0002 Ōsaka", "1-1 Osakajo, Chuo Ward", "04.04.2020", "9:00-17:00", "1.65 €", "./img/osakaEvent.jpg")

let garda = new Locations("Italy", "Garda", "", "", "./img/garda.jpg")
let gardaPlace = new Place("Italy", "Garda", "Gardaland", "37014 Castelnuovo del Garda", "Via Derna, 4", "./img/gardaPlace.jpg")
let gardaRes = new Restaurant("Italy", "Garda", "Dolci Colli", "37019 Peschiera del Garda", "Via Mantova, 117", "./img/gardaRestaurant.jpg", "Italian Food", "+390457550552", "https://www.dolcicolli.com/de/hotel-dolci-colli/restaurant")
let gardaEvent = new Events("Italy", "Garda", "Halloween Party", "37014 Castelnuovo del Garda", "Via Derna, 4", "31.10.2019", "18:30-00:00", "25 €", "./img/gardaEvent.jpg")

//setting Arrays
let allData : Array<any> = [
	[osaka.display(), garda.display()],
	[osakaPlace.display(),gardaPlace.display()],
	[osakaRes.display(), gardaRes.display()],
	[osakaEvent.display(), gardaEvent.display()]]

//appending
document.querySelector("body").innerHTML += `<div class="container"><div class="accordion" id="accordionExample"></div></div>`
let base = document.getElementById("accordionExample");
	//loop
for (let i = 0; i<allData[0].length; i++){
	base.innerHTML += `<div class="card">
                            <div class="card-header bg-dark" id="heading${+i}">
                                <h2 class="mb-0">
                                    <button style="width :100%" class="btn btn-link text-decoration-none" type="button" data-toggle="collapse" data-target="#collapse${+i}" aria-expanded="false" aria-controls="collapse${+i}">
                                        ${allData[0][i]}
                                    </button>
                                </h2>
                            </div>
                            <div id="collapse${+i}" class="collapse" aria-labelledby="heading${+i}" data-parent="#accordionExample">
                                <div class="card-body d-flex flex-column flex-lg-row" id="data${+i}">`
								let datas = document.getElementById("data"+i)
                                for (let j = 1; j<allData.length; j++){
                                	datas.innerHTML += `<div id="dataBase${+j}">${allData[j][i]}</div>`
								}
                                `</div>
                            </div>
                        </div>`
}

//make divs on lg screens 30% of screen width
$(window).on("load resize click", function divWidth() {
	let imgSize = $(window).width()/3.2
	if($(window).width() > 992) {
        $("[id^='dataBase']").css("width",imgSize+"px")
    } else {
        $("[id^='dataBase']").css("width","100%")
    }
}); 

//footer
$(".container").append(`<div class="d-flex justify-content-center"><button class="btn btn-dark m-2" id="newEntry" style="font-size:1.5rem">New Entry</button></div>
	<footer class="bg-dark text-light text-center">&copy Barbara Anissin</footer>`)

//BONUS FORM
$("#newEntry").on("click",newItem)
let idNum = 10
function newItem(){
	idNum += 1 
	base.innerHTML += `<div class="card">
	                            <div class="card-header bg-dark" id="heading${+idNum}">
	                                <h2 class="mb-0">
	                                    <button style="width :100%" class="btn btn-link text-decoration-none" type="button" data-toggle="collapse" data-target="#collapse${+idNum}" aria-expanded="true" aria-controls="collapse${+idNum}">
	                                       <div class="row align-items-center flex-sm-column flex-md-row">
												<div class="col-md-5 col-sm-10 offset-1" id="appendImgHere${+idNum}"><p style="color:white">click me to edit</p></div>
												<div class="col-md-5 col-sm-10 h2 text-center text-light" id="userCountry${+idNum}">Country - City</div>
											</div>
	                                    </button>
	                                </h2>
	                            </div>
	                            <div id="collapse${+idNum}" class="collapse" aria-labelledby="heading${+idNum}" data-parent="#accordionExample">
	                                <div class="card-body d-flex flex-column flex-lg-row" id="data${+idNum}">
										<div class="mx-auto">
											<p><b><u>Country</u></b>: <input value="France" id="country${+idNum}"></input></p>
											<p><b><u>City</u></b>: <input value="Paris" id="city${+idNum}"></input></p>
											<p>Web-Address of an Image: <input placeholder="https://..." id="firstImg${+idNum}" type="text"></input></p>
											<hr>
											<p><b>Place</b>: <input value="Eiffelturm" id="placeP${+idNum}"></input></p>
											<p>Address: <input value="Champ de Mars, 5 Avenue Anatole" id="addressP${+idNum}"></input></p>
											<p>ZIP: <input value="75007 Paris" id="zipP${+idNum}"></input></p>
											<p>Image: <input placeholder="https://..." id="placeImg${+idNum}" type="text"></input></p>
											<hr>
											<p><b>Restaurant</b>: <input value="Le Jules Verne" id="restaR${+idNum}"></input></p>
											<p>This restaurant serves: <input value="French Food" id="foodTypeR${+idNum}"></input></p>
											<p>Address: <input value="Champ de Mars, 5 Avenue Anatole" id="addressR${+idNum}"></input></p>
											<p>ZIP: <input value="75007 Paris" id="zipR${+idNum}"></input></p>
											<p>Tel.: <input placeholder="+43 000..." id="telR${+idNum}"></input></p>
											<p>Website: <input value="https://www.restaurants-toureiffel.com/en/jules-verne-restaurant.html" id="websiteR${+idNum}"></input></p>
											<p>Image: <input placeholder="https://..." id="restaImg${+idNum}" type="text"></input></p>
											<hr>
											<p><b>Event</b>: <input value="Carneval" id="eventE${+idNum}"></input></p>
											<p>Date: <input id="dateE${+idNum}" type="date"></input></p>
											<p>Time: <span class="float-right"><input value="18:00" id="timeStartE${+idNum}" type="time"></input> - <input value="23:00" id="timeEndE${+idNum}" type="time"></input></span></p>
											<p>Price: <input value="20" id="priceE${+idNum}" type="number"></input>&euro;</p>
											<p>Address: <input placeholder="Champ de Mars, 5 Avenue Anatole" id="addressE${+idNum}"></input></p>
											<p>ZIP: <input placeholder="75007 Paris" id="zipE${+idNum}"></input></p>
											<p>Image: <input placeholder="https://..." id="eventImg${+idNum}" type="text"></input></p>
											<button class="btn btn-dark float-right" onclick="addEntry(this.id)" id="submit${+idNum}">Submit</button>
										</div>
									</div>
	                            </div>
	                        </div>`
}

//append users input
function addEntry(xy) {
	let current = Number((xy).slice(6))
	let userArr : Array<any> = []
	userArr.push([[$("#country"+current).val(),$("#city"+current).val(),$("#firstImg"+current).val()],
		[$("#placeP"+current).val(), $("#addressP"+current).val(), $("#zipP"+current).val(), $("#placeImg"+current).val()],
		[$("#restaR"+current).val(), $("#foodTypeR"+current).val(), $("#addressR"+current).val(), $("#zipR"+current).val(), $("#telR"+current).val(), $("#websiteR"+current).val(), $("#restaImg"+current).val()],
		[$("#eventE"+current).val(), $("#dateE"+current).val(), $("#timeStartE"+current).val(), $("#timeEndE"+current).val(), $("#priceE"+current).val(), $("#addressE"+current).val(), $("#zipE"+current).val(), $("#eventImg"+current).val()]])
	$(".mx-auto").remove()
	$("#appendImgHere"+current).html(`<img class="card-img img-thumbnail" src="${userArr[0][0][2]}">`);
	$("#userCountry"+current).text(`${userArr[0][0][0]} - ${userArr[0][0][1]}`)
	$("#data"+current).append(`
		<div id="dataBase${+current}a">
			<div class="row align-items-center flex-lg-row">
				<div class="d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens">
					<img class="card-img" style="object-fit:cover" src="${userArr[0][1][3]}">
				</div>
				<div class="col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0">
					<p><b><u>Place</u>: ${userArr[0][1][0]}</b></p>
					<p>Address: ${userArr[0][1][1]}</p>
					<p>ZIP: ${userArr[0][1][2]}</p>
				</div>
			</div>
		</div><hr class="d-sm-block d-lg-none">

		<div id="dataBase${+current}b">
			<div class="row align-items-center flex-lg-row">
				<div class="d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens">
					<img style="object-fit:cover" class="card-img" src="${userArr[0][2][6]}">
				</div>
				<div class="col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0">
					<p><b><u>Restaurant</u>: ${userArr[0][2][0]}</b></p>
					<p>This restaurant serves ${userArr[0][2][1]}</p>
					<p>Address: ${userArr[0][2][2]}</p>
					<p>ZIP: ${userArr[0][2][3]}</p>
					<p>Tel.: ${userArr[0][2][4]}</p>
					<a href="${userArr[0][2][5]}">Website</a>
				</div>
			</div>
		</div><hr class="d-sm-block d-lg-none">

		<div id="dataBase${+current}c">
			<div class="row align-items-center flex-lg-row">
				<div class="d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens">
					<img style="object-fit:cover" class="card-img" src="${userArr[0][3][7]}">
				</div>
				<div class="col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0">
					<p><b><u>Event</u>: ${userArr[0][3][0]}</b></p>
					<p>Date: ${userArr[0][3][1]}</p>
					<p>Time: ${userArr[0][3][2]} - ${userArr[0][3][3]}</p>
					<p>Price: ${userArr[0][3][4]}&euro;</p>
					<p>Address: ${userArr[0][3][5]}</p>
					<p>ZIP: ${userArr[0][3][6]}</p>
				</div>
			</div>
		</div>`)
};