/**
 * components/nav.js
 * Data-driven Mega Menu — Omni-Growth Workspace
 * 2-Column App Drawer: Left = Module list | Right = Features on hover/click
 */

(async function () {

  /* ─── 0. Guard: prevent double-injection ─────────────────────────────── */
  if (document.getElementById('omni-nav')) return;

  /* ─── 1. Load menu data ──────────────────────────────────────────────── */
  let workspaceMenu = [];
  try {
    const base = window.location.origin;
    const mod = await import(`${base}/config/menu-config.js`);
    workspaceMenu = mod.workspaceMenu || [];
  } catch (e) {
    console.warn('[nav.js] Could not load menu-config.js:', e);
  }

  /* ─── 2. Detect if on homepage ───────────────────────────────────────── */
  const path = window.location.pathname;
  const isHome = path === '/' || path === '/index.html' || path.endsWith('/index.html');

  /* ─── 3. Build nav HTML ──────────────────────────────────────────────── */
  const ctaStyle = 'color:#64748b; text-decoration:none; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; transition:color 0.15s; white-space:nowrap;';
  const navEl = document.createElement('nav');
  navEl.id = 'omni-nav';
  navEl.setAttribute('aria-label', 'Global Navigation');
  navEl.style.cssText = `
        position: sticky; top: 0; z-index: 9999;
        background: rgba(255,255,255,0.97);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(226,232,240,0.8);
        box-shadow: 0 1px 12px rgba(0,45,114,0.07);
        font-family: 'Inter', sans-serif;
    `;

  navEl.innerHTML = `
        <div style="max-width:1400px; margin:0 auto; padding:0 20px; height:60px; display:flex; align-items:center; justify-content:space-between; gap:16px;">

            <!-- LEFT: Logo + Brand -->
            <a href="/index.html" style="display:flex; align-items:center; gap:10px; text-decoration:none; flex-shrink:0;">
                <img src="/Logo.png" alt="PNJ" id="omni-logo"
                    style="height:36px; width:auto; object-fit:contain; background:#fff; padding:4px 6px; border-radius:8px; box-shadow:0 1px 4px rgba(0,0,0,0.1);"
                    onerror="this.style.display='none'">
                <span style="font-size:13px; font-weight:900; letter-spacing:0.12em; color:#002d72; text-transform:uppercase;">OMNI-GROWTH</span>
            </a>

            <!-- CENTER: CTA Homepage Links (hidden on non-home pages) -->
            <div id="omni-cta-links" style="display:${isHome ? 'flex' : 'none'}; align-items:center; gap:20px; flex:1; justify-content:center; flex-wrap:wrap;">
                <a href="#problem"             style="${ctaStyle}" onmouseover="this.style.color='#dc2626'" onmouseout="this.style.color='#64748b'">1. Problem</a>
                <a href="#agitation"           style="${ctaStyle}" onmouseover="this.style.color='#ea580c'" onmouseout="this.style.color='#64748b'">2. Agitation</a>
                <a href="#solution"            style="${ctaStyle}" onmouseover="this.style.color='#16a34a'" onmouseout="this.style.color='#64748b'">3. Solution</a>
                <a href="#execution"           style="${ctaStyle}" onmouseover="this.style.color='#002d72'" onmouseout="this.style.color='#64748b'">4. Thực Thi</a>
                <a href="#internal-empowerment" style="${ctaStyle}" onmouseover="this.style.color='#0d9488'" onmouseout="this.style.color='#64748b'">5. Internal</a>
            </div>

            <!-- RIGHT: Download Button + Mega Menu Trigger -->
            <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">

                <!-- Download Button -->
                <button id="omni-download-btn"
                    onclick="typeof downloadAsImage === 'function' && downloadAsImage()"
                    title="Tải về dạng ảnh PNG"
                    style="display:inline-flex; align-items:center; gap:6px; padding:7px 14px; border-radius:999px; border:none; cursor:pointer; font-family:inherit; font-size:12px; font-weight:700; color:#fff; background:linear-gradient(135deg,#002d72,#1e40af); box-shadow:0 3px 10px rgba(0,45,114,0.25); transition:all 0.2s;">
                    <i class="fas fa-download" style="font-size:11px;"></i>
                    <span class="omni-dl-label">Tải Về</span>
                </button>

                <!-- Mega Menu Toggle -->
                <button id="omni-menu-btn"
                    aria-label="Open App Drawer"
                    aria-expanded="false"
                    style="width:38px; height:38px; border-radius:10px; border:1px solid rgba(0,45,114,0.15); background:#fff; color:#002d72; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.2s; flex-shrink:0;">
                    <i class="fas fa-th" style="font-size:15px;"></i>
                </button>
            </div>
        </div>

        <!-- ═══ MEGA PANEL (2-Column App Drawer) ═══════════════════════════ -->
        <div id="omni-mega-panel"
            role="dialog" aria-modal="true" aria-label="App Drawer"
            style="display:none; position:fixed; top:60px; left:0; right:0; bottom:0; z-index:9998;">

            <!-- Backdrop -->
            <div id="omni-backdrop" style="position:absolute; inset:0; background:rgba(2,6,23,0.45); backdrop-filter:blur(4px);"></div>

            <!-- Panel container -->
            <div id="omni-drawer"
                style="position:absolute; top:0; right:0; width:560px; max-width:95vw; height:100%; background:#fff; box-shadow:-8px 0 40px rgba(0,45,114,0.15); display:flex; flex-direction:column; overflow:hidden; border-left:1px solid #e2e8f0;">

                <!-- Panel header -->
                <div style="padding:16px 20px; border-bottom:1px solid #f1f5f9; display:flex; align-items:center; justify-content:space-between; flex-shrink:0;">
                    <div>
                        <p style="font-size:10px; font-weight:800; text-transform:uppercase; letter-spacing:0.12em; color:#94a3b8;">Workspace</p>
                        <p style="font-size:15px; font-weight:900; color:#002d72; margin-top:1px;">OMNI-GROWTH 2026</p>
                    </div>
                    <button id="omni-close-btn" aria-label="Close"
                        style="width:32px; height:32px; border-radius:8px; border:1px solid #e2e8f0; background:#f8fafc; color:#64748b; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:14px;">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <!-- 2-Column body: Left = Modules | Right = Features -->
                <div style="display:flex; flex:1; overflow:hidden;">

                    <!-- LEFT COLUMN: Module List -->
                    <div id="omni-module-list"
                        style="width:190px; flex-shrink:0; background:#f8fafc; border-right:1px solid #e2e8f0; overflow-y:auto; padding:8px;">
                    </div>

                    <!-- RIGHT COLUMN: Features -->
                    <div id="omni-feature-pane"
                        style="flex:1; overflow-y:auto; padding:16px;">
                        <div id="omni-feature-empty" style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:#cbd5e1; text-align:center;">
                            <i class="fas fa-hand-pointer" style="font-size:28px; margin-bottom:10px;"></i>
                            <p style="font-size:12px; font-weight:600;">Chọn một module<br>để xem chức năng</p>
                        </div>
                        <div id="omni-feature-content" style="display:none;"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

  /* ─── 4. Mount nav into #global-nav or prepend to body ──────────────── */
  const mount = document.getElementById('global-nav') || (() => {
    const wrapper = document.createElement('div');
    wrapper.id = 'global-nav';
    document.body.prepend(wrapper);
    return wrapper;
  })();
  mount.appendChild(navEl);

  /* ─── 5. Populate Left Column with modules ─────────────────────────── */
  const moduleList = document.getElementById('omni-module-list');
  const featurePane = document.getElementById('omni-feature-content');
  const featureEmpty = document.getElementById('omni-feature-empty');

  const MODULE_ACCENT = ['#4f46e5', '#0ea5e9', '#f59e0b', '#10b981', '#ec4899'];
  const MODULE_ICONS = { briefcase: 'briefcase', users: 'users', plane: 'paper-plane', database: 'database', star: 'star' };

  let activeIdx = -1;

  function selectModule(idx) {
    activeIdx = idx;
    const mod = workspaceMenu[idx];

    /* Update left-column active state */
    moduleList.querySelectorAll('.omni-mod-item').forEach((el, i) => {
      const isActive = i === idx;
      el.style.background = isActive ? '#fff' : 'transparent';
      el.style.borderLeft = isActive ? `3px solid ${MODULE_ACCENT[i % MODULE_ACCENT.length]}` : '3px solid transparent';
      el.style.color = isActive ? '#002d72' : '#64748b';
      el.style.fontWeight = isActive ? '700' : '500';
    });

    /* Render right-column features */
    if (!mod.features || mod.features.length === 0) {
      featureEmpty.style.display = 'flex';
      featurePane.style.display = 'none'; // Fixed: Changed featureContent to featurePane
      featureEmpty.innerHTML = `
                <i class="fas fa-hard-hat" style="font-size:28px; margin-bottom:10px; color:#e2e8f0;"></i>
                <p style="font-size:12px; font-weight:600; color:#cbd5e1;">Module này đang<br>được phát triển</p>`;
      return;
    }

    featureEmpty.style.display = 'none';
    featurePane.style.display = 'block';

    const accent = MODULE_ACCENT[idx % MODULE_ACCENT.length];
    featurePane.innerHTML = `
            <p style="font-size:10px; font-weight:800; text-transform:uppercase; letter-spacing:0.1em; color:${accent}; margin-bottom:12px;">${mod.name}</p>
            <div style="display:flex; flex-direction:column; gap:6px;">
                ${mod.features.map(f => `
                    <a href="${f.url}" style="
                        display:flex; align-items:center; gap:10px;
                        padding:10px 12px; border-radius:10px;
                        border:1px solid #f1f5f9;
                        background:#fff; text-decoration:none;
                        color:#334155; font-size:13px; font-weight:600;
                        transition:all 0.15s;
                        box-shadow:0 1px 3px rgba(0,0,0,0.04);"
                        onmouseover="this.style.background='${accent}10'; this.style.borderColor='${accent}40'; this.style.color='${accent}'"
                        onmouseout="this.style.background='#fff'; this.style.borderColor='#f1f5f9'; this.style.color='#334155'">
                        <span style="width:28px; height:28px; border-radius:8px; background:${accent}15; color:${accent}; display:flex; align-items:center; justify-content:center; font-size:13px; flex-shrink:0;">
                            <i class="fas fa-file-chart-line"></i>
                        </span>
                        <span>${f.name}</span>
                        <i class="fas fa-chevron-right" style="margin-left:auto; font-size:10px; color:#cbd5e1;"></i>
                    </a>
                `).join('')}
            </div>`;
  }

  /* Build module buttons */
  workspaceMenu.forEach((mod, i) => {
    const btn = document.createElement('button');
    btn.className = 'omni-mod-item';
    btn.setAttribute('data-index', i);
    const accent = MODULE_ACCENT[i % MODULE_ACCENT.length];
    const iconName = MODULE_ICONS[mod.icon] || mod.icon || 'circle';
    btn.style.cssText = `
            width:100%; text-align:left; border:none; background:transparent;
            border-left:3px solid transparent; border-radius:8px;
            padding:10px 12px; margin-bottom:2px; cursor:pointer;
            display:flex; align-items:center; gap:10px;
            font-family:'Inter',sans-serif; font-size:13px; font-weight:500;
            color:#64748b; transition:all 0.15s;`;
    btn.innerHTML = `
            <span style="width:30px; height:30px; border-radius:8px; background:${accent}15; color:${accent}; display:flex; align-items:center; justify-content:center; font-size:13px; flex-shrink:0;">
                <i class="fas fa-${iconName}"></i>
            </span>
            <span style="line-height:1.2;">${mod.name}</span>`;

    btn.addEventListener('click', () => selectModule(i));
    btn.addEventListener('mouseenter', () => {
      if (i !== activeIdx) btn.style.background = '#fff';
    });
    btn.addEventListener('mouseleave', () => {
      if (i !== activeIdx) btn.style.background = 'transparent';
    });
    moduleList.appendChild(btn);
  });

  /* Auto-select first module if available */
  if (workspaceMenu.length > 0) {
    setTimeout(() => selectModule(0), 0);
  }

  /* ─── 6. Mega Panel open / close logic ──────────────────────────────── */
  const menuBtn = document.getElementById('omni-menu-btn');
  const closeBtn = document.getElementById('omni-close-btn');
  const backdrop = document.getElementById('omni-backdrop');
  const panel = document.getElementById('omni-mega-panel');
  const drawer = document.getElementById('omni-drawer');
  const featureContent = document.getElementById('omni-feature-content');

  function openPanel() {
    panel.style.display = 'block';
    drawer.style.transform = 'translateX(100%)';
    drawer.style.transition = 'transform 0.28s cubic-bezier(0.22,1,0.36,1)';
    requestAnimationFrame(() => {
      drawer.style.transform = 'translateX(0)';
    });
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closePanel() {
    drawer.style.transform = 'translateX(100%)';
    setTimeout(() => {
      panel.style.display = 'none';
      document.body.style.overflow = '';
    }, 280);
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  menuBtn.addEventListener('click', () => {
    panel.style.display === 'none' ? openPanel() : closePanel();
  });
  closeBtn.addEventListener('click', closePanel);
  backdrop.addEventListener('click', closePanel);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && panel.style.display !== 'none') closePanel();
  });

  /* ─── 7. Download button hover ─────────────────────────────────────── */
  const dlBtn = document.getElementById('omni-download-btn');
  dlBtn.addEventListener('mouseenter', () => {
    dlBtn.style.background = 'linear-gradient(135deg,#1e40af,#2563eb)';
    dlBtn.style.transform = 'translateY(-1px)';
  });
  dlBtn.addEventListener('mouseleave', () => {
    dlBtn.style.background = 'linear-gradient(135deg,#002d72,#1e40af)';
    dlBtn.style.transform = 'translateY(0)';
  });

  /* ─── 8. Inject nav-only styles ─────────────────────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
        #omni-mega-panel { animation: omni-fadeIn 0.2s ease; }
        @keyframes omni-fadeIn { from { opacity:0; } to { opacity:1; } }
        #omni-module-list::-webkit-scrollbar,
        #omni-feature-pane::-webkit-scrollbar { width: 4px; }
        #omni-module-list::-webkit-scrollbar-thumb,
        #omni-feature-pane::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 2px; }
        @keyframes spin { to { transform:rotate(360deg); } }
        @media (max-width:640px) {
            .omni-dl-label { display:none !important; }
            #omni-drawer { width: 100% !important; max-width:100% !important; }
        }
    `;
  document.head.appendChild(style);

})();