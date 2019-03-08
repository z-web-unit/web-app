var $leftArrowEmployer = $('.left-arrow-employer');
var $studentProfile = $('.student-profile-overlay');
var $closeLabel = $('.close-label');

$leftArrowEmployer.on('click', function () {
  $studentProfile.show();
});

$closeLabel.on('click', function () {
  $studentProfile.hide();
});
