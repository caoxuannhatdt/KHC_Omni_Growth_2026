/**
 * components/nav.js  —  ES Module
 * Omni-Growth Workspace 2026 · 2-Column App Drawer with SubGroup Rendering
 *
 * Drawer is HIDDEN by default. Only shows on click of the 9-dot button.
 * Feature status badges:
 *   'active'      → plain clickable link, PNJ blue hover
 *   'research'    → clickable + purple "Đang nghiên cứu" badge
 *   'coming-soon' → disabled + orange "Sắp ra mắt" badge
 * Empty subGroup / module → "Dữ liệu đang được đồng bộ" with spinner
 */

import { workspaceMenu } from '/config/menu-config.js';

(function () {

  /* ─── Guard ──────────────────────────────────────────────────────────── */
  if (document.getElementById('omni-nav')) return;

  /* ─── PNJ Brand Colors ───────────────────────────────────────────────── */
  const PNJ_NAVY = '#003468';
  const PNJ_BLUE = '#0052a5';
  const PNJ_GOLD = '#F7A800';

  /* ─── Theme palette ──────────────────────────────────────────────────── */
  const THEME = {
    blue: PNJ_BLUE,
    indigo: '#4f46e5',
    green: '#16a34a',
    slate: '#475569',
    orange: '#ea580c',
    pink: '#db2777',
  };

  /* ─── Detect homepage ────────────────────────────────────────────────── */
  const path = window.location.pathname;
  const isHome = path === '/' || path === '/index.html' || path.endsWith('/index.html');

  /* ─── Global styles ──────────────────────────────────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
        #omni-nav, #omni-nav * { box-sizing: border-box; font-family: 'Inter', 'Segoe UI', sans-serif; }
        #omni-drawer {
            transform: translateX(100%);
            transition: transform .32s cubic-bezier(.22,1,.36,1);
            display: none;
        }
        #omni-drawer.open {
            display: flex;
            transform: translateX(0);
        }
        #omni-backdrop { display:none; opacity:0; transition:opacity .25s; pointer-events:none; }
        #omni-backdrop.open { display:block; opacity:1; pointer-events:auto; }
        .omni-mod-btn { transition: background .15s, border-color .15s, color .15s; }
        .omni-feat-link { transition: background .15s, border-color .15s, color .15s; text-decoration: none; }
        .omni-feat-link:not(.disabled):hover {
            background: ${PNJ_NAVY}10 !important;
            border-color: ${PNJ_NAVY}40 !important;
            color: ${PNJ_NAVY} !important;
        }
        .omni-feat-link.disabled { pointer-events:none; opacity:0.5; cursor:default; }
        #omni-module-list::-webkit-scrollbar,
        #omni-feat-pane::-webkit-scrollbar { width:4px; }
        #omni-module-list::-webkit-scrollbar-thumb,
        #omni-feat-pane::-webkit-scrollbar-thumb { background:#e2e8f0; border-radius:2px; }
        .omni-sync-spinner { animation: omni-spin 1.4s linear infinite; display:inline-block; }
        @media (max-width:640px) {
            #omni-dl-label { display:none !important; }
            #omni-drawer { width:100% !important; }
        }
    `;
  document.head.appendChild(style);

  /* ─── Build sticky nav ─────────────────────────────────────────────── */
  const nav = document.createElement('nav');
  nav.id = 'omni-nav';
  nav.setAttribute('aria-label', 'Global navigation');
  nav.style.cssText = `
        position:sticky; top:0; z-index:9999;
        background:rgba(255,255,255,0.97);
        backdrop-filter:blur(14px);
        border-bottom:1px solid rgba(226,232,240,.85);
        box-shadow:0 1px 12px rgba(0,52,104,.07);
    `;
  nav.innerHTML = `
    <div style="max-width:1400px;margin:0 auto;padding:0 20px;height:60px;display:flex;align-items:center;justify-content:space-between;gap:16px;">

        <!-- Logo & brand -->
        <a href="/index.html" style="display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;">
            <img src="/Logo.png" alt="PNJ"
                style="height:34px;width:auto;object-fit:contain;background:#fff;padding:4px 8px;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,.1);"
                onerror="this.style.display='none'">
            <span style="font-size:12px;font-weight:900;letter-spacing:.15em;color:${PNJ_NAVY};text-transform:uppercase;">OMNI-GROWTH</span>
        </a>

        <!-- CTA Links (homepage only) -->
        <div id="omni-cta" style="display:${isHome ? 'flex' : 'none'};align-items:center;gap:18px;flex:1;justify-content:center;flex-wrap:wrap;">
            <a href="#problem"              style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#64748b;text-decoration:none;transition:color .15s" onmouseover="this.style.color='#dc2626'" onmouseout="this.style.color='#64748b'">1. Problem</a>
            <a href="#agitation"            style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#64748b;text-decoration:none;transition:color .15s" onmouseover="this.style.color='#ea580c'" onmouseout="this.style.color='#64748b'">2. Agitation</a>
            <a href="#solution"             style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#64748b;text-decoration:none;transition:color .15s" onmouseover="this.style.color='#16a34a'" onmouseout="this.style.color='#64748b'">3. Solution</a>
            <a href="#execution"            style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#64748b;text-decoration:none;transition:color .15s" onmouseover="this.style.color='${PNJ_NAVY}'" onmouseout="this.style.color='#64748b'">4. Thực Thi</a>
            <a href="#internal-empowerment" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#64748b;text-decoration:none;transition:color .15s" onmouseover="this.style.color='#0d9488'" onmouseout="this.style.color='#64748b'">5. Internal</a>
        </div>

        <!-- Right actions -->
        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
            <button id="omni-dl-btn" title="Tải về PNG"
                onclick="typeof downloadAsImage==='function'&&downloadAsImage()"
                style="display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:999px;border:none;cursor:pointer;font-family:inherit;font-size:12px;font-weight:800;color:#fff;background:linear-gradient(135deg,${PNJ_NAVY},${PNJ_BLUE});box-shadow:0 3px 10px rgba(0,52,104,.25);transition:all .2s;"
                onmouseover="this.style.background='linear-gradient(135deg,${PNJ_BLUE},#2563eb)';this.style.transform='translateY(-1px)'"
                onmouseout="this.style.background='linear-gradient(135deg,${PNJ_NAVY},${PNJ_BLUE})';this.style.transform='translateY(0)'">
                <i class="fas fa-download" style="font-size:11px;"></i>
                <span id="omni-dl-label">Tải Về</span>
            </button>

            <button id="omni-menu-btn" aria-label="Mở App Drawer" aria-expanded="false"
                style="width:38px;height:38px;border-radius:10px;border:1px solid rgba(0,52,104,.15);background:#fff;color:${PNJ_NAVY};cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;flex-shrink:0;"
                onmouseover="this.style.background='${PNJ_NAVY}';this.style.color='#fff'"
                onmouseout="this.style.background='#fff';this.style.color='${PNJ_NAVY}'">
                <i class="fas fa-th" style="font-size:15px;"></i>
            </button>
        </div>
    </div>
    `;

  /* ─── Backdrop ──────────────────────────────────────────────────────── */
  const backdrop = document.createElement('div');
  backdrop.id = 'omni-backdrop';
  backdrop.style.cssText = `position:fixed;inset:0;top:60px;z-index:9997;background:rgba(0,20,50,.5);backdrop-filter:blur(3px);`;

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
        box-shadow:-8px 0 48px rgba(0,52,104,.14);
        flex-direction:column;overflow:hidden;
    `;
  drawer.innerHTML = `
        <!-- Header -->
        <div style="padding:16px 20px;border-bottom:1px solid #f1f5f9;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;background:linear-gradient(135deg,${PNJ_NAVY},${PNJ_BLUE});">
            <div>
                <p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.15em;color:rgba(255,255,255,.6);">Workspace</p>
                <p style="font-size:15px;font-weight:900;color:#fff;margin-top:2px;letter-spacing:.02em;">OMNI-GROWTH 2026</p>
            </div>
            <button id="omni-close-btn" aria-label="Đóng"
                style="width:32px;height:32px;border-radius:8px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.1);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .18s;"
                onmouseover="this.style.background='rgba(255,82,82,.5)'"
                onmouseout="this.style.background='rgba(255,255,255,.1)'">
                <i class="fas fa-times"></i>
            </button>
        </div>

        <!-- 2-Column body -->
        <div style="display:flex;flex:1;overflow:hidden;">
            <div id="omni-module-list"
                style="width:190px;flex-shrink:0;background:#f8fafc;border-right:1px solid #e2e8f0;overflow-y:auto;padding:8px;">
            </div>
            <div id="omni-feat-pane"
                style="flex:1;overflow-y:auto;padding:16px 14px;">
            </div>
        </div>
    `;

  /* ─── Mount ─────────────────────────────────────────────────────────── */
  const mount = document.getElementById('global-nav') || (() => {
    const d = document.createElement('div'); d.id = 'global-nav';
    document.body.prepend(d); return d;
  })();
  mount.appendChild(nav);
  document.body.appendChild(backdrop);
  document.body.appendChild(drawer);

  /* ─── Badge helper ───────────────────────────────────────────────────── */
  function badgeHTML(status) {
    if (status === 'coming-soon')
      return `<span style="margin-left:6px;font-size:8px;background:#fff7ed;color:#ea580c;font-weight:800;padding:2px 6px;border-radius:4px;text-transform:uppercase;letter-spacing:.05em;white-space:nowrap;border:1px solid #fed7aa;">Sắp ra mắt</span>`;
    if (status === 'research')
      return `<span style="margin-left:6px;font-size:8px;background:#faf5ff;color:#9333ea;font-weight:800;padding:2px 6px;border-radius:4px;text-transform:uppercase;letter-spacing:.05em;white-space:nowrap;border:1px solid #e9d5ff;">Đang nghiên cứu</span>`;
    return '';
  }

  /* ─── Empty state ────────────────────────────────────────────────────── */
  function emptyHTML() {
    return `<div style="display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:10px;background:#f8fafc;border:1px dashed #e2e8f0;margin-bottom:4px;">
            <i class="fas fa-sync-alt omni-sync-spinner" style="font-size:11px;color:#94a3b8;"></i>
            <span style="font-size:12px;color:#94a3b8;font-style:italic;">Dữ liệu đang được đồng bộ</span>
        </div>`;
  }

  /* ─── Feature link HTML ──────────────────────────────────────────────── */
  function featureLinkHTML(f, accent) {
    const isDisabled = f.status === 'coming-soon';
    return `
        <a href="${isDisabled ? '#' : f.url}"
            class="omni-feat-link${isDisabled ? ' disabled' : ''}"
            style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;border:1px solid #f1f5f9;background:#fff;color:#334155;font-size:13px;font-weight:600;margin-bottom:4px;box-shadow:0 1px 3px rgba(0,0,0,.03);">
            <i class="fas fa-chevron-right" style="font-size:10px;color:${accent};opacity:.6;flex-shrink:0;"></i>
            <span style="flex:1;">${f.name}</span>
            ${badgeHTML(f.status)}
        </a>`;
  }

  /* ─── Render feature pane ────────────────────────────────────────────── */
  const featPane = document.getElementById('omni-feat-pane');
  const modList = document.getElementById('omni-module-list');
  let activeIdx = -1;

  function renderFeatures(idx) {
    activeIdx = idx;
    const mod = workspaceMenu[idx];
    const accent = THEME[mod.theme] || PNJ_NAVY;

    /* Update module button states */
    modList.querySelectorAll('.omni-mod-btn').forEach((btn, i) => {
      const a = THEME[workspaceMenu[i].theme] || PNJ_NAVY;
      const on = i === idx;
      btn.style.background = on ? '#fff' : 'transparent';
      btn.style.borderLeft = on ? `3px solid ${a}` : '3px solid transparent';
      btn.style.color = on ? a : '#64748b';
      btn.style.fontWeight = on ? '700' : '500';
    });

    const hasSubGroups = mod.subGroups && mod.subGroups.length > 0;
    const flatFeatures = mod.features;

    /* Completely empty module */
    if (!hasSubGroups && (!flatFeatures || flatFeatures.length === 0)) {
      featPane.innerHTML = `
                <p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:${accent};margin-bottom:14px;">${mod.moduleName}</p>
                ${emptyHTML()}`;
      return;
    }

    let html = `<p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:${accent};margin-bottom:14px;">${mod.moduleName}</p>`;

    if (hasSubGroups) {
      mod.subGroups.forEach(group => {
        html += `<p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#94a3b8;margin:12px 0 6px;padding-bottom:4px;border-bottom:1px solid #f1f5f9;">${group.groupName}</p>`;
        if (!group.features || group.features.length === 0) {
          html += emptyHTML();
        } else {
          group.features.forEach(f => { html += featureLinkHTML(f, accent); });
        }
      });
    } else {
      flatFeatures.forEach(f => { html += featureLinkHTML(f, accent); });
    }

    featPane.innerHTML = html;
  }

  /* ─── Build module buttons ───────────────────────────────────────────── */
  workspaceMenu.forEach((mod, i) => {
    const accent = THEME[mod.theme] || PNJ_NAVY;
    const btn = document.createElement('button');
    btn.className = 'omni-mod-btn';
    btn.style.cssText = `
            width:100%;text-align:left;border:none;background:transparent;
            border-left:3px solid transparent;border-radius:8px;
            padding:9px 10px;margin-bottom:2px;cursor:pointer;
            display:flex;align-items:center;gap:9px;
            font-family:'Inter','Segoe UI',sans-serif;font-size:12px;font-weight:500;color:#64748b;
        `;
    btn.innerHTML = `
            <span style="width:28px;height:28px;border-radius:7px;background:${accent}18;color:${accent};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="fas ${mod.icon || 'fa-circle'}" style="font-size:12px;"></i>
            </span>
            <span style="line-height:1.2;">${mod.moduleName}</span>
        `;
    btn.addEventListener('click', () => renderFeatures(i));
    btn.addEventListener('mouseenter', () => { if (i !== activeIdx) btn.style.background = '#fff'; });
    btn.addEventListener('mouseleave', () => { if (i !== activeIdx) btn.style.background = 'transparent'; });
    modList.appendChild(btn);
  });

  /* Auto-select first module */
  if (workspaceMenu.length > 0) renderFeatures(0);

  /* ─── Open / Close ───────────────────────────────────────────────────── */
  const menuBtn = document.getElementById('omni-menu-btn');
  const closeBtn = document.getElementById('omni-close-btn');
  let isOpen = false;

  function openDrawer() {
    isOpen = true;
    backdrop.classList.add('open');
    // Force reflow then add open to trigger CSS transition
    drawer.style.display = 'flex';
    requestAnimationFrame(() => drawer.classList.add('open'));
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    isOpen = false;
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => { if (!isOpen) drawer.style.display = 'none'; }, 340);
  }

  menuBtn.addEventListener('click', () => isOpen ? closeDrawer() : openDrawer());
  closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && isOpen) closeDrawer(); });

})();