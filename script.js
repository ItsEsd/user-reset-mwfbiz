var elem = document.getElementById("footer");
$("#btnobdm").click(function () {
  $("#usrobdm").show();
  $("#secone").hide();
  elem.style.display = "none";
});

$("#btnmono").click(function () {
  $("#usrmono").show();
  $("#secone").hide();
  elem.style.display = "none";
});
const loca = window.location.hostname;
if (loca.endsWith("mwfbiz.com")) {
  document.body.style.display = "block";
} else {
  document.body.innerHTML = "";
}
