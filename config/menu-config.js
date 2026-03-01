/**
 * config/menu-config.js
 * IA Clean-up & Grouping — Omni-Growth Workspace 2026
 *
 * Broken / empty URLs → /modules/updating.html (placeholder page)
 * status: 'active' | 'research' | 'coming-soon'
 */

export const workspaceMenu = [
    /* ═══════════════════════════════════════════════════════════════════════
       1. CLIENTELING
       ═══════════════════════════════════════════════════════════════════════ */
    {
        moduleName: 'Clienteling',
        icon: 'fa-users',
        theme: 'blue',
        subGroups: [
            {
                groupName: 'Monthly',
                features: [
                    { name: 'T01/2026 – Tổng Quan', url: '/modules/clienteling/monthly/2026/01/tong-quan.html', status: 'active' },
                    { name: 'T01/2026 – CN HCM', url: '/modules/clienteling/monthly/2026/01/cn-hcm.html', status: 'active' },
                    { name: 'T01/2026 – CN MBC', url: '/modules/clienteling/monthly/2026/01/cn-mbc.html', status: 'active' },
                    { name: 'T01/2026 – CN MTG', url: '/modules/clienteling/monthly/2026/01/cn-mtg.html', status: 'active' },
                    { name: 'T01/2026 – CN MTY', url: '/modules/clienteling/monthly/2026/01/cn-mty.html', status: 'active' },
                    { name: 'T01/2026 – CN TNN', url: '/modules/clienteling/monthly/2026/01/cn-tnn.html', status: 'active' },
                    { name: 'T02/2026 – Tổng Quan', url: '/modules/clienteling/monthly/2026/02/tong-quan.html', status: 'active' },
                    { name: 'T02/2026 – CN DNB', url: '/modules/clienteling/monthly/2026/02/cn-dnb.html', status: 'active' },
                    { name: 'T02/2026 – CN HCM', url: '/modules/clienteling/monthly/2026/02/cn-hcm.html', status: 'active' },
                    { name: 'T02/2026 – CN MBC', url: '/modules/clienteling/monthly/2026/02/cn-mbc.html', status: 'active' },
                    { name: 'T02/2026 – CN MTG', url: '/modules/clienteling/monthly/2026/02/cn-mtg.html', status: 'active' },
                    { name: 'T02/2026 – CN MTY', url: '/modules/clienteling/monthly/2026/02/cn-mty.html', status: 'active' },
                    { name: 'T02/2026 – CN TNN', url: '/modules/clienteling/monthly/2026/02/cn-tnn.html', status: 'active' }
                ]
            },
            {
                groupName: '30D Lookback',
                features: [
                    { name: 'T01/2026 – Tổng Quan', url: '/modules/clienteling/30d-lookback/2026/01/tong-quan.html', status: 'active' },
                    { name: 'T01/2026 – CN HCM', url: '/modules/clienteling/30d-lookback/2026/01/cn-hcm.html', status: 'active' },
                    { name: 'T01/2026 – CN MBC', url: '/modules/clienteling/30d-lookback/2026/01/cn-mbc.html', status: 'active' },
                    { name: 'T01/2026 – CN MTG', url: '/modules/clienteling/30d-lookback/2026/01/cn-mtg.html', status: 'active' },
                    { name: 'T01/2026 – CN MTY', url: '/modules/clienteling/30d-lookback/2026/01/cn-mty.html', status: 'active' },
                    { name: 'T01/2026 – CN TNN', url: '/modules/clienteling/30d-lookback/2026/01/cn-tnn.html', status: 'active' },
                    { name: 'T02/2026 – Tổng Quan', url: '/modules/clienteling/30d-lookback/2026/02/tong-quan.html', status: 'active' },
                    { name: 'T02/2026 – CN DNB', url: '/modules/clienteling/30d-lookback/2026/02/cn-dnb.html', status: 'active' },
                    { name: 'T02/2026 – CN HCM', url: '/modules/clienteling/30d-lookback/2026/02/cn-hcm.html', status: 'active' },
                    { name: 'T02/2026 – CN MBC', url: '/modules/clienteling/30d-lookback/2026/02/cn-mbc.html', status: 'active' },
                    { name: 'T02/2026 – CN MTG', url: '/modules/clienteling/30d-lookback/2026/02/cn-mtg.html', status: 'active' },
                    { name: 'T02/2026 – CN MTY', url: '/modules/clienteling/30d-lookback/2026/02/cn-mty.html', status: 'active' },
                    { name: 'T02/2026 – CN TNN', url: '/modules/clienteling/30d-lookback/2026/02/cn-tnn.html', status: 'active' }
                ]
            },
            { groupName: 'Quarterly', features: [] },
            { groupName: 'Campaigns', features: [] }
        ]
    },

    /* ═══════════════════════════════════════════════════════════════════════
       2. CSC - SCORING CARD
       ═══════════════════════════════════════════════════════════════════════ */
    {
        moduleName: 'CSC - Scoring Card',
        icon: 'fa-calculator',
        theme: 'indigo',
        subGroups: []
    },

    /* ═══════════════════════════════════════════════════════════════════════
       3. CJM360
       ═══════════════════════════════════════════════════════════════════════ */
    {
        moduleName: 'CJM360',
        icon: 'fa-wifi',
        theme: 'green',
        subGroups: [
            {
                groupName: 'Dashboard',
                features: [
                    { name: 'CJM360 Dashboard', url: '/modules/updating.html', status: 'coming-soon' }
                ]
            }
        ]
    },

    /* ═══════════════════════════════════════════════════════════════════════
       4. UAV 2026
       ═══════════════════════════════════════════════════════════════════════ */
    {
        moduleName: 'UAV 2026',
        icon: 'fa-rocket',
        theme: 'slate',
        subGroups: []
    },

    /* ═══════════════════════════════════════════════════════════════════════
       5. INNOVATION LAB
       ═══════════════════════════════════════════════════════════════════════ */
    {
        moduleName: 'Innovation Lab',
        icon: 'fa-flask',
        theme: 'orange',
        subGroups: [
            {
                groupName: 'Explore',
                features: [
                    {
                        name: 'CIS – Đánh Chặn Rời Bỏ',
                        url: '/modules/innovation/cis/index.html',
                        status: 'research'
                    }
                ]
            },
            { groupName: 'Exploit', features: [] }
        ]
    },

    /* ═══════════════════════════════════════════════════════════════════════
       6. SYSTEM & UPDATES
       ═══════════════════════════════════════════════════════════════════════ */
    {
        moduleName: 'System & Updates',
        icon: 'fa-bullhorn',
        theme: 'slate',
        subGroups: [
            {
                groupName: 'Roadmap',
                features: [
                    { name: 'Master Roadmap 2026', url: '/modules/updating.html', status: 'coming-soon' },
                    { name: 'Release Notes', url: '/modules/updating.html', status: 'coming-soon' }
                ]
            }
        ]
    }
];
