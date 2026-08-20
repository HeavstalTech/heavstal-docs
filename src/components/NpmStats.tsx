// src/components/NpmStats.tsx
import React, { useEffect, useState } from 'react';

const ramCache = new Map<string, Promise<{ version: string | null; downloads: string | null }>>();

interface NpmStatsProps {
  packageName?: string;
}

export default function NpmStats({ packageName }: NpmStatsProps) {
  const [stats, setStats] = useState<{ version: string | null; downloads: string | null }>({
    version: null,
    downloads: null,
  });

  useEffect(() => {
    if (!packageName) return;
    if (ramCache.has(packageName)) {
      ramCache.get(packageName)!.then(setStats);
      return;
    }
    
    const fetchStats = async () => {
      try {
        const [verRes, dlRes] = await Promise.all([
          fetch(`https://registry.npmjs.org/${packageName}/latest`).then(res => res.ok ? res.json() : {}),
          fetch(`https://api.npmjs.org/downloads/point/last-month/${packageName}`).then(res => res.ok ? res.json() : {})
        ]);

        let version = null;
        let downloads = null;

        if (verRes.version) version = `v${verRes.version}`;
        
        if (dlRes.downloads !== undefined) {
          const formatter = Intl.NumberFormat('en-US', {
            notation: 'compact',
            maximumFractionDigits: 1,
          });
          downloads = `${formatter.format(dlRes.downloads).toLowerCase()}/month`;
        }

        return { version, downloads };
      } catch (error) {
        console.error(`Failed to fetch NPM stats for ${packageName}:`, error);
        return { version: null, downloads: null };
      }
    };

    const promise = fetchStats();
    ramCache.set(packageName, promise);
    promise.then(setStats);
  }, [packageName]);

  if (!stats.version && !stats.downloads) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {stats.version && (
        <div className="flex text-[11px] font-bold tracking-wide shadow-sm">
          <span className="bg-[#555] text-white px-2 py-1 leading-none">npm</span>
          <span className="bg-[#007ec6] text-white px-2 py-1 leading-none">{stats.version}</span>
        </div>
      )}

      {stats.downloads && (
        <div className="flex text-[11px] font-bold tracking-wide shadow-sm">
          <span className="bg-[#555] text-white px-2 py-1 leading-none">downloads</span>
          <span className="bg-[#4c1] text-white px-2 py-1 leading-none">{stats.downloads}</span>
        </div>
      )}
    </div>
  );
}
