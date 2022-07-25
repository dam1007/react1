import React from 'react'

const bannerInfo = [
  {
    title: '유튜버 웹보이',
    desc: '더 다양한 강의는 유튜브를 통해 제공하고 있습니다.',
    href: 'youtube.com/c/Webstoryboy',
    small: '배너 영역01'
  }
]

function Banner() {
  return (
    <section id="bannerType" className="banner__wrap section gmarket">
      <h2 className="ir_so">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="banner__title">{bannerInfo[0].title}</h3>
        <p className="banner__desc">
          {bannerInfo[0].desc}
          <a href="/">{bannerInfo[0].href}</a>
        </p>
        <span className="banner__sub">{bannerInfo[0].small}</span>
      </div>
    </section>
  )
}

export default Banner