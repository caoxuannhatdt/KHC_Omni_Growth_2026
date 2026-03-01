/**
 * config/menu-config.js
 * 6-Module Information Architecture — Omni-Growth Workspace 2026
 *
 * Clienteling features are flexible by month/region sub-folders.
 * status values: 'active' | 'coming-soon' | 'research'
 */

export const workspaceMenu = [
    {
        moduleName: "Clienteling",
        icon: "fa-users",
        theme: "blue",
        features: [
            /* ── Report Monthly ── flexible sub-pages by date ── */
            {
                name: "Monthly · T01/2026 – Tổng Quan",
                url: "/modules/clienteling/monthly/2026/01/tong-quan.html",
                status: "active"
            },
            {
                name: "Monthly · T01/2026 – CN HCM",
                url: "/modules/clienteling/monthly/2026/01/cn-hcm.html",
                status: "active"
            },
            {
                name: "Monthly · T01/2026 – CN MBC",
                url: "/modules/clienteling/monthly/2026/01/cn-mbc.html",
                status: "active"
            },
            {
                name: "Monthly · T01/2026 – CN MTG",
                url: "/modules/clienteling/monthly/2026/01/cn-mtg.html",
                status: "active"
            },
            {
                name: "Monthly · T01/2026 – CN MTY",
                url: "/modules/clienteling/monthly/2026/01/cn-mty.html",
                status: "active"
            },
            {
                name: "Monthly · T01/2026 – CN TNN",
                url: "/modules/clienteling/monthly/2026/01/cn-tnn.html",
                status: "active"
            },
            {
                name: "Monthly · T02/2026 – Tổng Quan",
                url: "/modules/clienteling/monthly/2026/02/tong-quan.html",
                status: "active"
            },
            {
                name: "Monthly · T02/2026 – CN DNB",
                url: "/modules/clienteling/monthly/2026/02/cn-dnb.html",
                status: "active"
            },
            {
                name: "Monthly · T02/2026 – CN HCM",
                url: "/modules/clienteling/monthly/2026/02/cn-hcm.html",
                status: "active"
            },
            {
                name: "Monthly · T02/2026 – CN MBC",
                url: "/modules/clienteling/monthly/2026/02/cn-mbc.html",
                status: "active"
            },
            {
                name: "Monthly · T02/2026 – CN MTG",
                url: "/modules/clienteling/monthly/2026/02/cn-mtg.html",
                status: "active"
            },
            {
                name: "Monthly · T02/2026 – CN MTY",
                url: "/modules/clienteling/monthly/2026/02/cn-mty.html",
                status: "active"
            },
            {
                name: "Monthly · T02/2026 – CN TNN",
                url: "/modules/clienteling/monthly/2026/02/cn-tnn.html",
                status: "active"
            },
            /* ── 30D Lookback ── flexible by date ── */
            {
                name: "30D Lookback · T01/2026 – Tổng Quan",
                url: "/modules/clienteling/30d-lookback/2026/01/tong-quan.html",
                status: "active"
            },
            {
                name: "30D Lookback · T01/2026 – CN HCM",
                url: "/modules/clienteling/30d-lookback/2026/01/cn-hcm.html",
                status: "active"
            },
            {
                name: "30D Lookback · T01/2026 – CN MBC",
                url: "/modules/clienteling/30d-lookback/2026/01/cn-mbc.html",
                status: "active"
            },
            {
                name: "30D Lookback · T01/2026 – CN MTG",
                url: "/modules/clienteling/30d-lookback/2026/01/cn-mtg.html",
                status: "active"
            },
            {
                name: "30D Lookback · T01/2026 – CN MTY",
                url: "/modules/clienteling/30d-lookback/2026/01/cn-mty.html",
                status: "active"
            },
            {
                name: "30D Lookback · T01/2026 – CN TNN",
                url: "/modules/clienteling/30d-lookback/2026/01/cn-tnn.html",
                status: "active"
            },
            {
                name: "30D Lookback · T02/2026 – Tổng Quan",
                url: "/modules/clienteling/30d-lookback/2026/02/tong-quan.html",
                status: "active"
            },
            {
                name: "30D Lookback · T02/2026 – CN DNB",
                url: "/modules/clienteling/30d-lookback/2026/02/cn-dnb.html",
                status: "active"
            },
            {
                name: "30D Lookback · T02/2026 – CN HCM",
                url: "/modules/clienteling/30d-lookback/2026/02/cn-hcm.html",
                status: "active"
            },
            {
                name: "30D Lookback · T02/2026 – CN MBC",
                url: "/modules/clienteling/30d-lookback/2026/02/cn-mbc.html",
                status: "active"
            },
            {
                name: "30D Lookback · T02/2026 – CN MTG",
                url: "/modules/clienteling/30d-lookback/2026/02/cn-mtg.html",
                status: "active"
            },
            {
                name: "30D Lookback · T02/2026 – CN MTY",
                url: "/modules/clienteling/30d-lookback/2026/02/cn-mty.html",
                status: "active"
            },
            {
                name: "30D Lookback · T02/2026 – CN TNN",
                url: "/modules/clienteling/30d-lookback/2026/02/cn-tnn.html",
                status: "active"
            },
            /* ── Other reports ── */
            { name: "Quarterly", url: "#", status: "coming-soon" },
            { name: "Campaigns", url: "#", status: "coming-soon" }
        ]
    },
    {
        moduleName: "Customer Scoring",
        icon: "fa-calculator",
        theme: "indigo",
        features: [
            { name: "Model Tracking", url: "#", status: "coming-soon" },
            { name: "Health Dashboard", url: "#", status: "coming-soon" }
        ]
    },
    {
        moduleName: "CJM360",
        icon: "fa-wifi",
        theme: "green",
        features: [
            { name: "Store Leads", url: "#", status: "coming-soon" },
            { name: "Conversion Rate", url: "#", status: "coming-soon" }
        ]
    },
    {
        moduleName: "UAV 2026",
        icon: "fa-rocket",
        theme: "slate",
        features: [
            { name: "Master Plan", url: "#", status: "coming-soon" },
            { name: "P&L Tracking", url: "#", status: "coming-soon" }
        ]
    },
    {
        moduleName: "Innovation Lab",
        icon: "fa-flask",
        theme: "orange",
        features: [
            {
                name: "[Explore] CIS - Đánh Chặn",
                url: "/modules/innovation/cis/index.html",
                status: "research"
            },
            {
                name: "[Exploit] Cập nhật sau",
                url: "#",
                status: "coming-soon"
            }
        ]
    },
    {
        moduleName: "System & Updates",
        icon: "fa-bullhorn",
        theme: "slate",
        features: [
            { name: "Master Roadmap 2026", url: "/modules/whats-new/roadmap.html", status: "active" },
            { name: "Release Notes", url: "/modules/whats-new/release-notes.html", status: "active" }
        ]
    }
];
