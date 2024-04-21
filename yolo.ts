const page_OBJ: {
    setPage: Function
} = {
    setPage(): void {
        let header: HTMLDivElement = document.querySelector('div.header');
        let video_EL: HTMLDivElement = document.querySelector('section.page-menu');
        //addEventListener('load', () => {
            const DESKTOP_navbar: HTMLDivElement = document.querySelector('nav.navbar-desktop');
            DESKTOP_navbar.style.top = window.innerHeight + "px";
            DESKTOP_navbar.style.transitionDuration = 0.0 + "s";
        //}, false);
        ['load', 'resize'].forEach((ev) => {
            window.addEventListener(ev, () => {
                let pageHeight: string = String(window.innerHeight);
                header.style.height = pageHeight + 'px';
                video_EL.style.height = pageHeight + 'px';
            }, false);
        });
    }
};
page_OBJ.setPage();



const pageMain_VIDEO: {
    video: HTMLVideoElement
} = {
    video: document.querySelector('video.pm-video-background')
};



const pageIntro_OBJ: {
    active_AEL: Function,
    DESKTOP_contentCol_AR: any[]
} = {
    DESKTOP_contentCol_AR: [],
    active_AEL() {
        if (window.innerWidth < 1130) {
            //
        } else if (window.innerWidth >= 1130) {
            // Desktop navbar:
            const DESKTOP_navbar: HTMLDivElement = document.querySelector('nav.navbar-desktop');
            // Desktop content:
            const DESKTOP_contentCol_Length: number = document.querySelectorAll('div.dsk-content-col').length;
            setTimeout(() => {
                DESKTOP_navbar.style.top = 0 + "px";
                DESKTOP_navbar.style.transitionDuration = 0.75 + "s";
                for (let i: number = 0; i < DESKTOP_contentCol_Length; i++) {
                    this.DESKTOP_contentCol_AR[i] = document.querySelectorAll('div.dsk-content-col')[i];
                };
                setTimeout(() => {
                    pageMain_VIDEO.video.play();
                    const header_EL: HTMLDivElement = document.querySelector('div.header');
                    header_EL.style.backgroundColor = "transparent";
                    document.getElementById('dskNavIc0').style.color = 'hsl(215, 100%, 59%)';
                    // Show:
                    const dealy_show_AR: number[] = [900, 600, 300, 0];
                    for (let i: number = 0; i <= 3; i++) {
                        setTimeout(() => {
                            this.DESKTOP_contentCol_AR[i].style.width = 0 + '%';
                            this.DESKTOP_contentCol_AR[i].style.transitionDuration = 1 + 's';
                        }, dealy_show_AR[i]);
                    };
                }, 900);
            }, 200);
        }
    }
};



// RESTRYKCJA z auto-odtwarzaniem wideo tak jak w przypadku odtwarzania muzyki od razu:
const cookie_OBJ: {
    accept: Function,
    about: Function
} = {
    accept() {
        const accept_EL: HTMLDivElement = document.querySelector('div.cookie-accept');
        ['click', 'touchend'].forEach((ev) => {
            accept_EL.addEventListener(ev, () => {
                accept_EL.parentElement.style.display = 'none';
                pageIntro_OBJ.active_AEL();
            }, false);
        });
    },
    about() {
        const about_EL: HTMLDivElement = document.querySelector('div.cookie-about');
        ['click', 'touchend'].forEach((ev) => {
            about_EL.addEventListener(ev, () => {
                window.location.href = 'https://cookieinformation.com/what-is-a-cookie/';
            }, false);
        });
    }
};
cookie_OBJ.accept();
cookie_OBJ.about();



const navMob_dropdownButton_OBJ: {
    action: Function,
    isEnable: boolean
} = {
    isEnable: false,
    action(): void {
        const button: HTMLDivElement = document.querySelector('div.nav-mob-dropdown-button');
        const target: HTMLDivElement = document.querySelector('div.nav-mob-dropdown-target');
        const strip_AR: any[] = [];
        for (let i: number = 0; i < 3; i++) {
            strip_AR[i] = document.querySelectorAll('div.nav-mob-dropdown-strip')[i];
        };
        const iconTitle_AR: any[] = [];
        const iconTitles_Length: number = document.querySelectorAll('div.nav-mov-dropdown-item-title').length;
        for (let i: number = 0; i < iconTitles_Length; i++) {
            iconTitle_AR[i] = document.querySelectorAll('div.nav-mov-dropdown-item-title')[i];
        };
        ['click', 'touchend'].forEach((ev) => {
            button.addEventListener(ev, () => {
                if (this.isEnable === false) {   // Show target:
                    // Switch:
                    setTimeout(() => this.isEnable = true, 800);
                    // Target:
                    button.style.backgroundImage = "linear-gradient(to bottom left, hsl(215, 90%, 35%), hsl(215, 100%, 49%), hsl(215, 90%, 67%))";
                    button.style.transitionDuration = 0.3 + "s";
                    target.style.height = 265 + "px";
                    target.style.transitionDuration = 0.3 + "s";
                    setTimeout(() => {
                        target.style.width = 250 + "px";
                        target.style.transitionDuration = 0.3 + "s";
                        for (let i: number = 0; i < iconTitles_Length; i++) {
                            iconTitle_AR[i].style.width = 190 + "px";
                            iconTitle_AR[i].style.opacity = 1.0;
                            iconTitle_AR[i].style.transitionDuration = 0.3 + "s";
                        };
                    }, 300);
                    // Strips:
                    strip_AR[1].style.width = 0 + "px";
                    strip_AR[1].style.transitionDuration = 0.15 + "s";
                    strip_AR[0].style.transform = "rotate(45deg)";
                    strip_AR[0].style.transitionDuration = 0.3 + "s";
                    strip_AR[2].style.transform = "rotate(-45deg)";
                    strip_AR[2].style.transitionDuration = 0.3 + "s";
                    for (let i: number = 0; i < iconTitles_Length; i++) {
                        strip_AR[i].style.background = 'white';
                        strip_AR[i].style.transitionDuration = 0.3 + "s";
                    };
                } else if (this.isEnable === true) {  // Hide target:
                    // Switch:
                    setTimeout(() => this.isEnable = false, 800);
                    // Target:
                        button.style.backgroundImage = "linear-gradient(to bottom right, rgb(50,50,50), rgb(50,50,50))";
                        button.style.transitionDuration = 0.3 + "s";
                        target.style.width = 60 + "px";
                        target.style.transitionDuration = 0.3 + "s";
                        for (let i: number = 0; i < iconTitles_Length; i++) {
                            iconTitle_AR[i].style.width = 0 + "px";
                            iconTitle_AR[i].style.opacity = 0.0;
                            iconTitle_AR[i].style.transitionDuration = 0.3 + "s";
                        };
                    setTimeout(() => {
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
                    for (let i: number = 0; i < iconTitles_Length; i++) {
                        strip_AR[i].style.background = '#BBB';
                        strip_AR[i].style.transitionDuration = 0.3 + "s";
                    };
                }
            }, false);
        });
    },
};
navMob_dropdownButton_OBJ.action();



const navDesk_dropdownButton_OBJ: {
    getPages_AR: Function,
    action: Function,
    currentPage: number,
    activeChange: boolean
} = {
    currentPage: 0,
    activeChange: true,
    getPages_AR(): any[] {
        const pages_AR: any[] = [];
        const pagesNum: number = document.querySelectorAll('div.nav-dsk-dropdown-item-icon').length;
        for (let i: number = 0; i < pagesNum; i++) {
            pages_AR[i] = document.querySelectorAll('section.page')[i];
            if (this.currentPage === i) {
                // nothing
            } else if (this.currentPage !== i) {
                pages_AR[i].style.display = 'none';
            }
        };
        return pages_AR;
    },
    action () {   // WEŹ TWORZENIE TABLIC Z ELEMENTAMI DO OSOBNEJ METODY Z RETURN I PODZIEL POSZCZEGÓLNE CZĘŚCI TEJ FUNKCJI NA OSOBNE:
        const dropdownButton_AR: any[] = [];
        const dropdownTitle_AR: any[] = [];
        const ballTop_AR: number[] = [];
        const topMenuIcon_AR: any[] = [];
        const icon_AR: any[] = [];
        let toBallTopARvalInc: number = 10.5;   /*15 - (9 / 2)*/
        const dropdownButtons_Length: number = document.querySelectorAll('div.nav-dsk-dropdown-item').length;
        const dropdownButtonsGroup_EL: any = document.querySelector('div.top-nav-buttons-group');
        const ball_EL: any = document.querySelector('div.nav-dsk-choose-ball');
        for (let i: number = 0; i < dropdownButtons_Length; i++) {
            ballTop_AR[i] = toBallTopARvalInc;
            toBallTopARvalInc += 45;
        };
        for (let i: number = 0; i < dropdownButtons_Length; i++) {
            dropdownButton_AR[i] = document.querySelectorAll('div.nav-dsk-dropdown-item')[i];
            dropdownTitle_AR[i] = document.querySelectorAll('div.nav-dsk-dropdown-title-item')[i];
            topMenuIcon_AR[i] = document.querySelectorAll('div.nav-dsk-dropdown-item-icon')[i];
            icon_AR[i] = document.getElementById('dskNavIc' + String(i));
            dropdownButton_AR[i].addEventListener('mouseover', (e) => {
                const element: HTMLDivElement = e.currentTarget;
                const element_ID: number = Number(element.id);
                for (let i: number = 0; i < dropdownButtons_Length; i++) {
                    if (element_ID === i) {   // Slide ON:
                        dropdownTitle_AR[i].style.width = "auto";   /*130px*/
                        dropdownTitle_AR[i].style.padding = "0px 17px";
                        dropdownTitle_AR[i].style.transitionDuration = 0.3 + "s";
                        ball_EL.style.top = ballTop_AR[i] + "px";
                        ball_EL.style.left = 40 + "%";
                        ball_EL.style.transitionDuration = 0.3 + "s";
                        topMenuIcon_AR[i].style.left = 20 + "px";
                        topMenuIcon_AR[i].style.transitionDuration = 0.3 + "s";
                        if (this.currentPage !== element_ID) {
                            icon_AR[i].style.color = "white";
                            icon_AR[i].style.transitionDuration = 0.2 + "s";
                        } else {}
                    } else if (element_ID !== i) {   // Slide OFF:
                        dropdownTitle_AR[i].style.width = 0 + "%";
                        dropdownTitle_AR[i].style.padding = "0px";
                        dropdownTitle_AR[i].style.transitionDuration = 0.3 + "s";
                        topMenuIcon_AR[i].style.left = 0 + "px";
                        topMenuIcon_AR[i].style.transitionDuration = 0.3 + "s";
                        if (this.currentPage !== i) {
                            icon_AR[i].style.color = "#888";
                            icon_AR[i].style.transitionDuration = 0.2 + "s";
                        } else {}
                    }
                };
            }, false);
            dropdownButtonsGroup_EL.addEventListener('mouseout', (e) => {
                const element: HTMLDivElement = e.currentTarget;
                const element_ID: number = Number(element.id);
                for (let i: number = 0; i < dropdownButtons_Length; i++) {
                    dropdownTitle_AR[i].style.width = 0 + "%";
                    dropdownTitle_AR[i].style.padding = "0px";
                    dropdownTitle_AR[i].style.transitionDuration = 0.3 + "s";
                    ball_EL.style.left = 0 + "%";
                    ball_EL.style.transitionDuration = 0.3 + "s";
                    topMenuIcon_AR[i].style.left = 0 + "px";
                    topMenuIcon_AR[i].style.transitionDuration = 0.3 + "s";
                    if (this.currentPage === i) {
                        icon_AR[i].style.color = "hsl(215, 100%, 49%)";
                        icon_AR[i].style.transitionDuration = 0.2 + "s";
                    } else if (this.currentPage !== i) {
                        icon_AR[i].style.color = "#888";
                        icon_AR[i].style.transitionDuration = 0.2 + "s";
                    }
                };
            }, false);
            dropdownButton_AR[i].addEventListener('click', (e) => {
                if (this.activeChange === true) {
                    this.activeChange = false;
                    setTimeout(() => this.activeChange = true, 2000);
                    const element: HTMLDivElement = e.currentTarget;
                    const element_ID: number = Number(element.id);
                    const pages_AR: any[] = this.getPages_AR();   // pages
                    for (let i: number = 0; i < dropdownButtons_Length; i++) {
                        this.currentPage = element_ID;
                        if (element_ID === i) {
                            icon_AR[i].style.color = "hsl(215, 100%, 49%)";
                            icon_AR[i].style.transitionDuration = 0.2 + "s";
                            // Hide:
                            const dealy_hide_AR: number[] = [0, 0, 0, 0];   /*OLD: 0, 300, 600, 900*/
                            for (let i: number = 0; i <= 3; i++) {
                                setTimeout(() => {
                                    pageIntro_OBJ.DESKTOP_contentCol_AR[i].style.width = 25 + '%';
                                    pageIntro_OBJ.DESKTOP_contentCol_AR[i].style.transitionDuration = 0.8 + 's';   /*OLD: 1*/
                                }, dealy_hide_AR[i]);
                            };
                            // Show:
                            setTimeout(() => {
                                pages_AR[i].style.display = 'flex';
                                const dealy_show_AR: number[] = [0, 0, 0, 0];   /*OLD: 900, 600, 300, 0*/
                                for (let i: number = 0; i <= 3; i++) {
                                    setTimeout(() => {
                                        pageIntro_OBJ.DESKTOP_contentCol_AR[i].style.width = 0 + '%';
                                        pageIntro_OBJ.DESKTOP_contentCol_AR[i].style.transitionDuration = 0.8 + 's';   /*OLD: 1*/
                                    }, dealy_show_AR[i]);
                                };
                            }, 1000);   /*OLD: 1300*/
                        } else if (element_ID !== i) {
                            icon_AR[i].style.color = "#888";
                            icon_AR[i].style.transitionDuration = 0.2 + "s";
                            setTimeout(() => {
                                pages_AR[i].style.display = 'none';
                            }, 1000);   /*OLD: 1300*/
                        }
                    };
                    console.log(element_ID);
                } else {}
            }, false);
        };
    }
};
navDesk_dropdownButton_OBJ.action();
navDesk_dropdownButton_OBJ.getPages_AR();



const pageTransforms_OBJ: {
    transform_AEL: Function,
    getElements: Function,
    pageWidth: number,
    isMobile: boolean,
    isDesktop: boolean
} = {
    isMobile: false,
    isDesktop: false,
    pageWidth: 0,
    getElements(): (HTMLDivElement | HTMLVideoElement)[] {
        const video_EL: HTMLVideoElement = document.querySelector('video.pm-video-background');
        return [video_EL];
    },
    transform_AEL() {
        ['load', 'resize'].forEach((ev) => {
            window.addEventListener(ev, () => {
                this.pageWidth = window.innerWidth;
                if (this.pageWidth < 1130 && this.isMobile === false) {   /// Boolean'y są tutaj zabezpieczeniem przed niechcianym powtarzaniem się wywoływania funkcji:
                    // MOBILE
                    this.isMobile = true;
                    this.isDesktop = false;
                    const elements: HTMLVideoElement = this.getElements();
                    const video_EL = elements[0];
                    video_EL.style.display = 'none';
                    video_EL.pause();
                } else if (this.pageWidth >= 1130 && this.isDesktop === false) {
                    // DESKTOP
                    this.isDesktop = true;
                    this.isMobile = false;
                    const elements: HTMLVideoElement = this.getElements();
                    const video_EL = elements[0];
                    video_EL.style.display = 'flex';
                    video_EL.currentTime = 0;
                    video_EL.play();
                }
            }, false);
        });
    }
};
pageTransforms_OBJ.transform_AEL();



const pages_OBJ: {
    page_Purpose_Books: Function,
    page_Idea_Buttons: Function
} = {
    page_Purpose_Books(): void {
        const actionWorld_EL: HTMLDivElement = document.querySelector('div.pw-action-world-proper');
        const blinkLine: HTMLDivElement = document.querySelector('div.pw-action-world-proper-line');
        let word_DB: string[] = [
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
        let i: number = 0;
        let intervalLoop: number = 5000;
        let keyTap: number = 75;
        setInterval(() => {   // Writing and backspacing animation:
            
            // Backspacing word:
            let clerVal: string = actionWorld_EL.textContent;
            let rest: number = 300;
            const subIntervalDur_AR: number = (clerVal.length * keyTap) + rest;
            let clearingText: string = '';
            for (let i: number = 0; i < clerVal.length; i++) {
                clearingText += clerVal.charAt(i);
            };
            let k = 0;
            let decreaseVal = clearingText;
            setInterval(() => {
                if (k >= clerVal.length) {}
                else if (k < clerVal.length) {
                    decreaseVal = clearingText.slice(0, clerVal.length - (k + 1));
                    actionWorld_EL.textContent = decreaseVal;
                    blinkLine.style.visibility = 'visible';
                }
                k += 1;
            }, keyTap);

            // Writing word:
            let val: string = word_DB[i];
            const letter_AR: string[] = [];
            for (let i: number = 0; i < val.length; i++) {
                letter_AR[i] = val.charAt(i);
            };
            let j: number = 0;
            let growingText: string = '';
            setTimeout(() => {
                setInterval(() => {
                    if (j >= letter_AR.length) {} 
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
        let isVisible: boolean = true;
        setInterval(() => {
            if (isVisible === true) {
                isVisible = false;
                blinkLine.style.visibility = 'hidden';
            } else {
                isVisible = true;
                blinkLine.style.visibility = 'visible';
            }
        }, 500);
    },
    page_Idea_Buttons(): void {
        const buttons_AR: NodeListOf<HTMLDivElement> = document.querySelectorAll('.intro-buttons-group .button');
        const cube_EL: HTMLDivElement = document.querySelector('.cube');
        const textBlock_AR: NodeListOf<HTMLDivElement> = document.querySelectorAll('.face div div');
        //console.log(textBlock_AR);
        let element: HTMLDivElement = null;
        let id: string;
        let prevSibling: (Element | null) = null;
        let prevPrevSibling: (Element | null) = null;
        let nextSibling: (Element | null) = null;
        let nextNextSibling: (Element | null) = null;
        buttons_AR.forEach(button => {
            button.addEventListener('mouseover', (ev: MouseEvent) => {
                element = ev.target as HTMLDivElement;
                prevSibling = element.previousElementSibling;
                prevPrevSibling = prevSibling?.previousElementSibling;
                nextSibling = element.nextElementSibling;
                nextNextSibling = nextSibling?.nextElementSibling;
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
            button.addEventListener('mouseout', () => {
                for (let i: number = 0; i < buttons_AR.length; i++) {
                    buttons_AR[i].className = "button";
                }
            }, false);
            button.addEventListener('click', (ev: MouseEvent) => {
                element = ev.target as HTMLDivElement;
                id = element.id;
                switch (id) {
                    case "2":
                        cube_EL.style.transform = "rotate3d(0,-1,0, 90deg)";
                        for (let i = 0; i < textBlock_AR.length; i++) {
                            if (i === Number(id)) {
                                setTimeout(() => {
                                    textBlock_AR[i].style.color = "rgba(255,255,255,1.0)";
                                }, 500);
                            } else {
                                textBlock_AR[i].style.color = "rgba(255,255,255,0.0)";
                            }
                        }
                        break;
                    case "4":
                        cube_EL.style.transform = "rotate3d(-1,0,0, 90deg)";
                        for (let i = 0; i < textBlock_AR.length; i++) {
                            if (i === Number(id)) {
                                setTimeout(() => {
                                    textBlock_AR[i].style.color = "rgba(255,255,255,1.0)";
                                }, 500);
                            } else {
                                textBlock_AR[i].style.color = "rgba(255,255,255,0.0)";
                            }
                        }
                        break;
                    case "1":
                        cube_EL.style.transform = "rotate3d(0,-1,0, 180deg)";
                        for (let i = 0; i < textBlock_AR.length; i++) {
                            if (i === Number(id)) {
                                setTimeout(() => {
                                    textBlock_AR[i].style.color = "rgba(255,255,255,1.0)";
                                }, 500);
                            } else {
                                textBlock_AR[i].style.color = "rgba(255,255,255,0.0)";
                            }
                        }
                        break;
                    case "5":
                        cube_EL.style.transform = "rotate3d(1,0,0, 90deg)";
                        for (let i = 0; i < textBlock_AR.length; i++) {
                            if (i === Number(id)) {
                                setTimeout(() => {
                                    textBlock_AR[i].style.color = "rgba(255,255,255,1.0)";
                                }, 500);
                            } else {
                                textBlock_AR[i].style.color = "rgba(255,255,255,0.0)";
                            }
                        }
                        break;
                    case "0":
                        cube_EL.style.transform = "rotate3d(0,0,0,0deg)";
                        for (let i = 0; i < textBlock_AR.length; i++) {
                            if (i === Number(id)) {
                                setTimeout(() => {
                                    textBlock_AR[i].style.color = "rgba(255,255,255,1.0)";
                                }, 500);
                            } else {
                                textBlock_AR[i].style.color = "rgba(255,255,255,0.0)";
                            }
                        }
                        break;
                    case "3":
                        cube_EL.style.transform = "rotate3d(0,-1,0, 270deg)";
                        for (let i = 0; i < textBlock_AR.length; i++) {
                            if (i === Number(id)) {
                                setTimeout(() => {
                                    textBlock_AR[i].style.color = "rgba(255,255,255,1.0)";
                                }, 500);
                                textBlock_AR[i].style.color = "rgba(255,255,255,0.0)";
                            }
                        }
                        break;
                }
            }, false);
        });
    }
};
pages_OBJ.page_Purpose_Books();
pages_OBJ.page_Idea_Buttons();









const RWD_info_Obj: {
    phone: number,
    desktop: number
    //sliderDescExtraWidthValFunc: Function
} = {
    phone: 0,
    desktop: 900,
    //sliderDescExtraWidthValFunc
};

const slider_Obj: {
    windowHeight: number,
    windowWidth: number,
    imageAmount: number,
    currentImg: number,
    sliderDescExtraWidth: number,
    blockadeImg: boolean,
    eventsWindowTable: string[],
    eventsClickTable: string[],
    imagesArray: HTMLDivElement[],
    stateELNodeList: HTMLDivElement[],
    //setWinBdHeight: Function,
    createSldELS: Function,
    returnSliderTitELS: Function,
    returnSliderDescELS: Function,
    returnSliderButELS: Function,
    setSliderDescWidthAEL: Function,
    createSldImgStateEL: Function,
    setAEL_SldMoving: Function,
    setAEL_ImgLeftResize: Function,
    positingSldEl: Function
} = {
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    imageAmount: 6,   // RUCHOMA WARTOŚĆ - wartość jest równoważna z ilością zdjęć do image slidera
    currentImg: 0,
    sliderDescExtraWidth: 0,
    blockadeImg: false,
    eventsWindowTable: ['load', 'resize'],
    eventsClickTable: ['click', 'touchend'],
    imagesArray: [],
    stateELNodeList: [],
    createSldELS(): void {
        const sliderParentBox: HTMLDivElement = document.querySelector('div.img-slider-body');
        const sldTitTxt: string[] = [
            '1. Podział obrazu na siatkę',
            '2. Szukanie obiektów',
            '3. Przewidywanie obiektów',
            '4. Klasyfikacja obiektów',
            '5. Dokładne dopasowanie',
            '6. Określenie wyniku i jego prezentacja'
        ];
        const sldDscTxt: string[] = [
            'Pierwszym etapem działania algorytmu YOLO jest podział obrazu na siatkę. Etap ten ma kluczowe znaczenie dla skuteczności detekcji obiektów. Proces podziału obrazu na siatkę polega na dzieleniu jego obszaru na mniejsze kwadratowe lub prostokątne obszary o jednakowych rozmiarach. Liczba podziałów może być dostosowana zależnie od wymagań detekcji i rozdzielczości obrazu. Każdy z tych obszarów jest następnie analizowany przez sieć neuronową, aby określić, czy w danym fragmencie znajduje się jakiś obiekt. Dzięki dzieleniu obrazu na siatkę algorytm może dokładniej analizować obrazy na poziomie pikseli, co umożliwia bardziej precyzyjną detekcję i lokalizację obiektów.',
            'W tym etapie algorytm YOLO przystępuje do analizy każdej komórki siatki w celu wykrycia obiektów znajdujących się w jej obszarze. Każda komórka jest traktowana jako potencjalne miejsce wystąpienia obiektu. Algorytm ocenia, czy w danej komórce znajduje się obiekt, oraz próbuje określić jego lokalizację i klasę. Proces ten opiera się na wielu krokach. Najpierw, dla każdej komórki, algorytm sprawdza, czy w jej obszarze znajduje się obiekt poprzez analizę cech obrazu. Następnie, jeśli obiekt zostanie wykryty, algorytm próbuje precyzyjnie określić jego lokalizację poprzez przewidywanie współrzędnych prostokąta ograniczającego ("bounding box") wokół obiektu.',
            'W tej fazie, algorytm YOLO przewiduje lokalizację i rozmiar prostokątnych ramek ograniczających dla wykrytych obiektów. Każda ramka jest opisana za pomocą zestawu parametrów, takich jak współrzędne środka, wysokość i szerokość szukanego obiektu. Głównym celem algorytmu w tym etapie jest jak najdokładniejsze przewidywanie położenia obiektu na obrazie. W tym celu algorytm wykorzystuje informacje z poprzedniego etapu, w którym zostały wykryte obiekty.',
            'Po wykryciu obiektów i określeniu ich lokalizacji, algorytm dokonuje klasyfikacji każdego z nich, identyfikując do jakiej klasy (np. pies, samochód, itp.) należy dany obiekt. Ten etap polega na przypisaniu etykiet (klas) do wykrytych obiektów na podstawie ich cech i kontekstu. Algorytm używa wcześniej wyuczonych modeli klasyfikacyjnych, które potrafią rozpoznawać różne typy obiektów na obrazach. Podczas klasyfikacji, algorytm bierze pod uwagę cechy charakterystyczne obiektów, takie jak kształt, tekstura, kontekst otaczających pikseli, itp. Na podstawie tych cech, model klasyfikacyjny podejmuje decyzję, do której klasy należy dany obiekt. Określenie klas dla wykrytych obiektów jest kluczowe dla dokładnego określenia ramek ograniczających.',
            'Algorytm YOLO dokonuje dokładnego dopasowania ramki ograniczającej do obiektu, minimalizując błędy lokalizacji i dopasowując ramkę do konturów obiektu. W celu osiągnięcia dokładnego dopasowania, algorytm YOLO stosuje różne mechanizmy, aby zoptymalizować precyzję lokalizacji obiektów. Jednym z kluczowych mechanizmów jest próg Intersection over Union (IOU), który pomaga w ocenie, jak dobrze ramka ograniczająca pokrywa się z rzeczywistym obiektem na obrazie. Algorytm wykorzystuje IOU do porównania współrzędnych ramki ograniczającej z rzeczywistym położeniem obiektu. Jeśli wartość IOU przekroczy określony próg, uznaje się, że ramka poprawnie dopasowuje się do obiektu. W przeciwnym razie, detekcja może zostać odrzucona jako fałszywa. Poprzez zastosowanie mechanizmów takich jak IOU, algorytm YOLO może minimalizować błędy lokalizacji i zapewnić dokładne dopasowanie ramki ograniczającej do rzeczywistego obiektu na obrazie. To kluczowe dla dalszych operacji przetwarzania obrazu i zapewnienia wysokiej jakości detekcji obiektów.',
            'Na koniec, gdy algorytm określi wymiary części obiektu znajdujące się w określonych kierunkach od środka (jego wykrycia), poszczególne jego elementy (ramki ograniczające) tego obiektu nakładają się na siebie w celu określenia pozycji i formy całego obiektu. Następnie algorytm prezentuje wyniki detekcji, będące ramką ograniczającą z etykietą dla każdego z wykrytych obiektów. Prezentacja wyników umożliwia użytkownikowi łatwe zrozumienie, które obiekty zostały wykryte i zidentyfikowane przez algorytm.'
        ];
        const sldTitTN: Text[] = [];
        const sldDscTN: Text[] = [];
        for (let i = 0; i < this.imageAmount; i++) {
            sldTitTN[i] = document.createTextNode(sldTitTxt[i]);
            sldDscTN[i] = document.createTextNode(sldDscTxt[i]);
        };
        for (let i = 0; i < this.imageAmount; i++) {
            const sldDimEl: HTMLDivElement = document.createElement('div');
            const sldPrpEl: HTMLImageElement = document.createElement('img');
            const sldInfEL: HTMLDivElement = document.createElement('div');
            const sldInfHngEl: HTMLDivElement = document.createElement('div');
            const sldTitEL: HTMLDivElement = document.createElement('div');
            const sldDscEL: HTMLDivElement = document.createElement('div');
            const sldWorkImgEL: HTMLDivElement = document.createElement('img');
            sldDimEl.setAttribute('class', 'img-slider-img-dim');
            sldPrpEl.setAttribute('class', 'img-slider-img-prp');
            sldInfEL.setAttribute('class', 'img-slider-info-box');
            sldInfHngEl.setAttribute('class', 'img-slider-info-box-hanger');
            sldTitEL.setAttribute('class', 'img-slider-title');
            sldDscEL.setAttribute('class', 'img-slider-description');
            sldWorkImgEL.setAttribute('class', 'img-slider-workimage');
            sldWorkImgEL.setAttribute('src', 'image/work-' + (i + 1) + '.png');  // Mały obrazek!
            sldPrpEl.setAttribute('src', 'image/YOLO-' + (i + 1) + '.jpg');
            sldPrpEl.setAttribute('alt', sldTitTxt[i])
            sldDimEl.appendChild(sldPrpEl);
            sldTitEL.appendChild(sldTitTN[i]);
            sldInfHngEl.appendChild(sldTitEL);
            sldDscEL.appendChild(sldDscTN[i]);
            sldInfHngEl.appendChild(sldDscEL);
            sldInfHngEl.appendChild(sldWorkImgEL);
            sldInfEL.appendChild(sldInfHngEl);
            sldDimEl.appendChild(sldInfEL);
            sliderParentBox.appendChild(sldDimEl);
        };
        // First img animation:
        let el: any = document.querySelectorAll('img.img-slider-img-prp')[0];
        el.style.height = 115 + '%';
        el.style.filter = 'brightness(100%)';
        setTimeout(() => {
            el.style.height = 100 + '%';
            el.style.filter = 'brightness(30%)';
            el.style.transitionDuration = 1.4 + 's';
        }, 100);
        //console.table(this.imagesArray);
        slider_Obj.setSliderDescWidthAEL();
        slider_Obj.createSldImgStateEL();
    },
    returnSliderTitELS() {
        const sldTitELS: any[] = [];
        for (let i = 0; i < this.imageAmount; i++) {
            sldTitELS[i] = document.querySelectorAll('div.img-slider-title')[i];
        };
        return sldTitELS;
    },
    returnSliderDescELS() {
        const sldDescELS: any[] = [];
        for (let i = 0; i < this.imageAmount; i++) {
            sldDescELS[i] = document.querySelectorAll('div.img-slider-description')[i];
        };
        return sldDescELS;
    },
    returnSliderButELS() {
        const sldButELS: any[] = [];
        for (let i = 0; i < this.imageAmount; i++) {
            sldButELS[i] = document.querySelectorAll('img.img-slider-workimage')[i];
        };
        return sldButELS;
    },
    setSliderDescWidthAEL(): void {
        slider_Obj.eventsWindowTable.forEach((ev) => {
            window.addEventListener(ev, () => {
                // Ustawienie szerokości bloku opisu, względem szerkości bloku tytułowego slidera (+ ~100px)
                const sldDescELS: any[] = this.returnSliderDescELS();
                const sldTitELS: any[] = this.returnSliderTitELS();
                //console.log(sldDescELS);
                const sldTitWdtVALS: any[] = [];
                for (let i = 0; i < this.imageAmount; i++) {
                    const sldTitWdtVALS_CSS_Obj: CSSStyleDeclaration = window.getComputedStyle(sldTitELS[i], null);
                    let sldTitWdtVALS_CSS_Val_Str: string = sldTitWdtVALS_CSS_Obj.getPropertyValue('width');
                    let sldTitWdtVALS_CSS_Val_Num: number = Number(sldTitWdtVALS_CSS_Val_Str.slice(0, -2));
                    sldTitWdtVALS[i] = sldTitWdtVALS_CSS_Val_Num;
                };
                if (window.innerWidth < RWD_info_Obj.desktop) {
                    this.extraWdt = 0;
                } else if (window.innerWidth >= RWD_info_Obj.desktop) {
                    this.extraWdt = 150;
                    //console.log(this.extraWdt);   // ! --> IMPORTANT CONSOLLOG <-- !
                }
                if (window.innerWidth )
                sldTitWdtVALS.map((value, i) => {   // Modyfikowanie wartości szerokości
                    sldTitWdtVALS[i] = value + this.extraWdt;
                });
                sldDescELS.forEach((value, i) => {   // Ustawianie szerokości dla każdego elementu
                    let toWdtVal = sldTitWdtVALS[i];
                    sldDescELS[i].style.width = toWdtVal + 'px';
                });
                // Wywołanie kolejnej funkcji}, false);
            }, false);
        });
    },
    createSldImgStateEL(): void {
        const stateParentEL: HTMLDivElement = document.querySelector('div.iscb-ib-is-group-box');
        for (let i = 0; i < this.imageAmount; i++) {
            const stateEL: HTMLDivElement = document.createElement('div');
            stateEL.setAttribute('class', 'iscb-ib-is-once-box');
            stateParentEL.appendChild(stateEL);
        };
        for (let i = 0; i < this.imageAmount; i++) {
            this.stateELNodeList[i] = document.querySelectorAll('div.iscb-ib-is-once-box')[i];
            this.stateELNodeList[i].style.top = 40 + 'px';
            this.stateELNodeList[i].style.opacity = 0;
        };
        let intervIndex: number = 0;
        let intervFunc = setInterval(() => {
            if (intervIndex < this.imageAmount) {
                this.stateELNodeList[intervIndex].style.top = 0 + 'px';
                this.stateELNodeList[intervIndex].style.opacity = 1;
                this.stateELNodeList[intervIndex].style.transitionDuration = 0.2 + 's';
            } else if (intervIndex >= this.imageAmount) {
                clearInterval(intervFunc);
            }
            intervIndex += 1;
        }, 150);

        this.positingSldEl();
    },
    positingSldEl(): void {
        ['load'].forEach((ev) => {   // UWAGA! MEGA WAŻNE! Jeżeli skończyłeś funkcję "resize" właściwośći "left"/"right", usuń stąd zdarzenie "resize", a zostaw samo "load"
            window.addEventListener(ev, () => {
                const sldTitELS: any[] = this.returnSliderTitELS();
                const sldDescELS: any[] = this.returnSliderDescELS();
                const sldWorkImgELS: any[] = this.returnSliderButELS();
                this.windowWidth = window.innerWidth;
                let siteScrollbarWidth: number = (window.innerWidth - document.documentElement.clientWidth + 60);   // Szerokość stałego scrollbar'a strony
                if (siteScrollbarWidth === undefined || siteScrollbarWidth === null) siteScrollbarWidth = 0;
                for (let i = 0; i < this.imageAmount; i++) {
                    this.imagesArray[i] = document.querySelectorAll('div.img-slider-img-dim')[i];
                    if (i === 0) {   // Stały indeks pierwszaego obrazu
                        this.imagesArray[i].style.left = 0 + 'px';   // (-) left i (+) left działają DOBRZE!
                        this.stateELNodeList[i].style.backgroundColor = 'rgba(255,255,255,0.8)';
                        setTimeout(() => {
                            sldTitELS[i].style.top = 0 + 'px';
                            sldTitELS[i].style.opacity = 1; 
                            sldTitELS[i].style.transitionDuration = 0.0 + 'px';
                            setTimeout(() => {
                                sldDescELS[i].style.top = 0 + 'px';
                                sldDescELS[i].style.opacity = 1; 
                                sldDescELS[i].style.transitionDuration = 0.0 + 'px';
                                setTimeout(() => {
                                    sldWorkImgELS[i].style.top = 0 + 'px';
                                    sldWorkImgELS[i].style.opacity = 1; 
                                    sldWorkImgELS[i].style.transitionDuration = 0.0 + 'px';
                                }, 200);
                            }, 200);
                        }, 400);
                        continue;
                    } else {}
                    this.imagesArray[i].style.left = ((this.windowWidth - siteScrollbarWidth) * 1) + 'px';
                    this.stateELNodeList[i].style.backgroundColor = 'rgba(200,200,200,0.6)';
                };
                // Arrows animation:
                const arrowELS: HTMLDivElement[] = [];
                arrowELS[0] = document.querySelector('div.iscb-leftArrow-proper');
                arrowELS[1] = document.querySelector('div.iscb-rightArrow-proper');
                arrowELS[0].style.left = 100 + 'px';
                arrowELS[0].style.opacity = '0';
                arrowELS[1].style.right = 100 + 'px';
                arrowELS[1].style.opacity = '0';
                setTimeout(() => {
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
    setAEL_SldMoving(): void {
        let addToLeftPx: number = 0;
        const sliderBut: { [index: string]: HTMLDivElement } = {
            left: document.querySelector('div.iscb-leftArrow-box'),
            right: document.querySelector('div.iscb-rightArrow-box')
        };
        console.log('Aktualny obraz: ' + (this.currentImg + 1));
        this.eventsClickTable.forEach((ev) => {
            const sldTitELS: any[] = this.returnSliderTitELS();
            const sldDescELS: any[] = this.returnSliderDescELS();
            const sldWorkImgELS: any[] = this.returnSliderButELS();
            sliderBut.right.addEventListener(ev, () => {
                let imgSwitchLimit: number = (this.imageAmount - 1);   // Start = 0. Oper +1 = img_1 znika => img_2 pojawia się
                if (this.currentImg < imgSwitchLimit && this.blockadeImg === false) {
                    let siteScrollbarWidth: number = (window.innerWidth - document.documentElement.clientWidth + 60);   // Stały pasek przewijania na stronie
                    if (siteScrollbarWidth === undefined || siteScrollbarWidth === null) siteScrollbarWidth = 0;
                    // Image:
                    this.imagesArray[this.currentImg].style.left = ((this.windowWidth - siteScrollbarWidth) * -1) + 'px';
                    this.imagesArray[this.currentImg].style.transitionDuration = 1.5 + 's';
                    // Info:
                    setTimeout(() => {
                        sldTitELS[this.currentImg].style.top = 0 + 'px';
                        sldTitELS[this.currentImg].style.opacity = 1; 
                        sldTitELS[this.currentImg].style.transitionDuration = 0.4 + 'px';
                        setTimeout(() => {
                            sldDescELS[this.currentImg].style.top = 0 + 'px';
                            sldDescELS[this.currentImg].style.opacity = 1; 
                            sldDescELS[this.currentImg].style.transitionDuration = 0.4 + 'px';
                            setTimeout(() => {
                                sldWorkImgELS[this.currentImg].style.top = 0 + 'px';
                                sldWorkImgELS[this.currentImg].style.opacity = 1; 
                                sldWorkImgELS[this.currentImg].style.transitionDuration = 0.4 + 'px';
                            }, 200);
                        }, 200);
                    }, 600);
                    // Counter
                    this.currentImg += 1;
                    // Image
                    this.imagesArray[this.currentImg].style.left = 0 + 'px';
                    this.imagesArray[this.currentImg].style.transitionDuration = 1.5 + 's';
                    // Info:
                    setTimeout(() => {
                        sldTitELS[this.currentImg - 1].style.top = -20 + 'px';
                        sldTitELS[this.currentImg - 1].style.opacity = 0; 
                        sldTitELS[this.currentImg - 1].style.transitionDuration = 0.2 + 'px';
                        setTimeout(() => {
                            sldDescELS[this.currentImg - 1].style.top = -20 + 'px';
                            sldDescELS[this.currentImg - 1].style.opacity = 0; 
                            sldDescELS[this.currentImg - 1].style.transitionDuration = 0.2 + 'px';
                            setTimeout(() => {
                                sldWorkImgELS[this.currentImg - 1].style.top = -20 + 'px';
                                sldWorkImgELS[this.currentImg - 1].style.opacity = 0; 
                                sldWorkImgELS[this.currentImg - 1].style.transitionDuration = 0.2 + 'px';
                            }, 100);
                        }, 100);
                    }, 0);
                    // Slider status color:
                    for (let i = 0; i < this.imageAmount; i++) {
                        if (i === this.currentImg) {
                            this.stateELNodeList[i].style.backgroundColor = 'rgba(255,255,255,1.0)';
                            continue;
                        } else {}
                        this.stateELNodeList[i].style.backgroundColor = 'rgba(200,200,200,0.6)';
                    };
                    this.blockadeImg = true;
                    setTimeout(() => {
                        this.blockadeImg = false;
                    }, 1200);   // Taka sama jak w powyższym "transitionDuration" obrazka
                    //console.log('Aktualny obraz: ' + (this.currentImg + 1));   // LEFT aktualnego obrazu
                } else {}
            }, false);
            sliderBut.left.addEventListener(ev, () => {
                if (this.currentImg > 0 && this.blockadeImg === false) {
                    let siteScrollbarWidth: number = (window.innerWidth - document.documentElement.clientWidth + 60);
                    if (siteScrollbarWidth === undefined || siteScrollbarWidth === null) siteScrollbarWidth = 0;
                    this.imagesArray[this.currentImg].style.left = ((this.windowWidth - siteScrollbarWidth) * 1) + 'px';
                    this.imagesArray[this.currentImg].style.transitionDuration = 1.5 + 's';
                    setTimeout(() => {
                        sldTitELS[this.currentImg].style.top = 0 + 'px';
                        sldTitELS[this.currentImg].style.opacity = 1; 
                        sldTitELS[this.currentImg].style.transitionDuration = 0.4 + 'px';
                        setTimeout(() => {
                            sldDescELS[this.currentImg].style.top = 0 + 'px';
                            sldDescELS[this.currentImg].style.opacity = 1; 
                            sldDescELS[this.currentImg].style.transitionDuration = 0.4 + 'px';
                            setTimeout(() => {
                                sldWorkImgELS[this.currentImg].style.top = 0 + 'px';
                                sldWorkImgELS[this.currentImg].style.opacity = 1; 
                                sldWorkImgELS[this.currentImg].style.transitionDuration = 0.4 + 'px';
                            }, 200);
                        }, 200);
                    }, 600);
                    this.currentImg -= 1;
                    this.imagesArray[this.currentImg].style.left = 0 + 'px';
                    this.imagesArray[this.currentImg].style.transitionDuration = 1.5 + 's';
                    setTimeout(() => {
                        sldTitELS[this.currentImg + 1].style.top = -20 + 'px';
                        sldTitELS[this.currentImg + 1].style.opacity = 0; 
                        sldTitELS[this.currentImg + 1].style.transitionDuration = 0.2 + 'px';
                        setTimeout(() => {
                            sldDescELS[this.currentImg + 1].style.top = -20 + 'px';
                            sldDescELS[this.currentImg + 1].style.opacity = 0; 
                            sldDescELS[this.currentImg + 1].style.transitionDuration = 0.2 + 'px';
                            setTimeout(() => {
                                sldWorkImgELS[this.currentImg + 1].style.top = -20 + 'px';
                                sldWorkImgELS[this.currentImg + 1].style.opacity = 0; 
                                sldWorkImgELS[this.currentImg + 1].style.transitionDuration = 0.2 + 'px';
                            }, 100);
                        }, 100);
                    }, 0);
                    for (let i = 0; i < this.imageAmount; i++) {
                        if (i === this.currentImg) {
                            this.stateELNodeList[i].style.backgroundColor = 'rgba(255,255,255,1.0)';
                            continue;
                        } else {}
                        this.stateELNodeList[i].style.backgroundColor = 'rgba(200,200,200,0.6)';
                    };
                    this.blockadeImg = true;
                    setTimeout(() => {
                        this.blockadeImg = false;
                    }, 1200);   // Taka sama jak w powyższym "transitionDuration" obrazka
                    //console.log('Aktualny obraz: ' + (this.currentImg + 1));   // LEFT aktualnego obrazu
                } else {}
            }, false);
        });
    },
    setAEL_ImgLeftResize(): void {
        this.eventsWindowTable.forEach((ev) => {   // Zmień na load i sprawdź co się stanie
            window.addEventListener(ev, () => {
                this.windowWidth = innerWidth;
                let siteScrollbarWidth: number = (window.innerWidth - document.documentElement.clientWidth + 60);
                if (siteScrollbarWidth === undefined || siteScrollbarWidth === null) siteScrollbarWidth = 0;
                for (let i = 0; i < this.imageAmount; i++) {
                    let onceImg_CSS_Obj: CSSStyleDeclaration = window.getComputedStyle(this.imagesArray[i], null);
                    let onceImg_CSS_Str: string = onceImg_CSS_Obj.getPropertyValue('left');
                    onceImg_CSS_Str = onceImg_CSS_Str.slice(0, -2);
                    let onceImg_CSS_Num: number = Number(onceImg_CSS_Str);
                    //console.log('Obraz ' + (i + 1) + ': "left" = ' + onceImg_CSS_Num);   // LEFT po RESISE aktualnego obrazu
                    if (onceImg_CSS_Num > 0) {   // right
                        this.imagesArray[i].style.left = ((this.windowWidth - siteScrollbarWidth) * 1) + 'px';
                        this.imagesArray[i].style.transitionDuration = 0.0 + 's';
                    } else if (onceImg_CSS_Num === 0) {   // center
                        continue;
                    } else if (onceImg_CSS_Num < 0) {   // left
                        this.imagesArray[i].style.left = ((this.windowWidth - siteScrollbarWidth) * -1) + 'px';
                        this.imagesArray[i].style.transitionDuration = 0.0 + 's';
                    }
                };
            }, false);
        });
    }
};
slider_Obj.createSldELS();
slider_Obj.setAEL_ImgLeftResize();