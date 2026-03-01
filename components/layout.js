/**
 * components/layout.js
 * The App Shell — Omni-Growth Workspace
 *
 * Drop a single <script src="/components/layout.js"></script> into any HTML page.
 * This script will automatically:
 *   1. Inject Tailwind CDN, FontAwesome, and Google Fonts (Inter) into <head>
 *   2. Create #global-nav at the top of <body> and load nav.js
 *   3. Load footer.js to inject the standard footer
 *
 * Usage:
 *   <script src="/components/layout.js" defer></script>
 */

(function () {

    /* ─── Helper: inject a <link> tag once ─────────────────────────── */
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

    /* ─── Helper: inject a <script> tag once ───────────────────────── */
    function injectScript({ src, id, type, defer }) {
        if (id && document.getElementById(id)) return;
        if (!id && document.querySelector(`script[src="${src}"]`)) return;
        const el = document.createElement('script');
        el.src = src;
        if (id) el.id = id;
        if (type) el.type = type;
        if (defer) el.defer = true;
        document.head.appendChild(el);
    }

    /* ─── 1. Inject external CDN dependencies ──────────────────────── */

    // Google Fonts — Inter
    injectLink({
        id: 'omni-font-preconnect',
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
    });
    injectLink({
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
    });
    injectLink({
        id: 'omni-google-fonts',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
    });

    // FontAwesome
    injectLink({
        id: 'omni-fontawesome',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
    });

    // Tailwind CSS (CDN Play)
    if (!document.getElementById('omni-tailwind') && !document.querySelector('script[src*="tailwindcss"]')) {
        const tw = document.createElement('script');
        tw.id = 'omni-tailwind';
        tw.src = 'https://cdn.tailwindcss.com';
        document.head.appendChild(tw);
    }

    // Apply Inter as the default font
    const fontStyle = document.getElementById('omni-font-style');
    if (!fontStyle) {
        const st = document.createElement('style');
        st.id = 'omni-font-style';
        st.textContent = `*, *::before, *::after { font-family: 'Inter', system-ui, -apple-system, sans-serif; box-sizing: border-box; }`;
        document.head.prepend(st);
    }

    /* ─── 2. Ensure #global-nav exists at the top of <body> ────────── */
    function ensureNavContainer() {
        if (document.getElementById('global-nav')) return;
        const navDiv = document.createElement('div');
        navDiv.id = 'global-nav';
        document.body.prepend(navDiv);
    }

    /* ─── 3. Load component scripts ─────────────────────────────────── */
    function loadComponents() {
        ensureNavContainer();

        // Derive base origin (works from any directory depth)
        const base = window.location.origin;

        // nav.js — renders into #global-nav
        injectScript({
            id: 'omni-nav-script',
            src: `${base}/components/nav.js`,
            type: 'module',   // nav.js uses dynamic import()
        });

        // footer.js — self-appending
        injectScript({
            id: 'omni-footer-script',
            src: `${base}/components/footer.js`,
            defer: true,
        });
    }

    /* ─── 4. Run when DOM is ready ──────────────────────────────────── */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadComponents);
    } else {
        loadComponents();
    }

})();
