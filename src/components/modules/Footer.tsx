import { headerLinks } from "@/lib/constants";
import Link from "next/link";

import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row gap-10 items-center justify-between mt-20 p-20 border-t">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="font-bold text-xl">درباره ما</h2>
        <p className="text-center text-sm leading-7">
          فروشگاه دانا : با ما بهترین خرید خود را تجربه کنید ، قیمت فوق العاده ،
          کیفیت باور نکردنی و همچنین ضمانت بازگشت وجه
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center w-1/2">
        <h2 className="font-bold text-xl">دسترسی سریع</h2>
        <div className="flex flex-col gap-2 items-center">
          {headerLinks.map((link) => (
            <Link className="hover:opacity-85" key={link.id} href={link.path}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center sm:w-1/2">
        <h2 className="font-bold text-xl">شبکه های اجتماعی</h2>
        <div className="flex items-center gap-2">
          <Instagram color="red" />
          <Twitter color="blue" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
