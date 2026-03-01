export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};

export default function middleware(request) {
  const authorizationHeader = request.headers.get('authorization');

  if (authorizationHeader) {
    const basicAuth = authorizationHeader.split(' ')[1];
    const [user, password] = atob(basicAuth).split(':');

    // Tài khoản: omnigrowth / Mật khẩu: omni2026
    if (user === 'omnigrowth' && password === 'omni2026') {
      return; // Cho phép đi tiếp
    }
  }

  return new Response('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Omni-Growth Secure Workspace"',
      'Content-Type': 'text/plain',
    },
  });
}
