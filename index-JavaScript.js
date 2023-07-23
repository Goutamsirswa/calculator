function getValue(x)
{
    document.getElementById('input_Box').value+=x;
}
function cal_Value()
{
var result=eval(document.getElementById('input_Box').value);
document.getElementById('input_Box').value=result;
}
function clrscr_Value(y)
{
    document.getElementById('input_Box').value=y;
}