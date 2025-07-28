import React from 'react'
type titleProps = {
    title: string;
    padding?: string;
}
function TitleComponent({title, padding} : titleProps) {
  return (
    <>
      <div className={`text-xl lg:text-[32px] font-extrabold text-black ${padding}`}>{title}</div>
    </>
  )
}

export default TitleComponent
