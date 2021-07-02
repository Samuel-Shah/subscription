import React, { useState, useEffect } from 'react';
import './landing.css'


function LandingPage() {
    //main carousel 
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        for (var i = 0; i < document.getElementsByClassName('subscription-section-bottle-wrapper-container').length; i++) {
            document.getElementsByClassName('subscription-section-bottle-wrapper-container')[i].style.display = "none";
        }
        document.getElementsByClassName('subscription-section-bottle-wrapper-container')[current].style.display = "block";
    }, [current])

    function mainCarouselNext() {
        if (current < 5) {
            document.getElementsByClassName('subscription-section-bottle-wrapper-container')[current].style.display = "none";
            document.getElementsByClassName('subscription-section-bottle-wrapper-container')[current + 1].style.display = "block";
            setCurrent(current + 1)
            console.log(current);
        }
        else {
            document.getElementsByClassName('subscription-section-bottle-wrapper-container')[current].style.display = "none";
            document.getElementsByClassName('subscription-section-bottle-wrapper-container')[0].style.display = "block";
            setCurrent(0);

        }
    }

    function mainCarouselPrev() {
        if (current > 0) {
            document.getElementsByClassName('subscription-section-bottle-wrapper-container')[current].style.display = "none";
            document.getElementsByClassName('subscription-section-bottle-wrapper-container')[current - 1].style.display = "block";
            setCurrent(current - 1)
            console.log(current);
        }
        else {
            document.getElementsByClassName('subscription-section-bottle-wrapper-container')[current].style.display = "none";
            document.getElementsByClassName('subscription-section-bottle-wrapper-container')[5].style.display = "block";
            setCurrent(5);

        }
    }
    //links
  const [selected, setselected] = useState(0)

  useEffect(() => {
    for (var i = 0; i < document.getElementsByClassName('subscription-section-carousel-links').length; i++) {
      document.getElementsByClassName('subscription-section-carousel-links')[i].style.textDecoration = "none";
    }
    document.getElementsByClassName('subscription-section-carousel-links')[selected].style.textDecoration = "underline";
  }, [selected])

  function linksNext() {
    if (current < 5) {
      document.getElementsByClassName('subscription-section-carousel-links')[selected].style.textDecoration = "none";
      document.getElementsByClassName('subscription-section-carousel-links')[selected + 1].style.textDecoration = "underline";
      setselected(selected + 1)
      console.log(selected);
    }
    else {
      document.getElementsByClassName('subscription-section-carousel-links')[selected].style.textDecoration = "none";
      document.getElementsByClassName('subscription-section-carousel-links')[0].style.textDecoration = "underline";
      setselected(0);

    }
  }

  function linksPrev() {
    if (current > 0) {
      document.getElementsByClassName('subscription-section-carousel-links')[selected].style.textDecoration = "none";
      document.getElementsByClassName('subscription-section-carousel-links')[selected - 1].style.textDecoration = "underline";
      setselected(selected - 1)
      console.log(selected);
    }
    else {
      document.getElementsByClassName('subscription-section-carousel-links')[selected].style.textDecoration = "none";
      document.getElementsByClassName('subscription-section-carousel-links')[5].style.textDecoration = "underline";
      setselected(5);

    }
  }

    return (
        <div className="subscription-section">
            <div className="subscription-section-heading-wrapper">
                <span className="subscription-section-heading">
                    Subscriptions
                </span>
            </div>
            <div className="subscription-section-carousel-links-wrapper">
                <a className="subscription-section-carousel-links" href="#" onClick={e => { e.preventDefault(); setCurrent(0); setselected(0)}}>Meal Replacement</a>
                <a className="subscription-section-carousel-links" href="#" onClick={e => { e.preventDefault(); setCurrent(1); setselected(1)}}>Diabetes</a>
                <a className="subscription-section-carousel-links" href="#" onClick={e => { e.preventDefault(); setCurrent(2); setselected(2) }}>Immunity</a>
                <a className="subscription-section-carousel-links" href="#" onClick={e => { e.preventDefault(); setCurrent(3); setselected(3) }}>ABC</a>
                <a className="subscription-section-carousel-links" href="#" onClick={e => { e.preventDefault(); setCurrent(4); setselected(4) }}>Kids</a>
                <a className="subscription-section-carousel-links" href="#" onClick={e => { e.preventDefault(); setCurrent(5); setselected(5) }}>Maternity</a>
            </div>
            <div className="subscription-section-prev-icon-wrapper">
                <img className="subscription-section-prev-icon" src="/Previous.svg" onClick={e => { e.preventDefault(); mainCarouselPrev(); linksPrev()  }} />
            </div>
            <div className="subscription-section-next-icon-wrapper">
                <img className="subscription-section-next-icon" src="/Next.svg" onClick={e => { e.preventDefault(); mainCarouselNext();linksNext() }} />
            </div>
            <div className="subscription-section-bottle-wrapper-container">
                <div className="subscription-section-carousel-text">
                    A combination of Immunity subscription package and Moksha’s range of cleansers for wholesome body-care.
                </div>
                <div className="subscription-section-bottle-wrapper-heading">
                    Meal Replacement contains :
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Meal replacement/caught out.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Caught out</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Meal replacement/fuel up.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Fuel up</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Meal replacement/magic bullet.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Magic Bullet</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Meal replacement/lean machine.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Lean Machine</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Meal replacement/propack.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Propack</div>
                </div>
            </div>
            <div className="subscription-section-bottle-wrapper-container">
                <div className="subscription-section-carousel-text">
                    A Diabetic patient-friendly range of cold-pressed juices that are low on natural fruit-derived sugars that regulate blood pressure and reduce bad cholesterol.
                </div>
                <div className="subscription-section-bottle-wrapper-heading">
                    Diabetes contains :
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Diabetes/immunity.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Immunity</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Diabetes/koko cool.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Koko cool</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Diabetes/clarity.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text"> Clarity</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Diabetes/coco mint.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Cocomint</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Diabetes/calmative.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Calmative</div>
                </div>
            </div>
            <div className="subscription-section-bottle-wrapper-container">
                <div className="subscription-section-carousel-text">
                    A nutritious set of Cold-pressed juice variants that flush out toxins and boost your immunity
                </div>
                <div className="subscription-section-bottle-wrapper-heading">
                    Immunity contains :
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Immunity/immunity.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Immunity</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Immunity/ABC.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">ABC </div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Immunity/koko cool.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Koko cool</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Immunity/heartbeet.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Heart beet</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Immunity/clarity.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Clarity</div>
                </div>
            </div>
            <div className="subscription-section-bottle-wrapper-container">
                <div className="subscription-section-carousel-text">
                    Goodness of Apple, Beetroot and Carrot, combined to give a healthy glow to your skin and improve internal functions.
                </div>
                <div className="subscription-section-bottle-wrapper-heading">
                    ABC contains :
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/ABC/ABC.png" className="subscription-section-bottle-img" />
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/ABC/ABC.png" className="subscription-section-bottle-img" />
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/ABC/ABC.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">26 bottles of ABC juice a month</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/ABC/ABC.png" className="subscription-section-bottle-img" />
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/ABC/ABC.png" className="subscription-section-bottle-img" />
                </div>
            </div>
            <div className="subscription-section-bottle-wrapper-container">
                <div className="subscription-section-carousel-text">
                    A delicious solution to an improved vision, bone health and overall nourishment of your child.
                </div>
                <div className="subscription-section-bottle-wrapper-heading">
                    Kids contains :
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Kids/pineapple.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Pineapple</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Kids/clarity.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Clarity</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Kids/osteon.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Osteon</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Kids/immunity.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Immunity</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Kids/taper.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Taper</div>
                </div>
            </div>
            <div className="subscription-section-bottle-wrapper-container">
                <div className="subscription-section-carousel-text">
                    The maternity pack is made especially for an expecting mother and consists of variants that regulate blood pressure, soothes acidity and keeps infections at bay.

                </div>
                <div className="subscription-section-bottle-wrapper-heading">
                    Maternity contains :
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Maternity/heartbeet.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Heart beet</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Maternity/ABC.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">ABC</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Maternity/comfort.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Comfort</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Maternity/protect.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Protect</div>
                </div>
                <div className="subscription-section-bottle-wrapper">
                    <img src="/images/Bottle png/Maternity/lean machine.png" className="subscription-section-bottle-img" />
                    <div className="subscription-section-bottle-text">Lean machine</div>
                </div>
            </div>
            <div className="subscription-section-icon-wrapper-container">
                <div className="subscription-section-icon-wrapper">
                    <img src="/images/juices.png" className="subscription-section-icon" />
                    <div className="subscription-section-icon-text">26 Bottles/month - 250 ml each. <br/>Delivered every alternate day</div>
                </div>
                <div className="subscription-section-icon-wrapper">
                    <img src="/images/time drink.png" className="subscription-section-icon" />
                    <div className="subscription-section-icon-text">One Bottle per day<br /> consumption within 3 days</div>

                </div>
                <div className="subscription-section-icon-wrapper">
                    <img src="/images/fridge.png" className="subscription-section-icon" />
                    <div className="subscription-section-icon-text">Refrigerate when delivered.</div>

                </div>
                <div className="subscription-section-icon-wrapper">
                    <img src="/images/delivery.png" className="subscription-section-icon" />
                    <div className="subscription-section-icon-text">Delivered between 6 a.m. to 9 a.m.</div>
                </div>
            </div>
            <div className="cta-button-wrapper">
                <button className="cta-button">Subscribe Now</button>
            </div>
        </div>
    );
}

export default LandingPage;