export const appTitle = "LikeLive";
export const contactInfo = "example@example.com | 123-456-7890";
export const localUri = "http://localhost:8080";
const dev = {
  apiBaseUrl: "http://localhost:8080", // ローカル開発環境のAPIベースURL
};

const prod = {
  apiBaseUrl: "https://api.production-domain.com", // 本番環境のAPIベースURL
};

const config = process.env.NODE_ENV === "development" ? dev : prod;

export default config;
