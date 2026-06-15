import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { e as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as BreadcrumbTrail } from "./BreadcrumbTrail-CqCFC3Ty.mjs";
import { ac as Route$6, a8 as getEmployeeServiceTab, ab as employeeServiceTabs } from "./router-Dtgf3qry.mjs";
import { E as EmployeeServicesApp } from "./employee-services-app-D59DI9zX.mjs";
import { n as ChevronRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/embla-carousel-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
function EmployeeServicesShell({
  pageId,
  children
}) {
  const activeTab = getEmployeeServiceTab(pageId);
  const [isMenuOpen, setIsMenuOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

        :root {
          --ink: #12213a;
          --ink-mid: #1e3558;
          --gold: #b8860b;
          --gold-light: #d4a017;
          --parchment: #faf7f2;
          --parchment-dark: #f0ebe0;
          --cream: #f5f0e8;
          --rule: #d9d0bf;
          --muted: #6b6352;
        }

        .employee-root {
          background-color: var(--parchment);
          min-height: 100vh;
          font-family: 'Source Serif 4', Georgia, serif;
          color: var(--ink);
        }

        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-serif { font-family: 'Source Serif 4', Georgia, serif; }
        .font-garamond { font-family: 'EB Garamond', serif; }

        .employee-masthead {
          background-color: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 50%, #1a3060 100%);
          position: relative;
          overflow: hidden;
        }

        .employee-masthead::before {
          content: 'EMPLOYEE';
          position: absolute;
          right: -1rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Playfair Display', serif;
          font-size: clamp(4rem, 10vw, 8rem);
          font-weight: 700;
          color: rgba(184,134,11,0.05);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .gold-rule {
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent);
        }

        .sidebar-menu {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          overflow: hidden;
          position: sticky;
          top: 6rem;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--rule);
          color: var(--muted);
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
        }

        .sidebar-link:last-child {
          border-bottom: none;
        }

        .sidebar-link:hover {
          background: var(--parchment-dark);
          color: var(--ink);
        }

        .sidebar-link[data-active="true"] {
          background: var(--ink);
          color: #fff;
        }

        .sidebar-link[data-active="true"] .sidebar-icon {
          color: var(--gold-light);
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "employee-root pb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "employee-masthead py-8 text-center text-white lg:py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-4xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-playfair text-3xl font-bold tracking-tight md:text-5xl", children: "Employee Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-garamond mx-auto mt-6 max-w-2xl text-lg italic tracking-wide text-[var(--gold-light)] md:text-xl", children: '"Supporting our faculty and staff with streamlined administration, professional development, and welfare services."' })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-rule" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 py-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        BreadcrumbTrail,
        {
          items: [
            { label: "Home", href: "/" },
            { label: "Employee Services", href: "/employee-services" },
            { label: activeTab.shortTitle }
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 py-8 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-10 lg:grid-cols-[300px_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "w-full lg:w-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:sticky lg:top-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "sidebar-menu", "aria-label": "Employee Services Navigation", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setIsMenuOpen(!isMenuOpen),
              className: "w-full flex items-center justify-between bg-[var(--parchment-dark)] px-6 py-4 border-b border-[var(--rule)] text-left focus:outline-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-lg font-bold text-[var(--ink)]", children: "Service Directory" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 lg:hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-[var(--gold)] bg-white border border-[var(--rule)] px-2.5 py-1 rounded", children: activeTab.shortTitle }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ChevronRight,
                    {
                      className: `h-4 w-4 transition-transform duration-200 text-[var(--gold)] ${isMenuOpen ? "rotate-90" : ""}`
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${isMenuOpen ? "flex" : "hidden"} lg:flex flex-col`, children: employeeServiceTabs.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: `/employee-services/${item.key}`,
              className: "sidebar-link",
              "data-active": activeTab.key === item.key,
              onClick: () => setIsMenuOpen(false),
              children: [
                item.shortTitle,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "sidebar-icon h-4 w-4 opacity-50" })
              ]
            },
            item.key
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-w-0 pb-8", id: "employee-services-content", children })
      ] }) })
    ] })
  ] });
}
function EmployeeServicesPageComponent() {
  const {
    pageId
  } = Route$6.useParams();
  const navigate = useNavigate({
    from: Route$6.fullPath
  });
  const handlePageChange = (newPageId) => {
    navigate({
      params: {
        pageId: newPageId
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeServicesShell, { pageId, children: /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeServicesApp, { page: pageId, onPageChange: handlePageChange }) });
}
export {
  EmployeeServicesPageComponent as component
};
