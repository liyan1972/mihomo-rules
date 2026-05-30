// FlClash 覆写脚本

function main(config) {
  // --- 1. 基础变量定义 ---
  const autoGroups = [ "JPAuto", "SGAuto", "TWAuto", "HKAuto", "USAuto" ];
  const selectGroups = [ "Proxy", "HKAuto", "JPAuto", "SGAuto", "TWAuto", "USAuto", "DIRECT" ];

  // --- 2. 规则集配置 ---
  const mrsDomain = { behavior: "domain", interval: 86400, format: "mrs", type: "http" };
  const mrsIP = { behavior: "ipcidr", interval: 86400, format: "mrs", type: "http" };

  // --- 3. Auto测速 ---
  const urlTestGroups = { type: "url-test", "include-all": true, hidden: true, interval: 300, tolerance: 30, url: "https://www.google.com/generate_204" };

  // --- 4. 代理组 ---
  config["proxy-groups"] = [
    { name: "Proxy", type: "select", "include-all": true, proxies: [ "Auto", "HKAuto", "JPAuto", "SGAuto", "TWAuto", "USAuto" ], icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Available.png" },
    { name: "Auto", type: "fallback", interval: 300, tolerance: 30, proxies: autoGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Auto.png" },
    
    // 业务组 (修正了 icon 的引号问题，并将 🤖 AGI 改为了 ChatGPT 以匹配规则)
    { name: "ChatGPT",   type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/ChatGPT.png" },
    { name: "YouTube",   type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/YouTube.png" },
    { name: "Google",    type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Google_Search.png" },
    { name: "GitHub",    type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/GitHub.png" },
    { name: "OneDrive",  type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Windows.png" },
    { name: "Microsoft", type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Microsoft.png" },
    { name: "TikTok",    type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/TikTok.png" },
    { name: "Telegram",  type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Telegram.png" },
    { name: "NETFLIX",   type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Netflix.png" },
    { name: "PayPal",    type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/PayPal.png" },
    { name: "Speedtest", type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Speedtest.png" },

    // Auto测速组
    { name: "HKAuto", ...urlTestGroups, filter: "(?i)(🇭🇰|HK|香港)" },
    { name: "JPAuto", ...urlTestGroups, filter: "(?i)(🇯🇵|JP|日本)" },
    { name: "SGAuto", ...urlTestGroups, filter: "(?i)(🇸🇬|SG|新加坡)" },
    { name: "TWAuto", ...urlTestGroups, filter: "(?i)(🇹🇼|TW|台湾)" },
    { name: "USAuto", ...urlTestGroups, filter: "(?i)(🇺🇸|US|美国)" },
    
    // 修正拼写 Fianl -> Final
    { name: "Final", type: "select", proxies: [ "Proxy", "DIRECT" ], hidden: true }
  ];

  // --- 5. 规则集 ---
  config["rule-providers"] = {
    private_domain: { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/private.mrs", path: "./ruleset/private_domain.mrs" },
    speedtest_domain: { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/ookla-speedtest.mrs", path: "./ruleset/speedtest_domain.mrs" },
    ai: { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/category-ai-!cn.mrs", path: "./ruleset/ai.mrs" },
    github_domain: { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/github.mrs", path: "./ruleset/github_domain.mrs" },
    youtube_domain: { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/youtube.mrs", path: "./ruleset/youtube_domain.mrs" },
    google_domain: { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/google.mrs", path: "./ruleset/google_domain.mrs" },
    onedrive_domain: { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/onedrive.mrs", path: "./ruleset/onedrive_domain.mrs" },
    microsoft_domain: { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/microsoft.mrs", path: "./ruleset/microsoft_domain.mrs" },
    tiktok_domain: { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/tiktok.mrs", path: "./ruleset/tiktok_domain.mrs" },
    telegram_domain: { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/telegram.mrs", path: "./ruleset/telegram_domain.mrs" },
    netflix_domain: { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/netflix.mrs", path: "./ruleset/netflix_domain.mrs" },
    paypal_domain: { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/paypal.mrs", path: "./ruleset/paypal_domain.mrs" },
    "geolocation-!cn": { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/geolocation-!cn.mrs", path: "./ruleset/geolocation-!cn.mrs" },
    cn_domain: { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.mrs", path: "./ruleset/cn_domain.mrs" },
    private_ip: { ...mrsIP, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/private.mrs", path: "./ruleset/private_ip.mrs" },
    google_ip: { ...mrsIP, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/google.mrs", path: "./ruleset/google_ip.mrs" },
    telegram_ip: { ...mrsIP, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/telegram.mrs", path: "./ruleset/telegram_ip.mrs" },
    netflix_ip: { ...mrsIP, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/netflix.mrs", path: "./ruleset/netflix_ip.mrs" },
    cn_ip: { ...mrsIP, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.mrs", path: "./ruleset/cn_ip.mrs" }
  };

  // --- 6. 规则 ---
  config["rules"] = [
    "RULE-SET,private_ip,DIRECT,no-resolve",
    "RULE-SET,private_domain,DIRECT",
    "RULE-SET,speedtest_domain,Speedtest",
    "RULE-SET,ai,ChatGPT",
    "RULE-SET,github_domain,GitHub",
    "RULE-SET,youtube_domain,YouTube",
    "RULE-SET,google_domain,Google",
    "RULE-SET,onedrive_domain,OneDrive",
    "RULE-SET,microsoft_domain,Microsoft",
    "RULE-SET,tiktok_domain,TikTok",
    "RULE-SET,telegram_domain,Telegram",
    "RULE-SET,netflix_domain,NETFLIX",
    "RULE-SET,paypal_domain,PayPal",
    "RULE-SET,geolocation-!cn,Proxy",
    "RULE-SET,cn_domain,DIRECT",
    "RULE-SET,google_ip,Google,no-resolve",
    "RULE-SET,netflix_ip,NETFLIX,no-resolve",
    "RULE-SET,telegram_ip,Telegram,no-resolve",
    "RULE-SET,cn_ip,DIRECT",
    "MATCH,Final"
  ];

  return config;
}
