let controls = document.querySelectorAll(".control-btn");
let slides = document.querySelectorAll(".slide-item");
let slideOne = document.querySelector(".slide-one");
let slideTwo = document.querySelector(".slide-two");
let slideThree = document.querySelector(".slide-three");


let resetCurrentSlides = () =>{
	slides.forEach((item) => {
		item.classList.remove("current-promo");
	});
	controls.forEach((item) => {
		item.classList.remove("current");
	});
};

controls.forEach((item,i) => {
	item.addEventListener('click', ()=>{
		resetCurrentSlides();
		if(item.classList.contains("first-slide")){
			slideOne.classList.add("current-promo");
			
		};
		if(item.classList.contains("second-slide")){
			slideTwo.classList.add("current-promo");
		};

		if(item.classList.contains("third-slide")){
			slideThree.classList.add("current-promo");
		};

		slides[i].classList.add("current-promo");
		item.classList.add("current");

	});
});
