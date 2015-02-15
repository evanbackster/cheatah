$(function() {
// var algebra = document.getElementById("Algebra").innerHTML;
// var economics = document.getElementById("Economics").innerHTML;
// var engrish = document.getElementById("Engrish").innerHTML;
// var accounting = document.getElementById("Accounting").innerHTML;
// var love = document.getElementById("Love").innerHTML;


function User ( name, offers, needs, location ) {

  this.name = name;
  this.offers = offers;
  this.needs = needs;
  this.location = location;
}


var jon = new User("Jon", "Accounting", "English", "Honolulu");
var joelle = new User("Joelle", "Algebra", "English", "Honolulu");
var evan = new User("Evan", "English", "Accounting", "Honolulu");
var teresa = new User("Teresa", "Economics", "English", "Honolulu");
var sarah = new User("Sarah", "Accounting", "English", "Honolulu");

var allUsers = [jon,joelle,evan,teresa,sarah];
var compareButt = document.getElementById("compare-init");

compareButt.addEventListener("click", magical);

function magical(event) {
  event.preventDefault();
  var magic = document.getElementById("need").value;
  document.getElementById("main").innerHTML="";
  for(var i = 0; i < allUsers.length; i++) {
    if(magic === allUsers[i].offers) {
      console.log(allUsers[i]);
      displayResults(allUsers[i].name, allUsers[i].offers, allUsers[i].needs);
    }
  }
}

function displayResults(name, offers, needs){
  var img_lion_div = $("<div>", {
    class: "img_lion"
  });

  var img_lion = $("<img>", {
    html: "<img src=\"/img/lion.png\">"
  });

  var cheatah_info_div = $("<div>", {
    class: "cheatah_info clearfix"
  });

  var no_link = $("<a>", {
    class: "no",
    attr: {
      href: "alt_result.html"
    }
  });

  var yes_link = $("<a>", {
    class: "yes",
    attr: {
      href: "match.html"
    }
  });

  var cheatah_name = $("<h2>", {
    text: name
  });

  var cheatah_offer = $("<h3>", {
    text: offers
  });

  var cheatah_needs = $("<h3>", {
    text: needs
  });

  var cheatah_info = $("<div>", {
    class: "info2"
  });

  cheatah_info.append([cheatah_name, "Offer:",  cheatah_offer, "Needs:", cheatah_needs]);

  var back_button = $("<div>", {
    class: "back_button clearfix",
    html: "<a class=\"button\" href=\"index.html\">Change Criteria</a>"
  });

  
  cheatah_info_div.append([no_link, cheatah_info, yes_link]);

  // img_lion_div.append(cheatah_info_div);

  $("#main").append([cheatah_info_div, back_button]);
}



// User.prototype.match = function (a, b) {
  
// var difference = {};
// var results = [];
 
//     for (var i = 0; i < b.length; i++) {
//         difference[b[i]] = true;
//     }
  
//     for (var j = 0; j < a.length; j++) {
//         if (difference[a[j]]) {
//             results.push(a[j]);
//         }
//     }
//     console.log(results);
//     return results;

// };
// var skills = [algebra, economics, english, chemistry];
// var offer = [algebra, economics, english];
// match(skills, offer);


});