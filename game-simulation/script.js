let currentCustomer;
let currentStage = 0;
let customerPreference = null;
let menuViewed = false;



const customers = [

  {

    name: "Jack Thompson",

    difficulty: "Intermediate",

    stages: [

      {
        title: "Arrival",

        objective: "Ask for a table for 2.",

        slang: "G’day mate, got a table free?"
      },

      {
        title: "Ordering",

        objective: "Order a medium rare ribeye steak and a beer.",

        slang: "I'll grab the ribeye and a pint thanks, mate.",
        
        preferences: {
          chicken: "Actually, change that - I'll have the chicken instead",
          full: "Yeah, I'm pretty hungry today, give me something hearty"
        },
        
        suggestion: {
          chicken: "Grilled Chicken with salad - light and tasty!",
          full: "Ribeye steak with loaded sides - perfect when you're starving!"
        }
      },

      {
        title: "Problem",

        objective: "Complain that the steak is overcooked.",

        slang: "Oi mate, this steak’s well done."
      },

      {
        title: "Resolution",

        objective: "Ask politely for a replacement.",

        slang: "Think the kitchen could fix it for us?"
      }

    ]

  },



  {

    name: "Sarah Collins",

    difficulty: "Beginner",

    stages: [

      {
        title: "Arrival",

        objective: "Ask for the menu.",

        slang: "Can I grab a menu please?"
      },

      {
        title: "Ordering",

        objective: "Order fish and chips and lemonade.",

        slang: "I'll get the fish and chips thanks.",
        
        preferences: {
          chicken: "Actually, do you have chicken? That sounds nice",
          full: "I'm really hungry today, give me lots of chips please"
        },
        
        suggestion: {
          chicken: "Crispy Chicken Tenders with fries - delicious and fresh!",
          full: "Fish and Chips with extra sides - very filling!"
        }
      },

      {
        title: "Problem",

        objective: "Ask where the food is because it is late.",

        slang: "Sorry mate, just wondering how long it’ll be?"
      },

      {
        title: "Resolution",

        objective: "Thank the waiter politely.",

        slang: "Cheers mate, appreciate it."
      }

    ]

  },



  {

    name: "Tyler Brooks",

    difficulty: "Advanced",

    stages: [

      {
        title: "Arrival",

        objective: "Ask loudly for a table.",

        slang: "Mateeee, got room for one more?"
      },

      {
        title: "Ordering",

        objective: "Order loaded fries and two beers.",

        slang: "Chuck us some loaded fries too.",
        
        preferences: {
          chicken: "Hmm, what if I go for chicken wings instead?",
          full: "Yeah mate, I'm absolutely starving, load it up!"
        },
        
        suggestion: {
          chicken: "Spicy Chicken Wings with dipping sauce - amazing!",
          full: "Loaded fries with all the toppings and extra portions - that'll fill you!"
        }
      },

      {
        title: "Problem",

        objective: "Complain the beer is warm.",

        slang: "This beer’s not cold at all, mate."
      },

      {
        title: "Resolution",

        objective: "Ask for a fresh drink without becoming aggressive.",

        slang: "Reckon I could grab another one?"
      }

    ]

  }

];



function generateCustomer(){

  const difficulty =
    document.getElementById("difficulty").value;

  let filteredCustomers =
    customers.filter(customer =>
      customer.difficulty.toLowerCase() === difficulty
    );



  currentCustomer =

    filteredCustomers[
      Math.floor(Math.random() * filteredCustomers.length)
    ];



  currentStage = 0;
  customerPreference = null;
  menuViewed = false;

  showStage();

}

function applyDifficultyClass() {
  const customerCard = document.getElementById("customerCard");
  if (customerCard && currentCustomer) {
    customerCard.className = 'scenario-box difficulty-' + currentCustomer.difficulty.toLowerCase();
  }
}



function showStage(){

  const stage =
    currentCustomer.stages[currentStage];

  // Special handling for Ordering stage
  if(stage.title === "Ordering" && !customerPreference) {
    showOrderingInterface();
    return;
  }

  document.getElementById("customerCard").innerHTML = `

    <h2>${currentCustomer.name}</h2>

    <p style="margin: 10px 0; color: #666;">
      <strong>Difficulty:</strong> ${currentCustomer.difficulty}
    </p>

    <hr style="margin: 15px 0; border: none; border-top: 1px solid #ddd;">

    <h3 style="margin: 20px 0 15px 0;">${stage.title}</h3>

    <div style="background: #fff3e0; padding: 15px; border-radius: 8px; border-left: 4px solid #ff9800; margin: 15px 0;">
      <p style="margin: 0 0 8px 0; font-weight: bold; color: #ff6f00;">Objective:</p>
      <p style="margin: 0; color: #333;">
        ${stage.objective}
      </p>
    </div>

    <div style="background: #fff8e1; padding: 12px; border-radius: 6px; border-left: 4px solid #fbc02d; margin: 15px 0; cursor: pointer;" onclick="toggleHint()">
      <p style="margin: 0; font-weight: 600; color: #f57f17;">💡 Show Aussie Hint</p>
    </div>

    <p
      id="hintText"
      style="
        display: none;
        margin: 12px 0;
        padding: 12px;
        background: #f5f5f5;
        border-radius: 6px;
        border-left: 4px solid #9e9e9e;
        font-style: italic;
        color: #555;
      "
    >
      "${stage.slang}"
    </p>

    <br>

    <button onclick="nextStage()">
      Next Stage
    </button>

  `;

  applyDifficultyClass();

}



function showOrderingInterface(){

  const stage = currentCustomer.stages[currentStage];

  document.getElementById("customerCard").innerHTML = `

    <h2>${currentCustomer.name}</h2>

    <p style="margin: 10px 0; color: #666;">
      <strong>Difficulty:</strong> ${currentCustomer.difficulty}
    </p>

    <hr style="margin: 15px 0; border: none; border-top: 1px solid #ddd;">

    <h3 style="margin: 20px 0 15px 0;">${stage.title}</h3>

    <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; border-left: 4px solid #2196F3; margin: 15px 0;">
      <button onclick="askForSuggestion()" style="background: #2196F3; margin: 0; width: 100%; padding: 14px; border-radius: 6px; color: white; font-weight: 600; border: none; cursor: pointer; font-size: 1em;">
        🤝 Ask the Waiter/Waitress for Suggestion
      </button>
    </div>

  `;

  applyDifficultyClass();

}



function lookAtMenu(){

  menuViewed = true;

  const stage = currentCustomer.stages[currentStage];

  document.getElementById("customerCard").innerHTML = `

    <h2>${currentCustomer.name}</h2>

    <p>
      <strong>Difficulty:</strong>
      ${currentCustomer.difficulty}
    </p>

    <hr>

    <h3>${stage.title}</h3>

    <p style="font-size:16px; margin-bottom:15px;">
      <strong>The customer is looking at the menu...</strong>
    </p>

    <div style="background:#fff8dc; padding:15px; border-radius:8px; border-left:4px solid #ff9800;">
      <p style="margin:0 0 10px 0;"><strong>After looking at the menu, what does the customer prefer?</strong></p>
      
      <button onclick="setPreference('chicken')" style="background:#ff9800; margin-bottom:10px; width:100%;">
        🍗 Wants Chicken
      </button>

      <button onclick="setPreference('full')" style="background:#ff9800; margin-bottom:10px; width:100%;">
        🍔 Wants to Feel Full Today
      </button>
    </div>

    <p style="color:#666; margin-top:15px; font-style:italic;">
      Tip: The customer should look at the menu and then tell you their preference!
    </p>

  `;

}



function setPreference(preference){

  customerPreference = preference;

  const stage = currentCustomer.stages[currentStage];

  document.getElementById("customerCard").innerHTML = `

    <h2>${currentCustomer.name}</h2>

    <p>
      <strong>Difficulty:</strong>
      ${currentCustomer.difficulty}
    </p>

    <hr>

    <h3>${stage.title}</h3>

    <div style="background:#e8f5e9; padding:15px; border-radius:8px; border-left:4px solid #4CAF50; margin:15px 0;">
      <p style="margin:0; font-size:16px;">
        <strong>"${stage.preferences[preference]}"</strong>
      </p>
    </div>

    <p style="margin:20px 0; font-size:16px;">
      <strong>📢 Now ask the waiter/waitress for their suggestion based on this preference!</strong>
    </p>

    <button onclick="askForSuggestion()" style="background:#2196F3; width:100%;">
      🤝 Ask the Waiter/Waitress for Suggestion
    </button>

  `;

}



function askForSuggestion(){

  const stage = currentCustomer.stages[currentStage];

  // prepare suggestion payload
  const suggestionText = customerPreference ? stage.suggestion[customerPreference] : 'I recommend our special of the day!';
  const customerSays = customerPreference ? stage.preferences[customerPreference] : stage.slang;

  const payload = {
    customer: currentCustomer.name,
    difficulty: currentCustomer.difficulty,
    stage: stage.title,
    customerSays: customerSays,
    suggestion: suggestionText,
    timestamp: Date.now()
  };

  // publish suggestion for teacher dashboard via localStorage
  try {
    localStorage.setItem('lastSuggestion', JSON.stringify(payload));
  } catch (e) {
    console.warn('Could not write suggestion to localStorage', e);
  }

  // Student view: show only what the customer says and note the teacher will suggest
  let html = `

    <h2>${currentCustomer.name}</h2>

    <p style="margin: 10px 0; color: #666;">
      <strong>Difficulty:</strong> ${currentCustomer.difficulty}
    </p>

    <hr style="margin: 15px 0; border: none; border-top: 1px solid #ddd;">

    <h3 style="margin: 20px 0 15px 0;">${stage.title}</h3>

    <div style="background: #fff3e0; padding: 15px; border-radius: 8px; border-left: 4px solid #ff5722; margin: 15px 0;">
      <p style="margin: 0 0 8px 0; font-weight: bold; color: #e65100;">Customer says:</p>
      <p style="margin: 0; font-style: italic; color: #333;">
        "${customerSays}"
      </p>
    </div>

    <div style="background: #f5f5f5; padding: 12px; border-radius: 6px; margin: 15px 0; border-left: 4px solid #9e9e9e;">
      <p style="margin: 0; color: #666;"><strong>📌 Note:</strong> The waiter/waitress suggestion will be provided on the Teacher Dashboard.</p>
    </div>

    <br>

    <button onclick="completeOrdering()" style="width: 100%;">
      Next Stage
    </button>

  `;

  document.getElementById("customerCard").innerHTML = html;
  applyDifficultyClass();

}



function completeOrdering(){

  customerPreference = null;
  menuViewed = false;

  nextStage();

}



function toggleHint(){

  const hint =
    document.getElementById("hintText");



  if(hint.style.display === "none"){

    hint.style.display = "block";

  }

  else{

    hint.style.display = "none";

  }

}


function nextStage(){

  if(currentStage < currentCustomer.stages.length - 1){

    currentStage++;

    showStage();

  }

  else{

    document.getElementById("customerCard").innerHTML += `

      <hr>

      <h2>
        Scenario Complete!
      </h2>

    `;

  }

}