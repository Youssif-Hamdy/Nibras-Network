/**
 * Page copy for Teaching Methodology — wording preserved from site brief.
 */

export type TMNode =
  | { k: "p"; text: string }
  | { k: "ul"; items: string[] }
  | { k: "h3"; text: string }
  | { k: "h4"; text: string }
  | { k: "blockquote"; text: string }
  | { k: "hr" }
  | { k: "table"; headers: [string, string]; rows: [string, string][] };

export type TMSection = { id: string; title: string; nodes: TMNode[] };

export const TM_HERO = {
  title: "Our Teaching Methodology",
  subtitle: "Authenticity, Quality, and Holistic Islamic Education",
};

export const TM_INTRO: TMNode[] = [
  {
    k: "p",
    text: "At Nibras Network, we believe that education is not merely the transfer of dry knowledge from teacher to student. Rather, it is a living, continuous process aimed at building confident, compassionate, and intellectually curious Muslim learners—individuals capable of critical thinking and applying what they learn in their daily lives.",
  },
];

export const TM_PILLARS_KICKER = "🎯 The Five Core Pillars of The Nibras Approach";

export const TM_SECTIONS: TMSection[] = [
  {
    id: "p1",
    title: "1️⃣ Authentic & Rigorous Curriculum",
    nodes: [
      {
        k: "p",
        text: "Our educational curriculum is built on a solid foundation of:",
      },
      {
        k: "ul",
        items: [
          "Authentic Islamic Sources: The Holy Qur'an, verified Sunnah, and trusted Islamic scholarship",
          "Modern, Research-Based Materials: Evidence-based methodologies in Arabic language teaching, Qur'anic studies, and educational psychology",
          "Organized & Progressive Structure: Clear levels with specific, measurable learning outcomes",
          "Age-Appropriate Content: Specialized materials for children (5-12), teenagers (13-18), and adults",
          "Continuous Updates: Regular curriculum reviews based on latest educational research",
        ],
      },
      {
        k: "p",
        text: "Each course follows a step-by-step academic pathway from beginner to advanced levels to ensure clarity, retention, and real confidence.",
      },
    ],
  },
  {
    id: "p2",
    title: "2️⃣ Learner-Centered Educational Methodology",
    nodes: [
      {
        k: "p",
        text: "Every student is unique. Our approach embraces individual needs:",
      },
      {
        k: "ul",
        items: [
          "✓ Personalized Learning Paths - Customized to student goals and pace with one-on-one attention",
          "✓ Interactive & Engaging Learning - Live discussions, active participation, immediate feedback",
          "✓ Multi-Sensory Learning - Visual aids, audio recordings, videos, interactive whiteboards",
          "✓ Adaptive Pacing - Advanced learners receive enrichment; struggling students get support",
        ],
      },
    ],
  },
  {
    id: "p3",
    title: "3️⃣ Continuous Assessment & Progress Tracking",
    nodes: [
      { k: "h4", text: "During Each Lesson:" },
      {
        k: "p",
        text: "Real-time feedback on pronunciation, grammar, and comprehension",
      },
      { k: "h4", text: "After Each Lesson:" },
      {
        k: "p",
        text: "Homework assignments reviewed within 48 hours with detailed correction and explanation",
      },
      { k: "h4", text: "Level-Based Examinations:" },
      {
        k: "p",
        text: "End-of-level assessments measuring mastery of learning objectives (written, oral, and practical components)",
      },
      { k: "h4", text: "Monthly Progress Reports:" },
      {
        k: "p",
        text: "Comprehensive overview of strengths, growth areas, and specific recommendations",
      },
    ],
  },
  {
    id: "p4",
    title: "4️⃣ Parental Involvement & Community Partnership",
    nodes: [
      { k: "h4", text: "For Parents/Guardians:" },
      {
        k: "ul",
        items: [
          "Monthly curriculum overviews",
          "Open feedback channels and goal-setting sessions",
          "Complete transparency with detailed reports",
          "Parent-focused modules on Islamic values and smart parenting",
        ],
      },
      { k: "h4", text: "Focus on Holistic Development:" },
      {
        k: "ul",
        items: [
          "✅ Character Development (Akhlaq): Honesty, kindness, respect, responsibility",
          "✅ Social Skills: Communication, teamwork, empathy",
          "✅ Spiritual Growth: Connection to Qur'an and Islamic principles",
          "✅ Mental & Physical Wellbeing: Balance, healthy habits, mindfulness",
        ],
      },
    ],
  },
  {
    id: "p5",
    title: "5️⃣ Teaching Methodology: Principles & Practices",
    nodes: [
      { k: "h4", text: "A) Smart Simplification Without Oversimplification" },
      {
        k: "p",
        text: "Complex concepts broken into understandable parts with strong foundations before advancing",
      },
      { k: "h4", text: "B) Open Dialogue & Critical Thinking" },
      {
        k: "p",
        text: "Students encouraged to ask questions, engage in respectful discussions, and develop understanding",
      },
      { k: "h4", text: "C) Islamic Principles (Avoiding Political Content)" },
      {
        k: "p",
        text: "Focus on universal Islamic values (justice, mercy, knowledge, community) with respect for diverse Islamic schools of thought",
      },
      { k: "h4", text: "D) Holistic Human Development" },
      {
        k: "table",
        headers: ["Dimension", "How We Develop It"],
        rows: [
          ["Intellectual", "Critical thinking, problem-solving, deep understanding"],
          ["Spiritual", "Connection to Qur'an, Islamic practice, life purpose"],
          ["Physical", "Healthy habits, Islamic health practices"],
          ["Emotional", "Emotional intelligence, resilience, Islamic coping"],
          ["Social", "Compassion, teamwork, respectful communication"],
          ["Character", "Integrity, responsibility, kindness, humility"],
        ],
      },
    ],
  },
  {
    id: "p6",
    title: "6️⃣ Special Approach for Non-Native Arabic Speakers",
    nodes: [
      {
        k: "p",
        text: "We understand the unique challenges of learning Arabic as a second language:",
      },
      {
        k: "ul",
        items: [
          "Contrastive Analysis: Practical comparison with student's native language",
          "Smart Vocabulary Building: Most-used words first",
          "Intensive Phonetic Training: Precise audio-visual guidance for Arabic sounds",
          "Simplified Sentence Structures: Before introducing complex grammar",
          "Contextual Learning: Words in meaningful, real-life scenarios",
        ],
      },
      { k: "h4", text: "Available Resources:" },
      {
        k: "p",
        text: "Bilingual materials + visual dictionaries + comprehensive pronunciation guides + patience and encouragement",
      },
    ],
  },
  {
    id: "programs",
    title: "📖 Programs & Courses Offered",
    nodes: [
      {
        k: "p",
        text: "1. MODERN ARABIC LANGUAGE\nBeginner → Intermediate → Advanced\n(Grammar, Conversation, Writing, Reading, Listening with real-world applications)",
      },
      {
        k: "p",
        text: "2. QURANIC STUDIES\nTajweed + Tafseer (Understanding Meanings) + Qur'anic Reflection + Integration with Islamic Life",
      },
      {
        k: "p",
        text: "3. HIFZ (MEMORIZATION)\nStructured Memorization Programs + Scientific Revision Techniques + Spiritual Development + Ijazah Track (for serious students)",
      },
      {
        k: "p",
        text: "4. ISLAMIC STUDIES\nIslamic Beliefs & Practices + Islamic Ethics & Morality + Islamic History & Culture + Contemporary Islamic Issues (with nuance)",
      },
      {
        k: "p",
        text: "5. COMBINED PROGRAMS\nMultiple subjects + Integrated curriculum + Customized pace + Discounted rates",
      },
    ],
  },
  {
    id: "outcomes",
    title: "🎓 Real Learning Outcomes",
    nodes: [
      {
        k: "p",
        text: "Arabic Language Students Will:\nUnderstand and use Arabic grammar with confidence + speak conversational Arabic fluently + read Arabic texts with comprehension + write short paragraphs correctly + apply Arabic to real-life situations",
      },
      {
        k: "p",
        text: "Qur'anic Students Will:\nRecite Qur'an with proper Tajweed + understand Qur'anic vocabulary and meanings + reflect meaningfully on Qur'anic teachings + apply principles to daily life",
      },
      {
        k: "p",
        text: "Hifz Students Will:\nMemorize assigned portions accurately + maintain memorization through organized revision + understand what they memorize + develop personal discipline and spiritual growth",
      },
      {
        k: "p",
        text: "Islamic Studies Students Will:\nUnderstand Islamic principles and core values + develop critical thinking about Islamic topics + engage respectfully with different perspectives + live Islamic values with integrity",
      },
    ],
  },
  {
    id: "qa",
    title: "✅ Quality Assurance",
    nodes: [
      {
        k: "ul",
        items: [
          "✓ High Teacher Qualifications: Native speakers with teaching certification and deep expertise",
          "✓ Regular Curriculum Review: Continuous improvement based on feedback and modern pedagogy",
          "✓ Modern Technology & Tools: Advanced learning management system, video conferencing, interactive whiteboards",
          "✓ Student & Family Satisfaction: Monthly feedback surveys, mid-course adjustments, 100% satisfaction guarantee",
        ],
      },
    ],
  },
  {
    id: "philosophy",
    title: "💡 Our Philosophy in One Sentence",
    nodes: [
      {
        k: "blockquote",
        text: '"We teach Arabic and Islamic knowledge with authenticity and rigor, but we educate whole human beings—developing their intellect, character, spiritual connection, and ability to live meaningfully as Muslims in the modern world."',
      },
    ],
  },
  {
    id: "languages",
    title: "🌍 Languages of Instruction",
    nodes: [
      {
        k: "p",
        text: "Primary: English & Arabic (based on student's proficiency level)\nSupport: Native language explanations available initially\nGoal: Progressive transition to maximum Arabic usage as proficiency grows",
      },
    ],
  },
  {
    id: "promise",
    title: "🎁 The NIBRAS Promise",
    nodes: [
      {
        k: "ul",
        items: [
          "✅ Authentic Education based on Islamic sources and modern pedagogy",
          "✅ Quality Teachers passionate, qualified, and experienced",
          "✅ Personalized Attention tailored to your unique learning needs",
          "✅ Regular Feedback to track progress and celebrate achievements",
          "✅ Parental Partnership keeping you involved every step",
          "✅ Holistic Development of mind, heart, character, and spirit",
          "✅ Safe, Supportive Environment free from judgment",
          "✅ Flexible Learning that fits your schedule and pace",
        ],
      },
    ],
  },
  {
    id: "cta",
    title: "🚀 Start Your Learning Journey Today",
    nodes: [
      {
        k: "p",
        text: "Ready to learn Arabic, understand the Qur'an, memorize with purpose, or deepen your Islamic knowledge?",
      },
      {
        k: "p",
        text: "Nibras Network is here to guide you.",
      },
    ],
  },
  {
    id: "questions",
    title: "📞 Questions?",
    nodes: [
      {
        k: "p",
        text: "WhatsApp: +201099493640\nEmail: nibrasnetwork55@gmail.com\nAvailable: 24/7",
      },
    ],
  },
  {
    id: "testimonials",
    title: "🌟 What Our Students Say",
    nodes: [
      {
        k: "blockquote",
        text: '"I\'ve studied Arabic before, but Nibras\'s approach is different. They actually make you think, not just memorize. My teacher challenged me to apply grammar rules in real conversations." — Fatima, USA',
      },
      {
        k: "blockquote",
        text: '"My children love their Qur\'an classes. They\'re memorizing while understanding the meanings. The monthly reports show exactly what they\'re learning, and we feel involved." — Amira, UK',
      },
      {
        k: "blockquote",
        text: '"After 6 months, I can actually hold conversations in Arabic! The structured levels make sense, and each lesson builds on the previous one." — Hassan, Canada',
      },
    ],
  },
  {
    id: "closing",
    title: "",
    nodes: [
      {
        k: "p",
        text: "Nibras Network: Where Traditional Authenticity Meets Modern Excellence 🌟",
      },
    ],
  },
];
