/**
 * components/local-branch-nav.js
 * Fully automated, zero-config Local Branch Navigation for Clienteling reports.
 */

function initBranchNav() {
    // 1. Scope Protection
    const path = window.location.pathname.toLowerCase();
    if (!path.includes('/clienteling/')) return;

    // Prevent duplicate injections
    if (document.getElementById('auto-branch-nav')) return;

    // 2. Target Identification & Placement
    // The main header is usually the first .card-glass inside #report-container
    const headerBlock = document.querySelector('#report-container > .card-glass:first-of-type') ||
        document.querySelector('.card-glass:first-of-type');

    if (!headerBlock) {
        // Retry if DOM isn't fully parsed yet (e.g., heavily reliant on scripts)
        setTimeout(initBranchNav, 100);
        return;
    }

    // 3. Component UI/UX (Inject CSS)
    if (!document.getElementById('lbn-styles')) {
        const css = document.createElement('style');
        css.id = 'lbn-styles';
        css.textContent = `
            #auto-branch-nav {
                display: inline-flex;
                gap: 6px;
                padding: 6px;
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 12px;
                box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
                overflow-x: auto;
                scrollbar-width: none; /* Firefox */
                max-width: 100%;
                margin-bottom: 24px; /* mb-6 */
            }
            #auto-branch-nav::-webkit-scrollbar {
                display: none; /* Safari and Chrome */
            }
            .branch-pill {
                padding: 8px 16px;
                border-radius: 8px;
                color: #64748b;
                font-weight: 600;
                font-size: 13px;
                text-decoration: none;
                white-space: nowrap;
                transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .branch-pill:hover {
                color: #0D9488; /* Teal */
                background: rgba(13, 148, 136, 0.05);
            }
            .branch-pill.active {
                background: #0D9488;
                color: white;
                box-shadow: 0 4px 10px -2px rgba(13, 148, 136, 0.3);
                pointer-events: none;
            }
            .branch-pill i {
                margin-right: 4px;
            }
        `;
        document.head.appendChild(css);
    }

    // Create the container
    const navContainer = document.createElement('div');
    navContainer.id = 'auto-branch-nav';

    // Component HTML (Relative links)
    navContainer.innerHTML = `
        <a href="./tong-quan.html" class="branch-pill" data-target="tong-quan"><i class="fas fa-globe"></i> Tổng Quan</a>
        <a href="./cn-hcm.html" class="branch-pill" data-target="cn-hcm">CN HCM</a>
        <a href="./cn-mbc.html" class="branch-pill" data-target="cn-mbc">CN MBC</a>
        <a href="./cn-mtg.html" class="branch-pill" data-target="cn-mtg">CN MTG</a>
        <a href="./cn-mty.html" class="branch-pill" data-target="cn-mty">CN MTY</a>
        <a href="./cn-tnn.html" class="branch-pill" data-target="cn-tnn">CN TNN</a>
        <a href="./cn-dnb.html" class="branch-pill" data-target="cn-dnb">CN DNB</a>
    `;

    // Inject into DOM
    headerBlock.insertAdjacentElement('afterend', navContainer);

    // 4. Auto-Active Logic
    const pills = navContainer.querySelectorAll('.branch-pill');
    let matched = false;

    pills.forEach(pill => {
        const target = pill.getAttribute('data-target');
        if (path.includes(target)) {
            pill.classList.add('active');
            matched = true;
        }
    });

    // Default to 'Tổng Quan' if no match is found
    if (!matched) {
        const defaultPill = navContainer.querySelector('[data-target="tong-quan"]');
        if (defaultPill) defaultPill.classList.add('active');
    }
}

// Bootstrap
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBranchNav);
} else {
    initBranchNav();
}
