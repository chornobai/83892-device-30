let feedbackOn = document.querySelector(".btn-feedback-on");
let feedback = document.querySelector(".feedback");
let feedbackClose = feedback.querySelector(".btn-feedback-close");
let nameField = feedback.querySelector("[name=name]");
let feedbackForm = feedback.querySelector(".feedback-form");
let emailField = feedback.querySelector("[name=email]");


/*Проверка поддержки LocalStorage*/

let LocalStorageSupport = true;
let storage = "";
try {
	storage = localStorage.getItem("name");
} catch (err){
	isStorageSupport = false;
}


/*Отрытие и закрытие окна*/ 

feedbackOn.addEventListener("click", function(evt){
	evt.preventDefault();
	feedback.classList.add("feedback-show");

	if(storage) {
		nameField.value = storage;
		emailField.focus();
		} else {
			nameField.focus();
		}
});

feedbackClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedback.classList.remove("feedback-show");
	feedback.classList.remove("error-modal");
	nameField.classList.remove("error");
	emailField.classList.remove("error");
	
});

/* Валидация */

feedbackForm.addEventListener("submit", function(evt){
	if(!nameField.value || !emailField.value){

		nameField.classList.add("error");
		emailField.classList.add("error");
		feedback.classList.remove("error-modal");
		 feedback.offsetWidth = feedback.offsetWidth;
		feedback.classList.add("error-modal");
		evt.preventDefault();

	}else{
		if (isStorageSupport){
		localStorage.setItem("name", nameField.value);
		}
	}
});

/* Закрытие ESC */
window.addEventListener("keydown", function(evt){
	if (evt.keyCode === 27){
		if (feedback.classList.contains("feedback-show")){
			evt.preventDefault();
			feedback.classList.remove("feedback-show");
			feedback.classList.remove("error-modal");
			nameField.classList.remove("error");
			emailField.classList.remove("error");
		}
	}
})