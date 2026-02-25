export const config = {
  matcher: '/:path*',
};

export default function middleware(req) {
  const authHeader = req.headers.get('authorization');

  if (authHeader) {
    const authValue = authHeader.split(' ')[1];
    // Giải mã Base64 sang chuỗi user:pass
    const decoded = atob(authValue);
    const [user, pwd] = decoded.split(':');

    // Nhập User và Pass của Nhật ở đây
    if (user === 'omnigrowth' && pwd === 'growth2026') {
      // Cho phép đi tiếp nếu đúng
      return new Response(null, {
        headers: { 'x-middleware-next': '1' },
      });
    }
  }

  // Nếu sai hoặc chưa nhập, hiện hộp thoại yêu cầu tài khoản
  return new Response('Vui lòng đăng nhập để truy cập.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Vui lòng đăng nhập để xem báo cáo hoặc liên hệ với Omni-Growth team trong trường hợp cần hỗ trợ"',
    },
  });
}
