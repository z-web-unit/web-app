var $leftArrowStudent = $('.left-arrow-student');
var $jobDescription = $('.job-description');
var $closeLabel = $('.close-label');
var $bookmarkIcon = $('.bookmark-icon');
var $bookmarkedIcon = $('.bookmarked-icon');

$leftArrowStudent.on('click', function () {
  $jobDescription.show();
});

$closeLabel.on('click', function () {
  $jobDescription.hide();
});

$('.bookmark').on('click', function () {
  $bookmarkedIcon.toggle();
});
