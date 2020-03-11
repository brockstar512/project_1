
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

//fetch asks for the url provided and request that the data be sent to it.
//it recieves JSON => js Object Notoation. Its going to return an array of objects.
//we use json to parse the data from a string to a full blown {object}
fetch(source)
   //when this data is input then ill respond with the parsed data
  .then( response => response.json() ) //this parses the data from string back into an object
  .then( data => {
  //console.log('data', data)
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

               
//how come this function is running without me having to call it?
let $mainContainer = $(".generalAssembly")
function app(projects){
      projects.forEach( function(element) {
      let $divProj = $('<div>').addClass('item')
      //created a button to see the code for each project
      //let $codeButton = $('<button>').addClass('btnCode')
      let $desc =$('<p>').addClass('description')
      let $heading =$('<h4>').addClass('title')
      $heading.append(element['title'])
      $desc.append(element['description'])
      //the button. don't worry about button for now.
      //$codeButton.append(element['URL'])
      let $wrapper =$('<div>').addClass('wrap')    
      $wrapper.append($desc)
      $wrapper.prepend($heading)
      $divProj.append($wrapper)
      //creating the button
      let $seeCodeB =$('<button>') 
      $seeCodeB .addClass('code').html('See Page')
      $('.wrap').append($seeCodeB )
      //end of creatin button
      $divProj.css('background-image', 'url("'+ element['image'] + '")')
      $mainContainer.append($divProj)
      
    })
  }


  

  $('.code').click(function() {
    window.location.href = element['url'];
    return false;
  });

   /*
    for(let i = 0; i < projects.length;i++){
      `<div class = "item">
      <h4 class="heading">${projects.title}</h4>
      <p class="desc">${projects.description}</p>
      </div>`
    }
    */
/*

in case picture doesnt work
//$('myOjbect').css('background-image', 'url("' + imageUrl + '")');

const $imageHead =$('<img>')
$imageHead.attr('src','https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D')
$body.prepend($imageHead)
*/
/*
$('button selector').click(function(){
    window.location.href='the_link_to_go_to.html';
 })*/
