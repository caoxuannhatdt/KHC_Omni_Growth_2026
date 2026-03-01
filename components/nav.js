/**
 * components/nav.js  —  ES Module
 * Omni-Growth Workspace 2026
 *
 * Premium Multi-level Nested Floating Dropdown (Glassmorphism)
 * Layout: Left ModList | Right Interactive Pane (3 Layers)
 * Colors: PNJ Blue (#002d72) & PNJ Gold (#F7A800)
 */

import { workspaceMenu } from '/config/menu-config.js';

(function () {
  if (document.getElementById('omni-nav')) return;

  /* ── Colors ────────────────────────────────────────────────────────── */
  const PNJ_BLUE = '#002d72';
  const PNJ_GOLD = '#F7A800';

  const THEME = {
    blue: PNJ_BLUE,
    indigo: '#4f46e5',
    green: '#16a34a',
    slate: '#475569',
    orange: '#ea580c',
    pink: '#db2777',
  };

  const p = window.location.pathname;
  const isHome = p === '/' || p === '/index.html' || p.endsWith('/index.html');

  /* ── CSS ───────────────────────────────────────────────────────────── */
  const css = document.createElement('style');
  css.textContent = `
        #omni-nav { box-sizing: border-box; font-family: 'Inter', sans-serif; }
        #omni-nav *, #omni-nav *::before, #omni-nav *::after { box-sizing: inherit; }
        #omni-mega {
            display: none;
            position: absolute;
            top: calc(100% + 10px);
            right: 0;
            width: 700px;
            max-width: 95vw;
            z-index: 9998;
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(226,232,240,.8);
            border-radius: 16px;
            box-shadow: 0 30px 60px -15px rgba(0,45,114,0.2);
            overflow: hidden;
            animation: nav-fade-in .2s forwards;
            min-height: 480px;
        }
        #omni-mega.open { display: flex; }
        @keyframes nav-fade-in {
            from { opacity: 0; transform: translateY(-5px); }
            to   { opacity: 1; transform: translateY(0); }
        }
        
        #omni-mod-list {
            width: 220px;
            flex-shrink: 0;
            background: #f8fafc;
            border-right: 1px solid #e2e8f0;
            padding: 16px 12px;
            overflow-y: auto;
        }
        #omni-feat-pane {
            flex: 1;
            padding: 24px;
            overflow-y: auto;
            position: relative;
        }
        
        /* Level Containers */
        .nav-layer {
            display: none;
            animation: slide-in .25s ease forwards;
        }
        .nav-layer.active { display: block; }
        @keyframes slide-in {
            from { opacity: 0; transform: translateX(10px); }
            to   { opacity: 1; transform: translateX(0); }
        }

        /* Module Pills */
        .omni-mod-pill {
            width: 100%; text-align: left; background: transparent; border: none;
            border-radius: 10px; padding: 12px; margin-bottom: 4px;
            cursor: pointer; display: flex; align-items: center; gap: 12px;
            font-size: 13px; font-weight: 600; color: #475569;
            transition: all .15s;
        }
        .omni-mod-pill:hover { background: #e2e8f0; color: ${PNJ_BLUE}; }
        .omni-mod-pill.active { background: white; color: ${PNJ_BLUE}; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
        .pill-icon { flex-shrink: 0; width: 32px; height: 32px; border-radius: 8px; background: #e2e8f0; display: flex; align-items: center; justify-content: center; transition: .15s; }
        .omni-mod-pill.active .pill-icon { background: ${PNJ_BLUE}15; color: ${PNJ_BLUE} !important; }

        /* SubGroup / Folder Cards (Level 1/2) */
        .folder-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .folder-card {
            background: white; border: 1px solid #e2e8f0; border-radius: 12px;
            padding: 16px; cursor: pointer; transition: all .2s;
            display: flex; flex-direction: column; gap: 8px;
        }
        .folder-card:hover { border-color: ${PNJ_GOLD}; box-shadow: 0 10px 15px -3px rgba(0,45,114,.08); transform: translateY(-2px); }
        .folder-icon { color: ${PNJ_BLUE}; font-size: 20px; }
        .folder-name { font-weight: 700; color: #1e293b; font-size: 14px; }
        
        /* Links (Level 3) */
        .omni-feat-link {
            display: flex; align-items: center; gap: 10px; padding: 12px 14px;
            border-radius: 10px; color: #334155; font-size: 13.5px; font-weight: 600;
            text-decoration: none; margin-bottom: 6px; border: 1px solid transparent;
            transition: all .15s;
        }
        .omni-feat-link:hover { background: ${PNJ_BLUE}0A; border-color: ${PNJ_BLUE}30; color: ${PNJ_BLUE}; }
        
        /* Breadcrumbs */
        .breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #64748b; font-weight: 600; margin-bottom: 24px; padding-bottom: 12px; border-bottom: 1px solid #e2e8f0; }
        .bc-btn { background: none; border: none; padding: 4px 8px; border-radius: 6px; color: #64748b; cursor: pointer; font-family: inherit; font-size: inherit; font-weight: inherit; transition: .15s; }
        .bc-btn:hover { background: #e2e8f0; color: ${PNJ_BLUE}; }
        .bc-current { color: ${PNJ_BLUE}; font-weight: 800; }
        
        .empty-state { text-align: center; padding: 40px 20px; }
        .empty-icon { font-size: 32px; color: #cbd5e1; margin-bottom: 16px; }
        .empty-text { color: #64748b; font-size: 14px; font-weight: 500; margin-bottom: 16px; }
        .btn-update { display: inline-block; padding: 8px 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px; color: ${PNJ_BLUE}; font-size: 13px; font-weight: 600; text-decoration: none; transition: .2s; }
        .btn-update:hover { background: #f8fafc; border-color: ${PNJ_BLUE}; }
    `;
  document.head.appendChild(css);

  /* ── HTML Framework ────────────────────────────────────────────────── */
  const nav = document.createElement('nav');
  nav.id = 'omni-nav';
  nav.style.cssText = `position: sticky; top: 0; z-index: 9999; background: rgba(255,255,255,0.98); border-bottom: 1px solid #e2e8f0;`;
  nav.innerHTML = `
    <div style="max-width:1400px;margin:0 auto;padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between;gap:16px;">
        <a href="/index.html" style="display:flex;align-items:center;gap:12px;text-decoration:none;">
            <img src="/Logo.png" alt="PNJ" style="height:36px;background:#fff;padding:4px 8px;border-radius:8px;border:1px solid #f1f5f9;box-shadow:0 2px 4px rgba(0,0,0,.05);" onerror="this.style.display='none'">
            <span style="font-size:12px;font-weight:900;letter-spacing:1px;color:${PNJ_BLUE};text-transform:uppercase;">OMNI-GROWTH</span>
        </a>

        <div id="omni-cta" style="display:${isHome ? 'flex' : 'none'};gap:24px;flex:1;justify-content:center;">
            <!-- CTA links as per previous, simplifed for space -->
            <a href="#problem" style="color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;text-decoration:none;">Problem</a>
            <a href="#agitation" style="color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;text-decoration:none;">Agitation</a>
            <a href="#solution" style="color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;text-decoration:none;">Solution</a>
            <a href="#execution" style="color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;text-decoration:none;">Thực Thi</a>
        </div>

        <div style="display:flex;align-items:center;gap:12px;position:relative;">
            <button onclick="typeof downloadAsImage==='function'&&downloadAsImage()" style="padding:8px 16px;border-radius:8px;border:none;background:${PNJ_BLUE};color:white;font-weight:700;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:8px;">
                <i class="fas fa-download"></i> Tải Về
            </button>
            <button id="omni-menu-btn" style="width:40px;height:40px;border-radius:8px;border:1px solid #cbd5e1;background:white;color:${PNJ_BLUE};cursor:pointer;display:flex;align-items:center;justify-content:center;">
                <i class="fas fa-th" style="font-size:16px;pointer-events:none;"></i>
            </button>

            <!-- Menu Dropdown -->
            <div id="omni-mega">
                <div style="position:absolute;top:0;left:0;right:0;height:4px;background:${PNJ_GOLD};"></div>
                <div id="omni-mod-list"></div>
                <div id="omni-feat-pane"></div>
            </div>
        </div>
    </div>
    `;

  document.getElementById('global-nav')?.appendChild(nav);

  const modList = document.getElementById('omni-mod-list');
  const featPane = document.getElementById('omni-feat-pane');

  /* ── 3-Level Rendering Logic ───────────────────────────────────────── */

  // State
  let currentState = { moduleIdx: 0, subGroup: null, month: null };

  function emptyStateHTML() {
    return `
            <div class="empty-state">
                <i class="fas fa-sync empty-icon fa-spin-pulse"></i>
                <div class="empty-text">Dữ liệu đang được đồng bộ</div>
                <a href="/modules/updating.html" class="btn-update">Xem thông tin hệ thống</a>
            </div>
        `;
  }

  // LEVEL 3: Links inside a Month
  function renderLevel3Links(monthData) {
    if (!monthData.links || monthData.links.length === 0) return emptyStateHTML();
    return monthData.links.map(f => `
            <a href="${f.url}" class="omni-feat-link">
                <i class="fas fa-file-alt" style="color:${PNJ_BLUE};opacity:0.7;"></i>
                ${f.name}
            </a>
        `).join('');
  }

  // LEVEL 2: Months inside a SubGroup (Monthly / 30D Lookback)
  function renderLevel2Months(subGroupData) {
    // We parse the features into Months (e.g. T01/2026)
    if (!subGroupData.features || subGroupData.features.length === 0) return emptyStateHTML();

    let months = {};
    subGroupData.features.forEach(f => {
      const m = f.name.match(/T\d{2}\/\d{4}/);
      const key = m ? m[0] : 'Khác';
      if (!months[key]) months[key] = [];
      months[key].push(f);
    });

    const keys = Object.keys(months).sort((a, b) => b.localeCompare(a)); // Descending T02 then T01

    return `<div class="folder-grid">` + keys.map(m => `
            <div class="folder-card" data-action="go-month" data-month="${m}">
                <div class="folder-icon"><i class="fas fa-calendar-alt"></i></div>
                <div class="folder-name">${m}</div>
                <div style="font-size:12px;color:#64748b;">${months[m].length} Báo cáo</div>
            </div>
        `).join('') + `</div>`;
  }

  // LEVEL 1: SubGroups inside Module
  function renderLevel1SubGroups(moduleIdx) {
    const mod = workspaceMenu[moduleIdx];
    if (!mod.subGroups || mod.subGroups.length === 0) return emptyStateHTML();

    return `<div class="folder-grid">` + mod.subGroups.map(g => `
            <div class="folder-card" data-action="go-subgroup" data-sg="${g.groupName}">
                <div class="folder-icon"><i class="fas fa-folder-open"></i></div>
                <div class="folder-name">${g.groupName}</div>
                <div style="font-size:12px;color:#64748b;">${g.features ? g.features.length + ' Mục' : '0 Mục'}</div>
            </div>
        `).join('') + `</div>`;
  }

  // Breadcrumb Generator
  function renderBreadcrumb() {
    const mod = workspaceMenu[currentState.moduleIdx];
    let bc = `<button class="bc-btn" data-action="go-home">${mod.moduleName === 'Customer Scoring Card' ? 'CSC - Scoring Card' : mod.moduleName}</button>`;

    if (currentState.subGroup) {
      bc += ` <i class="fas fa-chevron-right" style="font-size:10px;color:#cbd5e1;"></i> `;
      bc += currentState.month
        ? `<button class="bc-btn" data-action="go-subgroup" data-sg="${currentState.subGroup}">${currentState.subGroup}</button> <i class="fas fa-chevron-right" style="font-size:10px;color:#cbd5e1;"></i> <span class="bc-current">${currentState.month}</span>`
        : `<span class="bc-current">${currentState.subGroup}</span>`;
    }
    return `<div class="breadcrumb">${bc}</div>`;
  }

  // Main Render Right Pane
  function renderRightPane() {
    const mod = workspaceMenu[currentState.moduleIdx];
    let contentHtml = '';

    if (currentState.month && currentState.subGroup) {
      // L3
      const sgData = mod.subGroups.find(g => g.groupName === currentState.subGroup);
      let monthLinks = [];
      if (sgData && sgData.features) {
        monthLinks = sgData.features.filter(f => f.name.includes(currentState.month) || (currentState.month === 'Khác' && !f.name.match(/T\d{2}\/\d{4}/)));
      }
      contentHtml = renderLevel3Links({ links: monthLinks });
    }
    else if (currentState.subGroup) {
      // L2
      const sgData = mod.subGroups.find(g => g.groupName === currentState.subGroup);
      contentHtml = renderLevel2Months(sgData || {});
    }
    else {
      // L1
      contentHtml = renderLevel1SubGroups(currentState.moduleIdx);
    }

    featPane.innerHTML = `
            ${renderBreadcrumb()}
            <div class="nav-layer active">${contentHtml}</div>
        `;

    // Attach BC listeners
    featPane.querySelectorAll('[data-action="go-home"]').forEach(btn => btn.onclick = () => { currentState.subGroup = null; currentState.month = null; renderRightPane(); });
    featPane.querySelectorAll('[data-action="go-subgroup"]').forEach(btn => btn.onclick = (e) => {
      currentState.subGroup = e.currentTarget.getAttribute('data-sg');
      currentState.month = null;
      renderRightPane();
    });
    featPane.querySelectorAll('[data-action="go-month"]').forEach(btn => btn.onclick = (e) => {
      currentState.month = e.currentTarget.getAttribute('data-month');
      renderRightPane();
    });
  }

  // Build Left Modules
  workspaceMenu.forEach((mod, i) => {
    const pill = document.createElement('button');
    pill.className = 'omni-mod-pill';
    const displayName = mod.moduleName === 'Customer Scoring Card' ? 'CSC - Scoring Card' : mod.moduleName;
    pill.innerHTML = `
            <div class="pill-icon"><i class="fas ${mod.icon || 'fa-cube'}"></i></div>
            <span>${displayName}</span>
        `;
    pill.onclick = () => {
      currentState = { moduleIdx: i, subGroup: null, month: null };
      document.querySelectorAll('.omni-mod-pill').forEach((p, idx) => p.classList.toggle('active', idx === i));
      renderRightPane();
    };
    modList.appendChild(pill);
  });

  /* Init */
  if (workspaceMenu.length > 0) {
    document.querySelectorAll('.omni-mod-pill')[0].classList.add('active');
    renderRightPane();
  }

  /* ── Open / Close ──────────────────────────────────────────────────── */
  const mega = document.getElementById('omni-mega');
  const menuBtn = document.getElementById('omni-menu-btn');
  let isOpen = false;

  mega.addEventListener('click', e => e.stopPropagation());
  menuBtn.addEventListener('click', e => { e.stopPropagation(); isOpen ? close() : open(); });
  document.addEventListener('click', e => { if (isOpen) close(); });

  function open() { isOpen = true; mega.classList.add('open'); }
  function close() { isOpen = false; mega.classList.remove('open'); }

})();