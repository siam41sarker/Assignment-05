const btn_history =  document.getElementById("btn_history");
const btn_donate = document.getElementById("btn_donate");
const main_section = document.getElementById("main_section");
const history_section = document.getElementById("history_section");
const main_balance = document.getElementById("balance_nav");
const donate_noa = document.getElementById("btn_donation1");
const donate_fenni = document.getElementById("btn_donation2");
const donate_quota = document.getElementById("btn_donation3");
const spacial_case = document.getElementById("spacial_case");
const footer = document.getElementById("footer");
//blog section shifting
const nav_btn = document.getElementById("nav_btn");
nav_btn.addEventListener('click',function(event)
    {
        event.preventDefault();
        window.location.href = "/blog.html";
    })
//blog section finished
btn_history.addEventListener('click',function(event)
    {
        event.preventDefault();
        main_section.classList.add("hidden");
        history_section.classList.remove("hidden");
        footer.classList.add("hidden");
        btn_history.style.backgroundColor = "rgb(180, 244, 97)";
        btn_history.style.border = "1px solid rgb(180, 244, 97)";
        btn_history.style.color = "rgb(17,17,17)";
        btn_donate.style.color = "rgba(17,17,17,0.7)";
        btn_donate.style.backgroundColor = "rgb(255,255,255)";
        btn_donate.style.border = "1px solid rgba(17,17,17,0.3)";
    })
btn_donate.addEventListener('click',function(event)
    {
        event.preventDefault();
        main_section.classList.remove("hidden");
        history_section.classList.add("hidden");
        footer.classList.remove("hidden");
        btn_donate.style.backgroundColor = "rgb(180, 244, 97)";
        btn_donate.style.border = "1px solid rgb(180, 244, 97)";
        btn_donate.style.color = "rgb(17,17,17)";
        btn_history.style.color = "rgba(17,17,17,0.7)";
        btn_history.style.backgroundColor = "rgb(255,255,255)";
        btn_history.style.border = "1px solid rgba(17,17,17,0.3)";
    })
const input_amount_noa =document.getElementById("input_amount_noa");
const noaArranged = document.getElementById("noa_arranged");
let noaAmount = parseFloat(noaArranged.innerText);
donate_noa.addEventListener('click',function(event)
    {
        event.preventDefault();
        let amountTaken = parseFloat(input_amount_noa.value);
        let ac_balance = parseFloat(main_balance.innerText);
        if(isNaN(amountTaken) || amountTaken<=0) 
            {
                alert("Invalid Input!");
            }
        else if(ac_balance === 0 || amountTaken>ac_balance)
            {
                alert("Insufficient Balance!");
            }
        else
            {
                let latest_balance  = ac_balance - amountTaken;
                main_balance.innerText = latest_balance;
                noaAmount = noaAmount + amountTaken;
                noaArranged.innerText = noaAmount;
                input_amount_noa.value = "";
                let time = new Date();
                let div= document.createElement('div');
                div.id = "spacial_case";
                div.classList.add('container','rounded-2xl','flex','flex-col','gap-4','mx-auto','p-8','mb-8');
                let h3 = document.createElement('h3');
                h3.classList.add('text-xl','font-bold');
                const noakhali_h2 = document.getElementById("noakhali_h2");
                let title = noakhali_h2.innerText; 
                h3.innerText = `${amountTaken} Taka is Donated for ${title}`;
                let p = document.createElement('p');
                p.classList.add('text-base');
                p.innerText = `Date: ${time}`;
                div.appendChild(h3);
                div.appendChild(p);
                history_section.appendChild(div);
                show.showModal();
            }
    })
const input_amount_feni =document.getElementById("input_amount_feni");
const feniArranged = document.getElementById("feni_arranged");
let feniAmount = parseFloat(feniArranged.innerText);
donate_fenni.addEventListener('click',function(event)
    {
        event.preventDefault();
        let amountTaken = parseFloat(input_amount_feni.value);
        let ac_balance = parseFloat(main_balance.innerText);
        if(isNaN(amountTaken) || amountTaken<=0) 
            {
                alert("Invalid Input!");
            }
        else if(ac_balance === 0 || amountTaken>ac_balance)
            {
                alert("Insufficient Balance!");
            }
        else
            {
                let latest_balance  = ac_balance - amountTaken;
                main_balance.innerText = latest_balance;
                feniAmount = feniAmount + amountTaken;
                feniArranged.innerText = feniAmount;
                input_amount_feni.value = "";
                let time = new Date();
                let div= document.createElement('div');
                div.id = "spacial_case";
                div.classList.add('container','rounded-2xl','flex','flex-col','gap-4','mx-auto','p-8','mb-8');
                let h3 = document.createElement('h3');
                h3.classList.add('text-xl','font-bold');
                const feni_h2 = document.getElementById("feni_h2");
                let title = feni_h2.innerText; 
                h3.innerText = `${amountTaken} Taka is Donated for ${title}`;
                let p = document.createElement('p');
                p.classList.add('text-base');
                p.innerText = `Date: ${time}`;
                div.appendChild(h3);
                div.appendChild(p);
                history_section.appendChild(div);
                show.showModal();
            }
    })
    const input_amount_quota =document.getElementById("input_amount_quota");
    const quotaArranged = document.getElementById("quota_arranged");
    let quotaAmount = parseFloat(quotaArranged.innerText);
    donate_quota.addEventListener('click',function(event)
        {
            event.preventDefault();
            let amountTaken = parseFloat(input_amount_quota.value);
            let ac_balance = parseFloat(main_balance.innerText);
            if(isNaN(amountTaken) || amountTaken<=0) 
                {
                    alert("Invalid Input!");
                }
            else if(ac_balance === 0 || amountTaken>ac_balance)
                {
                    alert("Insufficient Balance!");
                }
            else
                {
                    let latest_balance  = ac_balance - amountTaken;
                    main_balance.innerText = latest_balance;
                    quotaAmount = quotaAmount + amountTaken;
                    quotaArranged.innerText = quotaAmount;
                    input_amount_quota.value = "";
                    let time = new Date();
                    let div= document.createElement('div');
                    div.id = "spacial_case";
                    div.classList.add('container','rounded-2xl','flex','flex-col','gap-4','mx-auto','p-8','mb-8');
                    let h3 = document.createElement('h3');
                    h3.classList.add('text-xl','font-bold');
                    const quota_h2 = document.getElementById("quota_h2");
                    let title = quota_h2.innerText; 
                    h3.innerText = `${amountTaken} Taka is Donated for ${title}`;
                    let p = document.createElement('p');
                    p.classList.add('text-base');
                    p.innerText = `Date: ${time}`;
                    div.appendChild(h3);
                    div.appendChild(p);
                    history_section.appendChild(div);
                    show.showModal();
                }
        })
    
