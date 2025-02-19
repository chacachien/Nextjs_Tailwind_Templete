'use client'

// export default function myImageLoader({ src, width, quality }) {
//   return `http://103.140.249.118/${src}?w=${width}&q=${quality || 75}`
// }
export default function myImageLoader({
                                           src,
                                           width,
                                           quality,
                                         }: {
  src: string
  width: number
  quality?: number
}) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
  return `http://103.140.249.118/${src}?w=${width}&q=${quality || 75}`

}
