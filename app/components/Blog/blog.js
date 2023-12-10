import React from 'react'
export default function Blog() {
  return (
    <div>

      <section className="section blog" id="blog">
        <div className="blog__container container">
          <div className="title">
            <h1 className="primary__title">OUR HOSPITAL</h1>
          </div>
          <div className="blog__center">
            <div className="blog__box">
              <div className="img__cover">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-l9uCm75MDO8i2sNkRJbeobM-aBN-zbEZQ&usqp=CAU" alt="" />
              </div>
              <div className="box__content">
                <h2>We Have Three Branches</h2>
                <a href="#">Read more</a>
              </div>
            </div>
            <div className="blog__box">
              <div className="img__cover">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/004/493/181/small/hospital-building-for-healthcare-background-illustration-with-ambulance-car-doctor-patient-nurses-and-medical-clinic-exterior-free-vector.jpg" alt="" />
              </div>
              <div className="box__content">
                <h2>We Have Three Branches</h2>
                <a href="#">Read more</a>
              </div>
            </div>
            <div className="blog__box">
              <div className="img__cover">
                <img src="https://smartbenefits.pk/wp-content/uploads/2022/09/08-1024x538.jpg" alt="" />
              </div>
              <div className="box__content">
                <h2>We Have Three Branches</h2>
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
