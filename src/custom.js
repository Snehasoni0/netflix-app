
    let AllQuestions = document.querySelectorAll(".FaqQue");
    AllQuestions.forEach((e,i)=>{
        e.addEventListener("Click",()=>{
            e.nextElementSibling.classList.add("h-[auto]")
            e.nextElementSibling.classList.add("scale-y-100")
            e.nextElementSibling.classList.add("p-[20px]")
        })
})
