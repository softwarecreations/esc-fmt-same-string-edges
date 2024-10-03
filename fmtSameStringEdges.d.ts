declare module 'esc-fmt-same-string-edges' {
  function fmtSameStringEdges(
    oldS: string,
    newS: string,
    fmtSameF    : (input: string) => string,
    fmtOldDiffF : (input: string) => string,
    fmtNewDiffF?: (input: string) => string
  ): string;

  export default fmtSameStringEdges;
}
