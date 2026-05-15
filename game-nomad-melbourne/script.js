let currentCustomer;
let currentStage = 0;

const customers = [
  {
    name: "Mr. & Mrs. Thornton",
    difficulty: "Advanced",
    customerType: "VIP Couple – Anniversary Celebration",
    description: "They're here for their 25th anniversary. Dressed impeccably, they appreciate attention to detail.",
    image: "👔👗",
    stages: [
      {
        title: "VIP Greeting & Dress Code",
        customerBehavior: "They arrive and look around, clearly expecting to be recognized. Mrs. Thornton is wearing a beautiful dress and pearls.",
        objective: "Welcome them warmly and acknowledge their special occasion. Make them feel truly valued.",
        yourResponse: "You should warmly welcome them, acknowledge the occasion, and compliment their appearance.",
        exampleResponse: "Welcome to NOMAD, Mr. and Mrs. Thornton. How absolutely lovely to see you both this evening for such a special milestone. You both look absolutely magnificent – that dress is stunning! We're honored to celebrate your anniversary with you.",
        teaching: "VIP guests expect personalized recognition. Always acknowledge special occasions and show genuine warmth."
      },
      {
        title: "Understanding Their Needs",
        customerBehavior: "Mrs. Thornton mentions they have a 7:30 dinner reservation and would like a relaxed pace. Mr. Thornton wants wine pairing recommendations.",
        objective: "Ensure they have plenty of time and are comfortable. Offer wine pairing expertise.",
        yourResponse: "You should confirm timing, offer the sommelier or wine pairing service, and ensure their preferences are noted.",
        exampleResponse: "Wonderful! We have the entire evening for you. May I suggest our 5-course tasting menu with wine pairings? Our sommelier would be delighted to guide you through selections that complement each course perfectly. Would that enhance your celebration?",
        teaching: "Ask about timing and preferences. Offer premium services proactively."
      },
      {
        title: "Handling a Special Request",
        customerBehavior: "Mrs. Thornton suddenly mentions she has a mild shellfish allergy that developed recently. She's worried about the scallop appetizer.",
        objective: "Take allergies seriously without making her feel uncomfortable. Offer immediate solutions.",
        yourResponse: "Acknowledge the allergy immediately, assure her safety, and offer excellent alternatives without hesitation.",
        exampleResponse: "Of course, Mrs. Thornton – allergies are taken very seriously here at NOMAD. I'll speak with our Chef immediately. We have exceptional alternatives that are equally exquisite. Would you prefer perhaps our seared foie gras or the wagyu carpaccio to start? I'll ensure the kitchen is fully informed about your allergy.",
        teaching: "Never downplay allergies. Move quickly to solutions. Show confidence in alternatives."
      },
      {
        title: "Wine Pairing Expertise",
        customerBehavior: "The sommelier asks if they prefer bold reds, elegant whites, or are open to the pairing menu. Mr. Thornton says, 'We trust your expertise – what do you recommend?'",
        objective: "Demonstrate confidence in wine selection and explain pairings thoughtfully.",
        yourResponse: "Suggest a sophisticated pairing journey that will complement each course while telling a story.",
        exampleResponse: "A wonderful approach! We'll begin with a crisp Champagne for your first course, transition to a Margaret River Cabernet for the beef, and perhaps a late-harvest Riesling for dessert. Each selection will enhance the flavors and create a beautiful progression through your meal. Shall we proceed with this journey?",
        teaching: "Confident recommendations create trust. Explain the logic behind pairings."
      },
      {
        title: "Course Service Excellence",
        customerBehavior: "As you present the first course, Mr. Thornton pulls out his phone to take a photo. The plate looks absolutely beautiful.",
        objective: "Present the dish with pride, then give them a moment for their photo.",
        yourResponse: "Present the course beautifully, describe it briefly, then step back gracefully to allow them a moment.",
        exampleResponse: "May I present your first course? This is hand-dived scallop from Tasmania, seared to perfection with edible flowers and a delicate saffron beurre blanc. Please, take your moment – it's a beautiful plate! I'll return shortly to ensure everything is perfect.",
        teaching: "Modern diners want to capture their experience. Accommodate this gracefully."
      },
      {
        title: "Finishing Memorably",
        customerBehavior: "At the end of the meal, Mrs. Thornton has tears of joy in her eyes. Mr. Thornton nods in approval and says, 'This was exactly what we needed.'",
        objective: "Conclude the experience with warmth, gratitude, and a final touch of elegance.",
        yourResponse: "Thank them sincerely, offer digestifs, and make them feel their evening was special.",
        exampleResponse: "Thank you both so much for choosing NOMAD to celebrate this beautiful milestone. Seeing your joy has made our entire team's evening. Might I offer our Chef's petit fours and perhaps a digestif? Champagne, cognac, or perhaps an Italian digestive liqueur?",
        teaching: "The final moments last longest in memory. End on a note of genuine appreciation."
      }
    ]
  },

  {
    name: "James Chen",
    difficulty: "Advanced",
    customerType: "Business Executive – Important Client Meeting",
    description: "Sharp, professional businessman hosting an important international client. He needs discreet, perfectly-timed service.",
    image: "💼👨‍💼",
    stages: [
      {
        title: "Professional Greeting",
        customerBehavior: "Mr. Chen arrives with a senior client from Singapore. He's checking his watch – they have limited time. He wants a discrete table.",
        objective: "Welcome them professionally and quickly seat them in a private area without fuss.",
        yourResponse: "Greet professionally, acknowledge the business nature, and seat them promptly in a quiet corner.",
        exampleResponse: "Good evening, Mr. Chen. Welcome back. I've reserved our quiet corner table for you – perfect for important conversations. This way, please.",
        teaching: "Business diners value efficiency and discretion. Minimize unnecessary pleasantries."
      },
      {
        title: "Understanding Their Time Constraints",
        customerBehavior: "Mr. Chen says, 'We have about 90 minutes total. Can we move quickly but not feel rushed?' His client looks tired from travel.",
        objective: "Acknowledge timing concerns and offer strategic course pacing.",
        yourResponse: "Confirm timing, suggest efficient ordering, and promise comfortable pacing.",
        exampleResponse: "Absolutely understood, Mr. Chen. I suggest we begin with aperitifs immediately, then move to a streamlined 3-course experience. Each course will arrive perfectly timed so you're never waiting. How does that suit you?",
        teaching: "Business diners need flexibility and control. Show you understand their constraints."
      },
      {
        title: "Wine Selection for Business",
        customerBehavior: "His client asks for a wine recommendation. Mr. Chen says, 'Nothing too heavy – we need to stay sharp for discussion.'",
        objective: "Suggest wines that enhance rather than overpower the conversation.",
        yourResponse: "Recommend refined wines that won't interfere with business discussion and mental clarity.",
        exampleResponse: "An excellent point. I'd suggest our Yarra Valley Pinot Noir – it's light, sophisticated, and won't interfere with your sharp thinking. Alternatively, a crisp Sauvignon Blanc if you prefer white? Both will complement your meal without being heavy.",
        teaching: "Business wine selection is about function, not flamboyance."
      },
      {
        title: "Silent, Impeccable Service",
        customerBehavior: "They're deep in conversation about a contract. Their wine glasses are at 75%. You need to monitor without hovering.",
        objective: "Demonstrate invisible service – attentive but never intrusive.",
        yourResponse: "Position yourself nearby but out of sight. Monitor glasses and water. Don't interrupt conversation.",
        exampleResponse: "[You position yourself discreetly nearby, topping up water when needed, monitoring wine levels, ready to assist without interrupting their important discussion]",
        teaching: "Business service requires constant awareness and perfect timing – help without appearing."
      },
      {
        title: "Handling a Modification Request",
        customerBehavior: "The client mentions, 'I'd prefer my steak prepared differently – seared on outside but very rare inside, and can we skip the sauce?'",
        objective: "Accommodate the request immediately and confidently without showing hesitation.",
        yourResponse: "Confirm the request, assure excellence, and promise Chef will execute perfectly.",
        exampleResponse: "Absolutely, sir. I'll ensure our Chef prepares it exactly as you prefer – seared exterior with a warm, rare center, no sauce. Consider it done. This is your evening, and we're here to make it exactly right.",
        teaching: "Never hesitate with modifications. Show confidence that excellence is always possible."
      },
      {
        title: "Efficient Conclusion",
        customerBehavior: "At 88 minutes, they're finishing. Mr. Chen glances at his watch. The client smiles and says, 'That was perfect timing.'",
        objective: "Offer final services efficiently. Don't linger but show they're valued.",
        yourResponse: "Present bill promptly, thank them professionally, wish them well on their business.",
        exampleResponse: "Thank you both for choosing NOMAD. Mr. Chen, I hope this was the perfect setting for your important discussion. Safe travels to you both, and please return when you're back in Melbourne.",
        teaching: "Business diners appreciate efficiency as a sign of respect."
      }
    ]
  },

  {
    name: "Sophia & Marcus",
    difficulty: "Advanced+",
    customerType: "Food Critics / Culinary Influencers",
    description: "Highly experienced diners who know fine dining intimately. They're analyzing every detail. One is photographing everything.",
    image: "🔍📸",
    stages: [
      {
        title: "Recognizing Expertise",
        customerBehavior: "They arrive with professional cameras and notebooks. Marcus immediately asks to see the kitchen setup. Sophia studies the wine list intently.",
        objective: "Recognize their expertise and adjust your approach – they don't need basic explanations.",
        yourResponse: "Acknowledge their knowledge, offer access where appropriate, provide technical details.",
        exampleResponse: "Welcome back, Sophia and Marcus. I see you're ready for a detailed exploration. Our Chef would actually love to discuss his techniques with you – would you like a kitchen tour before dinner? And I can arrange for our sommelier to discuss the wine philosophy directly if you'd like.",
        teaching: "Expert diners don't want hand-holding. Respect their knowledge and offer insider access."
      },
      {
        title: "Technical Menu Knowledge",
        customerBehavior: "Marcus asks, 'What's the water source for the scallops? And how many hours is the wagyu aged?' Questions are specific and technical.",
        objective: "Provide detailed, accurate information or connect them with Chef directly.",
        yourResponse: "Answer with specifics or admit you'll get accurate information from Chef immediately.",
        exampleResponse: "Excellent questions. Our scallops are diver-sourced from Flinders Island. For the exact aging protocol on the wagyu, let me get our Chef – this is exactly the kind of detail he loves to discuss. One moment.",
        teaching: "Expert diners expect accuracy. It's better to verify than to guess."
      },
      {
        title: "Wine Pairing Complexity",
        customerBehavior: "Sophia asks, 'What's your approach to pairing with umami-forward dishes? Do you go bold or complement delicacy?'",
        objective: "Discuss wine philosophy with sophistication and reasoning.",
        yourResponse: "Engage in sophisticated wine discussion. Explain the Chef's pairing philosophy.",
        exampleResponse: "Fascinating question. Our sommelier believes in complementing umami with either lifted acidity – like an aged Riesling – or bold tannins that enhance the richness. For tonight's wagyu, we're recommending the Margaret River Cabernet, which has enough structure to stand alongside the fat and minerality. Shall we explore this philosophy through a pairing journey?",
        teaching: "Sommeliers discuss philosophy, not just taste preferences, with experts."
      },
      {
        title: "Photography and Documentation",
        customerBehavior: "Marcus is photographing the plate from multiple angles before eating. Sophia makes notes. They seem to be documenting for review purposes.",
        objective: "Allow their documentation without rushing them. Provide time and clear plates.",
        yourResponse: "Give them space and time for photography. Don't rush. Offer to adjust lighting if needed.",
        exampleResponse: "Please, take your time capturing these shots. The lighting on this side is particularly good if you'd like better definition. I'll check on your water and return shortly – take as long as you'd like.",
        teaching: "Content creators are working, not just dining. Facilitate their process."
      },
      {
        title: "Handling Constructive Criticism",
        customerBehavior: "Sophia says the sauce is good but 'slightly underseasoned – you could take it to the next level with just a touch more salt and perhaps a whisper of acid.'",
        objective: "Accept feedback graciously as learning, not criticism. Thank them for insight.",
        yourResponse: "Show genuine appreciation for feedback. Pass it to Chef immediately.",
        exampleResponse: "That's incredibly valuable feedback, Sophia. You have a trained palate – I'll absolutely share this with our Chef. The balance between salt and acid is something he's constantly refining. Thank you for this insight.",
        teaching: "Expert critics offer gold to restaurants willing to listen and learn."
      },
      {
        title: "Finishing with Authority",
        customerBehavior: "At the end, Marcus asks, 'What percentage of your menu do you change seasonally?' Sophia says, 'This was genuinely excellent.'",
        objective: "Discuss operations and philosophy, then thank them meaningfully.",
        yourResponse: "Answer their operational questions. Express genuine gratitude for their detailed attention.",
        exampleResponse: "We change approximately 60% of our menu with seasons – Chef believes in ingredient-driven dining. Thank you both so much for your detailed attention and insights this evening. Your perspective truly elevates our team. We hope your coverage reflects the care we've tried to offer.",
        teaching: "Expert diners deserve respect and genuine engagement with their questions."
      }
    ]
  },

  {
    name: "Rachel & David",
    difficulty: "Advanced+",
    customerType: "Difficult Guests – High Expectations & Skepticism",
    description: "They've had disappointing experiences at other fine dining establishments. They're testing every aspect. David is particularly critical.",
    image: "😠🤨",
    stages: [
      {
        title: "Greeting Skeptical Guests",
        customerBehavior: "They arrive looking unimpressed. David mutters, 'Let's see if this place lives up to the hype.' Rachel rolls her eyes. They seem ready to find fault.",
        objective: "Welcome them genuinely. Don't be defensive – show confidence through excellence.",
        yourResponse: "Greet warmly without being overly eager. Demonstrate quiet confidence.",
        exampleResponse: "Welcome to NOMAD. I'm glad you're here. We're committed to making this an exceptional evening. Please, let's get you comfortable, and we'll take great care of you.",
        teaching: "Skeptical guests respond to confidence and substance, not excessive enthusiasm."
      },
      {
        title: "Multiple Dietary Restrictions",
        customerBehavior: "Rachel says, 'I'm gluten-free, dairy-free, and I don't eat pork. David is vegan. And we both have nut allergies. Can you even accommodate this?'",
        objective: "Show confidence that accommodations are not just possible but eagerly accepted.",
        yourResponse: "Confirm you can accommodate all restrictions beautifully. Involve Chef immediately.",
        exampleResponse: "Absolutely. Our Chef actually specializes in creating extraordinary dishes within specific parameters. These aren't limitations – they're creative opportunities for him. Let me speak with him directly about crafting a personalized tasting menu that exceeds your expectations. This will be something special.",
        teaching: "Dietary restrictions are opportunities to show care and creativity, not obstacles."
      },
      {
        title: "Questioning Sourcing Quality",
        customerBehavior: "David asks, 'Where exactly do you source your beef? I've been disappointed by 'premium' beef that's just marketing hype. What makes yours different?'",
        objective: "Answer with specific knowledge and pride. Show genuine expertise in sourcing.",
        yourResponse: "Provide detailed sourcing information. Show personal knowledge and pride in selection.",
        exampleResponse: "Fair question, and I appreciate it. Our beef comes from a specific farm in Gippsland that we've partnered with for 8 years. The cattle are grass-fed with minimal grain, aged for 28 days, and we personally inspect each cut. I can introduce you to our Chef if you'd like to discuss the selection philosophy – he's passionate about this.",
        teaching: "Knowledgeable guests respect knowledgeable service. Share the story behind selections."
      },
      {
        title: "Dish Arrives and Needs Adjustment",
        customerBehavior: "Rachel's first course arrives. After one bite, she says, 'This is good, but the temperature is slightly off – it's warmed the sauce. Can you bring a replacement at the proper temperature?'",
        objective: "Apologize genuinely, fix immediately, thank them for the feedback.",
        yourResponse: "Take responsibility, fix it quickly, show appreciation for keeping standards high.",
        exampleResponse: "You're absolutely right – that's an excellent catch. I apologize for that detail. Let me bring you a fresh plate at the perfect temperature immediately. Thank you for holding us to such high standards – that matters to us.",
        teaching: "Difficult guests who give feedback are helping you be better. Treat feedback as a gift."
      },
      {
        title: "Turning Skeptics into Advocates",
        customerBehavior: "By course 3, David nods and says, 'This is actually very impressive. The personalization really shows.' Rachel adds, 'The vegan options are better than expected.'",
        objective: "Accept the compliment with grace. Make them feel seen and appreciated.",
        yourResponse: "Thank them sincerely. Show that their high standards pushed excellence.",
        exampleResponse: "Thank you so much for that. Your specific requirements actually brought out our best work – our Chef loved the creative challenge of crafting something perfect for you both. We hope you'll return, and we'd genuinely love to hear your thoughts on your experience.",
        teaching: "Difficult guests transformed into satisfied ones become loyal advocates."
      }
    ]
  },

  {
    name: "Priya Kapoor",
    difficulty: "Advanced+",
    customerType: "Vegan Activist – Ethical Dining Challenge",
    description: "Passionate about ethical dining. Will question menu philosophy, ingredient sourcing, and waste practices. Can be confrontational about sustainability.",
    image: "🌱✊",
    stages: [
      {
        title: "Values-Based Greeting",
        customerBehavior: "Priya arrives and immediately asks, 'Do you have a plant-based menu? And more importantly, can you tell me your restaurant's environmental impact? I don't eat at places that don't care about sustainability.'",
        objective: "Take her values seriously. Don't be defensive about non-vegan items. Show genuine commitment.",
        yourResponse: "Acknowledge her values, explain your sustainability practices, offer a compelling vegan experience.",
        exampleResponse: "Welcome, Priya. Your values are important, and frankly, they align with ours. Yes, we have a full plant-based tasting menu. Our Chef sources exclusively from sustainable farms, we compost all waste, and we partner with local producers to minimize transportation. Let me tell you more about our philosophy.",
        teaching: "Passionate guests care about values. Respect that. Share your restaurant's real commitments."
      },
      {
        title: "Ingredient Sourcing Questions",
        customerBehavior: "Priya asks, 'The vegetables in the first course – are they locally grown? Organic? And what happened to the scraps?' She's genuinely interested, not being difficult.",
        objective: "Provide detailed sourcing information. Show waste reduction practices.",
        yourResponse: "Answer specifically. Explain composting, sustainability practices, and ingredient journey.",
        exampleResponse: "Excellent questions. These vegetables come from Harvest Moon Farm just 40 kilometers away, all certified organic. All vegetable scraps become compost that returns to their soil. The beet tops become our house vegetable stock. Nothing goes to waste.",
        teaching: "Activists respect detailed knowledge. Share your sustainability practices proudly."
      },
      {
        title: "Challenging Menu Philosophy",
        customerBehavior: "Priya notices the menu has wagyu beef prominently featured. She says, 'With climate change, doesn't serving wagyu feel irresponsible? Why not champion plant-based cuisine instead?'",
        objective: "Respect her perspective without being defensive. Explain your restaurant's philosophy respectfully.",
        yourResponse: "Acknowledge her valid concerns. Explain your approach to sustainability without dismissing her values.",
        exampleResponse: "You raise an important point, and it's something our team discusses regularly. Our philosophy is ingredient integrity – we source the best available, prepare it with minimal waste, and honor each ingredient. We also believe a fully plant-based establishment and one with exceptional vegan options can coexist. Both models matter. Your vegan course tonight will be just as celebrated as any wagyu dish.",
        teaching: "Different sustainability philosophies can coexist respectfully. Don't dismiss values-driven criticism."
      },
      {
        title: "Exceptional Vegan Course",
        customerBehavior: "The vegan main arrives – an absolutely stunning plate with roasted mushrooms, seasonal vegetables, and a complex plant-based sauce. Priya tastes it and her expression softens. She says, 'This is really beautiful.'",
        objective: "Let the excellence speak for itself. Show that vegan dining is celebrated, not compromised.",
        yourResponse: "Explain the dish with the same pride you'd use for any main course.",
        exampleResponse: "This is our Chef's pride – a celebration of what plants can be. Wild mushrooms from Dandenong Ranges, micro greens grown locally, and a sauce built from roasted vegetable stocks and umami elements. It's a full culinary experience, not a compromise.",
        teaching: "Vegan cuisine deserves the same culinary artistry as any other. Celebrate it fully."
      },
      {
        title: "Converting to an Advocate",
        customerBehavior: "By the end, Priya says, 'I came here skeptical, but you've actually impressed me. I'll tell my community about your commitment. Can I follow up with your Chef about your sourcing?'",
        objective: "Connect her with Chef if possible. Show genuine openness to collaboration.",
        yourResponse: "Thank her for her openness. Facilitate the Chef connection. Show values alignment.",
        exampleResponse: "We'd be genuinely honored. Your perspective pushes us to be better. Let me make sure our Chef connects with you – he'd love to discuss sourcing philosophy with someone so passionate about impact. Thank you for challenging us in the best way.",
        teaching: "Activists can become powerful advocates when they see authentic commitment."
      }
    ]
  },

  {
    name: "Michael Torres",
    difficulty: "Advanced+",
    customerType: "Culinary Student with Serious Technique Questions",
    description: "Aspiring chef studying at culinary school. Will ask detailed questions about techniques, equipment, and kitchen operations. Both knowledgeable and eager to learn.",
    image: "👨‍🍳📚",
    stages: [
      {
        title: "Recognizing the Student",
        customerBehavior: "Michael arrives and immediately asks, 'Can I see your kitchen setup? I'm studying culinary arts and I'm curious about your plating station and sous vide equipment.'",
        objective: "Welcome his curiosity. Offer kitchen tours and access to learning experiences.",
        yourResponse: "Recognize his passion. Offer Chef mentorship and behind-the-scenes access.",
        exampleResponse: "Welcome, Michael! That's fantastic – we love supporting culinary students. Absolutely, let's arrange a kitchen tour before service. Our Chef would probably enjoy discussing his techniques with someone genuinely interested. We actually teach culinary workshops – have you considered joining us?",
        teaching: "Support the next generation of chefs. Share knowledge generously."
      },
      {
        title: "Deep Technique Discussion",
        customerBehavior: "During the tour, Michael asks, 'How long do you rest your wagyu? At what temperature do you sear it? And why that temperature versus lower?'",
        objective: "Engage in serious technical discussion. Treat him as a peer in the culinary world.",
        yourResponse: "Explain techniques in detail. Discuss the reasoning behind method choices.",
        exampleResponse: "Great questions. We age for 28 days – this develops the flavor profile without affecting tenderness too much. We sear at 200°C for 90 seconds per side, which creates a proper crust while maintaining rare center. The Maillard reaction at this temperature is optimal for wagyu's fat rendering.",
        teaching: "Culinary students deserve serious technical education, not simplified explanations."
      },
      {
        title: "Equipment and Innovation",
        customerBehavior: "Michael notices the kitchen equipment and asks about their use of sous vide. 'Do you sous vide proteins before searing, or just for specific dishes?'",
        objective: "Explain your kitchen's equipment philosophy and innovation approach.",
        yourResponse: "Discuss the restaurant's technique selections and why they chose specific methods.",
        exampleResponse: "We use sous vide selectively – particularly for lamb where even cooking is crucial. But for wagyu, we prefer traditional methods because the fat distribution cooks better with direct heat. Each technique serves a purpose. We're actually experimenting with new methods – our Chef welcomes innovation while respecting tradition.",
        teaching: "Explain the 'why' behind technique choices, not just the 'what.'"
      },
      {
        title: "Mentorship Opportunity",
        customerBehavior: "Michael says, 'This is incredible learning. Would your Chef ever consider mentoring students? Even just occasional consultations?'",
        objective: "Open the door to mentorship. Show commitment to culinary education.",
        yourResponse: "Facilitate the connection. Show genuine interest in supporting his culinary journey.",
        exampleResponse: "That's a wonderful question. Our Chef is passionate about developing the next generation. Let me exchange contact information with you – I'll make sure he reaches out. We might even have opportunities for you to work with us, if you're interested.",
        teaching: "Exceptional restaurants develop the next generation of chefs."
      },
      {
        title: "Inspiring the Next Chef",
        customerBehavior: "As Michael leaves, he says, 'This was better than culinary school today. Thank you for taking my curiosity seriously. You've inspired me.'",
        objective: "Send him off feeling valued and encouraged in his culinary journey.",
        yourResponse: "Thank him genuinely. Encourage his passion. Leave the door open.",
        exampleResponse: "Thank you for that – and more importantly, thank you for your genuine curiosity. The culinary world needs passionate people like you. Don't hesitate to reach out anytime – we'll always make time for serious students. Keep pushing your craft.",
        teaching: "Inspire the next generation. Great chefs mentor future chefs."
      }
    ]
  },

  {
    name: "Alex & Jordan",
    difficulty: "Advanced",
    customerType: "Rush Hour Couple – Theater Time Pressure",
    description: "They have theater tickets in 40 minutes and need to eat quickly. Alex is impatient, Jordan is decisive. Both expect efficiency.",
    image: "⏰🎭",
    stages: [
      {
        title: "Urgent Seating & Quick Assessment",
        customerBehavior: "They arrive hurriedly and Alex immediately asks, 'How long will it take to get food? We have a show at 8 PM.' Jordan adds, 'What can we get fastest?'",
        objective: "Acknowledge the time constraint immediately and provide realistic timeline.",
        yourResponse: "Be direct about timing. Offer a streamlined approach without making them feel rushed.",
        exampleResponse: "Welcome! I see you're on a schedule. Our appetizer-to-table time is 12 minutes, mains are 18-20 minutes. We can absolutely work with your timeline. I suggest we order everything together right now – appetizers, mains, even dessert if you'd like – so the kitchen can work efficiently. What appeals to you?",
        teaching: "Time-conscious guests respect honesty and efficiency. Take control and streamline their experience."
      },
      {
        title: "Speed-Focused Ordering",
        customerBehavior: "Alex says, 'We'll do the pan-seared scallops and... what's your fastest main?' Jordan interrupts, 'Actually, skip the appetizer. Just give us mains and the check at the same time as dessert.'",
        objective: "Execute their requests perfectly and keep them on track for their show.",
        yourResponse: "Confirm their order, reiterate the timeline, and coordinate with kitchen to ensure perfect timing.",
        exampleResponse: "Perfect strategy, Jordan. I'll tell the kitchen you want everything timed together – mains out at exactly 18 minutes, then dessert immediately after so you're done by 7:40. Our fastest mains are the seared duck breast or grilled fish – both stunning and quick. Which speaks to you?",
        teaching: "Empower efficient guests by taking charge of timing. Coordinate with kitchen to execute precision service."
      },
      {
        title: "Handling Modifications Under Pressure",
        customerBehavior: "Alex says, 'Actually, can I swap the vegetables for fries? And can we get extra napkins?' Jordan nods, 'Yes, and we need the check ready – don't wait to ask.'",
        objective: "Accommodate requests quickly without hesitation or questions.",
        yourResponse: "Confirm all modifications immediately and set expectations for smooth billing.",
        exampleResponse: "Absolutely – fries instead of vegetables, extra napkins, and I'll have your check completely prepared in advance. You'll just sign when you're done and dash to your show. Consider it done.",
        teaching: "With time-pressured guests, accommodations should be instant and complete. Anticipate their needs."
      },
      {
        title: "Perfect Execution Under Time Pressure",
        customerBehavior: "Food arrives on schedule. Alex is pleasantly surprised, 'Wow, that was fast!' Jordan checks the time, 'We're on track – 7:15. Perfect.'",
        objective: "Maintain momentum and deliver the final experience flawlessly.",
        yourResponse: "Present dishes with energy, confirm everything is perfect, stand by to process the payment quickly.",
        exampleResponse: "Here we go – perfectly timed! Duck breast seared to medium with crispy fries on the side. Everything you need is right here. Enjoy – you're staying on schedule!",
        teaching: "Efficient service creates positive impressions. Speed doesn't mean poor quality."
      },
      {
        title: "Swift & Courteous Farewell",
        customerBehavior: "They finish eating at 7:32. Alex signals for the check immediately. Jordan stands up, 'We need to move fast.'",
        objective: "Process payment instantly and send them off feeling fantastic about their experience.",
        yourResponse: "Have check ready, process payment swiftly, and wish them well with their show.",
        exampleResponse: "Your check is ready right here. [Process payment quickly]. Enjoy your show – thank you for choosing NOMAD! Break a leg!",
        teaching: "End rushed service on a high note. They'll remember the efficiency and professionalism."
      }
    ]
  },

  {
    name: "Casey & Sam",
    difficulty: "Advanced+",
    customerType: "Dietary Restrictions Group – Careful & Cautious",
    description: "Casey has a severe gluten allergy and is nervous about eating out. Sam is supportive and asks detailed questions. Both need reassurance and clear communication.",
    image: "⚠️🤝",
    stages: [
      {
        title: "Initial Concerns & Allergy Disclosure",
        customerBehavior: "Casey looks nervous. Sam says immediately, 'Casey has a severe gluten allergy – not a preference, a real allergy. Can we safely eat here?' Casey adds, 'I get really sick, so I need to be careful.'",
        objective: "Take the allergy seriously immediately. Show knowledge and reassurance without minimizing concerns.",
        yourResponse: "Acknowledge severity, explain your protocols, and involve the Chef directly.",
        exampleResponse: "We absolutely take allergies seriously here – severity matters, and we handle them with utmost care. Gluten allergies are something our Chef manages carefully. Let me be direct with you: we do have gluten items in our kitchen, but we have strict protocols. Would you like me to bring our Chef out to discuss this directly? He can explain exactly how we prevent cross-contamination.",
        teaching: "Never downplay allergies. Transparency and expertise build trust. Offer expert involvement."
      },
      {
        title: "Detailed Cross-Contamination Questions",
        customerBehavior: "Casey asks, 'Do you use separate prep areas? Different cutting boards? What about the fryer – is it only for gluten-free items?' Sam pulls out a small notebook, ready to document the answers.",
        objective: "Provide specific, detailed answers. Show you understand cross-contamination risks.",
        yourResponse: "Answer each question specifically. Admit if you don't know – get the Chef to answer.",
        exampleResponse: "Excellent questions – these are exactly what matter. We have a dedicated gluten-free prep station with separate cutting boards, utensils, and a dedicated fryer. Our Chef will personally handle your plate preparation. For items we're unsure about, I'll verify with him directly. Sam, you're right to document this.",
        teaching: "Detailed questioning shows care. Answer thoroughly. It's okay to say 'let me verify with Chef.'"
      },
      {
        title: "Menu Exploration & Careful Selection",
        customerBehavior: "Casey studies the menu carefully and asks, 'This fish – is it breaded? What about the sauce – any flour? Can everything be modified to be gluten-free?'",
        objective: "Go through the menu item by item. Explain modifications clearly and confidently.",
        yourResponse: "Review each potential dish thoroughly. Explain what can be safely modified.",
        exampleResponse: "Let me walk through this with you. The fish – we can absolutely do it without breading, grilled or pan-seared instead. The sauce is built from stock and aromatics – naturally gluten-free. For sides, we can substitute anything with potatoes, vegetables, or rice. Everything you're considering can be made safely. Our Chef will prepare your entire plate in the gluten-free station.",
        teaching: "Thorough menu review with allergy guests prevents problems. Show you understand their needs."
      },
      {
        title: "Kitchen Protocol Confirmation",
        customerBehavior: "Just before ordering, Casey says, 'I'm sorry to ask so many questions. I just... I've gotten sick before at restaurants that said they were careful.' Sam squeezes Casey's hand supportively.",
        objective: "Validate their concerns. Explain your kitchen's real protocols. Provide personal assurance.",
        yourResponse: "Empathize with their past experience. Explain what makes your approach different and safer.",
        exampleResponse: "Your questions aren't an inconvenience – they're exactly right. I understand why you're cautious after that experience. Here's the difference: our Chef will personally prepare your food. I'll place a 'SEVERE ALLERGY' marker on your plate so every team member knows. Before it leaves the kitchen, the Chef confirms it personally. You'll have my direct attention the entire meal. We're not just 'being careful' – we're being meticulous.",
        teaching: "Past trauma is real. Personal accountability and reassurance matter deeply."
      },
      {
        title: "Seamless & Safe Meal Execution",
        customerBehavior: "Food arrives. Casey inspects it carefully. Sam watches the plate come from the kitchen – separate setup, clearly marked. Casey takes a bite and visibly relaxes. 'This tastes amazing, and I feel safe eating it.'",
        objective: "Deliver the meal safely and maintain attentiveness throughout.",
        yourResponse: "Confirm everything is perfect and remain available for any concerns.",
        exampleResponse: "I'm so glad! Your meal was prepared entirely in our gluten-free station by our Chef personally. I'll check on you throughout – please let me know immediately if anything doesn't feel right. Your comfort and safety are my priority.",
        teaching: "Visible safety measures build confidence. Attentiveness is essential with allergy diners."
      },
      {
        title: "Grateful Farewell & Future Assurance",
        customerBehavior: "As they leave, Casey says, 'Thank you. That was the first time in months I've eaten out without worrying the whole time.' Sam adds, 'We'll definitely be back – and we'll tell others about your care.'",
        objective: "End on a note of genuine relief and satisfaction. Invite them back.",
        yourResponse: "Thank them sincerely. Reiterate your commitment. Welcome them back warmly.",
        exampleResponse: "Thank you so much for trusting us with this. We take that trust seriously. Please come back anytime – we'll always take the same meticulous care. And tell anyone you know with allergies – we're here for them too. You made our evening memorable.",
        teaching: "Allergy customers become loyal advocates when treated with real care and expertise."
      }
    ]
  },

  {
    name: "Morgan & Taylor",
    difficulty: "Advanced+",
    customerType: "Disappointed Diner – Complaint Resolution",
    description: "Morgan ordered a medium steak but received well-done. The food is also cold. Both are disappointed but trying to be polite about voicing concerns.",
    image: "😕🍽️",
    stages: [
      {
        title: "First Signs of Disappointment",
        customerBehavior: "Food arrives. Morgan cuts into the steak, looks at it with disappointment, and says quietly to Taylor, 'This is way more done than medium.' Taylor nods and adds, 'And the plate is cool – the food's been sitting.'",
        objective: "Recognize dissatisfaction immediately before they become upset. Ask proactively.",
        yourResponse: "Notice their expressions and ask directly if everything is perfect.",
        exampleResponse: "I notice you're examining the plate carefully – is everything perfect? Please be honest with me.",
        teaching: "Read non-verbal cues. Ask before guests voice complaints. Show you care about their satisfaction."
      },
      {
        title: "Hearing the Complaint Gracefully",
        customerBehavior: "Morgan says politely but firmly, 'Actually, I ordered this medium, and it's definitely well-done. Also, the temperature... the food isn't hot.' Taylor adds, 'We're not trying to be difficult, but this isn't what we ordered.'",
        objective: "Receive the complaint without defensiveness. Apologize sincerely. Take immediate action.",
        yourResponse: "Apologize genuinely, take responsibility, and offer immediate solutions.",
        exampleResponse: "I sincerely apologize – you're absolutely right, and this isn't acceptable. You ordered medium, and you deserve exactly that. Let me take this back immediately and have our Chef prepare a fresh steak cooked perfectly to medium on a hot plate. This is on us. Can I also bring you fresh appetizers or a drink while we fix this?",
        teaching: "Accept complaints gracefully. Your apology should be genuine and immediate, not defensive."
      },
      {
        title: "Taking Ownership & Involving Management",
        customerBehavior: "Morgan says, 'Thank you for understanding. We appreciate the apology. Could we speak with a manager, though? We just want to make sure this is communicated properly to the kitchen.'",
        objective: "Immediately involve management. Show the concern is being escalated appropriately.",
        yourResponse: "Bring management immediately. Ensure they reinforce your commitment to fixing this.",
        exampleResponse: "Absolutely – that's completely fair. [Bring manager] This is Morgan and Taylor. The steak wasn't cooked to the ordered temperature and the plate temperature wasn't hot enough. I'm having the Chef prepare a fresh plate immediately, but I wanted to ensure our manager heard the concern directly from you.",
        teaching: "Escalation shows you're taking complaints seriously. Managers reinforce that the issue matters."
      },
      {
        title: "Perfect Resolution & Accountability",
        customerBehavior: "The manager apologizes and assures them: 'I've spoken directly with our Chef. Your new steak is being prepared right now, cooked to exactly medium, on a heated plate. I'm also comping your appetizers and offering a complimentary dessert.'",
        objective: "Deliver the replacement perfectly and with extra care.",
        yourResponse: "Prepare the new plate with exceptional attention. Present it apologetically but with confidence.",
        exampleResponse: "[A few minutes later, returning with a fresh plate] Here's your medium-cooked steak – our Chef prepared this personally, seared to perfection with a warm, pink center, on a plate heated to 150 degrees. Please enjoy – this is how it should have been from the start.",
        teaching: "Replacement meals should be better than the original. Show extra care to regain trust."
      },
      {
        title: "Checking In Throughout Recovery",
        customerBehavior: "Morgan takes a bite and smiles. 'Oh, this is exactly right – perfect temperature throughout.' Taylor nods, 'The food is actually hot this time. Much better.'",
        objective: "Monitor the meal and ensure complete satisfaction. Be attentive without hovering.",
        yourResponse: "Check in periodically. Let them know you care about their complete satisfaction.",
        exampleResponse: "I'm so glad that's perfect now. I'll check on you in a few minutes – please let me know if there's anything else you need. Your satisfaction matters to us.",
        teaching: "After a complaint recovery, increased attentiveness shows genuine care."
      },
      {
        title: "Turning Complaint Into Loyalty",
        customerBehavior: "At the end of the meal, Morgan says to you, 'I want to be honest – I was frustrated, but the way you and your team handled it impressed me. Most places get defensive.' Taylor adds, 'We'll be back – and we'll tell people about your response.'",
        objective: "Thank them for their patience and grace. Reinforce your commitment.",
        yourResponse: "Thank them sincerely. Acknowledge that their feedback helps you improve.",
        exampleResponse: "Thank you so much for your grace in how you handled that, and for giving us the chance to make it right. Your feedback actually helps us improve – we'll be reviewing this with our team. You've earned our gratitude, and we absolutely hope to see you again.",
        teaching: "Complaints handled well create loyal customers. They become advocates for your service recovery."
      }
    ]
  }
];

function generateCustomer() {
  currentCustomer = customers[
    Math.floor(Math.random() * customers.length)
  ];

  currentStage = 0;
  showStage();
}

function showStage() {
  const stage = currentCustomer.stages[currentStage];

  let stageHTML = `
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px;">
      <div style="font-size: 3rem;">${currentCustomer.image}</div>
      <div>
        <h2 style="color: #d4af37; margin: 0;">${currentCustomer.name}</h2>
        <p style="color: #bbb; margin: 0; font-size: 0.95rem;">${currentCustomer.customerType}</p>
        <p style="color: #999; margin: 0; font-size: 0.9rem; font-style: italic;">${currentCustomer.description}</p>
      </div>
    </div>

    <hr style="border: none; border-top: 1px solid rgba(212, 175, 55, 0.2); margin: 20px 0;">

    <h3 style="color: #e5c158; margin-bottom: 16px;">Stage ${currentStage + 1} of ${currentCustomer.stages.length}</h3>

    <h3 style="color: #e5c158; margin-top: 20px; margin-bottom: 12px;">📍 ${stage.title}</h3>

    <div style="background: rgba(100, 150, 200, 0.1); border-left: 4px solid #64b8c8; padding: 16px; border-radius: 4px; margin: 16px 0;">
      <p style="margin: 0; font-size: 1rem; color: #ddd;">
        <strong>🎭 Customer Behavior:</strong>
      </p>
      <p style="margin: 8px 0 0 0; color: #ddd; line-height: 1.6;">
        ${stage.customerBehavior}
      </p>
    </div>

    <div style="background: rgba(212, 175, 55, 0.1); border-left: 4px solid #d4af37; padding: 16px; border-radius: 4px; margin: 16px 0;">
      <p style="margin: 0; font-size: 1rem; color: #ddd;">
        <strong>🎯 Your Challenge:</strong>
      </p>
      <p style="margin: 8px 0 0 0; color: #ddd; line-height: 1.6;">
        ${stage.objective}
      </p>
    </div>

    <button onclick="toggleAnswer()" style="width: 100%; padding: 12px; background: #8b6f47; color: #fff; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 0.95rem; margin: 16px 0;">
      💡 Reveal Best Response
    </button>

    <div id="answerBox" style="display: none; background: rgba(255,255,255,0.08); border: 1px solid rgba(212, 175, 55, 0.2); padding: 16px; border-radius: 4px; margin: 16px 0;">
      <p style="margin: 0 0 12px 0; color: #e5c158; font-weight: bold;">✓ Excellent Response:</p>
      <p style="margin: 0 0 16px 0; color: #ddd; line-height: 1.8; font-style: italic;">
        "${stage.exampleResponse}"
      </p>
      
      ${stage.teaching ? `
        <hr style="border: none; border-top: 1px solid rgba(212, 175, 55, 0.1); margin: 16px 0;">
        <p style="margin: 0; color: #bbb; font-size: 0.95rem;">
          <strong>📚 Key Teaching:</strong> ${stage.teaching}
        </p>
      ` : ''}
    </div>

    <br>

    <button onclick="nextStage()" style="width: 100%; padding: 12px; background: #d4af37; color: #1a1a1a; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 0.95rem;">
      ${currentStage === currentCustomer.stages.length - 1 ? '✓ Complete Scenario →' : 'Next Stage →'}
    </button>
  `;

  document.getElementById("customerCard").innerHTML = stageHTML;
}

function toggleAnswer() {
  const answerBox = document.getElementById("answerBox");
  if(answerBox.style.display === "none"){
    answerBox.style.display = "block";
  } else {
    answerBox.style.display = "none";
  }
}

function nextStage() {
  if(currentStage < currentCustomer.stages.length - 1){
    currentStage++;
    showStage();
  } else {
    document.getElementById("customerCard").innerHTML = `
      <div style="text-align: center;">
        <h2 style="color: #d4af37; margin-bottom: 20px;">✨ Scenario Complete!</h2>
        <p style="color: #ddd; font-size: 1.1rem; margin-bottom: 30px; line-height: 1.8;">
          You successfully navigated a challenging fine dining scenario!<br>
          <strong>${currentCustomer.name}</strong> left satisfied with your exceptional service.
        </p>
        
        <div style="background: rgba(212, 175, 55, 0.1); border: 1px solid #d4af37; padding: 20px; border-radius: 4px; margin: 30px 0;">
          <p style="color: #e5c158; font-size: 1rem; margin: 0;"><strong>Key Takeaways:</strong></p>
          <ul style="color: #ddd; text-align: left; display: inline-block; margin-top: 12px;">
            <li>Adapt your approach to each guest's needs</li>
            <li>Show confidence through expertise and knowledge</li>
            <li>Take special requests seriously – never hesitate</li>
            <li>Listen actively to understand underlying needs</li>
            <li>End experiences memorably with genuine appreciation</li>
          </ul>
        </div>

        <button onclick="location.href='student.html'" style="margin-top: 20px; padding: 12px 24px; background: #d4af37; color: #1a1a1a; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 0.95rem;">
          Try Another Scenario
        </button>
      </div>
    `;
  }
}

