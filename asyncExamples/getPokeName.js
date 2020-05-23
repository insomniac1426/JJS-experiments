const request = require("request");

const HOST_URI = "https://pokeapi.co/api/v2/";

function getPokemonNameById(id) {
	request(`${HOST_URI}pokemon/${id}`, function (error, response, body) {
		if (error || response.statusCode >= 400) {
			pokeItr.throw(error || body);
			return;
		}

		if (body) {
			const jsonBody = JSON.parse(body);
			pokeItr.next(jsonBody.name);
		}
	});
}

// a generator wrapper for gettinng pokemon name by Id
function* getPokeNameByIdGen(id) {
	try {
		const name = yield getPokemonNameById(id);
		console.log(name);
	} catch (error) {
		console.log(error);
	}
}

const pokeId = process.argv.slice(2)[0];

var pokeItr = getPokeNameByIdGen(pokeId);
pokeItr.next();
