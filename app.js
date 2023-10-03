//reviewsabout review slider
// let review=document.querySelector('.review-wrapper');

// let curentReviews=[0,2];

// let updateReviewSlider=(cards)=>{
//     cards.forEach((card_index)=>{
//         review[card_index].classList.add('active');
//     })
// }
// setInterval(()=>{
//     curentReviews.forEach((card_index)=>{
//         review[card_index].classList.remove('active');

//         curentReviews[i]=card_index>=review.length-1? 1 :card_index+1;
//     })
//     setTimeout(()=>{
//         updateReviewSlider(curentReviews);
//     },250)

    
// },5000);

// updateReviewSlider(curentReviews);


//faq
let faqs=[...document.querySelectorAll('.faq')];
faqs.map(faq=>{
    let ques=faq.querySelector('.quetion-box');

    ques.addEventListener('click',()=>{
        faq.classList.toggle('active');
    })
})


// dicsh slider

let dishSlider=document.querySelector('.dish-slide');

let rotationVal=0;
setInterval(()=>{
    rotationVal+=120;
    dishSlider.style.transform='translateY(-50%)  rotate(${rotationVal}deg)'
},3000)

