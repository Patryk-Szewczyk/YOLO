var page_OBJ = {
    setPage: function () {
        var header = document.querySelector('div.header');
        var video_EL = document.querySelector('section.page-menu');
        //addEventListener('load', () => {
        var DESKTOP_navbar = document.querySelector('nav.navbar-desktop');
        DESKTOP_navbar.style.top = window.innerHeight + "px";
        DESKTOP_navbar.style.transitionDuration = 0.0 + "s";
        //}, false);
        ['load', 'resize'].forEach(function (ev) {
            window.addEventListener(ev, function () {
                var pageHeight = String(window.innerHeight);
                header.style.height = pageHeight + 'px';
                video_EL.style.height = pageHeight + 'px';
            }, false);
        });
    }
};
page_OBJ.setPage();
var pageMain_VIDEO = {
    video: document.querySelector('video.pm-video-background')
};
var pageIntro_OBJ = {
    DESKTOP_contentCol_AR: [],
    active_AEL: function () {
        var _this = this;
        if (window.innerWidth < 1130) {
            //
        }
        else if (window.innerWidth >= 1130) {
            // Desktop navbar:
            var DESKTOP_navbar_1 = document.querySelector('nav.navbar-desktop');
            // Desktop content:
            var DESKTOP_contentCol_Length_1 = document.querySelectorAll('div.dsk-content-col').length;
            setTimeout(function () {
                DESKTOP_navbar_1.style.top = 0 + "px";
                DESKTOP_navbar_1.style.transitionDuration = 0.75 + "s";
                for (var i = 0; i < DESKTOP_contentCol_Length_1; i++) {
                    _this.DESKTOP_contentCol_AR[i] = document.querySelectorAll('div.dsk-content-col')[i];
                }
                ;
                setTimeout(function () {
                    pageMain_VIDEO.video.play();
                    var header_EL = document.querySelector('div.header');
                    header_EL.style.backgroundColor = "transparent";
                    document.getElementById('dskNavIc0').style.color = 'hsl(215, 100%, 59%)';
                    // Show:
                    var dealy_show_AR = [900, 600, 300, 0];
                    var _loop_1 = function (i) {
                        setTimeout(function () {
                            _this.DESKTOP_contentCol_AR[i].style.width = 0 + '%';
                            _this.DESKTOP_contentCol_AR[i].style.transitionDuration = 1 + 's';
                        }, dealy_show_AR[i]);
                    };
                    for (var i = 0; i <= 3; i++) {
                        _loop_1(i);
                    }
                    ;
                }, 900);
            }, 200);
        }
    }
};
// RESTRYKCJA z auto-odtwarzaniem wideo tak jak w przypadku odtwarzania muzyki od razu:
var cookie_OBJ = {
    accept: function () {
        var accept_EL = document.querySelector('div.cookie-accept');
        ['click', 'touchend'].forEach(function (ev) {
            accept_EL.addEventListener(ev, function () {
                accept_EL.parentElement.style.display = 'none';
                pageIntro_OBJ.active_AEL();
            }, false);
        });
    },
    about: function () {
        var about_EL = document.querySelector('div.cookie-about');
        ['click', 'touchend'].forEach(function (ev) {
            about_EL.addEventListener(ev, function () {
                window.location.href = 'https://cookieinformation.com/what-is-a-cookie/';
            }, false);
        });
    }
};
cookie_OBJ.accept();
cookie_OBJ.about();
var navMob_dropdownButton_OBJ = {
    isEnable: false,
    action: function () {
        var _this = this;
        var button = document.querySelector('div.nav-mob-dropdown-button');
        var target = document.querySelector('div.nav-mob-dropdown-target');
        var strip_AR = [];
        for (var i = 0; i < 3; i++) {
            strip_AR[i] = document.querySelectorAll('div.nav-mob-dropdown-strip')[i];
        }
        ;
        var iconTitle_AR = [];
        var iconTitles_Length = document.querySelectorAll('div.nav-mov-dropdown-item-title').length;
        for (var i = 0; i < iconTitles_Length; i++) {
            iconTitle_AR[i] = document.querySelectorAll('div.nav-mov-dropdown-item-title')[i];
        }
        ;
        ['click', 'touchend'].forEach(function (ev) {
            button.addEventListener(ev, function () {
                if (_this.isEnable === false) { // Show target:
                    // Switch:
                    setTimeout(function () { return _this.isEnable = true; }, 800);
                    // Target:
                    button.style.backgroundImage = "linear-gradient(to bottom left, hsl(215, 90%, 35%), hsl(215, 100%, 49%), hsl(215, 90%, 67%))";
                    button.style.transitionDuration = 0.3 + "s";
                    target.style.height = 265 + "px";
                    target.style.transitionDuration = 0.3 + "s";
                    setTimeout(function () {
                        target.style.width = 250 + "px";
                        target.style.transitionDuration = 0.3 + "s";
                        for (var i = 0; i < iconTitles_Length; i++) {
                            iconTitle_AR[i].style.width = 190 + "px";
                            iconTitle_AR[i].style.opacity = 1.0;
                            iconTitle_AR[i].style.transitionDuration = 0.3 + "s";
                        }
                        ;
                    }, 300);
                    // Strips:
                    strip_AR[1].style.width = 0 + "px";
                    strip_AR[1].style.transitionDuration = 0.15 + "s";
                    strip_AR[0].style.transform = "rotate(45deg)";
                    strip_AR[0].style.transitionDuration = 0.3 + "s";
                    strip_AR[2].style.transform = "rotate(-45deg)";
                    strip_AR[2].style.transitionDuration = 0.3 + "s";
                    for (var i = 0; i < iconTitles_Length; i++) {
                        strip_AR[i].style.background = 'white';
                        strip_AR[i].style.transitionDuration = 0.3 + "s";
                    }
                    ;
                }
                else if (_this.isEnable === true) { // Hide target:
                    // Switch:
                    setTimeout(function () { return _this.isEnable = false; }, 800);
                    // Target:
                    button.style.backgroundImage = "linear-gradient(to bottom right, rgb(50,50,50), rgb(50,50,50))";
                    button.style.transitionDuration = 0.3 + "s";
                    target.style.width = 60 + "px";
                    target.style.transitionDuration = 0.3 + "s";
                    for (var i = 0; i < iconTitles_Length; i++) {
                        iconTitle_AR[i].style.width = 0 + "px";
                        iconTitle_AR[i].style.opacity = 0.0;
                        iconTitle_AR[i].style.transitionDuration = 0.3 + "s";
                    }
                    ;
                    setTimeout(function () {
                        target.style.height = 0 + "px";
                        target.style.transitionDuration = 0.3 + "s";
                    }, 300);
                    // Strips:
                    strip_AR[1].style.width = 30 + "px";
                    strip_AR[1].style.transitionDuration = 0.15 + "s";
                    strip_AR[0].style.transform = "rotate(0deg)";
                    strip_AR[0].style.transitionDuration = 0.3 + "s";
                    strip_AR[2].style.transform = "rotate(0deg)";
                    strip_AR[2].style.transitionDuration = 0.3 + "s";
                    for (var i = 0; i < iconTitles_Length; i++) {
                        strip_AR[i].style.background = '#BBB';
                        strip_AR[i].style.transitionDuration = 0.3 + "s";
                    }
                    ;
                }
            }, false);
        });
    },
};
navMob_dropdownButton_OBJ.action();
var navDesk_dropdownButton_OBJ = {
    currentPage: 0,
    activeChange: true,
    getPages_AR: function () {
        var pages_AR = [];
        var pagesNum = document.querySelectorAll('div.nav-dsk-dropdown-item-icon').length;
        for (var i = 0; i < pagesNum; i++) {
            pages_AR[i] = document.querySelectorAll('section.page')[i];
            if (this.currentPage === i) {
                // nothing
            }
            else if (this.currentPage !== i) {
                pages_AR[i].style.display = 'none';
            }
        }
        ;
        return pages_AR;
    },
    action: function () {
        var _this = this;
        var dropdownButton_AR = [];
        var dropdownTitle_AR = [];
        var ballTop_AR = [];
        var topMenuIcon_AR = [];
        var icon_AR = [];
        var toBallTopARvalInc = 10.5; /*15 - (9 / 2)*/
        var dropdownButtons_Length = document.querySelectorAll('div.nav-dsk-dropdown-item').length;
        var dropdownButtonsGroup_EL = document.querySelector('div.top-nav-buttons-group');
        var ball_EL = document.querySelector('div.nav-dsk-choose-ball');
        for (var i = 0; i < dropdownButtons_Length; i++) {
            ballTop_AR[i] = toBallTopARvalInc;
            toBallTopARvalInc += 45;
        }
        ;
        for (var i = 0; i < dropdownButtons_Length; i++) {
            dropdownButton_AR[i] = document.querySelectorAll('div.nav-dsk-dropdown-item')[i];
            dropdownTitle_AR[i] = document.querySelectorAll('div.nav-dsk-dropdown-title-item')[i];
            topMenuIcon_AR[i] = document.querySelectorAll('div.nav-dsk-dropdown-item-icon')[i];
            icon_AR[i] = document.getElementById('dskNavIc' + String(i));
            dropdownButton_AR[i].addEventListener('mouseover', function (e) {
                var element = e.currentTarget;
                var element_ID = Number(element.id);
                for (var i_1 = 0; i_1 < dropdownButtons_Length; i_1++) {
                    if (element_ID === i_1) { // Slide ON:
                        dropdownTitle_AR[i_1].style.width = "auto"; /*130px*/
                        dropdownTitle_AR[i_1].style.padding = "0px 17px";
                        dropdownTitle_AR[i_1].style.transitionDuration = 0.3 + "s";
                        ball_EL.style.top = ballTop_AR[i_1] + "px";
                        ball_EL.style.left = 40 + "%";
                        ball_EL.style.transitionDuration = 0.3 + "s";
                        topMenuIcon_AR[i_1].style.left = 20 + "px";
                        topMenuIcon_AR[i_1].style.transitionDuration = 0.3 + "s";
                        if (_this.currentPage !== element_ID) {
                            icon_AR[i_1].style.color = "white";
                            icon_AR[i_1].style.transitionDuration = 0.2 + "s";
                        }
                        else { }
                    }
                    else if (element_ID !== i_1) { // Slide OFF:
                        dropdownTitle_AR[i_1].style.width = 0 + "%";
                        dropdownTitle_AR[i_1].style.padding = "0px";
                        dropdownTitle_AR[i_1].style.transitionDuration = 0.3 + "s";
                        topMenuIcon_AR[i_1].style.left = 0 + "px";
                        topMenuIcon_AR[i_1].style.transitionDuration = 0.3 + "s";
                        if (_this.currentPage !== i_1) {
                            icon_AR[i_1].style.color = "#888";
                            icon_AR[i_1].style.transitionDuration = 0.2 + "s";
                        }
                        else { }
                    }
                }
                ;
            }, false);
            dropdownButtonsGroup_EL.addEventListener('mouseout', function (e) {
                var element = e.currentTarget;
                var element_ID = Number(element.id);
                for (var i_2 = 0; i_2 < dropdownButtons_Length; i_2++) {
                    dropdownTitle_AR[i_2].style.width = 0 + "%";
                    dropdownTitle_AR[i_2].style.padding = "0px";
                    dropdownTitle_AR[i_2].style.transitionDuration = 0.3 + "s";
                    ball_EL.style.left = 0 + "%";
                    ball_EL.style.transitionDuration = 0.3 + "s";
                    topMenuIcon_AR[i_2].style.left = 0 + "px";
                    topMenuIcon_AR[i_2].style.transitionDuration = 0.3 + "s";
                    if (_this.currentPage === i_2) {
                        icon_AR[i_2].style.color = "hsl(215, 100%, 49%)";
                        icon_AR[i_2].style.transitionDuration = 0.2 + "s";
                    }
                    else if (_this.currentPage !== i_2) {
                        icon_AR[i_2].style.color = "#888";
                        icon_AR[i_2].style.transitionDuration = 0.2 + "s";
                    }
                }
                ;
            }, false);
            dropdownButton_AR[i].addEventListener('click', function (e) {
                if (_this.activeChange === true) {
                    _this.activeChange = false;
                    setTimeout(function () { return _this.activeChange = true; }, 2000);
                    var element = e.currentTarget;
                    var element_ID = Number(element.id);
                    var pages_AR_1 = _this.getPages_AR(); // pages
                    var _loop_2 = function (i_3) {
                        _this.currentPage = element_ID;
                        if (element_ID === i_3) {
                            icon_AR[i_3].style.color = "hsl(215, 100%, 49%)";
                            icon_AR[i_3].style.transitionDuration = 0.2 + "s";
                            // Hide:
                            var dealy_hide_AR = [0, 0, 0, 0]; /*OLD: 0, 300, 600, 900*/
                            var _loop_3 = function (i_4) {
                                setTimeout(function () {
                                    pageIntro_OBJ.DESKTOP_contentCol_AR[i_4].style.width = 25 + '%';
                                    pageIntro_OBJ.DESKTOP_contentCol_AR[i_4].style.transitionDuration = 0.8 + 's'; /*OLD: 1*/
                                }, dealy_hide_AR[i_4]);
                            };
                            for (var i_4 = 0; i_4 <= 3; i_4++) {
                                _loop_3(i_4);
                            }
                            ;
                            // Show:
                            setTimeout(function () {
                                pages_AR_1[i_3].style.display = 'flex';
                                var dealy_show_AR = [0, 0, 0, 0]; /*OLD: 900, 600, 300, 0*/
                                var _loop_4 = function (i_5) {
                                    setTimeout(function () {
                                        pageIntro_OBJ.DESKTOP_contentCol_AR[i_5].style.width = 0 + '%';
                                        pageIntro_OBJ.DESKTOP_contentCol_AR[i_5].style.transitionDuration = 0.8 + 's'; /*OLD: 1*/
                                    }, dealy_show_AR[i_5]);
                                };
                                for (var i_5 = 0; i_5 <= 3; i_5++) {
                                    _loop_4(i_5);
                                }
                                ;
                            }, 1000); /*OLD: 1300*/
                        }
                        else if (element_ID !== i_3) {
                            icon_AR[i_3].style.color = "#888";
                            icon_AR[i_3].style.transitionDuration = 0.2 + "s";
                            setTimeout(function () {
                                pages_AR_1[i_3].style.display = 'none';
                            }, 1000); /*OLD: 1300*/
                        }
                    };
                    for (var i_3 = 0; i_3 < dropdownButtons_Length; i_3++) {
                        _loop_2(i_3);
                    }
                    ;
                    console.log(element_ID);
                }
                else { }
            }, false);
        }
        ;
    }
};
navDesk_dropdownButton_OBJ.action();
navDesk_dropdownButton_OBJ.getPages_AR();
var pageTransforms_OBJ = {
    isMobile: false,
    isDesktop: false,
    pageWidth: 0,
    getElements: function () {
        var video_EL = document.querySelector('video.pm-video-background');
        return [video_EL];
    },
    transform_AEL: function () {
        var _this = this;
        ['load', 'resize'].forEach(function (ev) {
            window.addEventListener(ev, function () {
                _this.pageWidth = window.innerWidth;
                if (_this.pageWidth < 1130 && _this.isMobile === false) { /// Boolean'y są tutaj zabezpieczeniem przed niechcianym powtarzaniem się wywoływania funkcji:
                    // MOBILE
                    _this.isMobile = true;
                    _this.isDesktop = false;
                    var elements = _this.getElements();
                    var video_EL = elements[0];
                    video_EL.style.display = 'none';
                    video_EL.pause();
                }
                else if (_this.pageWidth >= 1130 && _this.isDesktop === false) {
                    // DESKTOP
                    _this.isDesktop = true;
                    _this.isMobile = false;
                    var elements = _this.getElements();
                    var video_EL = elements[0];
                    video_EL.style.display = 'flex';
                    video_EL.currentTime = 0;
                    video_EL.play();
                }
            }, false);
        });
    }
};
pageTransforms_OBJ.transform_AEL();
var pages_OBJ = {
    page_Purpose_Books: function () {
        var actionWorld_EL = document.querySelector('div.pw-action-world-proper');
        var blinkLine = document.querySelector('div.pw-action-world-proper-line');
        var word_DB = [
            'bezpieczeństwo publiczne.',
            'sklepy.',
            'przemysł samochodowy.',
            'medycynę.',
            'przemysł produkcyjny.',
            'przemysł rolniczy.',
            'prywatny monitoring.',
            'badania naukowe.',
            'gry wideo.',
            'armię.'
        ];
        var i = 0;
        var intervalLoop = 5000;
        var keyTap = 75;
        setInterval(function () {
            // Backspacing word:
            var clerVal = actionWorld_EL.textContent;
            var rest = 300;
            var subIntervalDur_AR = (clerVal.length * keyTap) + rest;
            var clearingText = '';
            for (var i_6 = 0; i_6 < clerVal.length; i_6++) {
                clearingText += clerVal.charAt(i_6);
            }
            ;
            var k = 0;
            var decreaseVal = clearingText;
            setInterval(function () {
                if (k >= clerVal.length) { }
                else if (k < clerVal.length) {
                    decreaseVal = clearingText.slice(0, clerVal.length - (k + 1));
                    actionWorld_EL.textContent = decreaseVal;
                    blinkLine.style.visibility = 'visible';
                }
                k += 1;
            }, keyTap);
            // Writing word:
            var val = word_DB[i];
            var letter_AR = [];
            for (var i_7 = 0; i_7 < val.length; i_7++) {
                letter_AR[i_7] = val.charAt(i_7);
            }
            ;
            var j = 0;
            var growingText = '';
            setTimeout(function () {
                setInterval(function () {
                    if (j >= letter_AR.length) { }
                    else if (j < letter_AR.length) {
                        growingText += letter_AR[j];
                        actionWorld_EL.textContent = growingText;
                        blinkLine.style.visibility = 'visible';
                    }
                    j += 1;
                }, keyTap);
            }, subIntervalDur_AR);
            i += (i === word_DB.length - 1) ? -(word_DB.length - 1) : 1;
        }, intervalLoop);
        // Blinking:
        var isVisible = true;
        setInterval(function () {
            if (isVisible === true) {
                isVisible = false;
                blinkLine.style.visibility = 'hidden';
            }
            else {
                isVisible = true;
                blinkLine.style.visibility = 'visible';
            }
        }, 500);
    },
    page_Idea_Buttons: function () {
        var buttons_AR = document.querySelectorAll('.intro-buttons-group .button');
        var cube_EL = document.querySelector('.cube');
        var textBlock_AR = document.querySelectorAll('.face div div');
        //console.log(textBlock_AR);
        var element = null;
        var id;
        var prevSibling = null;
        var prevPrevSibling = null;
        var nextSibling = null;
        var nextNextSibling = null;
        buttons_AR.forEach(function (button) {
            button.addEventListener('mouseover', function (ev) {
                element = ev.target;
                prevSibling = element.previousElementSibling;
                prevPrevSibling = prevSibling === null || prevSibling === void 0 ? void 0 : prevSibling.previousElementSibling;
                nextSibling = element.nextElementSibling;
                nextNextSibling = nextSibling === null || nextSibling === void 0 ? void 0 : nextSibling.nextElementSibling;
                element.classList.add('hovered');
                if (prevPrevSibling) {
                    prevPrevSibling.classList.add('prev2');
                }
                if (prevSibling) {
                    prevSibling.classList.add('prev1');
                }
                if (nextSibling) {
                    nextSibling.classList.add('next1');
                }
                if (nextNextSibling) {
                    nextNextSibling.classList.add('next2');
                }
            }, false);
            button.addEventListener('mouseout', function () {
                for (var i = 0; i < buttons_AR.length; i++) {
                    buttons_AR[i].className = "button";
                }
            }, false);
            button.addEventListener('click', function (ev) {
                element = ev.target;
                id = element.id;
                switch (id) {
                    case "2":
                        cube_EL.style.transform = "rotate3d(0,-1,0, 90deg)";
                        var _loop_5 = function (i) {
                            if (i === Number(id)) {
                                setTimeout(function () {
                                    textBlock_AR[i].style.color = "rgba(255,255,255,1.0)";
                                }, 500);
                            }
                            else {
                                textBlock_AR[i].style.color = "rgba(255,255,255,0.0)";
                            }
                        };
                        for (var i = 0; i < textBlock_AR.length; i++) {
                            _loop_5(i);
                        }
                        break;
                    case "4":
                        cube_EL.style.transform = "rotate3d(-1,0,0, 90deg)";
                        var _loop_6 = function (i) {
                            if (i === Number(id)) {
                                setTimeout(function () {
                                    textBlock_AR[i].style.color = "rgba(255,255,255,1.0)";
                                }, 500);
                            }
                            else {
                                textBlock_AR[i].style.color = "rgba(255,255,255,0.0)";
                            }
                        };
                        for (var i = 0; i < textBlock_AR.length; i++) {
                            _loop_6(i);
                        }
                        break;
                    case "1":
                        cube_EL.style.transform = "rotate3d(0,-1,0, 180deg)";
                        var _loop_7 = function (i) {
                            if (i === Number(id)) {
                                setTimeout(function () {
                                    textBlock_AR[i].style.color = "rgba(255,255,255,1.0)";
                                }, 500);
                            }
                            else {
                                textBlock_AR[i].style.color = "rgba(255,255,255,0.0)";
                            }
                        };
                        for (var i = 0; i < textBlock_AR.length; i++) {
                            _loop_7(i);
                        }
                        break;
                    case "5":
                        cube_EL.style.transform = "rotate3d(1,0,0, 90deg)";
                        var _loop_8 = function (i) {
                            if (i === Number(id)) {
                                setTimeout(function () {
                                    textBlock_AR[i].style.color = "rgba(255,255,255,1.0)";
                                }, 500);
                            }
                            else {
                                textBlock_AR[i].style.color = "rgba(255,255,255,0.0)";
                            }
                        };
                        for (var i = 0; i < textBlock_AR.length; i++) {
                            _loop_8(i);
                        }
                        break;
                    case "0":
                        cube_EL.style.transform = "rotate3d(0,0,0,0deg)";
                        var _loop_9 = function (i) {
                            if (i === Number(id)) {
                                setTimeout(function () {
                                    textBlock_AR[i].style.color = "rgba(255,255,255,1.0)";
                                }, 500);
                            }
                            else {
                                textBlock_AR[i].style.color = "rgba(255,255,255,0.0)";
                            }
                        };
                        for (var i = 0; i < textBlock_AR.length; i++) {
                            _loop_9(i);
                        }
                        break;
                    case "3":
                        cube_EL.style.transform = "rotate3d(0,-1,0, 270deg)";
                        var _loop_10 = function (i) {
                            if (i === Number(id)) {
                                setTimeout(function () {
                                    textBlock_AR[i].style.color = "rgba(255,255,255,1.0)";
                                }, 500);
                                textBlock_AR[i].style.color = "rgba(255,255,255,0.0)";
                            }
                        };
                        for (var i = 0; i < textBlock_AR.length; i++) {
                            _loop_10(i);
                        }
                        break;
                }
            }, false);
        });
    }
};
pages_OBJ.page_Purpose_Books();
pages_OBJ.page_Idea_Buttons();
var RWD_info_Obj = {
    phone: 0,
    desktop: 900,
    //sliderDescExtraWidthValFunc
};
var slider_Obj = {
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    imageAmount: 6,
    currentImg: 0,
    sliderDescExtraWidth: 0,
    blockadeImg: false,
    eventsWindowTable: ['load', 'resize'],
    eventsClickTable: ['click', 'touchend'],
    imagesArray: [],
    stateELNodeList: [],
    createSldELS: function () {
        var sliderParentBox = document.querySelector('div.img-slider-body');
        var sldTitTxt = [
            '1. Podział obrazu na siatkę',
            '2. Szukanie obiektów',
            '3. Przewidywanie obiektów',
            '4. Klasyfikacja obiektów',
            '5. Dokładne dopasowanie',
            '6. Określenie wyniku i jego prezentacja'
        ];
        var sldDscTxt = [
            'Pierwszym etapem działania algorytmu YOLO jest podział obrazu na siatkę. Etap ten ma kluczowe znaczenie dla skuteczności detekcji obiektów. Proces podziału obrazu na siatkę polega na dzieleniu jego obszaru na mniejsze kwadratowe lub prostokątne obszary o jednakowych rozmiarach. Liczba podziałów może być dostosowana zależnie od wymagań detekcji i rozdzielczości obrazu. Każdy z tych obszarów jest następnie analizowany przez sieć neuronową, aby określić, czy w danym fragmencie znajduje się jakiś obiekt. Dzięki dzieleniu obrazu na siatkę algorytm może dokładniej analizować obrazy na poziomie pikseli, co umożliwia bardziej precyzyjną detekcję i lokalizację obiektów.',
            'W tym etapie algorytm YOLO przystępuje do analizy każdej komórki siatki w celu wykrycia obiektów znajdujących się w jej obszarze. Każda komórka jest traktowana jako potencjalne miejsce wystąpienia obiektu. Algorytm ocenia, czy w danej komórce znajduje się obiekt, oraz próbuje określić jego lokalizację i klasę. Proces ten opiera się na wielu krokach. Najpierw, dla każdej komórki, algorytm sprawdza, czy w jej obszarze znajduje się obiekt poprzez analizę cech obrazu. Następnie, jeśli obiekt zostanie wykryty, algorytm próbuje precyzyjnie określić jego lokalizację poprzez przewidywanie współrzędnych prostokąta ograniczającego ("bounding box") wokół obiektu.',
            'W tej fazie, algorytm YOLO przewiduje lokalizację i rozmiar prostokątnych ramek ograniczających dla wykrytych obiektów. Każda ramka jest opisana za pomocą zestawu parametrów, takich jak współrzędne środka, wysokość i szerokość szukanego obiektu. Głównym celem algorytmu w tym etapie jest jak najdokładniejsze przewidywanie położenia obiektu na obrazie. W tym celu algorytm wykorzystuje informacje z poprzedniego etapu, w którym zostały wykryte obiekty.',
            'Po wykryciu obiektów i określeniu ich lokalizacji, algorytm dokonuje klasyfikacji każdego z nich, identyfikując do jakiej klasy (np. pies, samochód, itp.) należy dany obiekt. Ten etap polega na przypisaniu etykiet (klas) do wykrytych obiektów na podstawie ich cech i kontekstu. Algorytm używa wcześniej wyuczonych modeli klasyfikacyjnych, które potrafią rozpoznawać różne typy obiektów na obrazach. Podczas klasyfikacji, algorytm bierze pod uwagę cechy charakterystyczne obiektów, takie jak kształt, tekstura, kontekst otaczających pikseli, itp. Na podstawie tych cech, model klasyfikacyjny podejmuje decyzję, do której klasy należy dany obiekt. Określenie klas dla wykrytych obiektów jest kluczowe dla dokładnego określenia ramek ograniczających.',
            'Algorytm YOLO dokonuje dokładnego dopasowania ramki ograniczającej do obiektu, minimalizując błędy lokalizacji i dopasowując ramkę do konturów obiektu. W celu osiągnięcia dokładnego dopasowania, algorytm YOLO stosuje różne mechanizmy, aby zoptymalizować precyzję lokalizacji obiektów. Jednym z kluczowych mechanizmów jest próg Intersection over Union (IOU), który pomaga w ocenie, jak dobrze ramka ograniczająca pokrywa się z rzeczywistym obiektem na obrazie. Algorytm wykorzystuje IOU do porównania współrzędnych ramki ograniczającej z rzeczywistym położeniem obiektu. Jeśli wartość IOU przekroczy określony próg, uznaje się, że ramka poprawnie dopasowuje się do obiektu. W przeciwnym razie, detekcja może zostać odrzucona jako fałszywa. Poprzez zastosowanie mechanizmów takich jak IOU, algorytm YOLO może minimalizować błędy lokalizacji i zapewnić dokładne dopasowanie ramki ograniczającej do rzeczywistego obiektu na obrazie. To kluczowe dla dalszych operacji przetwarzania obrazu i zapewnienia wysokiej jakości detekcji obiektów.',
            'Na koniec, gdy algorytm określi wymiary części obiektu znajdujące się w określonych kierunkach od środka (jego wykrycia), poszczególne jego elementy (ramki ograniczające) tego obiektu nakładają się na siebie w celu określenia pozycji i formy całego obiektu. Następnie algorytm prezentuje wyniki detekcji, będące ramką ograniczającą z etykietą dla każdego z wykrytych obiektów. Prezentacja wyników umożliwia użytkownikowi łatwe zrozumienie, które obiekty zostały wykryte i zidentyfikowane przez algorytm.'
        ];
        var sldTitTN = [];
        var sldDscTN = [];
        for (var i = 0; i < this.imageAmount; i++) {
            sldTitTN[i] = document.createTextNode(sldTitTxt[i]);
            sldDscTN[i] = document.createTextNode(sldDscTxt[i]);
        }
        ;
        for (var i = 0; i < this.imageAmount; i++) {
            var sldDimEl = document.createElement('div');
            var sldPrpEl = document.createElement('img');
            var sldInfEL = document.createElement('div');
            var sldInfHngEl = document.createElement('div');
            var sldTitEL = document.createElement('div');
            var sldDscEL = document.createElement('div');
            var sldWorkImgEL = document.createElement('img');
            sldDimEl.setAttribute('class', 'img-slider-img-dim');
            sldPrpEl.setAttribute('class', 'img-slider-img-prp');
            sldInfEL.setAttribute('class', 'img-slider-info-box');
            sldInfHngEl.setAttribute('class', 'img-slider-info-box-hanger');
            sldTitEL.setAttribute('class', 'img-slider-title');
            sldDscEL.setAttribute('class', 'img-slider-description');
            sldWorkImgEL.setAttribute('class', 'img-slider-workimage');
            sldWorkImgEL.setAttribute('src', 'image/work-' + (i + 1) + '.png'); // Mały obrazek!
            sldPrpEl.setAttribute('src', 'image/YOLO-' + (i + 1) + '.jpg');
            sldPrpEl.setAttribute('alt', sldTitTxt[i]);
            sldDimEl.appendChild(sldPrpEl);
            sldTitEL.appendChild(sldTitTN[i]);
            sldInfHngEl.appendChild(sldTitEL);
            sldDscEL.appendChild(sldDscTN[i]);
            sldInfHngEl.appendChild(sldDscEL);
            sldInfHngEl.appendChild(sldWorkImgEL);
            sldInfEL.appendChild(sldInfHngEl);
            sldDimEl.appendChild(sldInfEL);
            sliderParentBox.appendChild(sldDimEl);
        }
        ;
        // First img animation:
        var el = document.querySelectorAll('img.img-slider-img-prp')[0];
        el.style.height = 115 + '%';
        el.style.filter = 'brightness(100%)';
        setTimeout(function () {
            el.style.height = 100 + '%';
            el.style.filter = 'brightness(30%)';
            el.style.transitionDuration = 1.4 + 's';
        }, 100);
        //console.table(this.imagesArray);
        slider_Obj.setSliderDescWidthAEL();
        slider_Obj.createSldImgStateEL();
    },
    returnSliderTitELS: function () {
        var sldTitELS = [];
        for (var i = 0; i < this.imageAmount; i++) {
            sldTitELS[i] = document.querySelectorAll('div.img-slider-title')[i];
        }
        ;
        return sldTitELS;
    },
    returnSliderDescELS: function () {
        var sldDescELS = [];
        for (var i = 0; i < this.imageAmount; i++) {
            sldDescELS[i] = document.querySelectorAll('div.img-slider-description')[i];
        }
        ;
        return sldDescELS;
    },
    returnSliderButELS: function () {
        var sldButELS = [];
        for (var i = 0; i < this.imageAmount; i++) {
            sldButELS[i] = document.querySelectorAll('img.img-slider-workimage')[i];
        }
        ;
        return sldButELS;
    },
    setSliderDescWidthAEL: function () {
        var _this = this;
        slider_Obj.eventsWindowTable.forEach(function (ev) {
            window.addEventListener(ev, function () {
                // Ustawienie szerokości bloku opisu, względem szerkości bloku tytułowego slidera (+ ~100px)
                var sldDescELS = _this.returnSliderDescELS();
                var sldTitELS = _this.returnSliderTitELS();
                //console.log(sldDescELS);
                var sldTitWdtVALS = [];
                for (var i = 0; i < _this.imageAmount; i++) {
                    var sldTitWdtVALS_CSS_Obj = window.getComputedStyle(sldTitELS[i], null);
                    var sldTitWdtVALS_CSS_Val_Str = sldTitWdtVALS_CSS_Obj.getPropertyValue('width');
                    var sldTitWdtVALS_CSS_Val_Num = Number(sldTitWdtVALS_CSS_Val_Str.slice(0, -2));
                    sldTitWdtVALS[i] = sldTitWdtVALS_CSS_Val_Num;
                }
                ;
                if (window.innerWidth < RWD_info_Obj.desktop) {
                    _this.extraWdt = 0;
                }
                else if (window.innerWidth >= RWD_info_Obj.desktop) {
                    _this.extraWdt = 150;
                    //console.log(this.extraWdt);   // ! --> IMPORTANT CONSOLLOG <-- !
                }
                if (window.innerWidth)
                    sldTitWdtVALS.map(function (value, i) {
                        sldTitWdtVALS[i] = value + _this.extraWdt;
                    });
                sldDescELS.forEach(function (value, i) {
                    var toWdtVal = sldTitWdtVALS[i];
                    sldDescELS[i].style.width = toWdtVal + 'px';
                });
                // Wywołanie kolejnej funkcji}, false);
            }, false);
        });
    },
    createSldImgStateEL: function () {
        var _this = this;
        var stateParentEL = document.querySelector('div.iscb-ib-is-group-box');
        for (var i = 0; i < this.imageAmount; i++) {
            var stateEL = document.createElement('div');
            stateEL.setAttribute('class', 'iscb-ib-is-once-box');
            stateParentEL.appendChild(stateEL);
        }
        ;
        for (var i = 0; i < this.imageAmount; i++) {
            this.stateELNodeList[i] = document.querySelectorAll('div.iscb-ib-is-once-box')[i];
            this.stateELNodeList[i].style.top = 40 + 'px';
            this.stateELNodeList[i].style.opacity = 0;
        }
        ;
        var intervIndex = 0;
        var intervFunc = setInterval(function () {
            if (intervIndex < _this.imageAmount) {
                _this.stateELNodeList[intervIndex].style.top = 0 + 'px';
                _this.stateELNodeList[intervIndex].style.opacity = 1;
                _this.stateELNodeList[intervIndex].style.transitionDuration = 0.2 + 's';
            }
            else if (intervIndex >= _this.imageAmount) {
                clearInterval(intervFunc);
            }
            intervIndex += 1;
        }, 150);
        this.positingSldEl();
    },
    positingSldEl: function () {
        var _this = this;
        ['load'].forEach(function (ev) {
            window.addEventListener(ev, function () {
                var sldTitELS = _this.returnSliderTitELS();
                var sldDescELS = _this.returnSliderDescELS();
                var sldWorkImgELS = _this.returnSliderButELS();
                _this.windowWidth = window.innerWidth;
                var siteScrollbarWidth = (window.innerWidth - document.documentElement.clientWidth + 60); // Szerokość stałego scrollbar'a strony
                if (siteScrollbarWidth === undefined || siteScrollbarWidth === null)
                    siteScrollbarWidth = 0;
                var _loop_11 = function (i) {
                    _this.imagesArray[i] = document.querySelectorAll('div.img-slider-img-dim')[i];
                    if (i === 0) { // Stały indeks pierwszaego obrazu
                        _this.imagesArray[i].style.left = 0 + 'px'; // (-) left i (+) left działają DOBRZE!
                        _this.stateELNodeList[i].style.backgroundColor = 'rgba(255,255,255,0.8)';
                        setTimeout(function () {
                            sldTitELS[i].style.top = 0 + 'px';
                            sldTitELS[i].style.opacity = 1;
                            sldTitELS[i].style.transitionDuration = 0.0 + 'px';
                            setTimeout(function () {
                                sldDescELS[i].style.top = 0 + 'px';
                                sldDescELS[i].style.opacity = 1;
                                sldDescELS[i].style.transitionDuration = 0.0 + 'px';
                                setTimeout(function () {
                                    sldWorkImgELS[i].style.top = 0 + 'px';
                                    sldWorkImgELS[i].style.opacity = 1;
                                    sldWorkImgELS[i].style.transitionDuration = 0.0 + 'px';
                                }, 200);
                            }, 200);
                        }, 400);
                        return "continue";
                    }
                    else { }
                    _this.imagesArray[i].style.left = ((_this.windowWidth - siteScrollbarWidth) * 1) + 'px';
                    _this.stateELNodeList[i].style.backgroundColor = 'rgba(200,200,200,0.6)';
                };
                for (var i = 0; i < _this.imageAmount; i++) {
                    _loop_11(i);
                }
                ;
                // Arrows animation:
                var arrowELS = [];
                arrowELS[0] = document.querySelector('div.iscb-leftArrow-proper');
                arrowELS[1] = document.querySelector('div.iscb-rightArrow-proper');
                arrowELS[0].style.left = 100 + 'px';
                arrowELS[0].style.opacity = '0';
                arrowELS[1].style.right = 100 + 'px';
                arrowELS[1].style.opacity = '0';
                setTimeout(function () {
                    arrowELS[0].style.left = 0 + 'px';
                    arrowELS[0].style.opacity = '1';
                    arrowELS[0].style.transitionDuration = 0.6 + 's';
                    arrowELS[1].style.right = 0 + 'px';
                    arrowELS[1].style.opacity = '1';
                    arrowELS[1].style.transitionDuration = 0.6 + 's';
                }, 150);
            }, false);
        });
        this.setAEL_SldMoving();
    },
    setAEL_SldMoving: function () {
        var _this = this;
        var addToLeftPx = 0;
        var sliderBut = {
            left: document.querySelector('div.iscb-leftArrow-box'),
            right: document.querySelector('div.iscb-rightArrow-box')
        };
        console.log('Aktualny obraz: ' + (this.currentImg + 1));
        this.eventsClickTable.forEach(function (ev) {
            var sldTitELS = _this.returnSliderTitELS();
            var sldDescELS = _this.returnSliderDescELS();
            var sldWorkImgELS = _this.returnSliderButELS();
            sliderBut.right.addEventListener(ev, function () {
                var imgSwitchLimit = (_this.imageAmount - 1); // Start = 0. Oper +1 = img_1 znika => img_2 pojawia się
                if (_this.currentImg < imgSwitchLimit && _this.blockadeImg === false) {
                    var siteScrollbarWidth = (window.innerWidth - document.documentElement.clientWidth + 60); // Stały pasek przewijania na stronie
                    if (siteScrollbarWidth === undefined || siteScrollbarWidth === null)
                        siteScrollbarWidth = 0;
                    // Image:
                    _this.imagesArray[_this.currentImg].style.left = ((_this.windowWidth - siteScrollbarWidth) * -1) + 'px';
                    _this.imagesArray[_this.currentImg].style.transitionDuration = 1.5 + 's';
                    // Info:
                    setTimeout(function () {
                        sldTitELS[_this.currentImg].style.top = 0 + 'px';
                        sldTitELS[_this.currentImg].style.opacity = 1;
                        sldTitELS[_this.currentImg].style.transitionDuration = 0.4 + 'px';
                        setTimeout(function () {
                            sldDescELS[_this.currentImg].style.top = 0 + 'px';
                            sldDescELS[_this.currentImg].style.opacity = 1;
                            sldDescELS[_this.currentImg].style.transitionDuration = 0.4 + 'px';
                            setTimeout(function () {
                                sldWorkImgELS[_this.currentImg].style.top = 0 + 'px';
                                sldWorkImgELS[_this.currentImg].style.opacity = 1;
                                sldWorkImgELS[_this.currentImg].style.transitionDuration = 0.4 + 'px';
                            }, 200);
                        }, 200);
                    }, 600);
                    // Counter
                    _this.currentImg += 1;
                    // Image
                    _this.imagesArray[_this.currentImg].style.left = 0 + 'px';
                    _this.imagesArray[_this.currentImg].style.transitionDuration = 1.5 + 's';
                    // Info:
                    setTimeout(function () {
                        sldTitELS[_this.currentImg - 1].style.top = -20 + 'px';
                        sldTitELS[_this.currentImg - 1].style.opacity = 0;
                        sldTitELS[_this.currentImg - 1].style.transitionDuration = 0.2 + 'px';
                        setTimeout(function () {
                            sldDescELS[_this.currentImg - 1].style.top = -20 + 'px';
                            sldDescELS[_this.currentImg - 1].style.opacity = 0;
                            sldDescELS[_this.currentImg - 1].style.transitionDuration = 0.2 + 'px';
                            setTimeout(function () {
                                sldWorkImgELS[_this.currentImg - 1].style.top = -20 + 'px';
                                sldWorkImgELS[_this.currentImg - 1].style.opacity = 0;
                                sldWorkImgELS[_this.currentImg - 1].style.transitionDuration = 0.2 + 'px';
                            }, 100);
                        }, 100);
                    }, 0);
                    // Slider status color:
                    for (var i = 0; i < _this.imageAmount; i++) {
                        if (i === _this.currentImg) {
                            _this.stateELNodeList[i].style.backgroundColor = 'rgba(255,255,255,1.0)';
                            continue;
                        }
                        else { }
                        _this.stateELNodeList[i].style.backgroundColor = 'rgba(200,200,200,0.6)';
                    }
                    ;
                    _this.blockadeImg = true;
                    setTimeout(function () {
                        _this.blockadeImg = false;
                    }, 1200); // Taka sama jak w powyższym "transitionDuration" obrazka
                    //console.log('Aktualny obraz: ' + (this.currentImg + 1));   // LEFT aktualnego obrazu
                }
                else { }
            }, false);
            sliderBut.left.addEventListener(ev, function () {
                if (_this.currentImg > 0 && _this.blockadeImg === false) {
                    var siteScrollbarWidth = (window.innerWidth - document.documentElement.clientWidth + 60);
                    if (siteScrollbarWidth === undefined || siteScrollbarWidth === null)
                        siteScrollbarWidth = 0;
                    _this.imagesArray[_this.currentImg].style.left = ((_this.windowWidth - siteScrollbarWidth) * 1) + 'px';
                    _this.imagesArray[_this.currentImg].style.transitionDuration = 1.5 + 's';
                    setTimeout(function () {
                        sldTitELS[_this.currentImg].style.top = 0 + 'px';
                        sldTitELS[_this.currentImg].style.opacity = 1;
                        sldTitELS[_this.currentImg].style.transitionDuration = 0.4 + 'px';
                        setTimeout(function () {
                            sldDescELS[_this.currentImg].style.top = 0 + 'px';
                            sldDescELS[_this.currentImg].style.opacity = 1;
                            sldDescELS[_this.currentImg].style.transitionDuration = 0.4 + 'px';
                            setTimeout(function () {
                                sldWorkImgELS[_this.currentImg].style.top = 0 + 'px';
                                sldWorkImgELS[_this.currentImg].style.opacity = 1;
                                sldWorkImgELS[_this.currentImg].style.transitionDuration = 0.4 + 'px';
                            }, 200);
                        }, 200);
                    }, 600);
                    _this.currentImg -= 1;
                    _this.imagesArray[_this.currentImg].style.left = 0 + 'px';
                    _this.imagesArray[_this.currentImg].style.transitionDuration = 1.5 + 's';
                    setTimeout(function () {
                        sldTitELS[_this.currentImg + 1].style.top = -20 + 'px';
                        sldTitELS[_this.currentImg + 1].style.opacity = 0;
                        sldTitELS[_this.currentImg + 1].style.transitionDuration = 0.2 + 'px';
                        setTimeout(function () {
                            sldDescELS[_this.currentImg + 1].style.top = -20 + 'px';
                            sldDescELS[_this.currentImg + 1].style.opacity = 0;
                            sldDescELS[_this.currentImg + 1].style.transitionDuration = 0.2 + 'px';
                            setTimeout(function () {
                                sldWorkImgELS[_this.currentImg + 1].style.top = -20 + 'px';
                                sldWorkImgELS[_this.currentImg + 1].style.opacity = 0;
                                sldWorkImgELS[_this.currentImg + 1].style.transitionDuration = 0.2 + 'px';
                            }, 100);
                        }, 100);
                    }, 0);
                    for (var i = 0; i < _this.imageAmount; i++) {
                        if (i === _this.currentImg) {
                            _this.stateELNodeList[i].style.backgroundColor = 'rgba(255,255,255,1.0)';
                            continue;
                        }
                        else { }
                        _this.stateELNodeList[i].style.backgroundColor = 'rgba(200,200,200,0.6)';
                    }
                    ;
                    _this.blockadeImg = true;
                    setTimeout(function () {
                        _this.blockadeImg = false;
                    }, 1200); // Taka sama jak w powyższym "transitionDuration" obrazka
                    //console.log('Aktualny obraz: ' + (this.currentImg + 1));   // LEFT aktualnego obrazu
                }
                else { }
            }, false);
        });
    },
    setAEL_ImgLeftResize: function () {
        var _this = this;
        this.eventsWindowTable.forEach(function (ev) {
            window.addEventListener(ev, function () {
                _this.windowWidth = innerWidth;
                var siteScrollbarWidth = (window.innerWidth - document.documentElement.clientWidth + 60);
                if (siteScrollbarWidth === undefined || siteScrollbarWidth === null)
                    siteScrollbarWidth = 0;
                for (var i = 0; i < _this.imageAmount; i++) {
                    var onceImg_CSS_Obj = window.getComputedStyle(_this.imagesArray[i], null);
                    var onceImg_CSS_Str = onceImg_CSS_Obj.getPropertyValue('left');
                    onceImg_CSS_Str = onceImg_CSS_Str.slice(0, -2);
                    var onceImg_CSS_Num = Number(onceImg_CSS_Str);
                    //console.log('Obraz ' + (i + 1) + ': "left" = ' + onceImg_CSS_Num);   // LEFT po RESISE aktualnego obrazu
                    if (onceImg_CSS_Num > 0) { // right
                        _this.imagesArray[i].style.left = ((_this.windowWidth - siteScrollbarWidth) * 1) + 'px';
                        _this.imagesArray[i].style.transitionDuration = 0.0 + 's';
                    }
                    else if (onceImg_CSS_Num === 0) { // center
                        continue;
                    }
                    else if (onceImg_CSS_Num < 0) { // left
                        _this.imagesArray[i].style.left = ((_this.windowWidth - siteScrollbarWidth) * -1) + 'px';
                        _this.imagesArray[i].style.transitionDuration = 0.0 + 's';
                    }
                }
                ;
            }, false);
        });
    }
};
slider_Obj.createSldELS();
slider_Obj.setAEL_ImgLeftResize();
