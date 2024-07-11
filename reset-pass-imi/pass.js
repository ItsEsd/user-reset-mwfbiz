document.getElementById("verClick1-m").addEventListener("click", verifyMNuser);
const usrc_ =
  "https://script.google.com/macros/s/AKfycbxkV2PFSfBVPp5Hfwdgpx8M5yUZvF4mBRc7Bz_V4c_P-hTjA-X5oBNR_i-35Pe5UzkJ/exec";
document.getElementById("svnewpass-m").addEventListener("click", updatepassM);

function updatepassM() {
  document.getElementById("loader3-m").style.visibility = "visible";
  var newP = $("#passwordnew-m").val();
  var emid = $("#mid-m").val();
  if (emid != "info@mwfbiz.com" && newP != 0) {
    var urlp =
      usrc_ +
      "?callback=bzmnlgudtd&email1=" +
      emid +
      "&passwordnew=" +
      newP +
      "&action=cuiweryuiwrnweroumorilewr-werhwekrh34iuy4werhkjry34iy5idhwehrwerw-e4t4hwuegrnewutr8723t4ugruereor-wer3648yrncwniryew87ryneiryb8475wre-rewr485bw8ericweynr8ewwnwehLOIAROWER-ydfhindsfndiushnfdhudsfkdsf-fskdhKGjGKGuKDdsnifskfhshfsdldsf0w979847fhkfhd-uyeinxe87798340092o0347989yhkhkgfd98ghtkgukhgkjfdy89jfdg";
    var request = jQuery.ajax({
      crossDomain: true,
      url: urlp,
      method: "GET",
      dataType: "jsonp",
    });
  } else {
    document.getElementById("loader3-m").style.visibility = "hidden";
    document.getElementById("svnewpass-m").disabled = true;
    document.getElementById("showPass-m").innerHTML =
      '<p style="color:red;">Guest pass cannot be changed</p>';
  }
}
function bzmnlgudtd(e) {
  if (e.result == "Value updated successfully!") {
    document.getElementById("loader3-m").style.visibility = "hidden";
    document.getElementById("newPassForm-m").style.display = "none";
    document.getElementById("showPass-m").innerHTML =
      '<div style="margin-top:10vh;"><h3 style="color:#e1e1e1;">&#9745; You have changed your pass successfully</h3></div>';
    setTimeout(function () {
      $("#showPass-m").fadeOut("fast");
      location.reload();
    }, 5000);
  }
}

function verifyMNuser() {
  var ml = $("#mid-m").val();
  var da = $("#dobday").val();
  var mo = $("#dobmonth").val();
  var ye = $("#dobyear").val();
  var dob = da + "-" + mo + "-" + ye;
  if (ml != 0) {
    document.getElementById("loader1-m").style.visibility = "visible";
    document.getElementById("mcheck-m").style.display = "none";
    var url =
      usrc_ +
      "?callback=ctrlqmnuser&eid=" +
      ml +
      "&dob=" +
      dob +
      "&action=vermnuser";

    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp",
    });
  } else {
    return false;
  }
}

function ctrlqmnuser(e) {
  var res = e.result;
  if (res === "Valid") {
    document.getElementById("verStep1-m").style.display = "none";
    document.getElementById("modPass-m").style.display = "block";
    document.getElementById("loader1-m").style.visibility = "hidden";
  } else if (res === "ID not found!") {
    document.getElementById("mcheck-m").style.display = "block";
    document.getElementById("loader1-m").style.visibility = "hidden";
  }
}
