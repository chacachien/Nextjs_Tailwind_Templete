// src/utils/cookie.ts
type CookieOptions = {
  expires?: number; // days
  path?: string;
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
}

export const cookieUtils = {
  set(name: string, value: string, options: CookieOptions = {}) {
    const {
      expires = 7, // Default 7 days
      path = '/',
      secure = process.env.NODE_ENV === 'production',
      sameSite = 'Lax'
    } = options;

    const date = new Date();
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);

    const cookie = [
      `${name}=${encodeURIComponent(value)}`,
      `expires=${date.toUTCString()}`,
      `path=${path}`,
      secure ? 'secure' : '',
      `sameSite=${sameSite}`
    ].filter(Boolean).join('; ');

    document.cookie = cookie;
  },

  get(name: string): string | null {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
      }
    }
    return null;
  },

  remove(name: string) {
    this.set(name, '', { expires: -1 });
  }
};
