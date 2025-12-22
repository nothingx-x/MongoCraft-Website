import { usePopup } from "@components/Popup";
import { useRouter } from "next/router";
import { useState, useEffect, ReactNode } from "react";

interface ISurveyProps {
  currentStep: number;
  totalFilledSteps: number;
  steps: {
    question: string;
    options: string[];
    pickedOption?: number;
  }[];
}

interface ISurveyMemberProps {
  name: string;
  currentStep: number;
  totalFilledSteps: number;
  steps: {
    question: string;
    options: string[];
    pickedOption?: number;
  }[];
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
}


const CookieManager = {
  setCookie(name: string, value: string, days = 30) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  },

  getCookie(name: string): string | null {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

  deleteCookie(name: string) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  },

  hasSubmittedSurvey(): boolean {
    const submissionStatus = this.getCookie("survey_submitted");
    return submissionStatus === "true";
  },

  markSurveyAsSubmitted() {
    this.setCookie("survey_submitted", "true", 365);
    this.setCookie("survey_submission_date", new Date().toISOString(), 365);
  },

  getLastSubmissionDate(): Date | null {
    const dateStr = this.getCookie("survey_submission_date");
    return dateStr ? new Date(dateStr) : null;
  },

  getSurveyCookieInfo() {
    const submitted = this.hasSubmittedSurvey();
    const lastDate = this.getLastSubmissionDate();
    return { submitted, lastDate };
  },

  resetSurveyCookies() {
    this.deleteCookie("survey_submitted");
    this.deleteCookie("survey_submission_date");
  }
};

function Form() {
  const [survey, setSurvey] = useState<ISurveyProps>({
    currentStep: 0,
    totalFilledSteps: 0,
    steps: [
      {
        question: "شما در چه پلتفرمی بازی میکنید؟؟",
        options: ["کامپیوتر", "لپ تاپ", "گوشی", "کنسول"],
      },
      {
        question: "چه نوع سرورهایی رو بیشتر بازی میکنید یا دوست دارید؟؟",
        options: [
          "سروایول معمولی",
          "سروایول با پلاگین",
          "رول پلی (RPG)",
          "MMO RPG (رول پلی با ماب ها مثل LOL, Valorant)",
        ],
      },
      {
        question: "سرور با محتوای فصلی (سیزن) دوست دارید؟؟ اگر آره مدت زمانشو مشخص کنید",
        options: ["1 ماهه", "2 ماهه", "3 ماهه", "سرور فصلی دوست ندارم"],
      },
      {
        question: "مدت زمان هر رنک به چه صورتی باشه؟؟",
        options: ["همون مدت زمان فصل باشه", "1 ماهه", "2 ماهه", "دائمی"],
      },
      {
        question: "مدت زمان مونگو پس (بتل پس سرور ما) به چه صورتی باشه؟؟",
        options: ["همون مدت زمان فصل باشه", "1 ماهه", "2 ماهه", "مونگو پس نداشته باشیم"],
      },
      {
        question: "تا چه اندازه ای ماهانه برای سرور میتونید خرج کنید؟؟",
        options: [
          "تا 25 هزارتومان",
          "تا 50 هزارتومان",
          "تا 100 هزارتومان",
          "خرج میکنم قیمتش مهم نیست",
          "اصلا برای سرور خرج نمیکنم",
        ],
      },
      {
        question: "در چه شبکه های اجتماعی بیشترین فعالیت رو دارید؟؟",
        options: ["دیسکورد", "تلگرام", "اینستاگرام", "یوتیوب"],
      },
      {
        question: "از چه طریقی با سرور مونگوکرفت آشنا شدید؟؟",
        options: [
          "دوستانم معرفی کردند",
            "شبکه های اجتماعی",
            "جستجو در اینترنت",
            "سایر روش‌ها",
        ],
      },
      {
        question: "روزانه چندساعت ماینکرفت بازی میکنید؟؟",
        options: ["کمتر از 1 ساعت", "1-3 ساعت", "3-5 ساعت", "بیشتر از 5 ساعت"],
      }
    ],
  });
  const router = useRouter()
  const [userInfo, setUserInfo] = useState({
    name: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    const checkSurveyStatus = () => {
      const { submitted, lastDate } = CookieManager.getSurveyCookieInfo();
      
      if (submitted) {
        setSubmitted(true)
        // setAlreadySubmitted(true);
        
        if (lastDate) {
          const now = new Date();
          const diffTime = Math.abs(now.getTime() - lastDate.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          
          if (diffDays < 1) {
            // setShowResetOption(true);
          }
        }
      }
    };

    setTimeout(checkSurveyStatus, 100);
  }, []);
  const handleOptionClick = (optionIndex: number) => {
    const updatedSteps = [...survey.steps];
    updatedSteps[survey.currentStep].pickedOption = optionIndex;

    setSurvey({
      ...survey,
      steps: updatedSteps,
      totalFilledSteps: survey.steps.reduce((count, step) => step.pickedOption !== undefined ? count + 1 : count, 0),
      // totalFilledSteps:   Math.max(survey.totalFilledSteps, survey.currentStep + 1),
    });
  };

  const handleNext = () => {
    if (survey.currentStep < survey.steps.length - 1) {
      setSurvey({
        ...survey,
        currentStep: survey.currentStep + 1,
      });
    }
  };

  const handlePrev = () => {
    if (survey.currentStep > 0) {
      setSurvey({
        ...survey,
        currentStep: survey.currentStep - 1,
      });
    }
  };





  const { triggerPopup } = usePopup();
  const openPopup = (el: ReactNode) => triggerPopup(el)
	

  const handleSubmit = async () => {
    if (userInfo.name.trim() === "") {
      openPopup(<p>لطفا نام خود را وارد کنید</p>)
      // alert("لطفا نام خود را وارد کنید");
      return;
    }

    const allAnswered = survey.steps.every(step => step.pickedOption !== undefined);
    if (!allAnswered) {
      openPopup(<p>لطفا به تمام سوالات پاسخ دهید</p>)
      // alert("لطفا به تمام سوالات پاسخ دهید");
      return;
    }

    const surveyData: ISurveyMemberProps = {
      name: userInfo.name,
      currentStep: survey.currentStep,
      totalFilledSteps: survey.totalFilledSteps,
      steps: survey.steps,
      createdAt: new Date(),
    };

    try {
      
      console.log("داده‌های نظرسنجی:", surveyData);
      setSubmitted(true);
      
      alert("نظرسنجی با موفقیت ثبت شد! سپاس از مشارکت شما 🙏");
      
      // ریست کردن فرم (اختیاری)
      // setSurvey({...initialSurvey});
      // setUserInfo({name: ""});
      // setSubmitted(false);
      CookieManager.markSurveyAsSubmitted();
    } catch (error) {
      console.error("خطا در ارسال نظرسنجی:", error);
      alert("خطایی در ارسال نظرسنجی رخ داد. لطفا مجددا تلاش کنید.");
    }
  };

  const currentQuestion = survey.steps[survey.currentStep];

  const progressPercentage = (survey.totalFilledSteps / survey.steps.length) * 100;

  return (
    <div className="w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 mt-8 border border-gray-200">
      {submitted ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-6">🎉</div>
          <h2 className="text-2xl font-bold text-green-600 mb-4">نظرسنجی تکمیل شد!</h2>
          <p className="text-gray-700 mb-8">
            سپاس فراوان از شما {userInfo.name} عزیز برای مشارکت در این نظرسنجی.
            <br />
            نظرات شما نقش مهمی در بهبود سرور مونگوکرفت خواهد داشت.
          </p>
          <button
            onClick={() => {
                router.push("/");
            //   setSubmitted(false);
            //   setSurvey({
            //     currentStep: 0,
            //     totalFilledSteps: 0,
            //     steps: survey.steps.map(step => ({ ...step, pickedOption: undefined })),
            //   });
            }}
            className="px-6 py-3 bg-primary-600 text-zinc-900 rounded-lg hover:bg-primary-700 transition-colors"
          >
            بازگشت
          </button>
        </div>
      ) : (
        <>
          
          <div className="mb-8">
            <label className="block text-gray-700 mb-2 font-medium">
              نام شما (اجباری)
            </label>
            <input
              type="text"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-right"
              placeholder="نام خود را وارد کنید.."
            />
          </div>

          
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                سوال {survey.currentStep + 1} از {survey.steps.length}
              </span>
              <span className="text-sm font-medium text-primary-600">
                {Math.round(progressPercentage)}% تکمیل
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-primary-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-right">
              {currentQuestion.question}
            </h3>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  className={`w-full text-right p-4 rounded-xl border-2 transition-all duration-200 ${
                    currentQuestion.pickedOption === index
                      ? "border-primary-500 bg-primary-50 text-primary-700"
                      : "border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white border">
                      {String.fromCharCode(97 + index)} {/* a, b, c, ... */}
                    </span>
                    <span className="text-lg pr-3">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <div className="flex space-x-3 space-x-reverse">
              <button
                onClick={handlePrev}
                disabled={survey.currentStep === 0}
                className={`bg-primary-500 duration-150 text-primary-100 px-6 py-1 rounded justify-items-end ${
                  survey.currentStep === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-400 text-gray-700 hover:bg-gray-500"
                }`}
              >
                ← قبلی
              </button>
              
              <button
                onClick={handleNext}
                disabled={
                  survey.currentStep === survey.steps.length - 1 ||
                  currentQuestion.pickedOption === undefined
                }
                className={`bg-primary-500 duration-150 text-primary-100 px-6 py-1 rounded justify-items-end ${
                  survey.currentStep === survey.steps.length - 1 ||
                  currentQuestion.pickedOption === undefined
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-primary-500 text-zinc-900 hover:bg-primary-400"
                }`}
              >
                بعدی →
              </button>
            </div>

            {survey.currentStep === survey.steps.length - 1 && (
              <button
                onClick={handleSubmit}
                disabled={currentQuestion.pickedOption === undefined}
                className={`bg-primary-500 duration-150 text-primary-100 px-6 py-1 rounded justify-items-end ${
                  currentQuestion.pickedOption === undefined
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-primary-500 text-zinc-900 hover:bg-primary-400 shadow-lg"
                }`}
              >
                ارسال نظرسنجی
              </button>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {survey.steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setSurvey({ ...survey, currentStep: index })}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    index === survey.currentStep
                      ? "bg-primary-600 text-white ring-2 ring-primary-300"
                      : step.pickedOption !== undefined
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "bg-gray-100 text-gray-500 border border-gray-300"
                  } hover:scale-110`}
                  title={`سوال ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="text-sm text-gray-500 mt-3 text-center">
              دایره‌های سبز: پاسخ داده شده
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-100 py-12 px-4 sm:px-6 lg:px-8 rounded-md">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            نظرسنجی سرور مونگوکرفت
          </h1>
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed text-right">
              در این نظرسنجی از شما می‌خواهیم به سوالاتی در مورد توسعه سرور مونگوکرفت پاسخ دهید.
              <br />
              این نظرسنجی فقط جهت بهبود سرور ماست.
              <br />
              پاسخ دادن به نظرسنجی کمتر از 1 دقیقه وقت شما رو می‌گیره.
              <br />
              <span className="font-bold text-primary-600">به سوالات چهار گزینه‌ای با دقت پاسخ دهید</span>
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-amber-600 bg-amber-50 p-4 rounded-xl">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>پاسخ‌ها پس از ارسال قابل تغییر نخواهند بود</span>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default Page;