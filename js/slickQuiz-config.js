// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Show What You Know!",
        "main":    "<p>Let's find out how much you learned!</p>",
        "results": "<h5>Want To Know More?</h5><p> Check out more photos on the National Geographic website!</p>",
        "level1":  "Nat Geo Know-It-All",
        "level2":  "Smarty Pants",
        "level3":  "Not bad, but you could do better",
        "level4":  "Some effort next time",
        "level5":  "Only paying attention to the pictures? I can't blame you, they're awesome!" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Who took the photo of the Afghan Girl?",
            "a": [
                {"option": "Paul Nicklen",      "correct": false},
                {"option": "Cory Richards",     "correct": false},
                {"option": "Steve McCurry",      "correct": true},
                {"option": "Ansel Adams",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Steve McCurry took the photo of the Afghan Girl in 1983!</p>",
            "incorrect": "<p><span>Not quite.</span> It's actually Steve McCurry.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What anniversary did National Geographic Magazine recently celebrate with The Photography Issue?",
            "a": [
                {"option": "35th",               "correct": false},
                {"option": "125th",   "correct": true},
                {"option": "2nd",               "correct": false},
                {"option": "175th", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> It seems you did the reading!</p>",
            "incorrect": "<p><span>Hmmm</span> No, it was actually the magazine's 125th anniversary last October.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which photo was your favorite?",
            "a": [
                {"option": "Afghan Girl",    "correct": true},
                {"option": "Polar Bear Reflection",    "correct": true},
                {"option": "Jane Goodall With Chimp",    "correct": true},
                {"option": "Huli Tribesmen",    "correct": true},
                {"option": "Siberian Reindeer Herd",    "correct": true},
                {"option": "Wild Ocelot",    "correct": true},
                {"option": "Yosemite",    "correct": true},
                {"option": "Cowboys Branding Cattle, Montana",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Awesome! Great pick!</span></p>",
            "incorrect": "<p><span><span>Awesome! Great pick!</span></span></p>" // no comma here
        },
        { // Question 4
            "q": "How many Ocelot's are remaining in the U.S.?",
            "a": [
                {"option": "125",    "correct": false},
                {"option": "195",     "correct": true},
                {"option": "58",      "correct": false},
                {"option": "2140",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span></p>",
            "incorrect": "<p><span>Hmmm</span> No, there are actually 195 Ocelot's and 95 of them are held in captivity.</p>" // no comma here
        },
        { // Question 5
            "q": "Which photograph would you have most wanted to take?",
            "a": [
                {"option": "Afghan Girl",    "correct": true},
                {"option": "Polar Bear Reflection",    "correct": true},
                {"option": "Jane Goodall With Chimp",    "correct": true},
                {"option": "Huli Tribesmen",    "correct": true},
                {"option": "Siberian Reindeer Herd",    "correct": true},
                {"option": "Wild Ocelot",    "correct": true},
                {"option": "Yosemite",    "correct": true},
                {"option": "Cowboys Branding Cattle, Montana",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Choice!</span></p>",
            "incorrect": "<p><span>Good Choice!</span></p>" // no comma here
        } // no comma here
    ]
};