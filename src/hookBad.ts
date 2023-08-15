import {
  // useContext,
  // useEffect,
  useMemo,
  // useState,
  // useCallback,
  // useRef,
  // useLayoutEffect,
} from "react";

const channels: any = { a: [] };
const self = { groupId: "1", id: "2" };
export const useSomethingBad = (area: string) => {
  const [pAll, pA1, pA2, pA3, pA4] = useMemo(() => {
    let chsAll: any[] = [];
    const chsA1: any[] = [];
    const chsA2: any[] = [];
    const chsA3: any[] = [];
    const chsA4: any[] = [];
    debugger;
    //Some logic
    return [chsAll, chsA1, chsA2, chsA4, chsA3];
  }, [area, self.id, channels]);

  return {
    cAll: pAll,
    cA1: pA1,
    cA2: pA2,
    cA3: pA3,
    cA4: pA4,
  };
};

export default useSomethingBad;
