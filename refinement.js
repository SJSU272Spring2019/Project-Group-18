export function save_click(event) {
	

	// console.log("Retrieving information for " + $w("#age").value);
	$w("#result1").text = "Retrieving information";
	console.log("age =" + $w("#age").value);
	console.log("sex =" + $w("#sex").value);
	console.log("cp = " + $w("#cp").value);
	console.log("trestbp =" + $w("#trestbp").value);
	console.log("chol = " + $w("#chol").value);
	console.log("fbs = " + $w("#fbs").value);
	var input = {
		fields: ["age", "sex", "cp", "trestbps", "chol", "fbs", "restecg", "thalach", "exang", "oldpeak", "slope", "ca", "thal"],
		values: [
			[parseInt($w("#age").value, 10),
				parseInt($w("#sex").value, 10),
				parseInt($w("#cp").value, 10),
				parseInt($w("#trestbp").value, 10),
				parseInt($w("#chol").value, 10),
				parseInt($w("#fbs").value, 10),
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				// 56, 1, 2,120,350,0,null,null,null,null,null,null
			],
		],
	};


// call for heart disease
	addToDataSets(input)
	console.log('Dataset refined');
	
}
