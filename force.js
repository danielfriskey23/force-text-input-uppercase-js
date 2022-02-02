function forceUpperCase() {
		$('input[type=text]').val (function () {
			return this.value.toUpperCase();
		});
	}
