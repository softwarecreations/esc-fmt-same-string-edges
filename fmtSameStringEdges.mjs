'use strict';

export const fmtSameStringEdges = (oldS, newS, fmtSameF, fmtOldDiffF, fmtNewDiffF=fmtOldDiffF) => {
  if (oldS===newS) return [ fmtSameF(oldS), fmtSameF(newS) ];
  if (oldS.length===newS.length) {
    const oldA = [], newA = [];
    let start = 0, end = 0;
    do {
      while (end < oldS.length && oldS[end]===newS[end]) ++end;
      oldA.push(fmtSameF(oldS.substring(start, end)));
      newA.push(fmtSameF(newS.substring(start, end)));
      start = end;
      if (end >= oldS.length) break;
      while (end < oldS.length && oldS[end]!==newS[end]) ++end;
      oldA.push(fmtOldDiffF(oldS.substring(start, end)));
      newA.push(fmtNewDiffF(newS.substring(start, end)));
      start = end;
    } while (end < oldS.length);
    return [ oldA.join(''), newA.join('') ];
  }
  const maxLength = Math.max(oldS.length, newS.length);
  let start=-1, end=-1;
  const isOk = () => (
    (oldS.substr(0,start) + oldS.substr(start,oldS.length - end - start) + oldS.substr(oldS.length - end)) === oldS &&
    (newS.substr(0,start) + newS.substr(start,newS.length - end - start) + newS.substr(newS.length - end)) === newS
  );
  do ++start; while (start<maxLength && newS[          start   ]===oldS[            start   ] && isOk());
  do   ++end; while (  end<maxLength && newS[newS.length-end -1]===oldS[oldS.length - end -1] && isOk());
  const oldMidLen   = oldS.length - end - start;
  const newMidLen   = newS.length - end - start;
  const oldEndStart = oldS.length - end + (oldMidLen>-1?0:1), oldEndLen = oldS.length - oldEndStart;
  const newEndStart = newS.length - end + (newMidLen>-1?0:1), newEndLen = newS.length - newEndStart;
  return [
    (start===0?'':fmtSameF(oldS.substr(0,start))) + (oldMidLen===0?'':fmtOldDiffF(oldS.substr(start,oldMidLen))) + (oldEndLen===0?'':fmtSameF(oldS.substr(oldEndStart))),
    (start===0?'':fmtSameF(newS.substr(0,start))) + (newMidLen===0?'':fmtNewDiffF(newS.substr(start,newMidLen))) + (newEndLen===0?'':fmtSameF(newS.substr(newEndStart))),
  ];
};
