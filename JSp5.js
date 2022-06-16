const theEvent = {
    activity: "",
    dayOfTheWeek: []
}

function inputName(){
    const name = document.getElementById("name").value
    const inTheTable = document.getElementById("here")
    const nameButton = document.getElementById("nameBtn")
    inTheTable.innerHTML = `${name}'s Schedule`
    nameButton.disabled = true
    }

function inputMorning(){
    const MorningEvent = document.getElementById("morningAction").value
    const addMorning = document.getElementById("addMorning")
    const sunMorning = document.getElementById("SunMorning")
    const monMorning = document.getElementById("MonMorning")
    const tuesMorning = document.getElementById("TuesMorning")
    const wedMorning = document.getElementById("WedMorning")
    const thursMorning = document.getElementById("ThursMorning")
    const friMorning = document.getElementById("FriMorning")
    const satMorning = document.getElementById("SatMorning")

    if (sunMorning.checked && !sunMorning.disabled){
        theEvent.dayOfTheWeek.push("Sunday");
        const inTheTable = document.getElementById("1.1")
        inTheTable.innerHTML = MorningEvent
        sunMorning.disabled = true
    }
    if (monMorning.checked && !monMorning.disabled){
        theEvent.dayOfTheWeek.push("Monday");
        const inTheTable = document.getElementById("1.2")
        inTheTable.innerHTML = MorningEvent
        monMorning.disabled = true
    }
    if (tuesMorning.checked && !tuesMorning.disabled){
        theEvent.dayOfTheWeek.push("Tuesday");
        const inTheTable = document.getElementById("1.3")
        inTheTable.innerHTML = MorningEvent
        tuesMorning.disabled = true
    }
    if (wedMorning.checked && !wedMorning.disabled){
        theEvent.dayOfTheWeek.push("Wednesday");
        const inTheTable = document.getElementById("1.4")
        inTheTable.innerHTML = MorningEvent
        wedMorning.disabled = true
    }
    if (thursMorning.checked && !thursMorning.disabled){
        theEvent.dayOfTheWeek.push("Thursday");
        const inTheTable = document.getElementById("1.5")
        inTheTable.innerHTML = MorningEvent
        thursMorning.disabled = true
    }
    if (friMorning.checked && !friMorning.disabled){
        theEvent.dayOfTheWeek.push("Friday");
        const inTheTable = document.getElementById("1.6")
        inTheTable.innerHTML = MorningEvent
        friMorning.disabled = true
    }
    if (satMorning.checked && !satMorning.disabled){
        theEvent.dayOfTheWeek.push("Shabbos;)");
        const inTheTable = document.getElementById("1.7")
        inTheTable.innerHTML = MorningEvent
        satMorning.disabled =true
    }
    //this disables Submit button if all days have been checked
    if(satMorning.checked && friMorning.checked && thursMorning.checked && wedMorning.checked && 
        tuesMorning.checked && monMorning.checked && sunMorning.checked){
            addMorning.disabled = true
        }
    //make sure user chooses a day before adding, otherwise alerts
    if((!satMorning.checked && !satMorning.disabled) &&
        (!friMorning.checked && !friMorning.disabled) &&
        (!thursMorning.checked && !thursMorning.disabled) &&
        (!wedMorning.checked && !wedMorning.disabled) && 
        (!tuesMorning.checked && !tuesMorning.disabled) && 
        (!monMorning.checked && !monMorning.disabled) && 
        (!sunMorning.checked && !sunMorning.disabled))
        {
           alert("Please check the day(s) of the week for this event");
        }
    else 
        {  
           theEvent.activity = MorningEvent;
           document.getElementById("morningAction").value = "";
           collectInfo("morning");  
        }
}

function inputAfternoon(){
    const AfternoonEvent = document.getElementById("afternoonAction").value
    const sunAfternoon = document.getElementById("SunAfternoon")
    const monAfternoon = document.getElementById("MonAfternoon")
    const tuesAfternoon = document.getElementById("TuesAfternoon")
    const wedAfternoon = document.getElementById("WedAfternoon")
    const thursAfternoon = document.getElementById("ThursAfternoon")
    const friAfternoon = document.getElementById("FriAfternoon")
    const satAfternoon = document.getElementById("SatAfternoon")
    const addAfternoon = document.getElementById("addAfternoon")
    
    if (sunAfternoon.checked && !sunAfternoon.disabled){
        theEvent.dayOfTheWeek.push("Sunday");
        const inTheTable = document.getElementById("2.1")
        inTheTable.innerHTML = AfternoonEvent
        sunAfternoon.disabled = true
    }
    if (monAfternoon.checked && !monAfternoon.disabled){
        theEvent.dayOfTheWeek.push("Monday");
        const inTheTable = document.getElementById("2.2")
        inTheTable.innerHTML = AfternoonEvent
        monAfternoon.disabled = true
    }
    if (tuesAfternoon.checked && !tuesAfternoon.disabled){
        theEvent.dayOfTheWeek.push("Tuesday");
        const inTheTable = document.getElementById("2.3")
        inTheTable.innerHTML = AfternoonEvent
        tuesAfternoon.disabled = true
    }
    if (wedAfternoon.checked && !wedAfternoon.disabled){
        theEvent.dayOfTheWeek.push("Wednesday");
        const inTheTable = document.getElementById("2.4")
        inTheTable.innerHTML = AfternoonEvent
        wedAfternoon.disabled = true
    }
    if (thursAfternoon.checked && !thursAfternoon.disabled){
        theEvent.dayOfTheWeek.push("Thursday");
        const inTheTable = document.getElementById("2.5")
        inTheTable.innerHTML = AfternoonEvent
        thursAfternoon.disabled = true
    }
    if (friAfternoon.checked && !friAfternoon.disabled){
        theEvent.dayOfTheWeek.push("Friday");
        const inTheTable = document.getElementById("2.6")
        inTheTable.innerHTML = AfternoonEvent
        friAfternoon.disabled = true
    }
    if (satAfternoon.checked && !satAfternoon.disabled){
        theEvent.dayOfTheWeek.push("Shabbos;)");
        const inTheTable = document.getElementById("2.7")
        inTheTable.innerHTML = AfternoonEvent
        satAfternoon.disabled = true
    }
    if(satAfternoon.checked && friAfternoon.checked && thursAfternoon.checked && wedAfternoon.checked && 
        tuesAfternoon.checked && monAfternoon.checked && sunAfternoon.checked){
            addAfternoon.disabled = true
        }
    //make sure user chooses a day before adding, otherwise its an alert
    if((!satAfternoon.checked && !satAfternoon.disabled) &&
        (!friAfternoon.checked && !friAfternoon.disabled) &&
        (!wedAfternoon.checked && !thursAfternoon.disabled) &&
        (!wedAfternoon.checked && !wedAfternoon.disabled) && 
        (!tuesAfternoon.checked && !tuesAfternoon.disabled) && 
        (!monAfternoon.checked && !monAfternoon.disabled) && 
        (!sunAfternoon.checked && !sunAfternoon.disabled))
        {
           alert("Please check the day(s) of the week for this event");
        }
    else 
        {  
           theEvent.activity = AfternoonEvent;
           document.getElementById("afternoonAction").value = "";
           collectInfo("afternoon");  
        }
}

function inputEvening(){
    const EveningEvent = document.getElementById("eveningAction").value
    const sunEvening = document.getElementById("SunEvening")
    const monEvening = document.getElementById("MonEvening")
    const tuesEvening = document.getElementById("TuesEvening")
    const wedEvening = document.getElementById("WedEvening")
    const thursEvening = document.getElementById("ThursEvening")
    const friEvening = document.getElementById("FriEvening")
    const satEvening = document.getElementById("SatEvening")
    const addEvening = document.getElementById("addEvening")

    if (sunEvening.checked && !sunEvening.disabled){
        theEvent.dayOfTheWeek.push("Sunday");
        const inTheTable = document.getElementById("3.1")
        inTheTable.innerHTML = EveningEvent
        sunEvening.disabled = true
    }
    if (monEvening.checked && !monEvening.disabled){
        theEvent.dayOfTheWeek.push("Monday");
        const inTheTable = document.getElementById("3.2")
        inTheTable.innerHTML = EveningEvent
        monEvening.disabled = true
    }
    if (tuesEvening.checked && !tuesEvening.disabled){
        theEvent.dayOfTheWeek.push("Tuesday");
        const inTheTable = document.getElementById("3.3")
        inTheTable.innerHTML = EveningEvent
        tuesEvening.disabled = true
    }
    if (wedEvening.checked && !wedEvening.disabled){
        theEvent.dayOfTheWeek.push("Wednesday");
        const inTheTable = document.getElementById("3.4")
        inTheTable.innerHTML = EveningEvent
        wedEvening.disabled = true
    }
    if (thursEvening.checked && !thursEvening.disabled){
        theEvent.dayOfTheWeek.push("Thursday");
        const inTheTable = document.getElementById("3.5")
        inTheTable.innerHTML = EveningEvent
        thursEvening.disabled = true
    }
    if (friEvening.checked && !friEvening.disabled){
        theEvent.dayOfTheWeek.push("Friday");
        const inTheTable = document.getElementById("3.6")
        inTheTable.innerHTML = EveningEvent
        friEvening.disabled = true
    }
    if (satEvening.checked && !satEvening.disabled){
        theEvent.dayOfTheWeek.push("Shabbos!");
        const inTheTable = document.getElementById("3.7")
        inTheTable.innerHTML = EveningEvent
        satEvening.disabled = true
    }
    if(satEvening.checked && friEvening.checked && thursEvening.checked && wedEvening.checked && 
        tuesEvening.checked && monEvening.checked && sunEvening.checked){
            addEvening.disabled = true
        }
    //make sure user chooses a day before adding, otherwise its an alert
    if((!satEvening.checked && !satEvening.disabled) &&
        (!friEvening.checked && !friEvening.disabled) &&
        (!thursEvening.checked && !thursEvening.disabled) &&
        (!wedEvening.checked && !wedEvening.disabled) && 
        (!tuesEvening.checked && !tuesEvening.disabled) && 
        (!monEvening.checked && !monEvening.disabled) && 
        (!sunEvening.checked && !sunEvening.disabled))
        {
           alert("Please check the day(s) of the week for this event");
        }
    else 
        {  
           theEvent.activity = EveningEvent;
           document.getElementById("eveningAction").value = "";
           collectInfo("evening");  
        }
}

function inputNight(){
    const NightEvent = document.getElementById("nightAction").value
    const sunNight = document.getElementById("SunNight")
    const monNight = document.getElementById("MonNight")
    const tuesNight = document.getElementById("TuesNight")
    const wedNight = document.getElementById("WedNight")
    const thursNight = document.getElementById("ThursNight")
    const friNight = document.getElementById("FriNight")
    const satNight = document.getElementById("SatNight")
    const addNight = document.getElementById("addNight")

    theEvent.activity = NightEvent
    theEvent.count++
    if (sunNight.checked && !sunNight.disabled){
        theEvent.dayOfTheWeek.push("Sunday");
        const inTheTable = document.getElementById("4.1")
        inTheTable.innerHTML = NightEvent
        sunNight.disabled = true
    }
    if (monNight.checked && !monNight.disabled){
        theEvent.dayOfTheWeek.push("Monday");
        const inTheTable = document.getElementById("4.2")
        inTheTable.innerHTML = NightEvent
        monNight.disabled = true
    }
    if (tuesNight.checked && !tuesNight.disabled){
        theEvent.dayOfTheWeek.push("Tuesday");
        const inTheTable = document.getElementById("4.3")
        inTheTable.innerHTML = NightEvent
        tuesNight.disabled = true
    }
    if (wedNight.checked && !wedNight.disabled){
        theEvent.dayOfTheWeek.push("Wednesday");
        const inTheTable = document.getElementById("4.4")
        inTheTable.innerHTML = NightEvent
        wedNight.disabled = true
    }
    if (thursNight.checked && !thursNight.disabled){
        theEvent.dayOfTheWeek.push("Thursday");
        const inTheTable = document.getElementById("4.5")
        inTheTable.innerHTML = NightEvent
        thursNight.disabled = true
    }
    if (friNight.checked && !friNight.disabled){
        theEvent.dayOfTheWeek.push("Friday");
        const inTheTable = document.getElementById("4.6")
        inTheTable.innerHTML = NightEvent
        friNight.disabled = true
    }
    if (satNight.checked && !satNight.disabled){
        theEvent.dayOfTheWeek.push("Shabbos!");
        const inTheTable = document.getElementById("4.7")
        inTheTable.innerHTML = NightEvent
        satNight.disabled = true
    }
    if(satNight.checked && friNight.checked && thursNight.checked && wedNight.checked && 
        tuesNight.checked && monNight.checked && sunNight.checked){
            addNight.disabled = true
        }
    //make sure user chooses a day before adding, otherwise alert
    if((!satNight.checked && !satNight.disabled) &&
        (!friNight.checked && !friNight.disabled) &&
        (!thursNight.checked && !thursNight.disabled) &&
        (!wedNight.checked && !wedNight.disabled) && 
        (!tuesNight.checked && !tuesNight.disabled) && 
        (!monNight.checked && !monNight.disabled) && 
        (!sunNight.checked && !sunNight.disabled))
        {
           alert("Please check the day(s) of the week for this event");
        }
    else 
        {  
           theEvent.activity = NightEvent;
           document.getElementById("nightAction").value = "";
           collectInfo("night");  
        }
}
   
class inputInfo {
    constructor(timeOfDay){
        this.event=[];
        this.eventWithWeek=[];
        this.timeOfDay = timeOfDay;
    }
    getEvents(){
        return this.event;
    }
    setEvent(anEvent){
        this.event.push(anEvent);
    }
    getEventsWithWeek(){
        return this.eventWithWeek;
    }
    setEventWithWeek(comboDay){
        this.eventWithWeek.push(comboDay);
    }
    getTimeOfDay(){
        return this.timeOfDay;
    }
}
let morningClass = new inputInfo("morning");
let afternoonClass = new inputInfo("afternoon");
let eveningClass = new inputInfo("evening");
let nightClass = new inputInfo("night");

function collectInfo(timeOfDay){
   if(timeOfDay == "morning"){
    let arr = theEvent.dayOfTheWeek;
    arr = arr.map(i => " " + theEvent.activity + " on " + i + " morning") 
    morningClass.setEvent(theEvent.activity)
    morningClass.setEventWithWeek(arr);
    theEvent.activity = "";
    theEvent.dayOfTheWeek = [];
      
   }
   else if (timeOfDay == "afternoon"){
    let arr = theEvent.dayOfTheWeek;
    arr = arr.map(i => " " + theEvent.activity + " on " + i + " afternoon")
    afternoonClass.setEvent(theEvent.activity)
    afternoonClass.setEventWithWeek(arr);
    theEvent.activity = "";
    theEvent.dayOfTheWeek = [];
    
   }
   else if (timeOfDay == "evening"){
    let arr = theEvent.dayOfTheWeek;
    arr = arr.map(i => " " + theEvent.activity + " on " + i + " evening")
    eveningClass.setEvent(theEvent.activity)
    eveningClass.setEventWithWeek(arr);
    theEvent.activity = "";
    theEvent.dayOfTheWeek = [];
   
   }
   else if (timeOfDay == "night"){
    let arr = theEvent.dayOfTheWeek;
    arr = arr.map(i => " " + theEvent.activity + " on " + i + " night")
    nightClass.setEvent(theEvent.activity)
    nightClass.setEventWithWeek(arr);
    theEvent.activity = "";
    theEvent.dayOfTheWeek = [];
    
   }
   else
   alert("Check for errors!")
}

function getMorningResults(){
    const resultAtEnd = document.getElementById("mResults")
    if(morningClass.getEvents != ""){
         resultAtEnd.innerHTML = morningClass.getEventsWithWeek()
    }
}
function getAfternoonResults(){
    const resultAtEnd = document.getElementById("aResults")
    if(afternoonClass.getEvents != ""){
            resultAtEnd.innerHTML = afternoonClass.getEventsWithWeek()
    }
}
function getEveningResults(){
    const resultAtEnd = document.getElementById("eResults")
    if(eveningClass.getEvents != ""){
            resultAtEnd.innerHTML = eveningClass.getEventsWithWeek()
    }
}
function getNightResults(){
    const resultAtEnd = document.getElementById("nResults")
    if(nightClass.getEvents != ""){
            resultAtEnd.innerHTML = nightClass.getEventsWithWeek()
    }
}
   // if(afternoonClass.getEvents != ""){
   //     resultAtEnd.innerHTML = afternoonClass.getEventsWithWeek()
   // }
   // if(eveningClass.getEvents != ""){
   //     resultAtEnd.innerHTML = eveningClass.getEventsWithWeek()
   // }
   // else if(nightClass.getEvents != ""){
   //     resultAtEnd.innerHTML = nightClass.getEventsWithWeek()
  // }


    

