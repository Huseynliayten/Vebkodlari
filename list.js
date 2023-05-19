let input=document.querySelector("input");
let button=document.querySelector("button");
let qiymet=document.querySelector("#soz");

button.addEventListener("click",function(){
    let cumle=document.createElement("p");
    cumle.innerText=input.value;
    qiymet.appendChild(cumle);
    input.value="";

cumle.addEventListener('click',function(){
    cumle.style.textDecoration='line-through';
});
cumle.addEventListener('dblclick',function(){
    cumle.remove();
});
cumle.addEventListener("mouseover",function(){
    cumle.style.cursor='pointer';
})

});

