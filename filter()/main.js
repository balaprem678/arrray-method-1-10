var vals=[150 , 200 , 345 , 375 , 125];
function check_num ( value )
{
  return value>150;
} 
  document.writeln ( vals.filter ( check_num ));