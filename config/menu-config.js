/**
 * config/menu-config.js
 * IA Clean-up & Grouping — Omni-Growth Workspace 2026
 *
 * Tối ưu UX: 
 * - Loại bỏ các folder thừa ở System, CJM360.
 * - Tinh gọn danh sách chi nhánh trong Clienteling (Chỉ điều hướng theo tháng).
 * - Cập nhật Icon Semantic & Bảng màu Premium.
 */

export const workspaceMenu = [
    /* ═══════════════════════════════════════════════════════════════════════
       1. CLIENTELING (Theme: Teal / Xanh mòng két)
       ═══════════════════════════════════════════════════════════════════════ */
    {
        moduleName: 'Clienteling',
        icon: 'fa-handshake', // Icon mang tính kết nối khách hàng
        theme: 'teal',
        subGroups: [
            {
                groupName: 'Monthly',
                features: [
                    { name: 'Tháng 01/2026', url: '/modules/clienteling/monthly/2026/01/tong-quan.html', status: 'active' },
                    { name: 'Tháng 02/2026', url: '/modules/clienteling/monthly/2026/02/tong-quan.html', status: 'active' },
                    { name: 'Tháng 03/2026', url: '/modules/clienteling/monthly/2026/03/tong-quan.html', status: 'active' }
                ]
            },
            {
                groupName: '30D Lookback',
                features: [
                    { name: 'Tháng 01/2026', url: '/modules/updating.html', status: 'coming-soon' },
                    { name: 'Tháng 02/2026', url: '/modules/updating.html', status: 'coming-soon' }
                ]
            },
            { groupName: 'Quarterly', features: [] },
            { groupName: 'Campaigns', features: [] }
        ]
    },

    /* ═══════════════════════════════════════════════════════════════════════
       2. CSC - SCORING CARD (Theme: Indigo)
       ═══════════════════════════════════════════════════════════════════════ */
    {
        moduleName: 'CSC - Scoring Card',
        icon: 'fa-bullseye', // Icon nhắm mục tiêu/chấm điểm
        theme: 'indigo',
        subGroups: []
    },

    /* ═══════════════════════════════════════════════════════════════════════
       3. CJM360 (Theme: Rose / Hồng san hô)
       ═══════════════════════════════════════════════════════════════════════ */
    {
        moduleName: 'CJM360',
        icon: 'fa-route', // Icon hành trình (Journey)
        theme: 'rose',
        subGroups: [],
        // Lôi thẳng ra ngoài, không nhét vào folder Dashboard nữa
        features: [
            { name: 'CJM360 Dashboard', url: '/modules/updating.html', status: 'coming-soon' }
        ]
    },

    /* ═══════════════════════════════════════════════════════════════════════
       4. UAV 2026 (Theme: Sky Blue)
       ═══════════════════════════════════════════════════════════════════════ */
    {
        moduleName: 'UAV 2026',
        icon: 'fa-rocket', // Tốc độ, cất cánh
        theme: 'sky',
        subGroups: []
    },

    /* ═══════════════════════════════════════════════════════════════════════
       5. INNOVATION LAB (Theme: Purple)
       ═══════════════════════════════════════════════════════════════════════ */
    {
        moduleName: 'Innovation Lab',
        icon: 'fa-microscope', // Rõ nghĩa phòng lab/nghiên cứu
        theme: 'purple',
        subGroups: [
            {
                groupName: 'Explore',
                features: [
                    // Các link trong Explore sẽ được render phẳng ra ngoài nhờ logic JS
                    { name: 'CIS', url: '/modules/updating.html', status: 'research' },
                    { name: 'CRM Automation', url: '/modules/innovation/crm/crmauto.html', status: 'active' }
                ]
            },
            { groupName: 'Exploit', features: [] }
        ]
    },

    /* ═══════════════════════════════════════════════════════════════════════
       6. SYSTEM & UPDATES (Theme: Emerald)
       ═══════════════════════════════════════════════════════════════════════ */
    {
        moduleName: 'System & Updates',
        icon: 'fa-layer-group',
        theme: 'emerald',
        subGroups: [],
        features: [
            { name: 'Roadmap 2026', url: '/modules/whats-new/road-map.html', status: 'active' },
            // Đã cập nhật đường dẫn mới và đổi status thành active
            { name: 'Release Notes', url: '/modules/whats-new/release-notes.html', status: 'active' }
        ]
    }
];