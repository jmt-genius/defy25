'use client';

import { Button } from '@/components/ui/button';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { CandlestickChart } from 'lucide-react';

export function NavBar() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <CandlestickChart className="h-6 w-6" />
          <span className="text-xl font-bold">DeFi Options</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          {isConnected ? (
            <>
              <span className="text-sm">
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </span>
              <Button
                variant="outline"
                onClick={() => disconnect()}
              >
                Disconnect
              </Button>
            </>
          ) : (
            <Button
              onClick={() => connect({ connector: injected() })}
            >
              Connect Wallet
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}