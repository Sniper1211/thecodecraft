---
title: "零成本建站指南：不用买域名服务器，GitHub+Vercel免费搭建个人网站"
date: 2025-05-20T23:18:00+08:00
draft: false
tags: ["建站", "免费方案", "GitHub Pages", "Vercel", "静态站点", "新手教程"]
---

### 一、为什么选择GitHub+Vercel组合
传统建站需要域名和服务器，这对新手来说门槛太高。现在通过GitHub的代码托管能力和Vercel的免费部署服务，我们可以完全零成本实现：
- ✅ 免服务器费用（Vercel免费额度足够个人使用）
- ✅ 免域名费用（使用默认的*.vercel.app二级域名）
- ✅ 自动HTTPS加密（Vercel自动配置SSL证书）

### 二、准备工作
1. 注册GitHub账号（[官网](https://github.com)）
2. 注册Vercel账号（支持GitHub一键登录）
3. 本地安装VS Code编辑器

### 三、三步搭建基础网站
#### 步骤1：创建代码仓库
在GitHub新建名为`my-website`的仓库，初始化时勾选"Add a README file"

#### 步骤2：编写静态页面
在仓库根目录创建`index.html`：
```html
<!DOCTYPE html>
<html>
<head>
    <title>我的免费网站</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>由GitHub+Vercel驱动</p>
</body>
</html>
```

#### 步骤3：部署到Vercel
1. 登录Vercel控制台
2. 点击"Import Project"选择GitHub仓库
3. 保持默认配置点击部署，30秒后即可获得在线地址

### 四、进阶配置技巧
#### 自定义域名（可选）
若已有域名，在Vercel的"Domains"设置中添加：
```
CNAME记录 → your-domain.com → cname.vercel-dns.com
```

#### 配置自动更新
在项目根目录创建`vercel.json`实现自动构建：
```json
{
  "builds": [
    {
      "src": "/*",
      "use": "@vercel/static"
    }
  ]
}
```

### 五、常见问题解答
Q：网站访问量有限制吗？
A：Vercel免费版每月提供100GB流量，个人博客完全够用

Q：代码必须公开吗？
A：GitHub公共仓库免费，私有仓库需付费。建议初期使用公共仓库

立即动手尝试，开启你的第一个免费网站吧！