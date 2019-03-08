var $position = $("#position");
var $btn = $(".dashboard-btn .btn");

$position.on('change', function () {
  if ($position.val() == "student") {
    $btn.attr('href', '/student-dashboard');
  } else {
    $btn.attr('href', '/employer-dashboard');
  }
});
