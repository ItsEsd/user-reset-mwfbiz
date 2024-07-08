document.getElementById("verClick1-m").addEventListener("click", verifyEmailM);
var usrc_ =
  "https://script.google.com/macros/s/AKfycbww8VNxIZvI3e1Xs3uX5bHjFkBnTsfC07-s_OZ579HPNbecLTHKUzRxITVBuGSL2Khg" +
  "/exec";
document.getElementById("svnewpass-m").addEventListener("click", updatepassM);

function updatepassM() {
  document.getElementById("loader3-m").style.visibility = "visible";
  var script_pass =
    "https://script.google.com/macros/s/AKfycbxLuHw6CPKhGb7Fjm-CxEMIRybUn-Tt3y89GB90W6j_gO0Pg7zC3ySQX-FkbspoG6eldg/exec";
  var newP = $("#passwordnew-m").val();
  var emid = $("#email1-m").val();
  if (emid != "info@mwfbiz.com" && newP != 0) {
    var urlp =
      script_pass +
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
    document.getElementById("showPass-m").innerHTML =
      '<div><h4 style="color:red;font-size:16px;"><p style="color:#008000;">&#9745; You have changed your pass successfully</p></div>';
    setTimeout(function () {
      $("#showPass-m").fadeOut("fast");
      location.reload();
    }, 5000);
  }
}
function verifyEmailM() {
  var ml = $("#mid-m").val();
  if (ml != 0) {
    document.getElementById("loader1-m").style.visibility = "visible";
    document.getElementById("mcheck-m").style.display = "none";
    var url = usrc_ + "?action=versign";
    $.getJSON(url, function (json) {
      for (var i = 0; i < json.records.length - 1; i++) {
        if (ml == json.records[i].Email) {
          document.getElementById("verStep1-m").style.display = "none";
          document.getElementById("verStep2-m").style.display = "block";
          document.getElementById("email1-m").value = ml;
          document.getElementById("loader1-m").style.visibility = "hidden";
        } else {
          document.getElementById("mcheck-m").style.display = "block";
          document.getElementById("loader1-m").style.visibility = "hidden";
        }
      }
    });
  } else {
    return false;
  }
}
document.getElementById("verClick2-m").addEventListener("click", verifybirthM);
function verifybirthM() {
  var ml = $("#mid-m").val();
  var da = $("#dobday").val();
  var mo = $("#dobmonth").val();
  var ye = $("#dobyear").val();
  if (da != 0 && mo != 0 && ye != 0) {
    document.getElementById("loader2-m").style.visibility = "visible";
    document.getElementById("birthcheck").style.display = "none";
    var url = usrc_ + "?action=versign";
    $.getJSON(url, function (json) {
      for (var i = 0; i < json.records.length - 1; i++) {
        if (
          ml == json.records[i].Email &&
          da == json.records[i].DOBDate &&
          mo == json.records[i].DOBMonth &&
          ye == json.records[i].DOBYear
        ) {
          document.getElementById("verStep2-m").style.display = "none";
          document.getElementById("modPass-m").style.display = "block";
          document.getElementById("loader2-m").style.visibility = "hidden";
        } else {
          document.getElementById("birthcheck").style.display = "block";
          document.getElementById("loader2-m").style.visibility = "hidden";
        }
      }
    });
  } else {
    return false;
  }
}
