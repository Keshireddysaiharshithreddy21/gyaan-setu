// ======================================================
// GYAAN SETU
// COMPLETE MAIN APPLICATION
// ======================================================


// ======================================================
// APP STATE
// ======================================================

const app = document.getElementById("app");

const ACCOUNTS_KEY = "gyaanAccounts";
const CURRENT_ACCOUNT_KEY = "gyaanCurrentAccount";

let accounts = readAccounts();
let currentAccountId =
  localStorage.getItem(CURRENT_ACCOUNT_KEY) || null;

let selectedLanguage = "English";
let selectedClass = null;
let completedLessons = {};
let lastLesson = null;
let wrongAnswers = [];
let experiencePoints = 0;
let languageChosenBeforeAuth = false;

loadCurrentAccount();


function readAccounts() {

  try {

    return JSON.parse(
      localStorage.getItem(ACCOUNTS_KEY) || "{}"
    );

  }

  catch (error) {

    return {};

  }
}


function loadCurrentAccount() {

  const account =
    currentAccountId
      ? accounts[currentAccountId]
      : null;


  if (!account) {
    currentAccountId = null;
    return;
  }


  selectedLanguage = account.language || "English";
  selectedClass = Number(account.classNumber) || null;
  completedLessons = account.progress || {};
  lastLesson = account.lastLesson || null;
  wrongAnswers = account.wrongAnswers || [];
  experiencePoints = Number(account.experiencePoints) || 0;
}


function saveAccounts() {

  localStorage.setItem(
    ACCOUNTS_KEY,
    JSON.stringify(accounts)
  );
}


function saveAccountState() {

  if (!currentAccountId || !accounts[currentAccountId]) {
    return;
  }


  accounts[currentAccountId].language = selectedLanguage;
  accounts[currentAccountId].classNumber = selectedClass;
  accounts[currentAccountId].progress = completedLessons;
  accounts[currentAccountId].lastLesson = lastLesson;
  accounts[currentAccountId].wrongAnswers = wrongAnswers;
  accounts[currentAccountId].experiencePoints = experiencePoints;

  saveAccounts();
}


function accountName() {

  return currentAccountId && accounts[currentAccountId]
    ? accounts[currentAccountId].name
    : "";
}


function escapeHtml(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


async function hashPin(pin) {

  const data = new TextEncoder().encode(pin);
  const hash = await crypto.subtle.digest("SHA-256", data);

  return Array.from(
    new Uint8Array(hash)
  )
    .map(byte => byte.toString(16).padStart(2, "0"))
    .join("");
}


function renderAccountArea() {

  const container =
    document.getElementById("accountArea");


  if (!container) {
    return;
  }


  if (!currentAccountId) {

    container.innerHTML = `
      <button class="account-button" onclick="showAuthScreen()">
        ${uiText("login")}
      </button>
    `;

    return;
  }


  container.innerHTML = `
    <span class="account-name">${escapeHtml(
      textByLanguage(
        `Hi, ${accountName()}`,
        `హాయ్, ${accountName()}`,
        `नमस्ते, ${accountName()}`
      )
    )}</span>
    <button class="account-button" onclick="showProfileScreen()">
      ${textByLanguage("Profile", "ప్రొఫైల్", "प्रोफ़ाइल")}
    </button>
    <button class="account-button" onclick="logout()">
      ${textByLanguage("Log out", "లాగ్ అవుట్", "लॉग आउट")}
    </button>
  `;
}


function migrateAnonymousProgress() {

  const oldProgress =
    localStorage.getItem("gyaanProgress");

  if (!oldProgress) {
    return;
  }


  completedLessons =
    JSON.parse(oldProgress || "{}");

  selectedLanguage =
    localStorage.getItem("gyaanLanguage") || "English";

  selectedClass =
    Number(localStorage.getItem("gyaanClass")) || null;

  lastLesson =
    JSON.parse(
      localStorage.getItem("gyaanLastLesson") || "null"
    );
}


function showAuthScreen(
  mode = "login",
  message = ""
) {

  const isLogin =
    mode === "login";

  const authText = {
    badge: textByLanguage(
      "Offline student account",
      "ఆఫ్‌లైన్ విద్యార్థి ఖాతా",
      "ऑफलाइन विद्यार्थी खाता"
    ),
    loginTitle: textByLanguage(
      "Welcome back",
      "స్వాగతం",
      "वापसी पर स्वागत है"
    ),
    registerTitle: textByLanguage(
      "Create your student account",
      "మీ విద్యార్థి ఖాతాను సృష్టించండి",
      "अपना विद्यार्थी खाता बनाएँ"
    ),
    loginIntro: textByLanguage(
      "Log in to continue from where you stopped.",
      "మీరు ఆపిన చోటు నుండి కొనసాగించడానికి లాగిన్ అవ్వండి.",
      "जहाँ आपने छोड़ा था वहाँ से जारी रखने के लिए लॉगिन करें।"
    ),
    registerIntro: textByLanguage(
      "Your learning progress will be saved on this device.",
      "మీ అభ్యాస పురోగతి ఈ పరికరంలో సేవ్ చేయబడుతుంది.",
      "आपकी सीखने की प्रगति इस डिवाइस पर सेव होगी।"
    ),
    name: textByLanguage("Student name", "విద్యార్థి పేరు", "विद्यार्थी का नाम"),
    namePlaceholder: textByLanguage("Enter your name", "మీ పేరు నమోదు చేయండి", "अपना नाम दर्ज करें"),
    pin: textByLanguage("4-digit PIN", "4 అంకెల పిన్", "4 अंकों का पिन"),
    pinPlaceholder: textByLanguage("Enter 4 digits", "4 అంకెలను నమోదు చేయండి", "4 अंक दर्ज करें"),
    login: textByLanguage("Log in", "లాగిన్", "लॉगिन"),
    register: textByLanguage("Create account", "ఖాతాను సృష్టించండి", "खाता बनाएँ"),
    newStudent: textByLanguage("New student? Create an account", "కొత్త విద్యార్థి? ఖాతాను సృష్టించండి", "नए विद्यार्थी हैं? खाता बनाएँ"),
    existingStudent: textByLanguage("Already have an account? Log in", "ఇప్పటికే ఖాతా ఉందా? లాగిన్ అవ్వండి", "पहले से खाता है? लॉगिन करें"),
    note: textByLanguage(
      "This offline account is stored only in this browser on this device.",
      "ఈ ఆఫ్‌లైన్ ఖాతా ఈ పరికరంలోని ఈ బ్రౌజర్‌లో మాత్రమే నిల్వ చేయబడుతుంది.",
      "यह ऑफलाइन खाता इस डिवाइस के इसी ब्राउज़र में ही सेव होता है।"
    )
  };


  app.innerHTML = `
    <section class="auth-section">
      <div class="auth-card">
        <div class="auth-icon">🎓</div>
        <span class="hero-badge auth-badge">${authText.badge}</span>
        <h2>${isLogin ? authText.loginTitle : authText.registerTitle}</h2>
        <p class="auth-intro">
          ${isLogin ? authText.loginIntro : authText.registerIntro}
        </p>

        ${message ? `<p class="auth-message">${escapeHtml(message)}</p>` : ""}

        <form onsubmit="${isLogin ? "handleLogin" : "handleRegister"}(event)">
          <label for="accountNameInput">${authText.name}</label>
          <input
            id="accountNameInput"
            name="studentName"
            type="text"
            minlength="2"
            maxlength="30"
            autocomplete="username"
            placeholder="${authText.namePlaceholder}"
            required
          >

          <label for="accountPinInput">${authText.pin}</label>
          <input
            id="accountPinInput"
            name="pin"
            type="password"
            inputmode="numeric"
            pattern="[0-9]{4}"
            minlength="4"
            maxlength="4"
            autocomplete="${isLogin ? "current-password" : "new-password"}"
            placeholder="${authText.pinPlaceholder}"
            required
          >

          <button class="action-btn auth-submit" type="submit">
            ${isLogin ? authText.login : authText.register}
          </button>
        </form>

        <button
          class="auth-switch"
          onclick="showAuthScreen('${isLogin ? "register" : "login"}')"
        >
          ${isLogin ? authText.newStudent : authText.existingStudent}
        </button>

        <p class="auth-note">
          ${authText.note}
        </p>
      </div>
    </section>
  `;


  setTimeout(
    () => document.getElementById("accountNameInput")?.focus(),
    0
  );
}


function accountIdFromName(name) {

  return name.trim().toLowerCase();
}


async function handleRegister(event) {

  event.preventDefault();

  const form = event.target;
  const name = form.studentName.value.trim();
  const pin = form.pin.value.trim();
  const id = accountIdFromName(name);


  if (name.length < 2 || !/^\d{4}$/.test(pin)) {
    showAuthScreen(
      "register",
      textByLanguage(
        "Enter a name and a 4-digit PIN.",
        "పేరు మరియు 4 అంకెల పిన్ నమోదు చేయండి.",
        "नाम और 4 अंकों का पिन दर्ज करें।"
      )
    );
    return;
  }


  if (accounts[id]) {
    showAuthScreen(
      "register",
      textByLanguage(
        "That student account already exists.",
        "ఆ విద్యార్థి ఖాతా ఇప్పటికే ఉంది.",
        "यह विद्यार्थी खाता पहले से मौजूद है।"
      )
    );
    return;
  }


  if (Object.keys(accounts).length === 0) {
    migrateAnonymousProgress();
  }


  accounts[id] = {
    name,
    pinHash: await hashPin(pin),
    language: selectedLanguage,
    classNumber: selectedClass,
    progress: completedLessons,
    lastLesson,
    wrongAnswers,
    experiencePoints
  };

  currentAccountId = id;
  localStorage.setItem(CURRENT_ACCOUNT_KEY, currentAccountId);
  saveAccounts();
  renderAccountArea();
  showHome();
}


async function handleLogin(event) {

  event.preventDefault();

  const form = event.target;
  const id = accountIdFromName(form.studentName.value);
  const account = accounts[id];
  const chosenLanguage = selectedLanguage;


  if (!account || account.pinHash !== await hashPin(form.pin.value.trim())) {
    showAuthScreen(
      "login",
      textByLanguage(
        "The student name or PIN is incorrect.",
        "విద్యార్థి పేరు లేదా పిన్ తప్పుగా ఉంది.",
        "विद्यार्थी का नाम या पिन गलत है।"
      )
    );
    return;
  }


  currentAccountId = id;
  localStorage.setItem(CURRENT_ACCOUNT_KEY, currentAccountId);
  loadCurrentAccount();

  if (languageChosenBeforeAuth) {
    selectedLanguage = chosenLanguage;
    saveAccountState();
  }

  languageChosenBeforeAuth = false;
  renderAccountArea();
  showHome();
}


function logout() {

  saveAccountState();
  currentAccountId = null;
  localStorage.removeItem(CURRENT_ACCOUNT_KEY);
  selectedLanguage = "English";
  selectedClass = null;
  completedLessons = {};
  lastLesson = null;
  wrongAnswers = [];
  experiencePoints = 0;
  languageChosenBeforeAuth = false;
  renderAccountArea();
  showLanguageScreen();
}


function showProfileScreen() {

  if (!currentAccountId) {
    showLanguageScreen();
    return;
  }


  const overall =
    getOverallProgress();

  const badges =
    getBadgeList(overall.completed);


  app.innerHTML = `
    <button class="back-btn" onclick="showHome()">
      ← ${uiText("back")}
    </button>

    <section class="section-heading">
      <h2>👤 ${textByLanguage("Student Profile", "విద్యార్థి ప్రొఫైల్", "विद्यार्थी प्रोफ़ाइल")}</h2>
      <p>${textByLanguage("Your offline learning record", "మీ ఆఫ్‌లైన్ అభ్యాస రికార్డు", "आपका ऑफलाइन सीखने का रिकॉर्ड")}</p>
    </section>

    <section class="profile-panel">
      <div class="profile-identity">
        <div class="profile-avatar">${escapeHtml(accountName().slice(0, 1).toUpperCase())}</div>
        <div>
          <h2>${escapeHtml(accountName())}</h2>
          <p>${getLanguageDisplayName()} · ${selectedClass ? getClassName(selectedClass) : textByLanguage("No class selected", "తరగతి ఎంచుకోలేదు", "कक्षा नहीं चुनी गई")}</p>
        </div>
      </div>

      <div class="profile-stats">
        <div><strong>${experiencePoints}</strong><span>XP</span></div>
        <div><strong>${overall.completed}</strong><span>${textByLanguage("Lessons", "పాఠాలు", "पाठ")}</span></div>
        <div><strong>${wrongAnswers.length}</strong><span>${textByLanguage("To practise", "అభ్యాసం చేయాలి", "अभ्यास बाकी")}</span></div>
      </div>
    </section>

    <section class="profile-section">
      <div class="section-heading">
        <h2>🏅 ${textByLanguage("Badges", "బ్యాడ్జ్‌లు", "बैज")}</h2>
      </div>
      <div class="badge-grid">
        ${badges}
      </div>
    </section>

    <section class="profile-section">
      <div class="section-heading">
        <h2>🧠 ${textByLanguage("Practice Mistakes", "తప్పులను అభ్యాసం చేయండి", "गलत उत्तरों का अभ्यास करें")}</h2>
        <p>${textByLanguage("Review questions you missed in quizzes.", "క్విజ్‌లలో మీరు తప్పిన ప్రశ్నలను సమీక్షించండి.", "क्विज़ में छूटे प्रश्नों को दोहराएँ।")}</p>
      </div>
      <button class="action-btn practice-button" onclick="showWrongAnswerPractice()" ${wrongAnswers.length ? "" : "disabled"}>
        ${wrongAnswers.length ? textByLanguage("Practice Now", "ఇప్పుడే అభ్యాసం చేయండి", "अभी अभ्यास करें") : textByLanguage("All caught up", "అన్నీ పూర్తయ్యాయి", "सब पूरा है")}
      </button>
    </section>
  `;

  window.scrollTo(0, 0);
}


function getBadgeList(completed) {

  const badgeDefinitions = [
    ["🌱", "First Step", "మొదటి అడుగు", "पहला कदम", 1],
    ["⭐", "Quiz Starter", "క్విజ్ స్టార్టర్", "क्विज़ स्टार्टर", 10],
    ["🔥", "Learning Streak", "అభ్యాస పరంపర", "सीखने की निरंतरता", 25],
    ["🏆", "Gyaan Champion", "జ్ఞాన్ ఛాంపియన్", "ज्ञान चैंपियन", 50]
  ];


  return badgeDefinitions
    .map(
      badge => {
        const unlocked = experiencePoints >= badge[4] || completed >= badge[4] / 10;

        return `
          <div class="badge-item ${unlocked ? "unlocked" : "locked"}">
            <span>${badge[0]}</span>
            <strong>${textByLanguage(badge[1], badge[2], badge[3])}</strong>
            <small>${unlocked ? textByLanguage("Unlocked", "అన్‌లాక్ అయింది", "अनलॉक है") : `${badge[4]} XP`}</small>
          </div>
        `;
      }
    )
    .join("");
}


function showWrongAnswerPractice() {

  if (!wrongAnswers.length) {
    showProfileScreen();
    return;
  }


  const cards = wrongAnswers
    .map(
      (item, index) => {
        const lesson = learningData[`class${item.classNumber}`]
          ?.chapters[item.chapterIndex]
          ?.lessons[item.lessonIndex];
        const question = lesson?.quiz[item.questionIndex];

        if (!lesson || !question) {
          return "";
        }

        return `
          <div class="practice-card" data-practice-index="${index}">
            <span class="practice-topic">${lesson.title[selectedLanguage]}</span>
            <h3>${question.question[selectedLanguage]}</h3>
            <div class="practice-options">
              ${question.options[selectedLanguage].map(
                (option, optionIndex) => `
                  <button class="quiz-option" onclick="answerPractice(this, ${item.classNumber}, ${item.chapterIndex}, ${item.lessonIndex}, ${item.questionIndex}, ${optionIndex}, ${question.answer})">
                    ${option}
                  </button>
                `
              ).join("")}
            </div>
          </div>
        `;
      }
    )
    .join("");


  app.innerHTML = `
    <button class="back-btn" onclick="showProfileScreen()">
      ← ${uiText("back")}
    </button>
    <section class="section-heading">
      <h2>🧠 ${textByLanguage("Practice Mistakes", "తప్పులను అభ్యాసం చేయండి", "गलत उत्तरों का अभ्यास करें")}</h2>
      <p>${textByLanguage("Try each question again and strengthen your memory.", "ప్రతి ప్రశ్నను మళ్లీ ప్రయత్నించి మీ జ్ఞాపకశక్తిని బలపరచండి.", "हर प्रश्न को दोबारा हल करके अपनी याददाश्त मजबूत करें।")}</p>
    </section>
    <div class="practice-list">${cards}</div>
  `;
}


function answerPractice(button, classNumber, chapterIndex, lessonIndex, questionIndex, selectedOption, correctOption) {

  const card = button.closest(".practice-card");
  const buttons = card.querySelectorAll(".quiz-option");

  buttons.forEach(item => item.disabled = true);

  if (selectedOption === correctOption) {
    button.classList.add("practice-correct");
    clearWrongAnswer(classNumber, chapterIndex, lessonIndex, questionIndex);
    experiencePoints += 2;
    saveAccountState();
    card.classList.add("practice-complete");
  }

  else {
    button.classList.add("practice-wrong");
    buttons[correctOption].classList.add("practice-correct");
  }
}


// ======================================================
// TRANSLATION HELPERS
// ======================================================

function textByLanguage(
  english,
  telugu,
  hindi
) {

  if (selectedLanguage === "Telugu") {
    return telugu;
  }

  if (selectedLanguage === "Hindi") {
    return hindi;
  }

  return english;
}


function uiText(key) {

  const translations = {
    tagline: [
      "Learning Beyond Internet Barriers",
      "ఇంటర్నెట్ అడ్డంకులు లేకుండా అభ్యాసం",
      "इंटरनेट की बाधाओं से परे सीखना"
    ],
    checking: ["Checking...", "తనిఖీ చేస్తోంది...", "जाँच हो रही है..."],
    online: ["Online", "ఆన్‌లైన్", "ऑनलाइन"],
    offlineReady: ["Offline Ready", "ఆఫ్‌లైన్ సిద్ధంగా ఉంది", "ऑफलाइन तैयार"],
    assistant: ["Gyaan Assistant", "జ్ఞాన్ సహాయకుడు", "ज्ञान सहायक"],
    login: ["Log in", "లాగిన్", "लॉगिन"],
    back: ["Back", "వెనుకకు", "वापस"],
    offlineAssistant: ["Offline Learning Assistant", "ఆఫ్‌లైన్ అభ్యాస సహాయకుడు", "ऑफलाइन सीखने का सहायक"],
    openAssistant: ["Open Gyaan Assistant", "జ్ఞాన్ సహాయకుడిని తెరవండి", "ज्ञान सहायक खोलें"],
    close: ["Close chat", "చాట్ మూసివేయండి", "चैट बंद करें"],
    askQuestion: ["Ask your question...", "మీ ప్రశ్న అడగండి...", "अपना प्रश्न पूछें..."],
    home: ["Home", "హోమ్", "होम"],
    learn: ["Learn", "నేర్చుకోండి", "सीखें"],
    ask: ["Ask", "అడగండి", "पूछें"],
    startLearning: ["Start Learning", "అభ్యాసం ప్రారంభించండి", "सीखना शुरू करें"],
    askGyaan: ["Ask Gyaan", "జ్ఞాన్‌ను అడగండి", "ज्ञान से पूछें"],
    offline: ["Offline", "ఆఫ్‌లైన్", "ऑफलाइन"],
    multilingual: ["Multilingual", "బహుభాషా", "बहुभाषी"],
    interactive: ["Interactive", "ఇంటరాక్టివ్", "इंटरैक्टिव"],
    why: ["Why Gyaan Setu?", "జ్ఞాన్ సేతు ఎందుకు?", "ज्ञान सेतु क्यों?"],
    simpleLearning: ["Learning designed to remain simple, accessible and useful.", "అభ్యాసం సరళంగా, అందుబాటులో మరియు ఉపయోగకరంగా ఉండేలా రూపొందించబడింది.", "सीखने को सरल, सुलभ और उपयोगी बनाया गया है।"],
    offlineLearning: ["Offline Learning", "ఆఫ్‌లైన్ అభ్యాసం", "ऑफलाइन सीखना"],
    cachedContent: ["Previously cached educational content remains available without continuous internet.", "ఇంతకు ముందు క్యాష్ చేసిన విద్యా కంటెంట్ నిరంతర ఇంటర్నెట్ లేకుండానే అందుబాటులో ఉంటుంది.", "पहले से कैश की गई शैक्षिक सामग्री लगातार इंटरनेट के बिना भी उपलब्ध रहती है।"],
    threeLanguages: ["Three Languages", "మూడు భాషలు", "तीन भाषाएँ"],
    languageDescription: ["Students can learn in English, Telugu or Hindi.", "విద్యార్థులు ఇంగ్లీష్, తెలుగు లేదా హిందీలో నేర్చుకోవచ్చు.", "विद्यार्थी अंग्रेज़ी, तेलुगु या हिंदी में सीख सकते हैं।"],
    activities: ["Activities & Quizzes", "కార్యకలాపాలు మరియు క్విజ్‌లు", "गतिविधियाँ और प्रश्नोत्तरी"],
    activityDescription: ["Interactive learning helps students review important concepts.", "ఇంటరాక్టివ్ అభ్యాసం విద్యార్థులకు ముఖ్యమైన భావనలను పునఃసమీక్షించడంలో సహాయపడుతుంది.", "इंटरैक्टिव सीखने से विद्यार्थी महत्वपूर्ण अवधारणाओं को दोहरा सकते हैं।"],
    dashboard: ["My Learning Dashboard", "నా అభ్యాస డాష్‌బోర్డ్", "मेरा सीखने का डैशबोर्ड"],
    trackJourney: ["Track your learning journey.", "మీ అభ్యాస ప్రయాణాన్ని ట్రాక్ చేయండి.", "अपनी सीखने की यात्रा पर नज़र रखें।"],
    overall: ["Overall Progress", "మొత్తం పురోగతి", "कुल प्रगति"],
    totalLessons: ["Total Lessons", "మొత్తం పాఠాలు", "कुल पाठ"],
    completed: ["Completed", "పూర్తయింది", "पूरा हुआ"],
    language: ["Language", "భాష", "भाषा"],
    continueLearning: ["CONTINUE LEARNING", "అభ్యాసాన్ని కొనసాగించండి", "सीखना जारी रखें"],
    firstLesson: ["Start your first lesson", "మీ మొదటి పాఠాన్ని ప్రారంభించండి", "अपना पहला पाठ शुरू करें"],
    chooseLanguageClass: ["Choose a language and class to begin.", "ప్రారంభించడానికి భాష మరియు తరగతిని ఎంచుకోండి.", "शुरू करने के लिए भाषा और कक्षा चुनें।"],
    achievements: ["Achievements", "విజయాలు", "उपलब्धियाँ"],
    milestones: ["Your learning milestones.", "మీ అభ్యాస మైలురాళ్లు.", "आपकी सीखने की उपलब्धियाँ।"]
  };

  const languageIndex =
    selectedLanguage === "Telugu"
      ? 1
      : selectedLanguage === "Hindi"
        ? 2
        : 0;

  return translations[key]
    ? translations[key][languageIndex]
    : key;
}


function applyShellLanguage() {

  const textTargets = {
    brandTagline: "tagline",
    assistantTitle: "assistant",
    assistantSubtitle: "offlineAssistant",
    homeNavLabel: "home",
    learnNavLabel: "learn",
    askNavLabel: "ask"
  };


  Object.keys(textTargets).forEach(
    id => {
      const element = document.getElementById(id);

      if (element) {
        element.textContent = uiText(textTargets[id]);
      }
    }
  );


  document.getElementById("chatFab")?.setAttribute(
    "aria-label",
    uiText("openAssistant")
  );

  document.getElementById("closeChat")?.setAttribute(
    "aria-label",
    uiText("close")
  );

  document.getElementById("chatInput")?.setAttribute(
    "placeholder",
    uiText("askQuestion")
  );
}


function getClassName(number) {

  return textByLanguage(
    `Class ${number}`,
    `తరగతి ${number}`,
    `कक्षा ${number}`
  );
}


function getLanguageDisplayName() {

  return selectedLanguage === "Telugu"
    ? "తెలుగు"
    : selectedLanguage === "Hindi"
      ? "हिन्दी"
      : "English";
}


// ======================================================
// HOME PAGE + DASHBOARD
// ======================================================

function showHome() {

  if (!currentAccountId) {
    showLanguageScreen();
    return;
  }

  setActiveNav(0);
  applyShellLanguage();

  const overall =
    getOverallProgress();

  const lastDetails =
    getLastLessonDetails();


  app.innerHTML = `

    <section class="hero">

      <div class="hero-content">

        <span class="hero-badge">
          📴 ${uiText("offline")} • 🌐 ${uiText("multilingual")} • 🎯 ${uiText("interactive")}
        </span>

        <h2>
          ${textByLanguage(
            "Learning that goes wherever you go.",
            "మీరు ఎక్కడికి వెళ్లినా మీతో పాటు వచ్చే అభ్యాసం.",
            "सीखना जो आपके साथ हर जगह जाता है।"
          )}
        </h2>

        <p>
          ${textByLanguage(
            "Explore simple lessons, visual explanations, activities and quizzes in English, Telugu and Hindi. Gyaan Setu continues supporting learning even when internet connectivity is limited.",
            "ఇంగ్లీష్, తెలుగు మరియు హిందీలో సరళమైన పాఠాలు, దృశ్య వివరణలు, కార్యకలాపాలు మరియు క్విజ్‌లను అన్వేషించండి. ఇంటర్నెట్ పరిమితంగా ఉన్నప్పటికీ జ్ఞాన్ సేతు అభ్యాసానికి తోడ్పడుతుంది.",
            "अंग्रेज़ी, तेलुगु और हिंदी में सरल पाठ, दृश्य व्याख्याएँ, गतिविधियाँ और प्रश्नोत्तरी देखें। इंटरनेट सीमित होने पर भी ज्ञान सेतु सीखने में सहायता करता है।"
          )}
        </p>

        <div class="hero-actions">

          <button
            class="primary-btn"
            onclick="showLanguageScreen()"
          >
            ${uiText("startLearning")} →
          </button>

          <button
            class="secondary-btn"
            onclick="openChat()"
          >
            💬 ${uiText("askGyaan")}
          </button>

        </div>

      </div>

    </section>


    <section class="section">

      <div class="section-heading">

        <h2>${uiText("why")}</h2>

        <p>
          ${uiText("simpleLearning")}
        </p>

      </div>


      <div class="feature-grid">

        ${featureCard(
          "📴",
          uiText("offlineLearning"),
          uiText("cachedContent")
        )}

        ${featureCard(
          "🌐",
          uiText("threeLanguages"),
          uiText("languageDescription")
        )}

        ${featureCard(
          "🎯",
          uiText("activities"),
          uiText("activityDescription")
        )}

        ${featureCard(
          "🤖",
          uiText("assistant"),
          textByLanguage(
            "The learning assistant searches locally stored lesson knowledge without an online API.",
            "ఈ అభ్యాస సహాయకుడు ఆన్‌లైన్ API లేకుండా స్థానికంగా నిల్వ చేసిన పాఠాల జ్ఞానాన్ని శోధిస్తాడు.",
            "यह सहायक बिना ऑनलाइन API के स्थानीय रूप से संग्रहीत पाठ ज्ञान को खोजता है।"
          )
        )}

      </div>

    </section>


    <!-- =====================================
         STUDENT DASHBOARD
    ====================================== -->

    <section class="section dashboard-section">

      <div class="section-heading">

        <h2>
          📊 ${uiText("dashboard")}
        </h2>

        <p>
          ${uiText("trackJourney")}
        </p>

      </div>


      <div class="dashboard-progress">

        <div class="progress-top">

          <div>

            <span class="progress-label">
              ${uiText("overall")}
            </span>

            <h2>
              ${overall.percent}%
            </h2>

          </div>


          <div class="progress-emoji">
            🚀
          </div>

        </div>


        <div class="dashboard-progress-bar">

          <div
            class="dashboard-progress-fill"
            style="width:${overall.percent}%"
          ></div>

        </div>

      </div>


      <div class="stats-grid">

        <div class="stat-card">

          <div class="stat-icon">
            📚
          </div>

          <h2>
            ${overall.totalLessons}
          </h2>

          <p>
            ${uiText("totalLessons")}
          </p>

        </div>


        <div class="stat-card">

          <div class="stat-icon">
            ✅
          </div>

          <h2>
            ${overall.completed}
          </h2>

          <p>
            ${uiText("completed")}
          </p>

        </div>


        <div class="stat-card">

          <div class="stat-icon">
            🌐
          </div>

          <h2 class="small-stat">
            ${getLanguageDisplayName()}
          </h2>

          <p>
            ${uiText("language")}
          </p>

        </div>

      </div>


      <button
        class="continue-card"
        onclick="continueLearning()"
      >

        <div>

          <span class="continue-small">
            ${uiText("continueLearning")}
          </span>

          <h3>
            ${
              lastDetails
                ? lastDetails.title
                : uiText("firstLesson")
            }
          </h3>

          ${
            lastDetails
              ? `
                <p class="continue-description">
                  ${lastDetails.className}
                </p>
              `
              : `
                <p class="continue-description">
                  ${uiText("chooseLanguageClass")}
                </p>
              `
          }

        </div>

        <span class="continue-arrow">
          →
        </span>

      </button>


      <div class="section-heading achievements-heading">

        <h2>
          🏆 ${uiText("achievements")}
        </h2>

        <p>
          ${uiText("milestones")}
        </p>

      </div>


      <div class="achievements-grid">

        ${getAchievements(
          overall.completed
        )}

      </div>

    </section>

  `;


  window.scrollTo(0, 0);
}


// ======================================================
// FEATURE CARD
// ======================================================

function featureCard(
  icon,
  title,
  description
) {

  return `

    <div class="feature-card">

      <div class="feature-icon">
        ${icon}
      </div>

      <h3>
        ${title}
      </h3>

      <p>
        ${description}
      </p>

    </div>

  `;
}


// ======================================================
// LANGUAGE SCREEN
// ======================================================

function showLanguageScreen() {
  setActiveNav(1);


  app.innerHTML = `

    <button
      class="back-btn"
      onclick="showHome()"
    >
      ← ${uiText("back")}
    </button>


    <section class="section-heading">

      <h2>
        🌐 ${textByLanguage(
          "Choose Your Language",
          "మీ భాషను ఎంచుకోండి",
          "अपनी भाषा चुनें"
        )}
      </h2>

      <p>
        ${textByLanguage(
          "Select the language you are most comfortable learning in.",
          "మీకు సౌకర్యంగా ఉన్న భాషను ఎంచుకోండి.",
          "अपनी सुविधा की भाषा चुनें।"
        )}
      </p>

    </section>


    <div class="language-grid">

      ${languageCard(
        "A",
        "English",
        "Continue learning in English",
        "English"
      )}

      ${languageCard(
        "అ",
        "తెలుగు",
        "తెలుగులో నేర్చుకోండి",
        "Telugu"
      )}

      ${languageCard(
        "अ",
        "हिन्दी",
        "हिन्दी में सीखें",
        "Hindi"
      )}

    </div>

  `;


  window.scrollTo(0, 0);
}


function languageCard(
  symbol,
  title,
  description,
  language
) {

  return `

    <button
      class="language-card"
      onclick="selectLanguage('${language}')"
    >

      <div class="language-symbol">
        ${symbol}
      </div>

      <h3>
        ${title}
      </h3>

      <p>
        ${description}
      </p>

    </button>

  `;
}


function selectLanguage(language) {

  selectedLanguage =
    language;
  applyShellLanguage();
  updateNetworkStatus();

  if (currentAccountId) {
    saveAccountState();
    showClassScreen();
    return;
  }

  languageChosenBeforeAuth = true;
  renderAccountArea();
  showAuthScreen();
}


// ======================================================
// CLASS SCREEN
// ======================================================

function showClassScreen() {

  const heading =
    textByLanguage(
      "Choose Your Class",
      "మీ తరగతిని ఎంచుకోండి",
      "अपनी कक्षा चुनें"
    );


  const description =
    textByLanguage(
      "Select your class to start learning.",
      "నేర్చుకోవడం ప్రారంభించడానికి మీ తరగతిని ఎంచుకోండి.",
      "सीखना शुरू करने के लिए अपनी कक्षा चुनें।"
    );


  app.innerHTML = `

    <button
      class="back-btn"
      onclick="showLanguageScreen()"
    >
      ← ${uiText("back")}
    </button>


    <section class="section-heading">

      <h2>
        🎓 ${heading}
      </h2>

      <p>
        ${description}
      </p>

      <p>
        🌐 ${getLanguageDisplayName()}
      </p>

    </section>


    <div class="class-grid">

      ${classCard(
        1,
        "🌱",
        textByLanguage("Discover & Learn", "తెలుసుకోండి మరియు నేర్చుకోండి", "जानें और सीखें")
      )}

      ${classCard(
        2,
        "🌍",
        textByLanguage("Explore & Understand", "అన్వేషించండి మరియు అర్థం చేసుకోండి", "अन्वेषण करें और समझें")
      )}

      ${classCard(
        3,
        "🌿",
        textByLanguage("Environmental Studies", "పర్యావరణ అధ్యయనం", "पर्यावरण अध्ययन")
      )}

      ${classCard(
        4,
        "🔬",
        textByLanguage("Environmental Studies", "పర్యావరణ అధ్యయనం", "पर्यावरण अध्ययन")
      )}

      ${classCard(
        5,
        "🌎",
        textByLanguage("Environmental Studies", "పర్యావరణ అధ్యయనం", "पर्यावरण अध्ययन")
      )}

    </div>

  `;


  window.scrollTo(0, 0);
}


function classCard(
  number,
  icon,
  subtitle
) {

  return `

    <button
      class="class-card"
      onclick="selectClass(${number})"
    >

      <div class="class-icon">
        ${icon}
      </div>

      <h3>
        ${getClassName(number)}
      </h3>

      <p>
        ${subtitle}
      </p>

    </button>

  `;
}


function selectClass(number) {

  selectedClass =
    number;

  saveAccountState();

  showSubjectScreen();
}


// ======================================================
// SUBJECT SCREEN
// ======================================================

function showSubjectScreen() {

  const classKey =
    `class${selectedClass}`;

  const classData =
    learningData[classKey];


  if (!classData) {

    showError(
      "Content is not available."
    );

    return;
  }


  const progress =
    getClassProgress();


  app.innerHTML = `

    <button
      class="back-btn"
      onclick="showClassScreen()"
    >
      ← ${uiText("back")}
    </button>


    <section class="section-heading">

      <h2>
        ${getClassName(selectedClass)}
      </h2>

      <p>
        ${textByLanguage(
          "Choose your learning area.",
          "మీ అభ్యాస విభాగాన్ని ఎంచుకోండి.",
          "अपना अध्ययन क्षेत्र चुनें।"
        )}
      </p>

    </section>


    ${renderProgress(progress)}


    <div
      class="chapter-grid"
      style="margin-top:20px;"
    >

      <div
        class="chapter-card"
        onclick="showChapters()"
      >

        <div class="chapter-number">
          📗
        </div>

        <h3>
          ${classData.subject[selectedLanguage]}
        </h3>

        <p>
          ${textByLanguage(
            "Lessons, activities, quizzes and offline question support.",
            "పాఠాలు, కార్యకలాపాలు, క్విజ్‌లు మరియు ఆఫ్‌లైన్ ప్రశ్నల సహాయం.",
            "पाठ, गतिविधियाँ, प्रश्नोत्तरी और ऑफलाइन प्रश्न सहायता।"
          )}
        </p>

      </div>

    </div>

  `;


  window.scrollTo(0, 0);
}


// ======================================================
// LESSON PROGRESS
// ======================================================

function lessonKey(
  classNumber,
  chapterIndex,
  lessonIndex
) {

  return `${classNumber}-${chapterIndex}-${lessonIndex}`;
}


function isLessonComplete(
  chapterIndex,
  lessonIndex
) {

  const key =
    lessonKey(
      selectedClass,
      chapterIndex,
      lessonIndex
    );


  return Boolean(
    completedLessons[key]
  );
}


function markLessonComplete(
  chapterIndex,
  lessonIndex,
  score,
  total
) {

  const key =
    lessonKey(
      selectedClass,
      chapterIndex,
      lessonIndex
    );

  const wasAlreadyComplete =
    Boolean(completedLessons[key]);


  completedLessons[key] = {

    completed: true,
    score: score,
    total: total

  };


  if (!wasAlreadyComplete) {
    experiencePoints += 10 + score;
  }


  saveAccountState();
}


function rememberWrongAnswer(
  chapterIndex,
  lessonIndex,
  questionIndex,
  selectedOption,
  correctOption
) {

  const exists =
    wrongAnswers.some(
      item =>
        item.classNumber === selectedClass &&
        item.chapterIndex === chapterIndex &&
        item.lessonIndex === lessonIndex &&
        item.questionIndex === questionIndex
    );


  if (exists) {
    return;
  }


  wrongAnswers.push({
    classNumber: selectedClass,
    chapterIndex,
    lessonIndex,
    questionIndex,
    selectedOption,
    correctOption
  });

  saveAccountState();
}


function clearWrongAnswer(
  classNumber,
  chapterIndex,
  lessonIndex,
  questionIndex
) {

  wrongAnswers =
    wrongAnswers.filter(
      item =>
        !(
          item.classNumber === classNumber &&
          item.chapterIndex === chapterIndex &&
          item.lessonIndex === lessonIndex &&
          item.questionIndex === questionIndex
        )
    );

  saveAccountState();
}


// ======================================================
// CLASS PROGRESS
// ======================================================

function getClassProgress() {

  if (!selectedClass) {

    return {
      complete: 0,
      total: 0,
      percent: 0
    };

  }


  const classData =
    learningData[
      `class${selectedClass}`
    ];


  let total = 0;

  let complete = 0;


  classData.chapters.forEach(
    (chapter, chapterIndex) => {

      chapter.lessons.forEach(
        (lesson, lessonIndex) => {

          total++;


          if (
            isLessonComplete(
              chapterIndex,
              lessonIndex
            )
          ) {

            complete++;

          }

        }
      );

    }
  );


  const percent =
    total === 0
      ? 0
      : Math.round(
          (complete / total) * 100
        );


  return {

    complete,
    total,
    percent

  };
}


// ======================================================
// OVERALL PROGRESS
// ======================================================

function getOverallProgress() {

  let totalLessons = 0;

  let completed = 0;


  Object.keys(
    learningData
  ).forEach(
    classKey => {

      const classNumber =
        Number(
          classKey.replace(
            "class",
            ""
          )
        );


      const classData =
        learningData[classKey];


      classData.chapters.forEach(
        (chapter, chapterIndex) => {

          chapter.lessons.forEach(
            (lesson, lessonIndex) => {

              totalLessons++;


              const key =
                lessonKey(
                  classNumber,
                  chapterIndex,
                  lessonIndex
                );


              if (
                completedLessons[key]
              ) {

                completed++;

              }

            }
          );

        }
      );

    }
  );


  const percent =
    totalLessons === 0
      ? 0
      : Math.round(
          (completed / totalLessons) * 100
        );


  return {

    totalLessons,
    completed,
    percent

  };
}


// ======================================================
// PROGRESS COMPONENT
// ======================================================

function renderProgress(progress) {

  return `

    <div class="class-progress-card">

      <div class="class-progress-top">

        <span>
          📈
          ${textByLanguage(
            "Learning Progress",
            "అభ్యాస పురోగతి",
            "सीखने की प्रगति"
          )}
        </span>

        <span>
          ${progress.percent}%
        </span>

      </div>


      <div class="class-progress-bar">

        <div
          class="class-progress-fill"
          style="width:${progress.percent}%"
        ></div>

      </div>

    </div>

  `;
}


// ======================================================
// CHAPTER SCREEN
// ======================================================

function showChapters() {

  const classKey =
    `class${selectedClass}`;

  const classData =
    learningData[classKey];


  let cards = "";


  classData.chapters.forEach(
    (chapter, chapterIndex) => {

      let completed =
        false;


      if (
        chapter.lessons.length > 0
      ) {

        completed =
          chapter.lessons.every(
            (lesson, lessonIndex) =>

              isLessonComplete(
                chapterIndex,
                lessonIndex
              )

          );

      }


      cards += `

        <div
          class="chapter-card"
          onclick="openChapter(${chapterIndex})"
        >

          <div class="card-top-row">

            <div class="chapter-number">
              ${chapter.icon}
            </div>


            ${
              completed
                ? `
                  <span class="completed-badge">
                    ✓ Completed
                  </span>
                `
                : ""
            }

          </div>


          <h3>
            ${chapter.title[selectedLanguage]}
          </h3>


          <p>
            ${chapter.description[selectedLanguage]}
          </p>

        </div>

      `;

    }
  );


  app.innerHTML = `

    <button
      class="back-btn"
      onclick="showSubjectScreen()"
    >
      ← ${uiText("back")}
    </button>


    <section class="section-heading">

      <h2>
        📚
        ${classData.subject[selectedLanguage]}
      </h2>

      <p>
        ${textByLanguage(
          "Choose a learning module.",
          "ఒక అభ్యాస విభాగాన్ని ఎంచుకోండి.",
          "एक अध्ययन मॉड्यूल चुनें।"
        )}
      </p>

    </section>


    ${renderProgress(
      getClassProgress()
    )}


    <div
      class="chapter-grid"
      style="margin-top:20px;"
    >

      ${cards}

    </div>

  `;


  window.scrollTo(0, 0);
}


// ======================================================
// OPEN CHAPTER
// ======================================================

function openChapter(
  chapterIndex
) {

  const chapter =
    learningData[
      `class${selectedClass}`
    ]
    .chapters[
      chapterIndex
    ];


  if (
    !chapter.lessons ||
    chapter.lessons.length === 0
  ) {

    app.innerHTML = `

      <button
        class="back-btn"
        onclick="showChapters()"
      >
        ← ${uiText("back")}
      </button>


      <div class="empty-state">

        <div class="large-emoji">
          ${chapter.icon}
        </div>

        <h2>
          ${chapter.title[selectedLanguage]}
        </h2>

        <p>
          ${textByLanguage(
            "This content will be added in the next development stage.",
            "ఈ కంటెంట్ తదుపరి అభివృద్ధి దశలో చేర్చబడుతుంది.",
            "यह सामग्री अगले विकास चरण में जोड़ी जाएगी।"
          )}
        </p>

      </div>

    `;


    return;
  }


  let lessonCards = "";


  chapter.lessons.forEach(
    (lesson, lessonIndex) => {

      const complete =
        isLessonComplete(
          chapterIndex,
          lessonIndex
        );


      lessonCards += `

        <div
          class="chapter-card"
          onclick="
            openLesson(
              ${chapterIndex},
              ${lessonIndex}
            )
          "
        >

          <div class="card-top-row">

            <div class="chapter-number">
              ${lesson.visual || "📘"}
            </div>

            ${
              complete
                ? `
                  <span class="completed-badge">
                    ✓ Completed
                  </span>
                `
                : ""
            }

          </div>

          <h3>
            ${lesson.title[selectedLanguage]}
          </h3>

          <p>
            ${textByLanguage(
              "Tap to start learning.",
              "నేర్చుకోవడం ప్రారంభించడానికి నొక్కండి.",
              "सीखना शुरू करने के लिए टैप करें।"
            )}
          </p>

        </div>

      `;

    }
  );


  app.innerHTML = `

    <button
      class="back-btn"
      onclick="showChapters()"
    >
      ← ${uiText("back")}
    </button>


    <section class="section-heading">

      <h2>
        ${chapter.icon}
        ${chapter.title[selectedLanguage]}
      </h2>

      <p>
        ${chapter.description[selectedLanguage]}
      </p>

    </section>


    <div class="chapter-grid">

      ${lessonCards}

    </div>

  `;


  window.scrollTo(0, 0);
}


// ======================================================
// SAVE LAST LESSON
// ======================================================

function saveLastLesson(
  chapterIndex,
  lessonIndex
) {

  lastLesson = {

    classNumber:
      selectedClass,

    chapterIndex:
      chapterIndex,

    lessonIndex:
      lessonIndex

  };


  saveAccountState();
}


// ======================================================
// GET LAST LESSON DETAILS
// ======================================================

function getLastLessonDetails() {

  if (!lastLesson) {

    return null;

  }


  try {

    const classData =
      learningData[
        `class${lastLesson.classNumber}`
      ];


    const chapter =
      classData.chapters[
        lastLesson.chapterIndex
      ];


    const lesson =
      chapter.lessons[
        lastLesson.lessonIndex
      ];


    return {

      title:
        lesson.title[
          selectedLanguage
        ],

      className:
        getClassName(
          lastLesson.classNumber
        )

    };

  }

  catch (error) {

    return null;

  }
}


// ======================================================
// CONTINUE LEARNING
// ======================================================

function continueLearning() {

  if (!lastLesson) {

    showLanguageScreen();

    return;
  }


  selectedClass =
    lastLesson.classNumber;


  saveAccountState();


  openLesson(
    lastLesson.chapterIndex,
    lastLesson.lessonIndex
  );
}


// ======================================================
// OPEN LESSON
// ======================================================

function openLesson(
  chapterIndex,
  lessonIndex
) {

  saveLastLesson(
    chapterIndex,
    lessonIndex
  );


  const lesson =
    learningData[
      `class${selectedClass}`
    ]
    .chapters[
      chapterIndex
    ]
    .lessons[
      lessonIndex
    ];


  const points =
    lesson.keyPoints[
      selectedLanguage
    ]
    .map(
      point =>
        `<li>${point}</li>`
    )
    .join("");


  let visualHTML = "";


  if (lesson.image) {

    visualHTML = `

      <img
        class="lesson-image"
        src="${lesson.image}"
        alt="${lesson.title[selectedLanguage]}"
        onerror="this.style.display='none'"
      >

    `;

  }

  else {

    visualHTML = `

      <div class="lesson-fallback-visual">

        ${lesson.visual || "📘"}

      </div>

    `;

  }


  const pictureActivity =
    renderPictureActivity(
      lesson,
      chapterIndex,
      lessonIndex
    );


  app.innerHTML = `

    <button
      class="back-btn"
      onclick="openChapter(${chapterIndex})"
    >
      ← ${uiText("back")}
    </button>


    <article class="lesson-container">

      <h2 class="lesson-title">

        ${lesson.title[selectedLanguage]}

      </h2>


      ${visualHTML}


      <p class="lesson-description">

        ${lesson.explanation[selectedLanguage]}

      </p>


      <div class="info-box">

        <h3>
          ✨
          ${textByLanguage(
            "Key Points",
            "ముఖ్యాంశాలు",
            "मुख्य बिंदु"
          )}
        </h3>

        <ul>
          ${points}
        </ul>

      </div>


      <div class="info-box activity-box">

        <h3>
          🎯
          ${textByLanguage(
            "Try This Activity",
            "ఈ కార్యకలాపాన్ని ప్రయత్నించండి",
            "यह गतिविधि करें"
          )}
        </h3>

        <p>
          ${lesson.activity[selectedLanguage]}
        </p>

      </div>


      ${pictureActivity}


      <div class="lesson-actions">

        <button
          class="action-btn"
          onclick="
            startQuiz(
              ${chapterIndex},
              ${lessonIndex}
            )
          "
        >
          📝
          ${textByLanguage(
            "Start Quiz",
            "క్విజ్ ప్రారంభించండి",
            "प्रश्नोत्तरी शुरू करें"
          )}
        </button>


        <button
          class="action-btn green-btn"
          onclick="openChat()"
        >
          💬
          ${textByLanguage(
            "Ask Gyaan",
            "గ్యాన్‌ను అడగండి",
            "ज्ञान से पूछें"
          )}
        </button>

      </div>

    </article>

  `;


  window.scrollTo(0, 0);
}


// ======================================================
// QUIZ
// ======================================================

function startQuiz(
  chapterIndex,
  lessonIndex
) {

  const lesson =
    learningData[
      `class${selectedClass}`
    ]
    .chapters[
      chapterIndex
    ]
    .lessons[
      lessonIndex
    ];


  window.quizScore = 0;

  window.quizAnswered =
    new Set();

  window.quizTotal =
    lesson.quiz.length;

  window.currentQuizChapter =
    chapterIndex;

  window.currentQuizLesson =
    lessonIndex;


  let quizHTML = "";


  lesson.quiz.forEach(
    (item, questionIndex) => {

      let optionHTML = "";


      item.options[
        selectedLanguage
      ].forEach(
        (option, optionIndex) => {

          optionHTML += `

            <button
              class="quiz-option"
              onclick="
                answerQuiz(
                  this,
                  ${questionIndex},
                  ${optionIndex},
                  ${item.answer}
                )
              "
            >
              ${option}
            </button>

          `;

        }
      );


      quizHTML += `

        <div class="quiz-card">

          <h3>

            ${questionIndex + 1}.
            ${item.question[selectedLanguage]}

          </h3>

          ${optionHTML}

        </div>

      `;

    }
  );


  app.innerHTML = `

    <button
      class="back-btn"
      onclick="
        openLesson(
          ${chapterIndex},
          ${lessonIndex}
        )
      "
    >
      ← ${uiText("back")}
    </button>


    <section class="section-heading">

      <h2>
        📝
        ${textByLanguage(
          "Lesson Quiz",
          "పాఠం క్విజ్",
          "पाठ प्रश्नोत्तरी"
        )}
      </h2>

      <p>
        ${textByLanguage(
          "Answer all questions to complete the lesson.",
          "పాఠాన్ని పూర్తి చేయడానికి అన్ని ప్రశ్నలకు సమాధానం ఇవ్వండి.",
          "पाठ पूरा करने के लिए सभी प्रश्नों के उत्तर दें।"
        )}
      </p>

    </section>


    ${quizHTML}


    <div
      id="quizResult"
      class="quiz-result"
      style="display:none;"
    ></div>

  `;


  window.scrollTo(0, 0);
}


// ======================================================
// ANSWER QUIZ
// ======================================================

function answerQuiz(
  button,
  questionIndex,
  selectedOption,
  correctOption
) {

  if (
    window.quizAnswered.has(
      questionIndex
    )
  ) {

    return;
  }


  window.quizAnswered.add(
    questionIndex
  );


  const card =
    button.closest(
      ".quiz-card"
    );


  const buttons =
    card.querySelectorAll(
      ".quiz-option"
    );


  buttons.forEach(
    item => {

      item.disabled =
        true;

    }
  );


  if (
    selectedOption ===
    correctOption
  ) {

    button.style.background =
      "#dff8e9";

    button.style.borderColor =
      "#36a866";

    window.quizScore++;

  }

  else {

    button.style.background =
      "#ffe6e6";

    button.style.borderColor =
      "#df6868";


    buttons[
      correctOption
    ].style.background =
      "#dff8e9";


    buttons[
      correctOption
    ].style.borderColor =
      "#36a866";

    rememberWrongAnswer(
      window.currentQuizChapter,
      window.currentQuizLesson,
      questionIndex,
      selectedOption,
      correctOption
    );

  }


  if (
    window.quizAnswered.size ===
    window.quizTotal
  ) {

    finishQuiz();

  }
}


// ======================================================
// FINISH QUIZ
// ======================================================

function finishQuiz() {

  markLessonComplete(

    window.currentQuizChapter,

    window.currentQuizLesson,

    window.quizScore,

    window.quizTotal

  );


  const result =
    document.getElementById(
      "quizResult"
    );


  result.style.display =
    "block";


  let emoji =
    "👏";


  if (
    window.quizScore ===
    window.quizTotal
  ) {

    emoji =
      "🏆";

  }


  result.innerHTML = `

    <div class="quiz-result-emoji">
      ${emoji}
    </div>

    <h2>
      ${textByLanguage(
        "Lesson Completed!",
        "పాఠం పూర్తయింది!",
        "पाठ पूरा हुआ!"
      )}
    </h2>

    <p>
      ${textByLanguage(
        "Your Score",
        "మీ స్కోర్",
        "आपका स्कोर"
      )}:

      <strong>
        ${window.quizScore}
        /
        ${window.quizTotal}
      </strong>
    </p>


    <button
      class="action-btn"
      style="margin-top:18px;"
      onclick="showChapters()"
    >
      ✓
      ${textByLanguage(
        "Continue Learning",
        "నేర్చుకోవడం కొనసాగించండి",
        "सीखना जारी रखें"
      )}
    </button>

  `;


  result.scrollIntoView({
    behavior: "smooth"
  });
}


// ======================================================
// ACHIEVEMENTS
// ======================================================

function getAchievements(
  completed
) {

  let html = "";


  if (
    completed >= 1
  ) {

    html += `

      <div class="achievement-card">

        <span>⭐</span>

        <div>

          <strong>
            ${textByLanguage("First Step", "మొదటి అడుగు", "पहला कदम")}
          </strong>

          <p>
            ${textByLanguage("Completed your first lesson", "మీ మొదటి పాఠం పూర్తయింది", "अपना पहला पाठ पूरा किया")}
          </p>

        </div>

      </div>

    `;

  }


  if (
    completed >= 5
  ) {

    html += `

      <div class="achievement-card">

        <span>🔥</span>

        <div>

          <strong>
            ${textByLanguage("Learning Streak", "అభ్యాస పరంపర", "सीखने की निरंतरता")}
          </strong>

          <p>
            ${textByLanguage("Completed 5 lessons", "5 పాఠాలు పూర్తయ్యాయి", "5 पाठ पूरे किए")}
          </p>

        </div>

      </div>

    `;

  }


  if (
    completed >= 10
  ) {

    html += `

      <div class="achievement-card">

        <span>🏅</span>

        <div>

          <strong>
            ${textByLanguage("Learning Explorer", "అభ్యాస అన్వేషకుడు", "सीखने का खोजकर्ता")}
          </strong>

          <p>
            ${textByLanguage("Completed 10 lessons", "10 పాఠాలు పూర్తయ్యాయి", "10 पाठ पूरे किए")}
          </p>

        </div>

      </div>

    `;

  }


  if (
    completed >= 20
  ) {

    html += `

      <div class="achievement-card">

        <span>🏆</span>

        <div>

          <strong>
            ${textByLanguage("Gyaan Champion", "జ్ఞాన్ ఛాంపియన్", "ज्ञान चैंपियन")}
          </strong>

          <p>
            ${textByLanguage("Completed 20 lessons", "20 పాఠాలు పూర్తయ్యాయి", "20 पाठ पूरे किए")}
          </p>

        </div>

      </div>

    `;

  }


  if (!html) {

    html = `

      <div class="achievement-card">

        <span>🎯</span>

        <div>

          <strong>
            ${uiText("startLearning")}
          </strong>

          <p>
            ${textByLanguage(
              "Complete your first lesson to unlock an achievement.",
              "విజయాన్ని అన్‌లాక్ చేయడానికి మీ మొదటి పాఠాన్ని పూర్తి చేయండి.",
              "उपलब्धि पाने के लिए अपना पहला पाठ पूरा करें।"
            )}
          </p>

        </div>

      </div>

    `;

  }


  return html;
}


// ======================================================
// CHAT
// ======================================================

const chatOverlay =
  document.getElementById(
    "chatOverlay"
  );

const chatMessages =
  document.getElementById(
    "chatMessages"
  );

const chatInput =
  document.getElementById(
    "chatInput"
  );


function openChat() {

  chatOverlay.classList.remove(
    "hidden"
  );


  updateChatSuggestions();


  if (
    chatMessages.children.length === 0
  ) {

    addChatMessage(
      getWelcomeMessage(),
      "bot"
    );

  }


  setTimeout(
    () =>
      chatInput.focus(),
    150
  );
}


function closeChat() {

  chatOverlay.classList.add(
    "hidden"
  );
}


// ======================================================
// CHAT SUGGESTIONS
// ======================================================

function updateChatSuggestions() {

  const container =
    document.querySelector(
      ".suggestions"
    );


  if (!container) {
    return;
  }


  if (
    selectedLanguage === "Telugu"
  ) {

    container.innerHTML = `

      <button
        onclick="askSuggestion('మొక్కలు పెరగడానికి ఏమి అవసరం?')"
      >
        🌱 మొక్కలు
      </button>

      <button
        onclick="askSuggestion('నీరు ఎందుకు ముఖ్యమైనది?')"
      >
        💧 నీరు
      </button>

      <button
        onclick="askSuggestion('జంతువులు ఎక్కడ జీవిస్తాయి?')"
      >
        🐘 జంతువులు
      </button>

    `;

  }

  else if (
    selectedLanguage === "Hindi"
  ) {

    container.innerHTML = `

      <button
        onclick="askSuggestion('पौधों को बढ़ने के लिए क्या चाहिए?')"
      >
        🌱 पौधे
      </button>

      <button
        onclick="askSuggestion('पानी क्यों महत्वपूर्ण है?')"
      >
        💧 पानी
      </button>

      <button
        onclick="askSuggestion('जानवर कहाँ रहते हैं?')"
      >
        🐘 जानवर
      </button>

    `;

  }

  else {

    container.innerHTML = `

      <button
        onclick="askSuggestion('What do plants need to grow?')"
      >
        🌱 Plants
      </button>

      <button
        onclick="askSuggestion('Why is water important?')"
      >
        💧 Water
      </button>

      <button
        onclick="askSuggestion('Where do animals live?')"
      >
        🐘 Animals
      </button>

    `;

  }
}


// ======================================================
// CHAT WELCOME
// ======================================================

function getWelcomeMessage() {

  return textByLanguage(

    "👋 Hello! I am Gyaan Assistant. Ask me something about your lessons.",

    "👋 నమస్కారం! నేను గ్యాన్ అసిస్టెంట్. మీ పాఠాల గురించి ప్రశ్న అడగండి.",

    "👋 नमस्ते! मैं ज्ञान असिस्टेंट हूँ। अपने पाठों के बारे में प्रश्न पूछें।"

  );
}


// ======================================================
// SEND CHAT MESSAGE
// ======================================================

function sendMessage() {

  const question =
    chatInput.value.trim();


  if (!question) {
    return;
  }


  addChatMessage(
    question,
    "user"
  );


  chatInput.value = "";


  setTimeout(
    () => {

      const answer =
        getOfflineAnswer(
          question
        );


      addChatMessage(
        answer,
        "bot"
      );

    },
    250
  );
}


function askSuggestion(
  question
) {

  chatInput.value =
    question;

  sendMessage();
}


function addChatMessage(
  text,
  sender
) {

  const message =
    document.createElement(
      "div"
    );


  message.classList.add(
    "message"
  );


  if (
    sender === "user"
  ) {

    message.classList.add(
      "user-message"
    );

  }

  else {

    message.classList.add(
      "bot-message"
    );

  }


  message.textContent =
    text;


  chatMessages.appendChild(
    message
  );


  chatMessages.scrollTop =
    chatMessages.scrollHeight;
}


// ======================================================
// SMART OFFLINE SEARCH
// ======================================================

function cleanText(text) {

  return String(text)
    .toLowerCase()
    .replace(
      /[.,!?;:'"()[\]{}]/g,
      " "
    )
    .replace(
      /\s+/g,
      " "
    )
    .trim();
}


function getQuestionTokens(
  question
) {

  let words =
    cleanText(question)
      .split(" ")
      .filter(
        word =>
          word.length > 1
      );


  if (
    selectedLanguage === "English"
  ) {

    const stopWords =
      new Set([

        "what",
        "why",
        "when",
        "where",
        "which",
        "who",
        "how",
        "does",
        "do",
        "are",
        "is",
        "the",
        "a",
        "an",
        "to",
        "of",
        "for",
        "in",
        "on",
        "and"

      ]);


    words =
      words.filter(
        word =>
          !stopWords.has(word)
      );

  }


  return words;
}


function textMatchScore(
  text,
  tokens
) {

  const content =
    cleanText(text);


  let score = 0;


  tokens.forEach(
    token => {

      if (
        content.includes(token)
      ) {

        score++;

      }

    }
  );


  return score;
}


// ======================================================
// SEARCH LESSON DATABASE
// ======================================================

function searchLessonKnowledge(
  question
) {

  const tokens =
    getQuestionTokens(
      question
    );


  if (
    tokens.length === 0
  ) {

    return null;

  }


  let bestResult =
    null;

  let bestScore =
    0;


  const classesToSearch =
    selectedClass
      ? [`class${selectedClass}`]
      : Object.keys(
          learningData
        );


  classesToSearch.forEach(
    classKey => {

      const classData =
        learningData[classKey];


      if (!classData) {
        return;
      }


      classData.chapters.forEach(
        chapter => {

          chapter.lessons.forEach(
            lesson => {

              const explanation =
                lesson.explanation[
                  selectedLanguage
                ];


              const explanationScore =
                textMatchScore(
                  explanation,
                  tokens
                );


              if (
                explanationScore >
                bestScore
              ) {

                bestScore =
                  explanationScore;


                bestResult = {

                  lessonTitle:
                    lesson.title[
                      selectedLanguage
                    ],

                  answer:
                    explanation

                };

              }


              lesson.keyPoints[
                selectedLanguage
              ].forEach(
                point => {

                  const pointScore =
                    textMatchScore(
                      point,
                      tokens
                    );


                  if (
                    pointScore >
                    bestScore
                  ) {

                    bestScore =
                      pointScore;


                    bestResult = {

                      lessonTitle:
                        lesson.title[
                          selectedLanguage
                        ],

                      answer:
                        point

                    };

                  }

                }
              );

            }
          );

        }
      );

    }
  );


  if (
    bestScore === 0
  ) {

    return null;

  }


  return bestResult;
}


// ======================================================
// OFFLINE CHAT ANSWER
// ======================================================

function getOfflineAnswer(
  question
) {

  const q =
    cleanText(
      question
    );


  const greetings = [

    "hi",
    "hello",
    "hey",

    "హాయ్",
    "నమస్తే",

    "नमस्ते",
    "हेलो"

  ];


  if (
    greetings.includes(q)
  ) {

    return getWelcomeMessage();

  }


  const lessonResult =
    searchLessonKnowledge(
      question
    );


  if (lessonResult) {

    return (
      "📘 " +
      lessonResult.lessonTitle +
      ": " +
      lessonResult.answer
    );

  }


  for (
    const item of
    offlineQuestions
  ) {

    const found =
      item.keywords.some(
        keyword =>

          q.includes(
            cleanText(keyword)
          )

      );


    if (found) {

      return item[
        selectedLanguage
      ];

    }

  }


  return textByLanguage(

    "🤔 I couldn't find that answer in my offline lessons yet. Try asking about plants, water, animals, food or the environment.",

    "🤔 ఆ ప్రశ్నకు సమాధానం నా ఆఫ్‌లైన్ పాఠాల్లో ఇంకా కనిపించలేదు. మొక్కలు, నీరు, జంతువులు, ఆహారం లేదా పర్యావరణం గురించి అడగండి.",

    "🤔 मुझे अभी अपने ऑफलाइन पाठों में इसका उत्तर नहीं मिला। पौधों, पानी, जानवरों, भोजन या पर्यावरण के बारे में पूछें।"

  );
}


// ======================================================
// CHAT EVENTS
// ======================================================

document
  .getElementById(
    "chatFab"
  )
  .addEventListener(
    "click",
    openChat
  );


document
  .getElementById(
    "closeChat"
  )
  .addEventListener(
    "click",
    closeChat
  );


document
  .getElementById(
    "sendChat"
  )
  .addEventListener(
    "click",
    sendMessage
  );


chatInput.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Enter"
    ) {

      sendMessage();

    }

  }
);


// ======================================================
// NAVIGATION
// ======================================================

function showLearn() {

  if (!currentAccountId) {
    showLanguageScreen();
    return;
  }

  setActiveNav(1);

  showLanguageScreen();
}


function setActiveNav(
  index
) {

  const items =
    document.querySelectorAll(
      ".nav-item"
    );


  items.forEach(
    item =>

      item.classList.remove(
        "active"
      )

  );


  if (
    items[index]
  ) {

    items[index]
      .classList.add(
        "active"
      );

  }
}


// ======================================================
// ERROR
// ======================================================

function showError(
  message
) {

  app.innerHTML = `

    <div class="empty-state">

      <div class="large-emoji">
        ⚠️
      </div>

      <h2>
        Something went wrong
      </h2>

      <p>
        ${message}
      </p>

      <button
        class="action-btn"
        style="margin-top:18px;"
        onclick="showHome()"
      >
        Go Home
      </button>

    </div>

  `;
}


// ======================================================
// NETWORK STATUS
// ======================================================

function updateNetworkStatus() {

  const dot =
    document.getElementById(
      "networkDot"
    );

  const text =
    document.getElementById(
      "networkText"
    );


  if (
    navigator.onLine
  ) {

    dot.style.background =
      "#2db66d";

    text.textContent =
      uiText("online");

  }

  else {

    dot.style.background =
      "#f0a23c";

    text.textContent =
      uiText("offlineReady");

  }
}


window.addEventListener(
  "online",
  updateNetworkStatus
);


window.addEventListener(
  "offline",
  updateNetworkStatus
);


// ======================================================
// SERVICE WORKER
// ======================================================

if (
  "serviceWorker" in navigator
) {

  window.addEventListener(
    "load",
    () => {

      navigator.serviceWorker
        .register(
          "./service-worker.js"
        )
        .then(
          () => {

            console.log(
              "Gyaan Setu offline system ready."
            );

          }
        )
        .catch(
          error => {

            console.error(
              "Service Worker Error:",
              error
            );

          }
        );

    }
  );

}


// ======================================================
// START APPLICATION
// ======================================================

updateNetworkStatus();
renderAccountArea();

if (currentAccountId) {
  showHome();
}

else {
  showLanguageScreen();
}


function renderPictureActivity(
  lesson,
  chapterIndex,
  lessonIndex
) {

  const classData = learningData[`class${selectedClass}`];
  const allLessons = classData.chapters
    .flatMap(chapter => chapter.lessons);
  const distractors = allLessons
    .filter(item => item.id !== lesson.id)
    .slice(0, 2)
    .map(item => item.title[selectedLanguage]);
  const options = [lesson.title[selectedLanguage], ...distractors];


  while (options.length < 3) {
    options.push(
      textByLanguage("Something else", "మరొక విషయం", "कुछ और")
    );
  }


  return `
    <div class="picture-activity">
      <div class="picture-activity-heading">
        <span class="picture-activity-icon">🖼️</span>
        <div>
          <h3>${textByLanguage("Picture Check", "చిత్రాన్ని గుర్తించండి", "चित्र पहचानें")}</h3>
          <p>${textByLanguage("Look at the picture and choose what this lesson is about.", "చిత్రాన్ని చూసి ఈ పాఠం దేని గురించి చెప్పుతుందో ఎంచుకోండి.", "चित्र देखकर चुनें कि यह पाठ किस बारे में है।")}</p>
        </div>
      </div>
      ${lesson.image
        ? `<img class="picture-activity-image" src="${lesson.image}" alt="${lesson.title[selectedLanguage]}">`
        : `<div class="picture-activity-visual">${lesson.visual || "📘"}</div>`}
      <div class="picture-options">
        ${options.map(
          (option, optionIndex) => `
            <button class="picture-option" onclick="checkPictureAnswer(this, ${optionIndex}, 0)">
              ${option}
            </button>
          `
        ).join("")}
      </div>
      <p class="picture-feedback" aria-live="polite"></p>
    </div>
  `;
}


function checkPictureAnswer(button, selectedOption, correctOption) {

  const container = button.closest(".picture-activity");
  const buttons = container.querySelectorAll(".picture-option");
  const feedback = container.querySelector(".picture-feedback");

  buttons.forEach(item => item.disabled = true);

  if (selectedOption === correctOption) {
    button.classList.add("practice-correct");
    feedback.textContent = textByLanguage("Correct! +2 XP", "సరైనది! +2 XP", "सही! +2 XP");
    experiencePoints += 2;
    saveAccountState();
  }

  else {
    button.classList.add("practice-wrong");
    buttons[correctOption].classList.add("practice-correct");
    feedback.textContent = textByLanguage("Good try!", "మంచి ప్రయత్నం!", "अच्छी कोशिश!");
  }
}