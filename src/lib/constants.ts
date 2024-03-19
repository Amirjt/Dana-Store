import {
  ShoppingBasket,
  Heart,
  Home,
  Ticket,
  MessageCircle,
  Settings,
  LucideIcon,
  Users,
  Percent,
  Mail,
  Layers3,
} from "lucide-react";

export const headerLinks = [
  {
    id: 1,
    title: "صفحه اصلی",
    path: "/",
  },
  {
    id: 2,
    title: "فروشگاه",
    path: "/products",
  },
  {
    id: 3,
    title: "وبلاگ",
    path: "/blog",
  },
  {
    id: 4,
    title: "تماس با ما",
    path: "/contact-us",
  },
  {
    id: 5,
    title: "درباره ما",
    path: "/about-us",
  },
];

export const productColors = [
  { color: "#000000" },
  { color: "#0070F0" },
  { color: "#7828C8" },
  { color: "#F31260" },
  { color: "#F5A524" },
  { color: "#18C964" },
  { color: "#9F1239" },
  { color: "#6366F1" },
  { color: "#71717A" },
  { color: "#0F766E" },
  { color: "#29CCD5" },
  { color: "#324873" },
];

export interface Links {
  id: number;
  title: string;
  path: string;
  icon?: LucideIcon | React.ReactNode;
}

export const UserDashboardLinks = [
  {
    id: 1,
    title: "پیشخوان",
    path: "/p-user",
    icon: Home,
  },
  {
    id: 2,
    title: "سفارشات",
    path: "/p-user/orders",
    icon: ShoppingBasket,
  },
  {
    id: 3,
    title: "لیست علاقه مندی ها",
    path: "/p-user/wishlist",
    icon: Heart,
  },
  {
    id: 4,
    title: "تیکت ها",
    path: "/p-user/tickets",
    icon: Ticket,
  },
  {
    id: 5,
    title: "دیدگاه ها",
    path: "/p-user/comments",
    icon: MessageCircle,
  },
  {
    id: 6,
    title: "تنظیمات",
    path: "/p-user/settings",
    icon: Settings,
  },
];

export const AdminDashboardLinks = [
  {
    id: 1,
    title: "پیشخوان",
    path: "/p-admin",
    icon: Home,
  },
  {
    id: 2,
    title: "محصولات",
    path: "/p-admin/products",
    icon: ShoppingBasket,
  },
  {
    id: 3,
    title: "دسته بندی ها",
    path: "/p-admin/categories",
    icon: Layers3,
  },
  {
    id: 4,
    title: "کاربر ها",
    path: "/p-admin/users",
    icon: Users,
  },
  {
    id: 5,
    title: "دیدگاه ها",
    path: "/p-admin/comments",
    icon: MessageCircle,
  },
  {
    id: 6,
    title: "تیکت ها",
    path: "/p-admin/tickets",
    icon: Ticket,
  },
  {
    id: 7,
    title: "کد های تخفیف",
    path: "/p-admin/discount",
    icon: Percent,
  },
  {
    id: 8,
    title: "درخواست ها",
    path: "/p-admin/requests",
    icon: Mail,
  },
  {
    id: 9,
    title: "تنظیمات",
    path: "/p-admin/settings",
    icon: Settings,
  },
];
