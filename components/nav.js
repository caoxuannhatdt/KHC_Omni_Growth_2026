/**
 * components/nav.js  —  ES Module
 * Omni-Growth Workspace 2026
 *
 * Premium Floating Dropdown Mega Menu (Glassmorphism)
 * Layout: 2-column dropdown below the 9-dot button
 *   Left  → 6 Module pills
 *   Right → SubGroup headers + feature links
 *
 * Status badges:
 *   research    → purple "Đang nghiên cứu"
 *   coming-soon → orange "Sắp ra mắt"   + pointer-events: none
 *   active      → no badge
 *
 * Empty subGroup → italic grey "Đang cập nhật"
 */

import { workspaceMenu } from '/config/menu-config.js';

(function () {
  if (document.getElementById('omni-nav')) return;

  /* ── Brand tokens ──────────────────────────────────────────────────── */
  const NAVY = '#003468';
  const BLUE = '#0052a5';
  const GOLD = '#F7A800';

  const THEME = {
    blue: BLUE,
    indigo: '#4f46e5',
    green: '#16a34a',
    slate: '#475569',
    orange: '#ea580c',
    pink: '#db2777',
  };

  /* ── Homepage detection ────────────────────────────────────────────── */
  const p = window.location.pathname;
  const isHome = p === '/' || p === '/index.html' || p.endsWith('/index.html');

  /* ── Global CSS ────────────────────────────────────────────────────── */
  const css = document.createElement('style');
  css.textContent = `
        #omni-nav, #omni-nav * { box-sizing: border-box; font-family: 'Inter','Segoe UI',sans-serif; }
        #omni-mega {
            display: none;
            position: absolute;
            top: calc(100% + 10px);
            right: 0;
            width: 680px;
            max-width: 95vw;
            z-index: 9998;
            background: rgba(255,255,255,0.92);
            backdrop-filter: blur(16px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            border: 1px solid rgba(255,255,255,0.6);
            border-radius: 18px;
            box-shadow: 0 24px 60px rgba(0,30,80,.18), 0 2px 8px rgba(0,30,80,.08);
            overflow: hidden;
            animation: omni-fade-in .18s ease forwards;
        }
        #omni-mega.open { display: flex; }
        #omni-mod-list { width: 188px; flex-shrink: 0; background: rgba(248,250,252,0.85); border-right: 1px solid rgba(226,232,240,.7); padding: 10px 8px; overflow-y: auto; max-height: 480px; }
        #omni-feat-pane { flex: 1; padding: 14px 14px 14px 12px; overflow-y: auto; max-height: 480px; }
        #omni-mod-list::-webkit-scrollbar, #omni-feat-pane::-webkit-scrollbar { width: 3px; }
        #omni-mod-list::-webkit-scrollbar-thumb, #omni-feat-pane::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 2px; }
        .omni-mod-pill {
            width: 100%; text-align: left; border: none; background: transparent;
            border-radius: 10px; padding: 8px 10px; margin-bottom: 2px; cursor: pointer;
            display: flex; align-items: center; gap: 8px;
            font-family: 'Inter',sans-serif; font-size: 12px; font-weight: 500; color: #64748b;
            transition: background .12s, color .12s;
        }
        .omni-mod-pill:hover { background: rgba(255,255,255,.85); }
        .omni-mod-pill.active { background: #fff; font-weight: 700; box-shadow: 0 1px 6px rgba(0,0,0,.07); }
        .omni-feat-link {
            display: flex; align-items: center; gap: 8px;
            padding: 8px 10px; border-radius: 8px; border: 1px solid transparent;
            color: #334155; font-size: 12.5px; font-weight: 600;
            text-decoration: none; margin-bottom: 3px;
            transition: background .12s, border-color .12s, color .12s;
        }
        .omni-feat-link:not(.disabled):hover {
            background: ${NAVY}0e;
            border-color: ${NAVY}30;
            color: ${NAVY};
        }
        .omni-feat-link.disabled { pointer-events: none; opacity: .48; }
        .omni-group-label {
            font-size: 9px; font-weight: 800; text-transform: uppercase;
            letter-spacing: .1em; color: #94a3b8;
            margin: 10px 0 5px; padding-bottom: 4px;
            border-bottom: 1px solid rgba(226,232,240,.8);
        }
        .omni-empty {
            font-size: 12px; color: #94a3b8; font-style: italic;
            padding: 6px 10px;
        }
        @media (max-width: 720px) { #omni-mega { width: 98vw; right: -4vw; } }
        @media (max-width: 480px) { #omni-dl-label { display: none !important; } }
    `;
  document.head.appendChild(css);

  /* ── Nav HTML ──────────────────────────────────────────────────────── */
  const nav = document.createElement('nav');
  nav.id = 'omni-nav';
  nav.style.cssText = `
        position: sticky; top: 0; z-index: 9999;
        background: rgba(255,255,255,0.97);
        backdrop-filter: blur(14px);
        border-bottom: 1px solid rgba(226,232,240,.85);
        box-shadow: 0 1px 12px rgba(0,52,104,.06);
    `;
  nav.innerHTML = `
    <div style="max-width:1400px;margin:0 auto;padding:0 20px;height:60px;display:flex;align-items:center;justify-content:space-between;gap:16px;">

        <!-- Logo -->
        <a href="/index.html" style="display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;">
            <img src="/Logo.png" alt="PNJ"
                style="height:33px;width:auto;object-fit:contain;background:#fff;padding:4px 8px;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,.1);"
                onerror="this.style.display='none'">
            <span style="font-size:11.5px;font-weight:900;letter-spacing:.16em;color:${NAVY};text-transform:uppercase;white-space:nowrap;">OMNI-GROWTH</span>
        </a>

        <!-- CTA — homepage only -->
        <div id="omni-cta" style="display:${isHome ? 'flex' : 'none'};align-items:center;gap:20px;flex:1;justify-content:center;flex-wrap:wrap;">
            <a href="#problem"              class="omni-cta-a" style="color:#64748b;" onmouseover="this.style.color='#dc2626'" onmouseout="this.style.color='#64748b'">1. Problem</a>
            <a href="#agitation"            class="omni-cta-a" style="color:#64748b;" onmouseover="this.style.color='#ea580c'" onmouseout="this.style.color='#64748b'">2. Agitation</a>
            <a href="#solution"             class="omni-cta-a" style="color:#64748b;" onmouseover="this.style.color='#16a34a'" onmouseout="this.style.color='#64748b'">3. Solution</a>
            <a href="#execution"            class="omni-cta-a" style="color:#64748b;" onmouseover="this.style.color='${NAVY}'"  onmouseout="this.style.color='#64748b'">4. Thực Thi</a>
            <a href="#internal-empowerment" class="omni-cta-a" style="color:#64748b;" onmouseover="this.style.color='#0d9488'" onmouseout="this.style.color='#64748b'">5. Internal</a>
        </div>

        <!-- Right -->
        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;position:relative;">

            <!-- Download -->
            <button onclick="typeof downloadAsImage==='function'&&downloadAsImage()"
                style="display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:999px;border:none;cursor:pointer;font-family:inherit;font-size:12px;font-weight:800;color:#fff;background:linear-gradient(135deg,${NAVY},${BLUE});box-shadow:0 2px 8px rgba(0,52,104,.22);transition:all .2s;"
                onmouseover="this.style.transform='translateY(-1px)';this.style.boxShadow='0 5px 14px rgba(0,52,104,.3)'"
                onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 2px 8px rgba(0,52,104,.22)'">
                <i class="fas fa-download" style="font-size:11px;"></i>
                <span id="omni-dl-label">Tải Về</span>
            </button>

            <!-- 9-dot menu button -->
            <button id="omni-menu-btn" aria-label="App Menu" aria-expanded="false"
                style="width:38px;height:38px;border-radius:10px;border:1.5px solid rgba(0,52,104,.14);background:#fff;color:${NAVY};cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .18s;flex-shrink:0;"
                onmouseover="this.style.background='${NAVY}';this.style.color='#fff';this.style.borderColor='${NAVY}'"
                onmouseout="this.style.background='#fff';this.style.color='${NAVY}';this.style.borderColor='rgba(0,52,104,.14)'">
                <i class="fas fa-th" style="font-size:15px;pointer-events:none;"></i>
            </button>

            <!-- ▼ Floating Mega Dropdown -->
            <div id="omni-mega" role="dialog" aria-label="App Drawer">

                <!-- Drawer header -->
                <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,${NAVY},${GOLD},${BLUE});"></div>

                <!-- Left: module list -->
                <div id="omni-mod-list">
                    <p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:#94a3b8;padding:4px 4px 8px;">Workspace</p>
                </div>

                <!-- Right: feature pane -->
                <div id="omni-feat-pane"></div>
            </div>
        </div>
    </div>
    `;

  /* ── CTA link style (inline avoids extra <style> block) ─────────────── */
  nav.querySelectorAll('.omni-cta-a').forEach(a => {
    a.style.cssText += 'font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;text-decoration:none;transition:color .15s;';
  });

  /* ── Mount nav ─────────────────────────────────────────────────────── */
  const mount = document.getElementById('global-nav') || (() => {
    const d = document.createElement('div'); d.id = 'global-nav'; document.body.prepend(d); return d;
  })();
  mount.appendChild(nav);

  /* ── Refs ──────────────────────────────────────────────────────────── */
  const menuBtn = document.getElementById('omni-menu-btn');
  const mega = document.getElementById('omni-mega');
  const modList = document.getElementById('omni-mod-list');
  const featPane = document.getElementById('omni-feat-pane');

  /* ── Badge helper ──────────────────────────────────────────────────── */
  function badge(status) {
    if (status === 'research')
      return `<span style="margin-left:5px;font-size:8px;background:#faf5ff;color:#9333ea;font-weight:800;padding:2px 5px;border-radius:4px;border:1px solid #e9d5ff;white-space:nowrap;text-transform:uppercase;letter-spacing:.04em;">Đang nghiên cứu</span>`;
    if (status === 'coming-soon')
      return `<span style="margin-left:5px;font-size:8px;background:#fff7ed;color:#ea580c;font-weight:800;padding:2px 5px;border-radius:4px;border:1px solid #fed7aa;white-space:nowrap;text-transform:uppercase;letter-spacing:.04em;">Sắp ra mắt</span>`;
    return '';
  }

  /* ── Feature link ──────────────────────────────────────────────────── */
  function featLinkHTML(f, accent) {
    const off = f.status === 'coming-soon';
    return `<a href="${off ? '#' : f.url}" class="omni-feat-link${off ? ' disabled' : ''}">
            <i class="fas fa-chevron-right" style="font-size:9px;color:${accent};opacity:.55;flex-shrink:0;"></i>
            <span style="flex:1;">${f.name}</span>${badge(f.status)}
        </a>`;
  }

  /* ── Render right pane ─────────────────────────────────────────────── */
  let activeIdx = -1;

  function renderPane(idx) {
    activeIdx = idx;
    const mod = workspaceMenu[idx];
    const accent = THEME[mod.theme] || NAVY;

    /* Update pill active states */
    modList.querySelectorAll('.omni-mod-pill').forEach((pill, i) => {
      pill.classList.toggle('active', i === idx);
      const a = THEME[workspaceMenu[i].theme] || NAVY;
      pill.querySelector('.pill-icon').style.background = i === idx ? `${a}18` : '#e2e8f080';
      pill.querySelector('.pill-icon').style.color = i === idx ? a : '#94a3b8';
      pill.style.color = i === idx ? a : '#64748b';
    });

    /* Build content */
    const hasSubs = mod.subGroups && mod.subGroups.length > 0;
    const flat = mod.features;

    let html = `<p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:${accent};margin-bottom:10px;">${mod.moduleName}</p>`;

    if (!hasSubs && (!flat || !flat.length)) {
      html += `<p class="omni-empty"><i class="fas fa-sync-alt" style="margin-right:5px;font-size:9px;animation:omni-spin 1.5s linear infinite;display:inline-block;"></i>Đang cập nhật</p>`;
    } else if (hasSubs) {
      mod.subGroups.forEach(g => {
        html += `<p class="omni-group-label">${g.groupName}</p>`;
        if (!g.features || !g.features.length) {
          html += `<p class="omni-empty"><i class="fas fa-sync-alt" style="margin-right:5px;font-size:9px;animation:omni-spin 1.5s linear infinite;display:inline-block;"></i>Đang cập nhật</p>`;
        } else {
          g.features.forEach(f => { html += featLinkHTML(f, accent); });
        }
      });
    } else {
      flat.forEach(f => { html += featLinkHTML(f, accent); });
    }

    featPane.innerHTML = html;
  }

  /* ── Build module pills ────────────────────────────────────────────── */
  workspaceMenu.forEach((mod, i) => {
    const accent = THEME[mod.theme] || NAVY;
    const pill = document.createElement('button');
    pill.className = 'omni-mod-pill';
    pill.innerHTML = `
            <span class="pill-icon" style="width:26px;height:26px;border-radius:7px;background:#e2e8f080;color:#94a3b8;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .15s;">
                <i class="fas ${mod.icon || 'fa-circle'}" style="font-size:11px;"></i>
            </span>
            <span style="line-height:1.25;">${mod.moduleName}</span>
        `;
    pill.addEventListener('click', () => renderPane(i));
    modList.appendChild(pill);
  });

  /* Auto-render first module */
  if (workspaceMenu.length) renderPane(0);

  /* ── Open / Close ──────────────────────────────────────────────────── */
  let isOpen = false;

  function open() {
    isOpen = true;
    mega.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
  }
  function close() {
    isOpen = false;
    mega.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  menuBtn.addEventListener('click', e => { e.stopPropagation(); isOpen ? close() : open(); });
  document.addEventListener('click', e => { if (isOpen && !mega.contains(e.target) && e.target !== menuBtn) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && isOpen) close(); });

})();