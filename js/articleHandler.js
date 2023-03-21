const header = document.getElementById("header");
const content = document.getElementById("content");
const main = document.getElementById("main");
const bg = document.getElementById("bg");
let loading = false;
let isDynamicBg = false;
let currentImage = 4;
let timeout1;
let timeout2
let timeout3
let timeout4

const articles = [
    [
        "Erasmus+ blog",
        [
            `Thanks to the 2023 edition of the Erasmus program, me and a bunch of other students from our school, 
            traveled abroad to a german town Schkeuditz to learn new things, connect with new people and cultures and most importantly
            get more work experience and become more employable, so that we can pay higher taxes in the future.
`,
            `On this blog you will be able to learn a thing or two about my experience during the Erasmus+ program.`
        ], 
        `<img class="stars" src="https://upload.wikimedia.org/wikipedia/commons/9/93/European_stars.svg"></img>`
    ],
    [
        "The Arrival",
        [
            `We traveled to the town by a coach, the journey took us around 7 hours, by the end of it I was really exhausted, 
especially considering that I caught a cold, so after the dinner and the orientation, I quickly went to bed.
`,
            `Thankfully the cold went away rather quickly, during the work week we worked at the workshop, our first project after getting a little refresher on the fundamentals was a blogging website, which we worked on
through out the week. The workshop we worked at wasn’t just for us though, it was a space we had to share with 9 different groups from all across Europe. And it wasn’t just programmers either, there were electricians, mechanics, marketers and much much more. After work we had a bit of free time, which we usually spent at the local club, playing billiard or foosball. We also did some shopping at local German stores trying out different regional treats like the traditional German würst.
`
        ], 
        `<img src="img/img1.jpg" class="pics" ></img>`
    ],
    [
        "Leipzig",
        [
            `During the weekend we traveled to Leipzig and had a walk around the beautiful old town square, we had a guide which gave us a tour of the place, and taught us a bit about the history of this city, afterwards we had some free time to roam around, we visited the local zoo, supported local german entrepreneur and his dönner restaurant, we also spent some more time at the club, it was overall really cool.            `
        ], 
        `<img src="img/img2.jpg" class="pics" ></img>`
    ],
    [
        "Building a smart home",
        [
            `This week we started building a smart home system, first day i really just freestyled it, after Aran took a look at what we cooked up, he instructed us to uninstall everything and start from scratch, as although our solutions would kinda work, they possed a fire risk to say the least, afterwards we were shown how to do it properly and we got to work, we started by installing the electrical outlets first, and after that we started to work on the smart lighting system, it was a really interesting thing to learn, as i never really done anything electrics related before.`
        ], 
        `<img src="img/img3.jpg" class="pics" ></img>`
    ],
    [
        "Work in progress",
        [
            `This shit haven't yet happend`
        ], 
        `<img src="img/img4.jpg" class="pics" ></img>`
    ],
]

function selectDay(_dayNum) {
    const index = _dayNum;
    if(loading)
    return;
    clearTimeout(timeout1)
    clearTimeout(timeout2)
    clearTimeout(timeout3)
    clearTimeout(timeout4)
    isDynamicBg = index == 0 ? false : true;
    console.log("isDynamicBg", isDynamicBg)
    loading = true;
    console.log("You will switch to: " + index)
    main.className = "transition";
    bg.className = "background-transition";
    setTimeout(() => {
        setText(articles[index][0], articles[index][1], articles[index][2])
    }, 500);
    setTimeout(() => {
        main.className = "";
    }, 1100);
    setTimeout(() => {
        bg.className = "background";
        loading = false;
        if(isDynamicBg)
        {
            dynamicBg()
        }
    }, 1100)
}

function clamp(_num, _min, _max)
{
    let res = _num;
    if(_num < _min || _num > _max)
    {
        res = _min;
    }
    return res;
}

function dynamicBg()
{
    if(loading)
    return
    currentImage++;
    currentImage = clamp(currentImage, 1, 11)

    timeout1 = setTimeout(()=>{
        bg.className = "background-transition";
    }, 3000)
    timeout2 = setTimeout(()=>{
        bg.innerHTML = `<img src="img/img${currentImage}.jpg" class="pics" ></img>`
    }, 3500)
    timeout3 = setTimeout(() => {
        bg.className = "background";
        loading = false;
    }, 4100)
    timeout4 = setTimeout(() => {
        dynamicBg()
    }, 5000)


}

function setText(_hed, _txt, _img) {
    header.innerHTML = _hed;
    let res = "";
    _txt.forEach(text => {
        res += '<p>' + text + '</p>'
        console.log(res)
    });
    bg.innerHTML = _img
    content.innerHTML = res;
}
