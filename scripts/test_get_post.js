const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { remark } = require('remark');
const remarkHtml = require('remark-html');
const remarkGfm = require('remark-gfm');

async function test(slug) {
  const dir = path.join(process.cwd(), '_posts');
  const files = fs.readdirSync(dir);
  const target = files.find((fn) => {
    const raw = fs.readFileSync(path.join(dir, fn), 'utf8');
    const { data } = matter(raw);
    const filenameSlug = fn.replace(/\.md$/, '').normalize('NFC');
    const frontSlug = data.slug ? String(data.slug).trim() : undefined;
    return [frontSlug, filenameSlug].filter(Boolean).some((s) => s === slug);
  });

  if (!target) {
    console.log('no target found for slug:', slug);
    return;
  }

  const raw = fs.readFileSync(path.join(dir, target), 'utf8');
  const { content } = matter(raw);
  try {
    const v = await remark().use(remarkGfm).use(remarkHtml).process(content);
    console.log('OK', target, 'len', String(v).length);
  } catch (e) {
    console.error('remark error', e);
  }
}

const slug = process.argv[2] || 'how-to-build-website-for-free';
test(slug);