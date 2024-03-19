import Comments from "@/components/modules/Comments";

const SinglePostPage = () => {
  return (
    <div
      data-aos="fade-up-left"
      className="sm:w-1/2 sm:mx-auto m-5 border border-muted shadow-lg p-5 rounded-lg mt-7"
    >
      <div className="flex flex-col gap-4">
        <img
          src="https://cdn.kalatik.com/blog_media/0/24/03/11/1j5T0p4xhrLQ.jpg"
          alt=""
          className="rounded-lg"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/images/noavatar.png" width={30} alt="" />
            <span className="text-sm font-semibold">آنیا عباسی</span>
          </div>
          <div>
            <div>
              <span className="text-sm text-muted-foreground">1402.11.10</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl">بهترین گوشی تا 15 میلیون تومن</h2>
          <div>
            <span className="bg-primary px-4 py-1 rounded-lg text-white text-sm">
              کاربردی
            </span>
          </div>
        </div>
        <p className="leading-8 text-justify text-muted-foreground">
          ترکیب کردن قهوه‌های مختلف با هم خود آمیزه‌ای است از علم و هنر. اینکه
          کدام یک از صدها زیرگونه قهوه عربیکا با زیرگونه‌های روبوستا می‌تواند
          توازن طعمی، میزان اسیدیتی مطلوب، تلخی خوشگوار، تنواری (بادی) دلپذیر و
          افترتیست ماندگار را به وجود بیاورد نیازمند داشتن تخصص، مهارت و تجربه
          بالاست. برای یک قهوه دوست تجربه ای بسیار خوشایند خواهد بود که سرمای
          زمستان را با حرارت یک فنجان قهوه گذر کند ، فنجان قهوه ای که به صورت
          محدود در این فصل در دسترس خواهد بود . ترکیبی از دانه های قهوه آمریکای
          مرکزی وجنوبی و آسیا و برشته کاری متوسط رو به بالای آن فنجانی معطر با
          تنواری بالا را ایجاد میکند و طعم یاد آجیل جات و توت جات به همراه شکلات
          تلخ نوشیدن آنرا در سرمای زمستان بسیار خوشآیند میسازد. قهوه مکزیک از
          آمریکای لاتین همواره مخاطبان خاص خود را داشته است ، آرومای خاص این
          قهوه به همراه شیرینی شکر قهوه ای و طعم یادهایی نظیر دارچین و ادویه های
          دیگر هویت خاصی به این ترکیب بخشیده که در کنار قهوه های آمریکای لاتین
          دیگر و آفریقا و آسیا ترکیب جذابی را بوجود آورده است . این ترکیب به
          خصوص برای دم آوری در دستگاه قهوه ساز خانگی و یا فرنچ پرس و حتی موکاپات
          بسیار جذاب است . اسیدیته متوسط این ترکیب آنرا کاندید جالبی برای ترکیب
          با شیر نیز کرده است .
        </p>
        <Comments />
      </div>
    </div>
  );
};

export default SinglePostPage;
