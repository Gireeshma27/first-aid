const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // 1. CPR Hero Background in CprContent.tsx
            if (fullPath.includes('CprContent.tsx')) {
                content = content.replace(
                    /bg-gradient-to-br from-\[#1a1a2e\] via-\[#2a1a35\] to-\[#CB154E\]\/80 py-\d+ md:py-\d+/,
                    'bg-gradient-to-br from-[#3B3969] to-[#2d2b5e] py-20'
                );
                // Also remove the blob artifacts that have pink tones
                content = content.replace(
                    /<div className="absolute top-0 right-0 w-\[600px\] h-\[600px\] rounded-full bg-\[#CB154E\]\/20 blur-3xl animate-blob" \/>/g,
                    '<div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl animate-blob" />'
                );
                content = content.replace(
                    /<div className="absolute bottom-0 left-0 w-\[400px\] h-\[400px\] rounded-full bg-white\/5 blur-3xl animate-blob-delay" \/>/,
                    '<div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-black/10 blur-3xl animate-blob-delay" />'
                );
                content = content.replace(
                    /<div className="absolute top-1\/2 left-1\/4 w-\[350px\] h-\[350px\] rounded-full bg-\[#3B3969\]\/25 blur-3xl animate-blob-delay-2" \/>/,
                    '' // remove the redundant pinkish
                );
            }

            // 2. BADGE POSITION
            // We find any badge that looks like this:
            // <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 shadow-lg"> (or similar bottom-*)
            // This is complex to regex, so let's do it with a careful replace
            const badgeRegex = /<div className="absolute bottom-\d+ (right|left)-\d+(?: right-\d+)? (?:flex|bg-white\/95|backdrop-blur|rounded-[a-z]+|p-\d+|shadow-lg|max-w-xs|items-center|gap-\d+|backdrop-blur-sm)+">\s*<div className="w-\d+ h-\d+ rounded-[a-z]+ bg-\[\#[A-F0-9]+\] (?:flex-shrink-0 |flex )?(?:flex |flex-shrink-0 )?items-center justify-center">\s*<([A-Za-z]+) className="w-\d+ h-\d+ text-white" \/>\s*<\/div>\s*<div>\s*<p className="text-\[\#[A-F0-9]+\] font-bold text-sm">([^<]+)<\/p>\s*<p className="text-\[\#[A-F0-9]+\] text-xs">([^<]*)<\/p>\s*<\/div>\s*<\/div>/g;
            
            content = content.replace(badgeRegex, (match, pos, Icon, Title, Subtitle) => {
                return '<div className="absolute top-[12px] right-[12px] bg-white/90 backdrop-blur-sm rounded-md px-3 py-1.5 flex items-center gap-2 shadow-sm text-xs font-semibold text-[#1a1a2e]">\n                    <' + Icon + ' className="w-3.5 h-3.5 text-[#CB154E]" />\n                    ' + Title + '\n                  </div>';
            });

            // Handle the drug-alcohol-testing page badge (it is slightly different or matches our regex)
            // Wait, what if the regex matches Drug Alcohol? It should! Let's check if the regex catches drug alcohol.
            // Drug alcohol: absolute bottom-4 left-4 right-4 bg-white/95 ...

            // 4. DRUG & ALCOHOL
            if (fullPath.includes('drug-alcohol-testing')) {
                // Section 1: "Why Drug and Alcohol Testing Matters" to light background
                // Section 2: "Book Drug and Alcohol Testing" space 60px.
                
                content = content.replace(
                    /bg-gradient-to-br from-\[#3B3969\] to-\[#2d2b5e\] relative overflow-hidden"(?:>|\s*style=\{[\s\S]*?\}>)\s*<div className="absolute inset-0">\s*<div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-\[#3B3969\]\/20 blur-3xl" \/>\s*<\/div>/g,
                    'bg-[#F5F5F5] relative overflow-hidden mb-[60px]">'
                );
                
                // Replace text-white with dark text in that section 
                content = content.replace(
                    /<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white\/10 text-white\/80 text-sm font-semibold mb-5 border border-white\/15">\s*<span className="w-1.5 h-1.5 rounded-full bg-white\/60" \/>Why Drug &amp; Alcohol Testing Matters\s*<\/span>/,
                    '<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/10 text-[#3B3969] text-sm font-semibold mb-5">\n                <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />Why Drug &amp; Alcohol Testing Matters\n              </span>'
                );

                content = content.replace(
                    /<h2 className="text-2xl md:text-3xl font-bold text-white mb-10">This Service Helps Organisations Maintain<\/h2>/,
                    '<h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-10">This Service Helps Organisations Maintain</h2>'
                );

                content = content.replace(
                    /className="bg-white\/\[0\.06\] rounded-2xl p-7 border border-white\/10"/g,
                    'className="bg-white rounded-2xl p-7 border border-[#E8E8F0] shadow-sm"'
                );

                content = content.replace(
                    /className="w-12 h-12 rounded-2xl bg-\[#CB154E\]\/20 flex items-center justify-center text-\[#CB154E\] mb-5"/g,
                    'className="w-12 h-12 rounded-2xl bg-[#CB154E]/10 flex items-center justify-center text-[#CB154E] mb-5"'
                );

                content = content.replace(
                    /<h3 className="text-white font-bold text-lg mb-3">/g,
                    '<h3 className="text-[#1a1a2e] font-bold text-lg mb-3">'
                );

                content = content.replace(
                    /<p className="text-white\/60 text-sm leading-relaxed">/g,
                    '<p className="text-[#64648c] text-sm leading-relaxed">'
                );
            }

            // 5. GLOBAL SPACING & CONSISTENCY
            // Section spacing: 80px top and bottom -> py-12 md:py-16 -> py-20
            // Container: max-width 1200px -> max-w-7xl -> max-w-[1200px]
            // gap-4, gap-6, etc might stay, let's just make sure containers are 1200px and sections are py-20.
            content = content.replace(/max-w-7xl/g, 'max-w-[1200px]');
            content = content.replace(/py-12 md:py-16/g, 'py-20');
            content = content.replace(/py-10 md:py-14/g, 'py-20');
            content = content.replace(/py-12 md:py-24 lg:py-32/g, 'py-20');
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Modified: ' + fullPath);
            }
        }
    }
}

processDir(path.join(process.cwd(), 'app'));
processDir(path.join(process.cwd(), 'sections'));
processDir(path.join(process.cwd(), 'components'));
