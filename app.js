var languages = [{"code": "pt-PT", "name": "Portuguese"}, 
                 {"code": "en-US", "name": "English"},
			     {"code": "es-ES", "name": "Spanish"}
				];
var translation = {
	"donateWithPaypal": {"pt-PT": "Donar por PayPal",
		                "en-US": "Donate with Paypal",
						"es-ES": "Donar con PayPal"},
	"enterAmount": {"pt-PT": "Insere a quantia",
		                "en-US": "Enter amount",
						"es-ES": "Escriba la cantidad"},
	"currency": {"pt-PT": "Moeda",
		                "en-US": "Currency",
						"es-ES": "Moneda"},
	"USD": {"pt-PT": "Dólares americanos - USD",
		                "en-US": "US Dollars - USD",
						"es-ES": "Dólares estadounidenses - USD"},
	"instructions": {"pt-PT": "Adicione suas instruções ao Giovanni Saberon",
		                "en-US": "Add your instructions to Giovanni Saberon",
						"es-ES": "Añade tus instrucciones a Giovanni Saberon"}
};
function loadLanguages(){
	languagesEl = document.getElementById("languages");
	for (var x=0; x<languages.length; x++){	
		var item = languages[x];
		console.log(item);
		optionEl = document.createElement("OPTION");
		optionEl.value = item["code"];
		if (item["code"]=="en-US"){
			optionEl.selected = "selected";
		}
		optionEl.innerHTML = item["name"];
		languagesEl.appendChild(optionEl);
	}
	changeLanguage();
}

function changeLanguage(){
	var language = document.getElementById("languages").value;
	console.log(language);
	var el = document.getElementById("donateWithPaypal");
	var translatedText = translation["donateWithPaypal"][language];
	console.log(translatedText);
	el.innerHTML = translatedText;

	el = document.getElementById("enterAmount");
	translatedText = translation["enterAmount"][language];
	console.log(translatedText);
	el.innerHTML = translatedText;	
	
	
	el = document.getElementById("currency");
	translatedText = translation["currency"][language];
	console.log(translatedText);
	el.innerHTML = translatedText;	
	
	el = document.getElementById("instructions");
	var translatedText = translation["instructions"][language];
	console.log(translatedText);
	el.innerHTML = translatedText;	

	el = document.getElementById("donationLinkButton");
	translatedText = "https://www.paypal.com/"+language.replace("-", "_")+"/i/btn/btn_donateCC_LG.gif";

	console.log(translatedText);
	el.src = translatedText;	
	

}
