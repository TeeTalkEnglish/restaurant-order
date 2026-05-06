// ═══════════════════════════════════════════════
//  CONVERSATION DATA
// ═══════════════════════════════════════════════
const steps = [
  {
    scene: "☕ Scene 1 of 6 – Welcome",
    npc: "Good morning! Welcome to The Corner Café. Table for one, yeah?",
    vocab: {
      word: "'Yeah' = Yes",
      meaning: "Australians say 'yeah' all the time instead of 'yes'. It's very casual and totally normal!"
    },
    options: [
      { text: "Yes please, just me.",              correct: true  },
      { text: "I want table.",                      correct: false },
      { text: "One person, give me table.",         correct: false },
      { text: "Me. Sit. One.",                      correct: false }
    ],
    correctFeedback:   "✅ Perfect! 'Yes please, just me' is polite and natural. Aussies love when people say please!",
    incorrectFeedback: "❌ Try to be more polite! Always use 'please'. The best answer is: 'Yes please, just me.'"
  },
  {
    scene: "☕ Scene 2 of 6 – Coffee Order",
    npc: "Great! Can I get you started with a coffee or something to drink?",
    vocab: {
      word: "Popular Aussie Coffees",
      meaning: "Flat white = espresso + steamed milk (most popular!) | Long black = strong black coffee | Oat latte = very trendy in 2024!"
    },
    options: [
      { text: "I'll have a flat white, please.",   correct: true  },
      { text: "Give me coffee.",                   correct: false },
      { text: "I want one coffee, hot.",           correct: false },
      { text: "Coffee. Black. Big.",               correct: false }
    ],
    correctFeedback:   "✅ Great order! 'I'll have a...' is the most natural way to order in Australia. Well done!",
    incorrectFeedback: "❌ Try to be more polite! Say 'I'll have a flat white, please.' — always add 'please' at the end!"
  },
  {
    scene: "☕ Scene 3 of 6 – Food Order",
    npc: "Coming right up! And are you ready to order some brekkie, or do you need a few minutes?",
    vocab: {
      word: "'Brekkie' = Breakfast",
      meaning: "Aussies shorten many words: breakfast→brekkie, afternoon→arvo, sunglasses→sunnies, service station→servo!"
    },
    options: [
      { text: "I'll have the avocado toast please. How does that come?",  correct: true  },
      { text: "I want food. Egg food.",                                    correct: false },
      { text: "Give me the brekkie.",                                      correct: false },
      { text: "What is cheapest thing?",                                   correct: false }
    ],
    correctFeedback:   "✅ Excellent! Asking 'How does that come?' shows you want to know what is included. Very natural Aussie English!",
    incorrectFeedback: "❌ Be specific and polite! Say what you want and always use 'please'. Correct: 'I'll have the avocado toast, please.'"
  },
  {
    scene: "☕ Scene 4 of 6 – Dietary Check",
    npc: "The avo toast comes with two poached eggs on sourdough. Are you right with that, or any allergies I should know about?",
    vocab: {
      word: "'Are you right with that?' = Is that okay for you?",
      meaning: "Aussies say 'Are you right?' or 'You right?' to check if someone is okay or needs help. Don't be confused — it does NOT mean 'Are you correct?'"
    },
    options: [
      { text: "That sounds great, thank you! No allergies.",  correct: true  },
      { text: "Yes I am right.",                              correct: false },
      { text: "Okay food is fine give me.",                   correct: false },
      { text: "No problem, allergy no.",                      correct: false }
    ],
    correctFeedback:   "✅ Perfect response! 'That sounds great' is a warm and natural reply. You're doing brilliantly!",
    incorrectFeedback: "❌ 'Are you right with that?' means 'Is that okay?'. Correct reply: 'That sounds great, thank you! No allergies.'"
  },
  {
    scene: "☕ Scene 5 of 6 – Asking for the Bill",
    npc: "Here's your brekkie! Enjoy. Can I get you anything else?",
    vocab: {
      word: "Asking for the Bill",
      meaning: "Say: 'Could I get the bill, please?' or 'Can I pay when you're ready?' — Never just shout 'Bill!' or snap your fingers. That is considered very rude in Australia!"
    },
    options: [
      { text: "It looks delicious, thank you! Could I get the bill when you're ready, please?",  correct: true  },
      { text: "Bill now.",                                                                        correct: false },
      { text: "I want to pay. Bring bill.",                                                       correct: false },
      { text: "No more food. Bill.",                                                              correct: false }
    ],
    correctFeedback:   "✅ Wonderful! 'Could I get the bill when you're ready, please?' is super polite and perfectly natural in Australia!",
    incorrectFeedback: "❌ Never just say 'Bill!' — it sounds very rude. Correct: 'Could I get the bill when you're ready, please?'"
  },
  {
    scene: "☕ Scene 6 of 6 – Paying",
    npc: "Of course! That'll be \$18.50 all up. Are you paying by card or cash today?",
    vocab: {
      word: "Paying in Australia",
      meaning: "Most Aussies pay by card (tap & go). Say 'Card, please' or 'I'll tap.' Tipping is NOT required in Australia — it is completely optional!"
    },
    options: [
      { text: "Card please. Thank you so much — the food was lovely!",  correct: true  },
      { text: "Card. Yes.",                                             correct: false },
      { text: "I use card for pay.",                                    correct: false },
      { text: "Money card. Here.",                                      correct: false }
    ],
    correctFeedback:   "✅ Amazing! You finished the café conversation perfectly! Adding 'the food was lovely' is a great thing to say — Aussies will love it! ☕🇦🇺",
    incorrectFeedback: "❌ So close! Be polite and complete. Correct: 'Card please. Thank you so much — the food was lovely!'"
  }
];

// ═══════════════════════════════════════════════
//  GAME STATE
// ═══════════════════════════════════════════════
let currentStep = 0;
let score       = 0;
let answered    = false;

// ═══════════════════════════════════════════════
//  START GAME
// ═══════════════════════════════════════════════
function startGame() {
  document.getElementById('introScreen').style.display = 'none';
  document.getElementById('gameScreen').style.display  = 'block';
  currentStep = 0;
  score       = 0;
  answered    = false;
  updateScore();
  loadStep(currentStep);
}

// ═══════════════════════════════════════════════
//  LOAD A STEP
// ═══════════════════════════════════════════════
function loadStep(index) {
  const step = steps[index];
  answered   = false;

  // Scene label
  document.getElementById('sceneLabel').textContent = step.scene;

  // Progress bar
  const pct = ((index) / steps.length) * 100;
  document.getElementById('progressBar').style.width = pct + '%';

  // Clear chat
  const chat = document.getElementById('chatContainer');
  chat.innerHTML = '';

  // NPC message (with slight delay for natural feel)
  setTimeout(() => {
    addNPCMessage(step.npc);

    // Vocab tip
    setTimeout(() => {
      if (step.vocab) {
        const tip = document.getElementById('vocabTip');
        document.getElementById('tipWord').textContent    = step.vocab.word;
        document.getElementById('tipMeaning').textContent = step.vocab.meaning;
        tip.style.display = 'flex';
      } else {
        document.getElementById('vocabTip').style.display = 'none';
      }

      // Load options
      loadOptions(step.options);

    }, 400);
  }, 300);

  // Hide feedback & next button
  document.getElementById('feedbackBox').style.display = 'none';
  document.getElementById('btnNext').style.display     = 'none';
}

// ═══════════════════════════════════════════════
//  ADD NPC MESSAGE TO CHAT
// ═══════════════════════════════════════════════
function addNPCMessage(text) {
  const chat = document.getElementById('chatContainer');
  const msg  = document.createElement('div');
  msg.className = 'msg-npc';
  msg.innerHTML = `
    <div class="npc-avatar">👩</div>
    <div class="npc-bubble">
      <div class="npc-name">Sarah – Café Staff</div>
      <div class="npc-text">${text}</div>
    </div>
  `;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

// ═══════════════════════════════════════════════
//  ADD PLAYER MESSAGE TO CHAT
// ═══════════════════════════════════════════════
function addPlayerMessage(text) {
  const chat = document.getElementById('chatContainer');
  const msg  = document.createElement('div');
  msg.className = 'msg-player';
  msg.innerHTML = `<div class="player-bubble">${text}</div>`;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

// ═══════════════════════════════════════════════
//  LOAD ANSWER OPTIONS
// ═══════════════════════════════════════════════
function loadOptions(options) {
  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';

  // Shuffle options so correct answer isn't always first
  const shuffled = [...options].sort(() => Math.random() - 0.5);

  shuffled.forEach(opt => {
    const btn = document.createElement('button');
    btn.className   = 'option-btn';
    btn.textContent = opt.text;
    btn.dataset.correct = opt.correct;
    btn.addEventListener('click', () => handleAnswer(btn, opt.correct, opt.text));
    container.appendChild(btn);
  });
}

// ═══════════════════════════════════════════════
//  HANDLE ANSWER SELECTION
// ═══════════════════════════════════════════════
function handleAnswer(btn, isCorrect, text) {
  if (answered) return;
  answered = true;

  const step    = steps[currentStep];
  const allBtns = document.querySelectorAll('.option-btn');
  const feedback = document.getElementById('feedbackBox');

  // Add player message to chat
  addPlayerMessage(text);

  // Disable all buttons and highlight
  allBtns.forEach(b => {
    b.disabled = true;
    if (b.dataset.correct === 'true') {
      b.classList.add('correct');
    } else if (b === btn && !isCorrect) {
      b.classList.add('incorrect');
    } else {
      b.classList.add('dimmed');
    }
  });

  // Show feedback
  feedback.style.display = 'block';
  if (isCorrect) {
    feedback.className     = 'feedback-box correct-fb';
    feedback.innerHTML     = step.correctFeedback;
    score++;
    updateScore();
  } else {
    feedback.className = 'feedback-box incorrect-fb';
    feedback.innerHTML = step.incorrectFeedback;
  }

  // Show next button
  const btnNext = document.getElementById('btnNext');
  btnNext.style.display = 'block';

  // Last step label
  if (currentStep === steps.length - 1) {
    btnNext.textContent = 'See Results 🎉';
  } else {
    btnNext.textContent = 'Continue →';
  }

  // Scroll to feedback
  setTimeout(() => {
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 200);
}

// ═══════════════════════════════════════════════
//  NEXT STEP
// ═══════════════════════════════════════════════
function nextStep() {
  currentStep++;

  if (currentStep >= steps.length) {
    showCompletion();
  } else {
    // Scroll back to top of game screen
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => loadStep(currentStep), 300);
  }
}

// ═══════════════════════════════════════════════
//  UPDATE SCORE DISPLAY
// ═══════════════════════════════════════════════
function updateScore() {
  document.getElementById('score').textContent = score;
}

// ═══════════════════════════════════════════════
//  SHOW COMPLETION SCREEN
// ═══════════════════════════════════════════════
function showCompletion() {
  document.getElementById('gameScreen').style.display       = 'none';
  document.getElementById('completionScreen').style.display = 'block';

  // Progress bar to 100%
  document.getElementById('progressBar').style.width = '100%';

  const total      = steps.length;
  const percentage = Math.round((score / total) * 100);

  document.getElementById('finalScore').textContent = score;
  document.getElementById('totalSteps').textContent = total;

  // Stars
  let stars = '';
  if (percentage === 100)     stars = '⭐⭐⭐';
  else if (percentage >= 60)  stars = '⭐⭐';
  else                        stars = '⭐';
  document.getElementById('starsDisplay').textContent = stars;

  // Title, icon & message based on score
  let icon, title, message;

  if (percentage === 100) {
    icon    = '🏆';
    title   = 'Perfect Score!';
    message = `You got every answer right! You're ready to walk into any Aussie café and order like a local. 
               Your politeness and natural English will impress everyone. 
               Next up: try the Pub Meal after work! 🥩🍺`;
  } else if (percentage >= 60) {
    icon    = '😊';
    title   = 'Good Job!';
    message = `You scored ${score} out of ${total}. You have a good understanding of café English! 
               Review the questions you missed and try again to get a perfect score. 
               Keep practising — you're almost there! ☕`;
  } else {
    icon    = '💪';
    title   = 'Keep Practising!';
    message = `You scored ${score} out of ${total}. Don't worry — ordering food in a new language is hard! 
               Read the vocab tips carefully and try again. 
               You'll improve each time you play! 🇦🇺`;
  }

  document.getElementById('completionIcon').textContent      = icon;
  document.getElementById('completionTitle').textContent     = title;
  document.getElementById('completionMessage').textContent   = message;

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ═══════════════════════════════════════════════
//  REPLAY GAME
// ═══════════════════════════════════════════════
function replayGame() {
  document.getElementById('completionScreen').style.display = 'none';
  document.getElementById('gameScreen').style.display       = 'block';
  currentStep = 0;
  score       = 0;
  answered    = false;
  updateScore();
  loadStep(currentStep);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}