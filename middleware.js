import { next } from '@vercel/edge';

export const config = {
  // Chặn tất cả, TRỪ các file có đuôi mở rộng như .png, .jpg, .css, .js
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.css).*)',
  ],
};

export default function middleware(req) {
  const authHeader = req.headers.get('authorization');

  if (authHeader) {
    const authValue = authHeader.split(' ')[1];
    // Giải mã từ Base64
    const [user, pwd] = atob(authValue).split(':');

    // NHẬT SỬA USER VÀ PASSWORD Ở ĐÂY
    if (user === 'omnigrowth' && pwd === 'Niemtin&Phongcach') {
      return next();
    }
  }

  // Nếu chưa đăng nhập hoặc sai, hiện hộp thoại yêu cầu User/Pass
  return new Response('Auth Required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Vui lòng nhập tài khoản để xem báo cáo hoặc liên hệ với Omni-Growth trong trường hợp cần hỗ trợ"',
    },
  });
}
