import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { productColors } from "@/lib/constants";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SideBar = () => {
  return (
    <>
      <aside className="hidden sm:flex p-4  flex-col gap-6 h-fit">
        <h2 className="font-bold text-lg">فیلتر محصولات</h2>
        <div>
          <h3 className="font-semibold">دسته بندی ها</h3>
          <RadioGroup
            className="mt-3 text-sm"
            dir="rtl"
            defaultValue="comfortable"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <label className="pr-2" htmlFor="r1">
                کامپیوتر
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortsdable" id="r2" />
              <label className="pr-2" htmlFor="r2">
                لپتاپ
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compasdact" id="r3" />
              <label className="pr-2" htmlFor="r3">
                گوشی
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compacdt" id="r3" />
              <label className="pr-2" htmlFor="r3">
                گوشی
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compacwt" id="r3" />
              <label className="pr-2" htmlFor="r3">
                گوشی
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compacts" id="r3" />
              <label className="pr-2" htmlFor="r3">
                گوشی
              </label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <h3 className="font-semibold">برند ها</h3>
          <RadioGroup
            className="mt-3 text-sm"
            dir="rtl"
            defaultValue="comfortable"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <label className="pr-2" htmlFor="r1">
                اپل
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortsdable" id="r2" />
              <label className="pr-2" htmlFor="r2">
                سامسونگ
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compasdact" id="r3" />
              <label className="pr-2" htmlFor="r3">
                هواوی
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compacdt" id="r3" />
              <label className="pr-2" htmlFor="r3">
                شیائومی
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compacwt" id="r3" />
              <label className="pr-2" htmlFor="r3">
                ایسوس
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compacts" id="r3" />
              <label className="pr-2" htmlFor="r3">
                ایسر
              </label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <h3 className="font-semibold">رنگ ها</h3>
          <div className="flex flex-wrap items-center gap-3 justify-center mt-3">
            {productColors.map((col) => (
              <span
                key={col.color}
                style={{
                  backgroundColor: col.color,
                }}
                className={`w-8 h-8 rounded-xl cursor-pointer`}
              ></span>
            ))}
          </div>
        </div>
      </aside>
      <Accordion className="sm:hidden p-2" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold">
            فیلتر محصولات
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <div>
              <h3 className="font-semibold">دسته بندی ها</h3>
              <RadioGroup
                className="mt-3 text-sm"
                dir="rtl"
                defaultValue="comfortable"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <label className="pr-2" htmlFor="r1">
                    کامپیوتر
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortsdable" id="r2" />
                  <label className="pr-2" htmlFor="r2">
                    لپتاپ
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compasdact" id="r3" />
                  <label className="pr-2" htmlFor="r3">
                    گوشی
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compacdt" id="r3" />
                  <label className="pr-2" htmlFor="r3">
                    گوشی
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compacwt" id="r3" />
                  <label className="pr-2" htmlFor="r3">
                    گوشی
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compacts" id="r3" />
                  <label className="pr-2" htmlFor="r3">
                    گوشی
                  </label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <h3 className="font-semibold">برند ها</h3>
              <RadioGroup
                className="mt-3 text-sm"
                dir="rtl"
                defaultValue="comfortable"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <label className="pr-2" htmlFor="r1">
                    اپل
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortsdable" id="r2" />
                  <label className="pr-2" htmlFor="r2">
                    سامسونگ
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compasdact" id="r3" />
                  <label className="pr-2" htmlFor="r3">
                    هواوی
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compacdt" id="r3" />
                  <label className="pr-2" htmlFor="r3">
                    شیائومی
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compacwt" id="r3" />
                  <label className="pr-2" htmlFor="r3">
                    ایسوس
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compacts" id="r3" />
                  <label className="pr-2" htmlFor="r3">
                    ایسر
                  </label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <h3 className="font-semibold">رنگ ها</h3>
              <div className="flex flex-wrap gap-3 mt-3">
                {productColors.map((col) => (
                  <span
                    key={col.color}
                    style={{
                      backgroundColor: col.color,
                    }}
                    className={`w-8 h-8 rounded-xl cursor-pointer`}
                  ></span>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default SideBar;
