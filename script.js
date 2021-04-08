$(document).ready(function () {
  //hide all
  $("#tab1_text").hide();
  $("#tab2_text").hide();
  $("#tab3_text").hide();
  var show_speed = 500;
  var hide_speed = 500;
  //declareVars
  var tab1_isvisible = false;
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
          $("#tab2_text").hide(hide_speed);
          tab2_isvisible = false;
        }
        if (tab3_isvisible) {
          $("#tab3_text").hide(hide_speed);
          tab3_isvisible = false;
        }
        if (!tab1_isvisible) {
          $("#tab1_text").show(show_speed);
          tab1_isvisible = true;
        }
        break;
      case 2:
        if (tab1_isvisible) {
          $("#tab1_text").hide(hide_speed);
          tab1_isvisible = false;
        }
        if (tab3_isvisible) {
          $("#tab3_text").hide(hide_speed);
          tab3_isvisible = false;
        }
        if (!tab2_isvisible) {
          $("#tab2_text").show(show_speed);
          tab2_isvisible = true;
        }
        break;
      case 3:
        if (tab1_isvisible) {
          $("#tab1_text").hide(hide_speed);
          tab1_isvisible = false;
        }
        if (tab2_isvisible) {
          $("#tab2_text").hide(hide_speed);
          tab2_isvisible = false;
        }
        if (!tab3_isvisible) {
          $("#tab3_text").show(show_speed);
          tab3_isvisible = true;
        }
        break;
    }
  }
});
