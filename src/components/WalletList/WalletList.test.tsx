import { render, screen } from '@testing-library/react';
import WalletList from '../WalletList';

describe('WalletList Component', () => {
  it('renders the label and amount correctly', () => {
    render(<WalletList label="Ledger Balance" amount={1000} />);

    expect(screen.getByText('Ledger Balance')).toBeInTheDocument();

    expect(screen.getByText('USD 1000.00')).toBeInTheDocument();
  });

  it('renders the Info icon', () => {
    render(<WalletList label="Ledger Balance" amount={1000} />);

    const infoIcon = screen.getByTestId('info-icon');
    expect(infoIcon).toBeInTheDocument();
    expect(infoIcon).toHaveClass('w-5 h-5');
  });

  it('applies the correct styles', () => {
    render(<WalletList label="Ledger Balance" amount={1000} />);

    const label = screen.getByText('Ledger Balance');
    expect(label).toHaveClass('text-sm font-medium text-gray-400');

    const amount = screen.getByText('USD 1000.00');
    expect(amount).toHaveClass('font-bold text-[28px]');
  });

  it('handles zero amount correctly', () => {
    render(<WalletList label="Pending Payout" amount={0} />);

    expect(screen.getByText('Pending Payout')).toBeInTheDocument();
    expect(screen.getByText('USD 0.00')).toBeInTheDocument();
  });
});
