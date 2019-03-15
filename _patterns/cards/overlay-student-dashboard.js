var $leftArrowStudent = $('.left-arrow-student');
var $closeLabel = $('.close-label');

$leftArrowStudent.on('click', function () {
  $(this).siblings('.job-description').show();
});

$closeLabel.on('click', function () {
  $('.job-description').hide();
});

var $companyPopup = $('.company-popup');
$companyPopup.on('click', function () {
  $(this).parent().siblings('.job-data').children(".job-description").show();
});
