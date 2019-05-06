import {fetch} from 'wix-fetch';  

export function getToken() {

    
    //const tokenHeader = "Basic " + btoa(('29c43a7d-ed42-416a-87c9-c8a69ef064f6' + ":" + 'b085fa23-0fa2-4ce3-b172-7f885041ad75'));
            

  const url = 'https://us-south.ml.cloud.ibm.com/v3/identity/token';
  //console.log("Url: " + url);	
  
  return fetch(url, {
            method: 'get',
            headers: {
				'Authorization': 'Basic MjljNDNhN2QtZWQ0Mi00MTZhLTg3YzktYzhhNjllZjA2NGY2OmIwODVmYTIzLTBmYTItNGNlMy1iMTcyLTdmODg1MDQxYWQ3NQ==',
				'Content-Type': 'application/json;charset=UTF-8',
			}
        }
    )
    .then(response => response.json())
    .catch(err => console.log(err));
    //console.log("TOKENNN === "+response.json());
}


export function getHeartPrediction(input) {
    //const url = 'https://us-south.ml.cloud.ibm.com/v3/wml_instances/ecd408d9-f769-456d-9dd3-e90da87aaeeb/deployments/6f355de3-b9e1-4e33-aedc-65f039a1a338/online';
    
    const url = 'https://us-south.ml.cloud.ibm.com/v3/wml_instances/ecd408d9-f769-456d-9dd3-e90da87aaeeb/deployments/d51c8cd2-b489-490b-b93f-58534ed21b73/online';
    //console.log("Url: " + url);

    //getToken();
    //console.log("token: " + JSON.stringify(getToken()));

    return getToken()
    .then(output => {
        const token = output.token;
        //console.log('Using Token: ' + token)
       // console.log('Input == '+JSON.stringify(input))
        return fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json;charset=UTF-8',
            },
            'body': JSON.stringify(input),
        })
        .then((httpResponse) => {
            if (httpResponse.ok) {
                return httpResponse.json();
            } else {
                return Promise.reject("Fetch did not succeed");
            }
        });
    });
}


export function getDiabetesPrediction(input) {
     
    const url = 'https://us-south.ml.cloud.ibm.com/v3/wml_instances/ecd408d9-f769-456d-9dd3-e90da87aaeeb/deployments/d51c8cd2-b489-490b-b93f-58534ed21b73/online';
    //console.log("Url: " + url);

    //getToken();
    //console.log("token: " + JSON.stringify(getToken()));

    return getToken()
    .then(output => {
        const token = output.token;
        //console.log('Using Token: ' + token)
       // console.log('Input == '+JSON.stringify(input))
        return fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json;charset=UTF-8',
            },
            'body': JSON.stringify(input),
        })
        .then((httpResponse) => {
            if (httpResponse.ok) {
                return httpResponse.json();
            } else {
                return Promise.reject("Fetch did not succeed");
            }
        });
    });
}




export function getArteryPrediction(input) {
    //const url = 'https://us-south.ml.cloud.ibm.com/v3/wml_instances/ecd408d9-f769-456d-9dd3-e90da87aaeeb/deployments/6f355de3-b9e1-4e33-aedc-65f039a1a338/online';
    
    const url = 'https://us-south.ml.cloud.ibm.com/v3/wml_instances/ecd408d9-f769-456d-9dd3-e90da87aaeeb/deployments/747c52f0-db91-41c4-90ef-c21e0531ac38/online';
   // console.log("Url: " + url);

    //getToken();
    //console.log("token: " + JSON.stringify(getToken()));

    return getToken()
    .then(output => {
        const token = output.token;
        //console.log('Using Token: ' + token)
       // console.log('Input == '+JSON.stringify(input))
        return fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json;charset=UTF-8',
            },
            'body': JSON.stringify(input),
        })
        .then((httpResponse) => {
            if (httpResponse.ok) {
                return httpResponse.json();
            } else {
                return Promise.reject("Fetch did not succeed");
            }
        });
    });
}



export function getAnxietyPrediction(input) {
    //const url = 'https://us-south.ml.cloud.ibm.com/v3/wml_instances/ecd408d9-f769-456d-9dd3-e90da87aaeeb/deployments/6f355de3-b9e1-4e33-aedc-65f039a1a338/online';
    
    const url = 'https://us-south.ml.cloud.ibm.com/v3/wml_instances/ecd408d9-f769-456d-9dd3-e90da87aaeeb/deployments/465ab636-b0bc-4a63-a060-077b1039afff/online';
    console.log("Url: " + url);

    //getToken();
    //console.log("token: " + JSON.stringify(getToken()));

    return getToken()
    .then(output => {
        const token = output.token;
        //console.log('Using Token: ' + token)
       // console.log('Input == '+JSON.stringify(input))
        return fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json;charset=UTF-8',
            },
            'body': JSON.stringify(input),
        })
        .then((httpResponse) => {
            if (httpResponse.ok) {
                return httpResponse.json();
            } else {
                return Promise.reject("Fetch did not succeed");
            }
        });
    });
}
