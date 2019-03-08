var $leftArrowStudent = $('.left-arrow-student');
var $jobDescription = $('.job-description');
var $closeLabel = $('.close-label');

$leftArrowStudent.on('click', function () {
  $jobDescription.show();
});

$closeLabel.on('click', function () {
  $jobDescription.hide();
});
