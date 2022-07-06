var SG= Math.floor(Math.random()*100)+1
function GuessNumber()
{
    var num=document.getElementById('in').value 
    if(num===''||num>100||num<1)
    {
        console.log("Invalid input!Try again")
        document.getElementById('out').innerHTML="Invalid input!Try again"
    }
    else
    
    {
        var num=parseInt(document.getElementById('in').value)
        if (num===SG)
        {
            console.log("You got the ans!");
            document.getElementById('out').innerHTML="You got the ans! 😁" 
        } 
        else if(num>SG)
        {
            console.log("Oops!Try out a smaller number");
            document.getElementById('out').innerHTML="Oops!😕 Try out a smaller number"
        }
        else
        {
            console.log("Oops!Try out a bigger number");
            document.getElementById('out').innerHTML="Oops!😕 Try out a bigger number"
        }

    }
}