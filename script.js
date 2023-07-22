let hrEle = document.getElementById("hr");
let minEle = document.getElementById("min");
let secEle = document.getElementById("sec");

let setBtnEle = document.getElementById("set-button");

let allTimersContEle = document.getElementById("all-timers-cont");

let noTimersDisplayTextEle = document.getElementById("no-timers-display-text");
const clearTimersEle = document.getElementById("clear-timers");

let audioEle = document.getElementById("audio");

let timersArr = [];


hrEle.addEventListener("keyup", function(event){


    //adding zero if single digit in min and secs and making not enterd to zero

    if(hrEle.innerText.length >= 0){
        let minEnterd = minEle.innerHTML;
        let secEnterd = secEle.innerHTML;

        let minLen = minEle.innerHTML.length;
        let secLen = secEle.innerHTML.length;

         
        if(minEnterd !== 'mm' && minEnterd < 10 && minLen === 1){
            minEnterd = "0" + minEnterd;
            minEle.innerHTML = minEnterd;
        }else if(minLen === 0){
            minEle.innerHTML = 'mm';
        }

        if(secEnterd !== 'ss' && secEnterd < 10 && secLen === 1){
            secEnterd = "0" + secEnterd;
            secEle.innerHTML = secEnterd;
        }else if(secLen === 0){
            secEle.innerHTML = 'ss';
        }


    }


    /* If length is greater than 2 */

    if(event.target.innerText.length > 2){       
        alert('Enter valid hours');
        hrEle.innerHTML = "";

    }else{
        let curKey = event.key;
        console.log(curKey);

         /* If entered key is not number*/
        if((curKey >= 0 && curKey <= 9) || curKey === "Backspace"){
            console.log("yes")
        }else{
            alert("Enter valid hours");
            hrEle.innerText = "";
        } 
        

        // limiting hrs
        if(hrEle.innerText.length === 2){
            let curNum = hrEle.innerHTML;

            if(curNum > 99){
                alert("Enter hours within 100");
            }
            console.log(curNum, '---> CurNum');
        }
    }
})

minEle.addEventListener("keyup", function(event){

    //adding zero if single digit in hrs and secs and making not enterd to zero

    if(minEle.innerText.length >= 0){
        let hrsEnterd = hrEle.innerHTML;
        let secEnterd = secEle.innerHTML;

        let hrsLen = hrEle.innerHTML.length;
        let secLen = secEle.innerHTML.length;

         
        if(hrsEnterd !== 'hh' && hrsEnterd < 10 && hrsLen === 1){
            hrsEnterd = "0" + hrsEnterd;
            hrEle.innerHTML = hrsEnterd;
        }else if(hrsEnterd === 'hh'){
            hrEle.innerHTML = '00';
        }else if(hrsLen === 0){
            hrEle.innerHTML = 'hh';
        }

        if(secEnterd !== 'ss' && secEnterd < 10 && secLen === 1){
            secEnterd = "0" + secEnterd;
            secEle.innerHTML = secEnterd;
        }else if(secLen === 0){
            secEle.innerHTML = 'ss';
        }

        


    }


    /* If length is greater than 2 */

     if(event.target.innerText.length > 2){       
         alert('Enter valid minutes');
         minEle.innerHTML = "";
     }else{
         let curKey = event.key;
         console.log(curKey);

         /* If entered key is not number*/

         if((curKey >= 0 && curKey <= 9) || curKey === "Backspace"){
             console.log("yes")
         }else{
             alert("Enter valid minutes");
             minEle.innerText = "";
         }      


         // limiting mins
        if(minEle.innerText.length === 2){
            let curNum = minEle.innerHTML;

            if(curNum > 60){
                alert("Enter minutes within 60");
            }
            console.log(curNum, '---> CurNum');
        }
     }
 })

 secEle.addEventListener("keyup", function(event){

    
    //adding zero if single digit in hrs and mins and making not enterd to zero

    if(secEle.innerText.length >= 0){
        let hrsEnterd = hrEle.innerHTML;
        let minEntered = minEle.innerHTML;

        let hrsLen = hrEle.innerHTML.length;
        let minLen = minEle.innerHTML.length;

         
        if(hrsEnterd !== 'hh' && hrsEnterd < 10 && hrsLen === 1){
            hrsEnterd = "0" + hrsEnterd;
            hrEle.innerHTML = hrsEnterd;
        }else if(hrsEnterd === 'hh'){
            hrEle.innerHTML = '00';
        }else if(hrsLen === 0){
            hrEle.innerHTML === 'hh';
        }

        if(minEntered !== 'mm' && minEntered < 10 && minLen === 1){
            minEntered = "0" + minEntered;
            minEle.innerHTML = minEntered;
        }else if(minEntered === 'mm'){
            minEle.innerHTML = '00';
        }else if(minLen === 0){
            minEle.innerHTML = 'mm';
        }
    }
    
    
    /* If length is greater than 2 */
 
     if(event.target.innerText.length > 2){       
         alert('Enter valid seconds');
         secEle.innerHTML = "";
     }else{
         let curKey = event.key;
         console.log(curKey);

         /* If entered key is not number*/

         if((curKey >= 0 && curKey <= 9) || curKey === "Backspace"){
             console.log("yes")
         }else{
             alert("Enter valid seconds");
             secEle.innerText = "";
         }     
         
         // limiting secs
        if(secEle.innerText.length === 2){
            let curNum = secEle.innerHTML;

            if(curNum > 60){
                alert("Enter seconds within 60");
            }
            console.log(curNum, '---> CurNum');
        }
     }
 })



 function deleteParticulardiv(id){

    if(id === null){
        let flag = false;
        for(let i = 0; i < timersArr.length; i++){
            if(timersArr[i] !== 0){
                flag = true;
            }
        }

        if(flag === false){
            noTimersDisplayTextEle.classList.remove("no-display");
            noTimersDisplayTextEle.classList.add("no-timers-display-text");

            timersArr = [];
            clearTimersEle.style.display = "none";
        }
    }else{


        let deletableEle = document.getElementById(`${id}`);
        console.log(deletableEle);
        deletableEle.classList.remove("set-timer-cont-each");
        allTimersContEle.removeChild(deletableEle);

        timersArr[id] = 0;

        console.log(timersArr);

        let flag = false;
        for(let i = 0; i < timersArr.length; i++){
            if(timersArr[i] !== 0){
                flag = true;
            }
        }

        if(flag === false){
            noTimersDisplayTextEle.classList.remove("no-display");
            noTimersDisplayTextEle.classList.add("no-timers-display-text");

            timersArr = [];
            clearTimersEle.style.display = "none";
        }
    }
 }


 function startCountdown(newTime, id){

    let hrs = Math.floor(newTime / 3600);
    if(hrs< 10){
        hrs = '0' + hrs;
    }

    let mins = Math.floor((newTime % 3600) / 60);
    if(mins < 10){
        mins = '0' + mins;
    }

    let secs = Math.floor(newTime % 60);
    if(secs < 10){
        secs = '0' + secs;
    }


    let particularDiv = document.getElementById(`${id}`);
    
    // when div is deleted

    if(particularDiv !== null){

    

        let timeEle = particularDiv.querySelector('[name = "changable"]');

        // time is complete 

        if(hrs === '00' && mins === '00' && secs === '00'){
            particularDiv.innerHTML = `
            <span class = "time-up-text">Time is Up !</span>
            <button type = "button" class = "time-up-delete" onclick = 'deleteParticulardiv(${id})'>Delete</button>`

            particularDiv.classList.remove("set-timer-cont-each");
            particularDiv.classList.add("time-up-div");

            audioEle.play();
            

        }else{
            timeEle.innerHTML = `${hrs} : ${mins} : ${secs}`;
        }

    }

    

    
 }


 function addTimer(totalSecs, id){

    if(timersArr.length !== 0){
        noTimersDisplayTextEle.classList.remove("no-timers-display-text");
        noTimersDisplayTextEle.classList.add("no-display");
    }

    let hrs = Math.floor(totalSecs / 3600);
    if(hrs< 10){
        hrs = '0' + hrs;
    }

    let mins = Math.floor((totalSecs % 3600) / 60);
    if(mins < 10){
        mins = '0' + mins;
    }

    let secs = Math.floor(totalSecs % 60);
    if(secs < 10){
        secs = '0' + secs;
    }

    
    let eachCont = document.createElement("div");
    eachCont.classList.add("set-timer-cont-each");

    let spanEle = document.createElement("span");
    spanEle.classList.add("cont-heading");
    spanEle.innerText = "Time Left : ";

    let timeEle = document.createElement("span");
    timeEle.setAttribute("name", "changable");
    timeEle.classList.add("change-time");
    timeEle.innerText = `${hrs} : ${mins} : ${secs}`;

    let deleteBtnEle = document.createElement("button");
    deleteBtnEle.innerText = "Delete";
    deleteBtnEle.classList.add("delete-btn");
    deleteBtnEle.setAttribute("onclick", `deleteParticulardiv(${id})`);

    eachCont.appendChild(spanEle);
    eachCont.appendChild(timeEle);
    eachCont.appendChild(deleteBtnEle);

    eachCont.setAttribute("id", `${id}`);

    allTimersContEle.appendChild(eachCont);


    clearTimersEle.style.display = "block";


 }


 function updateTimer(total,id){

    let newTime = total;


    addTimer(total, id);

    const returnedId = setInterval(() => {

        newTime = newTime - 1;

        if(newTime >= 0){
            startCountdown(newTime,id);
        }else if(newTime === 0){
            clearInterval(returnedId);
        }
    }, 1000)
 }




 setBtnEle.addEventListener("click", function(){


    let hrs = hrEle.innerHTML;
    let mins = minEle.innerHTML;
    let sec = secEle.innerHTML;

    //console.log(hrs,mins,sec);


    if((hrs === "hh" && mins === "mm" && sec === "ss") || (hrs === '00' && mins === "00" && sec === "00")){
        alert("Enter Valid Time");
    }else{

        let totalSecs = 0;

        if(hrs !== 'hh'){
            hrs = Number(hrs);
            let hrSecs = hrs * 3600;

            totalSecs = totalSecs + hrSecs;
        }

        if(mins !== 'mm'){
            mins = Number(mins);
            let minSecs = mins * 60;
 
            totalSecs = totalSecs + minSecs; 
        }

        if(sec !== 'ss'){
            sec = Number(sec);
            totalSecs = totalSecs + sec;
        }

        //console.log(totalSecs);

        timersArr.push(totalSecs);

        //getting id

        let id = timersArr.length-1;

        hrEle.innerHTML = 'hh';
        minEle.innerHTML = "mm";
        secEle.innerHTML = "ss";

        //adding timer to timer container

        updateTimer(totalSecs,id);
    }


 })




 clearTimersEle.addEventListener("click", function(){
    for(let i = 0 ; i < timersArr.length; i++){
        let curEle = document.getElementById(`${i}`);
        if(curEle !== null){
            console.log("cur Ele : ", curEle)
            allTimersContEle.removeChild(curEle);
            timersArr[i] = 0;
        }
        
    }

    deleteParticulardiv(null);


    
 })

