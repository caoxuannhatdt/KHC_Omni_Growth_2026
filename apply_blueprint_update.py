import sys

with open('d:/Automation.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx_start = text.find('                <!-- ROW 1: TS VÀNG / PLATINUM / Ý -->')
idx_end = text.find('            </div>\n        </div>\n\n    </main>')

if idx_start == -1 or idx_end == -1:
    print("Could not find markers")
    sys.exit(1)

pre = text[:idx_start]
post = text[idx_end:]

new_rows = """                <!-- ROW 1: TS VÀNG / PLATINUM / Ý -->
                <div
                    class="grid grid-cols-[220px_1fr_1fr_1fr_1.5fr_1.5fr] border-b border-slate-200 group hover:bg-slate-50 transition-colors">
                    <div
                        class="p-4 bg-white border-r border-slate-200 sticky-col flex flex-col justify-center group-hover:bg-slate-50">
                        <span class="font-bold text-sm text-yellow-700">1. TS Vàng / Platinum / Ý</span>
                        <ul class="text-xs text-slate-500 mt-2 list-disc pl-3 leading-tight space-y-1">
                            <li>BH lỗi Kỹ thuật/Nước Xi: 6 tháng.</li>
                            <li>Đánh bóng/Siêu âm: Vô thời hạn.</li>
                        </ul>
                    </div>
                    <div class="p-3 border-r border-blue-100 bg-blue-50/30">
                        <div class="bg-white border border-blue-200 p-3 rounded-lg shadow-sm h-full flex flex-col relative overflow-hidden">
                            <div class="w-1 h-full bg-blue-400 absolute left-0 top-0"></div>
                            <span class="font-bold text-sm text-blue-800">Rating VOC & E-Warranty</span>
                            <p class="text-xs text-slate-600 mt-2 dyn-content">Kích hoạt BHĐT và Dịch vụ Aftersales. Gửi
                                link Rating VOC 1-5 sao. Gửi cẩm nang bảo quản Vàng.</p>
                        </div>
                    </div>
                    <div class="p-3 border-r border-indigo-100 bg-indigo-50/30">
                        <div
                            class="bg-white border border-indigo-200 p-3 rounded-lg shadow-sm h-full flex flex-col relative overflow-hidden">
                            <div class="w-1 h-full bg-indigo-400 absolute left-0 top-0"></div>
                            <span class="font-bold text-sm text-indigo-800">Privilege Alert: Nước Xi</span>
                            <p class="text-xs text-slate-600 mt-2 dyn-active">Đặc quyền nước xi miễn phí 6 tháng đã sẵn sàng. Cố vấn trang sức mời bạn đến cửa hàng chăm sóc sản phẩm.</p>
                            <p class="text-xs text-slate-600 mt-2 dyn-risk hidden">Privilege Alert: Tặng E-voucher đặc quyền khi ghé cửa hàng bảo dưỡng hoặc trải nghiệm sản phẩm mới.</p>
                            <p class="text-xs text-slate-600 mt-2 dyn-inactive hidden">(Tính tế bảo lưu thông báo bảo dưỡng để ưu tiên trải nghiệm khi khách quan tâm trở lại)</p>
                        </div>
                    </div>
                    <div class="p-3 border-r border-rose-100 bg-rose-50/20">
                        <div
                            class="bg-white border border-rose-200 p-3 rounded-lg shadow-sm h-full flex flex-col relative overflow-hidden">
                            <div class="w-1 h-full bg-rose-400 absolute left-0 top-0"></div>
                            <span class="font-bold text-sm text-rose-800">Quyền lợi đánh bóng</span>
                            <p class="text-xs text-slate-600 mt-2 dyn-active">Hệ thống reset cycle sau khi mua mới.</p>
                            <p class="text-xs text-slate-600 mt-2 dyn-risk hidden">Gợi ý quyền lợi đánh bóng trọn đời.
                                Tư vấn chương trình Thu cũ đổi mới nâng tầm phong cách.</p>
                            <p class="text-xs text-slate-600 mt-2 dyn-inactive hidden">Tri ân bằng Voucher đặc biệt +
                                Chương trình Trade-in trợ giá 10% để đánh thức nhu cầu.</p>
                        </div>
                    </div>
                    <div class="p-3 border-r border-amber-100 bg-amber-50/30">
                        <div
                            class="bg-white border border-amber-200 p-3 rounded-lg shadow-sm h-full flex flex-col relative overflow-hidden">
                            <div class="w-1 h-full bg-amber-400 absolute left-0 top-0"></div>
                            <span class="text-sm font-bold text-amber-800">Sinh nhật Khách Hàng</span>
                            <p class="text-xs text-slate-500 mt-1 dyn-active">Gửi lời chúc mừng tinh tế và tặng E-voucher tri ân.</p>
                            <p class="text-xs text-slate-500 mt-1 dyn-risk hidden">Gửi lời chúc mừng tinh tế và tặng E-voucher tri ân.</p>
                            <p class="text-xs text-slate-500 mt-1 dyn-inactive hidden">Gửi lời chúc mừng chân thành, không kèm thông điệp bán hàng.</p>
                        </div>
                    </div>
                    <div class="p-3 bg-emerald-50/30">
                        <div
                            class="bg-white border border-emerald-200 p-3 rounded-lg shadow-sm h-full flex flex-col relative overflow-hidden">
                            <div class="w-1 h-full bg-emerald-400 absolute left-0 top-0"></div>
                            <span class="text-sm font-bold text-emerald-800">Leo Rank & Đặc quyền VIP</span>
                            <p class="text-xs text-slate-500 mt-1"><strong>Cận VIP / Level Up:</strong> Cập nhật số điểm / Chúc mừng thăng hạng.<br><strong>Giỏ hàng:</strong> Gợi ý sử dụng đặc quyền VIP để hoàn tất trải nghiệm mua sắm.</p>
                        </div>
                    </div>
                </div>

                <!-- ROW 2: TS BẠC / CHARM / DISNEY -->
                <div
                    class="grid grid-cols-[220px_1fr_1fr_1fr_1.5fr_1.5fr] border-b border-slate-200 group hover:bg-slate-50 transition-colors">
                    <div
                        class="p-4 bg-white border-r border-slate-200 sticky-col flex flex-col justify-center group-hover:bg-slate-50">
                        <span class="font-bold text-sm text-slate-600">2. TS Bạc / Charm</span>
                        <ul class="text-xs text-slate-500 mt-2 list-disc pl-3 leading-tight space-y-1">
                            <li>BH Kỹ thuật/Nước xi: 3 tháng.</li>
                            <li>VIP: BH nước xi miễn phí 12 tháng.</li>
                        </ul>
                    </div>
                    <div class="p-3 border-r border-blue-100 bg-blue-50/30">
                        <div class="bg-white border border-blue-200 p-3 rounded-lg shadow-sm h-full flex flex-col relative overflow-hidden">
                            <div class="w-1 h-full bg-blue-400 absolute left-0 top-0"></div>
                            <span class="font-bold text-sm text-blue-800">Rating VOC & Aftersales Bạc</span>
                            <p class="text-xs text-slate-600 mt-2 dyn-content">Gửi khảo sát VOC. Tư vấn cách bảo quản Bạc qua Dịch vụ Aftersales để trang sức luôn sáng bóng.</p>
                        </div>
                    </div>
                    <div class="p-3 border-r border-indigo-100 bg-indigo-50/30">
                        <div
                            class="bg-white border border-indigo-200 p-3 rounded-lg shadow-sm h-full flex flex-col relative overflow-hidden">
                            <div class="w-1 h-full bg-indigo-400 absolute left-0 top-0"></div>
                            <span class="font-bold text-sm text-indigo-800">Service Notice: Nước Xi Bạc</span>
                            <p class="text-xs text-slate-600 mt-2 dyn-active">Khách VIP: Gửi thông báo đặc quyền nước xi Bạc được gia hạn đến 12 tháng.</p>
                            <p class="text-xs text-slate-600 mt-2 dyn-risk hidden">Service Notice: Đến kỳ bảo dưỡng nước xi Bạc 3 tháng. PNJ mời bạn qua cửa hàng để trang sức luôn tỏa sáng.</p>
                            <p class="text-xs text-slate-600 mt-2 dyn-inactive hidden">(Tinh tế bảo lưu thông báo để tránh làm phiền)</p>
                        </div>
                    </div>
                    <div class="p-3 border-r border-rose-100 bg-rose-50/20">
                        <div
                            class="bg-white border border-rose-200 p-3 rounded-lg shadow-sm h-full flex flex-col relative overflow-hidden">
                            <div class="w-1 h-full bg-rose-400 absolute left-0 top-0"></div>
                            <span class="font-bold text-sm text-rose-800">Silver Shine Reminder</span>
                            <p class="text-xs text-slate-600 mt-2">Tự động nhắc lịch vệ sinh trang sức định kỳ sau 3-6 tháng (O2O Hook) để duy trì độ sáng bóng và gắn kết khách hàng.</p>
                        </div>
                    </div>
                    <div class="p-3 border-r border-amber-100 bg-amber-50/30">
                        <div
                            class="bg-white border border-amber-200 p-3 rounded-lg shadow-sm h-full flex flex-col relative overflow-hidden">
                            <div class="w-1 h-full bg-amber-400 absolute left-0 top-0"></div>
                            <span class="text-sm font-bold text-amber-800">Charm Collection Completion</span>
                            <p class="text-xs text-slate-500 mt-1">Dựa trên chủ đề hạt Charm khách đã mua, tự động gợi ý các mẫu mới để hoàn thiện bộ sưu tập và nâng tầm phong cách.</p>
                        </div>
                    </div>
                    <div class="p-3 bg-emerald-50/30">
                        <div
                            class="bg-white border border-emerald-200 p-3 rounded-lg shadow-sm h-full flex flex-col relative overflow-hidden">
                            <div class="w-1 h-full bg-emerald-400 absolute left-0 top-0"></div>
                            <span class="text-sm font-bold text-emerald-800">Silver Friendcard</span>
                            <p class="text-xs text-slate-500 mt-1">Nhắc ưu đãi đặc quyền (chiết khấu > 100k) chưa sử dụng để sẵn sàng trải nghiệm sản phẩm mới.</p>
                        </div>
                    </div>
                </div>

                <!-- ROW 3: NHẪN CƯỚI -->
                <div
                    class="grid grid-cols-[220px_1fr_1fr_1fr_1.5fr_1.5fr] border-b border-slate-200 group hover:bg-slate-50 transition-colors">
                    <div
                        class="p-4 bg-white border-r border-slate-200 sticky-col flex flex-col justify-center group-hover:bg-slate-50">
                        <span class="font-bold text-sm text-pink-700">3. Nhẫn Cưới </span>
                        <ul class="text-xs text-slate-500 mt-2 list-disc pl-3 leading-tight space-y-1">
                            <li>Đánh bóng, xi, làm mới: Miễn phí trọn đời</li>
                        </ul>
                    </div>
                    <div class="p-3 border-r border-blue-100 bg-blue-50/30">
                        <div
                            class="bg-white border border-blue-200 p-3 rounded-lg shadow-sm h-full flex flex-col relative overflow-hidden">
                            <div class="w-1 h-full bg-blue-400 absolute left-0 top-0"></div>
                            <span class="font-bold text-sm text-blue-800">Rating VOC & Khắc Tên</span>
                            <p class="text-xs text-slate-600 mt-2 dyn-content">Gửi khảo sát chất lượng dịch vụ. Gợi ý thêm đặc quyền khắc tên nhẫn miễn phí (nếu chưa trải nghiệm).</p>
                        </div>
                    </div>
                    <div class="p-3 border-r border-indigo-100 bg-indigo-50/30 flex items-center justify-center">
                        <span class="text-xs text-slate-500 italic">Duy trì cập nhật cột mốc. Không gửi thông điệp làm phiền.</span>
                    </div>
                    <div class="p-3 border-r border-rose-100 bg-rose-50/20">
                        <div
                            class="bg-white border border-rose-200 p-3 rounded-lg shadow-sm h-full flex flex-col relative overflow-hidden">
                            <div class="w-1 h-full bg-rose-400 absolute left-0 top-0"></div>
                            <span class="font-bold text-sm text-rose-800">Marriage Milestone Celebration</span>
                            <p class="text-xs text-slate-600 mt-2">Kỷ niệm 5 năm / 10 năm: Tư vấn đặc quyền thu đổi nhẫn cưới kỷ niệm, nâng cấp lên Kim cương / TS cao cấp.</p>
                        </div>
                    </div>
                    <div class="p-3 border-r border-amber-100 bg-amber-50/30">
                        <div
                            class="bg-white border border-amber-200 p-3 rounded-lg shadow-sm h-full flex flex-col relative overflow-hidden">
                            <div class="w-1 h-full bg-amber-400 absolute left-0 top-0"></div>
                            <span class="text-sm font-bold text-amber-800">Wedding Anniversary</span>
                            <p class="text-xs text-slate-500 mt-1 dyn-active">Gợi ý tinh tế những mẫu trang sức ý nghĩa để dành tặng người bạn đời.</p>
                            <p class="text-xs text-slate-500 mt-1 dyn-risk hidden">Trân trọng mời đến làm mới nhẫn cưới (Miễn phí) và gửi tặng Voucher trải nghiệm BST mới.</p>
                            <p class="text-xs text-slate-500 mt-1 dyn-inactive hidden">Gửi thông điệp chúc phúc chân thành, thể hiện hình thái cố vấn tận tâm.</p>
                        </div>
                    </div>
                    <div class="p-3 bg-emerald-50/30">
                        <div
                            class="bg-white border border-emerald-200 p-3 rounded-lg shadow-sm h-full flex flex-col relative overflow-hidden">
                            <div class="w-1 h-full bg-emerald-400 absolute left-0 top-0"></div>
                            <span class="text-sm font-bold text-emerald-800">Thăng Hạng & Đặc Quyền Mới</span>
                            <p class="text-xs text-slate-500 mt-1">Thông báo hạng VIP đã đạt. Tư vấn khám phá thêm các dòng trang sức cao cấp với ưu đãi (CK 5-10%) dành cho dịp trăng mật.</p>
                        </div>
                    </div>
                </div>

                <!-- ROW 4: VÀNG MIẾNG (THE MASTERPIECE CONVERSION) -->
                <div class="grid grid-cols-[220px_1fr_1fr_1fr_1.5fr_1.5fr] group hover:bg-slate-50 transition-colors">
                    <div
                        class="p-4 bg-white border-r border-slate-200 sticky-col flex flex-col justify-center group-hover:bg-slate-50">
                        <span class="font-bold text-sm text-amber-600">4. Vàng Miếng / Nhẫn Trơn</span>
                        <ul class="text-xs text-slate-500 mt-2 list-disc pl-3 leading-tight space-y-1">
                            <li>Hành vi: Tích lũy, An toàn.</li>
                            <li><strong class="text-indigo-600">Mục tiêu: Convert -> Trang Sức</strong></li>
                        </ul>
                    </div>
                    <div class="p-3 border-r border-blue-100 bg-blue-50/30">
                        <div
                            class="bg-white border border-blue-200 p-3 rounded-lg shadow-sm h-full flex flex-col relative overflow-hidden">
                            <div class="w-1 h-full bg-blue-400 absolute left-0 top-0"></div>
                            <span class="font-bold text-sm text-blue-800">Rating VOC & Onboard Tích Lũy</span>
                            <p class="text-xs text-slate-600 mt-2 dyn-content">Khảo sát trải nghiệm giao dịch. Mời Follow OA nhận bản tin thị trường định kỳ. Tự động thông báo ZNS khi có biến động giá.</p>
                        </div>
                    </div>
                    <div class="p-3 border-r border-indigo-100 bg-indigo-50/30 flex items-center justify-center">
                        <span class="text-xs text-slate-500 italic">Duy trì cập nhật bản tin Giá Vàng từ Cố vấn Tài chính.</span>
                    </div>
                    <div class="p-3 border-r border-rose-100 bg-rose-50/20">
                        <div
                            class="bg-white border border-rose-200 p-3 rounded-lg shadow-sm h-full flex flex-col relative overflow-hidden">
                            <div class="w-1 h-full bg-rose-400 absolute left-0 top-0"></div>
                            <span class="font-bold text-sm text-rose-800">Tri ân Tích Lũy Định Kỳ</span>
                            <p class="text-xs text-slate-600 mt-2">Cảm ơn khách hàng đã chọn PNJ để tích lũy an toàn.
                                Nhắc nhở trải nghiệm thêm dịp Lễ Thần Tài sắp tới.</p>
                        </div>
                    </div>
                    <!-- THE CONVERSION ENGINE -->
                    <div class="col-span-2 p-3 bg-emerald-50/30 shadow-inner border-l border-emerald-100">
                        <div
                            class="bg-white border border-emerald-300 p-4 rounded-lg h-full flex flex-col justify-center relative overflow-hidden">
                            <div
                                class="absolute right-0 top-0 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">
                                Conversion Engine</div>
                            <span class="font-bold text-sm text-emerald-900 mb-2 mt-2">TƯ VẤN QUYỀN LỢI & NÂNG TẦM PHONG CÁCH</span>

                            <div class="space-y-3 dyn-active dyn-risk">
                                <p class="text-xs text-slate-700"><strong class="text-emerald-700">Trigger 1 - Sinh Nhật :</strong> "Nhân dịp sinh nhật, hãy trải nghiệm thiết kế trang sức mới nhất để tôn vinh vẻ đẹp của bạn!" (Kèm Voucher trải nghiệm 10%).
                                </p>
                                <p class="text-xs text-slate-700"><strong class="text-emerald-700">Trigger 2 - Portfolio Diversification Strategy:</strong> "Cố vấn PNJ gợi ý: Bạn đã có khoản tích lũy an toàn, hãy dành một phần để nâng tầm vẻ đẹp cá nhân với thiết kế Trang sức Kim cương đẳng cấp cùng đặc quyền ưu đãi dành riêng."</p>
                                <p class="text-xs text-slate-700"><strong class="text-emerald-700">Trigger 3 - Leo Rank Bằng Điểm:</strong> "Điểm tích lũy chạm mốc Thành viên VIP. Khám phá ngay chuỗi đặc quyền giới hạn dành cho tín đồ Trang sức."</p>
                            </div>
                            <p class="text-xs text-slate-500 mt-2 dyn-inactive hidden">Chỉ gửi thông báo tri ân đặc biệt hoặc tin tức thị trường ưu tú.</p>
                        </div>
                    </div>
                </div>
"""

text = pre + new_rows + "\n" + post

with open('d:/Automation.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated HTML.")
