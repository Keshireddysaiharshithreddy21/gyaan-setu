// ======================================================
// GYAAN SETU
// COMPLETE MAIN APPLICATION
// ======================================================


// ======================================================
// APP STATE
// ======================================================

const app = document.getElementById("app");

let selectedLanguage =
  localStorage.getItem("gyaanLanguage") || "English";

let selectedClass =
  Number(localStorage.getItem("gyaanClass")) || null;

let completedLessons =
  JSON.parse(
    localStorage.getItem("gyaanProgress") || "{}"
  );

let lastLesson =
  JSON.parse(
    localStorage.getItem("gyaanLastLesson") || "null"
  );


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


function getClassName(number) {

  return textByLanguage(
    `Class ${number}`,
    `తరగతి ${number}`,
    `कक्षा ${number}`
  );
}


// ======================================================
// HOME PAGE + DASHBOARD
// ======================================================

function showHome() {

  setActiveNav(0);

  const overall =
    getOverallProgress();

  const lastDetails =
    getLastLessonDetails();


  app.innerHTML = `

    <section class="hero">

      <div class="hero-content">

        <span class="hero-badge">
          📴 Offline • 🌐 Multilingual • 🎯 Interactive
        </span>

        <h2>
          Learning that goes
          wherever you go.
        </h2>

        <p>
          Explore simple lessons, visual explanations,
          activities and quizzes in English, Telugu and Hindi.
          Gyaan Setu is designed to continue supporting learning
          even when internet connectivity is limited.
        </p>

        <div class="hero-actions">

          <button
            class="primary-btn"
            onclick="showLanguageScreen()"
          >
            Start Learning →
          </button>

          <button
            class="secondary-btn"
            onclick="openChat()"
          >
            💬 Ask Gyaan
          </button>

        </div>

      </div>

    </section>


    <section class="section">

      <div class="section-heading">

        <h2>Why Gyaan Setu?</h2>

        <p>
          Learning designed to remain simple,
          accessible and useful.
        </p>

      </div>


      <div class="feature-grid">

        ${featureCard(
          "📴",
          "Offline Learning",
          "Previously cached educational content remains available without continuous internet."
        )}

        ${featureCard(
          "🌐",
          "Three Languages",
          "Students can learn in English, Telugu or Hindi."
        )}

        ${featureCard(
          "🎯",
          "Activities & Quizzes",
          "Interactive learning helps students review important concepts."
        )}

        ${featureCard(
          "🤖",
          "Gyaan Assistant",
          "The learning assistant searches locally stored lesson knowledge without an online API."
        )}

      </div>

    </section>


    <!-- =====================================
         STUDENT DASHBOARD
    ====================================== -->

    <section class="section dashboard-section">

      <div class="section-heading">

        <h2>
          📊 My Learning Dashboard
        </h2>

        <p>
          Track your learning journey.
        </p>

      </div>


      <div class="dashboard-progress">

        <div class="progress-top">

          <div>

            <span class="progress-label">
              Overall Progress
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
            Total Lessons
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
            Completed
          </p>

        </div>


        <div class="stat-card">

          <div class="stat-icon">
            🌐
          </div>

          <h2 class="small-stat">
            ${selectedLanguage}
          </h2>

          <p>
            Language
          </p>

        </div>

      </div>


      <button
        class="continue-card"
        onclick="continueLearning()"
      >

        <div>

          <span class="continue-small">
            CONTINUE LEARNING
          </span>

          <h3>
            ${
              lastDetails
                ? lastDetails.title
                : "Start your first lesson"
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
                  Choose a language and class to begin.
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
          🏆 Achievements
        </h2>

        <p>
          Your learning milestones.
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
      ← Back
    </button>


    <section class="section-heading">

      <h2>
        🌐 Choose Your Language
      </h2>

      <p>
        Select the language you are most comfortable
        learning in.
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

  localStorage.setItem(
    "gyaanLanguage",
    language
  );

  showClassScreen();
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
      ← Back
    </button>


    <section class="section-heading">

      <h2>
        🎓 ${heading}
      </h2>

      <p>
        ${description}
      </p>

      <p>
        🌐 ${selectedLanguage}
      </p>

    </section>


    <div class="class-grid">

      ${classCard(
        1,
        "🌱",
        "Discover & Learn"
      )}

      ${classCard(
        2,
        "🌍",
        "Explore & Understand"
      )}

      ${classCard(
        3,
        "🌿",
        "Environmental Studies"
      )}

      ${classCard(
        4,
        "🔬",
        "Environmental Studies"
      )}

      ${classCard(
        5,
        "🌎",
        "Environmental Studies"
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

  localStorage.setItem(
    "gyaanClass",
    number
  );

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
      ← Back
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


  completedLessons[key] = {

    completed: true,
    score: score,
    total: total

  };


  localStorage.setItem(
    "gyaanProgress",
    JSON.stringify(
      completedLessons
    )
  );
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
      ← Back
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
        ← Back
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
      ← Back
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


  localStorage.setItem(
    "gyaanLastLesson",
    JSON.stringify(
      lastLesson
    )
  );
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


  localStorage.setItem(
    "gyaanClass",
    selectedClass
  );


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


  app.innerHTML = `

    <button
      class="back-btn"
      onclick="openChapter(${chapterIndex})"
    >
      ← Back
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
      ← Back
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
            First Step
          </strong>

          <p>
            Completed your first lesson
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
            Learning Streak
          </strong>

          <p>
            Completed 5 lessons
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
            Learning Explorer
          </strong>

          <p>
            Completed 10 lessons
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
            Gyaan Champion
          </strong>

          <p>
            Completed 20 lessons
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
            Start Learning
          </strong>

          <p>
            Complete your first lesson
            to unlock an achievement.
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
      "Online";

  }

  else {

    dot.style.background =
      "#f0a23c";

    text.textContent =
      "Offline Ready";

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

showHome();