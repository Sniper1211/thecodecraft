---
title: "解决Hugo子模块路径配置错误，导致的预览URL出错"
date: 2025-05-11T01:26:04+08:00
tags: ["Hugo", "Git Submodule", "静态站点"]
draft: false
---
部署这个网站的时候遇到了一个问题，本地测试的时候文章都是正常的，但是部署到 vercel 之后，页面的URL出错。
全部都是 `localhost:1313` 开头的URL，而不是预期的 `www.thecodecraft.site` 开头的URL。
在 vercel 的 build logs 中发现了警告报错，逐行研读，最终解决了问题：

## 问题现象
在 Vercel运行项目时，主题资源文件加载路径异常，控制台出现404错误。这会导致 vercel 的项目主页不显示预览效果。
同时，通过域名访问时，所有的链接都会失效，被解析为解析为`localhost:1313/...`。

## 排查过程
1. 检查主题子模块配置
```git
[submodule "themes/PaperMod"]
	path = themes/PaperMod
	url = https://github.com/adityatelange/hugo-PaperMod.git
```
2. 发现主题资源路径被解析为`http://localhost:1313/themes/PaperMod/...`
3. 确认Hugo默认将主题目录视为普通内容目录

## 根本原因
Hugo默认配置将`themes`目录作为内容资源路径处理，导致：
- 主题子模块路径被错误解析
- 静态资源路径生成错误

## 解决方案
修改`.gitmodules`配置指定特殊目录标记：
```git
[submodule "hugo_modules/PaperMod"]
	path = hugo_modules/PaperMod
	url = https://github.com/adityatelange/hugo-PaperMod.git
```
关键修改点：
- 将`themes`目录重命名为`hugo_modules`
- 通过Hugo的模块系统自动识别专用目录

## 实施效果
1. 资源路径正确解析为`http://localhost:1313/PaperMod/...`
2. 主题样式和脚本加载正常
3. 预览功能完全恢复

## 技术总结
1. Hugo对特殊目录名称有特定处理逻辑
2. 子模块配置需与Hugo模块系统配合使用
3. 使用`hugo mod`命令管理依赖更可靠
```bash
hugo mod get github.com/adityatelange/hugo-PaperMod
```