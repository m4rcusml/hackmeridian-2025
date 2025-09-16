import { requestAccess } from "@stellar/freighter-api";

export async function connectWallet(): Promise<string | null> {
  try {
    const access = await requestAccess();
    if (access.error) {
      console.error("Erro ao solicitar acesso:", access.error);
      return null;
    }
    return access.address; // chave pública da carteira
  } catch (err) {
    console.error("Erro inesperado na conexão Freighter:", err);
    return null;
  }
}

export default connectWallet;