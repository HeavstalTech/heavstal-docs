// scripts/changelog.js
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SUPABASE_URL = process.env.PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function run() {
  const dataDir = path.join(__dirname, '../src/data')
  await fs.mkdir(dataDir, { recursive: true })

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.warn('Supabase credentials missing. Proceeding regardless...');
    await fs.writeFile(path.join(dataDir, 'changelog.json'), JSON.stringify([]));
    return;
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: { persistSession: false }
  });

  try {
    console.log('Fetching changelog from Supabase...')
   
    const { data: news, error } = await supabase
      .from('news')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
      const formatted = news.map(n => {
      const dateObj = new Date(n.created_at)
      const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
     // const timeStr = dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

      return {
        id: n.id,
        title: n.title || 'Update',
        text: n.text || '',
        media: n.media || [], 
        date: `${dateStr}`
      };
    })

    await fs.writeFile(path.join(dataDir, 'changelog.json'), JSON.stringify(formatted, null, 2));
    console.log(`Successfully saved ${formatted.length} updates to src/data/changelog.json`);
  } catch (err) {
    console.error('Failed to get changelog:', err.message)
  }
}

run()
