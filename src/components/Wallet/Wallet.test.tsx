import { render, screen } from '@testing-library/react';
import Wallet from '../Wallet';

describe('Wallet Component', () => {
  it('renders the available balance correctly', () => {
    render(<Wallet />);

    expect(screen.getByText('Available Balance')).toBeInTheDocument();

    expect(screen.getByText('USD 750.56')).toBeInTheDocument();
  });

  it('renders the Withdraw button', () => {
    render(<Wallet />);

    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Withdraw');
    expect(button).toHaveClass('w-[180px] h-fit text-base font-semibold');
  });

  it('renders the TransactionGraph component', () => {
    render(<Wallet />);

    expect(screen.getByTestId('transaction-graph')).toBeInTheDocument();
    expect(screen.getByTestId('transaction-graph')).toHaveTextContent('Transaction Graph');
  });

  it('renders the WalletList components with correct data', () => {
    render(<Wallet />);

    expect(screen.getByText('Ledger Balance')).toBeInTheDocument();
    expect(screen.getByText('USD 1000.00')).toBeInTheDocument();

    expect(screen.getByText('Total Payout')).toBeInTheDocument();
    expect(screen.getByText('USD 500.00')).toBeInTheDocument();

    expect(screen.getByText('Total Revenue')).toBeInTheDocument();
    expect(screen.getByText('USD 2000.00')).toBeInTheDocument();

    expect(screen.getByText('Pending Payout')).toBeInTheDocument();
    expect(screen.getByText('USD 200.00')).toBeInTheDocument();
  });

  it('applies the correct grid layout', () => {
    render(<Wallet />);

    const container = screen.getByTestId('wallet-container');
    expect(container).toHaveClass('grid grid-cols-[auto_271px] gap-20 mb-20');
  });
});