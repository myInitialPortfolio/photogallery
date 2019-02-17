(function(){


    var data = {
        
        photographerName: 'AIGERIM OMAROVA',
        plainText:"Some text about me. I love taking photos of PEOPLE. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
    var images = {
        main: 'photoSources/photographer.jpg',
        zero: 'photoSources/0.jpg',
        first: 'photoSources/1.jpg',
        second: 'photoSources/2.jpg',
        third: 'photoSources/3.jpg',
        fourth: 'photoSources/4.jpg',
        fifth: 'photoSources/5.jpg',
        six: 'photoSources/6.jpg',
        seven: 'photoSources/7.jpg',
        eight: 'photoSources/8.jpg',
        nine:'photoSources/9.jpg',
        ten:'photoSources/10.jpg'
    }

    
    var textAigerim = document.getElementById('aigerim');
    var plainText = document.getElementById('plain-text');
    

    var firstPhoto = document.getElementsByClassName('img-fluid');
    var photoAboutMe = document.getElementById('img-about-me');

    
    // setting Up photos
    photoAboutMe.src = images.zero;
    firstPhoto[0].src=images.zero;
    firstPhoto[1].src=images.first;
    firstPhoto[2].src=images.second;
    firstPhoto[3].src=images.third;
    firstPhoto[4].src=images.fourth;
    firstPhoto[5].src=images.fifth;
    firstPhoto[6].src=images.zero;
    firstPhoto[7].src=images.first;
    firstPhoto[8].src=images.second;
    firstPhoto[9].src=images.zero;
    firstPhoto[10].src=images.first;
    firstPhoto[11].src=images.second;
    firstPhoto[12].src=images.zero;
    firstPhoto[13].src=images.first;
    firstPhoto[14].src=images.second;
    
    

    // debugger;
    plainText.innerHTML = data.plainText;
    textAigerim.innerHTML = data.photographerName;
    firstBtn.innerText = data.portfolio;
    secondBtn.innerHTML = data.aboutMe;
    thirdBtn.innerHTML = data.contacts;
    
    
    
})();