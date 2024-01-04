// let a = 5
// let b = 10
// let sum = String(a) + String(b)
// let intsum = parseInt(sum)
// console.log(intsum)
let num = [];


function getnumber(numid) 
{
   
     if(num.length===0)
     {
          num[0] = numid;
          console.log(num[0])
     }
     
     else
     {
          num.push(numid);
          for(let i = 0; i < num.length; i++)
               console.log(num[i]);
          console.log(num.join(' '));
     }


   
}
