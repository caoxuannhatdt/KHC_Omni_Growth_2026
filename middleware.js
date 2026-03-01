export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};

export default function middleware(request) {
  const authorizationHeader = request.headers.get('authorization');

  if (authorizationHeader) {
    const basicAuth = authorizationHeader.split(' ')[1];
    const [user, password] = atob(basicAuth).split(':');

    // Tài khoản: pnj / Mật khẩu: omni2026
    if (user === 'pnj' && password === 'omni2026') {
      return; // Cho phép đi tiếp
    }
  }

  return new Response('Yêu cầu đăng nhập hệ thống Omni-Growth', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Omni-Growth Secure Workspace"',
    },
  });
}
