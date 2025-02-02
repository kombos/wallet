import BigNumber from "bignumber.js";
import { useCallback, useEffect, useRef } from "react";
import { defaultChainDenomExponent } from "../config";

export const isObjEmpty = (obj) => {
  return obj
    ? Object.keys(obj).length === 0 && obj.constructor === Object
    : true;
};

export const handleCopy = (value) => {
  navigator.clipboard.writeText(value?.toString());
};

export function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
}

export const cleanString = (str) => {
  if (str) {
    var strLower = str.toString().trim().toLowerCase();
    return strLower.replace(/\W/g, "");
  }
  return "";
};

export const shiftDecimalPlaces = (
  value,
  decimals = defaultChainDenomExponent
) => {
  if (!decimals || isNaN(Number(decimals))) {
    throw new Error("invalid decimals value for shiftDecimalPlaces");
  }

  const valueBigNumber = BigNumber(value?.toString() || 0).isNaN()
    ? BigNumber(0)
    : BigNumber(value?.toString() || 0);

  return valueBigNumber.shiftedBy(Number(decimals)).toFixed(0);
};

export const getTimeDifference = (timeStampLarge, timeStampSmall) => {
  if (BigNumber(timeStampLarge).isNaN() || BigNumber(timeStampSmall).isNaN()) {
    return "";
  }
  const differenceInSecondsBn = BigNumber(timeStampLarge)
    .minus(BigNumber(timeStampSmall))
    .absoluteValue();
  const differenceInDaysBn = differenceInSecondsBn.dividedToIntegerBy(86400);
  const differenceInDaysRemainderBn = differenceInSecondsBn.modulo(86400);
  const differenceInHoursBn =
    differenceInDaysRemainderBn.dividedToIntegerBy(3600);
  const differenceInHoursRemainderBn = differenceInDaysRemainderBn.modulo(3600);
  const differenceInMinutesBn =
    differenceInHoursRemainderBn.dividedToIntegerBy(60);

  if (differenceInDaysBn.isZero()) {
    return `${differenceInHoursBn.toString()} hours, ${differenceInMinutesBn.toString()} mins`;
  }
  return `${differenceInDaysBn.toString()} days, ${differenceInHoursBn.toString()} hours`;
};
