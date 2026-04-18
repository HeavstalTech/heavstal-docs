import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const BOTS = [
  {
    id: 'verselor',
    name: 'Verselor-V1',
    repo: 'HeavstalTech/Verselor-V1',
    branch: 'main',
    desc: 'A high-performance and feature-rich WhatsApp assistant by Heavstal Tech. Verselor V1 supports cross-device connectivity, shared user hosting, and global language translation, offering a complete suite of tools for chat moderation, media processing, and interactive entertainment. Built by Heavstal Tech - 2026.'
  }
];

const MODULES_DIR = path.join(__dirname, '..', 'src', 'content', 'docs', 'modules');
const BOTS_DIR = path.join(__dirname, '..', 'src', 'content', 'docs', 'bots');

async function fetchReadme(item) {
  const url = `https://raw.githubusercontent.com/${item.repo}/${item.branch}/README.md`;
  console.log(`Fetching: ${item.name}...`);
  
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed to fetch ${item.name} from ${url}`);
    return null;
  }
  
  let markdown = await res.text();
  const rawBase = `https://raw.githubusercontent.com/${item.repo}/${item.branch}/`;
  
  markdown = markdown.replace(/!\[([^\]]*)\]\((?!http)(.*?)\)/g, (_, alt, src) => {
    const cleanSrc = src.replace(/^\.\//, '');
    return `![${alt}](${rawBase}${cleanSrc})`;
  });

  markdown = markdown.replace(/<img\s+([^>]*?)src=["'](?!http)(.*?)["']([^>]*)>/gi, (_, before, src, after) => {
    const cleanSrc = src.replace(/^\.\//, '');
    return `<img ${before}src="${rawBase}${cleanSrc}"${after}>`;
  });

  markdown = markdown.replace(/<\/?br\s*\/?>/gi, '');
  markdown = markdown.replace(/<\/?hr\s*\/?>/gi, '\n---\n');

  markdown = markdown.replace(/<h([1-6])[^>]*>(.*?)<\/h\1>/gi, (_, level, content) => {
    return `\n${'#'.repeat(Number(level))} ${content.trim()}\n`;
  });

  markdown = markdown.replace(/<\/?p[^>]*>/gi, '\n\n');

  markdown = markdown.replace(/<(?![a-zA-Z/])/g, '&lt;');

  markdown = markdown.replace(/<img([^>]+)>/gi, (_, inner) => {
    const cleanInner = inner.replace(/\/$/, '').trim();
    return `<img ${cleanInner} />`;
  });
  
  markdown = markdown.replace(/<\/?(center|div)[^>]*>/gi, '');

  const validHtmlTags = ['img', 'a', 'b', 'i', 'strong', 'em', 'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'details', 'summary', 'blockquote', 'code', 'pre', 'kbd', 'sub', 'sup', 'picture', 'source'];
  
  markdown = markdown.replace(/<\/?([a-zA-Z0-9_ -]+)[^>]*>/g, (fullMatch, tagName) => {
    if (validHtmlTags.includes(tagName.toLowerCase().trim())) {
      return fullMatch;
    }
    return fullMatch.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  });

  const frontmatter = `---
title: "${item.name}"
description: "${item.desc}"
---

`;
  return frontmatter + markdown;
}

async function run() {
  await fs.mkdir(MODULES_DIR, { recursive: true });
  await fs.mkdir(BOTS_DIR, { recursive: true });

  for (const mod of MODULES) {
    const content = await fetchReadme(mod);
    if (content) {
      const filePath = path.join(MODULES_DIR, `${mod.id}.mdx`);
      await fs.writeFile(filePath, content, 'utf-8');
      console.log(`Saved: ${mod.id}.mdx`);
    }
  }

  for (const bot of BOTS) {
    const content = await fetchReadme(bot);
    if (content) {
      const filePath = path.join(BOTS_DIR, `${bot.id}.mdx`);
      await fs.writeFile(filePath, content, 'utf-8');
      console.log(`Saved: ${bot.id}.mdx`);
    }
  }

  console.log('Documentation successfully synced and strictly sanitized for MDX!');
}

run();
