var $leftArrowEmployer = $('.left-arrow-employer');
var $closeLabel = $('.close-label');

$leftArrowEmployer.on('click', function () {
  $(this).siblings('.student-profile-overlay').show();
});

$closeLabel.on('click', function () {
  $('.student-profile-overlay').hide();
});


var $companyPopup = $('.company-popup');
$companyPopup.on('click', function () {
  $(this).parent().siblings('.job-data').children(".student-profile-overlay").show();
});
