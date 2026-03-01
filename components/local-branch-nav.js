/**
 * components/local-branch-nav.js
 * Local Branch Navigation specifically for Clienteling reports.
 * Automatically highlights the correct branch pill based on the current URL.
 */

(function () {
    // Determine if we should render this at all (only in clienteling module paths)
    const path = window.location.pathname.toLowerCase();

    if (!path.includes('/clienteling/')) return;

    // Create the styling
    const css = document.createElement('style');
    css.textContent = `
        .lbn-container {
            display: flex;
            align-items: center;
            overflow-x: auto;
            background: #f8fafc;
            border-radius: 12px;
            padding: 8px;
            margin-bottom: 24px;
            gap: 8px;
            scrollbar-width: none; /* Firefox */
            border: 1px solid #e2e8f0;
        }
        .lbn-container::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
        }
        .lbn-pill {
            display: inline-flex;
            align-items: center;
            white-space: nowrap;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            color: #64748b;
            text-decoration: none;
            transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
            background: transparent;
        }
        .lbn-pill:hover {
            color: #0D9488;
            background: rgba(13, 148, 136, 0.05);
        }
        .lbn-pill.active {
            color: white;
            background: #0D9488;
            box-shadow: 0 4px 12px rgba(13, 148, 136, 0.3);
            pointer-events: none;
        }
    `;
    document.head.appendChild(css);

    // Definitions for the branches
    const branches = [
        { id: 'tong-quan', label: 'Tổng Quan', file: 'tong-quan.html' },
        { id: 'cn-hcm', label: 'CN HCM', file: 'cn-hcm.html' },
        { id: 'cn-mbc', label: 'CN MBC', file: 'cn-mbc.html' },
        { id: 'cn-mtg', label: 'CN MTG', file: 'cn-mtg.html' },
        { id: 'cn-mty', label: 'CN MTY', file: 'cn-mty.html' },
        { id: 'cn-tnn', label: 'CN TNN', file: 'cn-tnn.html' },
        { id: 'cn-dnb', label: 'CN DNB', file: 'cn-dnb.html' }
    ];

    // Extract base URL to form the correct relative links
    const lastSlashIdx = path.lastIndexOf('/');
    const basePath = path.substring(0, lastSlashIdx + 1);

    // Find active branch by current file
    const currentFile = path.substring(lastSlashIdx + 1);

    // Build HTML
    const container = document.createElement('div');
    container.className = 'lbn-container';

    branches.forEach(branch => {
        const a = document.createElement('a');
        a.href = basePath + branch.file;
        a.className = 'lbn-pill' + (currentFile === branch.file ? ' active' : '');
        a.textContent = branch.label;
        container.appendChild(a);
    });

    // Inject into the page when DOM is ready
    window.addEventListener('DOMContentLoaded', () => {
        // Try to insert it before the first typical report content section
        const contentArea = document.querySelector('.bg-white.rounded-2xl.shadow-sm') ||
            document.querySelector('.p-4') ||
            document.body;

        if (contentArea !== document.body) {
            contentArea.parentElement.insertBefore(container, contentArea);
        } else {
            document.body.appendChild(container); // Fallback
        }
    });

})();
