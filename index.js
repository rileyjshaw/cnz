export default (...a)=>a.flatMap(x=>x?.constructor==Object?Object.keys(x).filter(k=>x[k]):x).filter(s=>s&&s.trim).join(' ')
