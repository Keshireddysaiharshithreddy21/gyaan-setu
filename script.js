let selectedLanguage = "English";

let selectedClass = 1;

let selectedSubject = "Maths";
let currentQuizQuestion = 0;

let quizScore = 0;


const quizQuestions = [

    {
        question: "2 + 2 = ?",
        options: ["3", "4", "5"],
        correct: 1
    },

    {
        question: "3 + 4 = ?",
        options: ["6", "7", "8"],
        correct: 1
    },

    {
        question: "5 + 3 = ?",
        options: ["7", "8", "9"],
        correct: 1
    }

];
const questionDatabase = [

    {
        keywords: ["addition", "add", "sum"],

        English:
            "Addition means combining two or more numbers to find the total.",

        Telugu:
            "కూడిక అంటే రెండు లేదా అంతకంటే ఎక్కువ సంఖ్యలను కలిపి మొత్తం కనుగొనడం.",

        Hindi:
            "जोड़ का अर्थ दो या अधिक संख्याओं को मिलाकर कुल ज्ञात करना है।"
    },

    {
        keywords: ["subtraction", "subtract", "minus"],

        English:
            "Subtraction means taking one number away from another number.",

        Telugu:
            "తీసివేత అంటే ఒక సంఖ్య నుండి మరొక సంఖ్యను తీసివేయడం.",

        Hindi:
            "घटाव का अर्थ एक संख्या में से दूसरी संख्या को घटाना है।"
    },

    {
        keywords: ["triangle"],

        English:
            "A triangle is a shape with three sides and three corners.",

        Telugu:
            "త్రిభుజం అనేది మూడు భుజాలు మరియు మూడు మూలలు కలిగిన ఆకారం.",

        Hindi:
            "त्रिभुज तीन भुजाओं और तीन कोनों वाली आकृति है।"
    },

    {
        keywords: ["square"],

        English:
            "A square is a shape with four equal sides.",

        Telugu:
            "చతురస్రం అనేది నాలుగు సమాన భుజాలు కలిగిన ఆకారం.",

        Hindi:
            "वर्ग चार समान भुजाओं वाली आकृति है।"
    },

    {
        keywords: ["plants", "plant"],

        English:
            "Plants are living things that need water, air and sunlight to grow.",

        Telugu:
            "మొక్కలు జీవులు. అవి పెరగడానికి నీరు, గాలి మరియు సూర్యకాంతి అవసరం.",

        Hindi:
            "पौधे जीवित होते हैं। उन्हें बढ़ने के लिए पानी, हवा और सूर्य के प्रकाश की आवश्यकता होती है।"
    }

];


// -------------------------------
// HIDE ALL SCREENS
// -------------------------------

function hideAllScreens() {

    document.getElementById("languageScreen")
        .classList.add("hidden");

    document.getElementById("classScreen")
        .classList.add("hidden");

    document.getElementById("subjectScreen")
        .classList.add("hidden");

    document.getElementById("topicScreen")
        .classList.add("hidden");

    document.getElementById("lessonScreen")
        .classList.add("hidden");

    document.getElementById("activityScreen")
        .classList.add("hidden");
    document.getElementById("quizScreen")
        .classList.add("hidden");
        document.getElementById("questionScreen")
    .classList.add("hidden");
}


// -------------------------------
// LANGUAGE
// -------------------------------

function selectLanguage(language) {

    selectedLanguage = language;

    hideAllScreens();

    document.getElementById("classScreen")
        .classList.remove("hidden");


    if (language === "Telugu") {

        document.getElementById("classTitle").innerText =
            "మీ తరగతిని ఎంచుకోండి";

        document.getElementById("class1Text").innerText =
            "తరగతి 1";

        document.getElementById("class2Text").innerText =
            "తరగతి 2";

        document.getElementById("class3Text").innerText =
            "తరగతి 3";

    }

    else if (language === "Hindi") {

        document.getElementById("classTitle").innerText =
            "अपनी कक्षा चुनें";

        document.getElementById("class1Text").innerText =
            "कक्षा 1";

        document.getElementById("class2Text").innerText =
            "कक्षा 2";

        document.getElementById("class3Text").innerText =
            "कक्षा 3";

    }

    else {

        document.getElementById("classTitle").innerText =
            "Select Your Class";

        document.getElementById("class1Text").innerText =
            "Class 1";

        document.getElementById("class2Text").innerText =
            "Class 2";

        document.getElementById("class3Text").innerText =
            "Class 3";
    }
}


// -------------------------------
// CLASS
// -------------------------------

function selectClass(classNumber) {

    selectedClass = classNumber;

    hideAllScreens();

    document.getElementById("subjectScreen")
        .classList.remove("hidden");


    if (selectedLanguage === "Telugu") {

        document.getElementById("subjectTitle").innerText =
            "మీ విషయాన్ని ఎంచుకోండి";

        document.getElementById("mathsText").innerText =
            "గణితం";

    }

    else if (selectedLanguage === "Hindi") {

        document.getElementById("subjectTitle").innerText =
            "अपना विषय चुनें";

        document.getElementById("mathsText").innerText =
            "गणित";

    }

    else {

        document.getElementById("subjectTitle").innerText =
            "Select Your Subject";

        document.getElementById("mathsText").innerText =
            "Mathematics";
    }
}


// -------------------------------
// SUBJECT
// -------------------------------

function selectSubject(subject) {

    selectedSubject = subject;

    hideAllScreens();

    document.getElementById("topicScreen")
        .classList.remove("hidden");


    if (selectedLanguage === "Telugu") {

        document.getElementById("topicTitle").innerText =
            "అంశాన్ని ఎంచుకోండి";

        document.getElementById("additionText").innerText =
            "కూడిక";

    }

    else if (selectedLanguage === "Hindi") {

        document.getElementById("topicTitle").innerText =
            "विषय चुनें";

        document.getElementById("additionText").innerText =
            "जोड़";

    }

    else {

        document.getElementById("topicTitle").innerText =
            "Select Topic";

        document.getElementById("additionText").innerText =
            "Addition";
    }
}


// -------------------------------
// LESSON
// -------------------------------

function openLesson() {

    hideAllScreens();

    document.getElementById("lessonScreen")
        .classList.remove("hidden");


    if (selectedLanguage === "Telugu") {

        document.getElementById("lessonTitle").innerText =
            "కూడిక";

        document.getElementById("lessonContent").innerText =
            "కూడిక అంటే రెండు లేదా అంతకంటే ఎక్కువ సంఖ్యలను కలపడం.\n\n2 + 3 = 5";

        document.getElementById("activityButton").innerText =
            "కార్యకలాపం ప్రారంభించండి";

        document.getElementById("quizButton").innerText =
            "క్విజ్ ప్రారంభించండి";

        document.getElementById("questionButton").innerText =
            "ప్రశ్న అడగండి";

    }

    else if (selectedLanguage === "Hindi") {

        document.getElementById("lessonTitle").innerText =
            "जोड़";

        document.getElementById("lessonContent").innerText =
            "जोड़ का अर्थ दो या अधिक संख्याओं को मिलाना है।\n\n2 + 3 = 5";

        document.getElementById("activityButton").innerText =
            "गतिविधि शुरू करें";

        document.getElementById("quizButton").innerText =
            "क्विज़ शुरू करें";

        document.getElementById("questionButton").innerText =
            "प्रश्न पूछें";

    }

    else {

        document.getElementById("lessonTitle").innerText =
            "Addition";

        document.getElementById("lessonContent").innerText =
            "Addition means combining two or more numbers.\n\n2 + 3 = 5";

        document.getElementById("activityButton").innerText =
            "Start Activity";

        document.getElementById("quizButton").innerText =
            "Take Quiz";

        document.getElementById("questionButton").innerText =
            "Ask a Question";
    }
}


// -------------------------------
// ACTIVITY
// -------------------------------

function openActivity() {

    hideAllScreens();

    document.getElementById("activityScreen")
        .classList.remove("hidden");

    document.getElementById("activityResult").innerText = "";


    if (selectedLanguage === "Telugu") {

        document.getElementById("activityTitle").innerText =
            "కూడిక కార్యకలాపం";

    }

    else if (selectedLanguage === "Hindi") {

        document.getElementById("activityTitle").innerText =
            "जोड़ गतिविधि";

    }

    else {

        document.getElementById("activityTitle").innerText =
            "Addition Activity";
    }
}


// -------------------------------
// CHECK ACTIVITY ANSWER
// -------------------------------

function checkActivity(answer) {

    let result =
        document.getElementById("activityResult");


    if (answer === 5) {

        if (selectedLanguage === "Telugu") {

            result.innerText =
                "సరైన సమాధానం!";

        }

        else if (selectedLanguage === "Hindi") {

            result.innerText =
                "सही उत्तर!";

        }

        else {

            result.innerText =
                "Correct Answer!";
        }

    }

    else {

        if (selectedLanguage === "Telugu") {

            result.innerText =
                "మళ్లీ ప్రయత్నించండి";

        }

        else if (selectedLanguage === "Hindi") {

            result.innerText =
                "फिर से प्रयास करें";

        }

        else {

            result.innerText =
                "Try Again";
        }
    }
}


// -------------------------------
// QUIZ
// -------------------------------

function openQuiz() {

    currentQuizQuestion = 0;
    quizScore = 0;

    hideAllScreens();

    document.getElementById("quizScreen")
        .classList.remove("hidden");

    document.getElementById("quizResult")
        .innerText = "";

    document.getElementById("quizBackButton")
        .classList.add("hidden");

    document.getElementById("quizOption1")
        .classList.remove("hidden");

    document.getElementById("quizOption2")
        .classList.remove("hidden");

    document.getElementById("quizOption3")
        .classList.remove("hidden");


    if (selectedLanguage === "Telugu") {

        document.getElementById("quizTitle").innerText =
            "కూడిక క్విజ్";

    }

    else if (selectedLanguage === "Hindi") {

        document.getElementById("quizTitle").innerText =
            "जोड़ क्विज़";

    }

    else {

        document.getElementById("quizTitle").innerText =
            "Addition Quiz";
    }

    showQuizQuestion();
}
function showQuizQuestion() {

    let data = quizQuestions[currentQuizQuestion];

    document.getElementById("quizQuestion")
        .innerText = data.question;

    document.getElementById("quizOption1")
        .innerText = data.options[0];

    document.getElementById("quizOption2")
        .innerText = data.options[1];

    document.getElementById("quizOption3")
        .innerText = data.options[2];
}
function checkQuizAnswer(selectedAnswer) {

    let data = quizQuestions[currentQuizQuestion];

    if (selectedAnswer === data.correct) {
        quizScore++;
    }

    currentQuizQuestion++;

    if (currentQuizQuestion < quizQuestions.length) {

        showQuizQuestion();

    } else {

        showQuizResult();
    }
}
function showQuizResult() {

    document.getElementById("quizQuestion")
        .innerText = "";

    document.getElementById("quizOption1")
        .classList.add("hidden");

    document.getElementById("quizOption2")
        .classList.add("hidden");

    document.getElementById("quizOption3")
        .classList.add("hidden");

    document.getElementById("quizBackButton")
        .classList.remove("hidden");


    if (selectedLanguage === "Telugu") {

        document.getElementById("quizResult").innerText =
            "మీ స్కోర్: " + quizScore + " / 3";

        document.getElementById("quizBackButton").innerText =
            "పాఠానికి తిరిగి వెళ్ళండి";

    }

    else if (selectedLanguage === "Hindi") {

        document.getElementById("quizResult").innerText =
            "आपका स्कोर: " + quizScore + " / 3";

        document.getElementById("quizBackButton").innerText =
            "पाठ पर वापस जाएँ";

    }

    else {

        document.getElementById("quizResult").innerText =
            "Your Score: " + quizScore + " / 3";

        document.getElementById("quizBackButton").innerText =
            "Back to Lesson";
    }
}


// -------------------------------
// ASK QUESTION
// -------------------------------

function openQuestionScreen() {

    hideAllScreens();

    document.getElementById("questionScreen")
        .classList.remove("hidden");

    document.getElementById("questionInput").value = "";
    document.getElementById("answerHeading").innerText = "";
    document.getElementById("answerText").innerText = "";


    if (selectedLanguage === "Telugu") {

        document.getElementById("questionTitle").innerText =
            "ప్రశ్న అడగండి";

        document.getElementById("questionInput").placeholder =
            "మీ ప్రశ్నను ఇక్కడ టైప్ చేయండి";

        document.getElementById("askButton").innerText =
            "సమాధానం కనుగొనండి";

        document.getElementById("questionBackButton").innerText =
            "పాఠానికి తిరిగి వెళ్ళండి";

    }

    else if (selectedLanguage === "Hindi") {

        document.getElementById("questionTitle").innerText =
            "प्रश्न पूछें";

        document.getElementById("questionInput").placeholder =
            "अपना प्रश्न यहाँ लिखें";

        document.getElementById("askButton").innerText =
            "उत्तर खोजें";

        document.getElementById("questionBackButton").innerText =
            "पाठ पर वापस जाएँ";

    }

    else {

        document.getElementById("questionTitle").innerText =
            "Ask a Question";

        document.getElementById("questionInput").placeholder =
            "Type your question here";

        document.getElementById("askButton").innerText =
            "Find Answer";

        document.getElementById("questionBackButton").innerText =
            "Back to Lesson";
    }
}
function findAnswer() {

    let question =
        document.getElementById("questionInput")
            .value
            .toLowerCase()
            .trim();

    let foundAnswer = null;


    for (let item of questionDatabase) {

        for (let keyword of item.keywords) {

            if (question.includes(keyword)) {

                foundAnswer = item[selectedLanguage];

                break;
            }
        }

        if (foundAnswer !== null) {
            break;
        }
    }


    if (foundAnswer !== null) {

        if (selectedLanguage === "Telugu") {

            document.getElementById("answerHeading").innerText =
                "సమాధానం";

        }

        else if (selectedLanguage === "Hindi") {

            document.getElementById("answerHeading").innerText =
                "उत्तर";

        }

        else {

            document.getElementById("answerHeading").innerText =
                "Answer";
        }

        document.getElementById("answerText").innerText =
            foundAnswer;

    }

    else {

        document.getElementById("answerHeading").innerText = "";

        if (selectedLanguage === "Telugu") {

            document.getElementById("answerText").innerText =
                "ఈ ప్రశ్నకు సమాధానం ఆఫ్‌లైన్ డేటాలో కనుగొనబడలేదు.";

        }

        else if (selectedLanguage === "Hindi") {

            document.getElementById("answerText").innerText =
                "इस प्रश्न का उत्तर ऑफलाइन डेटा में नहीं मिला।";

        }

        else {

            document.getElementById("answerText").innerText =
                "Answer not found in the offline data.";
        }
    }
}
if ("serviceWorker" in navigator) {

    window.addEventListener("load", function () {

        navigator.serviceWorker
            .register("./service-worker.js")

            .then(function () {
                console.log("Gyaan Setu is ready for offline use.");
            })

            .catch(function (error) {
                console.log("Service Worker Error:", error);
            });

    });
}