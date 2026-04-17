import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Heavstal Tech modules repos
const MODULES = [
  {
    id: 'api',
    name: '@heavstaltech/api',
    repo: 'HeavstalTech/heavstaltech-api',
    branch: 'main',
    desc: 'A powerful, all-in-one scraping and utility library.'
  },
  {
    id: 'auth',
    name: 'Heavstal Auth',
    repo: 'HeavstalTech/heavstal-auth',
    branch: 'main',
    desc: 'The official NextAuth.js provider for Heavstal Tech.'
  },
  {
    id: 'baileys',
    name: 'HT-Baileys',
    repo: 'HeavstalTech/HT-baileys',
    branch: 'main',
    desc: 'An Advanced WhatsApp Web API wrapper fork (baileys).'
  }
];

const DOCS_DIR = path.join(__dirname, '..' 'src', 'content', 'docs', 'modules');

async function fetchReadme(mod) {
  const url = `https://raw.githubusercontent.com/${mod.repo}/${mod.branch}/README.md`;
  console.log(`Fetching: ${mod.name}...`);
  
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed to fetch ${mod.name} from ${url}`);
    return null;
  }
  
  let markdown = await res.text();

  // imgs
  const rawBase = `https://raw.githubusercontent.com/${mod.repo}/${mod.branch}/`;
  markdown = markdown.replace(/!\[([^\]]*)\]\((?!http)(.*?)\)/g, (match, alt, src) => {
    const cleanSrc = src.replace(/^\.\//, '');
    return `![${alt}](${rawBase}${cleanSrc})`;
  });

  markdown = markdown.replace(/<img\s+([^>]*?)src=["'](?!http)(.*?)["']([^>]*)>/gi, (match, before, src, after) => {
    const cleanSrc = src.replace(/^\.\//, '');
    return `<img ${before}src="${rawBase}${cleanSrc}"${after}>`;
  });

  // format
  const frontmatter = `---
title: "${mod.name}"
description: "${mod.desc}"
---

`;
  return frontmatter + markdown;
}

async function run() {
  await fs.mkdir(DOCS_DIR, { recursive: true });

  for (const mod of MODULES) {
    const content = await fetchReadme(mod);
    if (content) {
      const filePath = path.join(DOCS_DIR, `${mod.id}.mdx`);
      await fs.writeFile(filePath, content, 'utf-8');
      console.log(`Saved: ${mod.id}.mdx`);
    }
  }
  console.log('Module documentation successfully synced from GitHub!');
}

run();
