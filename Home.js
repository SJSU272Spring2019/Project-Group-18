// For full API documentation, including code examples, visit http://wix.to/94BuAAs
import { getHeartPrediction } from 'backend/disease.jsw';
import { getDiabetesPrediction } from 'backend/disease.jsw';
import { getArteryPrediction } from 'backend/disease.jsw';
import { getAnxietyPrediction } from 'backend/disease.jsw';

//var heart1 = 0;
//var heart2 = 0;

//$w.onReady(function () {
//TODO: write your page related code here...
//});

export function predict_click_1(event, $w) {

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
	getHeartPrediction(input)
		.then(json => {

			var heart1 = JSON.stringify(json.values[0][15][0]);
			var heart2 = JSON.stringify(json.values[0][15][1]);

			let probabilityH = {
				1: [heart1 * 100, heart2 * 100]
			};

			if (parseInt(JSON.stringify(json.values[0][16])) == 0) {
				$w("#result1").text = "Likely to have Heart Disease";
				
			} else {
				$w("#result1").text = "Not likely to have Heart Disease";
			}
            $w("#html1").postMessage(probabilityH[1]);
			console.log('heart= ' + heart1);
			console.log('heart= ' + heart2);
		});

	// call for diabetes
	getDiabetesPrediction(input)
		.then(json => {

			var diabetes1 = JSON.stringify(json.values[0][15][0]);
			var diabetes2 = JSON.stringify(json.values[0][15][1]);

			let probabilityD = {
				1: [diabetes1 * 100, diabetes2 * 100]
			};

			if (parseInt(JSON.stringify(json.values[0][16])) == 0) {
				$w("#result2").text = "Likely to have Diabetes";
				
			} else {
				$w("#result2").text = "Not likely to have Diabetes";
			}
            $w("#html2").postMessage(probabilityD[1]);
			console.log('diab= ' + diabetes1);
			console.log('diab= ' + diabetes2);
		});

	// call for diabetes
	getArteryPrediction(input)
		.then(json => {

			var artery1 = JSON.stringify(json.values[0][15][0]);
			var artery2 = JSON.stringify(json.values[0][15][1]);

			let probabilityA = {
				1: [artery1 * 100, artery2 * 100]
			};

			if (parseInt(JSON.stringify(json.values[0][16])) == 0) {
				$w("#result3").text = "Likely to have Artery Disorder";
				
			} else {
				$w("#result3").text = "Not likely to have Artery Disorder";
			}
            $w("#html3").postMessage(probabilityA[1]);
			console.log('art= ' + artery1);
			console.log('art= ' + artery2);
		});

	// call for diabetes
	getAnxietyPrediction(input)
		.then(json => {

			var anxiety1 = JSON.stringify(json.values[0][15][0]);
			var anxiety2 = JSON.stringify(json.values[0][15][1]);

			let probabilityAx = {
				1: [anxiety1 * 100, anxiety2 * 100]
			};

			if (parseInt(JSON.stringify(json.values[0][16])) == 0) {
				$w("#result4").text = "Likely to have Anxiety or Depression";
				
			} else {
				$w("#result4").text = "Not likely to have Anxiety or Depression";
			}
            $w("#html4").postMessage(probabilityAx[1]);
			console.log('anxiety= ' + anxiety1);
			console.log('anxiety= ' + anxiety2);
		});

}
