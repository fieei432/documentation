(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{299:function(t,e,a){"use strict";a.r(e);var s=a(15),o=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"additional-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#additional-configuration"}},[t._v("#")]),t._v(" Additional Configuration")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("This Software is Abandoned")]),t._v(" "),e("p",[t._v("This documentation is for "),e("strong",[t._v("abandoned software")]),t._v(" which does not recieve any security updates or support\nfrom the community. This documentation has been left accessible for historial reasons.")]),t._v(" "),e("p",[t._v("You should be installing and using "),e("RouterLink",{attrs:{to:"/wings/1.0/installing.html"}},[t._v("Wings")]),t._v(" in production environments with\n"),e("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html"}},[t._v("Pterodactyl Panel 1.0")]),t._v(".")],1)]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#output-throttles"}},[t._v("Output Throttles")])]),e("li",[e("a",{attrs:{href:"#custom-network-interfaces"}},[t._v("Custom Network Interfaces")])]),e("li",[e("a",{attrs:{href:"#private-registries"}},[t._v("Private Registries")])]),e("li",[e("a",{attrs:{href:"#security-policies"}},[t._v("Security Policies")])]),e("li",[e("a",{attrs:{href:"#container-policy"}},[t._v("Container Policy")]),e("ul",[e("li",[e("a",{attrs:{href:"#default-security-opts-array"}},[t._v("Default Security Opts Array")])]),e("li",[e("a",{attrs:{href:"#default-capabilities-drop-array"}},[t._v("Default Capabilities Drop Array")])])])]),e("li",[e("a",{attrs:{href:"#enabling-cloudflare"}},[t._v("Enabling Cloudflare")])])])]),e("p"),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("These are advanced configurations for the daemon. You risk breaking your daemon and making containers un-usable if\nyou modify something incorrectly. Proceed at your own risk, and only if you know what each configuration value does.")])]),t._v(" "),e("p",[t._v("The documentation below uses dot-notated JSON to explain where each setting should live. You will need to manually\nexpand this syntax when adding to the "),e("code",[t._v("core.json")]),t._v(" file for the Daemon. For example, something like "),e("code",[t._v("internals.throttle.enabled")]),t._v("\nwould be expanded to the JSON below.")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"internals"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"throttle"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"output-throttles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-throttles"}},[t._v("#")]),t._v(" Output Throttles")]),t._v(" "),e("p",[t._v("There are a few throttle limits built into the Daemon to keep people from causing issues with data volume and CPU usage.\nUnder normal circumstances users should not encounter these limits. You might see the occasional data throttling\nwarning while starting a server or when there is a sudden spike in data output.")]),t._v(" "),e("p",[t._v("If you're seeing more servers than you expected being killed as a result of the Daemon throttler, you can make\nadjustments to the settings below. Please note the configs below are in JSON dot-notation and should be expanded\nout into a normal JSON object.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Setting Path")]),t._v(" "),e("th",[t._v("Default Value")]),t._v(" "),e("th",[t._v("Notes")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("enabled")])]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Determines if the throttle (and associated values below) should be used.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("kill_at_count")])]),t._v(" "),e("td",[t._v("5")]),t._v(" "),e("td",[t._v("The number of warnings that can accumulate for a particular instance before the server process is killed. The decay time below affects how quickly this value is decreased.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("decay")])]),t._v(" "),e("td",[t._v("10")]),t._v(" "),e("td",[t._v("The number of seconds that a server process must go without triggering a data throttle warning before the throttle count begins decreasing. This loop is processed every 5 seconds and will decrement the throttle count by one when the process goes more than this number of seconds without a data throttle occurring.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("bytes")])]),t._v(" "),e("td",[t._v("30720")]),t._v(" "),e("td",[t._v("⚠️ "),e("em",[t._v("(removed in v0.5.5)")]),t._v(" The maximum number of bytes of data that can be output in the defined interval before a warning occurs.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("lines")])]),t._v(" "),e("td",[t._v("1000")]),t._v(" "),e("td",[t._v("⚠️ "),e("em",[t._v("(added in v0.5.6)")]),t._v(" The number of lines that can be output by the server process in the defined check interval time. By default, 5,000 lines in ~500ms results in a server process kill.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("check_interval_ms")])]),t._v(" "),e("td",[t._v("100")]),t._v(" "),e("td",[t._v("The number of milliseconds between the throttle resetting the used bytes or line count.")])])])]),t._v(" "),e("p",[t._v("Please note that all of the settings above are in the "),e("code",[t._v("internals.throttle.X")]),t._v(" path. So, "),e("code",[t._v("enabled")]),t._v(" is actually "),e("code",[t._v("internals.throttle.enabled")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"custom-network-interfaces"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-network-interfaces"}},[t._v("#")]),t._v(" Custom Network Interfaces")]),t._v(" "),e("p",[t._v("If for whatever reason you need to modify the network interfaces used for Pterodactyl's local Docker network you\ncan do so by modifying the "),e("code",[t._v("core.json")]),t._v(" file for the daemon. In most cases you'll just be modifying the network\nname to allow your servers to use the host network stack. To do so, just change "),e("code",[t._v("docker.network.name")]),t._v(" to be "),e("code",[t._v("host")]),t._v("\nrather than "),e("code",[t._v("pterodactyl_nw")]),t._v(" as shown below.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("While changing to the host network stack does allow servers running on Pterodactyl to have direct access to local\ninterfaces and bind to specific IP addresses (required for some Steam games), it is not recommended on public\ninstallations of Pterodactyl (where you have other users running servers).")]),t._v(" "),e("p",[t._v("Using the "),e("code",[t._v("host")]),t._v(" stack removes many network specific protections afforded by Docker, and will allow server processes\nto access anything on the host, as well as bind to any IP or Port they wish.")])]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),e("p",[t._v("Any changes to the network after the daemon has been started will require you to remove the docker network and restart the daemon. Any servers on the host need to be stopped before and most likely rebuilt.")]),t._v(" "),e("p",[t._v("The following will stop the daemon, remove the network, and start the daemon again. Run at your own risk."),e("br"),t._v(" "),e("code",[t._v("systemctl stop wings && docker network rm pterodactyl_nw && systemctl start wings")])])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docker"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"socket"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/run/docker.sock"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"autoupdate_images"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pterodactyl_nw"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"interfaces"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"v4"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subnet"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"172.18.0.0/16"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gateway"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"172.18.0.1"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"interface"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"172.18.0.1"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("h2",{attrs:{id:"private-registries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#private-registries"}},[t._v("#")]),t._v(" Private Registries")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Setting Path")]),t._v(" "),e("th",[t._v("Default Value")]),t._v(" "),e("th",[t._v("Notes")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("username")])]),t._v(" "),e("td",[e("em",[t._v("none")])]),t._v(" "),e("td",[t._v("The username to use when connecting to the registry.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("password")])]),t._v(" "),e("td",[e("em",[t._v("none")])]),t._v(" "),e("td",[t._v("The password associated with the account.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("images")])]),t._v(" "),e("td",[e("em",[t._v("none")])]),t._v(" "),e("td",[t._v("An array of images that are associated with the private registry.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("auth")])]),t._v(" "),e("td",[e("em",[t._v("none")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("email")])]),t._v(" "),e("td",[e("em",[t._v("none")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("serveraddress")])]),t._v(" "),e("td",[e("em",[t._v("none")])]),t._v(" "),e("td",[t._v("The address to the server the registry is located on.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("key")])]),t._v(" "),e("td",[e("em",[t._v("none")])]),t._v(" "),e("td",[t._v("A pre-generated base64 encoded authentication string. If provided none of the above options are required.")])])])]),t._v(" "),e("p",[t._v("Please note that all of the settings above are in the "),e("code",[t._v("docker.registry.X")]),t._v(" path. So, "),e("code",[t._v("username")]),t._v(" is actually "),e("code",[t._v("docker.registry.username")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"security-policies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#security-policies"}},[t._v("#")]),t._v(" Security Policies")]),t._v(" "),e("p",[t._v("This daemon ships with a very strict security configuration designed to limit access to the host system, and mitigate\na large range of potential attack vectors. However, some users might need to tweak these settings, or are running on\na private instance and are willing to decrease some of the security measures.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Setting Path")]),t._v(" "),e("th",[t._v("Default Value")]),t._v(" "),e("th",[t._v("Notes")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("ipv6")])]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Set this to false to disable IPv6 networking on the pterodactyl0 interface.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("internal")])]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Set this to true to prevent any external network access to all containers on the pterodactyl0 interface.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("enable_icc")])]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Set this to false to disallow containers to access services running on the host system's non-public IP addresses. Setting this to false does make it impossible to connect (from a container) to MySQL/Redis/etc. running on the host system without using the public IP address.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("enable_ip_masquerade")])]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Set this to false to disable IP Masquerading on the pterodactyl0 interface.")])])])]),t._v(" "),e("p",[t._v("Please note that all of the settings above are in the "),e("code",[t._v("docker.policy.network.X")]),t._v(" path. So, "),e("code",[t._v("ipv6")]),t._v(" is actually "),e("code",[t._v("docker.policy.network.ipv6")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"container-policy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#container-policy"}},[t._v("#")]),t._v(" Container Policy")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Setting Path")]),t._v(" "),e("th",[t._v("Default Value")]),t._v(" "),e("th",[t._v("Notes")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("tmpfs")])]),t._v(" "),e("td",[e("code",[t._v("rw,exec,nosuid,size=50M")])]),t._v(" "),e("td",[t._v("These are the arguments used for mounting a "),e("code",[t._v("tmpfs")]),t._v(" directory into containers to allow certain programs to run.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("log_driver")])]),t._v(" "),e("td",[t._v("none")]),t._v(" "),e("td",[t._v("⚠️ This option was "),e("strong",[t._v("removed")]),t._v(" in "),e("code",[t._v("v0.6")]),t._v(" and is forcibly set to "),e("code",[t._v("json-file")]),t._v(". The log driver to use for containers. We default to "),e("code",[t._v("none")]),t._v(" to mitigate a potential DoS attack vector if a server were to spam log output.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("log_opts")])]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("log_opts.max_size")])]),t._v(" "),e("td",[e("code",[t._v("5m")])]),t._v(" "),e("td",[t._v("The maximum size of the server output log file created by Docker.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("log_opts.max_files")])]),t._v(" "),e("td",[e("code",[t._v("1")])]),t._v(" "),e("td",[t._v("The maximum number of files that Docker will create with output from the server.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("readonly_root")])]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Determines if the root filesystem of the container should be readonly.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("securityopts")])]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td",[t._v("An array of security options to apply to a container. The default array is provided below.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("cap_drop")])]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td",[t._v("An array of linux capabilities to drop from the container (in addition to ones "),e("a",{attrs:{href:"https://docs.docker.com/engine/security/security/#linux-kernel-capabilities",target:"_blank",rel:"noopener noreferrer"}},[t._v("dropped by docker already"),e("OutboundLink")],1),t._v(". A listing of the default array is below.")])])])]),t._v(" "),e("p",[t._v("Please note that all of the settings above are in the "),e("code",[t._v("docker.policy.container.X")]),t._v(" path. So, "),e("code",[t._v("tmpfs")]),t._v(" is actually "),e("code",[t._v("docker.policy.container.tmpfs")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"default-security-opts-array"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-security-opts-array"}},[t._v("#")]),t._v(" Default Security Opts Array")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    'no-new-privileges'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h3",{attrs:{id:"default-capabilities-drop-array"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-capabilities-drop-array"}},[t._v("#")]),t._v(" Default Capabilities Drop Array")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Starting with "),e("code",[t._v("v0.6")]),t._v(" of the Daemon, the following previously "),e("em",[t._v("dropped")]),t._v(" capabilities are available in containers: "),e("code",[t._v("chown")]),t._v(", "),e("code",[t._v("kill")]),t._v(", "),e("code",[t._v("setgid")]),t._v(", and "),e("code",[t._v("setuid")]),t._v(".")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    'setpcap'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'mknod'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'audit_write'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'net_raw'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'dac_override'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'fowner'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'fsetid'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'net_bind_service'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'sys_chroot'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'setfcap'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h2",{attrs:{id:"enabling-cloudflare"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enabling-cloudflare"}},[t._v("#")]),t._v(" Enabling Cloudflare")]),t._v(" "),e("p",[t._v("Enabling Cloudflare on the daemon isn't particularly useful since users do not connect directly to the daemon port, and users need an unproxied hostname to access any servers on the node.  As a result it's not possible to conceal the IP address of your node machine, but some people want to enable it regardless.")]),t._v(" "),e("p",[t._v("Cloudflare only proxies the default daemon port (8080) when using HTTP.  In order to get the daemon to work with Cloudflare when HTTPS is enabled you must change the daemon port to one that Cloudflare will proxy such as 8443.  Since Cloudflare only proxies HTTP/HTTPS traffic for non-enterprise plans you cannot proxy the SFTP port.")])])}),[],!1,null,null,null);e.default=o.exports}}]);