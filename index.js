let O=Object
export default (...a)=>a.flatMap(x=>x&&O.getPrototypeOf(x)===O.prototype?O.entries(x).map(([k,v])=>v&&k):x).filter(s=>s&&s.trim).join(' ')
