(function(){


    var data = {
        photographer: "PHOTOGRAPHER",
        photographerName: 'AIGERIM OMAROVA',
        buttonHome: "HOME",
        buttonCollections: "COLLECTIONS",
        buttonContacts: "CONTACTS"
    };

    
    var slides = document.querySelectorAll('#carouselExampleSlidesOnly .carousel-inner')[0].getElementsByClassName('carousel-item');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,2000);

    function nextSlide() {
        slides[currentSlide].className = 'carousel-item';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'carousel-item active';
    }
    

    var textPhotographer = document.getElementById('photographer');
    var textPhotographerName = document.getElementById('photographerName');
    var buttonDataHome = document.getElementById('home');
    var buttonDataCollections = document.getElementById('collections');
    var buttonDataContacts = document.getElementById('contacts');

    


    // debugger;
    textPhotographer.innerHTML = data.photographer;
    textPhotographerName.innerHTML = data.photographerName;

    buttonDataHome.innerHTML = data.buttonHome;
    buttonDataCollections.innerHTML = data.buttonCollections;
    buttonDataContacts.innerHTML = data.buttonContacts;

 

})();


