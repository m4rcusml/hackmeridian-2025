import React, { useState } from "react";
import { connectWallet } from "../wallet";
const Wallet: React.FC = () => {
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const handleConnect = async () => {
    setError(null);
    const key = await connectWallet();
    if (key) {
      setPublicKey(key);
    } else {
      setError("Falha ao conectar à carteira.");
    }
  };
  return (
    <div className="m-8 font-sans">
      <h2 className="text-xl font-bold mb-4">Carteira Freighter</h2>
      {publicKey ? (
        <div>
          <p className="font-semibold text-green-700 mb-2">
            Carteira conectada com sucesso!
          </p>
          <p>
            Public Key:{" "}
            <code className="bg-gray-100 p-1 rounded text-sm">{publicKey}</code>
          </p>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          className="px-4 py-3 text-base font-medium bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Conectar Carteira
        </button>
      )}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
};

export default Wallet;
