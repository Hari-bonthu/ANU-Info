import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as BreadcrumbTrail } from "./BreadcrumbTrail-CqCFC3Ty.mjs";
import { g as getCollegePage, a as CollegeDetailPage } from "./college-section-hVBB0Snb.mjs";
import { af as Route$4 } from "./router-Dtgf3qry.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/lucide-react.mjs";
import "./College_Sciences-CzxKwAeu.mjs";
import "../_libs/embla-carousel-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
function CollegeRoute() {
  const {
    collegeId
  } = Route$4.useParams();
  const college = getCollegePage(collegeId);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbTrail, { items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Colleges"
    }, {
      label: college.name
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CollegeDetailPage, { collegeId })
  ] }) });
}
export {
  CollegeRoute as component
};
