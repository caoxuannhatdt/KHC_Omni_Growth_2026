/**
 * components/nav.js  —  ES Module
 * Omni-Growth Workspace · 2-Column App Drawer Mega Menu
 *
 * Import workspaceMenu from /config/menu-config.js.
 * Self-renders into any element with id="global-nav" (created by layout.js).
 */

import { workspaceMenu } from '/config/menu-config.js';

(function () {
  /* ─── Guard ──────────────────────────────────────────────────────────── */
  if (document.getElementById('omni-nav')) return;

  /* ─── Detect homepage ────────────────────────────────────────────────── */
  const path = window.location.pathname;
  const isHome = path === '/' || path === '/index.html' || path.endsWith('/index.html');

  /* ─── Inject global styles ──────────────────────────────────────────── */
  const styleTag = document.createElement('style');
  styleTag.textContent = `
        #omni-nav * { box-sizing: border-box; }
        #omni-nav { font-family: 'Inter', sans-serif; }
        #omni-cta a { transition: color .15s; }
        #omni-drawer-panel {
            transform: translateX(100%);
            transition: transform .3s cubic-bezier(.22,1,.36,1);
        }
        #omni-drawer-panel.open { transform: translateX(0); }
        .omni-mod-btn { transition: background .15s, border-color .15s, color .15s; }
        .omni-mod-btn.active { font-weight: 700; }
        .omni-feat-link { transition: background .15s, color .15s; }
        #omni-backdrop {
            opacity: 0;
            transition: opacity .25s;
            pointer-events: none;
        }
        #omni-backdrop.open {
            opacity: 1;
            pointer-events: auto;
        }
        @media (max-width: 640px) {
            #omni-dl-label { display: none !important; }
            #omni-drawer-panel { width: 100% !important; }
        }
    `;
  document.head.appendChild(styleTag);

  /* ─── Build Nav Element ─────────────────────────────────────────────── */
  const nav = document.createElement('nav');
  nav.id = 'omni-nav';
  nav.setAttribute('aria-label', 'Global Navigation');
  nav.style.cssText = `
        position: sticky; top: 0; z-index: 9999;
        background: rgba(255,255,255,0.97);
        backdrop-filter: blur(14px);
        border-bottom: 1px solid rgba(226,232,240,.8);
        box-shadow: 0 1px 12px rgba(0,45,114,.07);
    `;

  nav.innerHTML = `
    <div style="max-width:1400px;margin:0 auto;padding:0 20px;height:60px;display:flex;align-items:center;justify-content:space-between;gap:16px;">

        <!-- Logo -->
        <a href="/index.html" style="display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;">
            <img src="/Logo.png" alt="PNJ" id="omni-logo"
                style="height:34px;width:auto;object-fit:contain;background:#fff;padding:4px 8px;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,.1);"
                onerror="this.style.display='none'">
            <span style="font-size:12px;font-weight:900;letter-spacing:.15em;color:#002d72;text-transform:uppercase;">OMNI-GROWTH</span>
        </a>

        <!-- CTA Links (homepage only) -->
        <div id="omni-cta" style="display:${isHome ? 'flex' : 'none'};align-items:center;gap:18px;flex:1;justify-content:center;flex-wrap:wrap;">
            <a href="#problem"              style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#64748b;text-decoration:none;" onmouseover="this.style.color='#dc2626'" onmouseout="this.style.color='#64748b'">1. Problem</a>
            <a href="#agitation"            style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#64748b;text-decoration:none;" onmouseover="this.style.color='#ea580c'" onmouseout="this.style.color='#64748b'">2. Agitation</a>
            <a href="#solution"             style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#64748b;text-decoration:none;" onmouseover="this.style.color='#16a34a'" onmouseout="this.style.color='#64748b'">3. Solution</a>
            <a href="#execution"            style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#64748b;text-decoration:none;" onmouseover="this.style.color='#002d72'" onmouseout="this.style.color='#64748b'">4. Thực Thi</a>
            <a href="#internal-empowerment" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#64748b;text-decoration:none;" onmouseover="this.style.color='#0d9488'" onmouseout="this.style.color='#64748b'">5. Internal</a>
        </div>

        <!-- Right Actions -->
        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">

            <!-- Download -->
            <button id="omni-dl-btn"
                onclick="typeof downloadAsImage === 'function' && downloadAsImage()"
                style="display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:999px;border:none;cursor:pointer;font-family:inherit;font-size:12px;font-weight:800;color:#fff;background:linear-gradient(135deg,#002d72,#1e40af);box-shadow:0 3px 10px rgba(0,45,114,.25);transition:all .2s;"
                onmouseover="this.style.background='linear-gradient(135deg,#1e40af,#2563eb)';this.style.transform='translateY(-1px)'"
                onmouseout="this.style.background='linear-gradient(135deg,#002d72,#1e40af)';this.style.transform='translateY(0)'">
                <i class="fas fa-download" style="font-size:11px;"></i>
                <span id="omni-dl-label">Tải Về</span>
            </button>

            <!-- App Drawer Toggle -->
            <button id="omni-menu-toggle"
                aria-label="Mở App Drawer"
                aria-expanded="false"
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
  backdrop.style.cssText = `
        position: fixed; inset: 0; top: 60px; z-index: 9997;
        background: rgba(2,6,23,.5); backdrop-filter: blur(3px);
    `;

  /* ─── Drawer Panel ──────────────────────────────────────────────────── */
  const drawerPanel = document.createElement('div');
  drawerPanel.id = 'omni-drawer-panel';
  drawerPanel.setAttribute('role', 'dialog');
  drawerPanel.setAttribute('aria-modal', 'true');
  drawerPanel.setAttribute('aria-label', 'App Drawer');
  drawerPanel.style.cssText = `
        position: fixed; top: 60px; right: 0; bottom: 0;
        width: 560px; max-width: 95vw; z-index: 9998;
        background: #fff; border-left: 1px solid #e2e8f0;
        box-shadow: -8px 0 40px rgba(0,45,114,.12);
        display: flex; flex-direction: column; overflow: hidden;
    `;

  drawerPanel.innerHTML = `
        <!-- Drawer Header -->
        <div style="padding:16px 20px;border-bottom:1px solid #f1f5f9;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
            <div>
                <p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.15em;color:#94a3b8;">Workspace</p>
                <p style="font-size:15px;font-weight:900;color:#002d72;margin-top:1px;">OMNI-GROWTH 2026</p>
            </div>
            <button id="omni-close-btn" aria-label="Đóng"
                style="width:32px;height:32px;border-radius:8px;border:1px solid #e2e8f0;background:#f8fafc;color:#64748b;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;"
                onmouseover="this.style.background='#fee2e2';this.style.color='#dc2626'"
                onmouseout="this.style.background='#f8fafc';this.style.color='#64748b'">
                <i class="fas fa-times"></i>
            </button>
        </div>

        <!-- 2-Column Body -->
        <div style="display:flex;flex:1;overflow:hidden;">

            <!-- LEFT COLUMN: Module List -->
            <div id="omni-module-list"
                style="width:185px;flex-shrink:0;background:#f8fafc;border-right:1px solid #e2e8f0;overflow-y:auto;padding:8px;">
            </div>

            <!-- RIGHT COLUMN: Features -->
            <div id="omni-feature-pane"
                style="flex:1;overflow-y:auto;padding:16px 14px;">
            </div>
        </div>
    `;

  /* ─── Mount all elements ─────────────────────────────────────────────── */
  const mount = document.getElementById('global-nav') || (() => {
    const d = document.createElement('div');
    d.id = 'global-nav';
    document.body.prepend(d);
    return d;
  })();
  mount.appendChild(nav);
  document.body.appendChild(backdrop);
  document.body.appendChild(drawerPanel);

  /* ─── Module & Feature Renderers ─────────────────────────────────────── */
  const moduleList = document.getElementById('omni-module-list');
  const featurePane = document.getElementById('omni-feature-pane');
  let activeIndex = -1;

  function renderFeatures(idx) {
    activeIndex = idx;
    const mod = workspaceMenu[idx];
    const accent = mod.accent || '#002d72';

    /* Highlight active module button */
    moduleList.querySelectorAll('.omni-mod-btn').forEach((btn, i) => {
      const isActive = i === idx;
      const a = workspaceMenu[i].accent || '#002d72';
      btn.style.background = isActive ? '#fff' : 'transparent';
      btn.style.borderLeft = isActive ? `3px solid ${a}` : '3px solid transparent';
      btn.style.color = isActive ? a : '#64748b';
      btn.style.fontWeight = isActive ? '700' : '500';
      btn.classList.toggle('active', isActive);
    });

    /* Render right-column */
    if (!mod.features || mod.features.length === 0) {
      featurePane.innerHTML = `
                <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#cbd5e1;text-align:center;gap:10px;padding:20px;">
                    <i class="fas fa-hard-hat" style="font-size:32px;"></i>
                    <p style="font-size:13px;font-weight:600;">Module đang được<br>phát triển</p>
                </div>`;
      return;
    }

    featurePane.innerHTML = `
            <p style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:${accent};margin-bottom:10px;">${mod.moduleName}</p>
            <p style="font-size:11px;color:#94a3b8;margin-bottom:14px;">${mod.description || ''}</p>
            <div style="display:flex;flex-direction:column;gap:6px;">
                ${mod.features.map(f => `
                    <a href="${f.url}" class="omni-feat-link"
                        style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;border:1px solid #f1f5f9;background:#fff;text-decoration:none;color:#334155;font-size:13px;font-weight:600;box-shadow:0 1px 3px rgba(0,0,0,.03);"
                        onmouseover="this.style.background='${accent}10';this.style.borderColor='${accent}40';this.style.color='${accent}'"
                        onmouseout="this.style.background='#fff';this.style.borderColor='#f1f5f9';this.style.color='#334155'">
                        <span style="width:30px;height:30px;border-radius:8px;background:${accent}18;color:${accent};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                            <i class="fas ${f.icon || 'fa-file'}" style="font-size:12px;"></i>
                        </span>
                        <span style="flex:1">
                            <span style="display:block;">${f.name}</span>
                            ${f.description ? `<span style="display:block;font-size:10px;font-weight:400;color:#94a3b8;margin-top:1px;">${f.description}</span>` : ''}
                        </span>
                        <i class="fas fa-chevron-right" style="font-size:10px;color:#cbd5e1;flex-shrink:0;"></i>
                    </a>
                `).join('')}
            </div>
        `;
  }

  /* Build module button list */
  workspaceMenu.forEach((mod, i) => {
    const btn = document.createElement('button');
    btn.className = 'omni-mod-btn';
    const accent = mod.accent || '#002d72';
    btn.style.cssText = `
            width:100%; text-align:left; border:none; background:transparent;
            border-left:3px solid transparent; border-radius:8px;
            padding:9px 10px; margin-bottom:2px; cursor:pointer;
            display:flex; align-items:center; gap:9px;
            font-family:'Inter',sans-serif; font-size:12px; font-weight:500;
            color:#64748b;
        `;
    btn.innerHTML = `
            <span style="width:28px;height:28px;border-radius:7px;background:${accent}18;color:${accent};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="fas ${mod.icon || 'fa-circle'}" style="font-size:12px;"></i>
            </span>
            <span>${mod.moduleName}</span>
        `;
    btn.addEventListener('click', () => renderFeatures(i));
    btn.addEventListener('mouseenter', () => { if (i !== activeIndex) btn.style.background = '#fff'; });
    btn.addEventListener('mouseleave', () => { if (i !== activeIndex) btn.style.background = 'transparent'; });
    moduleList.appendChild(btn);
  });

  /* Auto-select first module */
  if (workspaceMenu.length > 0) renderFeatures(0);

  /* ─── Open / Close Panel ────────────────────────────────────────────── */
  const toggleBtn = document.getElementById('omni-menu-toggle');
  const closeBtn2 = document.getElementById('omni-close-btn');
  let isOpen = false;

  function openDrawer() {
    isOpen = true;
    drawerPanel.style.display = 'flex';
    backdrop.style.display = 'block';
    /* Trigger CSS transitions */
    requestAnimationFrame(() => {
      drawerPanel.classList.add('open');
      backdrop.classList.add('open');
    });
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    isOpen = false;
    drawerPanel.classList.remove('open');
    backdrop.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    /* Hide after transition */
    setTimeout(() => {
      if (!isOpen) {
        drawerPanel.style.display = 'none';
        backdrop.style.display = 'none';
      }
    }, 320);
  }

  /* Initially hidden */
  drawerPanel.style.display = 'none';
  backdrop.style.display = 'none';

  toggleBtn.addEventListener('click', () => isOpen ? closeDrawer() : openDrawer());
  closeBtn2.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen) closeDrawer();
  });

})();