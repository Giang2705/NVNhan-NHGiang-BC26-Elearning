import SearchIcon from "components/icons/SearchIcon";
import LogoIcon from "components/icons/LogoIcon";

export const headerMenuItems = [
  { title: <LogoIcon className="h-1 w-1" fill="none" stokeWidth="1px" /> },
  {
    title: "Catalog",
    path: "/catalog",
  },
  {
    title: "Resources",
    submenu: [
      {
        title: "Project",
        path: "/project",
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
        path: "/Career-center",
      },
    ],
  },
  {
    title: "Community",
    submenu: [
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
        path: "/chapters",
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
    title: "Pricing",
    submenu: [
      {
        title: "For Individuals",
        path: "/pricing",
      },
      {
        title: "For Students",
        path: "/studen-center",
      },
      {
        title: "For Teams",
        path: "/business-section-pricing-table",
      },
    ],
  },
  {
    title: "Business Solutions",
    path: "/business-solutions",
  },
  {
    title: <SearchIcon />,
    type: "Component"
  },
  {
    title: "Log in",
    path: "/log-in",
  },
];
