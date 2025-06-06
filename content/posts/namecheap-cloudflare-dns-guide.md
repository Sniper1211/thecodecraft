---
title: "Namecheap域名托管Cloudflare保姆级教程"
date: 2025-05-06T22:03:00+08:00  
tags: ["Namecheap", "Cloudflare", "静态站点"]
draft: false
---

习惯使用 Cloudflare，买了新域名之后，要怎么托管到 Cloudflare 上呢？
今天用 NameCheap 为例，介绍一下托管到 Cloudflare 上的流程。
手把手教你两把Namecheap域名托管到Cloudflare！

## 方案选择（5秒决策版）
🔹 **只想用Cloudflare的CDN加速** ➔ 选DNS托管

---

### DNS托管（保留Namecheap注册）
这个方案适合「用Cloudflare加速但不想转移域名」的小伙伴，就像一次简单的搬家。

#### 第一步：认领Cloudflare家门牌
1. 登录Cloudflare控制台 ➔ 点击「添加站点」
2. 输入裸域名（例：`yourdomain.com` 别带www）
3. 选择免费套餐 → 等系统扫描现有DNS记录（不想要的直接删）
4. 记下分配的两个Nameservers地址（例：`kipp.ns.cloudflare.com`）

#### 第二步：Namecheap换门锁
1. Namecheap后台找到域名 → 点击「Manage」
2. 在下方的「Nameservers」域名服务器里选择「Custom DNS」
3. 粘贴第一步提到的 Cloudflare 给的俩地址 → 保存
4. 去泡杯咖啡等生效（通常10分钟，最长24小时）

#### 第三步：布置Cloudflare新家
```bash
# 常用DNS记录配置示例
A记录 → @ 指向 104.21.67.166（主域名）
CNAME记录 → www 指向 yourdomain.com（自动跳转）
```
⚠️ 重要设置：
回到 Cloudflare 里找到 SSL/TLS 选择配置「完全」模式，强制HTTPS更安全

---
一般来说，现在的 Cloudflare 都能自动检测到 Namecheap 的域名，无需手动配置。



## 血泪经验总结
1. 改DNS后有的地区要等24小时生效，期间网站抽风属正常
2. SSL证书错误多半是因为没开「完全」模式


> 小贴士：这种方案只是用 CF 的 CDN 加速和简单的统计，方便管理，域名的续费和归属还是在 Namecheap 里。不会有更多麻烦的操作。顺利的话，15分钟搞定！
