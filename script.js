
let question = [
    {
        quesType: "1 multiple choice question 1", Question: "who is frredom fighter of thois sera",
        options: ["A.10years", "B.7years", "C.5years", "D.3years"]
    },
    {
        quesType: "2 multiple choice question 1", Question: "who is frredom fighter of thois sera",
        options: ["A.10years", "B.7years", "C.5years", "D.3years","E.1year"]
    },
    {
        quesType: "3 multiple choice question 1", Question: "who is frredom fighter of thois sera",
        options: ["A.10years", "B.7years", "C.5years", "D.3years"]
    }
]
let index = -1
function questionDisplay(question, i) {

    console.log("fn called" ,i)
    let questionNum = question[i]
    let optionHtml = ''
    questionNum.options.forEach(((opt, index) => {
        optionHtml += `
            <div class="select">
                <input  class="option" type="radio" name="option" id=${index}>
                <label  class="option-label" for=${index}>${opt}</label>
            </div>
            `
    }))

    let html = `<h3 class="question">${questionNum.quesType}</h3>
    <p class="quetion">${questionNum.Question}</p>
    <div class="warning">
    <div class="warning-text">
        <span class="material-symbols-outlined">
            error
        </span>
        <span class="select-text">select the correct &nbsp;</span>
        <span> then, select <b>Confirm</b></span>
        </div>
        <form action="#">
            <div class="option-tick" id="option">
                
            </div>
           
            <button class="disablebtn btn" id="conferm" type="submit">Conferm</button>
        </form>
`
    $("#questionBox").html(html)
    $("#option").html(optionHtml)
}
// questionDisplay(question, 1)
let fullScreenIcon =`<span purpose="fullscreen" class="material-symbols-outlined effect curptr">
fullscreen
</span>`
let exitFullscreenIcon = `<span purpose="fullscreen" class="material-symbols-outlined effect curptr exitfullscreen">
fullscreen_exit
</span>`
$(document).ready(function(){
$("#pagemain").on("click", function(ev){
    if(index >= 0){
        $("#back").addClass("hover")
    }else { $("#back").removeClass("hover")}
    if(index > 2){
        $("#next").removeClass("hover")
    }else { $("#next").addClass("hover")}
    let element = $(ev.target)
    let purpose = element.attr("purpose")
    if(purpose != "home"){
        $("#dropdown").fadeOut(300)}
    if(purpose =="fullscreen"){
        let sectionBody = $("#sectionbody")
        let fullScreen = $("#fullscrmode")
        sectionBody.toggleClass("fullscreen");
        if(sectionBody.hasClass("fullscreen")){
            fullScreen.html(exitFullscreenIcon)
        }else {fullScreen.html(fullScreenIcon)}
        if(index <= 2){
            $("#next").removeClass("hover")
        }else { $("#next").addClass("hover")}
    }
    if(purpose == "home"){
        $("#dropdown").fadeToggle(300)
    }
    if(purpose == "back" && index > 0){
        console.log(index)
        --index;
        console.log(index)
        questionDisplay(question,index)
        if(index > 0){
            $("#back").addClass("hover")
        }else { $("#back").removeClass("hover")}
      
       
    }
    if(purpose == "next" && index <= 1){
        console.log(index)
        ++ index ;
        questionDisplay(question,index)

        
        console.log(index)
        if(index >= 2){
            $("#next").removeClass("hover")
        }else { $("#next").addClass("hover")}
    }
    
    if(1){
        let inputData =document.querySelectorAll(".option")
        
        inputData.forEach((item)=>{
        if(item.checked){
            $("#conferm").removeClass("disablebtn")
        }
        
    })
    }
    
})
})
