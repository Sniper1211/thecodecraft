#!/bin/bash

# 更新文章分类的脚本

# 定义文章和对应的分类
declare -A article_categories=(
    ["fix-hugo-submodule-preview-url.md"]="技术教程"
    ["how-to-build-website-for-free.md"]="技术教程,独立开发"
    ["namecheap-cloudflare-dns-guide.md"]="技术教程"
    ["vercel-free-alternatives-for-practice.md"]="技术教程"
    ["web-basics-for-beginners.md"]="技术教程"
    ["编程新手的-dns-小课堂-a-记录和-cname-的奇妙世界.md"]="技术教程"
    ["做网站这事.md"]="独立开发"
    ["出海开发者收款指南：Stripe、Paddle、PayPal... 如何选择最适合你的平台？.md"]="独立开发"
    ["一个典型的用户是如何从访客变成付费用户的.md"]="独立开发"
)

# 更新每篇文章
for article in "${!article_categories[@]}"; do
    categories="${article_categories[$article]}"
    echo "更新 $article -> $categories"
    
    # 将逗号分隔的分类转换为数组格式
    IFS=',' read -ra cat_array <<< "$categories"
    categories_json="["
    for ((i=0; i<${#cat_array[@]}; i++)); do
        if [ $i -gt 0 ]; then
            categories_json+=", "
        fi
        categories_json+="\"${cat_array[$i]}\""
    done
    categories_json+="]"
    
    # 检查文件是否存在
    if [ -f "_posts/$article" ]; then
        # 检查是否已经有categories行
        if grep -q "categories:" "_posts/$article"; then
            # 更新现有的categories行
            sed -i '' "s/categories:.*/categories: $categories_json/" "_posts/$article"
        else
            # 在tags行后添加categories行
            sed -i '' "/tags:/a\\
categories: $categories_json" "_posts/$article"
        fi
        echo "  完成"
    else
        echo "  文件不存在: _posts/$article"
    fi
done

echo "所有文章分类更新完成"
