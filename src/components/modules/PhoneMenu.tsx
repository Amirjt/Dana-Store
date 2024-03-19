import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Links } from "@/lib/constants";
import { Menu } from "lucide-react";
import Link from "next/link";

type Props = {
  links: Links[];
};

const PhoneMenu: React.FC<Props> = ({ links }) => {
  return (
    <div className="sm:hidden absolute top-[18px]">
      <Sheet>
        <SheetTrigger asChild>
          <Menu strokeWidth={1.2} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>فروشگاه دانا</SheetTitle>
            <SheetDescription>
              نهایت لذت را از خرید خود بهره مند شوید
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col items-center gap-4 py-5 font-semibold text-primary text-lg">
            {links.map((link) => (
              <Link key={link.id} href={link.path}>
                {link.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default PhoneMenu;
