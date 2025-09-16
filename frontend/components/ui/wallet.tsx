"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { isConnected, requestAccess, getAddress} from "@stellar/freighter-api";

import { Button } from "@/components/ui/button"; // ajuste se necessário
import { Wallet } from "lucide-react";

export default function WalletConnectButton() {
  const [publicKey, setPublicKey] = useState<string | null>(null);

  useEffect(() => {
    isConnected()
      .then(async ({ isConnected }) => {
        if (isConnected) {
          const { address } = await getAddress();
          if (address) setPublicKey(address);
        }
      })
      .catch(console.error);
  }, []);

  const handleConnect = async () => {
    try {
      const access = await requestAccess();
      if (access.address) {
        setPublicKey(access.address);
      } else if (access.error) {
        console.error("Erro ao conectar Freighter:", access.error);
      }
    } catch (error) {
      console.error("Erro inesperado ao conectar Freighter:", error);
    }
  };

  const handleDisconnect = () => {
    // A Freighter API não implementa desconexão explícita, então só limpamos localmente
    setPublicKey(null);
  };

  return publicKey ? (
    <Button variant="outline" size="sm" onClick={handleDisconnect}>
      <Wallet className="h-4 w-4 mr-2" />
      {publicKey.slice(0, 5)}...{publicKey.slice(-5)}
    </Button>
  ) : (
    <Button variant="outline" size="sm" onClick={handleConnect} asChild>
      <Link href="/carteira" className="flex items-center">
        <Wallet className="h-4 w-4 mr-2" />
        Carteira
      </Link>
    </Button>
  );
}
