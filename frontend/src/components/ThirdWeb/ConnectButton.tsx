import React from "react";
import { createWallet } from "thirdweb/wallets";
import { THIRDWEB_CLIENT } from "@/services/web3";
import { ethereum, sepolia } from "thirdweb/chains";
import { ConnectButton } from "thirdweb/react";

interface WalletConnectButtonProps {
  styles?: React.CSSProperties;
}

const WalletConnectButton: React.FC<WalletConnectButtonProps> = ({
  styles = {},
}) => {
  return (
    <ConnectButton
      client={THIRDWEB_CLIENT}
      wallets={[
        createWallet("io.metamask"),
        createWallet("com.coinbase.wallet"),
        createWallet("me.rainbow"),
      ]}
      showAllWallets={false}
      connectModal={{
        showThirdwebBranding: false,
      }}
      chains={[ethereum, sepolia]}
      connectButton={{
        label: "Connect Wallet",
        style: styles,
      }}
    />
  );
};

export default WalletConnectButton;
