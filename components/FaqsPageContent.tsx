"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  ChevronDown,
  GraduationCap,
  HelpCircle,
  Laptop,
  MessageCircle,
  School,
  Star,
  Users,
} from "lucide-react";
import { useI18n } from "@/components/LocaleProvider";

/* ─── Types ──────────────────────────────────────────────────────────── */
interface FaqItem {
  q: string;
  a: string | React.ReactNode;
  qAr: string;
  aAr: string | React.ReactNode;
}

interface FaqCategory {
  id: string;
  label: string;
  labelAr: string;
  icon: React.ReactNode;
  color: string;
  items: FaqItem[];
}

/* ─── Data ───────────────────────────────────────────────────────────── */
const FAQ_DATA: FaqCategory[] = [
  {
    id: "general",
    label: "General Questions",
    labelAr: "أسئلة عامة",
    icon: <HelpCircle size={18} />,
    color: "#254A3A",
    items: [
      {
        q: "What is Nibras Network?",
        qAr: "ما هي شبكة نبراس؟",
        a: "Nibras Network is a professional online Islamic academy dedicated to helping children, adults, and families worldwide learn the Quran, Arabic, and Islamic Studies through personalized live classes with qualified teachers. Our mission is to make authentic Islamic education accessible, engaging, and effective for every learner.",
        aAr: "شبكة نبراس أكاديمية إسلامية احترافية عبر الإنترنت، مكرّسة لمساعدة الأطفال والبالغين والعائلات حول العالم على تعلّم القرآن الكريم واللغة العربية والدراسات الإسلامية من خلال حصص حية شخصية مع معلمين مؤهلين. مهمتنا جعل التعليم الإسلامي الأصيل متاحًا وممتعًا وفعّالًا لكل متعلّم.",
      },
      {
        q: "Who can join Nibras Network?",
        qAr: "من يمكنه الانضمام إلى شبكة نبراس؟",
        a: "Everyone is welcome! We teach children, teenagers, adults, families, and new Muslims from all backgrounds and experience levels.",
        aAr: "الجميع مرحّب بهم! نُدرِّس الأطفال والمراهقين والبالغين والعائلات والمسلمين الجدد من جميع الخلفيات ومستويات الخبرة.",
      },
      {
        q: "Do I need any previous knowledge?",
        qAr: "هل أحتاج إلى معرفة مسبقة؟",
        a: "Not at all. Whether you've never read Arabic before or you're preparing for advanced Quran studies, we'll create a personalized learning plan based on your current level.",
        aAr: "لا على الإطلاق. سواء لم تقرأ العربية من قبل أو تستعدّ لدراسات قرآنية متقدّمة، سنُعِدّ لك خطة تعليمية شخصية بناءً على مستواك الحالي.",
      },
      {
        q: "Which countries do you teach?",
        qAr: "في أي دول تُدرِّسون؟",
        a: "We proudly teach students from around the world and schedule lessons according to your local time zone.",
        aAr: "نُدرِّس بفخر طلابًا من جميع أنحاء العالم، ونُجدوِل الحصص وفق توقيتك المحلي.",
      },
      {
        q: "Why choose Nibras Network?",
        qAr: "لماذا تختار شبكة نبراس؟",
        a: "Because we combine qualified teachers, personalized learning plans, flexible scheduling, continuous progress tracking, and a supportive Islamic learning environment designed specifically for non-Arabic speakers.",
        aAr: "لأننا نجمع بين معلمين مؤهلين وخطط تعليمية شخصية وجداول مرنة ومتابعة مستمرة للتقدم وبيئة تعليمية إسلامية داعمة مصمّمة خصيصًا لغير الناطقين بالعربية.",
      },
      {
        q: "What makes Nibras Network different from other academies?",
        qAr: "ما الذي يميّز شبكة نبراس عن غيرها من الأكاديميات؟",
        a: "Nibras Network offers more than online classes — we provide a complete learning journey. Every student receives a personalized study plan, is matched with a qualified teacher, follows a structured curriculum, and benefits from continuous progress tracking.",
        aAr: "شبكة نبراس تقدّم أكثر من مجرد دروس عبر الإنترنت — نحن نوفّر رحلة تعليمية متكاملة. كل طالب يحصل على خطة دراسية شخصية، ويُوجَّه إلى معلم مؤهل، ويتبع منهجًا منظّمًا، ويستفيد من المتابعة المستمرة لتقدّمه.",
      },
      {
        q: "How quickly can I start?",
        qAr: "كم من الوقت يستغرق الأمر حتى أبدأ؟",
        a: "You can begin your learning journey almost immediately. After booking your free assessment, we'll evaluate your current level, recommend the most suitable learning pathway, match you with the right teacher, and schedule your first lesson at a time that works for you.",
        aAr: "يمكنك بدء رحلتك التعليمية في أقرب وقت ممكن. بعد حجز تقييمك المجاني، سنُقيِّم مستواك الحالي ونوصي بأنسب مسار تعليمي ونُطابقك مع المعلم المناسب ونُجدوِل درسك الأول في الوقت الذي يناسبك.",
      },
      {
        q: "Why should I start now instead of later?",
        qAr: "لماذا يجب أن أبدأ الآن وليس لاحقًا؟",
        a: "Every day you begin is another step closer to building a lifelong relationship with the Quran. Starting today means gaining consistent guidance, steady progress, and the confidence that comes from learning with experienced teachers who support you every step of the way.",
        aAr: "كل يوم تبدأ فيه هو خطوة أقرب نحو بناء علاقة دائمة مع القرآن الكريم. البدء اليوم يعني الحصول على توجيه متواصل وتقدّم مستمر والثقة التي تأتي من التعلّم مع معلمين متمرسين يدعمونك في كل خطوة.",
      },
      {
        q: "What is your ultimate goal for every student?",
        qAr: "ما هو هدفكم النهائي لكل طالب؟",
        a: "Our goal is not simply to complete lessons — it's to help every student develop a lasting connection with the Quran, the Arabic language, and authentic Islamic knowledge through a structured, enjoyable, and inspiring learning journey.",
        aAr: "هدفنا ليس مجرد إتمام الدروس — بل مساعدة كل طالب على تطوير ارتباط دائم بالقرآن الكريم واللغة العربية والمعرفة الإسلامية الأصيلة من خلال رحلة تعليمية منظّمة وممتعة وملهِمة.",
      },
    ],
  },
  {
    id: "courses",
    label: "Courses & Learning",
    labelAr: "الدورات والتعلم",
    icon: <BookOpen size={18} />,
    color: "#B8860B",
    items: [
      {
        q: "What courses do you offer?",
        qAr: "ما هي الدورات التي تُقدِّمونها؟",
        a: "Our academy offers: Noorani Qaida, Quran Reading, Tajweed, Quran Memorization (Hifz), Quran Recitation, Quran Tafsir, Quran with Translation, Arabic for Beginners, Quranic Arabic, Conversational Arabic, Modern Standard Arabic, Islamic Studies, Aqeedah, Fiqh, Hadith, Seerah, New Muslims Program, and Ijazah Preparation.",
        aAr: "تقدّم أكاديميتنا: القاعدة النورانية، قراءة القرآن، التجويد، حفظ القرآن (الحفظ)، تلاوة القرآن، تفسير القرآن، القرآن مع الترجمة، العربية للمبتدئين، العربية القرآنية، العربية المحادثة، الفصحى، الدراسات الإسلامية، العقيدة، الفقه، الحديث، السيرة النبوية، برنامج المسلمين الجدد، والتحضير للإجازة.",
      },
      {
        q: "I am a complete beginner. Can I join?",
        qAr: "أنا مبتدئ تمامًا. هل يمكنني الانضمام؟",
        a: "Absolutely! Many of our students begin with zero Arabic knowledge. We start step-by-step until you become confident in reading and understanding.",
        aAr: "بالتأكيد! كثير من طلابنا يبدؤون دون أي معرفة بالعربية. نبدأ خطوة بخطوة حتى تصبح واثقًا في القراءة والفهم.",
      },
      {
        q: "Which course should I start with?",
        qAr: "بأي دورة يجب أن أبدأ؟",
        a: "After your free assessment, we'll recommend the most suitable course based on your age, experience, goals, and current level.",
        aAr: "بعد تقييمك المجاني، سنوصي بالدورة الأنسب بناءً على عمرك وخبرتك وأهدافك ومستواك الحالي.",
      },
      {
        q: "Can I study more than one subject?",
        qAr: "هل يمكنني دراسة أكثر من مادة؟",
        a: "Yes. Many students combine Quran reading with Arabic or Islamic Studies for faster overall progress.",
        aAr: "نعم. كثير من الطلاب يجمعون بين قراءة القرآن والعربية أو الدراسات الإسلامية لتحقيق تقدّم أسرع.",
      },
      {
        q: "Is the curriculum personalized?",
        qAr: "هل المنهج الدراسي شخصي؟",
        a: "Yes. Every student follows a customized learning pathway designed around their goals, pace, and availability.",
        aAr: "نعم. كل طالب يتبع مسارًا تعليميًا مخصصًا مصمّمًا حول أهدافه وإيقاعه ووقت فراغه.",
      },
      {
        q: "Can I switch courses later?",
        qAr: "هل يمكنني تغيير الدورة لاحقًا؟",
        a: "Certainly. As your skills develop, we can update your learning plan at any time.",
        aAr: "بالتأكيد. مع تطور مهاراتك، يمكننا تحديث خطتك التعليمية في أي وقت.",
      },
      {
        q: "Is there a structured learning pathway?",
        qAr: "هل يوجد مسار تعليمي منظّم؟",
        a: "Yes. Every student follows a carefully designed learning pathway with clear milestones, regular assessments, and measurable goals.",
        aAr: "نعم. كل طالب يتبع مسارًا تعليميًا مصمّمًا بعناية مع معالم واضحة وتقييمات منتظمة وأهداف قابلة للقياس.",
      },
      {
        q: "What happens after completing a course?",
        qAr: "ماذا يحدث بعد إتمام دورة؟",
        a: "After completing a course, your teacher will assess your progress and recommend the next stage of your learning journey.",
        aAr: "بعد إتمام الدورة، سيُقيِّم معلمك تقدّمك ويوصي بالمرحلة التالية في رحلتك التعليمية.",
      },
      {
        q: "How long does it take to read the Quran fluently?",
        qAr: "كم يستغرق الأمر لقراءة القرآن بطلاقة؟",
        a: "Every student's journey is unique. With regular lessons and personal practice, many beginners achieve confident Quran reading within several months.",
        aAr: "رحلة كل طالب فريدة. مع الحصص المنتظمة والممارسة الشخصية، يحقق كثير من المبتدئين قراءة قرآنية واثقة في غضون أشهر.",
      },
      {
        q: "Will I learn to understand the Quran, not just read it?",
        qAr: "هل سأتعلم فهم القرآن وليس قراءته فحسب؟",
        a: "Yes. Depending on your chosen pathway, you can also study Quranic Arabic, Tafsir, vocabulary, and translation.",
        aAr: "نعم. بحسب المسار الذي تختاره، يمكنك أيضًا دراسة العربية القرآنية والتفسير والمفردات والترجمة.",
      },
    ],
  },
  {
    id: "teachers",
    label: "Teachers",
    labelAr: "المعلمون",
    icon: <GraduationCap size={18} />,
    color: "#254A3A",
    items: [
      {
        q: "Are your teachers qualified?",
        qAr: "هل معلموكم مؤهلون؟",
        a: "Yes. Our male and female teachers are carefully selected based on their Islamic knowledge, teaching experience, communication skills, and ability to teach non-Arabic speakers effectively.",
        aAr: "نعم. يُختار معلمونا ذكورًا وإناثًا بعناية بناءً على معرفتهم الإسلامية وخبرتهم التدريسية ومهاراتهم التواصلية وقدرتهم على تعليم غير الناطقين بالعربية بفعالية.",
      },
      {
        q: "Can I choose a male or female teacher?",
        qAr: "هل يمكنني اختيار معلم أو معلمة؟",
        a: "Yes. Students may request a male or female teacher according to their preference.",
        aAr: "نعم. يمكن للطلاب طلب معلم أو معلمة وفق تفضيلاتهم.",
      },
      {
        q: "Can I change my teacher?",
        qAr: "هل يمكنني تغيير معلمي؟",
        a: "Yes. Your comfort and learning experience matter. If needed, we'll happily match you with another teacher.",
        aAr: "نعم. راحتك وتجربتك التعليمية مهمتان. إذا لزم الأمر، سنسعد بمطابقتك مع معلم آخر.",
      },
      {
        q: "Do your teachers speak English?",
        qAr: "هل يتحدث معلموكم الإنجليزية؟",
        a: "Yes. Our teachers communicate clearly in English and understand the challenges faced by non-Arabic speakers.",
        aAr: "نعم. يتواصل معلمونا بوضوح باللغة الإنجليزية ويفهمون التحديات التي يواجهها غير الناطقين بالعربية.",
      },
      {
        q: "How do you match students with teachers?",
        qAr: "كيف تُطابقون الطلاب مع المعلمين؟",
        a: "We carefully match each student based on age, current level, learning goals, preferred teaching style, language proficiency, schedule, and teacher availability.",
        aAr: "نُطابق كل طالب بعناية بناءً على العمر والمستوى الحالي والأهداف التعليمية وأسلوب التدريس المفضّل وإتقان اللغة والجدول الزمني وتوفّر المعلم.",
      },
    ],
  },
  {
    id: "classes",
    label: "Classes & Scheduling",
    labelAr: "الحصص والجدول الزمني",
    icon: <School size={18} />,
    color: "#B8860B",
    items: [
      {
        q: "Are classes live or recorded?",
        qAr: "هل الحصص مباشرة أم مسجّلة؟",
        a: "All classes are live, interactive, one-to-one sessions with your teacher for maximum engagement and personalized feedback.",
        aAr: "جميع الحصص مباشرة وتفاعلية وفردية مع معلمك لتحقيق أقصى قدر من التفاعل والتغذية الراجعة الشخصية.",
      },
      {
        q: "How long is each lesson?",
        qAr: "كم تستغرق كل حصة؟",
        a: "Lesson durations vary depending on your package and learning plan.",
        aAr: "تتفاوت مدة الحصص بحسب الباقة وخطة التعلم.",
      },
      {
        q: "Can I choose my schedule?",
        qAr: "هل يمكنني اختيار جدولي الزمني؟",
        a: "Yes. We offer flexible scheduling to fit your routine and time zone.",
        aAr: "نعم. نقدّم جداول مرنة تتناسب مع روتينك ومنطقتك الزمنية.",
      },
      {
        q: "What happens if I miss a lesson?",
        qAr: "ماذا يحدث إذا فاتتني حصة؟",
        a: "Simply inform us in advance whenever possible. We'll work with you to reschedule according to our attendance policy.",
        aAr: "أخبرنا مسبقًا كلما أمكن ذلك. سنعمل معك لإعادة الجدولة وفق سياسة الحضور لدينا.",
      },
      {
        q: "Which platform do you use?",
        qAr: "ما المنصة التي تستخدمونها؟",
        a: "Lessons are conducted online using reliable meeting platforms that provide high-quality audio and screen sharing.",
        aAr: "تُعقد الحصص عبر الإنترنت باستخدام منصات اجتماع موثوقة توفّر صوتًا عالي الجودة ومشاركة الشاشة.",
      },
      {
        q: "Can I study as a busy professional?",
        qAr: "هل يمكنني الدراسة وأنا محترف مشغول؟",
        a: "Absolutely. We offer flexible lesson times across multiple time zones, allowing you to learn consistently without disrupting your work or family commitments.",
        aAr: "بالتأكيد. نقدّم أوقات حصص مرنة عبر مناطق زمنية متعددة، مما يتيح لك التعلّم باستمرار دون تعطيل التزاماتك المهنية أو الأسرية.",
      },
      {
        q: "Can I memorize the Quran while working full-time?",
        qAr: "هل يمكنني حفظ القرآن وأنا أعمل بدوام كامل؟",
        a: "Yes. We create realistic memorization plans that fit your lifestyle, helping you make steady progress without feeling overwhelmed.",
        aAr: "نعم. نضع خططًا للحفظ واقعية تتناسب مع أسلوب حياتك، مما يساعدك على التقدّم بثبات دون الشعور بالإرهاق.",
      },
    ],
  },
  {
    id: "progress",
    label: "Progress & Certification",
    labelAr: "التقدم والشهادات",
    icon: <Star size={18} />,
    color: "#254A3A",
    items: [
      {
        q: "How do you measure student progress?",
        qAr: "كيف تقيسون تقدّم الطالب؟",
        a: "Teachers continuously evaluate pronunciation, memorization, fluency, comprehension, homework, and lesson participation. Parents and students receive regular progress updates.",
        aAr: "يُقيِّم المعلمون باستمرار النطق والحفظ والطلاقة والفهم والواجبات والمشاركة في الحصص. يتلقى الآباء والطلاب تحديثات منتظمة عن التقدّم.",
      },
      {
        q: "Will I receive homework?",
        qAr: "هل سأتلقى واجبات منزلية؟",
        a: "Yes. Practical homework helps reinforce every lesson and supports faster improvement.",
        aAr: "نعم. تساعد الواجبات العملية على تعزيز كل حصة ودعم التحسّن بشكل أسرع.",
      },
      {
        q: "Do you provide progress reports?",
        qAr: "هل تُقدِّمون تقارير تقدّم؟",
        a: "Yes. We provide regular feedback so students and parents always know what has been achieved and what comes next.",
        aAr: "نعم. نقدّم تغذية راجعة منتظمة حتى يعرف الطلاب وأولياء الأمور دائمًا ما تم تحقيقه وما هو قادم.",
      },
      {
        q: "Are certificates available?",
        qAr: "هل تتوفر شهادات إتمام؟",
        a: "Yes. Students receive certificates after successfully completing eligible courses or learning levels.",
        aAr: "نعم. يحصل الطلاب على شهادات بعد إتمام الدورات أو المستويات التعليمية المؤهلة بنجاح.",
      },
      {
        q: "Can I prepare for Ijazah?",
        qAr: "هل يمكنني التحضير للإجازة؟",
        a: "Yes. Advanced students can join our structured Ijazah preparation pathway after meeting the required prerequisites.",
        aAr: "نعم. يمكن للطلاب المتقدمين الانضمام إلى مسار التحضير للإجازة المنظّم لدينا بعد استيفاء المتطلبات الأساسية.",
      },
      {
        q: "Is there a placement assessment before starting?",
        qAr: "هل يوجد تقييم تحديد المستوى قبل البدء؟",
        a: "Yes. Every new student receives a free placement assessment to help us understand their current level and recommend the most effective learning plan.",
        aAr: "نعم. يحصل كل طالب جديد على تقييم مجاني لتحديد المستوى يساعدنا على فهم مستواه الحالي والتوصية بأكثر خطة تعليمية فعالية.",
      },
    ],
  },
  {
    id: "parents",
    label: "Parents & Kids",
    labelAr: "الآباء والأطفال",
    icon: <Users size={18} />,
    color: "#B8860B",
    items: [
      {
        q: "What is the best age to start learning?",
        qAr: "ما هو أفضل سن لبدء التعلم؟",
        a: "Children can begin as early as they are ready to recognize letters and participate in short interactive lessons.",
        aAr: "يمكن للأطفال البدء منذ أن يصبحوا مستعدّين للتعرف على الحروف والمشاركة في حصص تفاعلية قصيرة.",
      },
      {
        q: "How do you keep children engaged?",
        qAr: "كيف تُحافظون على تفاعل الأطفال؟",
        a: "Our teachers use age-appropriate activities, encouragement, interactive teaching methods, and positive reinforcement to make learning enjoyable.",
        aAr: "يستخدم معلمونا أنشطة مناسبة للعمر والتشجيع وأساليب تدريس تفاعلية والتعزيز الإيجابي لجعل التعلم ممتعًا.",
      },
      {
        q: "Can siblings study together?",
        qAr: "هل يمكن للإخوة الدراسة معًا؟",
        a: "Yes. We offer family learning options based on age and learning objectives.",
        aAr: "نعم. نقدّم خيارات تعلّم عائلية بناءً على العمر والأهداف التعليمية.",
      },
      {
        q: "Will parents receive updates?",
        qAr: "هل سيتلقى الآباء تحديثات؟",
        a: "Absolutely. Parents receive continuous feedback about attendance, progress, strengths, and areas for improvement.",
        aAr: "بالتأكيد. يتلقى الآباء تغذية راجعة مستمرة حول الحضور والتقدّم ونقاط القوة ومجالات التحسين.",
      },
      {
        q: "Do you teach children with different learning speeds?",
        qAr: "هل تُدرِّسون الأطفال ذوي وتيرات التعلم المختلفة؟",
        a: "Yes. Every child learns differently, so lessons are adapted to match individual abilities and pace.",
        aAr: "نعم. كل طفل يتعلم بطريقة مختلفة، لذلك تُكيَّف الحصص لتتناسب مع قدرات كل طفل وإيقاعه.",
      },
      {
        q: "Can parents monitor every lesson?",
        qAr: "هل يمكن للآباء متابعة كل حصة؟",
        a: "Yes. Parents are welcome to observe lessons, especially for younger children. We also provide regular progress updates.",
        aAr: "نعم. الآباء مرحّب بهم لمراقبة الحصص، خاصة للأطفال الأصغر سنًا. كما نقدّم تحديثات منتظمة عن التقدّم.",
      },
      {
        q: "What if my child loses motivation?",
        qAr: "ماذا لو فقد طفلي الدافعية؟",
        a: "Our teachers use interactive activities, positive encouragement, and engaging techniques to make every lesson enjoyable. If motivation decreases, we'll adjust the approach and work closely with parents.",
        aAr: "يستخدم معلمونا أنشطة تفاعلية وتشجيعًا إيجابيًا وتقنيات جذّابة لجعل كل حصة ممتعة. إذا تراجعت الدافعية، سنُعدّل الأسلوب ونعمل عن كثب مع الآباء.",
      },
      {
        q: "What if English isn't my first language?",
        qAr: "ماذا لو لم تكن الإنجليزية لغتي الأولى؟",
        a: "That's perfectly fine. Our teaching methods are designed for international students from diverse linguistic backgrounds.",
        aAr: "لا مشكلة في ذلك على الإطلاق. أساليب تدريسنا مصمّمة للطلاب الدوليين من خلفيات لغوية متنوعة.",
      },
    ],
  },
  {
    id: "technical",
    label: "Technical & Support",
    labelAr: "الدعم التقني",
    icon: <Laptop size={18} />,
    color: "#254A3A",
    items: [
      {
        q: "What do I need to start?",
        qAr: "ما الذي أحتاجه للبدء؟",
        a: "You'll need: a computer, tablet, or smartphone; a stable internet connection; a headset or microphone; and a quiet learning environment.",
        aAr: "ستحتاج إلى: حاسوب أو جهاز لوحي أو هاتف ذكي؛ اتصال إنترنت مستقر؛ سماعة رأس أو ميكروفون؛ وبيئة تعلّم هادئة.",
      },
      {
        q: "Do I need to install special software?",
        qAr: "هل أحتاج إلى تثبيت برامج خاصة؟",
        a: "We'll guide you through the simple setup process before your first lesson.",
        aAr: "سنُرشدك خلال عملية الإعداد البسيطة قبل درسك الأول.",
      },
      {
        q: "Is online learning effective?",
        qAr: "هل التعلّم عبر الإنترنت فعّال؟",
        a: "Yes. With one-to-one live instruction, personalized feedback, and consistent practice, online learning is highly effective for Quran, Arabic, and Islamic Studies.",
        aAr: "نعم. مع التعليم الفردي المباشر والتغذية الراجعة الشخصية والممارسة المستمرة، يُعدّ التعلّم عبر الإنترنت فعّالًا للغاية لتعلّم القرآن والعربية والدراسات الإسلامية.",
      },
      {
        q: "How do I enroll?",
        qAr: "كيف أسجّل؟",
        a: "Simply book a free assessment, and our academic team will recommend the best learning pathway and schedule for you.",
        aAr: "احجز تقييمًا مجانيًا وسيوصي فريقنا الأكاديمي بأفضل مسار تعليمي وجدول زمني يناسبك.",
      },
      {
        q: "Can adults learn the Quran too?",
        qAr: "هل يمكن للبالغين تعلّم القرآن أيضًا؟",
        a: "Absolutely. It's never too late to begin your Quran journey. We welcome learners of every age and experience level.",
        aAr: "بالتأكيد. لا يوجد وقت متأخر لبدء رحلتك مع القرآن. نرحّب بالمتعلمين من جميع الأعمار ومستويات الخبرة.",
      },
    ],
  },
];

/* ─── Scroll Reveal Hook ─────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.06, rootMargin: "0px 0px -30px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ─── FAQ Accordion Item ─────────────────────────────────────────────── */
function FaqAccordionItem({
  item,
  index,
  categoryColor,
  isAr,
}: {
  item: FaqItem;
  index: number;
  categoryColor: string;
  isAr: boolean;
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`border border-[#E8E0D0] rounded-2xl overflow-hidden transition-all duration-300 bg-white ${
        open
          ? "shadow-[0_8px_32px_rgba(37,74,58,0.09)] border-[#B49B44]/40"
          : "hover:border-[#B49B44]/30 hover:shadow-sm"
      }`}
      style={{ animationDelay: `${index * 35}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 px-4 py-4 sm:px-5 sm:py-4.5 text-start group"
        aria-expanded={open}
        dir={isAr ? "rtl" : "ltr"}
      >
        <span
          className={`text-[13.5px] sm:text-[14.5px] font-semibold leading-snug transition-colors duration-200 flex-1 ${
            open ? "text-[#254A3A]" : "text-[#1A1A14] group-hover:text-[#254A3A]"
          }`}
        >
          {isAr ? item.qAr : item.q}
        </span>
        <span
          className={`shrink-0 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
            open ? "rotate-180 text-white" : "text-[#9A9282] group-hover:text-[#254A3A]"
          }`}
          style={open ? { backgroundColor: categoryColor } : {}}
        >
          <ChevronDown size={15} />
        </span>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          maxHeight: open ? (contentRef.current?.scrollHeight ?? 600) + "px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="px-4 pb-4 sm:px-5 sm:pb-5" dir={isAr ? "rtl" : "ltr"}>
          <div
            className="h-px mb-3"
            style={{ background: `linear-gradient(to ${isAr ? "left" : "right"}, ${categoryColor}33, transparent)` }}
          />
          <p className="text-[13px] sm:text-[13.5px] text-[#4a5c54] leading-relaxed">
            {isAr ? item.aAr : item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Category Section ───────────────────────────────────────────────── */
function CategorySection({ cat, isAr }: { cat: FaqCategory; isAr: boolean }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      id={cat.id}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-3 mb-4" dir={isAr ? "rtl" : "ltr"}>
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white shadow-sm"
          style={{ backgroundColor: cat.color }}
        >
          {cat.icon}
        </span>
        <h2 className="text-base sm:text-lg font-bold text-[#1A1A14] flex-1">
          {isAr ? cat.labelAr : cat.label}
        </h2>
        <span className="text-[10px] font-semibold text-[#9A9282] bg-[#F5F0E8] border border-[#E8E0D0] px-2 py-0.5 rounded-full shrink-0">
          {cat.items.length}
        </span>
      </div>
      <div className="space-y-2">
        {cat.items.map((item, i) => (
          <FaqAccordionItem key={i} item={item} index={i} categoryColor={cat.color} isAr={isAr} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────── */
export default function FaqsPageContent() {
  const { locale } = useI18n();
  const isAr = locale === "ar";

  const [activeTab, setActiveTab] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalQuestions = FAQ_DATA.reduce((s, c) => s + c.items.length, 0);

  const filteredData = searchQuery.trim()
    ? FAQ_DATA.map((cat) => ({
        ...cat,
        items: cat.items.filter((item) => {
          const query = searchQuery.toLowerCase();
          const q = isAr ? item.qAr : item.q;
          const a = isAr ? (typeof item.aAr === "string" ? item.aAr : "") : (typeof item.a === "string" ? item.a : "");
          return q.toLowerCase().includes(query) || a.toLowerCase().includes(query);
        }),
      })).filter((cat) => cat.items.length > 0)
    : FAQ_DATA;

  return (
    <>
      <style jsx global>{`
        @keyframes faqFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fhero-in  { animation: faqFadeUp 600ms cubic-bezier(0.22,1,0.36,1) both; }
        .fhero-d1  { animation-delay: 80ms; }
        .fhero-d2  { animation-delay: 160ms; }
        .fhero-d3  { animation-delay: 240ms; }

        .faq-tab-pill { transition: all 0.18s ease; }
        .faq-tab-pill:hover:not(.active) { background: rgba(37,74,58,0.07); color: #254A3A; }
        .faq-tab-pill.active { background: #254A3A !important; color: #F2D58C !important; box-shadow: 0 4px 14px rgba(37,74,58,0.18); }
      `}</style>

      {/* ── Hero Image + Text Overlay ── */}
      <section className="relative w-full pt-[72px] md:pt-[80px] bg-[#1A1A14] overflow-hidden">
        {/* Image with fixed height to keep hero compact */}
        <div className="relative h-[220px] sm:h-[280px] md:h-[340px]">
          <img
            src="/images/ChatGPT Image Jul 29, 2026, 06_37_20 PM.png"
            alt={isAr ? "الأسئلة الشائعة" : "FAQs"}
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/70" />

          {/* Text content centered on image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center" dir={isAr ? "rtl" : "ltr"}>
            <div className="fhero-in flex items-center justify-center gap-3 mb-2">
              <span className="w-6 h-px bg-[#F2D58C] opacity-70" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F2D58C]">
                {isAr ? "مركز المساعدة" : "Help Center"}
              </span>
              <span className="w-6 h-px bg-[#F2D58C] opacity-70" />
            </div>

            <h1 className="fhero-in fhero-d1 font-serif text-[clamp(22px,5vw,44px)] font-normal text-white leading-[1.2] mb-2">
              {isAr ? (
                <>الأسئلة <em className="italic text-[#F2D58C]">المتكررة</em></>
              ) : (
                <>Frequently Asked <em className="italic text-[#F2D58C]">Questions</em></>
              )}
            </h1>

            <p className="fhero-in fhero-d2 text-[12px] sm:text-[13.5px] text-white/75 max-w-sm mx-auto leading-relaxed mb-5">
              {isAr
                ? <><strong className="text-[#F2D58C] font-semibold">{totalQuestions} إجابة</strong> في {FAQ_DATA.length} أقسام</>  
                : <><strong className="text-[#F2D58C] font-semibold">{totalQuestions} answers</strong> across {FAQ_DATA.length} categories</>
              }
            </p>

            {/* Search bar */}
            <div className="fhero-in fhero-d3 relative w-full max-w-sm mx-auto">
              <span className={`absolute top-1/2 -translate-y-1/2 text-[#9A9282] pointer-events-none ${isAr ? "right-3.5" : "left-3.5"}`}>
                <MessageCircle size={15} />
              </span>
              <input
                type="text"
                placeholder={isAr ? "ابحث عن سؤال…" : "Search questions…"}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                dir={isAr ? "rtl" : "ltr"}
                className={`w-full py-2.5 rounded-xl border border-white/20 bg-white/90 backdrop-blur-sm text-[13px] text-[#1A1A14] placeholder:text-[#9A9282] shadow-md focus:outline-none focus:border-[#B49B44]/60 focus:ring-2 focus:ring-[#B49B44]/20 transition-all ${isAr ? "pr-9 pl-4" : "pl-9 pr-4"}`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className={`absolute top-1/2 -translate-y-1/2 text-[#9A9282] hover:text-[#1A1A14] text-xs px-1 rounded transition-colors ${isAr ? "left-3" : "right-3"}`}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Fade into page bg */}
        <div className="h-6 bg-gradient-to-b from-[#1A1A14]/60 to-[#F7F5F0]" />
      </section>


      {/* ── Main Content ── */}
      <section className="bg-[#F7F5F0] py-8 md:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto" dir={isAr ? "rtl" : "ltr"}>
          {searchQuery.trim() ? (
            /* Search Results */
            <div className="space-y-10">
              {filteredData.length === 0 ? (
                <div className="text-center py-16">
                  <span className="text-4xl mb-4 block">🔍</span>
                  <p className="text-[14px] text-[#6F6F5C]">
                    {isAr ? `لا توجد نتائج لـ "${searchQuery}". جرّب كلمات مختلفة.` : `No results for "${searchQuery}". Try different keywords.`}
                  </p>
                </div>
              ) : (
                filteredData.map((cat) => (
                  <CategorySection key={cat.id} cat={cat} isAr={isAr} />
                ))
              )}
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

              {/* ── Mobile Category Selector ── */}
              <div className="lg:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="w-full flex items-center justify-between gap-3 bg-white border border-[#E8E0D0] rounded-xl px-4 py-3 text-[13.5px] font-semibold text-[#254A3A] shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    {FAQ_DATA.find(c => c.id === activeTab)?.icon}
                    {isAr ? FAQ_DATA.find(c => c.id === activeTab)?.labelAr : FAQ_DATA.find(c => c.id === activeTab)?.label}
                  </span>
                  <ChevronDown size={16} className={`text-[#9A9282] transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileMenuOpen && (
                  <div className="mt-2 bg-white border border-[#E8E0D0] rounded-xl shadow-md overflow-hidden">
                    {FAQ_DATA.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveTab(cat.id);
                          setMobileMenuOpen(false);
                          setTimeout(() => document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-[13px] font-medium border-b border-[#F5F0E8] last:border-0 transition-colors ${
                          activeTab === cat.id ? "bg-[#F5F0E8] text-[#254A3A] font-semibold" : "text-[#4a5c54] hover:bg-[#FAFAF7]"
                        }`}
                      >
                        <span style={{ color: cat.color }}>{cat.icon}</span>
                        {isAr ? cat.labelAr : cat.label}
                        <span className="ms-auto text-[10px] text-[#9A9282] bg-[#F5F0E8] px-1.5 py-0.5 rounded-full">{cat.items.length}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* ── Desktop Sidebar ── */}
              <aside className="hidden lg:block lg:w-56 xl:w-60 shrink-0">
                <div className="sticky top-[90px]">
                  <p className={`text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A9282] mb-3 px-1 ${isAr ? "text-right" : ""}`}>
                    {isAr ? "الأقسام" : "Categories"}
                  </p>
                  <nav className="flex flex-col gap-1.5">
                    {FAQ_DATA.map((cat) => (
                      <a
                        key={cat.id}
                        href={`#${cat.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab(cat.id);
                          document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        className={`faq-tab-pill flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[12.5px] font-medium cursor-pointer ${
                          activeTab === cat.id
                            ? "active"
                            : "text-[#4a5c54] bg-white border border-[#E8E0D0]"
                        }`}
                      >
                        <span style={activeTab !== cat.id ? { color: cat.color } : { color: "#F2D58C" }}>
                          {cat.icon}
                        </span>
                        <span className="flex-1 leading-snug">{isAr ? cat.labelAr : cat.label}</span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${
                          activeTab === cat.id ? "bg-white/20 text-[#F2D58C]" : "bg-[#F5F0E8] text-[#9A9282]"
                        }`}>
                          {cat.items.length}
                        </span>
                      </a>
                    ))}
                  </nav>

                  {/* CTA card */}
                  <div className="mt-5 rounded-2xl border border-[#B49B44]/25 bg-[#FBF8F1] p-4">
                    <p className="text-[12px] font-semibold text-[#254A3A] mb-1">
                      {isAr ? "لديك سؤال آخر؟" : "Still have questions?"}
                    </p>
                    <p className="text-[11px] text-[#6F6F5C] leading-relaxed mb-3">
                      {isAr ? "فريقنا سعيد بمساعدتك للبدء." : "Our team is happy to help you get started."}
                    </p>
                    <Link
                      href="/contact"
                      className="block text-center text-[12px] font-semibold text-[#F2D58C] py-2 rounded-lg transition-all hover:brightness-110"
                      style={{ backgroundColor: "#254A3A" }}
                    >
                      {isAr ? "تواصل معنا" : "Contact Us"}
                    </Link>
                  </div>
                </div>
              </aside>

              {/* ── FAQ Content ── */}
              <div className="flex-1 min-w-0 space-y-10 sm:space-y-12">
                {FAQ_DATA.map((cat) => (
                  <CategorySection key={cat.id} cat={cat} isAr={isAr} />
                ))}

                {/* Bottom CTA */}
                <div className="rounded-2xl border border-[#B49B44]/25 bg-[#FBF8F1] p-5 sm:p-8 text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B49B44] mb-2">
                    {isAr ? "جاهز للبدء؟" : "Ready to begin?"}
                  </p>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1A1A14] mb-2">
                    {isAr ? (
                      <>ابدأ <em className="italic text-[#B49B44]">تقييمك المجاني</em> اليوم</>
                    ) : (
                      <>Start your <em className="italic text-[#B49B44]">free assessment</em> today</>
                    )}
                  </h3>
                  <p className="text-[13px] text-[#6F6F5C] max-w-md mx-auto mb-5 leading-relaxed">
                    {isAr
                      ? "لا يلزم أي التزام. سنُقيِّم مستواك ونوصي بأفضل مسار تعليمي لك."
                      : "No commitment required. We'll evaluate your level and recommend the perfect learning pathway."}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      href="/book-trial"
                      className="inline-flex items-center justify-center gap-2 bg-[#254A3A] hover:bg-[#1e3d2f] text-[#F0E8CC] text-[13px] font-semibold px-6 py-2.5 rounded-xl transition-all duration-200 hover:shadow-[0_6px_20px_rgba(37,74,58,0.22)] hover:-translate-y-0.5"
                    >
                      {isAr ? "احجز تجربة مجانية" : "Book Free Trial"}
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-white text-[#1A1A14] text-[13px] font-semibold px-6 py-2.5 rounded-xl border border-[#E8E0D0] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B49B44]/40"
                    >
                      {isAr ? "اسأل سؤالًا" : "Ask a Question"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
