import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-bold text-lg self-center text-primary">
        جهت ارتباط با ما فرم زیر را پر کنید
      </h2>
      <Input type="text" placeholder="نام و نام خانوادگی" />
      <Input type="text" placeholder="ایمیل" />
      <Input type="number" placeholder="شماره تماس" />
      <Textarea placeholder="پیام مربوطه" rows={15} />
      <Button>ارسال </Button>
      <div className="flex items-center justify-between text-muted-foreground">
        <h4>شماره تماس شرکت :</h4>
        <p>021-6193-0000</p>
      </div>
    </div>
  );
};

export default ContactForm;
