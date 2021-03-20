let controlsBtn = document.querySelectorAll(".btn-service");
let sliders = document.querySelectorAll(".description-item")
let slideFirst = document.querySelector(".description-delivery");
let slideSecond = document.querySelector(".description-warranty");
let slideThird = document.querySelector(".description-credit");


let resetCurrentSliders = () =>{
	sliders.forEach((item) => {
		item.classList.remove("current-service-describe")
	})
	controlsBtn.forEach((item) => {
		item.classList.remove("current-service")
	})
}

controlsBtn.forEach((item,i) => {
	item.addEventListener('click', ()=>{
		resetCurrentSliders();
		if(item.classList.contains("control-delivery")){
			slideFirst.classList.add("current-service-describe");

			
		}
		if(item.classList.contains("control-warranty")){
			slideSecond.classList.add("current-service-describe");
		}

		if(item.classList.contains("control-credit")){
			slideThird.classList.add("current-service-describe");
		}

		sliders[i].classList.add("current-service-describe")
		item.classList.add("current-service")

	})
})
