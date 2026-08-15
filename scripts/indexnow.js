// scripts/indexnow.js
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, '..', 'dist');
const HOST = 'docs.heavstal.com.ng';
const BASE_URL = `https://${HOST}`;
const KEY = 'heavstal-indexnow-key';

async function getHtmlFiles(dir) {
  let results = [];
  const list = await fs.readdir(dir, { withFileTypes: true });
  
  for (const file of list) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      results = results.concat(await getHtmlFiles(fullPath));
    } else if (file.name.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

async function submitToIndexNow() {
  try {
    console.log('🔍 Scanning dist/ for generated HTML pages...');
    const files = await getHtmlFiles(DIST_DIR);
    
    const urlList = files
      .map(file => {
        let relativePath = path.relative(DIST_DIR, file).replace(/\\/g, '/');
        if (relativePath === '404.html' || relativePath === '404/index.html') return null;
        
        if (relativePath.endsWith('index.html')) {
          relativePath = relativePath.slice(0, -10);
        } else if (relativePath.endsWith('.html')) {
          relativePath = relativePath.slice(0, -5);
        }
        
        return `${BASE_URL}/${relativePath}`;
      })
      .filter(Boolean);

    console.log(`Found ${urlList.length} pages. Submitting to IndexNow...`);

    const payload = {
      host: HOST,
      key: KEY,
      keyLocation: `${BASE_URL}/${KEY}.txt`,
      urlList: urlList
    };

    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (res.ok || res.status === 202) {
      console.log('✅ Successfully submitted all URLs to IndexNow!');
    } else {
      console.error(`❌ Failed to submit. Status: ${res.status} ${res.statusText}`);
      const text = await res.text();
      console.error(text);
    }
  } catch (error) {
    console.error('❌ Error submitting to IndexNow:', error);
  }
}

submitToIndexNow();
