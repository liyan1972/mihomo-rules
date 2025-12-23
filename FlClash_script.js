// FlClash 覆写脚本

function main(config) {
  // --- 1. 基础变量定义 ---
  const autoGroups = [ "🇯🇵 日本自动", "🇸🇬 狮城自动", "🇹🇼 台湾自动", "🇭🇰 香港自动", "🇺🇸 美国自动" ];
  const commonProxies = [ "🚀 Proxy", "🇭🇰 香港自动", "🇯🇵 日本自动", "🇸🇬 狮城自动", "🇹🇼 台湾自动", "🇺🇸 美国自动", "DIRECT" ];

  // --- 2. 对象模板 (配置复用) ---
  // 规则集通用配置
  const mrsDomain = { behavior: "domain", interval: 86400, format: "mrs", type: "http" };
  const mrsIP = { behavior: "ipcidr", interval: 86400, format: "mrs", type: "http" };

  // --- 3. 自动测速定义 ---
  const urlTestTemplate = {
    type: "url-test",
    "include-all": true,
    hidden: false,
    interval: 300,
    tolerance: 50,
    url: "https://www.google.com/generate_204"
  };

  // --- 4. 代理组配置 ---
  config["proxy-groups"] = [
    { 
      name: "🚀 Proxy", 
      type: "select", 
      "include-all": true, 
      proxies: [ "🚀 Auto", "🇭🇰 香港自动", "🇯🇵 日本自动", "🇸🇬 狮城自动", "🇹🇼 台湾自动", "🇺🇸 美国自动" ] 
    },
    { name: "🚀 Auto", type: "fallback", interval: 300, tolerance: 50, proxies: autoGroups },
    
    // 基础业务组 (使用 commonProxies 变量)
    { name: "📹 YouTube", type: "select", proxies: commonProxies },
    { name: "🍀 Google", type: "select", proxies: commonProxies },
    { name: "🤖 ChatGPT", type: "select", proxies: commonProxies },
    { name: "👨🏿‍💻 GitHub", type: "select", proxies: commonProxies },
    { name: "🐬 OneDrive", type: "select", proxies: commonProxies },
    { name: "🪟 Microsoft", type: "select", proxies: commonProxies },
    { name: "🎵 TikTok", type: "select", proxies: commonProxies },
    { name: "📲 Telegram", type: "select", proxies: commonProxies },
    { name: "🎥 NETFLIX", type: "select", proxies: commonProxies },
    { name: "💶 PayPal", type: "select", proxies: commonProxies },
    { name: "✈️ Speedtest", type: "select", proxies: commonProxies },

    // 自动测速子组 (使用 ...urlTestTemplate 模板)
    { name: "🇭🇰 香港自动", ...urlTestTemplate, filter: "(?i)(🇭🇰|HK|香港)" },
    { name: "🇯🇵 日本自动", ...urlTestTemplate, filter: "(?i)(🇯🇵|JP|日本)" },
    { name: "🇸🇬 狮城自动", ...urlTestTemplate, filter: "(?i)(🇸🇬|SG|新加坡)" },
    { name: "🇹🇼 台湾自动", ...urlTestTemplate, filter: "(?i)(🇹🇼|TW|台湾)" },
    { name: "🇺🇸 美国自动", ...urlTestTemplate, filter: "(?i)(🇺🇸|US|美国)" },
    
    { name: "🐟 漏网之鱼", type: "select", proxies: [ "🚀 Proxy", "DIRECT" ] }
  ];

  // --- 5. 规则集配置 ---
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
    "RULE-SET,speedtest_domain,✈️ Speedtest",
    "RULE-SET,ai,🤖 ChatGPT",
    "RULE-SET,github_domain,👨🏿‍💻 GitHub",
    "RULE-SET,youtube_domain,📹 YouTube",
    "RULE-SET,google_domain,🍀 Google",
    "RULE-SET,onedrive_domain,🐬 OneDrive",
    "RULE-SET,microsoft_domain,🪟 Microsoft",
    "RULE-SET,tiktok_domain,🎵 TikTok",
    "RULE-SET,telegram_domain,📲 Telegram",
    "RULE-SET,netflix_domain,🎥 NETFLIX",
    "RULE-SET,paypal_domain,💶 PayPal",
    "RULE-SET,geolocation-!cn,🚀 Proxy",
    "RULE-SET,cn_domain,DIRECT",
    "RULE-SET,google_ip,🍀 Google,no-resolve",
    "RULE-SET,netflix_ip,🎥 NETFLIX,no-resolve",
    "RULE-SET,telegram_ip,📲 Telegram,no-resolve",
    "RULE-SET,cn_ip,DIRECT",
    "MATCH,🐟 漏网之鱼"
  ];

  return config;
}

