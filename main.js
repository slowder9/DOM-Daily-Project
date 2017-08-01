// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
// ( function(){
//   // Select the first element from the array
//   let first = formData[ 0 ];
//   // Log the first object
//   console.log( first );
//   // Log the string "First Name"
//   console.log( first.label );
// } )();


// -------- Your Code Goes Below this Line --------
// (function (){

// let first = formData[0];

// console.log( first );

// console.log( first.label );


// } ) ();

// let input = document.createElement("input");
// input type = text;
// // input.className = "fields";
// let text = document.querySelector("#user-first-name");
// fields.appendChild(input);

let addToForm = document.querySelector("fields");

// function updateForm (){

for(let i = 0; i < formData.length; i++){
  let input;
  if(formData[i].type === "select"){
     input = document.createElement("select");

for(let x = 0; x < formData[i].options.length; x++){
    let select = document.createElement("option");
    input.appendChild(select);
    select.textContent = ("options");
    input.setAttribute("type", formData[i].type);
    input.setAttribute("id", formData[i].id);
    input.setAttribute("placeholder", formData[i].label);
    input.setAttribute("value", formData[i].value);
    input.setAttribute("options", formData[i].options);
    // code to make the select box
}
    }else if (formData[i].type === "textarea"){
      //  code to make a textarea
      input = document.createElement("TEXTAREA");
      input.setAttribute("placeholder", formData[i].label);
      
    }
    else {

// let input = document.createElement("input");
  input = document.createElement("input");
  // let select = document.createElement("options")
  // let inputText = document.createTextNode(formData[i].label);
  // input.textContent = (formData[i].label);
  input.setAttribute("type", formData[i].type);
  input.setAttribute("id", formData[i].id);
  input.setAttribute("placeholder", formData[i].label);
  input.setAttribute("icon", formData[i].icon);

    }

  
  

  // input.appendChild(inputText);
  fields.appendChild(input);
  //fields or "addToForm"

}


//   if(formData[i]type === "select"){
//     let input = document.createElement("select");
//     let select = document.createElement("options");



//   //   input.setAttribute("type", formData[i].type);
//   //   input.setAtttribute("id", formData[i].id);
//   //   input.setAttribute("placeholder", formData[i].label);

//   // }
// }
// }

// let firstName = document.getElementById("#user-first-name");
// firstName.addEventListener("input", updateForm);










