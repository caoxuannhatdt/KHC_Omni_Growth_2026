export const config = {
  matcher: '/(.*)', // Quét bảo vệ toàn bộ trang web
};

export default async function middleware(req) {
  // 1. Kiểm tra Cookie (Phiên làm việc)
  const cookie = req.headers.get('cookie') || '';
  if (cookie.includes('omni_auth=granted')) {
    // Đã đăng nhập -> cho phép vào xem báo cáo
    return new Response(null, { headers: { 'x-middleware-next': '1' } });
  }

  const url = new URL(req.url);
  let errorMessage = '';

  // 2. Xử lý khi Submit Form
  if (req.method === 'POST') {
    const body = await req.text();
    const params = new URLSearchParams(body);
    const user = params.get('username');
    const pwd = params.get('password');

    if (user === 'omnigrowth' && pwd === 'growth2026') {
      // FIX BẢO MẬT: Bỏ Max-Age. Trở thành Session Cookie (Tắt trình duyệt là mất)
      return new Response(null, {
        status: 302,
        headers: {
          'Location': url.pathname,
          'Set-Cookie': 'omni_auth=granted; Path=/; HttpOnly; SameSite=Strict', 
        },
      });
    } else {
      errorMessage = '<div class="error-msg">Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng thử lại!</div>';
    }
  }

  // 3. Giao diện Đăng nhập PNJ Brand
  const html = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Omni-Growth Workspace</title>
      <link rel="icon" href="/Icon.png" type="image/png">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background-color: #f4f6f8;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
        }
        .login-container {
          background: #ffffff;
          padding: 48px 40px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
          width: 100%;
          max-width: 360px;
          text-align: center;
        }
        .logo {
          max-width: 160px;
          margin-bottom: 32px;
        }
        .title {
          color: #003468;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .subtitle {
          color: #666;
          font-size: 14px;
          margin-bottom: 24px;
        }
        .input-group {
          margin-bottom: 16px;
          text-align: left;
        }
        .input-group input {
          width: 100%;
          padding: 14px;
          border: 1.5px solid #e1e4e8;
          border-radius: 8px;
          box-sizing: border-box;
          font-size: 14px;
          transition: border-color 0.2s;
        }
        .input-group input:focus {
          outline: none;
          border-color: #F7A800;
        }
        .error-msg {
          color: #dc3545;
          background-color: #f8d7da;
          padding: 10px;
          border-radius: 6px;
          font-size: 13px;
          margin-bottom: 16px;
        }
        .btn-submit {
          width: 100%;
          padding: 14px;
          background-color: #003468;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .btn-submit:hover {
          background-color: #002244;
        }
      </style>
    </head>
    <body>
      <div class="login-container">
        <img src="https://cdn.pnj.io/images/logo/pnj.com.vn.png" referrerpolicy="no-referrer" alt="PNJ Logo" class="logo">
        <div class="title">Omni-Growth Workspace</div>
        <div class="subtitle">Vui lòng đăng nhập để xem báo cáo</div>
        
        ${errorMessage}

        <form method="POST">
          <div class="input-group">
            <input type="text" name="username" placeholder="Tên đăng nhập" required autocomplete="off">
          </div>
          <div class="input-group">
            <input type="password" name="password" placeholder="Mật khẩu" required>
          </div>
          <button type="submit" class="btn-submit">Đăng nhập</button>
        </form>
      </div>
    </body>
    </html>
  `;

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
