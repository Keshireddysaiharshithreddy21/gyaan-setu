// ======================================================
// GYAAN SETU
// COMPLETE OFFLINE MULTILINGUAL LEARNING DATABASE
// ======================================================

const learningData = {

  // ====================================================
  // CLASS 1
  // SCIENCE & ENVIRONMENT LEARNING
  // ====================================================

  class1: {

    subject: {
      English: "Science & Environment Learning",
      Telugu: "విజ్ఞానం మరియు పర్యావరణ అభ్యాసం",
      Hindi: "विज्ञान और पर्यावरण अध्ययन"
    },

    chapters: [

      // ------------------------------------------------
      // 1. MY BODY
      // ------------------------------------------------

      {
        id: "my-body",
        icon: "🧒",

        title: {
          English: "My Body",
          Telugu: "నా శరీరం",
          Hindi: "मेरा शरीर"
        },

        description: {
          English:
            "Learn about important parts of our body and what they help us do.",

          Telugu:
            "మన శరీరంలోని ముఖ్యమైన భాగాలు మరియు వాటి ఉపయోగాలను తెలుసుకుందాం.",

          Hindi:
            "हमारे शरीर के महत्वपूर्ण अंगों और उनके उपयोग के बारे में जानें।"
        },

        lessons: [

          {
            id: "body-parts",
            visual: "👀",

            title: {
              English: "Our Body Parts",
              Telugu: "మన శరీర భాగాలు",
              Hindi: "हमारे शरीर के अंग"
            },

            image: "./images/lessons/body-parts.png",

            explanation: {

              English:
                "Our body has many parts. We use our eyes to see, ears to hear, nose to smell, tongue to taste and hands to hold things. Our legs help us walk and run.",

              Telugu:
                "మన శరీరంలో అనేక భాగాలు ఉన్నాయి. కళ్లతో చూస్తాము, చెవులతో వింటాము, ముక్కుతో వాసన చూస్తాము, నాలుకతో రుచి చూస్తాము. చేతులతో వస్తువులను పట్టుకుంటాము. కాళ్లు నడవడానికి మరియు పరుగెత్తడానికి సహాయపడతాయి.",

              Hindi:
                "हमारे शरीर के कई अंग होते हैं। आँखों से हम देखते हैं, कानों से सुनते हैं, नाक से सूँघते हैं और जीभ से स्वाद लेते हैं। हाथ चीजें पकड़ने और पैर चलने में मदद करते हैं।"
            },

            keyPoints: {

              English: [
                "Eyes help us see.",
                "Ears help us hear.",
                "The nose helps us smell.",
                "Hands help us hold things.",
                "Legs help us walk and run."
              ],

              Telugu: [
                "కళ్లు చూడటానికి సహాయపడతాయి.",
                "చెవులు వినటానికి సహాయపడతాయి.",
                "ముక్కు వాసన తెలుసుకోవడానికి సహాయపడుతుంది.",
                "చేతులు వస్తువులను పట్టుకోవడానికి సహాయపడతాయి.",
                "కాళ్లు నడవడానికి మరియు పరుగెత్తడానికి సహాయపడతాయి."
              ],

              Hindi: [
                "आँखें देखने में मदद करती हैं।",
                "कान सुनने में मदद करते हैं।",
                "नाक सूँघने में मदद करती है।",
                "हाथ चीजें पकड़ने में मदद करते हैं।",
                "पैर चलने और दौड़ने में मदद करते हैं।"
              ]
            },

            activity: {

              English:
                "Stand in front of a mirror and identify your eyes, ears, nose, hands and legs.",

              Telugu:
                "అద్దం ముందు నిలబడి మీ కళ్లు, చెవులు, ముక్కు, చేతులు మరియు కాళ్లను గుర్తించండి.",

              Hindi:
                "आईने के सामने खड़े होकर अपनी आँखें, कान, नाक, हाथ और पैर पहचानें।"
            },

            quiz: [

              {
                question: {
                  English: "Which body part helps us see?",
                  Telugu: "మనకు చూడటానికి ఏ శరీర భాగం సహాయపడుతుంది?",
                  Hindi: "देखने में कौन सा अंग मदद करता है?"
                },

                options: {
                  English: ["Eyes", "Ears", "Hands", "Feet"],
                  Telugu: ["కళ్లు", "చెవులు", "చేతులు", "పాదాలు"],
                  Hindi: ["आँखें", "कान", "हाथ", "पैर"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Which body part helps us hear?",
                  Telugu: "మనకు వినటానికి ఏ భాగం సహాయపడుతుంది?",
                  Hindi: "सुनने में कौन सा अंग मदद करता है?"
                },

                options: {
                  English: ["Ears", "Eyes", "Nose", "Legs"],
                  Telugu: ["చెవులు", "కళ్లు", "ముక్కు", "కాళ్లు"],
                  Hindi: ["कान", "आँखें", "नाक", "पैर"]
                },

                answer: 0
              },

              {
                question: {
                  English: "What helps us walk?",
                  Telugu: "నడవటానికి ఏవి సహాయపడతాయి?",
                  Hindi: "चलने में क्या मदद करता है?"
                },

                options: {
                  English: ["Legs", "Ears", "Hair", "Nose"],
                  Telugu: ["కాళ్లు", "చెవులు", "జుట్టు", "ముక్కు"],
                  Hindi: ["पैर", "कान", "बाल", "नाक"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      // ------------------------------------------------
      // 2. PLANTS
      // ------------------------------------------------

      {
        id: "plants-around-me",
        icon: "🌱",

        title: {
          English: "Plants Around Me",
          Telugu: "నా చుట్టూ మొక్కలు",
          Hindi: "मेरे आसपास पौधे"
        },

        description: {
          English:
            "Discover simple things about the plants around us.",

          Telugu:
            "మన చుట్టూ ఉన్న మొక్కల గురించి సరళంగా తెలుసుకుందాం.",

          Hindi:
            "हमारे आसपास के पौधों के बारे में सरल बातें जानें।"
        },

        lessons: [

          {
            id: "plant-basics",
            visual: "🌻",

            title: {
              English: "Meet a Plant",
              Telugu: "మొక్కను తెలుసుకుందాం",
              Hindi: "पौधे को जानें"
            },

            image: "./images/lessons/plants.png",

            explanation: {

              English:
                "Plants are living things. Plants usually have roots, stems and leaves. Many plants also have flowers and fruits. Plants need water and sunlight to grow.",

              Telugu:
                "మొక్కలు జీవులు. మొక్కలకు సాధారణంగా వేర్లు, కాండం మరియు ఆకులు ఉంటాయి. అనేక మొక్కలకు పువ్వులు మరియు పండ్లు కూడా ఉంటాయి. మొక్కలు పెరగడానికి నీరు మరియు సూర్యకాంతి అవసరం.",

              Hindi:
                "पौधे जीवित होते हैं। पौधों में जड़, तना और पत्तियाँ होती हैं। कई पौधों में फूल और फल भी होते हैं। उन्हें पानी और धूप चाहिए।"
            },

            keyPoints: {

              English: [
                "Plants are living things.",
                "Plants have roots.",
                "Plants have stems and leaves.",
                "Some plants have flowers and fruits.",
                "Plants need water and sunlight."
              ],

              Telugu: [
                "మొక్కలు జీవులు.",
                "మొక్కలకు వేర్లు ఉంటాయి.",
                "మొక్కలకు కాండం మరియు ఆకులు ఉంటాయి.",
                "కొన్ని మొక్కలకు పువ్వులు మరియు పండ్లు ఉంటాయి.",
                "మొక్కలకు నీరు మరియు సూర్యకాంతి అవసరం."
              ],

              Hindi: [
                "पौधे जीवित होते हैं।",
                "पौधों में जड़ होती है।",
                "पौधों में तना और पत्तियाँ होती हैं।",
                "कुछ पौधों में फूल और फल होते हैं।",
                "पौधों को पानी और धूप चाहिए।"
              ]
            },

            activity: {

              English:
                "Look at a plant near you and count how many leaves you can see.",

              Telugu:
                "మీ దగ్గర ఉన్న ఒక మొక్కను గమనించి కనిపించే ఆకులను లెక్కించండి.",

              Hindi:
                "अपने पास किसी पौधे को देखें और दिखाई देने वाली पत्तियाँ गिनें।"
            },

            quiz: [

              {
                question: {
                  English: "Are plants living things?",
                  Telugu: "మొక్కలు జీవులా?",
                  Hindi: "क्या पौधे जीवित होते हैं?"
                },

                options: {
                  English: ["Yes", "No", "Only at night", "Never"],
                  Telugu: ["అవును", "కాదు", "రాత్రి మాత్రమే", "ఎప్పుడూ కాదు"],
                  Hindi: ["हाँ", "नहीं", "केवल रात में", "कभी नहीं"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Which part is found on many plants?",
                  Telugu: "చాలా మొక్కల్లో ఏ భాగం ఉంటుంది?",
                  Hindi: "कई पौधों में कौन सा भाग होता है?"
                },

                options: {
                  English: ["Leaves", "Wheels", "Screen", "Engine"],
                  Telugu: ["ఆకులు", "చక్రాలు", "స్క్రీన్", "ఇంజిన్"],
                  Hindi: ["पत्तियाँ", "पहिए", "स्क्रीन", "इंजन"]
                },

                answer: 0
              },

              {
                question: {
                  English: "What do plants need?",
                  Telugu: "మొక్కలకు ఏమి అవసరం?",
                  Hindi: "पौधों को क्या चाहिए?"
                },

                options: {
                  English: [
                    "Water and sunlight",
                    "Plastic",
                    "Only darkness",
                    "Television"
                  ],

                  Telugu: [
                    "నీరు మరియు సూర్యకాంతి",
                    "ప్లాస్టిక్",
                    "చీకటి మాత్రమే",
                    "టెలివిజన్"
                  ],

                  Hindi: [
                    "पानी और धूप",
                    "प्लास्टिक",
                    "केवल अंधेरा",
                    "टेलीविजन"
                  ]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      // ------------------------------------------------
      // 3. ANIMALS
      // ------------------------------------------------

      {
        id: "animals-around-me",
        icon: "🐶",

        title: {
          English: "Animals Around Me",
          Telugu: "నా చుట్టూ జంతువులు",
          Hindi: "मेरे आसपास जानवर"
        },

        description: {
          English:
            "Learn about some common animals around us.",

          Telugu:
            "మన చుట్టూ కనిపించే కొన్ని సాధారణ జంతువుల గురించి తెలుసుకుందాం.",

          Hindi:
            "हमारे आसपास दिखाई देने वाले कुछ सामान्य जानवरों के बारे में जानें।"
        },

        lessons: [

          {
            id: "common-animals",
            visual: "🐾",

            title: {
              English: "Meet the Animals",
              Telugu: "జంతువులను తెలుసుకుందాం",
              Hindi: "जानवरों को जानें"
            },

            image: "./images/lessons/animals.png",

            explanation: {

              English:
                "Animals are living things. Dogs, cats, cows and birds are some animals we may see around us. Different animals eat different foods and live in different places.",

              Telugu:
                "జంతువులు జీవులు. కుక్కలు, పిల్లులు, ఆవులు మరియు పక్షులు మన చుట్టూ కనిపించే కొన్ని జంతువులు. వేర్వేరు జంతువులు వేర్వేరు ఆహారం తింటాయి.",

              Hindi:
                "जानवर जीवित होते हैं। कुत्ते, बिल्ली, गाय और पक्षी हमारे आसपास दिखाई दे सकते हैं। अलग-अलग जानवर अलग भोजन खाते हैं।"
            },

            keyPoints: {

              English: [
                "Animals are living things.",
                "Dogs and cats may live near people.",
                "Birds have wings.",
                "Animals need food.",
                "Animals need water."
              ],

              Telugu: [
                "జంతువులు జీవులు.",
                "కుక్కలు మరియు పిల్లులు మనుషుల దగ్గర ఉండవచ్చు.",
                "పక్షులకు రెక్కలు ఉంటాయి.",
                "జంతువులకు ఆహారం అవసరం.",
                "జంతువులకు నీరు అవసరం."
              ],

              Hindi: [
                "जानवर जीवित होते हैं।",
                "कुत्ते और बिल्ली लोगों के पास रह सकते हैं।",
                "पक्षियों के पंख होते हैं।",
                "जानवरों को भोजन चाहिए।",
                "जानवरों को पानी चाहिए।"
              ]
            },

            activity: {

              English:
                "Observe two animals or birds around your home from a safe distance.",

              Telugu:
                "సురక్షిత దూరం నుండి మీ ఇంటి చుట్టూ రెండు జంతువులు లేదా పక్షులను గమనించండి.",

              Hindi:
                "सुरक्षित दूरी से अपने घर के आसपास दो जानवर या पक्षी देखें।"
            },

            quiz: [

              {
                question: {
                  English: "Which is an animal?",
                  Telugu: "కింది వాటిలో జంతువు ఏది?",
                  Hindi: "इनमें से जानवर कौन सा है?"
                },

                options: {
                  English: ["Dog", "Chair", "Book", "Bottle"],
                  Telugu: ["కుక్క", "కుర్చీ", "పుస్తకం", "సీసా"],
                  Hindi: ["कुत्ता", "कुर्सी", "किताब", "बोतल"]
                },

                answer: 0
              },

              {
                question: {
                  English: "What do birds have?",
                  Telugu: "పక్షులకు ఏమి ఉంటాయి?",
                  Hindi: "पक्षियों के क्या होते हैं?"
                },

                options: {
                  English: ["Wings", "Wheels", "Engines", "Screens"],
                  Telugu: ["రెక్కలు", "చక్రాలు", "ఇంజిన్లు", "స్క్రీన్‌లు"],
                  Hindi: ["पंख", "पहिए", "इंजन", "स्क्रीन"]
                },

                answer: 0
              },

              {
                question: {
                  English: "What do animals need?",
                  Telugu: "జంతువులకు ఏమి అవసరం?",
                  Hindi: "जानवरों को क्या चाहिए?"
                },

                options: {
                  English: ["Food and water", "Plastic", "Nothing", "Smoke"],
                  Telugu: ["ఆహారం మరియు నీరు", "ప్లాస్టిక్", "ఏమీ కాదు", "పొగ"],
                  Hindi: ["भोजन और पानी", "प्लास्टिक", "कुछ नहीं", "धुआँ"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      // ------------------------------------------------
      // 4. WATER
      // ------------------------------------------------

      {
        id: "water-around-me",
        icon: "💧",

        title: {
          English: "Water Around Me",
          Telugu: "నా చుట్టూ నీరు",
          Hindi: "मेरे आसपास पानी"
        },

        description: {
          English:
            "Learn why we need water every day.",

          Telugu:
            "మనకు ప్రతిరోజూ నీరు ఎందుకు అవసరమో తెలుసుకుందాం.",

          Hindi:
            "जानें कि हमें हर दिन पानी क्यों चाहिए।"
        },

        lessons: [

          {
            id: "water-needs",
            visual: "🚰",

            title: {
              English: "We Need Water",
              Telugu: "మనకు నీరు అవసరం",
              Hindi: "हमें पानी चाहिए"
            },

            image: "./images/lessons/water.png",

            explanation: {

              English:
                "We need water every day. We drink water and use it for cooking, washing and cleaning. Plants and animals also need water. We should close taps after using them.",

              Telugu:
                "మనకు ప్రతిరోజూ నీరు అవసరం. నీటిని తాగడం, వంట, కడగడం మరియు శుభ్రపరచడం కోసం ఉపయోగిస్తాము. మొక్కలు మరియు జంతువులకు కూడా నీరు అవసరం.",

              Hindi:
                "हमें हर दिन पानी चाहिए। हम पानी पीते हैं और खाना बनाने, धोने तथा सफाई में उपयोग करते हैं। पौधों और जानवरों को भी पानी चाहिए।"
            },

            keyPoints: {

              English: [
                "We drink water.",
                "Water is used for cooking.",
                "Water is used for washing.",
                "Plants and animals need water.",
                "Do not waste water."
              ],

              Telugu: [
                "మనం నీరు తాగుతాము.",
                "వంటకు నీటిని ఉపయోగిస్తాము.",
                "కడగడానికి నీటిని ఉపయోగిస్తాము.",
                "మొక్కలు మరియు జంతువులకు నీరు అవసరం.",
                "నీటిని వృథా చేయకూడదు."
              ],

              Hindi: [
                "हम पानी पीते हैं।",
                "खाना बनाने में पानी उपयोग होता है।",
                "धोने में पानी उपयोग होता है।",
                "पौधों और जानवरों को पानी चाहिए।",
                "पानी बर्बाद नहीं करना चाहिए।"
              ]
            },

            activity: {

              English:
                "Count how many times you use water during one morning.",

              Telugu:
                "ఒక ఉదయం మీరు నీటిని ఎన్ని సార్లు ఉపయోగించారో లెక్కించండి.",

              Hindi:
                "एक सुबह में आपने कितनी बार पानी उपयोग किया, गिनें।"
            },

            quiz: [

              {
                question: {
                  English: "What do we drink?",
                  Telugu: "మనం ఏమి తాగుతాము?",
                  Hindi: "हम क्या पीते हैं?"
                },

                options: {
                  English: ["Water", "Plastic", "Stone", "Paper"],
                  Telugu: ["నీరు", "ప్లాస్టిక్", "రాయి", "కాగితం"],
                  Hindi: ["पानी", "प्लास्टिक", "पत्थर", "कागज"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Who else needs water?",
                  Telugu: "ఇంకెవరికి నీరు అవసరం?",
                  Hindi: "और किसे पानी चाहिए?"
                },

                options: {
                  English: [
                    "Plants and animals",
                    "Only toys",
                    "Only cars",
                    "Only books"
                  ],

                  Telugu: [
                    "మొక్కలు మరియు జంతువులు",
                    "బొమ్మలకు మాత్రమే",
                    "కార్లకు మాత్రమే",
                    "పుస్తకాలకు మాత్రమే"
                  ],

                  Hindi: [
                    "पौधे और जानवर",
                    "केवल खिलौने",
                    "केवल कारें",
                    "केवल किताबें"
                  ]
                },

                answer: 0
              },

              {
                question: {
                  English: "What should we do after using a tap?",
                  Telugu: "కుళాయి ఉపయోగించిన తర్వాత ఏమి చేయాలి?",
                  Hindi: "नल उपयोग करने के बाद क्या करना चाहिए?"
                },

                options: {
                  English: ["Close it", "Leave it running", "Break it", "Ignore it"],
                  Telugu: ["మూయాలి", "తెరిచి ఉంచాలి", "పగలగొట్టాలి", "పట్టించుకోకూడదు"],
                  Hindi: ["बंद करना चाहिए", "खुला छोड़ना चाहिए", "तोड़ देना चाहिए", "ध्यान नहीं देना चाहिए"]
                },

                answer: 0
              }

            ]
          }

        ]
      }

    ]
  },


  // ====================================================
  // CLASS 2
  // ====================================================

  class2: {

    subject: {
      English: "Science & Environment Learning",
      Telugu: "విజ్ఞానం మరియు పర్యావరణ అభ్యాసం",
      Hindi: "विज्ञान और पर्यावरण अध्ययन"
    },

    chapters: [

      // ------------------------------------------------
      // LIVING / NON-LIVING
      // ------------------------------------------------

      {
        id: "living-nonliving",
        icon: "🌿",

        title: {
          English: "Living and Non-Living Things",
          Telugu: "జీవులు మరియు నిర్జీవ వస్తువులు",
          Hindi: "जीवित और निर्जीव चीजें"
        },

        description: {
          English:
            "Learn the difference between living and non-living things.",

          Telugu:
            "జీవులు మరియు నిర్జీవ వస్తువుల మధ్య తేడాను తెలుసుకుందాం.",

          Hindi:
            "जीवित और निर्जीव चीजों के बीच अंतर जानें।"
        },

        lessons: [

          {
            id: "living-things",
            visual: "🌱",

            title: {
              English: "What Is Living?",
              Telugu: "జీవులు అంటే ఏమిటి?",
              Hindi: "जीवित चीजें क्या हैं?"
            },

            image: "./images/lessons/living-things.png",

            explanation: {

              English:
                "Plants, animals and humans are living things. Living things grow and need things such as water, air or food. A chair, stone and pencil are non-living things.",

              Telugu:
                "మొక్కలు, జంతువులు మరియు మనుషులు జీవులు. జీవులు పెరుగుతాయి మరియు నీరు, గాలి లేదా ఆహారం అవసరం. కుర్చీ, రాయి మరియు పెన్సిల్ నిర్జీవ వస్తువులు.",

              Hindi:
                "पौधे, जानवर और मनुष्य जीवित होते हैं। जीवित चीजें बढ़ती हैं और उन्हें पानी, हवा या भोजन चाहिए। कुर्सी, पत्थर और पेंसिल निर्जीव हैं।"
            },

            keyPoints: {

              English: [
                "Plants are living.",
                "Animals are living.",
                "Living things grow.",
                "Living things need resources.",
                "Rocks and chairs are non-living."
              ],

              Telugu: [
                "మొక్కలు జీవులు.",
                "జంతువులు జీవులు.",
                "జీవులు పెరుగుతాయి.",
                "జీవులకు వనరులు అవసరం.",
                "రాళ్లు మరియు కుర్చీలు నిర్జీవ వస్తువులు."
              ],

              Hindi: [
                "पौधे जीवित होते हैं।",
                "जानवर जीवित होते हैं।",
                "जीवित चीजें बढ़ती हैं।",
                "जीवित चीजों को संसाधन चाहिए।",
                "पत्थर और कुर्सियाँ निर्जीव हैं।"
              ]
            },

            activity: {

              English:
                "Write three living and three non-living things around you.",

              Telugu:
                "మీ చుట్టూ కనిపించే మూడు జీవులు మరియు మూడు నిర్జీవ వస్తువులను రాయండి.",

              Hindi:
                "अपने आसपास तीन जीवित और तीन निर्जीव चीजें लिखें।"
            },

            quiz: [

              {
                question: {
                  English: "Which is living?",
                  Telugu: "కింది వాటిలో జీవి ఏది?",
                  Hindi: "इनमें से जीवित कौन है?"
                },

                options: {
                  English: ["Plant", "Chair", "Stone", "Bottle"],
                  Telugu: ["మొక్క", "కుర్చీ", "రాయి", "సీసా"],
                  Hindi: ["पौधा", "कुर्सी", "पत्थर", "बोतल"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Which is non-living?",
                  Telugu: "కింది వాటిలో నిర్జీవం ఏది?",
                  Hindi: "इनमें से निर्जीव क्या है?"
                },

                options: {
                  English: ["Rock", "Dog", "Tree", "Bird"],
                  Telugu: ["రాయి", "కుక్క", "చెట్టు", "పక్షి"],
                  Hindi: ["पत्थर", "कुत्ता", "पेड़", "पक्षी"]
                },

                answer: 0
              },

              {
                question: {
                  English: "What do living things do?",
                  Telugu: "జీవులు ఏమి చేస్తాయి?",
                  Hindi: "जीवित चीजें क्या करती हैं?"
                },

                options: {
                  English: ["Grow", "Become plastic", "Become chairs", "Nothing"],
                  Telugu: ["పెరుగుతాయి", "ప్లాస్టిక్ అవుతాయి", "కుర్చీలు అవుతాయి", "ఏమీ కాదు"],
                  Hindi: ["बढ़ती हैं", "प्लास्टिक बनती हैं", "कुर्सी बनती हैं", "कुछ नहीं"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      // ------------------------------------------------
      // FOOD
      // ------------------------------------------------

      {
        id: "food",
        icon: "🍎",

        title: {
          English: "Food We Eat",
          Telugu: "మనం తినే ఆహారం",
          Hindi: "हमारा भोजन"
        },

        description: {
          English:
            "Learn why food is important for our body.",

          Telugu:
            "మన శరీరానికి ఆహారం ఎందుకు ముఖ్యమో తెలుసుకుందాం.",

          Hindi:
            "जानें कि भोजन हमारे शरीर के लिए क्यों महत्वपूर्ण है।"
        },

        lessons: [

          {
            id: "need-food",
            visual: "🥗",

            title: {
              English: "Why We Need Food",
              Telugu: "మనకు ఆహారం ఎందుకు అవసరం",
              Hindi: "हमें भोजन क्यों चाहिए"
            },

            image: "./images/lessons/healthy-food.png",

            explanation: {

              English:
                "Food gives us energy to learn, play and do our daily activities. Food also helps our body grow. Fruits, vegetables, grains, pulses and milk can be part of our meals.",

              Telugu:
                "ఆహారం మనకు చదవడానికి, ఆడడానికి మరియు రోజువారీ పనులు చేయడానికి శక్తిని ఇస్తుంది. ఆహారం శరీరం పెరగడానికి కూడా సహాయపడుతుంది.",

              Hindi:
                "भोजन हमें पढ़ने, खेलने और दैनिक काम करने के लिए ऊर्जा देता है। भोजन शरीर की वृद्धि में भी मदद करता है।"
            },

            keyPoints: {

              English: [
                "Food gives energy.",
                "Food helps us grow.",
                "Fruits are foods.",
                "Vegetables are foods.",
                "Different foods can be part of meals."
              ],

              Telugu: [
                "ఆహారం శక్తిని ఇస్తుంది.",
                "ఆహారం పెరుగుదలకు సహాయపడుతుంది.",
                "పండ్లు ఆహారం.",
                "కూరగాయలు ఆహారం.",
                "వివిధ ఆహారాలు మన భోజనంలో భాగం కావచ్చు."
              ],

              Hindi: [
                "भोजन ऊर्जा देता है।",
                "भोजन बढ़ने में मदद करता है।",
                "फल भोजन हैं।",
                "सब्जियाँ भोजन हैं।",
                "अलग-अलग भोजन हमारे खाने का हिस्सा हो सकते हैं।"
              ]
            },

            activity: {

              English:
                "Draw a plate and add three foods you eat at home.",

              Telugu:
                "ఒక ప్లేట్‌ను గీసి మీరు ఇంట్లో తినే మూడు ఆహారాలను గీయండి.",

              Hindi:
                "एक प्लेट बनाएँ और उसमें घर पर खाए जाने वाले तीन भोजन बनाएँ।"
            },

            quiz: [

              {
                question: {
                  English: "What does food give us?",
                  Telugu: "ఆహారం మనకు ఏమి ఇస్తుంది?",
                  Hindi: "भोजन हमें क्या देता है?"
                },

                options: {
                  English: ["Energy", "Smoke", "Plastic", "Dust"],
                  Telugu: ["శక్తి", "పొగ", "ప్లాస్టిక్", "దుమ్ము"],
                  Hindi: ["ऊर्जा", "धुआँ", "प्लास्टिक", "धूल"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Which is food?",
                  Telugu: "కింది వాటిలో ఆహారం ఏది?",
                  Hindi: "इनमें से भोजन कौन सा है?"
                },

                options: {
                  English: ["Apple", "Stone", "Chair", "Pencil"],
                  Telugu: ["ఆపిల్", "రాయి", "కుర్చీ", "పెన్సిల్"],
                  Hindi: ["सेब", "पत्थर", "कुर्सी", "पेंसिल"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Food helps our body...",
                  Telugu: "ఆహారం మన శరీరానికి...",
                  Hindi: "भोजन हमारे शरीर को..."
                },

                options: {
                  English: ["Grow", "Become plastic", "Stop moving", "Become a chair"],
                  Telugu: ["పెరగడానికి సహాయపడుతుంది", "ప్లాస్టిక్ అవుతుంది", "కదలకుండా చేస్తుంది", "కుర్చీగా మారుస్తుంది"],
                  Hindi: ["बढ़ने में मदद करता है", "प्लास्टिक बनाता है", "चलना रोकता है", "कुर्सी बनाता है"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      // ------------------------------------------------
      // HOME
      // ------------------------------------------------

      {
        id: "home-surroundings",
        icon: "🏡",

        title: {
          English: "Our Home and Surroundings",
          Telugu: "మన ఇల్లు మరియు పరిసరాలు",
          Hindi: "हमारा घर और आसपास"
        },

        description: {
          English:
            "Learn simple ways to keep our surroundings clean.",

          Telugu:
            "మన పరిసరాలను శుభ్రంగా ఉంచే సరళమైన మార్గాలను తెలుసుకుందాం.",

          Hindi:
            "अपने आसपास साफ रखने के सरल तरीकों के बारे में जानें।"
        },

        lessons: [

          {
            id: "clean-home",
            visual: "🧹",

            title: {
              English: "Keeping Our Surroundings Clean",
              Telugu: "మన పరిసరాలను శుభ్రంగా ఉంచడం",
              Hindi: "अपने आसपास साफ रखना"
            },

            image: "./images/lessons/clean-home.png",

            explanation: {

              English:
                "Clean surroundings make places pleasant to live and learn in. Waste should be placed in suitable bins. We should keep our rooms, classrooms and nearby areas tidy.",

              Telugu:
                "శుభ్రమైన పరిసరాలు జీవించడానికి మరియు నేర్చుకోవడానికి మంచివి. చెత్తను సరైన చెత్త బుట్టల్లో వేయాలి.",

              Hindi:
                "स्वच्छ वातावरण रहने और पढ़ने के लिए अच्छा होता है। कचरा उचित कूड़ेदान में डालना चाहिए।"
            },

            keyPoints: {

              English: [
                "Keep rooms clean.",
                "Use waste bins.",
                "Do not litter.",
                "Keep classrooms tidy.",
                "Clean surroundings are better for everyone."
              ],

              Telugu: [
                "గదులను శుభ్రంగా ఉంచాలి.",
                "చెత్త బుట్టలను ఉపయోగించాలి.",
                "చెత్తను ఎక్కడపడితే అక్కడ వేయకూడదు.",
                "తరగతి గదిని శుభ్రంగా ఉంచాలి.",
                "శుభ్రమైన పరిసరాలు అందరికీ మంచివి."
              ],

              Hindi: [
                "कमरे साफ रखें।",
                "कूड़ेदान का उपयोग करें।",
                "कचरा इधर-उधर न फेंकें।",
                "कक्षा साफ रखें।",
                "स्वच्छ वातावरण सभी के लिए अच्छा है।"
              ]
            },

            activity: {

              English:
                "Identify three things you can do to keep your home clean.",

              Telugu:
                "మీ ఇంటిని శుభ్రంగా ఉంచడానికి చేయగల మూడు పనులను గుర్తించండి.",

              Hindi:
                "घर साफ रखने के तीन तरीके पहचानें।"
            },

            quiz: [

              {
                question: {
                  English: "Where should waste go?",
                  Telugu: "చెత్తను ఎక్కడ వేయాలి?",
                  Hindi: "कचरा कहाँ डालना चाहिए?"
                },

                options: {
                  English: ["Waste bin", "Road", "Floor", "Playground"],
                  Telugu: ["చెత్త బుట్ట", "రోడ్డు", "నేలపై", "ఆట స్థలం"],
                  Hindi: ["कूड़ेदान", "सड़क", "फर्श", "खेल का मैदान"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Which is a good habit?",
                  Telugu: "మంచి అలవాటు ఏది?",
                  Hindi: "अच्छी आदत कौन सी है?"
                },

                options: {
                  English: ["Keeping the room clean", "Littering", "Making a mess", "Throwing waste"],
                  Telugu: ["గదిని శుభ్రంగా ఉంచడం", "చెత్త వేయడం", "అస్తవ్యస్తంగా చేయడం", "చెత్త పారేయడం"],
                  Hindi: ["कमरा साफ रखना", "कचरा फैलाना", "गंदगी करना", "कचरा फेंकना"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Should classrooms be clean?",
                  Telugu: "తరగతి గదిని శుభ్రంగా ఉంచాలా?",
                  Hindi: "क्या कक्षा साफ रखनी चाहिए?"
                },

                options: {
                  English: ["Yes", "No", "Never", "Only once a year"],
                  Telugu: ["అవును", "కాదు", "ఎప్పుడూ కాదు", "సంవత్సరానికి ఒకసారి"],
                  Hindi: ["हाँ", "नहीं", "कभी नहीं", "साल में एक बार"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      // ------------------------------------------------
      // WEATHER
      // ------------------------------------------------

      {
        id: "weather",
        icon: "🌦️",

        title: {
          English: "Weather Around Us",
          Telugu: "మన చుట్టూ వాతావరణం",
          Hindi: "हमारे आसपास का मौसम"
        },

        description: {
          English:
            "Learn about sunny, rainy and cloudy days.",

          Telugu:
            "ఎండ, వర్షం మరియు మేఘావృతమైన రోజుల గురించి తెలుసుకుందాం.",

          Hindi:
            "धूप, बारिश और बादल वाले दिनों के बारे में जानें।"
        },

        lessons: [

          {
            id: "weather-types",
            visual: "☀️",

            title: {
              English: "Sunny, Rainy and Cloudy",
              Telugu: "ఎండ, వర్షం మరియు మేఘాలు",
              Hindi: "धूप, बारिश और बादल"
            },

            image: "./images/lessons/weather.png",

            explanation: {

              English:
                "Weather can change from day to day. Some days are sunny, some cloudy and some rainy. Weather can affect the clothes we wear and activities we do.",

              Telugu:
                "వాతావరణం రోజు రోజుకు మారవచ్చు. కొన్ని రోజులు ఎండగా, కొన్ని మేఘావృతంగా మరియు కొన్ని వర్షంగా ఉంటాయి.",

              Hindi:
                "मौसम दिन-प्रतिदिन बदल सकता है। कुछ दिन धूप वाले, कुछ बादल वाले और कुछ बारिश वाले होते हैं।"
            },

            keyPoints: {

              English: [
                "Some days are sunny.",
                "Some days are rainy.",
                "Clouds can cover the sky.",
                "Weather can change.",
                "We choose suitable clothes for weather."
              ],

              Telugu: [
                "కొన్ని రోజులు ఎండగా ఉంటాయి.",
                "కొన్ని రోజులు వర్షంగా ఉంటాయి.",
                "మేఘాలు ఆకాశాన్ని కప్పవచ్చు.",
                "వాతావరణం మారవచ్చు.",
                "వాతావరణానికి తగిన దుస్తులను ఎంచుకుంటాము."
              ],

              Hindi: [
                "कुछ दिन धूप वाले होते हैं।",
                "कुछ दिन बारिश वाले होते हैं।",
                "बादल आकाश को ढक सकते हैं।",
                "मौसम बदल सकता है।",
                "हम मौसम के अनुसार कपड़े चुनते हैं।"
              ]
            },

            activity: {

              English:
                "Look outside and draw today's weather.",

              Telugu:
                "బయట చూసి ఈరోజు వాతావరణాన్ని గీయండి.",

              Hindi:
                "बाहर देखें और आज का मौसम बनाएँ।"
            },

            quiz: [

              {
                question: {
                  English: "What do we see on a sunny day?",
                  Telugu: "ఎండ ఉన్న రోజున ఏమి కనిపిస్తుంది?",
                  Hindi: "धूप वाले दिन क्या दिखाई देता है?"
                },

                options: {
                  English: ["Sun", "Only snow", "Darkness", "Nothing"],
                  Telugu: ["సూర్యుడు", "మంచు", "చీకటి", "ఏమీ కాదు"],
                  Hindi: ["सूरज", "बर्फ", "अंधेरा", "कुछ नहीं"]
                },

                answer: 0
              },

              {
                question: {
                  English: "What falls on a rainy day?",
                  Telugu: "వర్షం రోజున ఏమి పడుతుంది?",
                  Hindi: "बारिश के दिन क्या गिरता है?"
                },

                options: {
                  English: ["Rain", "Books", "Chairs", "Plastic"],
                  Telugu: ["వర్షం", "పుస్తకాలు", "కుర్చీలు", "ప్లాస్టిక్"],
                  Hindi: ["बारिश", "किताबें", "कुर्सियाँ", "प्लास्टिक"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Can weather change?",
                  Telugu: "వాతావరణం మారుతుందా?",
                  Hindi: "क्या मौसम बदल सकता है?"
                },

                options: {
                  English: ["Yes", "No", "Never", "Only once"],
                  Telugu: ["అవును", "కాదు", "ఎప్పుడూ కాదు", "ఒక్కసారి"],
                  Hindi: ["हाँ", "नहीं", "कभी नहीं", "केवल एक बार"]
                },

                answer: 0
              }

            ]
          }

        ]
      }

    ]
  },


  // ====================================================
  // CLASS 3
  // ====================================================

  class3: {

    subject: {
      English: "Environmental Studies",
      Telugu: "పర్యావరణ అధ్యయనం",
      Hindi: "पर्यावरण अध्ययन"
    },

    chapters: [

      {
        id: "plants",
        icon: "🌱",

        title: {
          English: "Plants Around Us",
          Telugu: "మన చుట్టూ ఉన్న మొక్కలు",
          Hindi: "हमारे आसपास के पौधे"
        },

        description: {
          English: "Learn about plants, their parts and growth.",
          Telugu: "మొక్కల భాగాలు మరియు వాటి పెరుగుదల గురించి తెలుసుకుందాం.",
          Hindi: "पौधों के भाग और वृद्धि के बारे में जानें।"
        },

        lessons: [

          {
            id: "plant-life",
            visual: "🌿",

            title: {
              English: "How Plants Live",
              Telugu: "మొక్కలు ఎలా జీవిస్తాయి",
              Hindi: "पौधे कैसे जीवित रहते हैं"
            },

            image: "./images/lessons/plants.png",

            explanation: {

              English:
                "Plants are living things. A plant has roots, stem, leaves, flowers and fruits. These parts work together. Plants need water, air, sunlight and nutrients from the soil.",

              Telugu:
                "మొక్కలు జీవులు. మొక్కకు వేర్లు, కాండం, ఆకులు, పువ్వులు మరియు పండ్లు ఉంటాయి. మొక్కలకు నీరు, గాలి, సూర్యకాంతి మరియు పోషకాలు అవసరం.",

              Hindi:
                "पौधे जीवित होते हैं। पौधे में जड़, तना, पत्तियाँ, फूल और फल होते हैं। पौधों को पानी, हवा, धूप और पोषक तत्व चाहिए।"
            },

            keyPoints: {

              English: [
                "Roots absorb water and minerals.",
                "The stem supports the plant.",
                "Leaves help prepare food.",
                "Flowers help produce seeds.",
                "Plants need water, air and sunlight."
              ],

              Telugu: [
                "వేర్లు నీరు మరియు ఖనిజాలను గ్రహిస్తాయి.",
                "కాండం మొక్కకు మద్దతు ఇస్తుంది.",
                "ఆకులు ఆహారం తయారు చేయడంలో సహాయపడతాయి.",
                "పువ్వులు విత్తనాలు ఏర్పడటానికి సహాయపడతాయి.",
                "మొక్కలకు నీరు, గాలి మరియు సూర్యకాంతి అవసరం."
              ],

              Hindi: [
                "जड़ें पानी और खनिज लेती हैं।",
                "तना पौधे को सहारा देता है।",
                "पत्तियाँ भोजन बनाने में मदद करती हैं।",
                "फूल बीज बनाने में मदद करते हैं।",
                "पौधों को पानी, हवा और धूप चाहिए।"
              ]
            },

            activity: {

              English:
                "Observe a plant and draw its roots, stem and leaves.",

              Telugu:
                "ఒక మొక్కను గమనించి దాని వేర్లు, కాండం మరియు ఆకులను గీయండి.",

              Hindi:
                "किसी पौधे को देखकर उसकी जड़, तना और पत्तियाँ बनाएँ।"
            },

            quiz: [

              {
                question: {
                  English: "Which part absorbs water?",
                  Telugu: "నీటిని ఏ భాగం గ్రహిస్తుంది?",
                  Hindi: "पानी कौन सा भाग लेता है?"
                },

                options: {
                  English: ["Roots", "Flowers", "Fruit", "Leaves"],
                  Telugu: ["వేర్లు", "పువ్వులు", "పండు", "ఆకులు"],
                  Hindi: ["जड़", "फूल", "फल", "पत्तियाँ"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Which part helps prepare food?",
                  Telugu: "ఆహారం తయారు చేయడంలో ఏ భాగం సహాయపడుతుంది?",
                  Hindi: "भोजन बनाने में कौन सा भाग मदद करता है?"
                },

                options: {
                  English: ["Fruit", "Leaves", "Roots", "Flowers"],
                  Telugu: ["పండు", "ఆకులు", "వేర్లు", "పువ్వులు"],
                  Hindi: ["फल", "पत्तियाँ", "जड़", "फूल"]
                },

                answer: 1
              },

              {
                question: {
                  English: "What do plants need?",
                  Telugu: "మొక్కలకు ఏమి అవసరం?",
                  Hindi: "पौधों को क्या चाहिए?"
                },

                options: {
                  English: ["Water, air and sunlight", "Plastic", "Darkness", "Metal"],
                  Telugu: ["నీరు, గాలి మరియు సూర్యకాంతి", "ప్లాస్టిక్", "చీకటి", "లోహం"],
                  Hindi: ["पानी, हवा और धूप", "प्लास्टिक", "अंधेरा", "धातु"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      {
        id: "water",
        icon: "💧",

        title: {
          English: "Water in Our Lives",
          Telugu: "మన జీవితంలో నీరు",
          Hindi: "हमारे जीवन में पानी"
        },

        description: {
          English: "Learn why water is important and how to save it.",
          Telugu: "నీరు ఎందుకు ముఖ్యమో మరియు దానిని ఎలా ఆదా చేయాలో తెలుసుకుందాం.",
          Hindi: "जानें कि पानी क्यों महत्वपूर्ण है और इसे कैसे बचाएँ।"
        },

        lessons: [

          {
            id: "water-use",
            visual: "💦",

            title: {
              English: "Using and Saving Water",
              Telugu: "నీటిని ఉపయోగించడం మరియు ఆదా చేయడం",
              Hindi: "पानी का उपयोग और बचत"
            },

            image: "./images/lessons/water.png",

            explanation: {

              English:
                "Water is needed by humans, plants and animals. We use water for drinking, cooking, cleaning and farming. Rain, rivers, lakes and wells are sources of water.",

              Telugu:
                "మనుషులు, మొక్కలు మరియు జంతువులకు నీరు అవసరం. తాగడం, వంట, శుభ్రపరచడం మరియు వ్యవసాయంలో నీటిని ఉపయోగిస్తాము.",

              Hindi:
                "मनुष्यों, पौधों और जानवरों को पानी चाहिए। पानी का उपयोग पीने, खाना बनाने, सफाई और खेती में होता है।"
            },

            keyPoints: {

              English: [
                "All living things need water.",
                "Rain is a natural water source.",
                "Water is used at home.",
                "Water is used for farming.",
                "Do not waste water."
              ],

              Telugu: [
                "అన్ని జీవులకు నీరు అవసరం.",
                "వర్షం సహజ నీటి వనరు.",
                "ఇంట్లో నీటిని ఉపయోగిస్తాము.",
                "వ్యవసాయంలో నీటిని ఉపయోగిస్తాము.",
                "నీటిని వృథా చేయకూడదు."
              ],

              Hindi: [
                "सभी जीवों को पानी चाहिए।",
                "वर्षा प्राकृतिक जल स्रोत है।",
                "घर में पानी उपयोग होता है।",
                "खेती में पानी उपयोग होता है।",
                "पानी बर्बाद नहीं करना चाहिए।"
              ]
            },

            activity: {
              English: "Write five ways your family uses water.",
              Telugu: "మీ కుటుంబం నీటిని ఉపయోగించే ఐదు విధానాలను రాయండి.",
              Hindi: "आपका परिवार पानी का उपयोग किन पाँच तरीकों से करता है, लिखें।"
            },

            quiz: [

              {
                question: {
                  English: "Which is a natural water source?",
                  Telugu: "సహజ నీటి వనరు ఏది?",
                  Hindi: "प्राकृतिक जल स्रोत कौन सा है?"
                },

                options: {
                  English: ["Rain", "Plastic", "Book", "Glass"],
                  Telugu: ["వర్షం", "ప్లాస్టిక్", "పుస్తకం", "గాజు"],
                  Hindi: ["वर्षा", "प्लास्टिक", "किताब", "काँच"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Which action saves water?",
                  Telugu: "నీటిని ఆదా చేసే చర్య ఏది?",
                  Hindi: "कौन सा काम पानी बचाता है?"
                },

                options: {
                  English: ["Close taps", "Leave taps open", "Waste water", "Play with water"],
                  Telugu: ["కుళాయిని మూయడం", "తెరిచి ఉంచడం", "నీటిని వృథా చేయడం", "నీటితో ఆడడం"],
                  Hindi: ["नल बंद करना", "नल खुला रखना", "पानी बर्बाद करना", "पानी से खेलना"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Who needs water?",
                  Telugu: "నీరు ఎవరికీ అవసరం?",
                  Hindi: "पानी किसे चाहिए?"
                },

                options: {
                  English: ["People, plants and animals", "Only humans", "Only plants", "Only animals"],
                  Telugu: ["మనుషులు, మొక్కలు మరియు జంతువులు", "మనుషులు మాత్రమే", "మొక్కలు మాత్రమే", "జంతువులు మాత్రమే"],
                  Hindi: ["मनुष्य, पौधे और जानवर", "केवल मनुष्य", "केवल पौधे", "केवल जानवर"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      {
        id: "animals",
        icon: "🐘",

        title: {
          English: "Animals Around Us",
          Telugu: "మన చుట్టూ జంతువులు",
          Hindi: "हमारे आसपास के जानवर"
        },

        description: {
          English: "Learn about animals and their habitats.",
          Telugu: "జంతువులు మరియు వాటి నివాసాల గురించి తెలుసుకుందాం.",
          Hindi: "जानवरों और उनके आवासों के बारे में जानें।"
        },

        lessons: [

          {
            id: "animal-homes",
            visual: "🦁",

            title: {
              English: "Animals and Their Homes",
              Telugu: "జంతువులు మరియు వాటి నివాసాలు",
              Hindi: "जानवर और उनके घर"
            },

            image: "./images/lessons/animals.png",

            explanation: {

              English:
                "Animals live in different habitats. Fish live in water, birds build nests and many wild animals live in forests.",

              Telugu:
                "జంతువులు వివిధ నివాసాల్లో జీవిస్తాయి. చేపలు నీటిలో, పక్షులు గూళ్లలో మరియు అడవి జంతువులు అడవుల్లో జీవిస్తాయి.",

              Hindi:
                "जानवर अलग-अलग आवासों में रहते हैं। मछलियाँ पानी में, पक्षी घोंसलों में और कई जानवर जंगलों में रहते हैं।"
            },

            keyPoints: {

              English: [
                "Animals have different habitats.",
                "Fish live in water.",
                "Birds build nests.",
                "Wild animals may live in forests.",
                "Domestic animals may live near people."
              ],

              Telugu: [
                "జంతువులకు వివిధ నివాసాలు ఉంటాయి.",
                "చేపలు నీటిలో జీవిస్తాయి.",
                "పక్షులు గూళ్లు కడతాయి.",
                "అడవి జంతువులు అడవుల్లో జీవించవచ్చు.",
                "పెంపుడు జంతువులు మనుషుల దగ్గర జీవిస్తాయి."
              ],

              Hindi: [
                "जानवरों के अलग आवास होते हैं।",
                "मछलियाँ पानी में रहती हैं।",
                "पक्षी घोंसले बनाते हैं।",
                "जंगली जानवर जंगलों में रह सकते हैं।",
                "पालतू जानवर लोगों के पास रहते हैं।"
              ]
            },

            activity: {
              English: "Observe three animals or birds and write where you saw them.",
              Telugu: "మూడు జంతువులు లేదా పక్షులను గమనించి అవి ఎక్కడ కనిపించాయో రాయండి.",
              Hindi: "तीन जानवर या पक्षी देखें और लिखें कि वे कहाँ दिखाई दिए।"
            },

            quiz: [

              {
                question: {
                  English: "Where do fish live?",
                  Telugu: "చేపలు ఎక్కడ జీవిస్తాయి?",
                  Hindi: "मछलियाँ कहाँ रहती हैं?"
                },

                options: {
                  English: ["Water", "Tree", "Road", "Desert"],
                  Telugu: ["నీరు", "చెట్టు", "రోడ్డు", "ఎడారి"],
                  Hindi: ["पानी", "पेड़", "सड़क", "रेगिस्तान"]
                },

                answer: 0
              },

              {
                question: {
                  English: "What do birds build?",
                  Telugu: "పక్షులు ఏమి కడతాయి?",
                  Hindi: "पक्षी क्या बनाते हैं?"
                },

                options: {
                  English: ["Nests", "Cars", "Roads", "Boats"],
                  Telugu: ["గూళ్లు", "కార్లు", "రోడ్లు", "పడవలు"],
                  Hindi: ["घोंसले", "कारें", "सड़कें", "नावें"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Where do many wild animals live?",
                  Telugu: "చాలా అడవి జంతువులు ఎక్కడ జీవిస్తాయి?",
                  Hindi: "कई जंगली जानवर कहाँ रहते हैं?"
                },

                options: {
                  English: ["Forests", "Classrooms", "Cars", "Shops"],
                  Telugu: ["అడవులు", "తరగతి గదులు", "కార్లు", "దుకాణాలు"],
                  Hindi: ["जंगल", "कक्षाएँ", "कारें", "दुकानें"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      {
        id: "food",
        icon: "🥗",

        title: {
          English: "Food and Healthy Habits",
          Telugu: "ఆహారం మరియు ఆరోగ్యకరమైన అలవాట్లు",
          Hindi: "भोजन और स्वस्थ आदतें"
        },

        description: {
          English: "Learn about food and healthy habits.",
          Telugu: "ఆహారం మరియు ఆరోగ్యకరమైన అలవాట్ల గురించి తెలుసుకుందాం.",
          Hindi: "भोजन और स्वस्थ आदतों के बारे में जानें।"
        },

        lessons: [

          {
            id: "healthy-food",
            visual: "🍎",

            title: {
              English: "Food for Growth and Energy",
              Telugu: "పెరుగుదల మరియు శక్తికి ఆహారం",
              Hindi: "विकास और ऊर्जा के लिए भोजन"
            },

            image: "./images/lessons/healthy-food.png",

            explanation: {

              English:
                "Food gives us energy and nutrients. Different foods provide different nutrients. Washing hands before eating is an important healthy habit.",

              Telugu:
                "ఆహారం మనకు శక్తి మరియు పోషకాలను ఇస్తుంది. తినే ముందు చేతులు కడుక్కోవడం మంచి అలవాటు.",

              Hindi:
                "भोजन हमें ऊर्जा और पोषक तत्व देता है। खाने से पहले हाथ धोना अच्छी आदत है।"
            },

            keyPoints: {

              English: [
                "Food gives energy.",
                "Food helps growth.",
                "Different foods provide nutrients.",
                "Wash hands before eating.",
                "Keep food clean."
              ],

              Telugu: [
                "ఆహారం శక్తిని ఇస్తుంది.",
                "ఆహారం పెరుగుదలకు సహాయపడుతుంది.",
                "వివిధ ఆహారాలు పోషకాలను అందిస్తాయి.",
                "తినే ముందు చేతులు కడుక్కోవాలి.",
                "ఆహారాన్ని శుభ్రంగా ఉంచాలి."
              ],

              Hindi: [
                "भोजन ऊर्जा देता है।",
                "भोजन वृद्धि में मदद करता है।",
                "अलग भोजन पोषक तत्व देता है।",
                "खाने से पहले हाथ धोएँ।",
                "भोजन साफ रखें।"
              ]
            },

            activity: {
              English: "Write five foods you ate today.",
              Telugu: "ఈ రోజు మీరు తిన్న ఐదు ఆహారాల పేర్లు రాయండి.",
              Hindi: "आज आपने जो पाँच भोजन खाए उनके नाम लिखें।"
            },

            quiz: [

              {
                question: {
                  English: "Why do we need food?",
                  Telugu: "మనకు ఆహారం ఎందుకు అవసరం?",
                  Hindi: "हमें भोजन क्यों चाहिए?"
                },

                options: {
                  English: ["Energy and growth", "Roads", "Colour", "Nothing"],
                  Telugu: ["శక్తి మరియు పెరుగుదల", "రోడ్లు", "రంగు", "ఏమీ కాదు"],
                  Hindi: ["ऊर्जा और वृद्धि", "सड़कें", "रंग", "कुछ नहीं"]
                },

                answer: 0
              },

              {
                question: {
                  English: "What should we do before eating?",
                  Telugu: "తినే ముందు ఏమి చేయాలి?",
                  Hindi: "खाने से पहले क्या करना चाहिए?"
                },

                options: {
                  English: ["Wash hands", "Dirty hands", "Throw food", "Run"],
                  Telugu: ["చేతులు కడుక్కోవాలి", "చేతులు మురికిగా ఉంచాలి", "ఆహారం పారేయాలి", "పరుగెత్తాలి"],
                  Hindi: ["हाथ धोएँ", "हाथ गंदे रखें", "भोजन फेंकें", "दौड़ें"]
                },

                answer: 0
              },

              {
                question: {
                  English: "What does food give?",
                  Telugu: "ఆహారం ఏమి ఇస్తుంది?",
                  Hindi: "भोजन क्या देता है?"
                },

                options: {
                  English: ["Energy", "Plastic", "Smoke", "Dust"],
                  Telugu: ["శక్తి", "ప్లాస్టిక్", "పొగ", "దుమ్ము"],
                  Hindi: ["ऊर्जा", "प्लास्टिक", "धुआँ", "धूल"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      {
        id: "family",
        icon: "👨‍👩‍👧‍👦",

        title: {
          English: "Family and Community",
          Telugu: "కుటుంబం మరియు సమాజం",
          Hindi: "परिवार और समुदाय"
        },

        description: {
          English: "Learn about cooperation and helping one another.",
          Telugu: "సహకారం మరియు ఒకరికి ఒకరు సహాయం చేయడం గురించి తెలుసుకుందాం.",
          Hindi: "सहयोग और एक-दूसरे की मदद के बारे में जानें।"
        },

        lessons: [

          {
            id: "helping",
            visual: "🏡",

            title: {
              English: "Living and Working Together",
              Telugu: "కలిసి జీవించడం మరియు పనిచేయడం",
              Hindi: "मिलकर रहना और काम करना"
            },

            image: "./images/lessons/clean-home.png",

            explanation: {

              English:
                "Families and communities work better when people help one another, share responsibilities and respect each other.",

              Telugu:
                "కుటుంబాలు మరియు సమాజాల్లో వ్యక్తులు ఒకరికి ఒకరు సహాయం చేసి బాధ్యతలను పంచుకుంటే మంచిది.",

              Hindi:
                "परिवार और समुदाय तब बेहतर होते हैं जब लोग एक-दूसरे की मदद करते हैं और जिम्मेदारियाँ बाँटते हैं।"
            },

            keyPoints: {

              English: [
                "Family members help each other.",
                "People share responsibilities.",
                "Respect is important.",
                "Kindness is important.",
                "Cooperation makes work easier."
              ],

              Telugu: [
                "కుటుంబ సభ్యులు ఒకరికి ఒకరు సహాయం చేస్తారు.",
                "బాధ్యతలను పంచుకుంటారు.",
                "గౌరవం ముఖ్యమైనది.",
                "దయ ముఖ్యమైనది.",
                "సహకారం పనిని సులభం చేస్తుంది."
              ],

              Hindi: [
                "परिवार के सदस्य मदद करते हैं।",
                "जिम्मेदारियाँ बाँटी जाती हैं।",
                "सम्मान जरूरी है।",
                "दयालुता जरूरी है।",
                "सहयोग काम आसान बनाता है।"
              ]
            },

            activity: {
              English: "Write three ways you help at home.",
              Telugu: "మీరు ఇంట్లో సహాయం చేసే మూడు విధానాలను రాయండి.",
              Hindi: "घर में मदद करने के तीन तरीके लिखें।"
            },

            quiz: [

              {
                question: {
                  English: "What helps people work together?",
                  Telugu: "కలిసి పనిచేయడానికి ఏమి సహాయపడుతుంది?",
                  Hindi: "लोगों को मिलकर काम करने में क्या मदद करता है?"
                },

                options: {
                  English: ["Cooperation", "Fighting", "Ignoring", "Wasting"],
                  Telugu: ["సహకారం", "గొడవ", "పట్టించుకోకపోవడం", "వృథా"],
                  Hindi: ["सहयोग", "झगड़ा", "नजरअंदाज करना", "बर्बादी"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Which is a good habit?",
                  Telugu: "మంచి అలవాటు ఏది?",
                  Hindi: "अच्छी आदत कौन सी है?"
                },

                options: {
                  English: ["Respect others", "Be rude", "Never help", "Damage things"],
                  Telugu: ["ఇతరులను గౌరవించడం", "అసభ్యంగా ఉండడం", "సహాయం చేయకపోవడం", "వస్తువులను పాడుచేయడం"],
                  Hindi: ["दूसरों का सम्मान", "बुरा व्यवहार", "मदद न करना", "चीजें खराब करना"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Sharing work makes tasks...",
                  Telugu: "పనిని పంచుకుంటే పనులు...",
                  Hindi: "काम बाँटने से काम..."
                },

                options: {
                  English: ["Easier", "Impossible", "Dangerous", "Useless"],
                  Telugu: ["సులభం", "అసాధ్యం", "ప్రమాదకరం", "ఉపయోగం లేదు"],
                  Hindi: ["आसान", "असंभव", "खतरनाक", "बेकार"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      {
        id: "travel",
        icon: "🚌",

        title: {
          English: "Travel and Safety",
          Telugu: "ప్రయాణం మరియు భద్రత",
          Hindi: "यात्रा और सुरक्षा"
        },

        description: {
          English: "Learn simple travel and road safety rules.",
          Telugu: "ప్రయాణం మరియు రోడ్డు భద్రతా నియమాలను తెలుసుకుందాం.",
          Hindi: "यात्रा और सड़क सुरक्षा के सरल नियम जानें।"
        },

        lessons: [

          {
            id: "safe-travel",
            visual: "🚦",

            title: {
              English: "Travelling Safely",
              Telugu: "సురక్షితంగా ప్రయాణించడం",
              Hindi: "सुरक्षित यात्रा"
            },

            image: "",

            explanation: {

              English:
                "People travel by walking, bicycles, buses, cars and trains. Following traffic rules and crossing roads at safe places helps protect everyone.",

              Telugu:
                "మనుషులు నడిచి, సైకిళ్లు, బస్సులు, కార్లు మరియు రైళ్లలో ప్రయాణిస్తారు. ట్రాఫిక్ నియమాలను పాటించడం భద్రతకు సహాయపడుతుంది.",

              Hindi:
                "लोग पैदल, साइकिल, बस, कार और ट्रेन से यात्रा करते हैं। यातायात नियमों का पालन करना सुरक्षा में मदद करता है।"
            },

            keyPoints: {

              English: [
                "Use safe crossing places.",
                "Follow traffic signals.",
                "Stay alert near roads.",
                "Follow vehicle safety rules.",
                "Travel safely."
              ],

              Telugu: [
                "సురక్షిత క్రాసింగ్‌లను ఉపయోగించాలి.",
                "ట్రాఫిక్ సంకేతాలను పాటించాలి.",
                "రోడ్ల దగ్గర జాగ్రత్తగా ఉండాలి.",
                "వాహన భద్రతా నియమాలను పాటించాలి.",
                "సురక్షితంగా ప్రయాణించాలి."
              ],

              Hindi: [
                "सुरक्षित स्थान से सड़क पार करें।",
                "यातायात संकेत मानें।",
                "सड़क के पास सावधान रहें।",
                "वाहन सुरक्षा नियम मानें।",
                "सुरक्षित यात्रा करें।"
              ]
            },

            activity: {
              English: "Draw a traffic signal and label red, yellow and green.",
              Telugu: "ట్రాఫిక్ సిగ్నల్‌ను గీసి ఎరుపు, పసుపు మరియు ఆకుపచ్చ రంగులను గుర్తించండి.",
              Hindi: "ट्रैफिक सिग्नल बनाएँ और लाल, पीला और हरा रंग लिखें।"
            },

            quiz: [

              {
                question: {
                  English: "What should we follow on roads?",
                  Telugu: "రోడ్లపై ఏమి పాటించాలి?",
                  Hindi: "सड़क पर क्या मानना चाहिए?"
                },

                options: {
                  English: ["Traffic rules", "No rules", "Games", "Advertisements"],
                  Telugu: ["ట్రాఫిక్ నియమాలు", "ఏ నియమాలు కాదు", "ఆటలు", "ప్రకటనలు"],
                  Hindi: ["यातायात नियम", "कोई नियम नहीं", "खेल", "विज्ञापन"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Where should we cross a road?",
                  Telugu: "రోడ్డును ఎక్కడ దాటాలి?",
                  Hindi: "सड़क कहाँ पार करनी चाहिए?"
                },

                options: {
                  English: ["Safe crossing", "Anywhere", "Traffic middle", "Behind vehicles"],
                  Telugu: ["సురక్షిత క్రాసింగ్", "ఎక్కడైనా", "ట్రాఫిక్ మధ్యలో", "వాహనాల వెనుక"],
                  Hindi: ["सुरक्षित क्रॉसिंग", "कहीं भी", "यातायात के बीच", "वाहनों के पीछे"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Why are safety rules important?",
                  Telugu: "భద్రతా నియమాలు ఎందుకు ముఖ్యమైనవి?",
                  Hindi: "सुरक्षा नियम क्यों महत्वपूर्ण हैं?"
                },

                options: {
                  English: ["Keep us safe", "Waste time", "Cause danger", "Stop learning"],
                  Telugu: ["మనలను సురక్షితంగా ఉంచుతాయి", "సమయం వృథా", "ప్రమాదం", "చదువును ఆపుతాయి"],
                  Hindi: ["हमें सुरक्षित रखते हैं", "समय बर्बाद", "खतरा", "पढ़ाई रोकते हैं"]
                },

                answer: 0
              }

            ]
          }

        ]
      }

    ]
  },


  // ====================================================
  // CLASS 4
  // ====================================================

  class4: {

    subject: {
      English: "Environmental Studies",
      Telugu: "పర్యావరణ అధ్యయనం",
      Hindi: "पर्यावरण अध्ययन"
    },

    chapters: [

      {
        id: "environment",
        icon: "🌍",

        title: {
          English: "Our Environment",
          Telugu: "మన పర్యావరణం",
          Hindi: "हमारा पर्यावरण"
        },

        description: {
          English: "Understand living and non-living things.",
          Telugu: "జీవ మరియు నిర్జీవ అంశాలను తెలుసుకుందాం.",
          Hindi: "जीवित और निर्जीव चीजों के बारे में जानें।"
        },

        lessons: [

          {
            id: "living-nonliving",
            visual: "🌎",

            title: {
              English: "Living and Non-Living Things",
              Telugu: "జీవులు మరియు నిర్జీవ వస్తువులు",
              Hindi: "जीवित और निर्जीव चीजें"
            },

            image: "./images/lessons/environment.png",

            explanation: {

              English:
                "Our environment contains living and non-living things. Plants, animals and humans are living. Water, rocks, soil and air are non-living parts of the environment.",

              Telugu:
                "మన పర్యావరణంలో జీవ మరియు నిర్జీవ అంశాలు ఉంటాయి. మొక్కలు, జంతువులు మరియు మనుషులు జీవులు. నీరు, రాళ్లు, నేల మరియు గాలి నిర్జీవ అంశాలు.",

              Hindi:
                "हमारे पर्यावरण में जीवित और निर्जीव चीजें होती हैं। पौधे, जानवर और मनुष्य जीवित हैं। पानी, मिट्टी और हवा निर्जीव हैं।"
            },

            keyPoints: {

              English: [
                "Plants are living.",
                "Animals are living.",
                "Living things grow.",
                "Air, water and soil are non-living.",
                "Living things depend on the environment."
              ],

              Telugu: [
                "మొక్కలు జీవులు.",
                "జంతువులు జీవులు.",
                "జీవులు పెరుగుతాయి.",
                "గాలి, నీరు మరియు నేల నిర్జీవం.",
                "జీవులు పర్యావరణంపై ఆధారపడతాయి."
              ],

              Hindi: [
                "पौधे जीवित हैं।",
                "जानवर जीवित हैं।",
                "जीवित चीजें बढ़ती हैं।",
                "हवा, पानी और मिट्टी निर्जीव हैं।",
                "जीवित चीजें पर्यावरण पर निर्भर हैं।"
              ]
            },

            activity: {
              English: "Write five living and five non-living things.",
              Telugu: "ఐదు జీవులు మరియు ఐదు నిర్జీవ వస్తువులను రాయండి.",
              Hindi: "पाँच जीवित और पाँच निर्जीव चीजें लिखें।"
            },

            quiz: [

              {
                question: {
                  English: "Which is living?",
                  Telugu: "జీవి ఏది?",
                  Hindi: "जीवित कौन है?"
                },

                options: {
                  English: ["Tree", "Rock", "Chair", "Bottle"],
                  Telugu: ["చెట్టు", "రాయి", "కుర్చీ", "సీసా"],
                  Hindi: ["पेड़", "चट्टान", "कुर्सी", "बोतल"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Which is non-living?",
                  Telugu: "నిర్జీవం ఏది?",
                  Hindi: "निर्जीव क्या है?"
                },

                options: {
                  English: ["Rock", "Bird", "Dog", "Plant"],
                  Telugu: ["రాయి", "పక్షి", "కుక్క", "మొక్క"],
                  Hindi: ["चट्टान", "पक्षी", "कुत्ता", "पौधा"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Living things depend on...",
                  Telugu: "జీవులు దేనిపై ఆధారపడతాయి?",
                  Hindi: "जीवित चीजें किस पर निर्भर हैं?"
                },

                options: {
                  English: ["Environment", "Plastic", "Machines", "Nothing"],
                  Telugu: ["పర్యావరణం", "ప్లాస్టిక్", "యంత్రాలు", "ఏమీ కాదు"],
                  Hindi: ["पर्यावरण", "प्लास्टिक", "मशीनें", "कुछ नहीं"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      {
        id: "plants-trees",
        icon: "🌳",

        title: {
          English: "Plants and Trees",
          Telugu: "మొక్కలు మరియు చెట్లు",
          Hindi: "पौधे और पेड़"
        },

        description: {
          English: "Learn why plants and trees are important.",
          Telugu: "మొక్కలు మరియు చెట్లు ఎందుకు ముఖ్యమో తెలుసుకుందాం.",
          Hindi: "जानें कि पौधे और पेड़ क्यों महत्वपूर्ण हैं।"
        },

        lessons: [

          {
            id: "importance-plants",
            visual: "🌲",

            title: {
              English: "Why Plants Are Important",
              Telugu: "మొక్కలు ఎందుకు ముఖ్యమైనవి",
              Hindi: "पौधे क्यों महत्वपूर्ण हैं"
            },

            image: "./images/lessons/trees.png",

            explanation: {

              English:
                "Plants provide food, contribute oxygen to the air, give shade and provide habitats for many organisms. Tree roots also help hold soil together.",

              Telugu:
                "మొక్కలు ఆహారం, నీడ మరియు అనేక జీవులకు నివాసం అందిస్తాయి. చెట్ల వేర్లు నేలను పట్టుకోవడంలో సహాయపడతాయి.",

              Hindi:
                "पौधे भोजन, छाया और कई जीवों को आवास देते हैं। पेड़ों की जड़ें मिट्टी को पकड़ने में मदद करती हैं।"
            },

            keyPoints: {

              English: [
                "Plants provide food.",
                "Plants contribute oxygen.",
                "Trees provide shade.",
                "Animals may depend on trees.",
                "Roots help hold soil."
              ],

              Telugu: [
                "మొక్కలు ఆహారం అందిస్తాయి.",
                "మొక్కలు ఆక్సిజన్‌కు సహకరిస్తాయి.",
                "చెట్లు నీడ ఇస్తాయి.",
                "జంతువులు చెట్లపై ఆధారపడవచ్చు.",
                "వేర్లు నేలను పట్టుకుంటాయి."
              ],

              Hindi: [
                "पौधे भोजन देते हैं।",
                "पौधे ऑक्सीजन में योगदान देते हैं।",
                "पेड़ छाया देते हैं।",
                "जानवर पेड़ों पर निर्भर हो सकते हैं।",
                "जड़ें मिट्टी पकड़ती हैं।"
              ]
            },

            activity: {
              English: "Observe one tree and identify animals, birds or insects using it.",
              Telugu: "ఒక చెట్టును గమనించి దానిని ఉపయోగించే జంతువులు, పక్షులు లేదా పురుగులను గుర్తించండి.",
              Hindi: "एक पेड़ देखें और उसे उपयोग करने वाले पक्षी या जानवर पहचानें।"
            },

            quiz: [

              {
                question: {
                  English: "What do trees provide?",
                  Telugu: "చెట్లు ఏమి అందిస్తాయి?",
                  Hindi: "पेड़ क्या देते हैं?"
                },

                options: {
                  English: ["Shade", "Plastic", "Metal", "Glass"],
                  Telugu: ["నీడ", "ప్లాస్టిక్", "లోహం", "గాజు"],
                  Hindi: ["छाया", "प्लास्टिक", "धातु", "काँच"]
                },

                answer: 0
              },

              {
                question: {
                  English: "What helps hold soil?",
                  Telugu: "నేలను పట్టుకోవడంలో ఏది సహాయపడుతుంది?",
                  Hindi: "मिट्टी को पकड़ने में क्या मदद करता है?"
                },

                options: {
                  English: ["Roots", "Clouds", "Cars", "Plastic"],
                  Telugu: ["వేర్లు", "మేఘాలు", "కార్లు", "ప్లాస్టిక్"],
                  Hindi: ["जड़ें", "बादल", "कारें", "प्लास्टिक"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Who can depend on trees?",
                  Telugu: "చెట్లపై ఎవరు ఆధారపడవచ్చు?",
                  Hindi: "पेड़ों पर कौन निर्भर हो सकता है?"
                },

                options: {
                  English: ["Birds and animals", "Cars", "Computers", "Roads"],
                  Telugu: ["పక్షులు మరియు జంతువులు", "కార్లు", "కంప్యూటర్లు", "రోడ్లు"],
                  Hindi: ["पक्षी और जानवर", "कारें", "कंप्यूटर", "सड़कें"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      {
        id: "habitats",
        icon: "🐾",

        title: {
          English: "Animals and Habitats",
          Telugu: "జంతువులు మరియు నివాసాలు",
          Hindi: "जानवर और आवास"
        },

        description: {
          English: "Discover different animal habitats.",
          Telugu: "వివిధ జంతు నివాసాలను తెలుసుకుందాం.",
          Hindi: "विभिन्न जानवरों के आवास जानें।"
        },

        lessons: [

          {
            id: "habitats",
            visual: "🦌",

            title: {
              English: "Different Places, Different Animals",
              Telugu: "వేర్వేరు ప్రదేశాలు, వేర్వేరు జంతువులు",
              Hindi: "अलग स्थान, अलग जानवर"
            },

            image: "./images/lessons/animal-habitat.png",

            explanation: {

              English:
                "A habitat provides animals with food, water, shelter and space. Different animals live in forests, grasslands, deserts and water bodies.",

              Telugu:
                "నివాసం జంతువుకు ఆహారం, నీరు, ఆశ్రయం మరియు స్థలం అందిస్తుంది. వివిధ జంతువులు వివిధ నివాసాల్లో జీవిస్తాయి.",

              Hindi:
                "आवास जानवर को भोजन, पानी, आश्रय और स्थान देता है। अलग जानवर अलग आवासों में रहते हैं।"
            },

            keyPoints: {

              English: [
                "A habitat is an animal's living place.",
                "Habitats provide food.",
                "Habitats provide water.",
                "Habitats provide shelter.",
                "Different animals have different habitats."
              ],

              Telugu: [
                "నివాసం జంతువు జీవించే ప్రదేశం.",
                "నివాసం ఆహారం అందిస్తుంది.",
                "నివాసం నీరు అందిస్తుంది.",
                "నివాసం ఆశ్రయం ఇస్తుంది.",
                "వివిధ జంతువులకు వేర్వేరు నివాసాలు ఉంటాయి."
              ],

              Hindi: [
                "आवास जानवर का रहने का स्थान है।",
                "आवास भोजन देता है।",
                "आवास पानी देता है।",
                "आवास आश्रय देता है।",
                "अलग जानवरों के अलग आवास होते हैं।"
              ]
            },

            activity: {
              English: "Choose four animals and match them with their habitats.",
              Telugu: "నాలుగు జంతువులను వాటి నివాసాలతో జత చేయండి.",
              Hindi: "चार जानवरों को उनके आवास से मिलाएँ।"
            },

            quiz: [

              {
                question: {
                  English: "What does a habitat provide?",
                  Telugu: "నివాసం ఏమి అందిస్తుంది?",
                  Hindi: "आवास क्या देता है?"
                },

                options: {
                  English: ["Food, water and shelter", "Toys", "Roads", "Books"],
                  Telugu: ["ఆహారం, నీరు మరియు ఆశ్రయం", "బొమ్మలు", "రోడ్లు", "పుస్తకాలు"],
                  Hindi: ["भोजन, पानी और आश्रय", "खिलौने", "सड़क", "किताबें"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Where are fish adapted to live?",
                  Telugu: "చేపలు ఎక్కడ జీవిస్తాయి?",
                  Hindi: "मछलियाँ कहाँ रहने के अनुकूल हैं?"
                },

                options: {
                  English: ["Water", "Desert", "Road", "Tree"],
                  Telugu: ["నీరు", "ఎడారి", "రోడ్డు", "చెట్టు"],
                  Hindi: ["पानी", "रेगिस्तान", "सड़क", "पेड़"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Which is a habitat?",
                  Telugu: "నివాసం ఏది?",
                  Hindi: "आवास कौन सा है?"
                },

                options: {
                  English: ["Forest", "Notebook", "Television", "Pencil"],
                  Telugu: ["అడవి", "నోటుబుక్", "టెలివిజన్", "పెన్సిల్"],
                  Hindi: ["जंगल", "कॉपी", "टेलीविजन", "पेंसिल"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      {
        id: "water-use",
        icon: "💧",

        title: {
          English: "Water and Its Uses",
          Telugu: "నీరు మరియు దాని ఉపయోగాలు",
          Hindi: "पानी और उसके उपयोग"
        },

        description: {
          English: "Learn about responsible water use.",
          Telugu: "బాధ్యతాయుతమైన నీటి వినియోగం గురించి తెలుసుకుందాం.",
          Hindi: "जिम्मेदार जल उपयोग के बारे में जानें।"
        },

        lessons: [

          {
            id: "water-importance",
            visual: "🚰",

            title: {
              English: "Water Is Precious",
              Telugu: "నీరు అమూల్యమైనది",
              Hindi: "पानी अनमोल है"
            },

            image: "./images/lessons/water-conservation.png",

            explanation: {

              English:
                "Water is necessary for drinking, agriculture and cleaning. Fresh water available for human use is limited, so we should use it carefully.",

              Telugu:
                "తాగడం, వ్యవసాయం మరియు శుభ్రపరచడానికి నీరు అవసరం. స్వచ్ఛమైన నీరు పరిమితంగా ఉంటుంది కాబట్టి జాగ్రత్తగా ఉపయోగించాలి.",

              Hindi:
                "पीने, खेती और सफाई के लिए पानी जरूरी है। मीठा पानी सीमित है, इसलिए इसका सावधानी से उपयोग करना चाहिए।"
            },

            keyPoints: {

              English: [
                "Water is essential.",
                "Water is used in agriculture.",
                "Fresh water is limited.",
                "Leaks waste water.",
                "Use water responsibly."
              ],

              Telugu: [
                "నీరు అవసరం.",
                "వ్యవసాయంలో నీటిని ఉపయోగిస్తారు.",
                "స్వచ్ఛమైన నీరు పరిమితంగా ఉంది.",
                "లీకేజీలు నీటిని వృథా చేస్తాయి.",
                "నీటిని బాధ్యతగా ఉపయోగించాలి."
              ],

              Hindi: [
                "पानी जरूरी है।",
                "खेती में पानी उपयोग होता है।",
                "मीठा पानी सीमित है।",
                "रिसाव पानी बर्बाद करता है।",
                "पानी जिम्मेदारी से उपयोग करें।"
              ]
            },

            activity: {
              English: "Identify one place at home where water could be saved.",
              Telugu: "ఇంట్లో నీటిని ఆదా చేయగల ఒక ప్రదేశాన్ని గుర్తించండి.",
              Hindi: "घर में एक जगह पहचानें जहाँ पानी बचाया जा सकता है।"
            },

            quiz: [

              {
                question: {
                  English: "Why should we save water?",
                  Telugu: "నీటిని ఎందుకు ఆదా చేయాలి?",
                  Hindi: "पानी क्यों बचाना चाहिए?"
                },

                options: {
                  English: ["Fresh water is limited", "Water is useless", "Cars need all water", "No reason"],
                  Telugu: ["స్వచ్ఛమైన నీరు పరిమితం", "నీటికి ఉపయోగం లేదు", "కార్లకే నీరు", "కారణం లేదు"],
                  Hindi: ["मीठा पानी सीमित है", "पानी बेकार है", "कारों को सारा पानी चाहिए", "कोई कारण नहीं"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Where is water used?",
                  Telugu: "నీటిని ఎక్కడ ఉపయోగిస్తారు?",
                  Hindi: "पानी कहाँ उपयोग होता है?"
                },

                options: {
                  English: ["Agriculture", "Screens only", "Books only", "Roads only"],
                  Telugu: ["వ్యవసాయం", "స్క్రీన్‌లు", "పుస్తకాలు", "రోడ్లు"],
                  Hindi: ["खेती", "स्क्रीन", "किताबें", "सड़कें"]
                },

                answer: 0
              },

              {
                question: {
                  English: "What can waste water?",
                  Telugu: "నీటిని ఏది వృథా చేస్తుంది?",
                  Hindi: "पानी किससे बर्बाद होता है?"
                },

                options: {
                  English: ["Leaking tap", "Closed tap", "Saving water", "Rain collection"],
                  Telugu: ["లీక్ కుళాయి", "మూసిన కుళాయి", "నీటిని ఆదా చేయడం", "వర్షపు నీరు సేకరణ"],
                  Hindi: ["टपकता नल", "बंद नल", "पानी बचाना", "वर्षा जल संग्रह"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      {
        id: "agriculture",
        icon: "🌾",

        title: {
          English: "Food and Agriculture",
          Telugu: "ఆహారం మరియు వ్యవసాయం",
          Hindi: "भोजन और कृषि"
        },

        description: {
          English: "Learn how farmers grow crops.",
          Telugu: "రైతులు పంటలను ఎలా పండిస్తారో తెలుసుకుందాం.",
          Hindi: "जानें कि किसान फसलें कैसे उगाते हैं।"
        },

        lessons: [

          {
            id: "farm-food",
            visual: "🚜",

            title: {
              English: "From Farm to Food",
              Telugu: "పొలం నుండి ఆహారం వరకు",
              Hindi: "खेत से भोजन तक"
            },

            image: "./images/lessons/agriculture.png",

            explanation: {

              English:
                "Farmers grow crops. Farming can include preparing soil, sowing seeds, watering plants, caring for crops and harvesting them.",

              Telugu:
                "రైతులు పంటలను పండిస్తారు. నేలను సిద్ధం చేయడం, విత్తనాలు వేయడం, నీరు పెట్టడం మరియు కోత కోయడం వ్యవసాయ దశలు.",

              Hindi:
                "किसान फसलें उगाते हैं। मिट्टी तैयार करना, बीज बोना, पानी देना और कटाई खेती के चरण हैं।"
            },

            keyPoints: {

              English: [
                "Farmers grow crops.",
                "Seeds are planted in soil.",
                "Plants need water.",
                "Crops need care.",
                "Harvesting collects mature crops."
              ],

              Telugu: [
                "రైతులు పంటలను పండిస్తారు.",
                "విత్తనాలను నేలలో వేస్తారు.",
                "మొక్కలకు నీరు అవసరం.",
                "పంటలకు సంరక్షణ అవసరం.",
                "పండిన పంటను కోస్తారు."
              ],

              Hindi: [
                "किसान फसलें उगाते हैं।",
                "बीज मिट्टी में बोए जाते हैं।",
                "पौधों को पानी चाहिए।",
                "फसल की देखभाल जरूरी है।",
                "पकी फसल की कटाई होती है।"
              ]
            },

            activity: {
              English: "Choose one food and find which crop it comes from.",
              Telugu: "ఒక ఆహారాన్ని ఎంచుకుని అది ఏ పంట నుండి వస్తుందో తెలుసుకోండి.",
              Hindi: "एक भोजन चुनें और पता करें कि वह किस फसल से आता है।"
            },

            quiz: [

              {
                question: {
                  English: "Who grows crops?",
                  Telugu: "పంటలను ఎవరు పండిస్తారు?",
                  Hindi: "फसलें कौन उगाता है?"
                },

                options: {
                  English: ["Farmers", "Pilots", "Drivers", "Painters"],
                  Telugu: ["రైతులు", "పైలట్లు", "డ్రైవర్లు", "చిత్రకారులు"],
                  Hindi: ["किसान", "पायलट", "ड्राइवर", "चित्रकार"]
                },

                answer: 0
              },

              {
                question: {
                  English: "What is planted in soil?",
                  Telugu: "నేలలో ఏమి వేస్తారు?",
                  Hindi: "मिट्टी में क्या बोया जाता है?"
                },

                options: {
                  English: ["Seeds", "Plastic", "Glass", "Metal"],
                  Telugu: ["విత్తనాలు", "ప్లాస్టిక్", "గాజు", "లోహం"],
                  Hindi: ["बीज", "प्लास्टिक", "काँच", "धातु"]
                },

                answer: 0
              },

              {
                question: {
                  English: "What is harvesting?",
                  Telugu: "కోత అంటే ఏమిటి?",
                  Hindi: "कटाई क्या है?"
                },

                options: {
                  English: ["Collecting mature crops", "Throwing crops", "Building roads", "Making plastic"],
                  Telugu: ["పండిన పంటను సేకరించడం", "పంటను పారేయడం", "రోడ్లు నిర్మించడం", "ప్లాస్టిక్ తయారు చేయడం"],
                  Hindi: ["पकी फसल इकट्ठा करना", "फसल फेंकना", "सड़क बनाना", "प्लास्टिक बनाना"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      {
        id: "clean-environment",
        icon: "♻️",

        title: {
          English: "Keeping Our Surroundings Clean",
          Telugu: "మన పరిసరాలను శుభ్రంగా ఉంచడం",
          Hindi: "अपने आसपास साफ-सफाई रखना"
        },

        description: {
          English: "Learn simple ways to reduce waste.",
          Telugu: "వ్యర్థాలను తగ్గించే సరళమైన మార్గాలను తెలుసుకుందాం.",
          Hindi: "कचरा कम करने के सरल तरीके जानें।"
        },

        lessons: [

          {
            id: "waste",
            visual: "🗑️",

            title: {
              English: "Reduce Waste",
              Telugu: "వ్యర్థాలను తగ్గిద్దాం",
              Hindi: "कचरा कम करें"
            },

            image: "./images/lessons/clean-environment.png",

            explanation: {

              English:
                "Waste should be handled carefully. We can reduce waste, reuse suitable objects and recycle materials when possible.",

              Telugu:
                "వ్యర్థాలను జాగ్రత్తగా నిర్వహించాలి. వ్యర్థాలను తగ్గించడం, వస్తువులను మళ్లీ ఉపయోగించడం మరియు రీసైకిల్ చేయడం మంచిది.",

              Hindi:
                "कचरे को सही तरीके से संभालना चाहिए। कचरा कम करना, वस्तुओं का पुनः उपयोग और पुनर्चक्रण अच्छा है।"
            },

            keyPoints: {

              English: [
                "Do not litter.",
                "Reduce unnecessary waste.",
                "Reuse suitable items.",
                "Recycle where possible.",
                "Keep surroundings clean."
              ],

              Telugu: [
                "చెత్తను ఎక్కడపడితే అక్కడ వేయకూడదు.",
                "అనవసర వ్యర్థాలను తగ్గించాలి.",
                "వస్తువులను మళ్లీ ఉపయోగించాలి.",
                "సాధ్యమైనప్పుడు రీసైకిల్ చేయాలి.",
                "పరిసరాలను శుభ్రంగా ఉంచాలి."
              ],

              Hindi: [
                "कचरा न फैलाएँ।",
                "अनावश्यक कचरा कम करें।",
                "वस्तुओं का पुनः उपयोग करें।",
                "जहाँ संभव हो पुनर्चक्रण करें।",
                "आसपास साफ रखें।"
              ]
            },

            activity: {
              English: "Identify three objects that can be reused.",
              Telugu: "మళ్లీ ఉపయోగించగల మూడు వస్తువులను గుర్తించండి.",
              Hindi: "तीन ऐसी वस्तुएँ पहचानें जिन्हें दोबारा उपयोग किया जा सकता है।"
            },

            quiz: [

              {
                question: {
                  English: "What should we avoid?",
                  Telugu: "మనం ఏమి చేయకూడదు?",
                  Hindi: "हमें क्या नहीं करना चाहिए?"
                },

                options: {
                  English: ["Littering", "Cleaning", "Reusing", "Recycling"],
                  Telugu: ["చెత్త వేయడం", "శుభ్రం చేయడం", "మళ్లీ ఉపయోగించడం", "రీసైకిల్"],
                  Hindi: ["कचरा फैलाना", "सफाई", "पुनः उपयोग", "पुनर्चक्रण"]
                },

                answer: 0
              },

              {
                question: {
                  English: "What does reuse mean?",
                  Telugu: "మళ్లీ ఉపయోగించడం అంటే ఏమిటి?",
                  Hindi: "पुनः उपयोग का अर्थ क्या है?"
                },

                options: {
                  English: ["Use an item again", "Throw it away", "Burn it", "Break it"],
                  Telugu: ["వస్తువును మళ్లీ ఉపయోగించడం", "పారేయడం", "కాల్చడం", "పగలగొట్టడం"],
                  Hindi: ["वस्तु फिर उपयोग करना", "फेंकना", "जलाना", "तोड़ना"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Clean surroundings are...",
                  Telugu: "శుభ్రమైన పరిసరాలు...",
                  Hindi: "स्वच्छ वातावरण..."
                },

                options: {
                  English: ["Good", "Harmful", "Useless", "Dirty"],
                  Telugu: ["మంచివి", "హానికరం", "ఉపయోగం లేదు", "మురికి"],
                  Hindi: ["अच्छा", "हानिकारक", "बेकार", "गंदा"]
                },

                answer: 0
              }

            ]
          }

        ]
      }

    ]
  },


  // ====================================================
  // CLASS 5
  // ====================================================

  class5: {

    subject: {
      English: "Environmental Studies",
      Telugu: "పర్యావరణ అధ్యయనం",
      Hindi: "पर्यावरण अध्ययन"
    },

    chapters: [

      {
        id: "natural-resources",
        icon: "🌍",

        title: {
          English: "Natural Resources",
          Telugu: "సహజ వనరులు",
          Hindi: "प्राकृतिक संसाधन"
        },

        description: {
          English: "Learn about resources provided by nature.",
          Telugu: "ప్రకృతి అందించే వనరుల గురించి తెలుసుకుందాం.",
          Hindi: "प्रकृति से मिलने वाले संसाधनों के बारे में जानें।"
        },

        lessons: [

          {
            id: "resources",
            visual: "🌳",

            title: {
              English: "Resources From Nature",
              Telugu: "ప్రకృతి నుండి వనరులు",
              Hindi: "प्रकृति से मिलने वाले संसाधन"
            },

            image: "./images/lessons/natural-resources.png",

            explanation: {

              English:
                "Natural resources are useful things that come from nature. Air, water, soil, sunlight, forests and minerals are examples.",

              Telugu:
                "ప్రకృతి నుండి లభించే ఉపయోగకరమైన వాటిని సహజ వనరులు అంటారు. గాలి, నీరు, నేల, సూర్యకాంతి, అడవులు మరియు ఖనిజాలు ఉదాహరణలు.",

              Hindi:
                "प्रकृति से मिलने वाली उपयोगी चीजों को प्राकृतिक संसाधन कहते हैं। हवा, पानी, मिट्टी, धूप, जंगल और खनिज उदाहरण हैं।"
            },

            keyPoints: {

              English: [
                "Natural resources come from nature.",
                "Air is a resource.",
                "Water is a resource.",
                "Soil helps plants grow.",
                "Resources should be used responsibly."
              ],

              Telugu: [
                "సహజ వనరులు ప్రకృతి నుండి వస్తాయి.",
                "గాలి ఒక వనరు.",
                "నీరు ఒక వనరు.",
                "నేల మొక్కలు పెరగడానికి సహాయపడుతుంది.",
                "వనరులను బాధ్యతగా ఉపయోగించాలి."
              ],

              Hindi: [
                "प्राकृतिक संसाधन प्रकृति से आते हैं।",
                "हवा एक संसाधन है।",
                "पानी एक संसाधन है।",
                "मिट्टी पौधों को बढ़ने में मदद करती है।",
                "संसाधनों का जिम्मेदारी से उपयोग करें।"
              ]
            },

            activity: {
              English: "Write five things that come from natural resources.",
              Telugu: "సహజ వనరుల నుండి వచ్చే ఐదు వస్తువులను రాయండి.",
              Hindi: "प्राकृतिक संसाधनों से आने वाली पाँच चीजें लिखें।"
            },

            quiz: [

              {
                question: {
                  English: "Which is a natural resource?",
                  Telugu: "సహజ వనరు ఏది?",
                  Hindi: "प्राकृतिक संसाधन कौन सा है?"
                },

                options: {
                  English: ["Water", "Plastic toy", "Television", "Computer"],
                  Telugu: ["నీరు", "ప్లాస్టిక్ బొమ్మ", "టెలివిజన్", "కంప్యూటర్"],
                  Hindi: ["पानी", "प्लास्टिक खिलौना", "टेलीविजन", "कंप्यूटर"]
                },

                answer: 0
              },

              {
                question: {
                  English: "What helps plants grow?",
                  Telugu: "మొక్కలు పెరగడానికి ఏది సహాయపడుతుంది?",
                  Hindi: "पौधों को बढ़ने में क्या मदद करता है?"
                },

                options: {
                  English: ["Soil", "Plastic", "Metal", "Glass"],
                  Telugu: ["నేల", "ప్లాస్టిక్", "లోహం", "గాజు"],
                  Hindi: ["मिट्टी", "प्लास्टिक", "धातु", "काँच"]
                },

                answer: 0
              },

              {
                question: {
                  English: "How should resources be used?",
                  Telugu: "వనరులను ఎలా ఉపయోగించాలి?",
                  Hindi: "संसाधनों का उपयोग कैसे करना चाहिए?"
                },

                options: {
                  English: ["Responsibly", "Wastefully", "Destroy them", "Without thinking"],
                  Telugu: ["బాధ్యతగా", "వృథాగా", "నాశనం చేయాలి", "ఆలోచించకుండా"],
                  Hindi: ["जिम्मेदारी से", "बर्बादी से", "नष्ट करके", "बिना सोचे"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      {
        id: "water-conservation",
        icon: "💧",

        title: {
          English: "Water Conservation",
          Telugu: "నీటి సంరక్షణ",
          Hindi: "जल संरक्षण"
        },

        description: {
          English: "Learn why every drop of water matters.",
          Telugu: "ప్రతి నీటి చుక్క ఎందుకు ముఖ్యమో తెలుసుకుందాం.",
          Hindi: "जानें कि पानी की हर बूंद क्यों महत्वपूर्ण है।"
        },

        lessons: [

          {
            id: "save-water",
            visual: "🚰",

            title: {
              English: "Every Drop Matters",
              Telugu: "ప్రతి నీటి చుక్క విలువైనది",
              Hindi: "हर बूंद कीमती है"
            },

            image: "./images/lessons/water-conservation.png",

            explanation: {

              English:
                "Fresh water is important for drinking, farming, cooking and cleaning. Closing taps, repairing leaks and collecting rainwater can help conserve water.",

              Telugu:
                "తాగడం, వ్యవసాయం, వంట మరియు శుభ్రపరచడానికి స్వచ్ఛమైన నీరు అవసరం. కుళాయిలను మూయడం మరియు లీకేజీలను సరిచేయడం నీటి సంరక్షణకు సహాయపడుతుంది.",

              Hindi:
                "पीने, खेती, खाना बनाने और सफाई के लिए स्वच्छ पानी जरूरी है। नल बंद करना और रिसाव ठीक करना पानी बचाने में मदद करता है।"
            },

            keyPoints: {

              English: [
                "Fresh water is valuable.",
                "Do not waste water.",
                "Repair leaking taps.",
                "Rainwater can be collected.",
                "Small habits save water."
              ],

              Telugu: [
                "స్వచ్ఛమైన నీరు విలువైనది.",
                "నీటిని వృథా చేయకూడదు.",
                "లీక్ కుళాయిలను సరిచేయాలి.",
                "వర్షపు నీటిని సేకరించవచ్చు.",
                "చిన్న అలవాట్లు నీటిని ఆదా చేస్తాయి."
              ],

              Hindi: [
                "स्वच्छ पानी कीमती है।",
                "पानी बर्बाद न करें।",
                "टपकते नल ठीक करें।",
                "वर्षा जल संग्रह किया जा सकता है।",
                "छोटी आदतें पानी बचाती हैं।"
              ]
            },

            activity: {
              English: "Make a list of three water-saving habits.",
              Telugu: "మూడు నీటి ఆదా అలవాట్ల జాబితా తయారు చేయండి.",
              Hindi: "पानी बचाने की तीन आदतों की सूची बनाएँ।"
            },

            quiz: [

              {
                question: {
                  English: "Which action saves water?",
                  Telugu: "నీటిని ఆదా చేసే చర్య ఏది?",
                  Hindi: "कौन सा कार्य पानी बचाता है?"
                },

                options: {
                  English: ["Close taps", "Leave taps running", "Ignore leaks", "Waste water"],
                  Telugu: ["కుళాయిలు మూయడం", "తెరిచి ఉంచడం", "లీక్ పట్టించుకోకపోవడం", "నీటిని వృథా చేయడం"],
                  Hindi: ["नल बंद करना", "नल खुला रखना", "रिसाव नजरअंदाज करना", "पानी बर्बाद करना"]
                },

                answer: 0
              },

              {
                question: {
                  English: "What can be collected during rain?",
                  Telugu: "వర్షం సమయంలో ఏమి సేకరించవచ్చు?",
                  Hindi: "वर्षा में क्या एकत्र किया जा सकता है?"
                },

                options: {
                  English: ["Rainwater", "Smoke", "Plastic", "Dust"],
                  Telugu: ["వర్షపు నీరు", "పొగ", "ప్లాస్టిక్", "దుమ్ము"],
                  Hindi: ["वर्षा जल", "धुआँ", "प्लास्टिक", "धूल"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Why repair leaks?",
                  Telugu: "లీకేజీలను ఎందుకు సరిచేయాలి?",
                  Hindi: "रिसाव क्यों ठीक करना चाहिए?"
                },

                options: {
                  English: ["Prevent water waste", "Waste more", "Make noise", "Use more"],
                  Telugu: ["నీటి వృథా నివారించడానికి", "ఎక్కువ వృథా", "శబ్దం", "ఎక్కువ ఉపయోగం"],
                  Hindi: ["पानी की बर्बादी रोकने के लिए", "अधिक बर्बादी", "आवाज", "अधिक उपयोग"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      {
        id: "forests-wildlife",
        icon: "🌳",

        title: {
          English: "Forests and Wildlife",
          Telugu: "అడవులు మరియు వన్యప్రాణులు",
          Hindi: "जंगल और वन्यजीव"
        },

        description: {
          English: "Learn why forests and wildlife are important.",
          Telugu: "అడవులు మరియు వన్యప్రాణులు ఎందుకు ముఖ్యమో తెలుసుకుందాం.",
          Hindi: "जानें कि जंगल और वन्यजीव क्यों महत्वपूर्ण हैं।"
        },

        lessons: [

          {
            id: "forest-life",
            visual: "🦌",

            title: {
              English: "Life in Forests",
              Telugu: "అడవుల్లో జీవితం",
              Hindi: "जंगलों में जीवन"
            },

            image: "./images/lessons/forest.png",

            explanation: {

              English:
                "Forests contain many plants and animals. Forests provide habitats, help protect soil and are an important part of nature.",

              Telugu:
                "అడవుల్లో అనేక మొక్కలు మరియు జంతువులు జీవిస్తాయి. అడవులు నివాసాలను అందిస్తాయి మరియు నేలను రక్షిస్తాయి.",

              Hindi:
                "जंगलों में अनेक पौधे और जानवर रहते हैं। जंगल आवास देते हैं और मिट्टी की रक्षा करते हैं।"
            },

            keyPoints: {

              English: [
                "Forests support living organisms.",
                "Wildlife needs habitats.",
                "Trees protect soil.",
                "Forests are important ecosystems.",
                "Protect forests and wildlife."
              ],

              Telugu: [
                "అడవులు జీవులకు ఆధారం.",
                "వన్యప్రాణులకు నివాసాలు అవసరం.",
                "చెట్లు నేలను రక్షిస్తాయి.",
                "అడవులు ముఖ్యమైన పర్యావరణ వ్యవస్థలు.",
                "అడవులు మరియు వన్యప్రాణులను రక్షించాలి."
              ],

              Hindi: [
                "जंगल जीवों का सहारा हैं।",
                "वन्यजीवों को आवास चाहिए।",
                "पेड़ मिट्टी की रक्षा करते हैं।",
                "जंगल महत्वपूर्ण पारिस्थितिकी तंत्र हैं।",
                "जंगलों और वन्यजीवों की रक्षा करें।"
              ]
            },

            activity: {
              English: "Choose one forest animal and write three things it needs.",
              Telugu: "ఒక అడవి జంతువును ఎంచుకుని దానికి అవసరమైన మూడు విషయాలను రాయండి.",
              Hindi: "एक वन्य जानवर चुनें और उसकी तीन जरूरतें लिखें।"
            },

            quiz: [

              {
                question: {
                  English: "What do forests provide?",
                  Telugu: "అడవులు ఏమి అందిస్తాయి?",
                  Hindi: "जंगल क्या देते हैं?"
                },

                options: {
                  English: ["Habitat", "Television", "Plastic", "Cars"],
                  Telugu: ["నివాసం", "టెలివిజన్", "ప్లాస్టిక్", "కార్లు"],
                  Hindi: ["आवास", "टेलीविजन", "प्लास्टिक", "कारें"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Trees help protect...",
                  Telugu: "చెట్లు దేనిని రక్షిస్తాయి?",
                  Hindi: "पेड़ किसकी रक्षा करते हैं?"
                },

                options: {
                  English: ["Soil", "Plastic", "Television", "Cars"],
                  Telugu: ["నేల", "ప్లాస్టిక్", "టెలివిజన్", "కార్లు"],
                  Hindi: ["मिट्टी", "प्लास्टिक", "टेलीविजन", "कारें"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Should forests be protected?",
                  Telugu: "అడవులను రక్షించాలా?",
                  Hindi: "क्या जंगलों की रक्षा करनी चाहिए?"
                },

                options: {
                  English: ["Yes", "No", "Never", "Only sometimes"],
                  Telugu: ["అవును", "కాదు", "ఎప్పుడూ కాదు", "కొన్నిసార్లు"],
                  Hindi: ["हाँ", "नहीं", "कभी नहीं", "कभी-कभी"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      {
        id: "agriculture-food",
        icon: "🌾",

        title: {
          English: "Agriculture and Food",
          Telugu: "వ్యవసాయం మరియు ఆహారం",
          Hindi: "कृषि और भोजन"
        },

        description: {
          English: "Learn how crops reach our homes.",
          Telugu: "పంటలు మన ఇళ్లకు ఎలా చేరుతాయో తెలుసుకుందాం.",
          Hindi: "जानें कि फसलें हमारे घर तक कैसे पहुँचती हैं।"
        },

        lessons: [

          {
            id: "crop-journey",
            visual: "🚜",

            title: {
              English: "Journey of a Crop",
              Telugu: "పంట ప్రయాణం",
              Hindi: "फसल की यात्रा"
            },

            image: "./images/lessons/agriculture.png",

            explanation: {

              English:
                "Farmers grow crops using soil, seeds, water and careful work. Crops are harvested and then transported or stored before reaching people.",

              Telugu:
                "రైతులు నేల, విత్తనాలు, నీరు మరియు శ్రమతో పంటలను పండిస్తారు. పంటలను కోసి తరువాత రవాణా లేదా నిల్వ చేస్తారు.",

              Hindi:
                "किसान मिट्टी, बीज, पानी और मेहनत से फसल उगाते हैं। फसल काटने के बाद उसे पहुँचाया या संग्रहित किया जाता है।"
            },

            keyPoints: {

              English: [
                "Farmers grow crops.",
                "Seeds are important.",
                "Crops need water.",
                "Harvesting happens when crops are ready.",
                "Food passes through several steps."
              ],

              Telugu: [
                "రైతులు పంటలను పండిస్తారు.",
                "విత్తనాలు ముఖ్యమైనవి.",
                "పంటలకు నీరు అవసరం.",
                "పంట సిద్ధమైనప్పుడు కోత కోస్తారు.",
                "ఆహారం అనేక దశల ద్వారా మనకు చేరుతుంది."
              ],

              Hindi: [
                "किसान फसलें उगाते हैं।",
                "बीज महत्वपूर्ण हैं।",
                "फसलों को पानी चाहिए।",
                "फसल तैयार होने पर कटाई होती है।",
                "भोजन कई चरणों से गुजरता है।"
              ]
            },

            activity: {
              English: "Draw how rice or wheat travels from farm to home.",
              Telugu: "బియ్యం లేదా గోధుమలు పొలం నుండి ఇంటికి ఎలా చేరుతాయో గీయండి.",
              Hindi: "चावल या गेहूँ खेत से घर तक कैसे पहुँचता है, बनाएँ।"
            },

            quiz: [

              {
                question: {
                  English: "Who grows crops?",
                  Telugu: "పంటలను ఎవరు పండిస్తారు?",
                  Hindi: "फसलें कौन उगाता है?"
                },

                options: {
                  English: ["Farmers", "Pilots", "Drivers", "Artists"],
                  Telugu: ["రైతులు", "పైలట్లు", "డ్రైవర్లు", "కళాకారులు"],
                  Hindi: ["किसान", "पायलट", "ड्राइवर", "कलाकार"]
                },

                answer: 0
              },

              {
                question: {
                  English: "When are crops harvested?",
                  Telugu: "పంటలను ఎప్పుడు కోస్తారు?",
                  Hindi: "फसल कब काटी जाती है?"
                },

                options: {
                  English: ["When ready", "Before seeds", "Before soil", "Before growth"],
                  Telugu: ["సిద్ధమైనప్పుడు", "విత్తనాల ముందు", "నేల ముందు", "పెరుగుదల ముందు"],
                  Hindi: ["तैयार होने पर", "बीज से पहले", "मिट्टी से पहले", "बढ़ने से पहले"]
                },

                answer: 0
              },

              {
                question: {
                  English: "What is needed for crops?",
                  Telugu: "పంటలకు ఏమి అవసరం?",
                  Hindi: "फसलों को क्या चाहिए?"
                },

                options: {
                  English: ["Soil, water and seeds", "Plastic", "Metal", "Nothing"],
                  Telugu: ["నేల, నీరు మరియు విత్తనాలు", "ప్లాస్టిక్", "లోహం", "ఏమీ కాదు"],
                  Hindi: ["मिट्टी, पानी और बीज", "प्लास्टिक", "धातु", "कुछ नहीं"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      {
        id: "health-cleanliness",
        icon: "🧼",

        title: {
          English: "Health and Cleanliness",
          Telugu: "ఆరోగ్యం మరియు పరిశుభ్రత",
          Hindi: "स्वास्थ्य और स्वच्छता"
        },

        description: {
          English: "Learn healthy everyday habits.",
          Telugu: "రోజువారీ ఆరోగ్యకరమైన అలవాట్ల గురించి తెలుసుకుందాం.",
          Hindi: "स्वस्थ दैनिक आदतों के बारे में जानें।"
        },

        lessons: [

          {
            id: "healthy-habits",
            visual: "🧽",

            title: {
              English: "Healthy Everyday Habits",
              Telugu: "రోజువారీ ఆరోగ్యకరమైన అలవాట్లు",
              Hindi: "स्वस्थ दैनिक आदतें"
            },

            image: "./images/lessons/health.png",

            explanation: {

              English:
                "Healthy habits include washing hands, drinking safe water, eating nutritious foods, keeping surroundings clean and getting enough rest.",

              Telugu:
                "చేతులు కడుక్కోవడం, సురక్షితమైన నీరు తాగడం, పోషక ఆహారం తినడం మరియు విశ్రాంతి తీసుకోవడం ఆరోగ్యకరమైన అలవాట్లు.",

              Hindi:
                "हाथ धोना, सुरक्षित पानी पीना, पौष्टिक भोजन खाना और पर्याप्त आराम करना स्वस्थ आदतें हैं।"
            },

            keyPoints: {

              English: [
                "Wash hands before eating.",
                "Drink safe water.",
                "Eat nutritious foods.",
                "Keep surroundings clean.",
                "Get enough rest."
              ],

              Telugu: [
                "తినే ముందు చేతులు కడుక్కోవాలి.",
                "సురక్షిత నీరు తాగాలి.",
                "పోషక ఆహారం తినాలి.",
                "పరిసరాలను శుభ్రంగా ఉంచాలి.",
                "సరైన విశ్రాంతి తీసుకోవాలి."
              ],

              Hindi: [
                "खाने से पहले हाथ धोएँ।",
                "सुरक्षित पानी पिएँ।",
                "पौष्टिक भोजन खाएँ।",
                "आसपास सफाई रखें।",
                "पर्याप्त आराम करें।"
              ]
            },

            activity: {
              English: "Create a healthy habits checklist.",
              Telugu: "ఆరోగ్యకరమైన అలవాట్ల జాబితా తయారు చేయండి.",
              Hindi: "स्वस्थ आदतों की सूची बनाएँ।"
            },

            quiz: [

              {
                question: {
                  English: "When should we wash hands?",
                  Telugu: "చేతులను ఎప్పుడు కడుక్కోవాలి?",
                  Hindi: "हाथ कब धोने चाहिए?"
                },

                options: {
                  English: ["Before eating", "Never", "Once a month", "Only sleeping"],
                  Telugu: ["తినే ముందు", "ఎప్పుడూ కాదు", "నెలకు ఒకసారి", "నిద్రప్పుడు"],
                  Hindi: ["खाने से पहले", "कभी नहीं", "महीने में एक बार", "सोते समय"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Which is healthy?",
                  Telugu: "ఆరోగ్యకరమైనది ఏది?",
                  Hindi: "स्वस्थ आदत कौन सी है?"
                },

                options: {
                  English: ["Clean surroundings", "Littering", "Unsafe water", "Never washing"],
                  Telugu: ["శుభ్రమైన పరిసరాలు", "చెత్త వేయడం", "అసురక్షిత నీరు", "చేతులు కడుక్కోకపోవడం"],
                  Hindi: ["स्वच्छ वातावरण", "कचरा फैलाना", "असुरक्षित पानी", "हाथ न धोना"]
                },

                answer: 0
              },

              {
                question: {
                  English: "What is important for health?",
                  Telugu: "ఆరోగ్యానికి ఏమి ముఖ్యం?",
                  Hindi: "स्वास्थ्य के लिए क्या महत्वपूर्ण है?"
                },

                options: {
                  English: ["Rest", "No sleep", "Dirty surroundings", "Only sweets"],
                  Telugu: ["విశ్రాంతి", "నిద్ర లేకపోవడం", "మురికి పరిసరాలు", "తీపి మాత్రమే"],
                  Hindi: ["आराम", "नींद न लेना", "गंदगी", "केवल मिठाई"]
                },

                answer: 0
              }

            ]
          }

        ]
      },


      {
        id: "waste-environment",
        icon: "♻️",

        title: {
          English: "Waste and Our Environment",
          Telugu: "వ్యర్థాలు మరియు మన పర్యావరణం",
          Hindi: "कचरा और हमारा पर्यावरण"
        },

        description: {
          English: "Learn about reduce, reuse and recycle.",
          Telugu: "తగ్గించడం, మళ్లీ ఉపయోగించడం మరియు రీసైకిల్ గురించి తెలుసుకుందాం.",
          Hindi: "कम करना, पुनः उपयोग और पुनर्चक्रण जानें।"
        },

        lessons: [

          {
            id: "three-rs",
            visual: "♻️",

            title: {
              English: "Reduce, Reuse and Recycle",
              Telugu: "తగ్గించు, మళ్లీ ఉపయోగించు, రీసైకిల్ చేయు",
              Hindi: "कम करें, पुनः उपयोग करें और पुनर्चक्रण करें"
            },

            image: "./images/lessons/recycling.png",

            explanation: {

              English:
                "We can reduce waste by following three useful ideas: reduce, reuse and recycle. These habits help protect our surroundings.",

              Telugu:
                "వ్యర్థాలను తగ్గించడానికి తగ్గించడం, మళ్లీ ఉపయోగించడం మరియు రీసైకిల్ చేయడం అనే మూడు మార్గాలను పాటించవచ్చు.",

              Hindi:
                "कचरा कम करने के लिए कम करना, पुनः उपयोग और पुनर्चक्रण जैसे तरीकों का पालन कर सकते हैं।"
            },

            keyPoints: {

              English: [
                "Reduce unnecessary waste.",
                "Reuse suitable items.",
                "Recycle materials.",
                "Do not litter.",
                "Keep the environment clean."
              ],

              Telugu: [
                "అనవసర వ్యర్థాలను తగ్గించాలి.",
                "వస్తువులను మళ్లీ ఉపయోగించాలి.",
                "పదార్థాలను రీసైకిల్ చేయాలి.",
                "చెత్తను వేయకూడదు.",
                "పర్యావరణాన్ని శుభ్రంగా ఉంచాలి."
              ],

              Hindi: [
                "अनावश्यक कचरा कम करें।",
                "वस्तुओं का पुनः उपयोग करें।",
                "सामग्री का पुनर्चक्रण करें।",
                "कचरा न फैलाएँ।",
                "पर्यावरण साफ रखें।"
              ]
            },

            activity: {
              English: "Choose three objects and decide if they can be reused or recycled.",
              Telugu: "మూడు వస్తువులను ఎంచుకుని అవి మళ్లీ ఉపయోగించవచ్చా లేదా రీసైకిల్ చేయవచ్చా చూడండి.",
              Hindi: "तीन वस्तुएँ चुनें और तय करें कि उन्हें पुनः उपयोग या पुनर्चक्रण किया जा सकता है।"
            },

            quiz: [

              {
                question: {
                  English: "What does reuse mean?",
                  Telugu: "మళ్లీ ఉపయోగించడం అంటే ఏమిటి?",
                  Hindi: "पुनः उपयोग का अर्थ क्या है?"
                },

                options: {
                  English: ["Use again", "Throw away", "Break", "Waste"],
                  Telugu: ["మళ్లీ ఉపయోగించడం", "పారేయడం", "పగలగొట్టడం", "వృథా"],
                  Hindi: ["फिर उपयोग करना", "फेंकना", "तोड़ना", "बर्बाद करना"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Which is one of the three Rs?",
                  Telugu: "మూడు Rలలో ఒకటి ఏది?",
                  Hindi: "तीन R में से एक कौन सा है?"
                },

                options: {
                  English: ["Recycle", "Destroy", "Litter", "Waste"],
                  Telugu: ["రీసైకిల్", "నాశనం", "చెత్త వేయడం", "వృథా"],
                  Hindi: ["पुनर्चक्रण", "नष्ट करना", "कचरा फैलाना", "बर्बादी"]
                },

                answer: 0
              },

              {
                question: {
                  English: "Where should waste go?",
                  Telugu: "వ్యర్థాలను ఎక్కడ వేయాలి?",
                  Hindi: "कचरा कहाँ डालना चाहिए?"
                },

                options: {
                  English: ["Waste bin", "Road", "Playground", "Anywhere"],
                  Telugu: ["చెత్త బుట్ట", "రోడ్డు", "ఆట స్థలం", "ఎక్కడైనా"],
                  Hindi: ["कूड़ेदान", "सड़क", "खेल का मैदान", "कहीं भी"]
                },

                answer: 0
              }

            ]
          }

        ]
      }

    ]
  }

};


// ======================================================
// EXTRA OFFLINE GYAAN ASSISTANT KNOWLEDGE
// ======================================================

const offlineQuestions = [

  {
    keywords: [
      "environment",
      "surroundings",
      "పర్యావరణం",
      "పరిసరాలు",
      "पर्यावरण"
    ],

    English:
      "🌍 Our environment includes living and non-living things such as plants, animals, air, water, soil and rocks.",

    Telugu:
      "🌍 మన పర్యావరణంలో మొక్కలు, జంతువులు, గాలి, నీరు, నేల మరియు రాళ్లు వంటి జీవ మరియు నిర్జీవ అంశాలు ఉంటాయి.",

    Hindi:
      "🌍 हमारे पर्यावरण में पौधे, जानवर, हवा, पानी, मिट्टी और चट्टान जैसी जीवित और निर्जीव चीजें होती हैं।"
  },


  {
    keywords: [
      "sun",
      "sunlight",
      "సూర్యుడు",
      "సూర్యకాంతి",
      "सूरज",
      "धूप"
    ],

    English:
      "☀️ Sunlight gives us light and heat. Plants also use sunlight to help prepare food.",

    Telugu:
      "☀️ సూర్యకాంతి వెలుగు మరియు వేడిని అందిస్తుంది. మొక్కలు ఆహారం తయారు చేసుకోవడానికి సూర్యకాంతిని ఉపయోగిస్తాయి.",

    Hindi:
      "☀️ सूर्य का प्रकाश रोशनी और गर्मी देता है। पौधे भोजन बनाने में भी इसका उपयोग करते हैं।"
  },


  {
    keywords: [
      "waste",
      "garbage",
      "trash",
      "చెత్త",
      "వ్యర్థం",
      "వ్యర్థాలు",
      "कचरा"
    ],

    English:
      "♻️ Waste should be disposed of properly. Reducing, reusing and recycling can help us create less waste.",

    Telugu:
      "♻️ వ్యర్థాలను సరిగ్గా పారవేయాలి. తగ్గించడం, మళ్లీ ఉపయోగించడం మరియు రీసైకిల్ చేయడం ద్వారా వ్యర్థాలను తగ్గించవచ్చు.",

    Hindi:
      "♻️ कचरे का सही निपटान करना चाहिए। कम उपयोग, पुनः उपयोग और पुनर्चक्रण से कचरा कम किया जा सकता है।"
  },


  {
    keywords: [
      "plant",
      "plants",
      "మొక్క",
      "మొక్కలు",
      "पौधा",
      "पौधे"
    ],

    English:
      "🌱 Plants are living things. They need water, air, sunlight and nutrients to grow.",

    Telugu:
      "🌱 మొక్కలు జీవులు. అవి పెరగడానికి నీరు, గాలి, సూర్యకాంతి మరియు పోషకాలు అవసరం.",

    Hindi:
      "🌱 पौधे जीवित होते हैं। उन्हें बढ़ने के लिए पानी, हवा, धूप और पोषक तत्व चाहिए।"
  },


  {
    keywords: [
      "water",
      "నీరు",
      "पानी",
      "जल"
    ],

    English:
      "💧 Water is important for humans, plants and animals. We should use it carefully and avoid wasting it.",

    Telugu:
      "💧 నీరు మనుషులు, మొక్కలు మరియు జంతువులకు చాలా ముఖ్యమైనది. దానిని జాగ్రత్తగా ఉపయోగించి వృథా చేయకూడదు.",

    Hindi:
      "💧 पानी मनुष्यों, पौधों और जानवरों के लिए महत्वपूर्ण है। हमें इसका सावधानी से उपयोग करना चाहिए।"
  }

];