/*1.Question */
var Minimal_Angle = (h, m) => 
   
{
       var hour = (h * 360) / 12 + (m * 360) / (12 * 60);
       var min = (m * 360) / (60);
       
       var angle=Math.abs(hour-min);
       
       if (angle > 180) 
       {
            angle = 360 - angle;
       }
       
       return angle;
};

/*2.Question */

var Check_Leap = (year) => 
{
  
 if(year%400==0){
   return "Leap Year "
 }
 else if (year%100==0){
   return "Non Leap Year"

 }
 else if(year%4==0 ){
   return "Leap Year "
 }
 else{
   return "Non Leap Year"
 }
  

};

/*3.Question */
var Perfect_Check = (N) => 
{
      let sum=0;
      for(let i=1;i<=N/2; i++){
        if(N%i===0){
          sum=sum+i;
        }
      }
      if(N==1 || sum==N){
        return "YES"
      }
      else{
        return "NO"
      }
};

/*4.Question */
var Reverse_Number = (N) => 
{
  return(parseFloat(N
                      .toString()
                      .split('')
                      .reverse()
                      .join('')
                      )*Math.sign(N))
};
 
/*5.Question */
var Substring_Check = (S1, S2) => 
{
  let substr=S1.includes(S2);
  if(substr===true){
    return "YES"
  }
  else{
    return "NO"
  }
};
 

 
