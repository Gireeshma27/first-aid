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

            // Updated regex to catch the bottom badge
            // <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 shadow-lg">
            //   <div className="w-10 h-10 rounded-lg bg-[#CB154E] flex-shrink-0 flex items-center justify-center">
            //     <Icon className="w-5 h-5 text-white" />
            //   </div>
            //   <div>
            //     <p className="text-[#1a1a2e] font-bold text-sm">TITLE</p>
            //     <p className="text-[#64648c] text-xs">SUB</p>
            //   </div>
            // </div>

            const rgx = /<div className="absolute bottom-\d+ (?:left-\d+ )?(?:right-\d+ )?bg-white\/95 backdrop-blur-(?:sm )?rounded-xl p-4 flex items-center gap-3 shadow-lg(?: max-w-xs)?">[\s\S]*?<([A-Za-z]+) className="w-5 h-5 text-white" \/>\s*<\/div>\s*<div>\s*<p className="text-\[#[a-fA-F0-9]+\] font-bold text-sm">([^<]+)<\/p>[\s\S]*?<\/div>\s*<\/div>/g;
            
            content = content.replace(rgx, (match, icon, title) => {
                return '<div className="absolute top-[12px] right-[12px] bg-white/90 backdrop-blur-sm rounded-md px-3 py-1.5 flex items-center gap-2 shadow-sm text-xs font-semibold text-[#1a1a2e]">\n                    <' + icon + ' className="w-3.5 h-3.5 text-[#CB154E]" />\n                    ' + title + '\n                  </div>';
            });

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Badge fixed:', fullPath);
            }
        }
    }
}

processDir(path.join(process.cwd(), 'app', 'services'));
