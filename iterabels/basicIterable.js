export function Arithmetic() {
	let nextVal;

	return {
		[Symbol.iterator]: function () {
			return this;
		},
		next: function () {
			if (nextVal === undefined) {
				nextVal = 1;
			} else {
				nextVal = nextVal * 3 + 1;
			}

			return {
				done: false,
				value: nextVal,
			};
		},
	};
}
