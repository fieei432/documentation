(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{301:function(a,t,s){"use strict";s.r(t);var e=s(15),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"artisan-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#artisan-cli"}},[a._v("#")]),a._v(" Artisan CLI")]),a._v(" "),t("p",[a._v("The Artisan CLI, command line interface, is part of the Laravel framework, which Pterodactyl is built on. The Artisan file is located in "),t("code",[a._v("/var/www/pterodactyl")]),a._v(" if you followed the official guide. This guide goes over some more Pterodactyl specific/related Artisan commands, which are all prefixed with the letter "),t("code",[a._v("p")]),a._v(" (e.g. "),t("code",[a._v("p:user:make")]),a._v("). If you'd like to view all commands, you can do so by running:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan list\n")])])]),t("p",[a._v("To get information regarding a specific command you can do so by running:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("command"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("To simplify this documentation, in command usage you'll see things like the following:")]),a._v(" "),t("p",[t("code",[a._v("<hello-world>")]),a._v(" - Required argument")]),a._v(" "),t("p",[t("code",[a._v("[hello-world]")]),a._v(" - Optional argument")]),a._v(" "),t("p",[t("code",[a._v("{--hello-world}")]),a._v(" - Option")])]),a._v(" "),t("h2",{attrs:{id:"user-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-management"}},[a._v("#")]),a._v(" User Management")]),a._v(" "),t("p",[a._v("When running any of the following commands, you can either use the options or don't pass through anything and use the interactive prompt. You can also do both passing through options and using interactive prompts as well.")]),a._v(" "),t("h3",{attrs:{id:"create-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-user"}},[a._v("#")]),a._v(" Create User")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan p:user:make "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--email"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("user@example.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--username"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("myusername"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--name-first"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("My"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--name-last"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--password"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("supersecret"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--admin"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--no-password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h3",{attrs:{id:"delete-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-user"}},[a._v("#")]),a._v(" Delete User")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan p:user:delete "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--user"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("username/email/UUID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h3",{attrs:{id:"disable-2fa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disable-2fa"}},[a._v("#")]),a._v(" Disable 2FA")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("Disabling 2-factor authentication should only be used as a last resort for user recovery. "),t("strong",[a._v("Please use this with caution.")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan p:user:disable2fa "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--email"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("user@example.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h2",{attrs:{id:"server-node-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-node-management"}},[a._v("#")]),a._v(" Server & Node Management")]),a._v(" "),t("h3",{attrs:{id:"create-location"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-location"}},[a._v("#")]),a._v(" Create Location")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan p:location:make "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--short"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("us1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n                            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--long"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"A description of this location."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h3",{attrs:{id:"delete-location"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-location"}},[a._v("#")]),a._v(" Delete Location")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan p:location:delete "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--short"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("us1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h3",{attrs:{id:"server-bulk-power"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-bulk-power"}},[a._v("#")]),a._v(" Server Bulk Power")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan p:server:bulk-power "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("start, stop, kill, restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--servers"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1,2")]),a._v(",3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n                                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--nodes"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1,2")]),a._v(",3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h2",{attrs:{id:"panel-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#panel-management"}},[a._v("#")]),a._v(" Panel Management")]),a._v(" "),t("h3",{attrs:{id:"view-panel-info"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-panel-info"}},[a._v("#")]),a._v(" View Panel Info")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan p:info\n")])])]),t("p",[a._v("Displays a variety of panel information that can be used to check the configuration of things such as database and email.")]),a._v(" "),t("h3",{attrs:{id:"update-panel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-panel"}},[a._v("#")]),a._v(" Update Panel")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan p:upgrade   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--user"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("www-data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--group"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("www-data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--url"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://example.com/panel.tar.gz"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--release"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("latest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--skip-download"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("Downloads a new archive for Pterodactyl and executes the normal upgrade commands.")])])}),[],!1,null,null,null);t.default=n.exports}}]);