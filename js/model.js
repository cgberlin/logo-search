
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
var highschoolLogoGray = $("[name='highschool-logo-gray']");


function checkToHighlight(){
  if (parametersChosen.type == 'Scholarship Program'){
    console.log('success');
    scholarshipLogo.show();
    grayScholarshipLogo.hide();
  }
  else if (parametersChosen.type == 'Loan Program'){
    console.log('success');
    loanLogo.show();
    grayLoanLogo.hide();
  }
  else if (parametersChosen.grade == 'High School'){
    highschoolLogoGray.hide();
    highchoolLogo.show();
  }
  else  if (parametersChosen.grade == 'K-12'){
    console.log('success');
    k12LogoGray.hide();
    k12Logo.fadeIn(1000);
  }
  else{
    grayScholarshipLogo.hide();
    scholarshipLogo.show();
    grayLoanLogo.hide();
    loanLogo.show();
  }
};

function hideAll(){
  grayScholarshipLogo.show();
  scholarshipLogo.hide();
  grayLoanLogo.show();
  loanLogo.hide();
};
