const fs = require('fs');
const glob = require('fs').readdirSync;
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // 1. Hero Badges
            content = content.replace(
                /bg-white\/90 backdrop-blur-sm rounded-md px-3 py-1\.5 flex items-center gap-2 shadow-sm text-xs font-semibold text-\[#1a1a2e\]/g,
                'rounded-md px-3 py-1.5 flex items-center gap-2 text-xs premium-badge'
            );

            // 2. Course Card Badge
            if (fullPath.includes('course-card.tsx')) {
                content = content.replace(
                    /className="inline-flex items-center gap-1\.5 px-3 py-1\.5 rounded-full bg-\\[#3B3969\\]\/10 text-\\[#3B3969\\] text-xs font-semibold"/g,
                    'className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs premium-badge"'
                );
            }

            // 3. Nationally Recognised Badge
            if (fullPath.includes('nationally-recognised-badge.tsx')) {
                content = content.replace(
                    /className=\{\inline-flex items-center gap-2 px-3 py-1\.5 rounded-full bg-white text-xs font-semibold shadow-sm border border-gray-100 \$\{className\}\\}/g,
                    'className={inline-flex items-center gap-2 px-3 py-1.5 rounded-full premium-badge }'
                );
            }

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Premium badge applied:', fullPath);
            }
        }
    }
}

processDir(path.join(process.cwd(), 'app', 'services'));
processDir(path.join(process.cwd(), 'components'));
