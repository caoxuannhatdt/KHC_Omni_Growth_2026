/**
 * config/menu-config.js
 * Central data source for the Omni-Growth Workspace navigation.
 * Consumed by components/nav.js to build the 2-column App Drawer Mega Menu.
 */

export const workspaceMenu = [
    {
        moduleName: 'Clienteling',
        icon: 'fa-users',
        accent: '#4f46e5',
        description: 'Quản trị hành trình & hiệu quả KHC',
        features: [
            {
                name: 'Report Monthly',
                url: '/modules/clienteling/monthly/',
                icon: 'fa-calendar-alt',
                description: 'Báo cáo hiệu quả hàng tháng'
            },
            {
                name: '30D Lookback',
                url: '/modules/clienteling/30d-lookback/',
                icon: 'fa-history',
                description: 'Nhìn lại 30 ngày qua'
            },
            {
                name: 'Quarterly',
                url: '/modules/clienteling/quarterly/',
                icon: 'fa-chart-bar',
                description: 'Tổng kết theo quý'
            },
            {
                name: 'Campaigns',
                url: '/modules/clienteling/campaigns/',
                icon: 'fa-bullseye',
                description: 'Quản lý chiến dịch chăm sóc'
            }
        ]
    },
    {
        moduleName: 'CJM360',
        icon: 'fa-wifi',
        accent: '#0ea5e9',
        description: 'Customer Journey Map toàn diện',
        features: [
            {
                name: 'Tín Hiệu O2O',
                url: '/modules/cjm360/o2o-signals.html',
                icon: 'fa-map-pin',
                description: 'Theo dõi tín hiệu Online-to-Offline'
            },
            {
                name: 'Lead Dashboard',
                url: '/modules/cjm360/lead-dashboard.html',
                icon: 'fa-tachometer-alt',
                description: 'Bảng theo dõi chuyển đổi Lead'
            }
        ]
    },
    {
        moduleName: 'UAV 2026',
        icon: 'fa-rocket',
        accent: '#f59e0b',
        description: 'Kế hoạch Tăng trưởng 2026',
        features: [
            {
                name: 'Master Plan',
                url: '/modules/uav-2026/master-plan.html',
                icon: 'fa-project-diagram',
                description: 'Kế hoạch tổng thể toàn năm'
            },
            {
                name: 'Tracking P&L',
                url: '/modules/uav-2026/tracking-pl.html',
                icon: 'fa-dollar-sign',
                description: 'Theo dõi kết quả kinh doanh'
            }
        ]
    },
    {
        moduleName: 'CIS',
        icon: 'fa-shield-alt',
        accent: '#10b981',
        description: 'Customer Intelligence System',
        features: [
            {
                name: 'Đánh Chặn Rời Bỏ',
                url: '/modules/cis/churn-intercept.html',
                icon: 'fa-user-shield',
                description: 'Phá vỡ rào cản rời bỏ khách hàng'
            }
        ]
    },
    {
        moduleName: "System & Updates",
        icon: 'fa-bullhorn',
        accent: '#ec4899',
        description: 'Lộ trình & nhật ký cập nhật hệ thống',
        features: [
            {
                name: 'Master Roadmap 2026',
                url: '/modules/whats-new/roadmap.html',
                icon: 'fa-map',
                description: 'Quản trị tương lai — hướng đi chiến lược'
            },
            {
                name: 'Release Notes',
                url: '/modules/whats-new/release-notes.html',
                icon: 'fa-clipboard-list',
                description: 'Nhật ký cập nhật tính năng'
            }
        ]
    }
];
