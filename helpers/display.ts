import BigNumber from "bignumber.js";

export function ellipseAddress(
  address: string | null | undefined,
  width = 6
): string {
  if (!address) {
    return "";
  }

  if (width === -1) {
    return address;
  }

  return `${address.slice(0, width)}...${address.slice(-width)}`;
}

export const displayBalance = (
  balance: any | undefined,
  decimals?: number,
  fixed?: number
) => {
  if (!balance || balance === "NaN") {
    return new BigNumber("0").toFormat();
  }

  decimals = decimals ? decimals : 18;
  fixed = fixed ? fixed : 3;
  // return new BigNumber(balance).dividedBy(new BigNumber('10').pow(decimals)).toFixed(fixed, BigNumber.ROUND_DOWN)
  return new BigNumber(balance)
    .dividedBy(new BigNumber("10").pow(decimals))
    .toFormat(fixed);
};
export const trimBalance = (balance: string, fixed?: number) => {
  if (!balance || balance === "NaN") {
    return new BigNumber("0").toFormat(2);
  }
  if (!fixed) {
    fixed = 4;
  }
  return new BigNumber(balance).toFormat(fixed);
};

 