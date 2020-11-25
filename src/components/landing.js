import React from 'react'
import Header from './header'
import Top from './top'
import Feature from './feature'
import Testimonial from './testimonial'
import CustomFooter from './footer'

export default function Landing() {
    return (
        <div>
            <Top/>
            <Header/>
            <div className="who-we-are">
                <h4 className="center-align"> Who We Are</h4>
                <div className="who-we-are-section">
                    <p> lorem40 heur ngberjg ndgbjerg nfgbjwegw fnwbeh
                         gngbee gej ertjherj gergnrje i gie ier jdsua b iafnif fhdfia sduv a hdsu fsjk zvlm ozck asdhf vss sf sufwif syfwei zfuhweyg sfwey s uwfywif z s iws s bisfu ahdi d gai a. fahdga <br/> afwif wfio aefo wegho weuh sfytweyg sdfuhwifus f sufwo  so  skfjiof hsofoi fh sfhowf  sofos  ojh k   emryn3 yiyi eryjer stjwo js wjiewth thuwrtgurt skms kssss sjdb sgtw  hust k t  stgsgisf sgi rg wthuh ts srthiut sg   ut yt tuitg i utfusdiffg  yftuigsuyd y tfsyx x fs fs rzdusfi jd u

                    </p>
                    <img src="/team.png" alt="team"></img>

                </div>

            </div>
            <div id="feature"> 
                <h4 className="center-align"> Our Awesome Feature</h4>
                <Feature/>
            </div>
            <div id="testimonial">
                <h4 className="center-align"> Testimonials</h4>
                <Testimonial/>
            </div>
            <div>
                <CustomFooter/>
            </div>
        </div>
    )
}
