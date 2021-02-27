(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{409:function(e,a,t){"use strict";t.r(a);var r=t(46),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"upgrading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading"}},[e._v("#")]),e._v(" Upgrading")]),e._v(" "),t("p",[e._v("Upgrading the Panel is a relatively simple process. Below you will find a list of articles that will walk you through\nthe upgrade process for each version of the software.")]),e._v(" "),t("h2",{attrs:{id:"maintenance-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maintenance-mode"}},[e._v("#")]),e._v(" Maintenance Mode")]),e._v(" "),t("p",[e._v("Whenever you are performing an upgrade you should be sure to place your Panel into maintenance mode. This will prevent\nusers from encountering unexpected errors and ensure everything can be upgraded before users encounter\npotentially new features.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Put the Panel into maintenance mode and deny user access")]),e._v("\nphp artisan down\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Bring the Panel back up to receive connections.")]),e._v("\nphp artisan up\n")])])]),t("h2",{attrs:{id:"restarting-queue-workers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restarting-queue-workers"}},[e._v("#")]),e._v(" Restarting Queue Workers")]),e._v(" "),t("p",[e._v("After "),t("em",[e._v("every")]),e._v(" update you should restart the queue worker to ensure that the new code is loaded in and used.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("php artisan queue:restart\n")])])]),t("h2",{attrs:{id:"version-specific-guides"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version-specific-guides"}},[e._v("#")]),e._v(" Version Specific Guides")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/panel/1.0/upgrade/0.7_to_1.0.html"}},[e._v("Upgrading from 0.7.X")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/panel/1.0/upgrade/1.0.html"}},[e._v("1.X.X series")])],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);