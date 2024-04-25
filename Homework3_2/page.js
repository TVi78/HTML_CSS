function showMessage(params) {
	alert(`Привет, ${params}`);
}

function getMessage() {
	return prompt("Введите имя: ");
}

showMessage(getMessage());
