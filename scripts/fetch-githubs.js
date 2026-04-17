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

// Heavstal Tech bot repos
const BOTS = [
  {
    id: 'verselor',
    name: 'Verselor-V1',
    repo: 'HeavstalTech/Verselor-V1',
    branch: 'main',
    desc: 'Advanced WhatsApp bot automation agent.'
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

  // imgs
  const rawBase = `https://raw.githubusercontent.com/${item.repo}/${item.branch}/`;
  
  markdown = markdown.replace(/!\[([^\]]*)\]\((?!http)(.*?)\)/g, (_, alt, src) => {
    const cleanSrc = src.replace(/^\.\//, '');
    return `![${alt}](${rawBase}${cleanSrc})`;
  });

  markdown = markdown.replace(/<img\s+([^>]*?)src=["'](?!http)(.*?)["']([^>]*)>/gi, (_, before, src, after) => {
    const cleanSrc = src.replace(/^\.\//, '');
    return `<img ${before}src="${rawBase}${cleanSrc}"${after}>`;
  });

  // TODO: clean html - DONE 
  markdown = markdown.replace(/<br>/gi, '<br/>');
  markdown = markdown.replace(/<hr>/gi, '<hr/>');
  
  const validHtmlTags = ['p', 'div', 'span', 'img', 'a', 'b', 'i', 'strong', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'br', 'hr', 'details', 'summary', 'blockquote', 'code', 'pre'];
  markdown = markdown.replace(/<\/?([a-zA-Z0-9_ -]+)[^>]*>/g, (fullMatch, tagName) => {
    if (validHtmlTags.includes(tagName.toLowerCase().trim())) {
      return fullMatch;
    }
    return fullMatch.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  });
  markdown = markdown.replace(/<(?=\s|[0-9])/g, '&lt;');

  // format
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

  console.log('Documentation successfully synced and sanitized from GitHub!');
}

run();
