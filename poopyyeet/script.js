const search = document.getElementById("search-bar");
const searched = document.querySelector('.searched');
let words = [
    {
        "word":"poop",
        "definition":"disposed waste",
        "type": "noun",
        "ex":"I wouldn't go there, that's where I pooped."
    },
    {
        "word":"oop",
        "definition":"poop without a p",
        "type": "noun",
        "ex":"I pooped so much that I ooped."
    },

    {
        "word": "fart",
        "definition": "To release deadly gasses",
        "type": "noun/verb",
        "ex": "I farted so much that we don't need to fumigate the house for termites anymore."
    },
    {
        "word": "splatter",
        "definition": "To spill all over the place, usually poop",
        "type": "verb",
        "ex": "My poop splattered all over the place and left a permanent stain in the toilet."
    },

    {
        "word": "sink",
        "definition": "Where you wash your hands",
        "type": "noun",
        "ex": "If we wash our hands in the sink after pooping, why can't we just poop in it?"
    },
    {
        "word": "toilet paper",
        "definition": "What you wipe your poop with",
        "type": "noun",
        "ex": "You may use toilet paper but I use my hands."
    },
    {
        "word": "toilet",
        "definition": "A wonderful place where you release your explosive diarrhea",
        "type": "noun",
        "ex": "The toilet was already filled with poop when I got there, so I had to flush it."
    },
    {
        "word": "social distance",
        "definition": "To stay more than 6 feet away from someone",
        "type": "verb",
        "ex": "I farted explosively around me so that people would be forced to social distance."
    },
    {
        "word": "yeeter",
        "definition": "A very cool person",
        "type": "adjective",
        "ex": "Only a true yeeter knows how to poop without farting."
    },
    {
        "word":"yeet",
        "definition":"To agressively throw",
        "type": "verb",
        "ex":"I yeeted the toilet towards Timmy so that he could poop in time."
    },
    {
        "word": "yes",
        "definition": "To agree",
        "type": "gramatical response",
        "ex": "I asked if I could poop and my mom said yes."
    },
    {
        "word": "no",
        "definition": "To not agree",
        "type": "gramatical response",
        "ex": "I wiped my poop with a sponge on a stick. Then I asked if I can shower with it. My mom said no."
    },
    {
        "word": "pencil",
        "definition": "A writing tool",
        "type": "noun",
        "ex": "I know Timmy likes to chew on his pencil so, before I gave him mine, I farted on it. He will have a nice surprise."
    },
    {
        "word": "obliterate",
        "definition": "To absolutely destroy",
        "type": "verb",
        "ex": "The diarrhea obliterated my toilet and diffenately left a mark."
    },
    {
        "word": "intense",
        "definition": "a lot of pressure",
        "type": "adjective",
        "ex": "Wow this movie trailer is so intense.<br>The movie trailer: HE... WILL... <em>slap your knee.<em/>"
    },   
    {
        "word": "spelling",
        "definition": "The way you spell a word",
        "type": "noun",
        "ex": "<br>My spelling in Language Arts class: architecture<br>My spelling in Math class: <em>aRceheteXchUire<em/>"
    },
    {
        "word": "ridiculous",
        "definition": "absolutely ubsurd or unbelieveable",
        "type": "adjective",
        "ex": "(Karen=Person who is always angry)<br><br>Karen: Can I have 2 and a half tacos with ketchup and musturd on 3/8 of them and some thin yet crispy lettuce?<br><br>Cashier: I'm sorry, we don't sell any tacos at the dollar store. We do have a taco sticke-<br><br><em>Karen: THIS IS RIDICULOUS! LET ME TALK TO YOUR MANAGER!<em/>"
    },   
    {
        "word": "mute",
        "definition": "no volume on a computer",
        "type": "adjective",
        "ex": "<br>You hear a cave noise in Minecraft: PANIC<br>Good thing you play the game on mute: Calm<br>Good thing you play the game on mute: PANIC<br><br><em>How would you hear a cave noise if you play on mute.<em/>"
    },
    {
        "word": "twyndyllyngs",
        "definition": "a twin",
        "type": "noun",
        "ex": "This is me :) and this is my brother :) <br>Person: You look the same<br>Me: That's because we are twyndyllyngs"
    },
    {
        "word": "hippopotomonstrosesquippedaliophobia",
        "definition": "the fear of long words (that's its actual meaning)",
        "type": "adjective",
        "ex": "<br>Me: I have a fear of really long words.<br>Friend: So you have hippopotomonstrosesquippedaliophobia?<br>Me: AHHHH"
    },
    {
        "word": "Floccinaucinihilipilification",
        "definition": "it means valueless, it's also a valueless word",
        "type": "adjective",
        "ex": "<br>Me: I bought a negative 10 dollar bill for 10 dollars.<br><br>Friend: What does it do?<br><br>Me: It makes me 20 dollars in debt.<br><br>Friend: How Floccinaucinihilipilificating."
    },
    {
        "word": "order",
        "definition": "to ask for something usually food",
        "type": "verb",
        "ex": "<br>Can I order a burger with no bread, cheese, extra sauce, blended on some hard shell pizza tacos, with a hint of lemon, a 37/68 tablespoon of salt, veggie style?<br>Cashier:<em> We sell food here sir.<em/>"
    },
    
];
const si = document.querySelector(".search-info");
const no = document.getElementById('no');
const word = document.getElementById('word');
const type = document.getElementById('type');
const def = document.getElementById('definition');
const ex = document.getElementById('ex');
const h = document.querySelector('.welcome');
setInterval(function() {
    searched.innerText = `Search results for "${search.value}"`;
    if(search.value.length > 0) {
        si.classList.add("slide");
        h.classList.add('remove');
        searched.style.cssText = "display: block;"
            words.forEach(w => {
                if(w.word == (search.value.toLowerCase())) {
                    word.innerText = w.word;
                    type.innerText = w.type;
                    def.innerText = w.definition;
                    ex.innerText = "Example: "+w.ex;
                    no.style.display = "none";
                    word.style.display = "block";
                } else if(w.word.indexOf(search.value.toLowerCase()) !== -1) {
                    word.innerText = w.word;
                    type.innerText = w.type;
                    def.innerText = w.definition;
                    ex.innerHTML = "Example: "+w.ex;
                    no.style.display = "none";
                    word.style.display = "block";
                }
            });
        }
},1);