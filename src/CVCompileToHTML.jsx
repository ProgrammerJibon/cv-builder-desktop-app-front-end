export const Design1HTML = ({
    name,
    address,
    email,
    link,
    summary,
    skills,
    experience,
    education,
    certifications,
    involvement,
    awards,
    references,
}) => {
    let html = `<div class="font-sans p-6 leading-relaxed text-sm sm:text-base">`;

    if (name || address || email || link) {
        if (name) html += `<h2 class="text-md font-bold text-center">${name}</h2>`;
        const contactLine = [address, email, link].filter(Boolean).join(' | ');
        if (contactLine) html += `<p class=" text-xs mb-4 text-center">${contactLine}</p>`;
    }

    if (summary) {
        html += `<h3 class="text-md font-semibold mt-4 mb-1">SUMMARY</h3><p class="text-xs">${summary}</p>`;
    }

    if (skills && skills.length > 0) {
        html += `<h3 class="text-md font-semibold mt-4 mb-1">SKILLS</h3><p>`;
        skills.forEach((s) => {
            if (s && s.sn && s.pl) {
                html += `${s.sn} (${s.pl}), `;
            }
        });
        html += `</p>`;
    }

    if (experience && experience.length > 0) {
        html += `<h3 class="text-md font-semibold mt-4 mb-1">EXPERIENCE</h3><ul class="list-disc list-inside">`;
        experience.forEach((e) => {
            if (e && e.c && e.p && e.sy && e.ey) {
                html += `<div class="text-xs">${e.c} | ${e.p} | ${e.sy} - ${e.ey}</div>`;
            }
        });
        html += `</ul>`;
    }

    if (education && education.length > 0) {
        html += `<h3 class="text-md font-semibold mt-4 mb-1">EDUCATION</h3><ul class="list-disc list-inside">`;
        education.forEach((ed) => {
            if (ed && ed.d && ed.i && ed.sy && ed.ey) {
                html += `<div class="text-xs">${ed.d} | ${ed.i} | ${ed.sy} - ${ed.ey}</div>`;
            }
        });
        html += `</ul>`;
    }

    if (certifications && certifications.length > 0) {
        html += `<h3 class="text-md font-semibold mt-4 mb-1">CERTIFICATIONS</h3><ul class="list-disc list-inside">`;
        certifications.forEach((c) => {
            if (c && c.t && c.a && c.y) {
                html += `<div class="text-xs">${c.t} | ${c.a} | ${c.y}</div>`;
            }
        });
        html += `</ul>`;
    }

    if (involvement && involvement.length > 0) {
        html += `<h3 class="text-md font-semibold mt-4 mb-1">INVOLVEMENT</h3><ul class="list-disc list-inside">`;
        involvement.forEach((iv) => {
            if (iv && iv.o && iv.r && iv.d) {
                html += `<div class="text-xs">${iv.o} | ${iv.r} | ${iv.d}</div>`;
            }
        });
        html += `</ul>`;
    }

    if (awards && awards.length > 0) {
        html += `<h3 class="text-md font-semibold mt-4 mb-1">WINNINGS & AWARDS</h3><ul class="list-disc list-inside">`;
        awards.forEach((a) => {
            if (a && a.t && a.y && a.d) {
                html += `<div class="text-xs">${a.t} | ${a.y} | ${a.d}</div>`;
            }
        });
        html += `</ul>`;
    }

    if (references && references.length > 0) {
        html += `<h3 class="text-md font-semibold mt-4 mb-1">REFERENCES</h3><ul class="list-disc list-inside">`;
        references.forEach((r) => {
            if (r && r.n && r.p && r.c) {
                html += `<div class="text-xs">${r.n} | ${r.p} | ${r.c}</div>`;
            }
        });
        html += `</ul>`;
    }

    html += `</div>`;
    return html;
};








export function Design2HTML({
    name,
    address,
    email,
    link,
    summary,
    skills,
    experience,
    education,
    certifications,
    involvement,
    awards,
    references,
}) {
    let html = `
        <div style="padding: 2rem 1.5rem; max-width: 64rem; margin: auto; font-family: serif; color: #3a3a3a; line-height: 1.6;">
    `;

    if (name) html += `<h1 style="font-size: 1.875rem; font-weight: bold;">${name}</h1>`;
    const contact = [address, email, link].filter(Boolean).join(" • ");
    if (contact) html += `<p style="margin-top: 0.25rem; font-size: 0.875rem;">${contact}</p>`;
    if (summary) html += `<p style="margin-top: 1.5rem;">${summary}</p>`;

    if (experience?.length) {
        html += `<h2 style="margin-top: 2rem; font-size: 1.25rem; font-weight: 600; background-color: #e9d8fd; padding: 0.25rem 0.5rem;">Experience</h2>`;
        experience.forEach((e) => {
            if (e && e.p && e.c && e.sy && e.ey) {
                html += `
                    <div style="margin-top: 1rem;">
                        <h3 style="font-size: 0.875rem; font-weight: 500;">${e.sy} - ${e.ey}</h3>
                        <h4 style="font-weight: 600;">${e.p} | ${e.c}</h4>
                    </div>`;
            }
        });
    }

    if (skills?.length) {
        html += `<h2 style="margin-top: 2rem; font-size: 1.25rem; font-weight: 600; background-color: #e9d8fd; padding: 0.25rem 0.5rem;">Skills</h2>`;
        html += `<p style="font-size: 0.875rem; margin-top: 0.5rem;">${skills.map(s => s.sn && s.pl ? `${s.sn} (${s.pl})` : '').join(' • ')}</p>`;
    }

    if (education?.length) {
        html += `<h2 style="margin-top: 2rem; font-size: 1.25rem; font-weight: 600; background-color: #e9d8fd; padding: 0.25rem 0.5rem;">Education</h2>`;
        education.forEach((e) => {
            if (e && e.d && e.i && e.sy && e.ey) {
                html += `
                    <div style="margin-top: 1rem;">
                        <h3 style="font-size: 0.875rem; font-weight: 500;">${e.sy} - ${e.ey}</h3>
                        <h4 style="font-weight: 600;">${e.d} | ${e.i}</h4>
                    </div>`;
            }
        });
    }

    if (certifications?.length) {
        html += `<h2 style="margin-top: 2rem; font-size: 1.25rem; font-weight: 600; background-color: #e9d8fd; padding: 0.25rem 0.5rem;">Certifications</h2>`;
        certifications.forEach((c) => {
            if (c && c.t && c.a && c.y) {
                html += `<p style="font-size: 0.875rem; margin-top: 0.25rem;">• ${c.t} | ${c.a} | ${c.y}</p>`;
            }
        });
    }

    if (involvement?.length) {
        html += `<h2 style="margin-top: 2rem; font-size: 1.25rem; font-weight: 600; background-color: #e9d8fd; padding: 0.25rem 0.5rem;">Involvement</h2>`;
        involvement.forEach((i) => {
            if (i && i.o && i.r && i.d) {
                html += `<p style="font-size: 0.875rem; margin-top: 0.25rem;">• ${i.o} | ${i.r} | ${i.d}</p>`;
            }
        });
    }

    if (awards?.length) {
        html += `<h2 style="margin-top: 2rem; font-size: 1.25rem; font-weight: 600; background-color: #e9d8fd; padding: 0.25rem 0.5rem;">Awards</h2>`;
        awards.forEach((a) => {
            if (a && a.t && a.y && a.d) {
                html += `<p style="font-size: 0.875rem; margin-top: 0.25rem;">• ${a.t} | ${a.y} | ${a.d}</p>`;
            }
        });
    }

    if (references?.length) {
        html += `<h2 style="margin-top: 2rem; font-size: 1.25rem; font-weight: 600; background-color: #e9d8fd; padding: 0.25rem 0.5rem;">References</h2>`;
        references.forEach((r) => {
            if (r && r.n && r.p && r.c) {
                html += `<p style="font-size: 0.875rem; margin-top: 0.25rem;">${r.n} | ${r.p} | ${r.c}</p>`;
            }
        });
    }

    html += `</div>`;
    return html;
}






export function Design3HTML({
    name,
    address,
    email,
    link,
    summary,
    skills,
    experience,
    education,
    certifications,
    involvement,
    awards,
    references,
}) {
    let html = `<div style="background-color:#e6e6e6; font-family:sans-serif; padding:1.5rem; line-height:1.625; font-size:0.875rem;">`;

    if (name || address || email || link) {
        if (name) {
            html += `<h2 style="font-size:30px; font-weight:bold; color:#ffffff; background-color:#3a8c95; padding:0.5rem 1rem; text-transform:uppercase; letter-spacing:0.05em;">${name}</h2>`;
        }
        const contactLine = [address, email, link].filter(Boolean).join(' | ');
        if (contactLine) {
            html += `<p style="font-size:0.875rem; text-align:right; color:#00798B; margin-bottom:1rem;">${contactLine}</p>`;
        }
    }

    if (summary) {
        html += `<h3 style="margin-top:1.5rem; font-weight:600; font-size:1.125rem; color:#3a8c95; border-bottom:1px solid #3a8c95;">PROFILE</h3>`;
        html += `<p style="margin-top:0.25rem; font-size:0.75rem;">${summary}</p>`;
    }

    if (experience?.length > 0) {
        html += `<h3 style="margin-top:1.5rem; font-weight:600; font-size:1.125rem; color:#3a8c95; border-bottom:1px solid #3a8c95;">EXPERIENCE</h3><ul style="margin-top:0.5rem;">`;
        experience.forEach((e) => {
            if (e && e.c && e.p && e.sy && e.ey) {
                html += `
                    <li style="margin-bottom:0.5rem;">
                        <h4 style="font-weight:600; color:#434343;">${e.c}</h4>
                        <p style="font-size:0.75rem; text-transform:uppercase; color:#00798B;">${e.sy} - ${e.ey}</p>
                        <p style="font-size:0.75rem;">${e.p}</p>
                    </li>
                `;
            }
        });
        html += `</ul>`;
    }

    if (skills?.length > 0) {
        html += `<h3 style="margin-top:1.5rem; font-weight:600; font-size:1.125rem; color:#3a8c95; border-bottom:1px solid #3a8c95;">SKILLS</h3><ul style="list-style:disc; padding-left:1.2rem; font-size:0.75rem;">`;
        skills.forEach((s) => {
            if (s && s.sn && s.pl) {
                html += `<li>${s.sn} (${s.pl})</li>`;
            }
        });
        html += `</ul>`;
    }

    if (education?.length > 0) {
        html += `<h3 style="margin-top:1.5rem; font-weight:600; font-size:1.125rem; color:#3a8c95; border-bottom:1px solid #3a8c95;">EDUCATION</h3><ul style="margin-top:0.5rem;">`;
        education.forEach((ed) => {
            if (ed && ed.d && ed.i && ed.sy && ed.ey) {
                html += `
                    <li style="margin-bottom:0.5rem;">
                        <h4 style="font-weight:600; color:#434343;">${ed.i}</h4>
                        <p style="font-size:0.75rem; text-transform:uppercase; color:#00798B;">${ed.sy} - ${ed.ey}</p>
                        <p style="font-size:0.75rem;">${ed.d}</p>
                    </li>
                `;
            }
        });
        html += `</ul>`;
    }

    if (certifications?.length > 0) {
        html += `<h3 style="margin-top:1.5rem; font-weight:600; font-size:1.125rem; color:#3a8c95; border-bottom:1px solid #3a8c95;">CERTIFICATIONS</h3><ul style="list-style:disc; padding-left:1.2rem; font-size:0.75rem;">`;
        certifications.forEach((c) => {
            if (c && c.t && c.a && c.y) {
                html += `<li>${c.t} | ${c.a} | ${c.y}</li>`;
            }
        });
        html += `</ul>`;
    }

    if (involvement?.length > 0) {
        html += `<h3 style="margin-top:1.5rem; font-weight:600; font-size:1.125rem; color:#3a8c95; border-bottom:1px solid #3a8c95;">INVOLVEMENT</h3><ul style="list-style:disc; padding-left:1.2rem; font-size:0.75rem;">`;
        involvement.forEach((iv) => {
            if (iv && iv.o && iv.r && iv.d) {
                html += `<li>${iv.o} | ${iv.r} | ${iv.d}</li>`;
            }
        });
        html += `</ul>`;
    }

    if (awards?.length > 0) {
        html += `<h3 style="margin-top:1.5rem; font-weight:600; font-size:1.125rem; color:#3a8c95; border-bottom:1px solid #3a8c95;">AWARDS</h3><ul style="list-style:disc; padding-left:1.2rem; font-size:0.75rem;">`;
        awards.forEach((a) => {
            if (a && a.t && a.y && a.d) {
                html += `<li>${a.t} | ${a.y} | ${a.d}</li>`;
            }
        });
        html += `</ul>`;
    }

    if (references?.length > 0) {
        html += `<h3 style="margin-top:1.5rem; font-weight:600; font-size:1.125rem; color:#3a8c95; border-bottom:1px solid #3a8c95;">REFERENCES</h3><ul style="list-style:disc; padding-left:1.2rem; font-size:0.75rem;">`;
        references.forEach((r) => {
            if (r && r.n && r.p && r.c) {
                html += `<li>${r.n} | ${r.p} | ${r.c}</li>`;
            }
        });
        html += `</ul>`;
    }

    html += `</div>`;
    return html;
}












export function Design4HTML({
    name,
    address,
    email,
    link,
    summary,
    skills,
    experience,
    education,
    certifications,
    involvement,
    awards,
    references,
}) {
    let html = `<div style="background-color:#ffffff; padding:1.5rem; font-family:sans-serif; font-size:0.875rem; color:#4b5563;">`;

    if (name) html += `<h1 style="font-size:1.5rem; font-weight:bold; color:#1f2937;">${name}</h1>`;
    const contactLine = [address, email, link].filter(Boolean).join(' | ');
    if (contactLine) html += `<p style="font-size:0.75rem; margin-bottom:1rem; color:#6b7280;">${contactLine}</p>`;

    if (summary) {
        html += `<h2 style="margin-top:1.5rem; margin-bottom:0.25rem; font-weight:600; color:#4b5563;">PROFILE</h2>`;
        html += `<p style="font-size:0.75rem;">${summary}</p>`;
    }

    if (experience?.length) {
        html += `<h2 style="margin-top:1.5rem; margin-bottom:0.25rem; font-weight:600; color:#4b5563;">EXPERIENCE</h2><ul>`;
        experience.forEach((e) => {
            if (e && e.c && e.p && e.sy && e.ey) {
                html += `<li style="margin-bottom:0.5rem;"><span style="font-weight:500;">${e.p}</span> at <span style="font-style:italic;">${e.c}</span> <span style="color:#6b7280;">(${e.sy} - ${e.ey})</span></li>`;
            }
        });
        html += `</ul>`;
    }

    if (skills?.length) {
        html += `<h2 style="margin-top:1.5rem; margin-bottom:0.25rem; font-weight:600; color:#4b5563;">SKILLS</h2><ul style="list-style-type:disc; padding-left:1.25rem; font-size:0.75rem;">`;
        skills.forEach(s => {
            if (s.sn && s.pl) html += `<li>${s.sn} (${s.pl})</li>`;
        });
        html += `</ul>`;
    }

    if (education?.length) {
        html += `<h2 style="margin-top:1.5rem; margin-bottom:0.25rem; font-weight:600; color:#4b5563;">EDUCATION</h2><ul>`;
        education.forEach((e) => {
            if (e.d && e.i && e.sy && e.ey) {
                html += `<li style="margin-bottom:0.5rem;">${e.d} — ${e.i} (${e.sy} - ${e.ey})</li>`;
            }
        });
        html += `</ul>`;
    }

    if (certifications?.length) {
        html += `<h2 style="margin-top:1.5rem; margin-bottom:0.25rem; font-weight:600; color:#4b5563;">CERTIFICATIONS</h2><ul>`;
        certifications.forEach((c) => {
            if (c.t && c.a && c.y) {
                html += `<li>${c.t} | ${c.a} | ${c.y}</li>`;
            }
        });
        html += `</ul>`;
    }

    if (involvement?.length) {
        html += `<h2 style="margin-top:1.5rem; margin-bottom:0.25rem; font-weight:600; color:#4b5563;">INVOLVEMENT</h2><ul>`;
        involvement.forEach((iv) => {
            if (iv.o && iv.r && iv.d) {
                html += `<li>${iv.o} | ${iv.r} | ${iv.d}</li>`;
            }
        });
        html += `</ul>`;
    }

    if (awards?.length) {
        html += `<h2 style="margin-top:1.5rem; margin-bottom:0.25rem; font-weight:600; color:#4b5563;">AWARDS</h2><ul>`;
        awards.forEach((a) => {
            if (a.t && a.y && a.d) {
                html += `<li>${a.t} | ${a.y} | ${a.d}</li>`;
            }
        });
        html += `</ul>`;
    }

    if (references?.length) {
        html += `<h2 style="margin-top:1.5rem; margin-bottom:0.25rem; font-weight:600; color:#4b5563;">REFERENCES</h2><ul>`;
        references.forEach((r) => {
            if (r.n && r.p && r.c) {
                html += `<li>${r.n} | ${r.p} | ${r.c}</li>`;
            }
        });
        html += `</ul>`;
    }

    html += `</div>`;
    return html;
}













export function Design5HTML({
    name,
    address,
    email,
    link,
    summary,
    skills,
    experience,
    education,
    certifications,
    involvement,
    awards,
    references,
}) {
    let html = `<div style="padding: 2rem; color: #4A4A4A; background-color: #fdfdfd; font-family: sans-serif; font-size: 0.875rem; line-height: 1.5;">`;

    if (name) html += `<h1 style="font-size: 1.875rem; font-weight: bold; color: #4A4A4A;">${name}</h1>`;
    const contactLine = [address, email, link].filter(Boolean).join(" | ");
    if (contactLine) html += `<p style="font-size: 0.75rem; color: #999; margin-bottom: 1rem;">${contactLine}</p>`;

    if (summary) {
        html += `<h2 style="margin-top: 1.5rem; margin-bottom: 0.25rem; font-size: 1.125rem; font-weight: 600; color: #111;">SUMMARY</h2>`;
        html += `<p style="font-size: 0.75rem;">${summary}</p>`;
    }

    if (experience?.length) {
        html += `<h2 style="margin-top: 1.5rem; margin-bottom: 0.25rem; font-size: 1.125rem; font-weight: 600; color: #111;">WORK HISTORY</h2><ul>`;
        experience.forEach((e) => {
            if (e.c && e.p && e.sy && e.ey) {
                html += `<li style="margin-bottom: 0.5rem; font-size: 0.75rem;"><strong>${e.p}</strong> at ${e.c} (${e.sy} - ${e.ey})</li>`;
            }
        });
        html += `</ul>`;
    }

    if (skills?.length) {
        html += `<h2 style="margin-top: 1.5rem; margin-bottom: 0.25rem; font-size: 1.125rem; font-weight: 600; color: #111;">SKILLS</h2><p style="font-size: 0.75rem;">`;
        html += skills.map(s => s.sn && s.pl ? `${s.sn} (${s.pl})` : '').join(" • ");
        html += `</p>`;
    }

    if (education?.length) {
        html += `<h2 style="margin-top: 1.5rem; margin-bottom: 0.25rem; font-size: 1.125rem; font-weight: 600; color: #111;">EDUCATION</h2><ul>`;
        education.forEach((e) => {
            if (e.d && e.i && e.sy && e.ey) {
                html += `<li style="font-size: 0.75rem;">${e.d} | ${e.i} (${e.sy} - ${e.ey})</li>`;
            }
        });
        html += `</ul>`;
    }

    if (certifications?.length) {
        html += `<h2 style="margin-top: 1.5rem; margin-bottom: 0.25rem; font-size: 1.125rem; font-weight: 600; color: #111;">CERTIFICATIONS</h2><ul>`;
        certifications.forEach((c) => {
            if (c.t && c.a && c.y) {
                html += `<li style="font-size: 0.75rem;">${c.t} | ${c.a} | ${c.y}</li>`;
            }
        });
        html += `</ul>`;
    }

    if (involvement?.length) {
        html += `<h2 style="margin-top: 1.5rem; margin-bottom: 0.25rem; font-size: 1.125rem; font-weight: 600; color: #111;">INVOLVEMENT</h2><ul>`;
        involvement.forEach((iv) => {
            if (iv.o && iv.r && iv.d) {
                html += `<li style="font-size: 0.75rem;">${iv.o} | ${iv.r} | ${iv.d}</li>`;
            }
        });
        html += `</ul>`;
    }

    if (awards?.length) {
        html += `<h2 style="margin-top: 1.5rem; margin-bottom: 0.25rem; font-size: 1.125rem; font-weight: 600; color: #111;">AWARDS</h2><ul>`;
        awards.forEach((a) => {
            if (a.t && a.y && a.d) {
                html += `<li style="font-size: 0.75rem;">${a.t} | ${a.y} | ${a.d}</li>`;
            }
        });
        html += `</ul>`;
    }

    if (references?.length) {
        html += `<h2 style="margin-top: 1.5rem; margin-bottom: 0.25rem; font-size: 1.125rem; font-weight: 600; color: #111;">REFERENCES</h2><ul>`;
        references.forEach((r) => {
            if (r.n && r.p && r.c) {
                html += `<li style="font-size: 0.75rem;">${r.n} | ${r.p} | ${r.c}</li>`;
            }
        });
        html += `</ul>`;
    }

    html += `</div>`;
    return html;
}



// generateLatex.js
export const GenerateLatex = ({
    name,
    address,
    email,
    link,
    summary,
    skills,
    experience,
    education,
    certifications,
    involvement,
    awards,
    references,
}) => {
    let result = `\\documentclass[12pt]{article}\n` +
        `\\usepackage[margin=0.5in]{geometry}\n` +
        `\\usepackage{hyperref}\n` +
        `\\usepackage{enumitem}\n` +
        `\\usepackage{xcolor}\n` +
        `\\begin{document}\n\n` +

        `\\textbf{${name}}\\\\\n` +
        `${address} | ${email} | ${link}\\\\\n\n` +

        `\\textbf{SUMMARY}\\\\\n` +
        `${summary}\\\\\n\n` +

        `\\textbf{SKILLS}\\\\\n`;

    skills.forEach((s) => {
        result += `${s.sn} (${s.pl}), `;
    });

    result += `\\\\\n\n` +

        `\\textbf{EXPERIENCE}\\\\\n\\begin{itemize}\n`;
    experience.forEach((e) => {
        result += `\\item ${e.c} \\textbar{} ${e.p} \\textbar{} ${e.sy} - ${e.ey}\n`;
    });

    result += `\\end{itemize}\n\n` +

        `\\textbf{EDUCATION}\\\\\n\\begin{itemize}\n`;
    education.forEach((ed) => {
        result += `\\item ${ed.d} \\textbar{} ${ed.i} \\textbar{} ${ed.sy} - ${ed.ey}\n`;
    });

    result += `\\end{itemize}\n\n` +

        `\\textbf{CERTIFICATIONS}\\\\\n\\begin{itemize}\n`;
    certifications.forEach((c) => {
        result += `\\item ${c.t} \\textbar{} ${c.a} \\textbar{} ${c.y}\n`;
    });

    result += `\\end{itemize}\n\n` +

        `\\textbf{INVOLVEMENT}\\\\\n\\begin{itemize}\n`;
    involvement.forEach((iv) => {
        result += `\\item ${iv.o} \\textbar{} ${iv.r} \\textbar{} ${iv.d}\n`;
    });

    result += `\\end{itemize}\n\n` +

        `\\textbf{WINNINGS \\& AWARDS}\\\\\n\\begin{itemize}\n`;
    awards.forEach((a) => {
        result += `\\item ${a.t} \\textbar{} ${a.y} \\textbar{} ${a.d}\n`;
    });

    result += `\\end{itemize}\n\n` +

        `\\textbf{REFERENCES}\\\\\n\\begin{itemize}\n`;
    references.forEach((r) => {
        result += `\\item ${r.n} \\textbar{} ${r.p} \\textbar{} ${r.c}\n`;
    });

    result += `\\end{itemize}\n\n` +

        `\\end{document}`;

    return result;
};




export default Design1HTML;
