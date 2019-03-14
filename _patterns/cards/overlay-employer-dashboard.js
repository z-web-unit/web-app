var $leftArrowEmployer = $('.left-arrow-employer');
var $closeLabel = $('.close-label');

$leftArrowEmployer.on('click', function () {
  $(this).siblings('.student-profile-overlay').show();
});

$closeLabel.on('click', function () {
  $('.student-profile-overlay').hide();
});
