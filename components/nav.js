const navHTML = `
<nav class="nav-sticky" style="position: sticky; top: 0; z-index: 50; backdrop-filter: blur(10px); background-color: rgba(255, 255, 255, 0.95); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
            
            <div class="flex items-center gap-3">
                <a href="/index.html" class="flex items-center gap-3">
                    <img src="/Logo.png" alt="PNJ Logo" class="nav-logo-img h-10 w-auto object-contain" id="pnj-logo-nav">
                    <span class="font-extrabold text-xl text-[#002d72] tracking-tight font-heading">OMNI-GROWTH</span>
                </a>
            </div>

            <div id="playbook-center-links" class="hidden md:flex space-x-6 text-sm font-bold text-slate-500 font-heading uppercase tracking-wide">
                <a href="/index.html#problem" class="hover:text-red-600 transition">1. Problem</a>
                <a href="/index.html#agitation" class="hover:text-orange-600 transition">2. Agitation</a>
                <a href="/index.html#solution" class="hover:text-green-600 transition">3. Solution</a>
                <a href="/index.html#execution" class="hover:text-[#002d72] transition">4. Thực Thi</a>
                <a href="/index.html#internal-empowerment" class="hover:text-teal-600 transition">5. Internal</a>
            </div>

            <div class="flex items-center gap-3">
                
                <button id="download-btn" onclick="downloadAsImage()" title="Tải về dạng ảnh PNG" class="inline-flex items-center gap-2 bg-gradient-to-br from-[#002d72] to-[#1e40af] text-white text-[13px] font-bold py-2 px-4 rounded-full border-none cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-px transition-all">
                    <span class="spinner" style="display:none; width:14px; height:14px; border:2px solid rgba(255,255,255,0.4); border-top-color:#fff; border-radius:50%; animation:spin 0.7s linear infinite;"></span>
                    <i class="fas fa-download btn-icon"></i>
                    <span class="btn-label hidden sm:inline-block">Tải Về</span>
                </button>

                <div class="relative group py-4">
                    <button class="w-10 h-10 flex items-center justify-center bg-white text-[#002d72] rounded-xl hover:bg-[#002d72] hover:text-white transition-all duration-300 cursor-pointer border border-[#002d72]/20 shadow-sm focus:outline-none">
                        <i class="fas fa-th text-lg"></i>
                    </button>

                    <div class="absolute top-full right-0 w-[calc(100vw-24px)] md:w-64 max-h-[85vh] overflow-y-auto md:overflow-visible bg-white border border-slate-200 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,45,114,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-3 mt-1 cursor-default origin-top-right">
                        
                        <div class="px-4 pb-2 mb-2 border-b border-slate-100 flex justify-between items-center">
                            <h3 class="text-[10px] font-black text-slate-400 uppercase tracking-widest font-heading">Modules</h3>
                            <span class="text-[8px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-bold uppercase">Mobile Ready</span>
                        </div>

                        <div class="relative group/cat px-2">
                            <a href="#" class="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
                                <div class="flex items-center gap-2.5 text-sm font-bold text-[#002d72]">
                                    <div class="w-7 h-7 rounded bg-blue-50 text-blue-600 flex items-center justify-center"><i class="fas fa-calendar-alt"></i></div>
                                    Report Monthly
                                </div>
                                <i class="fas fa-chevron-down md:hidden text-[10px] text-slate-400"></i>
                                <i class="fas fa-chevron-left hidden md:inline-block text-[10px] text-slate-400"></i>
                            </a>

                            <div class="hidden md:block static md:absolute md:top-0 md:right-full w-full md:w-56 md:mr-1 bg-slate-50 md:bg-white border-0 md:border border-slate-200 rounded-xl md:rounded-2xl md:shadow-[0_20px_40px_-15px_rgba(0,45,114,0.15)] md:opacity-0 md:invisible group-hover/cat:block md:group-hover/cat:opacity-100 md:group-hover/cat:visible transition-all duration-200 z-50 py-2 md:py-3 mt-1 md:mt-0">
                                <div class="px-4 pb-2 mb-2 border-b border-slate-200 md:border-slate-100 hidden md:block">
                                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Năm 2026</span>
                                </div>

                                <div class="relative group/month px-2">
                                    <a href="#" class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-100 md:hover:bg-slate-50 transition-colors">
                                        <span class="text-xs font-bold text-slate-700">Tháng 01/2026</span>
                                        <i class="fas fa-chevron-down md:hidden text-[10px] text-slate-400"></i>
                                        <i class="fas fa-chevron-left hidden md:inline-block text-[10px] text-slate-400"></i>
                                    </a>

                                    <div class="hidden md:block static md:absolute md:top-0 md:right-full w-full md:w-48 md:mr-1 bg-white border-0 md:border border-slate-200 rounded-xl md:rounded-2xl md:shadow-[0_20px_40px_-15px_rgba(0,45,114,0.15)] md:opacity-0 md:invisible group-hover/month:block md:group-hover/month:opacity-100 md:group-hover/month:visible transition-all duration-200 z-50 py-1 md:py-2 mt-1 md:mt-0">
                                        <div class="px-2 space-y-0.5">
                                            <a href="/reports/monthly/2026/01/tong-quan.html" class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 text-xs font-bold text-[#002d72]"><i class="fas fa-chart-pie opacity-70"></i> Tổng Quan</a>
                                            <a href="/reports/monthly/2026/01/cn-hcm.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN HCM</a>
                                            <a href="/reports/monthly/2026/01/cn-mbc.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN MBC</a>
                                            <a href="/reports/monthly/2026/01/cn-dnb.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN DNB</a>
                                            <a href="/reports/monthly/2026/01/cn-mtg.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN MTG</a>
                                            <a href="/reports/monthly/2026/01/cn-mty.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN MTY</a>
                                            <a href="/reports/monthly/2026/01/cn-tnn.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN TNN</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="relative group/month px-2 mt-1">
                                    <a href="#" class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-100 md:hover:bg-slate-50 transition-colors">
                                        <span class="text-xs font-bold text-slate-700">Tháng 02/2026</span>
                                        <i class="fas fa-chevron-down md:hidden text-[10px] text-slate-400"></i>
                                        <i class="fas fa-chevron-left hidden md:inline-block text-[10px] text-slate-400"></i>
                                    </a>
                                    <div class="hidden md:block static md:absolute md:top-0 md:right-full w-full md:w-48 md:mr-1 bg-white border-0 md:border border-slate-200 rounded-xl md:rounded-2xl md:shadow-[0_20px_40px_-15px_rgba(0,45,114,0.15)] md:opacity-0 md:invisible group-hover/month:block md:group-hover/month:opacity-100 md:group-hover/month:visible transition-all duration-200 z-50 py-1 md:py-2 mt-1 md:mt-0">
                                        <div class="px-2 space-y-0.5">
                                            <a href="/reports/monthly/2026/02/tong-quan.html" class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 text-xs font-bold text-[#002d72]"><i class="fas fa-chart-pie opacity-70"></i> Tổng Quan</a>
                                            <a href="/reports/monthly/2026/02/cn-hcm.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN HCM</a>
                                            <a href="/reports/monthly/2026/02/cn-mbc.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN MBC</a>
                                            <a href="/reports/monthly/2026/02/cn-dnb.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN DNB</a>
                                            <a href="/reports/monthly/2026/02/cn-mtg.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN MTG</a>
                                            <a href="/reports/monthly/2026/02/cn-mty.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN MTY</a>
                                            <a href="/reports/monthly/2026/02/cn-tnn.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN TNN</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="relative group/cat px-2 mt-2">
                            <a href="#" class="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
                                <div class="flex items-center gap-2.5 text-sm font-bold text-teal-600">
                                    <div class="w-7 h-7 rounded bg-teal-50 text-teal-600 flex items-center justify-center"><i class="fas fa-history"></i></div>
                                    30D Lookback
                                </div>
                                <i class="fas fa-chevron-down md:hidden text-[10px] text-slate-400"></i>
                                <i class="fas fa-chevron-left hidden md:inline-block text-[10px] text-slate-400"></i>
                            </a>

                            <div class="hidden md:block static md:absolute md:top-0 md:right-full w-full md:w-56 md:mr-1 bg-slate-50 md:bg-white border-0 md:border border-slate-200 rounded-xl md:rounded-2xl md:shadow-[0_20px_40px_-15px_rgba(0,45,114,0.15)] md:opacity-0 md:invisible group-hover/cat:block md:group-hover/cat:opacity-100 md:group-hover/cat:visible transition-all duration-200 z-50 py-2 md:py-3 mt-1 md:mt-0">
                                <div class="px-4 pb-2 mb-2 border-b border-slate-200 md:border-slate-100 hidden md:block">
                                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Năm 2026</span>
                                </div>

                                <div class="relative group/month px-2">
                                    <a href="#" class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-100 md:hover:bg-slate-50 transition-colors">
                                        <span class="text-xs font-bold text-slate-700">Tháng 01/2026</span>
                                        <i class="fas fa-chevron-down md:hidden text-[10px] text-slate-400"></i>
                                        <i class="fas fa-chevron-left hidden md:inline-block text-[10px] text-slate-400"></i>
                                    </a>
                                    <div class="hidden md:block static md:absolute md:top-0 md:right-full w-full md:w-48 md:mr-1 bg-white border-0 md:border border-slate-200 rounded-xl md:rounded-2xl md:shadow-[0_20px_40px_-15px_rgba(0,45,114,0.15)] md:opacity-0 md:invisible group-hover/month:block md:group-hover/month:opacity-100 md:group-hover/month:visible transition-all duration-200 z-50 py-1 md:py-2 mt-1 md:mt-0">
                                        <div class="px-2 space-y-0.5">
                                            <a href="/reports/30d-lookback/2026/01/tong-quan.html" class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-teal-50 text-xs font-bold text-teal-700"><i class="fas fa-chart-pie opacity-70"></i> Tổng Quan</a>
                                            <a href="/reports/30d-lookback/2026/01/cn-hcm.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN HCM</a>
                                            <a href="/reports/30d-lookback/2026/01/cn-mbc.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN MBC</a>
                                            <a href="/reports/30d-lookback/2026/01/cn-dnb.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN DNB</a>
                                            <a href="/reports/30d-lookback/2026/01/cn-mtg.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN MTG</a>
                                            <a href="/reports/30d-lookback/2026/01/cn-mty.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN MTY</a>
                                            <a href="/reports/30d-lookback/2026/01/cn-tnn.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN TNN</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="relative group/month px-2 mt-1">
                                    <a href="#" class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-100 md:hover:bg-slate-50 transition-colors">
                                        <span class="text-xs font-bold text-slate-700">Tháng 02/2026</span>
                                        <i class="fas fa-chevron-down md:hidden text-[10px] text-slate-400"></i>
                                        <i class="fas fa-chevron-left hidden md:inline-block text-[10px] text-slate-400"></i>
                                    </a>
                                    <div class="hidden md:block static md:absolute md:top-0 md:right-full w-full md:w-48 md:mr-1 bg-white border-0 md:border border-slate-200 rounded-xl md:rounded-2xl md:shadow-[0_20px_40px_-15px_rgba(0,45,114,0.15)] md:opacity-0 md:invisible group-hover/month:block md:group-hover/month:opacity-100 md:group-hover/month:visible transition-all duration-200 z-50 py-1 md:py-2 mt-1 md:mt-0">
                                        <div class="px-2 space-y-0.5">
                                            <a href="/reports/30d-lookback/2026/02/tong-quan.html" class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-teal-50 text-xs font-bold text-teal-700"><i class="fas fa-chart-pie opacity-70"></i> Tổng Quan</a>
                                            <a href="/reports/30d-lookback/2026/02/cn-hcm.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN HCM</a>
                                            <a href="/reports/30d-lookback/2026/02/cn-mbc.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN MBC</a>
                                            <a href="/reports/30d-lookback/2026/02/cn-dnb.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN DNB</a>
                                            <a href="/reports/30d-lookback/2026/02/cn-mtg.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN MTG</a>
                                            <a href="/reports/30d-lookback/2026/02/cn-mty.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN MTY</a>
                                            <a href="/reports/30d-lookback/2026/02/cn-tnn.html" class="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs text-slate-600 font-medium">CN TNN</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="relative group/cat px-2 mt-2">
                            <a href="#" class="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
                                <div class="flex items-center gap-2.5 text-sm font-bold text-purple-600">
                                    <div class="w-7 h-7 rounded bg-purple-50 text-purple-600 flex items-center justify-center"><i class="fas fa-chart-line"></i></div>
                                    Quarterly
                                </div>
                                <i class="fas fa-chevron-down md:hidden text-[10px] text-slate-400"></i>
                                <i class="fas fa-chevron-left hidden md:inline-block text-[10px] text-slate-400"></i>
                            </a>
                            <div class="hidden md:block static md:absolute md:top-0 md:right-full w-full md:w-48 md:mr-1 bg-slate-50 md:bg-white border-0 md:border border-slate-200 rounded-xl md:rounded-2xl md:shadow-[0_20px_40px_-15px_rgba(0,45,114,0.15)] md:opacity-0 md:invisible group-hover/cat:block md:group-hover/cat:opacity-100 md:group-hover/cat:visible transition-all duration-200 z-50 py-2 md:py-3 mt-1 md:mt-0">
                                <div class="px-4"><span class="block text-xs text-slate-400 italic">Chưa có dữ liệu</span></div>
                            </div>
                        </div>

                        <div class="relative group/cat px-2 mt-2">
                            <a href="#" class="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
                                <div class="flex items-center gap-2.5 text-sm font-bold text-red-600">
                                    <div class="w-7 h-7 rounded bg-red-50 text-red-600 flex items-center justify-center"><i class="fas fa-bullseye"></i></div>
                                    Campaigns
                                </div>
                                <i class="fas fa-chevron-down md:hidden text-[10px] text-slate-400"></i>
                                <i class="fas fa-chevron-left hidden md:inline-block text-[10px] text-slate-400"></i>
                            </a>
                            <div class="hidden md:block static md:absolute md:top-0 md:right-full w-full md:w-48 md:mr-1 bg-slate-50 md:bg-white border-0 md:border border-slate-200 rounded-xl md:rounded-2xl md:shadow-[0_20px_40px_-15px_rgba(0,45,114,0.15)] md:opacity-0 md:invisible group-hover/cat:block md:group-hover/cat:opacity-100 md:group-hover/cat:visible transition-all duration-200 z-50 py-2 md:py-3 mt-1 md:mt-0">
                                <div class="px-4"><span class="block text-xs text-slate-400 italic">Chưa có dữ liệu</span></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
`;

document.addEventListener("DOMContentLoaded", () => {
    const globalNavContainer = document.getElementById('global-nav');
    if (globalNavContainer) {
        globalNavContainer.innerHTML = navHTML;

        // DYNAMIC LOGIC: Hide Playbook links on Report pages
        const currentPath = window.location.pathname;
        const isHomepage = currentPath === '/' || currentPath.endsWith('index.html') || currentPath === '';

        if (!isHomepage) {
            const centerLinks = document.getElementById('playbook-center-links');
            if (centerLinks) {
                centerLinks.style.display = 'none';
            }
        }
    }
});
