(function(){


    var data = {
        
        photographerName: 'AIGERIM OMAROVA',
        buttonHome: "HOME",
        buttonPortfolio: "PORTFOLIO",
        buttonContacts: "CONTACTS"
    };
    var images = {
        main: 'photoSources/photographer.jpg',
        zero: 'photoSources/00.jpg',
        first: 'photoSources/1 x.jpg',
        second: 'photoSources/1.jpg',
        third: 'photoSources/2 x.jpg',
        fourth: 'photoSources/6.jpg',
        fifth: 'photoSources/9.jpg',
        six: 'photoSources/12.jpg',
        seven: 'photoSources/13f.jpg',
        eight: 'photoSources/44.jpg'
    }

    
    var textAigerim = document.getElementById('aigerim');
    var buttonDataHome = document.getElementsByClassName('navbar-brand');
    var mainPhoto = document.getElementById('photographer');
    var firstPhoto = document.getElementsByClassName('img-fluid');


    // debugger;
    textAigerim.innerHTML = data.photographerName;
    buttonDataHome[0].innerHTML = data.buttonHome;
    buttonDataHome[1].innerHTML = data.buttonPortfolio;
    buttonDataHome[2].innerHTML = data.buttonContacts;

    mainPhoto.src = images.main;
    firstPhoto[0].src = images.first;
    firstPhoto[1].src = images.second;
    firstPhoto[2].src = images.third;
    firstPhoto[3].src = images.fourth;
    firstPhoto[4].src = images.fifth;
    firstPhoto[5].src = images.six;
    firstPhoto[6].src = images.seven;
    firstPhoto[7].src = images.eight;


 

})();