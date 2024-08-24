// let hours=0;
// let min=0;
// let sec=0;
// let count=0;
// setInterval(()=>{
//     count++;
//     sec=count;
//     console.log(`sec:${sec}s`);
//     if(sec==60){
//         count=0
//         sec=0;
//         min++;
//         console.log("min:",min);
//     }
//     if(min==60){
//         count=0;
//         min=0;
//         hours++;
//         console.log("hours:",hours);
//     }
//     console.log(`${hours}h-${min}m-${sec}s`);
//     secds.i
    

// },1000);
// let hrs=document.querySelector(".hour");
// let minutes=document.querySelector(".mins");
// let secds=document.querySelector(".seconds");
// let secdss=document.createElement("div");
// secdss.innerHTML=sec;
let hrs=document.querySelector(".hour");
let min=document.querySelector(".mins");
// let sec=document.querySelector(".seconds");
let amp=document.querySelector("#amps");
function digitalClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    // let s=new Date().getSeconds();
    let ampm="AM";
    
    if(h>12){
        h=h-12;
        ampm="PM";
    }

    h = h<10? "0" + h :h;
    m = m<10? "0" + m :m;
    // s = s<10? "0" + s :s;

    hrs.innerText=`${h}`;
    min.innerText=m;
    // sec.innerHTML=`${s}`;
    amp.innerText=ampm;

    

    setTimeout(()=>{
        digitalClock();
    },1000);

}
digitalClock();

// const url="https://quote-garden.onrender.com/api/v3/quotes";
// let url="https://timshim-quotes-v1.p.rapidapi.com/quotes";
// let url="https://api.api-ninjas.com/v1/quotes";
// let url="https://v2.jokeapi.dev/joke/Any?safe-mode";
// let url="https://quote-garden.onrender.com/api/v3/quotes";
// let url="https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote"





// let url="https://type.fit/api/quotes";
// let url2="https://zenquotes.io/api/random";
let url="https://catfact.ninja/fact";

async function getQuotes(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
        // return(res.data[1].text + res.data[1].author);
    }catch(err){
        console.log("error -",err);
    }
    
};
    


let btn=document.querySelector(".ref-btn");
btn.addEventListener("click",async()=>{
    let p=document.querySelector(".quote-para");
    let fact=await getQuotes();
    p.innerText=fact;

});

