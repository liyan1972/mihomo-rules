// FlClash 覆写脚本 - 极致精简版 (JS 模拟锚点)
function main(config) {
  // === 1. 定义“配置锚点” (Constants) ===
  
  // 代理列表锚点
  const autoGroups = [ "🇭🇰 香港自动", "🇯🇵 日本自动", "🇸🇬 狮城自动", "🇺🇸 美国自动" ];
  const commonProxies = [ "🚀 Proxy", ...autoGroups, "DIRECT" ];

  // Rule-Provider 属性锚点
  const mrsDomain = { behavior: "domain", interval: 86400, format: "mrs", type: "http" };
  const mrsIP = { behavior: "ipcidr", interval: 86400, format: "mrs", type: "http" };

  // === 2. 代理组配置 (proxy-groups) ===
  config["proxy-groups"] = [
    {
      name: "🚀 Proxy",
      include-all: true,
      proxies: [ ...autoGroups, "DIRECT" ],
      type: "select"
    },
    {
      name: "🚀 Auto",
      proxies: autoGroups,
      type: "fallback",
      interval: 300,
      tolerance: 50
    },
    // 使用 commonProxies 变量的组
    ...["📹 YouTube", "🍀 Google", "👨🏿‍💻 GitHub", "🐬 OneDrive", "🎵 TikTok", "📲 Telegram", "🎥 NETFLIX", "💶 PayPal", "✈️ Speedtest"].map(name => ({
      name,
      type: "select",
      proxies: commonProxies
    })),
    {
      name: "🤖 ChatGPT",
      type: "select",
      proxies: [ "🇯🇵 日本自动", "🇺🇸 美国自动", "🚀 Proxy", "🇸🇬 狮城自动" ]
    },
    {
      name: "🪟 Microsoft",
      type: "select",
      proxies: [ "DIRECT", "🚀 Proxy", ...autoGroups ]
    },
    // 自动测速子组
    ...autoGroups.map(name => {
      const filterMap = {
        "🇭🇰 香港自动": "(?i)港|HK|hk|Hong Kong|HongKong|hongkong",
        "🇯🇵 日本自动": "(?i)日本|川日|东京|大阪|泉日|埼玉|沪日|深日|JP|Japan",
        "🇸🇬 狮城自动": "(?i)新加坡|坡|狮城|SG|Singapore",
        "🇺🇸 美国自动": "(?i)美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|US|United States"
      };
      return {
        name,
        type: "url-test",
        include-all: true,
        hidden: true,
        filter: filterMap[name],
        url: "https://www.google.com/generate_204",
        interval: 300,
        tolerance: 50
      };
    }),
    {
      name: "🐟 漏网之鱼",
      type: "select",
      proxies: [ "🚀 Proxy", "DIRECT" ]
    }
  ];

  // === 3. 规则集配置 (rule-providers) ===
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

  // === 4. 路由规则 (rules) ===
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
