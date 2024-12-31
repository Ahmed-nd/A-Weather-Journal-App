/* Global Variables */
const url = 'http://api.openweathermap.org/data/2.5/weather?zip='
const key = '&appid=ef6dc2080b1925d120007e91402927b0'
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate() + ' : ' + (d.getMonth() + 1) + ' : ' + d.getFullYear();

document.getElementById('generate').addEventListener('click', () => {
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    retrieveData(url, zip, key)

        .then((data) => {
            console.log(newDate)
            postData('/addData', { date: newDate, temp: data.main.temp, content: feelings })
            console.log('temp:', data.main)
            // .then(updateUI)
            updateUI()
        });
});

const retrieveData = async (url, zip, key) => {
    const res = await fetch(url + zip + key)
    try {
        const data = await res.json()
        console.log('retrieveData', data)
        return data
    } catch (error) {
        console.log("error", error);
    }
}

const postData = async (url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    try {
        const newData = await res.json()
        console.log('postData', newData)
        return newData
    } catch (error) {
        console.log('error', error)
    }
}

const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        var temp = allData.temp - 272.15;
        document.getElementById('date').innerHTML = `<span style="font-weight: bold;">Data:</span> ${allData.date}`;
        document.getElementById('temp').innerHTML = `<span style="font-weight: bold;">Temperatuer:</span> ${temp.toPrecision(4)} °C`;
        document.getElementById('content').innerHTML = `<span style="font-weight: bold;">I feel:</span> ${allData.content}`;
        

    } catch (error) {
        console.log("error", error);
    }
}
