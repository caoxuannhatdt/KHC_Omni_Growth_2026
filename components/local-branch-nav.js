/**
 * components/local-branch-nav.js
 * Local Branch Navigation specifically for Clienteling reports.
 * Requires a container with ID #omni-branch-nav to be present in the HTML.
 */

(function () {
    const navContainer = document.getElementById('omni-branch-nav');

    // Safely exit if the required container does not exist
    if (!navContainer) return;

    // Inject CSS styles
    if (!document.getElementById('lbn-styles')) {
        const css = document.createElement('style');
        css.id = 'lbn-styles';
        css.textContent = `
            .lbn-scroll-wrapper {
                display: inline-flex;
                gap: 6px;
                padding: 6px;
                background: #f8fafc;
                border-radius: 12px;
                box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
                overflow-x: auto;
                scrollbar-width: none; /* Firefox */
                max-width: 100%;
            }
            .lbn-scroll-wrapper::-webkit-scrollbar {
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
                color: #0D9488;
                background: rgba(13, 148, 136, 0.05);
            }
            .branch-pill.active {
                background: #0D9488;
                color: white;
                box-shadow: 0 4px 10px -2px rgba(13, 148, 136, 0.3);
                pointer-events: none;
            }
        `;
        document.head.appendChild(css);
    }

    // Definitions for the branches
    const branches = [
        { id: 'tong-quan', label: 'Tổng Quan', href: './tong-quan.html' },
        { id: 'cn-hcm', label: 'CN HCM', href: './cn-hcm.html' },
        { id: 'cn-mbc', label: 'CN MBC', href: './cn-mbc.html' },
        { id: 'cn-mtg', label: 'CN MTG', href: './cn-mtg.html' },
        { id: 'cn-mty', label: 'CN MTY', href: './cn-mty.html' },
        { id: 'cn-tnn', label: 'CN TNN', href: './cn-tnn.html' },
        { id: 'cn-dnb', label: 'CN DNB', href: './cn-dnb.html' }
    ];

    const currentPath = window.location.pathname.toLowerCase();

    // Find active branch by checking if current path ends with the branch href
    let activeBranch = branches[0]; // Default to Tổng Quan
    for (const b of branches) {
        const filename = b.href.replace('./', '');
        if (currentPath.endsWith(filename)) {
            activeBranch = b;
            break;
        }
    }

    // Build the scrollable wrapper and pills
    const wrapper = document.createElement('div');
    wrapper.className = 'lbn-scroll-wrapper';

    branches.forEach(b => {
        const a = document.createElement('a');
        a.href = b.href;
        a.className = 'branch-pill' + (b === activeBranch ? ' active' : '');
        a.textContent = b.label;
        wrapper.appendChild(a);
    });

    // Clear any existing content and append the new tab bar
    navContainer.innerHTML = '';
    navContainer.appendChild(wrapper);

})();
