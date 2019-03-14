var $leftArrowStudent = $('.left-arrow-student');
var $closeLabel = $('.close-label');

$leftArrowStudent.on('click', function () {
  $(this).siblings('.job-description').show();
});

$closeLabel.on('click', function () {
  $('.job-description').hide();
});
