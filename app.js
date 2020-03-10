
/* IMPORT GOOGLE SHEET AS JSON

  1. Create a new google sheet
  2. Add the needed column names
  3. Share the google sheet
  4. Publish the google sheet
  5. Grab the ID from the shared google sheet
     ex: 'https://docs.google.com/spreadsheets/d/15PmioBi2dQEkewpqI7MDkDpvcVF0Trw8vmarAQbwoHk/edit?usp=sharing'
     id = '15PmioBi2dQEkewpqI7MDkDpvcVF0Trw8vmarAQbwoHk'
  6. Add ID to the following url:
     ex: `https://spreadsheets.google.com/feeds/list/ID GOES HERE/od6/public/values?alt=json`
  7. Use fetch to pull the data as json
  8. Loop over the data and create a new object for each element in the array with new key names

*/

let url = 'https://docs.google.com/spreadsheets/d/1Sm9pA_c8Rl3wFzDcweYNdXfY0FlcZ5FYTjrgVpWZCEQ/edit#gid=0'
let id = '1Sm9pA_c8Rl3wFzDcweYNdXfY0FlcZ5FYTjrgVpWZCEQ'


let source = `https://spreadsheets.google.com/feeds/list/1Sm9pA_c8Rl3wFzDcweYNdXfY0FlcZ5FYTjrgVpWZCEQ/od6/public/values?alt=json`

//let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`

//actual url not published url


//--fetch --//


//fetch asks for the url provided and request that the data be sent to it.
//it recieves JSON => js Object Notoation. Its going to return an array of objects.
//we use json to parse the data from a string to a full blown {object}
fetch(source)
   //when this data is input then ill respond with the parsed data
  .then( response => response.json() ) //this parses the data from string back into an object
  //
  .then( data => {
  console.log('data', data)
                //data.feed.entry is the array that has the array stored
                //the projects are stored as objects
                    //data is the whole object then the following are a nest of keys. then you make a map of it and reference the variavle as preference and each indexed item is project.
                let projects = data.feed.entry.map( project => {
                  //
                    return {
                    title: project.gsx$title.$t,
                    image: project.gsx$image.$t,
                    description:project.gsx$description.$t,
                    url:project.gsx$url.$t
                  }
                })
                app(projects)
               }) //this provides us access to the parse data

function app(projects){
  console.log('app - projects', projects)
}



//this is just how we want the data to look
/*let projects = [
  {title: 'Startup Matchmaker', image:'image url', desciption:'some desc', url:'url to project'}
]*/






