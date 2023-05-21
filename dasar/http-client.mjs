import https from "https";

const endpoint = 'https://webhook.site/15150bf5-d03b-4161-a0fb-4a9d4ebdd81f';
const request = https.request(endpoint, {
    method: "POST", // request header
    header: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    }
}, (response) => { //callback untuk tangkap response
    response.addListener("data", (data) => { //event listener dan callback ketika ada data response
        console.info(`Response data : ${data.toString()}`); //mencetak response data
    })
});

const body = JSON.stringify({ // body yg akan dikirim ke https.request
    firstName: "Ardi",
    lastName: "Rannu",
});

request.write(body); //mengirim body
request.end(); //end request