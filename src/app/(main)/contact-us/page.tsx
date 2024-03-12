import ContactForm from "@/components/templates/Contact-us/ContactForm";
import Image from "next/image";

const ContactUsPage = () => {
  return (
    <div
      data-aos="fade-down"
      className="flex flex-col sm:flex-row items-center p-5"
    >
      <div className="sm:w-1/2">
        <Image
          alt="contact-us"
          width={1000}
          height={1000}
          src={"/images/contact.gif"}
        />
      </div>
      <div className="w-full sm:w-1/2">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUsPage;
