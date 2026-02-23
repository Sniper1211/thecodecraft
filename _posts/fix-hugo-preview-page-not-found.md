---
title: "解决 Hugo 预览时出现 Page Not Found 的问题"
date: 2025-04-27T10:00:00+08:00
tags: ["Hugo", "配置", "静态站点", "Page Not Found"]
categories: ["技术教程"]
draft: false
---
搭建这个网站的时候，就遇到了这个问题，记录一下。
“Page Not Found” 是 Hugo 网站预览时常见的错误提示。

## 问题现象

在使用 `hugo server` 命令预览 Hugo 网站时，浏览器访问 `http://localhost:1313/` （演示用的端口号，不必一致），
可能会显示 "Page Not Found" 的错误页面，而不是预期的网站内容。

## 可能的原因与解决方法

在网上搜索一圈，基本可以确定，这个问题与 Hugo 的主题配置有关。

### 配置文件名错误

许多旧的教程或文档可能会引导我们将主题配置放在 `config.toml` 文件中。
但，这已经过时了。
根据 Hugo 的较新版本和官方文档，**主题相关的配置应该放在根目录下的 `hugo.toml` 文件里**。

我们需要检查项目根目录下是否存在 `hugo.toml` 文件，并确保您的主题设置（例如 `theme = "your-theme-name"`）是在这个文件中配置的。

**错误示例 (`config.toml`)：**

```toml
# 这是旧的或不推荐的方式
baseURL = "http://localhost:1313/"
title = "我的网站"
languageCode = "zh-CN"
theme = "ananke" 
```

**正确示例 (`hugo.toml`)：**

```toml
baseURL = "http://localhost:1313/"
title = "我的网站"
languageCode = "zh-CN"
theme = "ananke"
hasCJKLanguage = true

[pagination]
pagerSize = 5
```

如果您之前使用了 `config.toml`，请尝试将配置迁移到 `hugo.toml`（如果 `hugo.toml` 不存在，则创建它），然后删除或重命名旧的 `config.toml` 文件。

### 其他配置问题

如果确认配置文件名无误后，问题仍然存在，可能是其他配置项或主题本身存在问题。建议：

1.  **仔细核对 `hugo.toml` 中的配置项**：确保没有拼写错误或配置格式问题。
2.  **查阅主题的官方文档**：您使用的主题可能有特定的配置要求。
3.  **参考 Hugo 官方文档**：官方文档是获取最新和最准确信息的最佳来源。
4.  **检查 `content` 目录**：确保您的 `content` 目录下有实际的 Markdown 文章页面。如果没有内容，Hugo 也可能无法正确生成页面。

## 总结

Hugo 预览时出现 "Page Not Found" 大概率是由于主题配置错误，特别是配置文件名用错（使用了 `config.toml` 而不是 `hugo.toml`）。优先检查并修正配置文件。如果问题依旧，请参照官方文档或主题文档进行排查。