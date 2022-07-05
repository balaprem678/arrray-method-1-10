var vals=[150, 400, 450, 375, 200];
function check_num ( value )
{
  return value>100;
}
  document.writeln ( vals.every ( check_num ));