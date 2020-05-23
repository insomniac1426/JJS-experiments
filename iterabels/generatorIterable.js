function* genFact() {
	try {
		let fact;
		let count = 1;

		while (true) {
			if (fact === undefined) {
				fact = 1;
			} else {
				fact *= count;
			}
			count++;
			yield fact;
		}
	} finally {
		console.log("ended");
		return "mayhem";
	}
}

const factItr = genFact();
for (fact of factItr) {
	console.log(fact);
	if (fact > 500) {
		// we can stop the generator's iterator by
		// calling the return
		// the value passed to the return
		// is the default return value for the generator.
		console.log(factItr.return("Hello World").value);
	}
}
