// FlClash 覆写脚本

function main(config) {
  // --- 1. 基础变量定义 ---
  const selectGroups = [ "默认代理", "香港节点", "日本节点", "狮城节点", "台湾节点", "韩国节点", "美国节点", "DIRECT" ];

  // --- 2. 规则集配置 ---
  const mrsDomain = { behavior: "domain", interval: 86400, format: "mrs", type: "http" };
  const mrsIP =     { behavior: "ipcidr", interval: 86400, format: "mrs", type: "http" };

  // --- 3. Auto测速 ---
  const urlTestGroups = { type: "url-test", "include-all": true, hidden: true, interval: 300, tolerance: 30, url: "https://www.gstatic.com/generate_204" };

  // --- 4. 代理组 ---
  config["proxy-groups"] = [
    { name: "默认代理",  type: "select", "include-all": true, proxies: [ "香港节点", "日本节点", "狮城节点", "台湾节点", "韩国节点", "美国节点" ], icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Available.png" },
    
    // 业务组
    { name: "人工智能",  type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/ChatGPT.png" },
    { name: "油管服务",  type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/YouTube.png" },
    { name: "谷歌服务",  type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Google_Search.png" },
    { name: "微软服务",  type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Microsoft.png" },
    { name: "托管服务",  type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/GitHub.png" },
    { name: "抖音平台",  type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/TikTok.png" },
    { name: "电报服务",  type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Telegram.png" },
    { name: "奈飞服务",  type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Netflix.png" },
    { name: "贝宝服务",  type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/PayPal.png" },
    { name: "网络测试",  type: "select", proxies: selectGroups, icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Speedtest.png" },

    // Auto测速组
    { name: "香港节点", ...urlTestGroups, filter: "(?i)(🇭🇰|HK|HKG|香港)",     icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Hong_Kong.png" },
    { name: "日本节点", ...urlTestGroups, filter: "(?i)(🇯🇵|JP|NRT|日本)",      icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Japan.png" },
    { name: "狮城节点", ...urlTestGroups, filter: "(?i)(🇸🇬|SG|SIN|新加坡)",   icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Singapore.png" },
    { name: "台湾节点", ...urlTestGroups, filter: "(?i)(🇹🇼|TW|TPE|台湾)",     icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Taiwan.png" },
    { name: "韩国节点", ...urlTestGroups, filter: "(?i)(🇰🇷|KR|ICN|韩国)",     icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Korea.png" },
    { name: "美国节点", ...urlTestGroups, filter: "(?i)(🇺🇸|US|LAX|SJC|美国)", icon: "https://gcore.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/United_States.png" },
    
    // Final组
    { name: "Final", type: "select", proxies: [ "默认代理", "DIRECT" ], hidden: true }
  ];

  // --- 5. 规则集 ---
  config["rule-providers"] = {
    private_domain:     { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/private.mrs", path: "./ruleset/private_domain.mrs" },
    speedtest_domain:   { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/ookla-speedtest.mrs", path: "./ruleset/speedtest_domain.mrs" },
    ai:                 { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/category-ai-!cn.mrs", path: "./ruleset/ai.mrs" },
    github_domain:      { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/github.mrs", path: "./ruleset/github_domain.mrs" },
    youtube_domain:     { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/youtube.mrs", path: "./ruleset/youtube_domain.mrs" },
    google_domain:      { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/google.mrs", path: "./ruleset/google_domain.mrs" },
    microsoft_domain:   { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/microsoft.mrs", path: "./ruleset/microsoft_domain.mrs" },
    tiktok_domain:      { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/tiktok.mrs", path: "./ruleset/tiktok_domain.mrs" },
    telegram_domain:    { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/telegram.mrs", path: "./ruleset/telegram_domain.mrs" },
    netflix_domain:     { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/netflix.mrs", path: "./ruleset/netflix_domain.mrs" },
    paypal_domain:      { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/paypal.mrs", path: "./ruleset/paypal_domain.mrs" },
    "geolocation-!cn":  { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/geolocation-!cn.mrs", path: "./ruleset/geolocation-!cn.mrs" },
    cn_domain:          { ...mrsDomain, url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.mrs", path: "./ruleset/cn_domain.mrs" },
    private_ip:         { ...mrsIP,     url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/private.mrs", path: "./ruleset/private_ip.mrs" },
    google_ip:          { ...mrsIP,     url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/google.mrs", path: "./ruleset/google_ip.mrs" },
    telegram_ip:        { ...mrsIP,     url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/telegram.mrs", path: "./ruleset/telegram_ip.mrs" },
    netflix_ip:         { ...mrsIP,     url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/netflix.mrs", path: "./ruleset/netflix_ip.mrs" },
    cn_ip:              { ...mrsIP,     url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.mrs", path: "./ruleset/cn_ip.mrs" }
  };

  // --- 6. 规则 ---
  config["rules"] = [
    "RULE-SET,cn_domain,DIRECT",
    "RULE-SET,cn_ip,DIRECT",
    "RULE-SET,private_domain,DIRECT",
    "RULE-SET,private_ip,DIRECT,no-resolve",
    "RULE-SET,speedtest_domain,网络测试",
    "RULE-SET,ai,人工智能",
    "RULE-SET,github_domain,托管服务",
    "RULE-SET,youtube_domain,油管服务",
    "RULE-SET,google_domain,谷歌服务",
    "RULE-SET,microsoft_domain,微软服务",
    "RULE-SET,tiktok_domain,抖音平台",
    "RULE-SET,telegram_domain,电报服务",
    "RULE-SET,netflix_domain,奈飞服务",
    "RULE-SET,paypal_domain,支付服务",
    "RULE-SET,geolocation-!cn,默认代理",
    "RULE-SET,google_ip,谷歌服务,no-resolve",
    "RULE-SET,netflix_ip,奈飞服务,no-resolve",
    "RULE-SET,telegram_ip,电报服务,no-resolve",
    "MATCH,Final"
  ];

  return config;
}
