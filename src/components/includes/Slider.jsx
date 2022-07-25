import React from 'react'

const sliderInfo = [
  {
    small: 'DEVELOPER',
    title: 'NEW FRONTEND',
    desc: '당신이 만들어갈 새로운 이야기<br/> 당신도 할 수 있습니다.',
    btn: {
      btn1: '자세히 보기',
      btn2: '사이트 보기'
    }
  }
]

function Slider() {
  return (
    <section id="sliderType slider__wrap nexon">
      <h2 className="ir_so">슬라이드 영역</h2>
      <div className="slider__inner">
        <div className="slider">
          <div className="slider__img">
            <div className="desc">
              <span>{sliderInfo[0].small}</span>
              <h3>{sliderInfo[0].title}</h3>
              <p>{sliderInfo[0].desc}</p>
              <div className="btn">
                <a href="/" className="white">{sliderInfo[0].btn.btn1}</a>
                <a href="/" className="black">{sliderInfo[0].btn.btn2}</a>
              </div>
            </div>
          </div>
          <div className="slider__arrow">
            <a href="/" className="left"><span className="ir_pm">이전이미지</span></a>
            <a href="/" className="right"><span className="ir_pm">다음이미지</span></a>
          </div>
          <div className="slider__dot">
            <a href="/" className="dot active"><span className="ir_pm">1</span></a>
            <a href="/" className="dot"><span className="ir_pm">2</span></a>
            <a href="/" className="dot"><span className="ir_pm">3</span></a>
            <a href="/" className="dot"><span className="ir_pm">4</span></a>
            <a href="/" className="play"><span className="ir_pm">자동플레이</span></a>
            <a href="/" className="stop"><span className="ir_pm">정지</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider