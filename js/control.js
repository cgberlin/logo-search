$('.grade-clicked').on('click', function(){
  value = $(this).html();
  $('#choose-grade').html(value);
  parametersChosen.grade = value;
  console.log(parametersChosen.grade);
});


$('.type-clicked').on('click', function(){
  value = $(this).html();
  $('#choose-scholarship').html(value);
  parametersChosen.type = value;
  console.log(parametersChosen.type);
});

$('.search-container').on('click', 'button', function(){
  hideAll();
  checkToHighlight();
  parametersChosen = {
    type : '',
    grade : ''
  };
})

$('.reset-container').on('click', 'button', function(){
  hideAll();
  parametersChosen = {
    type : '',
    grade : ''
  };
  $('#choose-scholarship').html('Type');
  $('#choose-grade').html('Grade');
});
