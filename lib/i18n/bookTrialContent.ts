import type { Locale } from "@/lib/i18n/types";

export const BOOK_TRIAL_EMAIL = "nibrasnetwork55@gmail.com";

export type BookTrialCopy = {
  pageTitle: string;
  pageSubtitle: string;
  privacyBanner: string;
  requiredMark: string;
  firstName: string;
  lastName: string;
  subFirst: string;
  subLast: string;
  hintParentName: string;
  email: string;
  emailPh: string;
  whatsapp: string;
  country: string;
  countryPh: string;
  timezone: string;
  timezonePh: string;
  coursesSection: string;
  coursesHint: string;
  packagesSection: string;
  packagesPrivate: string;
  packagesGroup: string;
  packagesFamily: string;
  packagesFamilyHint: string;
  familyBadge: string;
  familyMembers2: string;
  familyMembers3: string;
  familyMembers4: string;
  familyDiscountNote: string;
  familyHoursLabel: string;
  packagesHint: string;
  packagesChooseCategory: string;
  packagesSelectToContinue: string;
  preferredTimesMultiHint: string;
  preferredDays: string;
  preferredDaysPh: string;
  preferredTimes: string;
  preferredTimesHint: string;
  studentAge: string;
  studentAgeHint: string;
  studentGender: string;
  teacherGender: string;
  genderMale: string;
  genderFemale: string;
  genderNoPreference: string;
  genderPh: string;
  message: string;
  messageHint: string;
  messagePh: string;
  submit: string;
  validationFill: string;
  validationName: string;
  validationAge: string;
  validationCourses: string;
  validationDays: string;
  validationTimes: string;
  validationPackage: string;
  validationFamilyMembers: string;
  familyMembersSection: string;
  familyMembersHint: string;
  familyMemberCard: string;
  familyMemberComplete: string;
  familyMemberIncomplete: string;
  familyMemberEdit: string;
  familyMemberModalKicker: string;
  familyMemberName: string;
  familyMemberNamePh: string;
  familyMemberTimezone: string;
  familyMemberCoursesHint: string;
  familyMemberSave: string;
  familyMemberCancel: string;
  familyCoursesPerMember: string;
  submitting: string;
  submitSuccess: string;
  submitError: string;
  mailtoSubject: string;
  mailtoLines: {
    first: string;
    last: string;
    email: string;
    whatsapp: string;
    country: string;
    timezone: string;
    courses: string;
    packages: string;
    days: string;
    times: string;
    age: string;
    studentGender: string;
    teacherGender: string;
    goals: string;
  };
  phoneSearchPlaceholder: string;
  phoneNoResults: string;
  dayMon: string;
  dayTue: string;
  dayWed: string;
  dayThu: string;
  dayFri: string;
  daySat: string;
  daySun: string;
  dayWeekdays: string;
  dayWeekends: string;
  preferredDaysMultiHint: string;
  timeMorning: string;
  timeAfternoon: string;
  timeEvening: string;
  timeWeekend: string;
  timeFlexible: string;
};

const en: BookTrialCopy = {
  pageTitle: "Book your free trial",
  pageSubtitle: "Tell us about your goals and availability. We will get back to you shortly.",
  privacyBanner: "Your data will never be shared with any other parties.",
  requiredMark: "*",
  firstName: "First name",
  lastName: "Last name",
  subFirst: "First",
  subLast: "Last",
  hintParentName: "Parent name if registering for kids",
  email: "Email",
  emailPh: "Email",
  whatsapp: "WhatsApp",
  country: "Country",
  countryPh: "Select country",
  timezone: "Time zone",
  timezonePh: "Select your time zone",
  coursesSection: "Courses (select all that apply)",
  coursesHint: "Same programs as our course menu — Quran, Arabic, and Islamic studies.",
  packagesSection: "Pricing packages",
  packagesPrivate: "Private (1-on-1)",
  packagesGroup: "Group classes",
  packagesFamily: "Family (per person)",
  packagesFamilyHint: "Pooled monthly hours across members — prices match our family table.",
  familyBadge: "Family",
  familyMembers2: "2 members",
  familyMembers3: "3 members",
  familyMembers4: "4+ members",
  familyDiscountNote: "20% off first 3 months",
  familyHoursLabel: "Monthly hours (family)",
  packagesHint: "Pick one plan so we can match your request (required to submit).",
  packagesChooseCategory: "Choose a package type to see options",
  packagesSelectToContinue: "Package selected — complete your details below",
  preferredTimesMultiHint: "Pick one or more times (5:00 PM – 11:00 PM)",
  preferredDays: "Preferred days",
  preferredDaysPh: "Choose days",
  preferredTimes: "Preferred times",
  preferredTimesHint: "Kindly mention some available times if you can.",
  studentAge: "Student age",
  studentAgeHint: "Age of every student (e.g. 9 or Adult)",
  studentGender: "Student gender",
  teacherGender: "Teacher gender preference",
  genderMale: "Male",
  genderFemale: "Female",
  genderNoPreference: "No preference",
  genderPh: "Select",
  message: "Message / learning goals",
  messageHint: "Tell us more about your learning goals.",
  messagePh: "Short summary",
  submit: "Get your free trial",
  validationFill: "Please fill in all required fields.",
  validationName: "First and last name must contain letters only (at least 2 characters).",
  validationAge: "Please enter numbers only for student age (e.g., 15).",
  validationCourses: "Please select at least one course.",
  validationDays: "Please select at least one preferred day.",
  validationTimes: "Please select at least one preferred time (5:00 PM – 11:00 PM).",
  validationPackage: "Please select a pricing package (private, group, or family).",
  validationFamilyMembers: "Please complete details for every family member (name, email, time zone, courses, schedule, age, and gender preferences).",
  familyMembersSection: "Family members",
  familyMembersHint: "Tap each member to add their name, email, time zone, courses, schedule, and student details.",
  familyMemberCard: "Member",
  familyMemberComplete: "Complete",
  familyMemberIncomplete: "Needs details",
  familyMemberEdit: "Edit",
  familyMemberModalKicker: "Family package",
  familyMemberName: "Member name",
  familyMemberNamePh: "Full name",
  familyMemberTimezone: "Time zone",
  familyMemberCoursesHint: "Select one or more courses for this member.",
  familyMemberSave: "Save member",
  familyMemberCancel: "Cancel",
  familyCoursesPerMember: "Courses are added per family member below — open each member card.",
  submitting: "Sending…",
  submitSuccess: "Thank you! Your trial request was sent. We will contact you soon.",
  submitError: "Something went wrong. Please try again in a moment or contact us on WhatsApp.",
  mailtoSubject: "Free trial request",
  mailtoLines: {
    first: "First name:",
    last: "Last name:",
    email: "Email:",
    whatsapp: "WhatsApp:",
    country: "Country:",
    timezone: "Time zone:",
    courses: "Courses:",
    packages: "Packages of interest:",
    days: "Preferred days:",
    times: "Preferred times:",
    age: "Student age:",
    studentGender: "Student gender:",
    teacherGender: "Teacher gender:",
    goals: "Message:",
  },
  phoneSearchPlaceholder: "Search country...",
  phoneNoResults: "No results found",
  dayMon: "Monday",
  dayTue: "Tuesday",
  dayWed: "Wednesday",
  dayThu: "Thursday",
  dayFri: "Friday",
  daySat: "Saturday",
  daySun: "Sunday",
  dayWeekdays: "Weekdays",
  dayWeekends: "Weekends",
  preferredDaysMultiHint: "Pick one or more days",
  timeMorning: "Morning (approx. 8:00–12:00)",
  timeAfternoon: "Afternoon (approx. 12:00–17:00)",
  timeEvening: "Evening (approx. 17:00–21:00)",
  timeWeekend: "Weekend",
  timeFlexible: "Flexible / to be agreed",
};

const ar: BookTrialCopy = {
  pageTitle: "احجز تجربتك المجانية",
  pageSubtitle: "أخبرنا بأهدافك وأوقات المناسبة لك، وسنعاود الاتصال بك قريباً.",
  privacyBanner: "لن تُشارَك بياناتك مع أي طرف خارجي.",
  requiredMark: "*",
  firstName: "الاسم الأول",
  lastName: "اسم العائلة",
  subFirst: "الأول",
  subLast: "العائلة",
  hintParentName: "اسم ولي الأمر إذا كان التسجيل للأطفال",
  email: "البريد الإلكتروني",
  emailPh: "البريد الإلكتروني",
  whatsapp: "واتساب",
  country: "الدولة",
  countryPh: "اختر الدولة",
  timezone: "المنطقة الزمنية",
  timezonePh: "اختر منطقتك الزمنية",
  coursesSection: "الدورات (يمكن اختيار أكثر من دورة)",
  coursesHint: "نفس البرامج في قائمة الدورات — القرآن والعربية والدراسات الإسلامية.",
  packagesSection: "باقات الأسعار",
  packagesPrivate: "خاص (فردي)",
  packagesGroup: "حصص جماعية",
  packagesFamily: "عائلي (لكل فرد)",
  packagesFamilyHint: "ساعات شهرية مشتركة بين أفراد العائلة — الأسعار كجدول العائلة في صفحة الأسعار.",
  familyBadge: "عائلي",
  familyMembers2: "عضوان",
  familyMembers3: "3 أعضاء",
  familyMembers4: "+4 أعضاء",
  familyDiscountNote: "خصم 20٪ أول 3 أشهر",
  familyHoursLabel: "الساعات الشهرية (عائلي)",
  packagesHint: "اختر باقة واحدة ليتم إرسال الطلب (مطلوب).",
  packagesChooseCategory: "اختر نوع الباقة لعرض الخيارات",
  packagesSelectToContinue: "اختر الباقة أدناه لمتابعة بياناتك",
  preferredTimesMultiHint: "اختر معاداً أو أكثر (5:00 م – 11:00 م)",
  preferredDays: "الأيام المفضلة",
  preferredDaysPh: "اختر الأيام",
  preferredTimes: "الأوقات المفضلة",
  preferredTimesHint: "اذكر بعض الأوقات المتاحة إن أمكن.",
  studentAge: "عمر الطالب",
  studentAgeHint: "عمر كل طالب (مثلاً 9 أو بالغ)",
  studentGender: "جنس الطالب",
  teacherGender: "تفضيل جنس المعلم",
  genderMale: "ذكر",
  genderFemale: "أنثى",
  genderNoPreference: "بدون تفضيل",
  genderPh: "اختر",
  message: "الرسالة / أهداف التعلم",
  messageHint: "أخبرنا المزيد عن أهدافك التعليمية.",
  messagePh: "ملخص قصير",
  submit: "احصل على تجربتك المجانية",
  validationFill: "يرجى تعبئة جميع الحقول المطلوبة.",
  validationName: "يجب أن يحتوي الاسم الأول واسم العائلة على حروف فقط (حرفان على الأقل).",
  validationAge: "يرجى إدخال أرقام فقط لعمر الطالب (مثال: 15).",
  validationCourses: "يرجى اختيار دورة واحدة على الأقل.",
  validationDays: "يرجى اختيار يوم مفضل واحد على الأقل.",
  validationTimes: "يرجى اختيار معاد واحد على الأقل (5:00 م – 11:00 م).",
  validationPackage: "يرجى اختيار باقة (خاصة أو جماعية أو عائلية).",
  validationFamilyMembers: "يرجى إكمال بيانات كل عضو (الاسم، البريد، المنطقة الزمنية، الدورات، الجدول، العمر، وتفضيلات الجنس).",
  familyMembersSection: "أعضاء العائلة",
  familyMembersHint: "اضغط على كل عضو لإضافة اسمه وبريده ومنطقته الزمنية ودوراته وجدوله ومعلومات الطالب.",
  familyMemberCard: "عضو",
  familyMemberComplete: "مكتمل",
  familyMemberIncomplete: "يحتاج بيانات",
  familyMemberEdit: "تعديل",
  familyMemberModalKicker: "باقة عائلية",
  familyMemberName: "اسم العضو",
  familyMemberNamePh: "الاسم الكامل",
  familyMemberTimezone: "المنطقة الزمنية",
  familyMemberCoursesHint: "اختر دورة واحدة أو أكثر لهذا العضو.",
  familyMemberSave: "حفظ العضو",
  familyMemberCancel: "إلغاء",
  familyCoursesPerMember: "الدورات تُضاف لكل عضو على حدة — افتح بطاقة كل عضو أدناه.",
  submitting: "جاري الإرسال…",
  submitSuccess: "شكراً لك! تم إرسال طلب التجربة وسنتواصل معك قريباً.",
  submitError: "حدث خطأ. يرجى المحاولة لاحقاً أو التواصل معنا عبر واتساب.",
  mailtoSubject: "طلب تجربة مجانية",
  mailtoLines: {
    first: "الاسم الأول:",
    last: "اسم العائلة:",
    email: "البريد:",
    whatsapp: "واتساب:",
    country: "الدولة:",
    timezone: "المنطقة الزمنية:",
    courses: "الدورات:",
    packages: "الباقات المهتم بها:",
    days: "الأيام المفضلة:",
    times: "الأوقات المفضلة:",
    age: "عمر الطالب:",
    studentGender: "جنس الطالب:",
    teacherGender: "جنس المعلم:",
    goals: "الرسالة:",
  },
  phoneSearchPlaceholder: "بحث عن دولة...",
  phoneNoResults: "لا توجد نتائج",
  dayMon: "الإثنين",
  dayTue: "الثلاثاء",
  dayWed: "الأربعاء",
  dayThu: "الخميس",
  dayFri: "الجمعة",
  daySat: "السبت",
  daySun: "الأحد",
  dayWeekdays: "أيام الأسبوع",
  dayWeekends: "عطلة نهاية الأسبوع",
  preferredDaysMultiHint: "اختر يوماً واحداً أو أكثر",
  timeMorning: "صباحاً (تقريباً 8:00–12:00)",
  timeAfternoon: "بعد الظهر (تقريباً 12:00–17:00)",
  timeEvening: "مساءً (تقريباً 17:00–21:00)",
  timeWeekend: "عطلة نهاية الأسبوع",
  timeFlexible: "مرن / يُحدَّد لاحقاً",
};

export function getBookTrialCopy(locale: Locale): BookTrialCopy {
  return locale === "ar" ? ar : en;
}
