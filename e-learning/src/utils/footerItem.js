import AppStoreIcon from "components/icons/AppStoreIcon";
import GooglePlayIcon from "components/icons/GooglePlayIcon";
import LogoIcon from "components/icons/LogoIcon";

export const footerItems = [
  {
    title: <LogoIcon className="h-1 w-1" fill="none" stokeWidth="1px" />,
    subItem: [
      { title: "About", path: "/about" },
      { title: "Careers", path: "/Careers" },
      { title: "Affiliates", path: "/Affiliates" },
      { title: "Shop", path: "/Shop" },
    ],
  },
  {
    title: "Resources",
    subItem: [
      {
        title: "Project",
        path: "/projects",
      },
      {
        title: "Challenges",
        path: "/challenges",
      },
      {
        title: "Docs",
        path: "/docs",
      },
      {
        title: "Cheatsheets",
        path: "/cheatsheets",
      },
      {
        title: "Articles",
        path: "/articles",
      },
      {
        title: "Videos",
        path: "/videos",
      },
      {
        title: "Blogs",
        path: "/blogs",
      },
      {
        title: "Career Center",
        path: "/carees-center",
      },
    ],
  },
  {
    title: "Community",
    subItem: [
      {
        title: "Forums",
        path: "/forums",
      },
      {
        title: "Discords",
        path: "/discords",
      },
      {
        title: "Chapters",
        path: "/chepters",
      },
      {
        title: "Events",
        path: "/events",
      },
      {
        title: "Learner Stories",
        path: "/learner-stories",
      },
    ],
  },
  {
    title: "MOBILE",
    subItem: [
      {
        title: (
          <AppStoreIcon className="h-1 w-1" fill="none" stokeWidth="1px" />
        ),
      },
      {
        title: (
          <GooglePlayIcon className="h-1 w-1" fill="none" stokeWidth="1px" />
        ),
      },
    ],
  },
  {
    title: "INDIVIDUAL PLANS",
    subItem: [
      {
        title: "Pro Membership",
        path: "/pro/membership",
      },
      {
        title: "For Student",
        path: "/student-center",
      },
    ],
  },
  {
    title: "ENTERPRISE PLANS",
    subItem: [
      {
        title: "Business Solutions",
        path: "/business",
      },
    ],
  },
  {
    title: "SUPPORT",
    subItem: [
      {
        title: "Help Center",
        path: "/help-center",
      },
    ],
  },
];
