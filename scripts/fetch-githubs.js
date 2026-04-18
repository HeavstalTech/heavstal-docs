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
    desc: 'A high-performance and feature-rich WhatsApp assistant by Heavstal Tech.'
  }
];

const MODULES_DIR = path.join(__dirname, '..', 'src', 'content', 'docs', 'modules');
const BOTS_DIR = path.join(__dirname, '..', 'src', 'content', 'docs', 'bots');

async function fetchReadme(item) {
  const url = `https://raw.githubusercontent.com/${item.repo}/${item.branch}/README.md`;
  console.log(`Fetching: ${item.name}...`);
  
  const res = await fetch(url);
  if (!res.ok) return null;
  
  let markdown = await res.text();
  const rawBase = `https://raw.githubusercontent.com/${item.repo}/${item.branch}/`;
  markdown = markdown.replace(/!\[([^\]]*)\]\((?!http)(.*?)\)/g, (_, alt, src) => {
    return `![${alt}](${rawBase}${src.replace(/^\.\//, '')})`;
  });

  markdown = markdown.replace(/<img\s+([^>]*?)src=["'](?!http)(.*?)["']([^>]*)>/gi, (_, before, src, after) => {
    return `<img ${before}src="${rawBase}${src.replace(/^\.\//, '')}"${after}>`;
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
      await fs.writeFile(path.join(MODULES_DIR, `${mod.id}.md`), content, 'utf-8');
      console.log(`Saved: ${mod.id}.md`);
    }
  }

  for (const bot of BOTS) {
    const content = await fetchReadme(bot);
    if (content) {
      await fs.writeFile(path.join(BOTS_DIR, `${bot.id}.md`), content, 'utf-8');
      console.log(`Saved: ${bot.id}.md`);
    }
  }
  console.log('Documentation synced with original styling preserved!');
}

run();
