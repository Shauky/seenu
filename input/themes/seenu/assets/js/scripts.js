const featured_projects = [
  {
    id: 1,
    creator: "Manoela Ilic",
    job: "UX designer / Engineer",
    img: "./assets/images/profile.png",
    text: "Maoela is a virtuoso of various web design trends. She hosts and codes for Codrops, an online publication that has been feturing web design inspiration since 2009."
  }
  // {
  //   id: 2,
  //   creator: "merit kobayashi",
  //   job: "photographer",
  //   img: "./assets/images/profile.png",
  //   text: "Using the flex-direction property with values of row-reverse or column-reverse will create a disconnect between the visual presentation of content and DOM order. This will adversely affect users experiencing",
  // }
]

const img = document.getElementById("pro-image")
const creator = document.getElementById("creator")
const job = document.getElementById("job")
const text = document.getElementById("info")

// const prevBtn = document.querySelector(".prev-button")
// const nextBtn = document.querySelector(".next-button")
const randomBtn = document.querySelector(".random-button")
let currentItem = 0 


function loadContent(){
  console.log('loaded')
}

document.addEventListener("DOMContentLoaded", function(){
  showPerson(currentItem);
  setTimeout(() => {
    window.location.href = window.location.href;
    // window.location.reload();
  }, 90000);
  loadContent();
});  

const item = currentItem;

function showPerson(person){
  const item = featured_projects[person]
  img.src = item.img
  creator.textContent = item.creator
  job.textContent = item.job
  text.textContent = item.text
}


// frontpage tooltip

$(document).ready(function(){

    $('div.ui-message').addClass('highlight');

    $('p:contains(ި),h3:contains("ި")').addClass('rightlines');

    $('.ui-close').click(function(){
        $(this).parents('.highlight').fadeOut();
    })
    
    $('article.detail').addClass('taghighlight');

    console.log('loaded')

});



// toggle menu links 
var sublinks = Array.from(document.querySelectorAll('.hidden-btn'));
var links = Array.from(document.querySelectorAll('.menu-btn'));

$(function() {
  hideEls(sublinks); // hide all elements initially

function hideEls (els) {
  if (Array.isArray(els)) {
    els.forEach(el => {
      el.style.display = 'none';
    });
  }
  return;
}

function toggleEl (els, i) {
  // check if the element is hidden or not
  if (els[i].style.display === 'none') {
    els[i].style.display = 'block';
  } else {
    els[i].style.display = 'none';
  }
}
links.forEach((link, i) => {
  link.addEventListener('mouseenter', toggleEl.bind(null, sublinks, i));
  link.addEventListener('mouseleave', () => {
    setTimeout(() => {
      toggleEl(sublinks, i);
    }, 500);
  });
});

});


// menu burger
var navbar = document.querySelector('.navout')
var linktag = document.querySelector('.linkses')

document.querySelector('.nav-toggle').addEventListener('click', function(){
  let linktag = document.querySelector('.linkses')
    if(linktag.classList.contains('show-links')){
        linktag.classList.remove('show-links');
      }else{
      linktag.classList.add('show-links')
    }
    // linktag.classList.toggle('show-links');
});

navbar.addEventListener('mouseout', function(){
  let linktag = document.querySelector('.linkses')
  linktag.classList.remove('show-links');
})

// color slider

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

      var slider = document.getElementById('slides')      
      // btn.addEventListener("click", function() {
         slider.oninput = function(){
            let hexColor = "#ff"
            const randomNumber = getRandomNumber()

            for(let i = 0; i < 6; i++){
               hexColor += hex[randomNumber]
               console.log(hexColor)
            }

            document.body.style.backgroundColor = hexColor
         };

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

// modal id
// var id = "empty"
// function returnedV() {
//   let idsi = document.getElementsByClassName('.modal')
//   idsi.addClass(idsi+=id)
//   return idsi;
// }

// returnedV()


//custom contact

// $(function() {
//     $('#submit').on('click', function() {
      
//       // name
//       var email = $('#email').val() || 'no set';

//       // post
//       var data = {
//         'YPqjbf': email,
//       };
//       $.ajax({
//         type: 'POST',
//         url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfniUbHxMFXWmtb9Q4A7_SonWzX1lRZWvJJLz0ARG20EhYZVQ/formResponse',
//         data: data,
//         contentType: 'application/json',
//         dataType: 'jsonp',
//         complete: function() {
//           alert('send success');
//         }
//       });
      
//     });
//   });