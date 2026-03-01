/**
 * components/nav.js  —  ES Module
 * Omni-Growth Workspace 2026 · 2-Column App Drawer Mega Menu
 *
 * Imports workspaceMenu from /config/menu-config.js.
 * Feature status badges:
 *   'active'      → plain link, no badge
 *   'research'    → purple badge "Đang nghiên cứu"
 *   'coming-soon' → disabled link + orange badge "Sắp ra mắt"
 */

import { workspaceMenu } from '/config/menu-config.js';

(function () {

  /* ─── Guard ──────────────────────────────────────────────────────────── */
  if (document.getElementById('omni-nav')) return;

  /* ─── Theme palette (maps theme name → accent hex) ──────────────────── */
  const THEME = {
    blue: '#2563eb',
    indigo: '#4f46e5',
    green: '#16a34a',
    slate: '#475569',
    orange: '#ea580c',
    pink: '#db2777',
  };

  /* ─── Detect homepage ────────────────────────────────────────────────── */
  const path = window.location.pathname;
  const isHome = path === '/' || path === '/index.html' || path.endsWith('/index.html');

  /* ─── Global styles ─────────────────────────────────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
        #omni-nav, #omni-nav * { box-sizing: border-box; font-family: 'Inter', sans-serif; }
        #omni-drawer {
            transform: translateX(100%);
            transition: transform .3s cubic-bezier(.22,1,.36,1);
        }
        #omni-drawer.open { transform: translateX(0); }
        #omni-backdrop { opacity:0; transition: opacity .25s; pointer-events:none; }
        #omni-backdrop.open { opacity:1; pointer-events:auto; }
        .omni-mod-btn { transition: background .15s, border-color .15s, color .15s; }
        .omni-feat-link { transition: background .12s, color .12s; text-decoration: none; }
        .omni-feat-link.disabled { pointer-events: none; opacity: 0.55; cursor: default; }
        #omni-module-list::-webkit-scrollbar,
        #omni-feat-pane::-webkit-scrollbar { width:4px; }
        #omni-module-list::-webkit-scrollbar-thumb,
        #omni-feat-pane::-webkit-scrollbar-thumb { background:#e2e8f0; border-radius:2px; }
        @media (max-width:640px) {
            #omni-dl-label { display:none !important; }
            #omni-drawer { width:100% !important; }
        }
    `;
  document.head.appendChild(style);

  /* ─── Build sticky nav bar ───────────────────────────────────────────── */
  const nav = document.createElement('nav');
  nav.id = 'omni-nav';
  nav.setAttribute('aria-label', 'Global navigation');
  nav.style.cssText = `
        position:sticky; top:0; z-index:9999;
        background:rgba(255,255,255,0.97);
        backdrop-filter:blur(14px);
        border-bottom:1px solid rgba(226,232,240,.85);
        box-shadow:0 1px 12px rgba(0,45,114,.07);
    `;
  nav.innerHTML = `
    <div style="max-width:1400px;margin:0 auto;padding:0 20px;height:60px;display:flex;align-items:center;justify-content:space-between;gap:16px;">

        <!-- Logo & brand -->
        <a href="/index.html" style="display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;">
            <img src="/Logo.png" alt="PNJ"
                style="height:34px;width:auto;object-fit:contain;background:#fff;padding:4px 8px;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,.1);"
                onerror="this.style.display='none'">
            <span style="font-size:12px;font-weight:900;letter-spacing:.15em;color:#002d72;text-transform:uppercase;">OMNI-GROWTH</span>
        </a>

        <!-- CTA Links (homepage only) -->
        <div id="omni-cta" style="display:${isHome ? 'flex' : 'none'};align-items:center;gap:18px;flex:1;justify-content:center;flex-wrap:wrap;">
            <a href="#problem"               style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#64748b;text-decoration:none;" onmouseover="this.style.color='#dc2626'" onmouseout="this.style.color='#64748b'">1. Problem</a>
            <a href="#agitation"             style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#64748b;text-decoration:none;" onmouseover="this.style.color='#ea580c'" onmouseout="this.style.color='#64748b'">2. Agitation</a>
            <a href="#solution"              style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#64748b;text-decoration:none;" onmouseover="this.style.color='#16a34a'" onmouseout="this.style.color='#64748b'">3. Solution</a>
            <a href="#execution"             style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#64748b;text-decoration:none;" onmouseover="this.style.color='#002d72'" onmouseout="this.style.color='#64748b'">4. Thực Thi</a>
            <a href="#internal-empowerment"  style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#64748b;text-decoration:none;" onmouseover="this.style.color='#0d9488'" onmouseout="this.style.color='#64748b'">5. Internal</a>
        </div>

        <!-- Right actions -->
        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">

            <button id="omni-dl-btn" title="Tải về PNG"
                onclick="typeof downloadAsImage==='function'&&downloadAsImage()"
                style="display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:999px;border:none;cursor:pointer;font-family:inherit;font-size:12px;font-weight:800;color:#fff;background:linear-gradient(135deg,#002d72,#1e40af);box-shadow:0 3px 10px rgba(0,45,114,.25);transition:all .2s;"
                onmouseover="this.style.background='linear-gradient(135deg,#1e40af,#2563eb)';this.style.transform='translateY(-1px)'"
                onmouseout="this.style.background='linear-gradient(135deg,#002d72,#1e40af)';this.style.transform='translateY(0)'">
                <i class="fas fa-download" style="font-size:11px;"></i>
                <span id="omni-dl-label">Tải Về</span>
            </button>

            <button id="omni-menu-btn" aria-label="Mở App Drawer" aria-expanded="false"
                style="width:38px;height:38px;border-radius:10px;border:1px solid rgba(0,45,114,.15);background:#fff;color:#002d72;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;flex-shrink:0;"
                onmouseover="this.style.background='#002d72';this.style.color='#fff'"
                onmouseout="this.style.background='#fff';this.style.color='#002d72'">
                <i class="fas fa-th" style="font-size:15px;"></i>
            </button>
        </div>
    </div>
    `;

  /* ─── Backdrop ──────────────────────────────────────────────────────── */
  const backdrop = document.createElement('div');
  backdrop.id = 'omni-backdrop';
  backdrop.style.cssText = 'position:fixed;inset:0;top:60px;z-index:9997;background:rgba(2,6,23,.48);backdrop-filter:blur(3px);';

  /* ─── Drawer Panel ──────────────────────────────────────────────────── */
  const drawer = document.createElement('div');
  drawer.id = 'omni-drawer';
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-modal', 'true');
  drawer.setAttribute('aria-label', 'App Drawer');
  drawer.style.cssText = `
        position:fixed;top:60px;right:0;bottom:0;
        width:600px;max-width:95vw;z-index:9998;
        background:#fff;border-left:1px solid #e2e8f0;
        box-shadow:-8px 0 40px rgba(0,45,114,.12);
        display:flex;flex-direction:column;overflow:hidden;
    `;
  drawer.innerHTML = `
        <!-- Header -->
        <div style="padding:16px 20px;border-bottom:1px solid #f1f5f9;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
            <div>
                <p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.15em;color:#94a3b8;">Workspace</p>
                <p style="font-size:15px;font-weight:900;color:#002d72;margin-top:1px;">OMNI-GROWTH 2026</p>
            </div>
            <button id="omni-close-btn" aria-label="Đóng"
                style="width:32px;height:32px;border-radius:8px;border:1px solid #e2e8f0;background:#f8fafc;color:#64748b;cursor:pointer;display:flex;align-items:center;justify-content:center;"
                onmouseover="this.style.background='#fee2e2';this.style.color='#dc2626'"
                onmouseout="this.style.background='#f8fafc';this.style.color='#64748b'">
                <i class="fas fa-times"></i>
            </button>
        </div>

        <!-- 2-Column body -->
        <div style="display:flex;flex:1;overflow:hidden;">
            <!-- Left: Module list -->
            <div id="omni-module-list"
                style="width:190px;flex-shrink:0;background:#f8fafc;border-right:1px solid #e2e8f0;overflow-y:auto;padding:8px;">
            </div>
            <!-- Right: Features pane -->
            <div id="omni-feat-pane"
                style="flex:1;overflow-y:auto;padding:16px 14px;">
            </div>
        </div>
    `;

  /* ─── Mount elements ─────────────────────────────────────────────────── */
  const mount = document.getElementById('global-nav') || (() => {
    const d = document.createElement('div'); d.id = 'global-nav';
    document.body.prepend(d); return d;
  })();
  mount.appendChild(nav);
  document.body.appendChild(backdrop);
  document.body.appendChild(drawer);

  /* ─── Badge HTML helper ──────────────────────────────────────────────── */
  function badgeHTML(status) {
    if (status === 'coming-soon') {
      return `<span style="margin-left:6px;font-size:8px;background:#fff7ed;color:#ea580c;font-weight:800;padding:2px 6px;border-radius:4px;text-transform:uppercase;letter-spacing:.05em;white-space:nowrap;border:1px solid #fed7aa;">Sắp ra mắt</span>`;
    }
    if (status === 'research') {
      return `<span style="margin-left:6px;font-size:8px;background:#faf5ff;color:#9333ea;font-weight:800;padding:2px 6px;border-radius:4px;text-transform:uppercase;letter-spacing:.05em;white-space:nowrap;border:1px solid #e9d5ff;">Đang nghiên cứu</span>`;
    }
    return '';
  }

  /* ─── Render feature pane ────────────────────────────────────────────── */
  const featPane = document.getElementById('omni-feat-pane');
  const modList = document.getElementById('omni-module-list');
  let activeIdx = -1;

  function renderFeatures(idx) {
    activeIdx = idx;
    const mod = workspaceMenu[idx];
    const accent = THEME[mod.theme] || '#002d72';

    /* Update module button states */
    modList.querySelectorAll('.omni-mod-btn').forEach((btn, i) => {
      const a = THEME[workspaceMenu[i].theme] || '#002d72';
      const on = i === idx;
      btn.style.background = on ? '#fff' : 'transparent';
      btn.style.borderLeft = on ? `3px solid ${a}` : '3px solid transparent';
      btn.style.color = on ? a : '#64748b';
      btn.style.fontWeight = on ? '700' : '500';
    });

    /* Empty state */
    if (!mod.features || mod.features.length === 0) {
      featPane.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#cbd5e1;text-align:center;gap:10px;padding:20px;">
                <i class="fas fa-hard-hat" style="font-size:32px;"></i>
                <p style="font-size:13px;font-weight:600;">Module đang được phát triển</p>
            </div>`;
      return;
    }

    /* Feature list */
    featPane.innerHTML = `
            <p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:${accent};margin-bottom:14px;">${mod.moduleName}</p>
            <div style="display:flex;flex-direction:column;gap:5px;">
                ${mod.features.map(f => {
      const isDisabled = f.status === 'coming-soon';
      return `
                    <a href="${isDisabled ? '#' : f.url}"
                        class="omni-feat-link${isDisabled ? ' disabled' : ''}"
                        style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;border:1px solid #f1f5f9;background:#fff;color:#334155;font-size:13px;font-weight:600;box-shadow:0 1px 3px rgba(0,0,0,.03);"
                        ${isDisabled ? '' : `onmouseover="this.style.background='${accent}10';this.style.borderColor='${accent}40';this.style.color='${accent}'" onmouseout="this.style.background='#fff';this.style.borderColor='#f1f5f9';this.style.color='#334155'"`}>
                        <i class="fas fa-chevron-right" style="font-size:10px;color:${accent};opacity:.6;flex-shrink:0;"></i>
                        <span style="flex:1;">${f.name}</span>
                        ${badgeHTML(f.status)}
                    </a>`;
    }).join('')}
            </div>
        `;
  }

  /* ─── Build module buttons ───────────────────────────────────────────── */
  workspaceMenu.forEach((mod, i) => {
    const accent = THEME[mod.theme] || '#002d72';
    const btn = document.createElement('button');
    btn.className = 'omni-mod-btn';
    btn.style.cssText = `
            width:100%;text-align:left;border:none;background:transparent;
            border-left:3px solid transparent;border-radius:8px;
            padding:9px 10px;margin-bottom:2px;cursor:pointer;
            display:flex;align-items:center;gap:9px;
            font-family:'Inter',sans-serif;font-size:12px;font-weight:500;color:#64748b;
        `;
    btn.innerHTML = `
            <span style="width:28px;height:28px;border-radius:7px;background:${accent}18;color:${accent};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="fas ${mod.icon || 'fa-circle'}" style="font-size:12px;"></i>
            </span>
            <span>${mod.moduleName}</span>
        `;
    btn.addEventListener('click', () => renderFeatures(i));
    btn.addEventListener('mouseenter', () => { if (i !== activeIdx) btn.style.background = '#fff'; });
    btn.addEventListener('mouseleave', () => { if (i !== activeIdx) btn.style.background = 'transparent'; });
    modList.appendChild(btn);
  });

  /* Auto-select first module */
  if (workspaceMenu.length > 0) renderFeatures(0);

  /* ─── Open / Close logic ─────────────────────────────────────────────── */
  const menuBtn = document.getElementById('omni-menu-btn');
  const closeBtn = document.getElementById('omni-close-btn');
  let isOpen = false;

  function openDrawer() {
    isOpen = true;
    drawer.style.display = 'flex';
    backdrop.style.display = 'block';
    requestAnimationFrame(() => {
      drawer.classList.add('open');
      backdrop.classList.add('open');
    });
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    isOpen = false;
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!isOpen) {
        drawer.style.display = 'none';
        backdrop.style.display = 'none';
      }
    }, 320);
  }

  drawer.style.display = 'none';
  backdrop.style.display = 'none';

  menuBtn.addEventListener('click', () => isOpen ? closeDrawer() : openDrawer());
  closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && isOpen) closeDrawer(); });

})();