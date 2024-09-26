const i1d = document.getElementById("i1d");
const i1u = document.getElementById("i1u");
const q1 = document.getElementById("question_one");
const ans1 = document.getElementById("ans1");
//second
const i2d = document.getElementById("i2d");
const i2u = document.getElementById("i2u");
const q2 = document.getElementById("question_two");
const ans2 = document.getElementById("ans2");
//third
const i3d = document.getElementById("i3d");
const i3u = document.getElementById("i3u");
const q3 = document.getElementById("question_three");
const ans3 = document.getElementById("ans3");
//Fourth
const i4d = document.getElementById("i4d");
const i4u = document.getElementById("i4u");
const q4 = document.getElementById("question_four");
const ans4 = document.getElementById("ans4");
//First quesion
i1d.addEventListener('click',function(event)
    {
        event.preventDefault();
        i1d.classList.add("hidden");
        i1u.classList.remove("hidden");
        q1.style.height = "150px";
        q1.classList.remove("items-center");
        q1.classList.add("pt-10");
        ans1.classList.remove("hidden");
        const btn1 = document.getElementById("btn1");
        btn1.classList.remove("hidden");
        btn1.addEventListener('click',function(event)
        {
            event.preventDefault();
            ans1.classList.add("hidden");
            btn1.classList.add("hidden");
            let answer1 = ans1.value;
            let p1 = document.getElementById("p1");
            p1.innerText = `Answer: ${answer1}`;
            p1.classList.remove("hidden");
        })
    })
i1u.addEventListener('click',function(event)
    {
        event.preventDefault();
        i1u.classList.add("hidden");
        i1d.classList.remove("hidden");
        q1.style.height = "110px";
        q1.classList.add("items-center");
        q1.classList.remove("pt-10");
        ans1.classList.add("hidden");
        const btn1 = document.getElementById("btn1");
        btn1.classList.add("hidden");
        let p1 = document.getElementById("p1");
        p1.innerText = "";
        ans1.value="";
    })
//Second Question
i2d.addEventListener('click',function(event)
    {
        event.preventDefault();
        i2d.classList.add("hidden");
        i2u.classList.remove("hidden");
        q2.style.height = "150px";
        q2.classList.remove("items-center");
        q2.classList.add("pt-10");
        ans2.classList.remove("hidden");
        const btn2 = document.getElementById("btn2");
        btn2.classList.remove("hidden");
        btn2.addEventListener('click',function(event)
        {
            event.preventDefault();
            ans2.classList.add("hidden");
            btn2.classList.add("hidden");
            let answer2 = ans2.value;
            let p2 = document.getElementById("p2");
            p2.innerText = `Answer: ${answer2}`;
            p2.classList.remove("hidden");
        })
    })
i2u.addEventListener('click',function(event)
    {
        event.preventDefault();
        i2u.classList.add("hidden");
        i2d.classList.remove("hidden");
        q2.style.height = "110px";
        q2.classList.add("items-center");
        q2.classList.remove("pt-10");
        ans2.classList.add("hidden");
        const btn2 = document.getElementById("btn2");
        btn2.classList.add("hidden");
        let p2 = document.getElementById("p2");
        p2.innerText = "";
        ans2.value="";
    })
//Third Question
i3d.addEventListener('click',function(event)
    {
        event.preventDefault();
        i3d.classList.add("hidden");
        i3u.classList.remove("hidden");
        q3.style.height = "150px";
        q3.classList.remove("items-center");
        q3.classList.add("pt-10");
        ans3.classList.remove("hidden");
        const btn3 = document.getElementById("btn3");
        btn3.classList.remove("hidden");
        btn3.addEventListener('click',function(event)
        {
            event.preventDefault();
            ans3.classList.add("hidden");
            btn3.classList.add("hidden");
            let answer3 = ans3.value;
            let p3 = document.getElementById("p3");
            p3.innerText = `Answer: ${answer3}`;
            p3.classList.remove("hidden");
        })
    })
i3u.addEventListener('click',function(event)
    {
        event.preventDefault();
        i3u.classList.add("hidden");
        i3d.classList.remove("hidden");
        q3.style.height = "110px";
        q3.classList.add("items-center");
        q3.classList.remove("pt-10");
        ans3.classList.add("hidden");
        const btn3 = document.getElementById("btn3");
        btn3.classList.add("hidden");
        let p3 = document.getElementById("p3");
        p3.innerText = "";
        ans3.value="";
    })
//Fourth Question
i4d.addEventListener('click',function(event)
    {
        event.preventDefault();
        i4d.classList.add("hidden");
        i4u.classList.remove("hidden");
        q4.style.height = "150px";
        q4.classList.remove("items-center");
        q4.classList.add("pt-10");
        ans4.classList.remove("hidden");
        const btn4 = document.getElementById("btn4");
        btn4.classList.remove("hidden");
        btn4.addEventListener('click',function(event)
        {
            event.preventDefault();
            ans4.classList.add("hidden");
            btn4.classList.add("hidden");
            let answer4 = ans4.value;
            let p4 = document.getElementById("p4");
            p4.innerText = `Answer: ${answer4}`;
            p4.classList.remove("hidden");
        })
    })
i4u.addEventListener('click',function(event)
    {
        event.preventDefault();
        i4u.classList.add("hidden");
        i4d.classList.remove("hidden");
        q4.style.height = "110px";
        q4.classList.add("items-center");
        q4.classList.remove("pt-10");
        ans4.classList.add("hidden");
        const btn4 = document.getElementById("btn4");
        btn4.classList.add("hidden");
        let p4 = document.getElementById("p4");
        p4.innerText = "";
        ans4.value="";
    })
//blog home section shifting
const nav_btn = document.getElementById("nav_btn");
nav_btn.addEventListener('click',function(event)
    {
        event.preventDefault();
        window.location.href = "/index.html";
    })
//blog home section finished