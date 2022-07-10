/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
function movePage(link) {
  location.href = link;
}

$(function () {
  $(".heart_empty").click(function () {
    $(this).toggleClass("heart_full");
  });
});
