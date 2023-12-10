import React from 'react'

export default function Subscribe() {
  return (
    <div>

<section className="section newsletter" id="newsletter">
        <div className="newsletter__container container">
          <div className="title">
            <h1 className="primary__title">Contact Us</h1>
          </div>
          <div className="newsletter__center">
            <div className="newsletter__box">
              <h2 className='font-bold'>Contact Us</h2>
              <p>
                Contact us to disscuss any kind of your issue or leave a message for us
              </p>
            </div>
            <div className="newsletter__box">
              <form action="#">
                <input type="email" placeholder="Leave Us A message" />
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
