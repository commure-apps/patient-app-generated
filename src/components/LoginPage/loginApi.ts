
export interface LoginPayload {
  username: string;
  password: string;
  remember: boolean;
}

export interface LoginConfig {
  apiUrl: string;
  redirectPath: string;
}

export async function loginRequest(data: LoginPayload, config: LoginConfig) {
  try {
    const res = await fetch(config.apiUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
}
