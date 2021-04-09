$(document).ready(function () {
  //hide all
  $("#tab1_text").show();
  $("#btn_tab1").addClass("active");
  $("#tab2_text").hide();
  $("#btn_tab2").addClass("notActive");
  $("#tab3_text").hide();
  $("#btn_tab3").addClass("notActive");
  var show_speed = 500;
  var hide_speed = 500;
  //declareVars
  var tab1_isvisible = true;
  var tab2_isvisible = false;
  var tab3_isvisible = false;
  $("#btn_tab1").click(function () {
    hideA(1);
  });
  $("#btn_tab2").click(function () {
    hideA(2);
  });
  $("#btn_tab3").click(function () {
    hideA(3);
  });
  function hideA(id) {
    switch (id) {
      case 1:
        if (tab2_isvisible) {
          $("#tab2_text").fadeOut(hide_speed);
          tab2_isvisible = false;
          $("#btn_tab2").removeClass("active");
          $("#btn_tab2").addClass("notActive");
        }
        if (tab3_isvisible) {
          $("#tab3_text").fadeOut(hide_speed);
          $("#btn_tab3").removeClass("active");
          $("#btn_tab3").addClass("notActive");
          tab3_isvisible = false;
        }
        if (!tab1_isvisible) {
          $("#tab1_text").fadeIn(show_speed);
          tab1_isvisible = true;
          $("#btn_tab1").addClass("active");
          $("#btn_tab1").removeClass("notActive");
        }
        break;
      case 2:
        if (tab1_isvisible) {
          $("#tab1_text").fadeOut(hide_speed);
          tab1_isvisible = false;
          $("#btn_tab1").removeClass("active");
          $("#btn_tab1").addClass("notActive");
        }
        if (tab3_isvisible) {
          $("#tab3_text").fadeOut(hide_speed);
          $("#btn_tab3").removeClass("active");
          $("#btn_tab3").addClass("notActive");
          tab3_isvisible = false;
        }
        if (!tab2_isvisible) {
          $("#tab2_text").fadeIn(show_speed);
          $("#btn_tab2").addClass("active");
          $("#btn_tab2").removeClass("notActive");
          tab2_isvisible = true;
        }
        break;
      case 3:
        if (tab1_isvisible) {
          $("#tab1_text").fadeOut(hide_speed);
          $("#btn_tab1").removeClass("active");
          $("#btn_tab1").addClass("notActive");
          tab1_isvisible = false;
        }
        if (tab2_isvisible) {
          $("#tab2_text").fadeOut(hide_speed);
          tab2_isvisible = false;
          $("#btn_tab2").removeClass("active");
          $("#btn_tab2").addClass("notActive");
        }
        if (!tab3_isvisible) {
          $("#tab3_text").fadeIn(show_speed);
          tab3_isvisible = true;
          $("#btn_tab3").addClass("active");
          $("#btn_tab3").removeClass("notActive");
        }
        break;
    }
  }
});
