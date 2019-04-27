// For full API documentation, including code examples, visit http://wix.to/94BuAAs
import {getHeartPrediction} from 'backend/heasrt.jsw';

$w.onReady(function () {
	//TODO: write your page related code here...
});

export function predict_click_1(event, $w) {
    //Add your code for this event here: 
   // console.log("Retrieving information for " + $w("#age").value);
    $w("#result").text = "Retrieving information";
	var input = {
		fields: ["age", "sex", "cp", "trestbps", "fbs", "restecg", "thalach", "exang", "oldpeak", "slope", "ca", "thal", "num"],
		values: [
			[parseInt($w("#age").value, 10), 
            parseInt($w("#sex").value, 10),
            parseInt($w("#cp").value, 10),
            parseInt($w("#trestbp").value, 10),
            parseInt($w("#chol").value, 10),
            parseInt($w("#age").value, 10),
            parseInt($w("#age").value, 10)
            
            0, null, null,null,null,null,null,null,null,null,null,null],
		],
	};
    
    getHeartPrediction(input)
    .then(json => {
        //$w("#result").text = "Prediction: " + JSON.stringify(json);
        $w("#result").text = "Prediction: " + JSON.stringify(json);
    });
}
