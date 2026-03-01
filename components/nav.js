/**
 * components/nav.js
 * Data-driven Mega Menu — Omni-Growth Workspace
 * Reads from /config/menu-config.js via dynamic import
 */

(async function () {

    /* ─── 1. Load menu data ─────────────────────────────────────────── */
    let workspaceMenu = [];
    try {
        // Resolve the root-relative path from any depth
        const base = window.location.origin;
        const mod = await import(`${base}/config/menu-config.js`);
        workspaceMenu = mod.workspaceMenu || [];
    } catch (e) {
        console.warn('[nav.js] Could not load menu-config.js:', e);
    }

    /* ─── 2. Module icon / colour map ──────────────────────────────── */
    const moduleStyles = {
        'Clienteling': { icon: 'fa-briefcase', accent: '#002d72', bg: '#EFF6FF' },
        'CJM360': { icon: 'fa-users', accent: '#0f766e', bg: '#F0FDFA' },
        'UAV 2026': { icon: 'fa-plane', accent: '#7c3aed', bg: '#F5F3FF' },
        'CIS': { icon: 'fa-database', accent: '#b45309', bg: '#FFFBEB' },
        "What's New": { icon: 'fa-star', accent: '#dc2626', bg: '#FFF1F2' },
    };

    /* ─── 3. Build Mega Panel HTML ──────────────────────────────────── */
    const moduleListHTML = workspaceMenu.map((mod, idx) => {
        const style = moduleStyles[mod.name] || { icon: 'fa-circle', accent: '#64748b', bg: '#F8FAFC' };
        return `
      <button
        class="mega-module-btn w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 hover:shadow-sm"
        data-idx="${idx}"
        style="--accent:${style.accent}; --bg:${style.bg};"
      >
        <span class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style="background:${style.bg}; color:${style.accent};">
          <i class="fas ${style.icon} text-sm"></i>
        </span>
        <span class="text-sm font-bold" style="color:${style.accent};">${mod.name}</span>
        ${mod.features.length ? `<span class="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full" style="background:${style.bg};color:${style.accent};">${mod.features.length}</span>` : ''}
      </button>`;
    }).join('');

    const megaPanelHTML = `
    <div id="mega-panel"
         style="display:none; position:fixed; top:64px; left:0; right:0; z-index:9999;
                background:rgba(0,0,0,0.35); backdrop-filter:blur(4px); min-height:100vh;"
         role="dialog" aria-modal="true">

      <!-- The floating card -->
      <div id="mega-card"
           style="position:absolute; top:8px; right:16px; width:480px; max-width:calc(100vw - 32px);
                  background:#fff; border-radius:20px;
                  box-shadow: 0 24px 64px rgba(0,45,114,0.18);
                  overflow:hidden; display:flex; flex-direction:column;">

        <!-- Card header -->
        <div style="padding:16px 20px 12px; border-bottom:1px solid #f1f5f9; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <p style="font-size:10px; font-weight:800; color:#94a3b8; text-transform:uppercase; letter-spacing:.12em;">WORKSPACE</p>
            <h2 style="font-size:15px; font-weight:800; color:#002d72; margin:0;">Omni-Growth Modules</h2>
          </div>
          <button id="mega-close-btn"
                  style="width:32px;height:32px;border-radius:50%;background:#f8fafc;border:1px solid #e2e8f0;
                         display:flex;align-items:center;justify-content:center;cursor:pointer;color:#64748b;
                         font-size:16px;transition:background 0.2s;"
                  aria-label="Close">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <!-- Two-column body -->
        <div style="display:flex; height:320px; overflow:hidden;">

          <!-- Left: Module list -->
          <div style="width:200px; flex-shrink:0; border-right:1px solid #f1f5f9; padding:10px 8px; overflow-y:auto; display:flex; flex-direction:column; gap:2px;">
            ${moduleListHTML}
          </div>

          <!-- Right: Features panel -->
          <div id="mega-features-panel" style="flex:1; padding:16px; overflow-y:auto;">
            <div id="mega-empty-state" style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#cbd5e1;gap:8px;">
              <i class="fas fa-th-large" style="font-size:32px;"></i>
              <span style="font-size:12px; font-weight:600;">Chọn một module để xem</span>
            </div>
            <div id="mega-features-list" style="display:none;"></div>
          </div>

        </div>

        <!-- Card footer -->
        <div style="padding:10px 20px; border-top:1px solid #f1f5f9; background:#fafafa; font-size:10px; color:#94a3b8; text-align:center;">
          PNJ OMNI-GROWTH WORKSPACE · 2026
        </div>
      </div>
    </div>`;

    /* ─── 4. Build full nav HTML ────────────────────────────────────── */
    const navHTML = `
<style>
  .mega-module-btn:hover { background: var(--bg, #EFF6FF); }
  .mega-module-btn.active { background: var(--bg, #EFF6FF); box-shadow: inset 0 0 0 1.5px var(--accent, #002d72); }
  #mega-panel { animation: megaFadeIn .18s ease; }
  @keyframes megaFadeIn { from { opacity:0 } to { opacity:1 } }
  #mega-card { animation: megaSlideDown .22s cubic-bezier(.22,1,.36,1); }
  @keyframes megaSlideDown { from { transform:translateY(-8px); opacity:0; } to { transform:translateY(0); opacity:1; } }
</style>

<nav style="position:sticky; top:0; z-index:100; backdrop-filter:blur(10px);
            background:rgba(255,255,255,0.96); box-shadow:0 1px 3px rgba(0,0,0,0.06);">
  <div style="max-width:1280px; margin:0 auto; padding:0 16px; display:flex; align-items:center; height:64px; gap:16px;">

    <!-- Logo -->
    <a href="/index.html" style="display:flex; align-items:center; gap:10px; text-decoration:none; flex-shrink:0;">
      <img src="/Logo.png" alt="PNJ Logo" style="height:40px; width:auto; object-fit:contain;">
      <span style="font-weight:900; font-size:18px; color:#002d72; letter-spacing:-0.02em; font-family:inherit;">OMNI-GROWTH</span>
    </a>

    <!-- CTA Homepage Links -->
    <div id="playbook-center-links"
         style="display:flex; align-items:center; gap:20px; flex:1; justify-content:center; flex-wrap:wrap;">
      <a href="/index.html#problem"              class="nav-cta-link" style="color:#64748b;font-size:12px;font-weight:700;text-decoration:none;text-transform:uppercase;letter-spacing:.06em;transition:color .2s;" onmouseover="this.style.color='#dc2626'" onmouseout="this.style.color='#64748b'">1. Problem</a>
      <a href="/index.html#agitation"            class="nav-cta-link" style="color:#64748b;font-size:12px;font-weight:700;text-decoration:none;text-transform:uppercase;letter-spacing:.06em;transition:color .2s;" onmouseover="this.style.color='#ea580c'" onmouseout="this.style.color='#64748b'">2. Agitation</a>
      <a href="/index.html#solution"             class="nav-cta-link" style="color:#64748b;font-size:12px;font-weight:700;text-decoration:none;text-transform:uppercase;letter-spacing:.06em;transition:color .2s;" onmouseover="this.style.color='#16a34a'" onmouseout="this.style.color='#64748b'">3. Solution</a>
      <a href="/index.html#execution"            class="nav-cta-link" style="color:#64748b;font-size:12px;font-weight:700;text-decoration:none;text-transform:uppercase;letter-spacing:.06em;transition:color .2s;" onmouseover="this.style.color='#002d72'" onmouseout="this.style.color='#64748b'">4. Thực Thi</a>
      <a href="/index.html#internal-empowerment" class="nav-cta-link" style="color:#64748b;font-size:12px;font-weight:700;text-decoration:none;text-transform:uppercase;letter-spacing:.06em;transition:color .2s;" onmouseover="this.style.color='#0f766e'" onmouseout="this.style.color='#64748b'">5. Internal</a>
    </div>

    <!-- Right actions -->
    <div style="display:flex; align-items:center; gap:10px; flex-shrink:0; margin-left:auto;">

      <!-- Download button -->
      <button id="download-btn" onclick="typeof downloadAsImage === 'function' && downloadAsImage()"
              title="Tải về dạng ảnh PNG"
              style="display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#002d72,#1e40af);
                     color:#fff;font-size:13px;font-weight:700;padding:8px 16px;border-radius:100px;
                     border:none;cursor:pointer;box-shadow:0 4px 12px rgba(0,45,114,0.25);transition:all .2s;"
              onmouseover="this.style.transform='translateY(-1px)';this.style.boxShadow='0 6px 18px rgba(0,45,114,0.35)'"
              onmouseout="this.style.transform='';this.style.boxShadow='0 4px 12px rgba(0,45,114,0.25)'">
        <span class="spinner" style="display:none;width:13px;height:13px;border:2px solid rgba(255,255,255,0.35);border-top-color:#fff;border-radius:50%;animation:spin .7s linear infinite;"></span>
        <i class="fas fa-download btn-icon"></i>
        <span class="btn-label" style="display:none;">Tải Về</span>
      </button>
      <style>@keyframes spin{to{transform:rotate(360deg)}} @media(min-width:640px){#download-btn .btn-label{display:inline!important}}</style>

      <!-- Mega Menu Toggle -->
      <button id="mega-menu-btn" title="Workspace Modules" aria-label="Mở Workspace Menu"
              style="width:40px;height:40px;border-radius:12px;background:#fff;color:#002d72;
                     border:1.5px solid rgba(0,45,114,0.2);display:flex;align-items:center;justify-content:center;
                     cursor:pointer;box-shadow:0 2px 6px rgba(0,45,114,0.08);transition:all .2s;"
              onmouseover="this.style.background='#002d72';this.style.color='#fff'"
              onmouseout="this.style.background='#fff';this.style.color='#002d72'">
        <i class="fas fa-th" style="font-size:15px;"></i>
      </button>

    </div>
  </div>
</nav>

${megaPanelHTML}`;

    /* ─── 5. Inject nav into DOM ────────────────────────────────────── */
    const container = document.getElementById('global-nav');
    if (container) {
        container.innerHTML = navHTML;
    } else {
        // Fallback: prepend to body
        const wrapper = document.createElement('div');
        wrapper.id = 'global-nav';
        wrapper.innerHTML = navHTML;
        document.body.prepend(wrapper);
    }

    /* ─── 6. Homepage link visibility logic ─────────────────────────── */
    const path = window.location.pathname;
    const isHome = path === '/' || path === '' || path.endsWith('index.html');
    const ctaLinks = document.getElementById('playbook-center-links');
    if (ctaLinks && !isHome) {
        ctaLinks.style.display = 'none';
    }

    /* ─── 7. Mega Panel interactions ────────────────────────────────── */
    const megaPanel = document.getElementById('mega-panel');
    const megaCard = document.getElementById('mega-card');
    const megaMenuBtn = document.getElementById('mega-menu-btn');
    const megaCloseBtn = document.getElementById('mega-close-btn');
    const featuresPanel = document.getElementById('mega-features-list');
    const emptyState = document.getElementById('mega-empty-state');

    function openMega() { megaPanel.style.display = 'block'; document.body.style.overflow = 'hidden'; }
    function closeMega() { megaPanel.style.display = 'none'; document.body.style.overflow = ''; }

    megaMenuBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        megaPanel.style.display === 'block' ? closeMega() : openMega();
    });

    megaCloseBtn?.addEventListener('click', closeMega);

    // Click outside the card to close
    megaPanel?.addEventListener('click', (e) => {
        if (!megaCard.contains(e.target)) closeMega();
    });

    // ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMega();
    });

    // Module button clicks → render features
    document.querySelectorAll('.mega-module-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.idx, 10);
            const mod = workspaceMenu[idx];
            if (!mod) return;

            // Highlight active module
            document.querySelectorAll('.mega-module-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const style = moduleStyles[mod.name] || { icon: 'fa-circle', accent: '#64748b', bg: '#F8FAFC' };

            if (!mod.features || mod.features.length === 0) {
                emptyState.innerHTML = `
          <i class="fas fa-hourglass-half" style="font-size:28px;"></i>
          <span style="font-size:12px;font-weight:600;">Chưa có dữ liệu cho module này</span>`;
                emptyState.style.display = 'flex';
                featuresPanel.style.display = 'none';
                return;
            }

            // Build feature links
            featuresPanel.innerHTML = `
        <p style="font-size:10px;font-weight:800;color:#94a3b8;text-transform:uppercase;letter-spacing:.1em;margin:0 0 12px;">
          <i class="fas ${style.icon}" style="color:${style.accent};margin-right:5px;"></i>${mod.name}
        </p>
        <div style="display:flex;flex-direction:column;gap:6px;">
          ${mod.features.map(f => `
            <a href="${f.url}" style="display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:12px;
                                      background:#f8fafc;text-decoration:none;transition:all .18s;border:1px solid #f1f5f9;"
               onmouseover="this.style.background='${style.bg}';this.style.borderColor='${style.accent}30'"
               onmouseout="this.style.background='#f8fafc';this.style.borderColor='#f1f5f9'">
              <span style="width:32px;height:32px;border-radius:8px;background:${style.bg};color:${style.accent};
                           display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="fas ${style.icon} text-sm"></i>
              </span>
              <div>
                <span style="font-size:13px;font-weight:700;color:#1e293b;">${f.name}</span>
                ${f.status === 'active' ? `<span style="display:block;font-size:10px;color:#22c55e;font-weight:600;margin-top:1px;">● Active</span>` : `<span style="display:block;font-size:10px;color:#94a3b8;font-weight:600;margin-top:1px;">Coming soon</span>`}
              </div>
              <i class="fas fa-chevron-right" style="margin-left:auto;font-size:10px;color:#cbd5e1;"></i>
            </a>`).join('')}
        </div>`;

            emptyState.style.display = 'none';
            featuresPanel.style.display = 'block';
        });
    });

})();