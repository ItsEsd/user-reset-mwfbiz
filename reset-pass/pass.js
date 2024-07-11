document.getElementById("verClick1").addEventListener("click", verifyEmail);
function verifyEmail() {
  document.getElementById("verClick1").disabled = true;
  var ur1 = "https://script.google.com/macros/s/";
  var ur2 =
    "AKfycbxjEWkVAO6VRGrU7GnmlVQuvXzT19jY-6AJ8urPlM5mzdr2YQiNKDMH3xqc3mw3Top1eQ";
  var ursc = ur1 + ur2 + "/exec";
  var ml = $("#mid").val();
  if (ml != 0) {
    document.getElementById("loader1").style.visibility = "visible";
    document.getElementById("mcheck").style.display = "none";
    var urscv = ursc + "?callback=ctrlqchmail&mid=" + ml + "&action=chmail";
    var request = jQuery.ajax({
      crossDomain: true,
      url: urscv,
      method: "GET",
      dataType: "jsonp",
    });
  } else {
    document.getElementById("verClick1").disabled = false;
    return false;
  }
}
function ctrlqchmail(e) {
  var res = e.result;
  var ml = $("#mid").val();
  if (res == "ID found!") {
    document.getElementById("email1").value = ml;
    document.getElementById("loader1").style.visibility = "hidden";
    sendEmail();
  } else {
    document.getElementById("verClick1").disabled = false;
    document.getElementById("mcheck").style.display = "block";
    document.getElementById("loader1").style.visibility = "hidden";
  }
}

verificationStep2.addEventListener("submit", (event) => {
  if (
    document.getElementById("vercode").value ==
    document.getElementById("vercodepre").value
  ) {
    document.getElementById("verStep2").style.display = "none";
    document.getElementById("modPass").style.display = "block";
    document.getElementById("loader2").style.visibility = "hidden";
  } else {
    event.preventDefault();
    document.getElementById("vcheck").style.display = "block";
    document.getElementById("loader2").style.visibility = "hidden";
  }
});

document.getElementById("svnewpass").addEventListener("click", updatepass);
function updatepass() {
  document.getElementById("loader3").style.visibility = "visible";
  var r1 = "https://script.google.com/macros/s/";
  var r2 =
    "AKfycbxjEWkVAO6VRGrU7GnmlVQuvXzT19jY-6AJ8urPlM5mzdr2YQiNKDMH3xqc3mw3Top1eQ";
  var rs = r1 + r2 + "/exec";
  var newP = $("#passwordnew").val();
  var emid = $("#email1").val();
  if (emid != "info@mwfbiz.com" && newP != 0) {
    var urlp =
      rs +
      "?callback=bzpupdtd&email1=" +
      emid +
      "&passwordnew=" +
      newP +
      "&action=bizpdt";
    var request = jQuery.ajax({
      crossDomain: true,
      url: urlp,
      method: "GET",
      dataType: "jsonp",
    });
  } else {
    document.getElementById("loader3").style.visibility = "hidden";
    document.getElementById("svnewpass").disabled = true;
    document.getElementById("showPass").innerHTML =
      '<p style="color:red;">Guest pass cannot be changed</p>';
  }
}
function bzpupdtd(e) {
  if (e.result == "Value updated successfully!") {
    document.getElementById("loader3").style.visibility = "hidden";
    document.getElementById("newPassForm").style.display = "none";
    document.getElementById("showPass").innerHTML =
      '<div style="margin-top:10vh;"><h3 style="color:#e1e1e1;">&#9745;  Passcode Changed</h3></div>';
    setTimeout(function () {
      $("#showPass").fadeOut("fast");
      window.open("https://mwfbiz.com", "_self");
    }, 5000);
  }
}
function sendEmail() {
  var k =
    Math.random().toString(26).substring(2, 6) +
    Math.random().toString(26).substring(2, 6);
  var mailat = document.getElementById("mid").value;
  document.getElementById("vercodepre").value = k;

  var mbody =
    "<html><body style='background-color:#161616;color:white;border-radius:10px;'><div align='center' style='padding:40px;'><h2 style='color:white'>W E L C O M E</h2><h2><a target='_blank' href='https://mwfbiz.com' style='text-decoration:none;'>Mind Without Fear - M W F</a></h2>" +
    "<p style='color:white;'>Your Confirmation Code is: </p><h3 style='color:black;width:140px;background-color:#e6e6e6;border-radius:4px;padding:6px;'>" +
    k +
    "</h3><br><p style='color:white;'>Contact: <a href='mailto:info@mwfbiz.com'>info@mwfbiz.com</a></p><h4 style='color:white;'>Thank You</h4><p style='font-size:12px;color:#ffd703;'>N.B. Do not reply to this email</p></div></body></html>";

  var formData = {
    to: mailat,
    subject: "OBDM - ADMIN Verification",
    text: mbody,
  };

  $.ajax({
    type: "POST",
    url: "https://api.amrit-corp.com/_email/noreply/mwfbiz.com/",
    data: JSON.stringify(formData),
    contentType: "application/json",
    success: function (response) {
      document.getElementById("verClick2").disabled = false;
      document.getElementById("notifyver").style.display = "block";
      document.getElementById("verStep1").style.display = "none";
      document.getElementById("verStep2").style.display = "block";
      setTimeout(function () {
        jQuery("#notifyver").fadeOut("fast");
      }, 5000);
    },
    error: function (error) {
      alert(
        "Error sending verification email! Please check Internet connection."
      );
    },
  });
}
var clicks = 0;
function onClick() {
  clicks += 1;
  if (clicks == 1) {
    document.getElementById("rescode").style.pointerEvents = "none";
    document.getElementById("rescode").innerHTML = "Please check your email";
  }
}

var url_string = window.location.href;
var url = new URL(url_string);
var q = url.searchParams.get("usrem");
var k = url.searchParams.get("state");
if (k == "v") {
  var t = q.split("-");
  var em = window.atob(t[1]);
  $("#secone").hide();
  document.getElementById("footer").style.display = "none";
  $("#usrobdm").show();
  document.getElementById("email1").value = em;
  document.getElementById("verStep1").style.display = "none";
  document.getElementById("modPass").style.display = "block";
} else {
  $("#secone").show();
  document.getElementById("footer").style.display = "block";
}
