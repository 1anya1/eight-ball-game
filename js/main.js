var userQuestion = '';
var eightBall = Math.floor(Math.random()*8);
function yourFuture(eightBall){
switch(eightBall){
    case 0:
        return 'hell yeah';
        break;
    case 1:
        return 'yes';
        break;
    case 2:
        return 'absolutley';
        break;
    case 3:
        return 'try again';
        break;
    case 4:
        return "it's in your fututre";
        break;
    case 5:
        return 'the answer is pointinf to a HELL YEAH'
        break;
    case 6:
        return 'you got this!';
        break;
    case 7:
        return 'good things come to those who try';
        break;
    default:
        return 'Whoops somehting went wrong!';

}
}