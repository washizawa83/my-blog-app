'use client'

import { useEffect } from 'react'
import tocbot from 'tocbot'

function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.post',
      headingSelector: 'h1, h2, h3',
    })

    return () => tocbot.destroy()
  }, [])

  return (
    <div className="sticky top-0 pt-[121px] ml-8">
      <h2 className="text-lg text-slate-300 font-semibold border-b-2 border-zinc-500">
        目次
      </h2>
      <div className="toc py-4"></div>
    </div>
  )
}

export default Toc
