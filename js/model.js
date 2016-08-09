
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
    grayScholarshipLogo.hide();
    scholarshipLogo.fadeTo('slow', 1);
  }
  else if (parametersChosen.type == 'Loan Program'){
    console.log('success');
    grayLoanLogo.hide();
    loanLogo.fadeTo('slow', 1);
  }
  else if (parametersChosen.grade == 'High School'){
    highschoolLogoGray.hide();
    highchoolLogo.fadeTo('slow', 1);
  }
  else  if (parametersChosen.grade == 'K-12'){
    console.log('success');
    k12LogoGray.hide();
    k12Logo.fadeTo('slow', 1);
  }
  else{
    grayScholarshipLogo.hide();
    grayLoanLogo.hide();
    scholarshipLogo.fadeTo('slow', 1);
    loanLogo.fadeTo('slow', 1);
  }
};

function hideAll(){
  loanLogo.hide();
  scholarshipLogo.hide();
  grayScholarshipLogo.fadeTo('slow', 1);
  grayLoanLogo.fadeTo('slow', 1);

};
