// FlClash覆写脚本

function main(config) {
  config["proxy-groups"] = [
    {
      name: "🚀 Proxy",
      include-all: true,
      proxies: [ "🇭🇰 香港自动", "🇯🇵 日本自动", "🇸🇬 狮城自动", "🇺🇸 美国自动", "DIRECT" ],
      type: "select",
      interval: 300,
      tolerance: 50
    },
    {
      name: "🚀 Auto",
      proxies: [ "🇭🇰 香港自动", "🇯🇵 日本自动", "🇸🇬 狮城自动", "🇺🇸 美国自动", "DIRECT" ],
      type: "fallback",
      interval: 300,
      tolerance: 50
    },
    {
      name: "📹 YouTube",
      proxies: [ "🚀 默认代理",  "🇭🇰 香港自动", "🇯🇵 日本自动", "🇸🇬 狮城自动", "🇺🇸 美国自动", "DIRECT" ],
      type: "select",
      interval: 300,
      tolerance: 50
    },
    {
      name: "🍀 Google",
      proxies: [ "🚀 默认代理",  "🇭🇰 香港自动", "🇯🇵 日本自动", "🇸🇬 狮城自动", "🇺🇸 美国自动", "DIRECT" ],
      type: "select",
      interval: 300,
      tolerance: 50
    },
    {
      name: "🤖 ChatGPT",
      proxies: [ "🇯🇵 日本自动", "🚀 默认代理",  "🇭🇰 香港自动", "🇸🇬 狮城自动", "🇺🇸 美国自动", "DIRECT" ],
      type: "select",
      interval: 300,
      tolerance: 50
    },
    {
      name: "👨🏿‍💻 GitHub",
      proxies: [ "🚀 默认代理",  "🇭🇰 香港自动", "🇯🇵 日本自动", "🇸🇬 狮城自动", "🇺🇸 美国自动", "DIRECT" ],
      type: "select",
      interval: 300,
      tolerance: 50
    },
    {
      name: "🐬 OneDrive",
      proxies: [ "🚀 默认代理",  "🇭🇰 香港自动", "🇯🇵 日本自动", "🇸🇬 狮城自动", "🇺🇸 美国自动", "DIRECT" ],
      type: "select",
      interval: 300,
      tolerance: 50
    },
    {
      name: "🪟 Microsoft",
      proxies: [ "DIRECT" "🚀 默认代理",  "🇭🇰 香港自动", "🇯🇵 日本自动", "🇸🇬 狮城自动", "🇺🇸 美国自动", ],
      type: "select",
      interval: 300,
      tolerance: 50
    },
    {
      name: "🎵 TikTok",
      proxies: [ "🚀 默认代理",  "🇭🇰 香港自动", "🇯🇵 日本自动", "🇸🇬 狮城自动", "🇺🇸 美国自动", "DIRECT" ],
      type: "select",
      interval: 300,
      tolerance: 50
    },
    {
      name: "📲 Telegram",
      proxies: [ "🚀 默认代理",  "🇭🇰 香港自动", "🇯🇵 日本自动", "🇸🇬 狮城自动", "🇺🇸 美国自动", "DIRECT" ],
      type: "select",
      interval: 300,
      tolerance: 50
    },
    {
      name: "🎥 NETFLIX",
      proxies: [ "🚀 默认代理",  "🇭🇰 香港自动", "🇯🇵 日本自动", "🇸🇬 狮城自动", "🇺🇸 美国自动", "DIRECT" ],
      type: "select",
      interval: 300,
      tolerance: 50
    },
    {
      name: "💶 PayPal",
      proxies: [ "🚀 默认代理",  "🇭🇰 香港自动", "🇯🇵 日本自动", "🇸🇬 狮城自动", "🇺🇸 美国自动", "DIRECT" ],
      type: "select",
      interval: 300,
      tolerance: 50
    },
    {
      name: "✈️ Speedtest",
      proxies: [ "🚀 默认代理",  "🇭🇰 香港自动", "🇯🇵 日本自动", "🇸🇬 狮城自动", "🇺🇸 美国自动", "DIRECT" ],
      type: "select",
      interval: 300,
      tolerance: 50
    },
    {
      name: "🇭🇰 香港自动",
      include-all: true,
      hidden: true,
      filter: "(?i)港|HK|hk|Hong Kong|HongKong|hongkong",
      type: "url-test",
      url: "https://www.google.com/generate_204",
      interval: 300,
      tolerance: 50
    },
    {
      name: "🇯🇵 日本自动",
      include-all: true,
      hidden: true,
      filter: "(?i)日本|川日|东京|大阪|泉日|埼玉|沪日|深日|JP|Japan",
      type: "url-test",
      url: "https://www.google.com/generate_204",
      interval: 300,
      tolerance: 50
    },
    {
      name: "🇸🇬 狮城自动",
      include-all: true,
      hidden: true,
      filter: "(?i)新加坡|坡|狮城|SG|Singapore",
      type: "url-test",
      url: "https://www.google.com/generate_204",
      interval: 300,
      tolerance: 50
    },
    {
      name: "🇺🇸 美国自动",
      include-all: true,
      hidden: true,
      filter: "(?i)美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|US|United States",
      type: "url-test",
      url: "https://www.google.com/generate_204",
      interval: 300,
      tolerance: 50
    },
    {
      name: "🐟 漏网之鱼",
      proxies: [ "🚀 默认代理", "DIRECT" ],
      type: "select",
      interval: 300,
      tolerance: 50
    }
  ];
  config["rule-providers"] = {
    private_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/private.mrs",
      path: "./ruleset/private_domain.mrs",
      behavior: "domain",
      interval: 86400,
      format: "mrs",
      type: "http"
    },
    speedtest_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/ookla-speedtest.mrs",
      path: "./ruleset/speedtest_domain.mrs",
      behavior: "domain",
      interval: 86400,
      format: "mrs",
      type: "http"
    },
    ai: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/category-ai-!cn.mrs",
      path: "./ruleset/ai.mrs",
      behavior: "domain",
      interval: 86400,
      format: "mrs",
      type: "http"
    },
    github_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/github.mrs",
      path: "./ruleset/github_domain.mrs",
      behavior: "domain",
      interval: 86400,
      format: "mrs",
      type: "http"
    },
    youtube_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/youtube.mrs",
      path: "./ruleset/youtube_domain.mrs",
      behavior: "domain",
      interval: 86400,
      format: "mrs",
      type: "http"
    },
    google_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/google.mrs",
      path: "./ruleset/google_domain.mrs",
      behavior: "domain",
      interval: 86400,
      format: "mrs",
      type: "http"
    },
    onedrive_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/onedrive.mrs",
      path: "./ruleset/onedrive_domain.mrs",
      behavior: "domain",
      interval: 86400,
      format: "mrs",
      type: "http"
    },
    microsoft_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/microsoft.mrs",
      path: "./ruleset/microsoft_domain.mrs",
      behavior: "domain",
      interval: 86400,
      format: "mrs",
      type: "http"
    },
    tiktok_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/tiktok.mrs",
      path: "./ruleset/tiktok_domain.mrs",
      behavior: "domain",
      interval: 86400,
      format: "mrs",
      type: "http"
    },
    telegram_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/telegram.mrs",
      path: "./ruleset/telegram_domain.mrs",
      behavior: "domain",
      interval: 86400,
      format: "mrs",
      type: "http"
    },
    netflix_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/netflix.mrs",
      path: "./ruleset/netflix_domain.mrs",
      behavior: "domain",
      interval: 86400,
      format: "mrs",
      type: "http"
    },
    paypal_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/paypal.mrs",
      path: "./ruleset/paypal_domain.mrs",
      behavior: "domain",
      interval: 86400,
      format: "mrs",
      type: "http"
    },
    // 关键修正1：规则集名称改为 geolocation-!cn（与规则引用一致）
    "geolocation-!cn": {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/geolocation-!cn.mrs",
      path: "./ruleset/geolocation-!cn.mrs", // 关键修正2：补充 .mrs 后缀
      behavior: "domain",
      interval: 86400,
      format: "mrs",
      type: "http"
    },
    cn_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.mrs",
      path: "./ruleset/cn_domain.mrs",
      behavior: "domain",
      interval: 86400,
      format: "mrs",
      type: "http"
    },
    private_ip: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/private.mrs",
      path: "./ruleset/private_ip.mrs",
      behavior: "ipcidr",
      interval: 86400,
      format: "mrs",
      type: "http"
    },
    google_ip: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/google.mrs",
      path: "./ruleset/google_ip.mrs",
      behavior: "ipcidr",
      interval: 86400,
      format: "mrs",
      type: "http"
    },
    telegram_ip: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/telegram.mrs",
      path: "./ruleset/telegram_ip.mrs",
      behavior: "ipcidr",
      interval: 86400,
      format: "mrs",
      type: "http"
    },
    netflix_ip: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/netflix.mrs",
      path: "./ruleset/netflix_ip.mrs",
      behavior: "ipcidr",
      interval: 86400,
      format: "mrs",
      type: "http"
    },
    cn_ip: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.mrs",
      path: "./ruleset/cn_ip.mrs",
      behavior: "ipcidr",
      interval: 86400,
      format: "mrs",
      type: "http"
    }
  };
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
    "RULE-SET,geolocation-!cn,🚀 默认代理",
    "RULE-SET,cn_domain,DIRECT",
    "RULE-SET,google_ip,🍀 Google,no-resolve",
    "RULE-SET,netflix_ip,🎥 NETFLIX,no-resolve",
    "RULE-SET,telegram_ip,📲 Telegram,no-resolve",
    "RULE-SET,cn_ip,DIRECT",
    "MATCH,🐟 漏网之鱼"
  ];
  return config;
}



