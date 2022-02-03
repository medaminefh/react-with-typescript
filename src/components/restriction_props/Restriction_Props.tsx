type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type Zero = RandomNumberType & {
  isZero: boolean;
  isNegative?: never;
  isPositive?: never;
};

type RandomNumberProps = NegativeNumber | PositiveNumber | Zero;

function Restriction_Props({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) {
  return (
    <div>
      {value} {isNegative && "Negative"} {isPositive && "Positive"}{" "}
      {isZero && "Zero"}{" "}
    </div>
  );
}

export default Restriction_Props;
