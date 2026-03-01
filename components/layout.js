/**
 * components/layout.js  —  App Shell Entry Point
 * Omni-Growth Workspace 2026
 *
 * Usage: <script type="module" src="/components/layout.js"></script>
 *
 * Automatically:
 *   1. Injects Tailwind CDN, FontAwesome 6.4.0, Google Fonts (Inter) → <head>
 *   2. Creates <div id="global-nav"> at top of <body>, loads nav.js as ES module
 *   3. Injects standard PNJ Omni-Growth <footer> at bottom of <body>
 */

(function () {

    /* ─── Helper: idempotent <link> injection ────────────────────────────── */
    function injectLink({ rel, href, crossorigin, id }) {
        if (id && document.getElementById(id)) return;
        if (!id && document.querySelector(`link[href="${href}"]`)) return;
        const el = document.createElement('link');
        el.rel = rel || 'stylesheet';
        el.href = href;
        if (id) el.id = id;
        if (crossorigin) el.crossOrigin = crossorigin;
        document.head.appendChild(el);
    }

    /* ─── 1. Inject CDN dependencies ─────────────────────────────────────── */

    // Tailwind CSS CDN
    if (!document.getElementById('omni-tailwind') && !document.querySelector('script[src*="tailwindcss"]')) {
        const tw = document.createElement('script');
        tw.id = 'omni-tailwind';
        tw.src = 'https://cdn.tailwindcss.com';
        document.head.appendChild(tw);
    }

    // FontAwesome 6.4.0
    injectLink({
        id: 'omni-fontawesome',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    });

    // Google Fonts — Inter
    injectLink({ id: 'omni-gf-pre', rel: 'preconnect', href: 'https://fonts.googleapis.com' });
    injectLink({ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' });
    injectLink({
        id: 'omni-google-fonts',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
    });

    // Base font reset
    if (!document.getElementById('omni-font-style')) {
        const st = document.createElement('style');
        st.id = 'omni-font-style';
        st.textContent = `*, *::before, *::after { font-family: 'Inter', system-ui, -apple-system, sans-serif; box-sizing: border-box; }`;
        document.head.prepend(st);
    }

    /* ─── 2. Ensure #global-nav at top of <body> ─────────────────────────── */
    function ensureNav() {
        if (document.getElementById('global-nav')) return;
        const div = document.createElement('div');
        div.id = 'global-nav';
        document.body.prepend(div);
    }

    /* ─── 3. Load nav.js as ES Module ────────────────────────────────────── */
    function loadNav() {
        if (document.getElementById('omni-nav-script')) return;
        const s = document.createElement('script');
        s.id = 'omni-nav-script';
        s.type = 'module';
        s.src = `${window.location.origin}/components/nav.js`;
        document.head.appendChild(s);
    }

    /* ─── 4. Inject standard PNJ Omni-Growth footer at bottom of <body> ──── */
    function injectFooter() {
        if (document.getElementById('omni-footer')) return;
        const footer = document.createElement('footer');
        footer.id = 'omni-footer';
        footer.className = 'bg-slate-950 py-10 text-center';
        footer.style.fontFamily = "'Inter', sans-serif";
        footer.innerHTML = `
            <div style="max-width:1200px;margin:0 auto;padding:0 20px;">
                <img src="/Logo.png" alt="PNJ Logo"
                    style="height:40px;width:auto;object-fit:contain;background:#fff;padding:6px 12px;border-radius:10px;display:block;margin:0 auto 16px;box-shadow:0 2px 8px rgba(0,0,0,0.2);"
                    onerror="this.style.display='none'">
                <p style="color:#475569;font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;margin-bottom:4px;">
                    &copy; 2026 PNJ OMNI-GROWTH TEAM.
                </p>
                <p style="color:#334155;font-size:10px;">
                    Omni-Growth Workspace 2026 &mdash; Toàn bộ nội dung mang tính nội bộ &amp; bảo mật.
                </p>
            </div>
        `;
        document.body.appendChild(footer);
    }

    /* ─── 5. Run after DOM is ready ─────────────────────────────────────── */
    function init() {
        ensureNav();
        loadNav();
        injectFooter();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
