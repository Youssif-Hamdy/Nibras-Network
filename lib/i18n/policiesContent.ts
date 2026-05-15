import type { Locale } from "@/lib/i18n/types";

export type PolicyBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "ordered"; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "table"; headers: string[]; rows: string[][]; linkifySecondColumn?: boolean };

export type PolicySection = {
  id: string;
  title: string;
  blocks: PolicyBlock[];
};

export type PoliciesPageCopy = {
  heroTitle: string;
  heroSubtitle: string;
  sections: PolicySection[];
  promiseTitle: string;
  promiseBody: string[];
  teamLine: string;
};

const en: PoliciesPageCopy = {
  heroTitle: "📜 Nibras Network – The Qur'an Light",
  heroSubtitle: "Academic & Administrative Policies (Official Terms & Conditions)",
  sections: [
    {
      id: "1",
      title: "1. Welcome & Mission",
      blocks: [
        {
          type: "paragraph",
          text: 'Welcome to Nibras Network ("The Qur\'an Light"). We are an online academy dedicated to teaching the Holy Quran, Arabic language, and Islamic studies for children and adults. These Terms & Conditions form a binding agreement between you (the "Parent/Student") and the Academy.',
        },
        {
          type: "paragraph",
          text: "Our core value: Taqwa (consciousness of Allah) in public and private, sincerity in seeking and teaching knowledge.",
        },
      ],
    },
    {
      id: "2",
      title: "2. Enrollment & Commitment",
      blocks: [
        {
          type: "list",
          items: [
            "By enrolling, the parent/guardian agrees to all policies below.",
            "A Student-Parent Compact (one-page summary) will be signed electronically before the first session.",
            "The Academy reserves the right to update these policies; updates are effective upon posting on our website.",
          ],
        },
      ],
    },
    {
      id: "3",
      title: "3. Payment Methods & Subscription",
      blocks: [
        {
          type: "table",
          headers: ["Item", "Policy"],
          rows: [
            [
              "Payment Methods",
              "Secure online payments via credit card, bank transfer, or digital wallets (details provided upon registration).",
            ],
            ["Billing Cycle", "Monthly recurring subscription – paid in advance. Automatically renews on the same day each month."],
            [
              "Change of Plan",
              "You may increase/decrease weekly hours by notifying the administration 5 days before month-end.",
            ],
            [
              "Special Packages",
              "• Orphans: 50% fee reduction or free access (case by case).\n• Low-income families: Affordable flexible payment plans available.\n• New Muslims (Reverts): Enjoy a significant discount – contact administration for details.",
            ],
          ],
        },
      ],
    },
    {
      id: "4",
      title: "4. Refund & Withdrawal Policy",
      blocks: [
        {
          type: "table",
          headers: ["Scenario", "Policy"],
          rows: [
            [
              "Withdrawal notice",
              "Email or WhatsApp the administration at least 5 working days before month-end. No fees for the next month will be charged.",
            ],
            [
              "Sudden withdrawal (during month)",
              "Only attended sessions are charged. The remaining balance is refunded minus a small administrative fee (≤10%).",
            ],
            [
              "Non-refundable fees",
              "Initial assessment/enrollment fees are not refunded after classes begin.",
            ],
            [
              "Missed classes due to academy error",
              "100% refund or full compensation for those sessions.",
            ],
            [
              "Gift courses",
              "Courses purchased as gifts are non-refundable but can be transferred to another person once.",
            ],
          ],
        },
      ],
    },
    {
      id: "5",
      title: "5. Attendance, Lateness & Absence (Student)",
      blocks: [
        {
          type: "blockquote",
          text: "Core principle: Punctuality honors the sanctity of Quran learning.",
        },
        {
          type: "table",
          headers: ["Rule", "Details"],
          rows: [
            ["Preparation", "Log in and be ready at least 5 minutes before session start."],
            [
              "Camera",
              "Camera must be on during the lesson (except valid excuse communicated in advance to admin). Preferred device: laptop/computer.",
            ],
            [
              "If student is late",
              "Session runs for the remaining time only – no automatic extension. Teacher may, at their discretion, give a few extra minutes for minor lateness (first time).",
            ],
            [
              "If student is absent without excuse",
              "The session is fully charged (no compensation or refund).",
            ],
            [
              "If student apologizes less than 2 hours before session",
              "Teacher decides whether to count the session as full or half. Forgiven once only.",
            ],
            [
              "Teacher waiting rule",
              "Teacher waits for half the session duration. Reminders after 3 & 8 minutes. If student does not join within half the time, teacher may end the session and record it as \"not held.\" Compensation is at teacher’s absolute discretion – student/parent cannot demand it.",
            ],
            [
              "Maximum make-up classes per month",
              "2 make-up sessions per month (except emergencies).",
            ],
          ],
        },
      ],
    },
    {
      id: "6",
      title: "6. Teacher Lateness, Leave & Replacement",
      blocks: [
        {
          type: "table",
          headers: ["Scenario", "Action"],
          rows: [
            [
              "Teacher late >5 min without excuse",
              "Student/parent must notify administration immediately via WhatsApp/email.",
            ],
            [
              "Teacher cancels due to emergency",
              "Session will be rescheduled at a mutually agreed time. No penalty for student.",
            ],
            [
              "Repeated teacher lateness",
              "Administration will investigate and may replace the teacher or provide compensation.",
            ],
            [
              "Teacher leaves the academy or takes an extended leave",
              "The Academy will assign another qualified teacher immediately to ensure continuity of learning without disruption.",
            ],
            [
              "No private communication with teacher",
              "Students and parents are strictly prohibited from communicating with the teacher privately outside the Academy’s official channels (platform, admin WhatsApp, group, email). Any academic or scheduling matters must go through administration.",
            ],
          ],
        },
      ],
    },
    {
      id: "7",
      title: "7. Public & Religious Holidays",
      blocks: [
        {
          type: "table",
          headers: ["Holiday", "Duration", "Make-up classes"],
          rows: [
            ["Eid Al-Fitr", "3 days", "No make-up – considered official rest days."],
            ["Eid Al-Adha", "4 days", "No make-up – considered official rest days."],
            [
              "National holidays (country-specific)",
              "As announced",
              "Classes may be rescheduled or compensated.",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Students planning personal holidays must notify administration at least 1 week in advance.",
        },
      ],
    },
    {
      id: "8",
      title: "8. Assessment, Reports & Feedback",
      blocks: [
        {
          type: "table",
          headers: ["Item", "Frequency", "Details"],
          rows: [
            [
              "Daily follow-up",
              "Each session",
              "Teacher records progress in memorization, recitation (Tajweed), and understanding.",
            ],
            [
              "Monthly report",
              "End of each month",
              "Sent to parent via email – covers academic & behavioral progress, strengths/weaknesses, and next month's plan.",
            ],
            [
              "Quarterly progress report",
              "Every 3 months",
              "Detailed report for students under 16. Includes recommendations.",
            ],
            ["Parent-teacher meeting", "Every 3 months", "Online meeting to discuss progress and answer questions."],
            [
              "Student feedback (for older students)",
              "Ongoing",
              "Anonymous surveys to improve teaching quality.",
            ],
            [
              "Complaints & inquiries",
              "Within 24 hours",
              "Reply guaranteed via official channels (WhatsApp admin, email).",
            ],
          ],
        },
      ],
    },
    {
      id: "9",
      title: "9. Code of Conduct & Ethics (Students & Parents)",
      blocks: [
        {
          type: "table",
          headers: ["Expectation", "Prohibited"],
          rows: [
            [
              "Honesty, respect, humility, good speech.",
              "Swearing, mockery, bullying, insults, raising voice.",
            ],
            [
              "Lowering the gaze – appropriate dress code (modest attire suitable for Quran class).",
              "Inappropriate clothing, distracting backgrounds.",
            ],
            [
              "Using official communication channels only.",
              "Direct contact with teacher outside academy platform, WhatsApp group, or admin email.",
            ],
          ],
        },
        { type: "paragraph", text: "Progressive penalties for violations:" },
        {
          type: "ordered",
          items: [
            "Verbal warning (supervisor).",
            "Written warning.",
            "Temporary suspension (1 week – 1 month).",
            "Permanent dismissal (repeated serious violations).",
          ],
        },
      ],
    },
    {
      id: "10",
      title: "10. Digital Safety & Privacy (Child Protection)",
      blocks: [
        {
          type: "table",
          headers: ["Policy", "Details"],
          rows: [
            [
              "Confidentiality",
              "All student/parent personal data (name, age, address, phone) is strictly confidential. Never shared with third parties without explicit written consent from the parent/student.",
            ],
            [
              "Data usage",
              "Used only for administrative and educational communication – never for marketing or commercial purposes unless explicit permission is given.",
            ],
            [
              "Teacher obligation",
              "Teachers are forbidden from saving student/parent contact info outside the official platform.",
            ],
            [
              "Session recording",
              "May be recorded for quality assurance and training – never published without explicit permission.",
            ],
            [
              "Right to access & deletion",
              "Parent may request a copy of their child’s data or request permanent deletion from our system at any time.",
            ],
            [
              "Data retention after withdrawal",
              "Personal data is retained for 12 months then permanently deleted.",
            ],
            [
              "Child online safety",
              "Ongoing awareness for students: never share passwords, full name, address, or accept unknown friend requests. Parental supervision encouraged.",
            ],
          ],
        },
      ],
    },
    {
      id: "11",
      title: "11. Emergency & Technical Failure (Power/Internet Outage)",
      blocks: [
        {
          type: "table",
          headers: ["Duration", "Action"],
          rows: [
            ["15 minutes", "Wait and resume the session if possible."],
            ["15 minutes", "Session canceled for that day – compensated later at a mutually agreed time."],
            [
              "Repeated outages from one side",
              "Academy may require the responsible party (student or teacher) to resolve the issue; otherwise, contract may be reviewed.",
            ],
            [
              "Force majeure (death, severe illness)",
              "Handled with full human flexibility – sessions compensated regardless of notice.",
            ],
          ],
        },
      ],
    },
    {
      id: "12",
      title: "12. Gifts, Discounts & Community Support",
      blocks: [
        {
          type: "table",
          headers: ["Program", "Description"],
          rows: [
            [
              "Gift a course",
              'You can purchase a course for a friend or family member. Contact admin for a "Gift Voucher."',
            ],
            [
              "Orphan support",
              "50% fee reduction or free enrollment (subject to verification – kept confidential).",
            ],
            ["Low-income families", "Affordable flexible payment plans available."],
            [
              "New Muslims (Reverts)",
              "Significant discount – please contact administration privately.",
            ],
            [
              "Referral reward",
              "The referring family receives a 20% discount for three full months when they refer a new full-paying student who completes at least one month of enrollment.",
            ],
          ],
        },
      ],
    },
    {
      id: "13",
      title: "13. Intellectual Property & Recording",
      blocks: [
        {
          type: "list",
          items: [
            "All curriculum materials, lesson plans, and recorded sessions are the property of Nibras Network.",
            "Students/parents may not share, reproduce, or redistribute any academy content without written permission.",
            "Personal session recordings (by parents) are allowed for revision only – may not be posted online.",
          ],
        },
      ],
    },
    {
      id: "14",
      title: "14. Termination & Leaving the Academy",
      blocks: [
        {
          type: "table",
          headers: ["Action", "Procedure"],
          rows: [
            [
              "Parent wishes to leave",
              "Email or WhatsApp admin at least 5 days before month-end. No questions asked.",
            ],
            [
              "Academy terminates student",
              "Due to repeated serious policy violations (after warnings). Remaining balance (if any) is refunded within 14 days.",
            ],
            [
              "Teacher dismissal",
              "For gross misconduct (e.g., sharing private data, consistent neglect).",
            ],
          ],
        },
      ],
    },
    {
      id: "15",
      title: "15. Limitation of Liability",
      blocks: [
        {
          type: "paragraph",
          text: "Nibras Network is not liable for:",
        },
        {
          type: "list",
          items: [
            "Technical failures beyond our control (global internet outages, platform downtime).",
            "Student’s failure to complete assignments or retain information.",
            "Indirect damages (loss of time, etc.) beyond the value of the paid tuition for the affected sessions.",
          ],
        },
      ],
    },
    {
      id: "16",
      title: "16. Governing Law & Dispute Resolution",
      blocks: [
        {
          type: "list",
          items: [
            "These terms are governed by the laws of Egypt (where the academy is headquartered).",
            "Any dispute will first be attempted to be resolved amicably through direct communication.",
            "If unresolved, the dispute may be referred to a mutually agreed Islamic arbitration or local small claims court (as per applicable law).",
          ],
        },
      ],
    },
    {
      id: "17",
      title: "17. Contact Information (Official Channels)",
      blocks: [
        {
          type: "blockquote",
          text: "⚠️ Important: The Academy does not recognize any communication outside these official channels.",
        },
        {
          type: "table",
          headers: ["Channel", "Details"],
          linkifySecondColumn: true,
          rows: [
            ["Admin WhatsApp", "+201099493640"],
            ["Email", "nibrasnetwork55@gmail.com"],
            ["Website", "www.nibrasnetwork.com"],
            ["Social media", "To be announced – check website"],
          ],
        },
        {
          type: "paragraph",
          text: "For emergencies during a session: WhatsApp admin immediately.",
        },
      ],
    },
  ],
  promiseTitle: "✨ Our Promise to You",
  promiseBody: [
    "At Nibras Network – The Qur'an Light, we don't just teach Quran. We nurture a generation that lives by it. Every policy above is designed to protect your child, respect your time, and maximize blessings in this world and the next.",
    "May Allah accept our efforts and make us among those who recite and act upon His Book.",
  ],
  teamLine: "Nibras Network Team",
};

const ar: PoliciesPageCopy = {
  heroTitle: "📜 شبكة نبراس – نور القرآن",
  heroSubtitle: "السياسات الأكاديمية والإدارية (الشروط والأحكام الرسمية)",
  sections: [
    {
      id: "1",
      title: "١. الترحيب والرسالة",
      blocks: [
        {
          type: "paragraph",
          text: 'مرحبًا بكم في شبكة نبراس («نور القرآن»). نحن أكاديمية عن بُعد متخصصة في تعليم القرآن الكريم واللغة العربية والدراسات الإسلامية للأطفال والكبار. تشكل هذه الشروط والأحكام اتفاقًا ملزمًا بينكم (بصفة «ولي الأمر/الطالب») وبين الأكاديمية.',
        },
        {
          type: "paragraph",
          text: "قيمتنا الجوهرية: التقوى في السر والعلن، والإخلاص في طلب العلم وتعليمه.",
        },
      ],
    },
    {
      id: "2",
      title: "٢. التسجيل والالتزام",
      blocks: [
        {
          type: "list",
          items: [
            "بالتسجيل يوافق ولي الأمر/الوصي على جميع السياسات أدناه.",
            "يُوقَّع ملخص اتفاقية الطالب وولي الأمر (صفحة واحدة) إلكترونيًا قبل أول حصة.",
            "تحتفظ الأكاديمية بحق تحديث هذه السياسات؛ وتسري التحديثات من لحظة نشرها على موقعنا.",
          ],
        },
      ],
    },
    {
      id: "3",
      title: "٣. طرق الدفع والاشتراك",
      blocks: [
        {
          type: "table",
          headers: ["البند", "السياسة"],
          rows: [
            [
              "طرق الدفع",
              "دفع آمن عبر الإنترنت ببطاقة ائتمان، أو تحويل بنكي، أو محافظ رقمية (التفاصيل تُقدَّم عند التسجيل).",
            ],
            ["دورة الفوترة", "اشتراك شهري متكرر – يُدفع مقدمًا. يتجدد تلقائيًا في نفس اليوم من كل شهر."],
            [
              "تغيير الخطة",
              "يمكنكم زيادة/تقليل الساعات الأسبوعية بإخطار الإدارة قبل نهاية الشهر بـ ٥ أيام.",
            ],
            [
              "باقات خاصة",
              "• الأيتام: خصم ٥٠٪ من الرسوم أو مجانية (حسب الحالة).\n• ذوو الدخل المحدود: خطط دفع مرنة بأسعار مناسبة.\n• المسلمون الجدد: خصم كبير – تواصلوا مع الإدارة للتفاصيل.",
            ],
          ],
        },
      ],
    },
    {
      id: "4",
      title: "٤. سياسة الاسترداد والانسحاب",
      blocks: [
        {
          type: "table",
          headers: ["السيناريو", "السياسة"],
          rows: [
            [
              "إشعار بالانسحاب",
              "راسلوا الإدارة بالبريد أو واتساب قبل نهاية الشهر بـ ٥ أيام عمل على الأقل. لا تُستحق رسوم الشهر التالي.",
            ],
            [
              "انسحاب مفاجئ (خلال الشهر)",
              "تُحسب الحصص التي حضرها الطالب فقط. يُسترد الرصيد المتبقي بعد خصم رسوم إدارية بسيطة (≤١٠٪).",
            ],
            [
              "رسوم غير قابلة للاسترداد",
              "رسوم التقييم الأولي/التسجيل لا تُسترد بعد بدء الحصص.",
            ],
            [
              "غياب بسبب خطأ الأكاديمية",
              "استرداد ١٠٠٪ أو تعويض كامل لتلك الحصص.",
            ],
            [
              "دورات هدية",
              "الدورات المشتراة كهدية غير قابلة للاسترداد، ويمكن نقلها لشخص آخر مرة واحدة.",
            ],
          ],
        },
      ],
    },
    {
      id: "5",
      title: "٥. الحضور والتأخير والغياب (الطالب)",
      blocks: [
        {
          type: "blockquote",
          text: "المبدأ الأساسي: الالتزام بالمواعيد يُكرِّم حرمة تعلُّم القرآن.",
        },
        {
          type: "table",
          headers: ["القاعدة", "التفاصيل"],
          rows: [
            ["الاستعداد", "تسجيل الدخول والجاهزية قبل بدء الحصة بـ ٥ دقائق على الأقل."],
            [
              "الكاميرا",
              "يجب تشغيل الكاميرا أثناء الدرس (إلا بعذر مسبق مُبلَّغ للإدارة). الجهاز المفضّل: حاسوب محمول/مكتبي.",
            ],
            [
              "تأخر الطالب",
              "تسري الحصة للوقت المتبقي فقط – دون تمديد تلقائي. للمعلّم تقدير إضافة دقائق للتأخير البسيط (أول مرة).",
            ],
            [
              "غياب الطالب بلا عذر",
              "تُحسب الحصة كاملة (لا تعويض ولا استرداد).",
            ],
            [
              "اعتذار قبل أقل من ساعتين من الحصة",
              "المعلّم يقرر احتساب الحصة كاملة أو نصف. يُسامح مرة واحدة فقط.",
            ],
            [
              "قاعدة انتظار المعلّم",
              "ينتظر المعلّم نصف مدة الحصة. تذكير بعد ٣ و٨ دقائق. إن لم ينضم الطالب خلال النصف، يُنهي المعلّم الحصة ويُسجَّل «لم تُعقد». التعويض وفق تقدير المعلّم المطلق – لا يجوز للطالب/ولي الأمر المطالبة به.",
            ],
            ["أقصى حصص تعويض شهريًا", "حصتان تعويض شهريًا (ما عدا الطوارئ)."],
          ],
        },
      ],
    },
    {
      id: "6",
      title: "٦. تأخر المعلّم، الإجازة، والاستبدال",
      blocks: [
        {
          type: "table",
          headers: ["السيناريو", "الإجراء"],
          rows: [
            [
              "تأخر المعلّم أكثر من ٥ دقائق بلا عذر",
              "يُشعر ولي الأمر/الطالب الإدارة فورًا عبر واتساب/البريد.",
            ],
            [
              "إلغاء من المعلّم لطارئ",
              "تُعاد جدولة الحصة في وقت يتفق عليه الطرفان. دون عقوبة على الطالب.",
            ],
            [
              "تكرار تأخر المعلّم",
              "تُحقق الإدارة وقد تستبدل المعلّم أو تقدّم تعويضًا.",
            ],
            [
              "مغادرة المعلّم الأكاديمية أو إجازة طويلة",
              "تُعيّن الأكاديمية معلّمًا مؤهلًا فورًا لضمان استمرار التعلّم دون انقطاع.",
            ],
            [
              "ممنوع التواصل الخاص مع المعلّم",
              "يُمنع على الطلاب وأولياء الأمور التواصل مع المعلّم خارج القنوات الرسمية (المنصة، واتساب الإدارة، المجموعة، البريد). كل الأمور الأكاديمية أو الجدولة تمر عبر الإدارة.",
            ],
          ],
        },
      ],
    },
    {
      id: "7",
      title: "٧. العطل الرسمية والدينية",
      blocks: [
        {
          type: "table",
          headers: ["العطلة", "المدة", "حصص تعويض"],
          rows: [
            ["عيد الفطر", "٣ أيام", "لا تعويض – أيام راحة رسمية."],
            ["عيد الأضحى", "٤ أيام", "لا تعويض – أيام راحة رسمية."],
            [
              "العطل الوطنية (حسب البلد)",
              "حسب الإعلان",
              "قد تُعاد جدولة الحصص أو تُعوَّض.",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "من يخطط لإجازة شخصية يُشعر الإدارة قبل أسبوع على الأقل.",
        },
      ],
    },
    {
      id: "8",
      title: "٨. التقييم والتقارير والملاحظات",
      blocks: [
        {
          type: "table",
          headers: ["البند", "الدورية", "التفاصيل"],
          rows: [
            [
              "متابعة يومية",
              "كل حصة",
              "يسجّل المعلّم التقدم في الحفظ والتلاوة (التجويد) والفهم.",
            ],
            [
              "تقرير شهري",
              "نهاية كل شهر",
              "يُرسل لولي الأمر بالبريد – أكاديمي وسلوكي، نقاط القوة/الضعف، وخطة الشهر التالي.",
            ],
            [
              "تقرير تقدم ربع سنوي",
              "كل ٣ أشهر",
              "تقرير مفصّل لمن هم دون ١٦ عامًا، مع توصيات.",
            ],
            ["لقاء ولي أمر–معلّم", "كل ٣ أشهر", "اجتماع عبر الإنترنت لمناقشة التقدم والإجابة عن الأسئلة."],
            [
              "ملاحظات الطلاب (للكبار)",
              "مستمر",
              "استبيانات مجهولة لتحسين الجودة.",
            ],
            [
              "شكاوى واستفسارات",
              "خلال ٢٤ ساعة",
              "رد مضمون عبر القنوات الرسمية (واتساب الإدارة، البريد).",
            ],
          ],
        },
      ],
    },
    {
      id: "9",
      title: "٩. قواعد السلوك والأخلاق (الطلاب وأولياء الأمور)",
      blocks: [
        {
          type: "table",
          headers: ["المتوقع", "الممنوع"],
          rows: [
            ["الصدق والاحترام والتواضع وحسن الخلق.", "السب والاستهزاء والتنمّر والإهانات ورفع الصوت."],
            [
              "غض البصر – لباس محتشم يناسب حصة القرآن.",
              "ملابس غير لائقة أو خلفيات مشتّتة.",
            ],
            [
              "استخدام القنوات الرسمية فقط.",
              "التواصل المباشر مع المعلّم خارج المنصة أو مجموعة الواتساب أو بريد الإدارة.",
            ],
          ],
        },
        { type: "paragraph", text: "عقوبات تدريجية للمخالفات:" },
        {
          type: "ordered",
          items: [
            "تحذير شفهي (المشرف).",
            "تحذير كتابي.",
            "إيقاف مؤقت (أسبوع – شهر).",
            "فصل نهائي (تكرار مخالفات جسيمة).",
          ],
        },
      ],
    },
    {
      id: "10",
      title: "١٠. السلامة الرقمية والخصوصية (حماية الطفل)",
      blocks: [
        {
          type: "table",
          headers: ["السياسة", "التفاصيل"],
          rows: [
            [
              "السرية",
              "كل بيانات الطالب/ولي الأمر (الاسم، العمر، العنوان، الهاتف) سرية تمامًا. لا تُشارك مع أطراف ثالثة دون موافقة خطية صريحة.",
            ],
            [
              "استخدام البيانات",
              "للتواصل الإداري والتعليمي فقط – لا للتسويق أو التجارة دون إذن صريح.",
            ],
            [
              "التزام المعلّم",
              "يُمنع على المعلّمين حفظ بيانات التواصل خارج المنصة الرسمية.",
            ],
            [
              "تسجيل الحصص",
              "قد تُسجَّل لضمان الجودة والتدريب – لا تُنشر دون إذن صريح.",
            ],
            [
              "حق الاطلاع والحذف",
              "يجوز لولي الأمر طلب نسخة من بيانات ابنه/ابنته أو طلب الحذف الدائم من نظامنا في أي وقت.",
            ],
            [
              "الاحتفاظ بالبيانات بعد الانسحاب",
              "تُحفظ البيانات ١٢ شهرًا ثم تُحذف نهائيًا.",
            ],
            [
              "سلامة الطفل على الإنترنت",
              "توعية مستمرة: لا تشارك كلمة المرور أو الاسم الكامل أو العنوان، ولا تقبل طلبات من مجهولين. يُشجّع إشراف الوالدين.",
            ],
          ],
        },
      ],
    },
    {
      id: "11",
      title: "١١. الطوارئ والأعطال التقنية (كهرباء/إنترنت)",
      blocks: [
        {
          type: "table",
          headers: ["المدة", "الإجراء"],
          rows: [
            ["حتى ١٥ دقيقة", "الانتظار واستئناف الحصة إن أمكن."],
            ["أكثر من ١٥ دقيقة", "تُلغى الحصة ذلك اليوم – تُعوَّض لاحقًا في وقت يتفق عليه الطرفان."],
            [
              "تكرار الانقطاع من طرف واحد",
              "قد تطلب الأكاديمية من الطرف المعني (طالب أو معلّم) معالجة المشكلة؛ وإلا تُراجع العلاقة التعاقدية.",
            ],
            [
              "قوة قاهرة (وفاة، مرض شديد)",
              "يُعامل بمرونة إنسانية كاملة – تُعوَّض الحصص بغضّ النظر عن الإشعار.",
            ],
          ],
        },
      ],
    },
    {
      id: "12",
      title: "١٢. الهدايا والخصومات ودعم المجتمع",
      blocks: [
        {
          type: "table",
          headers: ["البرنامج", "الوصف"],
          rows: [
            [
              "إهداء دورة",
              "يمكن شراء دورة لصديق أو فرد من العائلة. تواصلوا مع الإدارة لـ«قسيمة هدية».",
            ],
            [
              "دعم الأيتام",
              "خصم ٥٠٪ أو تسجيل مجاني (بعد التحقق السري).",
            ],
            ["ذوو الدخل المحدود", "خطط دفع مرنة بأسعار مناسبة."],
            [
              "المسلمون الجدد",
              "خصم كبير – راسلوا الإدارة بخصوصية.",
            ],
            [
              "مكافأة الإحالة",
              "يحصل الطرف المحيل على خصم ٢٠٪ لثلاثة أشهر كاملة عند إحالة طالب جديد يدفع الرسوم كاملة ويكمل شهر تسجيل على الأقل.",
            ],
          ],
        },
      ],
    },
    {
      id: "13",
      title: "١٣. الملكية الفكرية والتسجيل",
      blocks: [
        {
          type: "list",
          items: [
            "جميع المواد والخطط والجلسات المسجّلة ملك لشبكة نبراس.",
            "لا يجوز للطلاب/أولياء الأمور نسخ أو إعادة نشر محتوى الأكاديمية دون إذن كتابي.",
            "يُسمح بتسجيل الحصص الشخصي (من الوالد) للمراجعة فقط – دون نشره على الإنترنت.",
          ],
        },
      ],
    },
    {
      id: "14",
      title: "١٤. إنهاء العلاقة ومغادرة الأكاديمية",
      blocks: [
        {
          type: "table",
          headers: ["الإجراء", "الآلية"],
          rows: [
            [
              "رغبة ولي الأمر في المغادرة",
              "راسلوا الإدارة بالبريد أو واتساب قبل نهاية الشهر بـ ٥ أيام. دون أسئلة.",
            ],
            [
              "فصل الأكاديمية للطالب",
              "لتكرار مخالفات جسيمة (بعد التحذيرات). يُسترد الرصيد المتبقي (إن وجد) خلال ١٤ يومًا.",
            ],
            [
              "فصل المعلّم",
              "لسلوك فادح (مثل تسريب بيانات خاصة، إهمال متكرر).",
            ],
          ],
        },
      ],
    },
    {
      id: "15",
      title: "١٥. حدود المسؤولية",
      blocks: [
        {
          type: "paragraph",
          text: "لا تتحمل شبكة نبراس مسؤولية:",
        },
        {
          type: "list",
          items: [
            "أعطال تقنية خارج إرادتنا (انقطاع الإنترنت العالمي، توقف المنصة).",
            "تقصير الطالب في الواجبات أو استيعاب المعلومات.",
            "أضرار غير مباشرة (ضياع وقت، إلخ) تتجاوز قيمة الرسوم المدفوعة للحصص المتأثرة.",
          ],
        },
      ],
    },
    {
      id: "16",
      title: "١٦. القانون الواجب التطبيق وتسوية المنازعات",
      blocks: [
        {
          type: "list",
          items: [
            "تخضع هذه الشروط لقوانين جمهورية مصر العربية (مقر الأكاديمية).",
            "يُبذل جهد حل أي نزاع وديًا عبر التواصل المباشر أولًا.",
            "إن تعذّر الحل، يُحال النزاع إلى تحكيم إسلامي يتفق عليه الطرفان أو محكمة المطالبات البسيطة المحلية بحسب القانون.",
          ],
        },
      ],
    },
    {
      id: "17",
      title: "١٧. معلومات التواصل (القنوات الرسمية)",
      blocks: [
        {
          type: "blockquote",
          text: "⚠️ مهم: لا تعترف الأكاديمية بأي تواصل خارج هذه القنوات الرسمية.",
        },
        {
          type: "table",
          headers: ["القناة", "التفاصيل"],
          linkifySecondColumn: true,
          rows: [
            ["واتساب الإدارة", "+201099493640"],
            ["البريد", "nibrasnetwork55@gmail.com"],
            ["الموقع", "www.nibrasnetwork.com"],
            ["وسائل التواصل", "تُعلَن لاحقًا – راجعوا الموقع"],
          ],
        },
        {
          type: "paragraph",
          text: "في حالات الطوارئ أثناء الحصة: راسلوا إدارة الواتساب فورًا.",
        },
      ],
    },
  ],
  promiseTitle: "✨ وعدنا لكم",
  promiseBody: [
    "في شبكة نبراس – نور القرآن، لا نعلّم القرآن فقط. نربّي جيلًا يعيش به. صُممت كل سياسة أعلاه لحماية ابنكم، واحترام وقتكم، ولزيادة البركة في الدارين.",
    "نسأل الله أن يتقبل جهدنا وأن يجعلنا ممن يتلون كتابه ويعملون به.",
  ],
  teamLine: "فريق شبكة نبراس",
};

export function getPoliciesPage(locale: Locale): PoliciesPageCopy {
  return locale === "ar" ? ar : en;
}
