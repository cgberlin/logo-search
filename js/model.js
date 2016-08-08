
parametersChosen = {
  type : '',
  grade : ''
};

var scholarshipLogo = $('.scholarship-logo');
var grayScholarshipLogo = $('.scholarship-logo-gray');
var loanLogo = $('.loan-logo');
var grayLoanLogo = $('.loan-logo-gray');
var k12Logo = $("[name='k12-logo']");
var k12LogoGray = $("[name='k12-logo-gray']");
var highchoolLogo = $("[name='highschool-logo']");
var highschoolLogoGray = $("[name='highschool-logo']");


$('.type-clicked').on('click', function(){
  value = $(this).html();
  parametersChosen.type = value;
  console.log(parametersChosen.type);
});

$('.grade-clicked').on('click', function(){
  value = $(this).html();
  parametersChosen.grade = value;
  console.log(parametersChosen.grade);
});
$('.search-container').on('click', 'button', function(){
  checkToHighlight();
})
function checkToHighlight(){
  if (parametersChosen.type == 'Scholarship Program'){
    console.log('success');
    loanLogo.hide();
    grayLoanLogo.show();
    scholarshipLogo.show();
    grayScholarshipLogo.hide();
  }
  else if (parametersChosen.type == 'Loan Program'){
    console.log('success');
    scholarshipLogo.hide();
    grayScholarshipLogo.show();
    loanLogo.show();
    grayLoanLogo.hide();
  }
  else if (parametersChosen.grade == 'High School'){
    k12Logo.hide();
    k12LogoGray.show();
    highschoolLogoGray.hide();
    highchoolLogo.show();
  }
  else  if (parametersChosen.grade == 'K-12'){
    console.log('success');
    highchoolLogo.hide();
    highschoolLogoGray.show();
    k12LogoGray.hide();
    k12Logo.show();
  }
  else{
    grayScholarshipLogo.hide();
    scholarshipLogo.show();
    grayLoanLogo.hide();
    loanLogo.show();
  }
};
