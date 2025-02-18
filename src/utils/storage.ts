const TOKEN_KEY = "token"
export const storage = {
  getToken: () => {
    localStorage.getItem(TOKEN_KEY);
  },
  setToken: (token: string) => {
    localStorage.setItem(TOKEN_KEY, token );
  },
  removeItem: () => {
    localStorage.removeItem(TOKEN_KEY);
  }
}