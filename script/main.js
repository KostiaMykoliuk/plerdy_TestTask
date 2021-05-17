document.addEventListener( 'DOMContentLoaded', () => {

	const menIconOpen = document.getElementById('menIconOpen'),
		  mainMenu = document.getElementById('mainMenu'),
		  menuWrapper = document.getElementById('menuWrapper'),
		  menIconClose = document.getElementById('menIconClose'),
		  article = document.getElementById('article'),
		  articleDetails = document.getElementById('details'),
		  imagesCarouselWrap = document.getElementById('imagesCarouselWrap'),
		  articalText = document.getElementById('articalText'),
		  content = document.getElementById('content'),
		  imagesCarousel = document.getElementById('imagesCarousel'),
		  slideshow = document.getElementById('slideShow');


	menIconOpen.addEventListener('click', ()=>{
		let computedStyle = getComputedStyle(mainMenu).height;
		menuWrapper.style.height = computedStyle;
		menIconOpen.style.display = 'none';
		menIconClose.style.display = 'block';
		article.style.opacity = 0;	
	})

	menIconClose.addEventListener('click', ()=>{
		let computedStyle = getComputedStyle(mainMenu).height;
		menuWrapper.style.height = 0;
		menIconClose.style.display = 'none';
		menIconOpen.style.display = 'block';
		article.style.opacity = 1;	
	})

	articleDetails.addEventListener('click', ()=>{
		imagesCarouselWrap.classList.toggle('hide')
		content.classList.toggle('overflow-auto')
		if (articleDetails.innerHTML === "Details") {
			articleDetails.innerHTML = "hide Text";
		} else {
			articleDetails.innerHTML = "Details";
		}
		let hideText = articalText.querySelectorAll(".hide")
		for (var i = hideText.length - 1; i >= 0; i--) {
			hideText[i].classList.toggle('show')
		}
	})

	imagesCarousel.addEventListener('click', (e)=>{
		let activeImg = imagesCarousel.querySelectorAll(".active-img");
		let link = e.target.src;
		if(activeImg[0] != undefined){
			activeImg[0].classList.remove('active-img')
		}

		e.target.classList.add('active-img');
		slideshow.setAttribute("style", "background-image: url("+link+");");
	})



})


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  		loop: false,
  		autoWidth: true,
  		mouseDrag:false,
  });
  $(".next").click(function(){
		$(".owl-carousel").trigger("next.owl.carousel");
	});
	$(".prev").click(function(){
		$(".owl-carousel").trigger("prev.owl.carousel");
	});
});