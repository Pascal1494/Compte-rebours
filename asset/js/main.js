jQuery(function ($) {
  let launch = new Date(2022, 9, 30, 18, 0, 0);

  /** Compte a rebours */

  let daysAnniv = $("#daysAnniv");
  let hoursAnniv = $("#hoursAnniv");
  let minutesAnniv = $("#minutesAnniv");
  let secondsAnniv = $("#secondsAnniv");

  setDate();
  function setDate() {
    let now = new Date();
    let s = (launch.getTime() - now.getTime()) / 1000;
    let d = Math.floor(s / 86400);
    daysAnniv.html(
      "<strong>" + d + "</strong> jour" + (d > 1 ? "s" : "")
    );
    s -= d * 86400;

    let h = Math.floor(s / 3600);
    hoursAnniv.html("<strong>" + h + "</strong> heure" + (h > 1 ? "s" : ""));
    s -= h * 3600;

    let m = Math.floor(s / 60);
    minutesAnniv.html("<strong>" + m + "</strong> minute" + (m > 1 ? "s" : ""));
    s -= m * 60;

    s = Math.floor(s);
    secondsAnniv.html(
      "<strong>" + s + "</strong> seconde" + (s > 1 ? "s" : "")
    );
    
    setTimeout(setDate, 1000);
  }
});

/** change color */

// function coloredH() {
//   if (h < 8) {
//     document.getElementById("daysAnniv").style.background = "red";
//   } else {
//     document.getElementById("span_trav_emer_med_insur").style.background =
//       "black";
//   }
// }

function coloredS() {
  if (s > 40) {
    document.getElementById("secondsAnniv").style.background = "red";
  } else {
    document.getElementById("secondsAnniv").style.background = "black";
  }
}

coloredS();
