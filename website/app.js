/* Global Variables */
const urlBase = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=8ea4ee6978895ca25cc2d5aa6911c97e';
const zip = document.getElementById('zip').value;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();


document.getElementById('generate').addEventListener('click',(event)=>{
  const newZip = document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;
  retrieveData(urlBase,newZip,apiKey)

  .then((data)=>{
    postData('/add', {data:newDate, temp:data.main.temp, content:feelings})
   // .then(retrieveData('/all'))
    .then(updateUI)
  })
})

// Async GET
const retrieveData = async (baseURL, zip, apiKey) => { 
    const request = await fetch(baseURL + zip + apiKey)
    try {
    // Transform into JSON
    const allData = await request.json();
    return allData;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  };
// 
// Async POST
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header        
  })

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};


//the chained function
//function to GET projectData
const updateUI = async ()=>{
  const request = await fetch('/all')
  try{
    const allData = await request.json();
    document.getElementById('date').innerHTML = `Data: ${allData.data}`;
    document.getElementById('temp').innerHTML = `Temperatuer: ${allData.temp}`;
    document.getElementById('content').innerHTML = `I feel: ${allData.content}`;
  }catch(error) {
    console.log("error", error);
    }
}

