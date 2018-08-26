import React from 'react';
import { Element , Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './homePage.scss';
import CaraKerja from './cara-kerja.png';
import Screenshoot01 from './screenshoot01.jpg';
import Screenshoot02 from './screenshoot02.jpg';
import Screenshoot03 from './screenshoot03.jpg';

import DailySocial from './daily-social-logo.png';
import Inc from './inc-logo.png';
import Tia from './tia-logo.png';

import Client01 from './client-1.jpg';
import Client02 from './client-2.jpg';

export default class HomePage extends React.Component{
   
   
   constructor(props, context) {
        super(props, context);

        /**
         * init carousel options
         */
        this.state = {
            screenshoots : [
                <div key={1} className="item"><img src={Screenshoot01} alt="The Last of us" /></div>,
                <div key={2} className="item"><img src={Screenshoot02} alt="The Last of us" /></div>,
                <div key={3} className="item"><img src={Screenshoot03} alt="The Last of us" /></div>
            ],
            testimonials: [
                <div key={1} className="single-tesimonial-item"><img src={Client01} alt=""></img><div className="tesimonial-content"><p>Credibly empower team building "outside the box" thinking through performance based opportunities. Rapidiously expedite multifunctional growth.</p><h4>Robert Brown</h4></div></div>,
                <div key={2} className="single-tesimonial-item"><img src={Client02} alt=""></img><div className="tesimonial-content"><p>Credibly empower team building "outside the box" thinking through performance based opportunities. Rapidiously expedite multifunctional growth.</p><h4>Robert Brown</h4></div></div>,
                <div key={3} className="single-tesimonial-item"><img src={Client01} alt=""></img><div className="tesimonial-content"><p>Credibly empower team building "outside the box" thinking through performance based opportunities. Rapidiously expedite multifunctional growth.</p><h4>Robert Brown</h4></div></div>
            ],
            itemNo: 1,
			loop: false,
			nav: false,
			rewind: true,
			autoplay: true
        }
   }

   /**
    * when initial state username is not null, submit the form to load repos
    */
    componentDidMount(){
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    render(){
        const options = {
			items: this.state.itemNo,
			loop: this.state.loop,
			nav: this.state.nav,
			rewind: this.state.rewind,
			autoplay: this.state.autoplay
		};

		const events = {
			onDragged: function(event) { console.log('onDragged: ' + event.type); },
			onChanged: function(event) { console.log('onChanged: ' + event.type); },
			onTranslate: function(event) { console.log('onTranslate: ' + event.type); }
		};

        return(
        <div>
            <Element name="feature" id="feature">
                <div className={["feature-hero", "banner-bg"].join(' ')}>
                    <div className= {["container", "m-t-100"].join(' ')}> 
                        <div className= {["columns", "m-t-100"].join(' ')}> 
                            <div className="column">
                                <div className="hero-text">
                                    <h2>
                                        Jualan Online ? 
                                        <br/>
                                        Berbagai Marketplace?
                                    </h2>
                                    <h3>
                                        Coba
                                        <span>Jubelio</span>    
                                    </h3>
                                    <p>
                                    Kontrol bisnis anda dari satu tempat!
                                    </p>
                                    <a className={["default-theme-btn", "hero-btn"].join(' ')}>
                                        Free Trial
                                    </a>
                                </div>
                            </div>
                            <div className="column">
                                <div className="hero-img">
                                    <img src="https://i.ytimg.com/vi_webp/bYKgLp5SeSg/sddefault.webp" alt="banner"></img>
                                    <a className= {["hero-popup", "mfp-iframe"].join(' ')} href="https://www.youtube.com/embed/bYKgLp5SeSg?autoplay=0&rel=0&modestbranding=1">
                                        <i className="fas fa-play "></i>
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className={["feature-items",  "section-padding"].join(' ')}>
                    <div className={["container", "text-center"].join(' ')}>
                        <div className="columns">
                            <div className="column">
                                <div className="single-feature-item">
                                    <i className={["far", "fa-lightbulb"].join(' ')}></i>
                                    <h3>Responsive Design</h3>
                                    <p>Distinctively re-engineer emerging interfaces vis-a-vis clicks-and-mortar schemas, Professionally.</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="single-feature-item">
                                    <i className={["fas", "fa-briefcase"].join(' ')}></i>
                                    <h3>Mudah Digunakan</h3>
                                    <p>Distinctively re-engineer emerging interfaces vis-a-vis clicks-and-mortar schemas, Professionally.</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="single-feature-item">
                                    <i className={["fas", "fa-user-secret"].join(' ')}></i>
                                    <h3>Keamanan Data</h3>
                                    <p>Distinctively re-engineer emerging interfaces vis-a-vis clicks-and-mortar schemas, Professionally.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={["how-it-work", "dark-bg",  "section-padding"].join(' ')}>
                    <div className="columns">
                        <div className="column">
                            <div className="m-l-100">
                                <h2>
                                    Cara Kerja Jubelio
                                </h2>
                                <h3>
                                Jubelio menggabungkan semua operasional Anda (offline to online) di satu platform.
                                </h3>
                                <p>
                                Terintegrasi dari Anda mulai membeli barang, me-listing ke toko online dan toko fisik Anda, memproses pesanan, pengiriman, sampai pencatatannya ke akunting.
                                </p>
                                <strong>Semua di dalam satu sistem.</strong>
                            </div>
                        </div>
                        <div className="column">
                            <img src= {CaraKerja} alt="cara-kerja" className="img-cara-kerja"></img>
                        </div>
                    </div>
                </div>
            </Element>
            <Element name="screenshoot" id="screenshoot"  className={["section-padding", "white-bg"].join(' ')}>
                <div className="container">
                    <div className="row">
                        <div className="title">
                            <div className="section-title">
                                 <h2>Fiture Andalan Kami</h2>
                                 <p>Reprehenderit nemo quod tempore doloribus ratione distinctio quis quidem vitae sunt reiciendis, molestias omnis soluta</p>
                            </div>
                        </div>
                    </div>
                    <OwlCarousel
                        ref="car"
                        options={options}
                        events={events}
                    >
                        {this.state.screenshoots}
                    </OwlCarousel>
                </div>
            </Element>
            <Element name="pricing" id="pricing" className={["section-padding", "dark-bg"].join(' ')}>
                <div className="section-title">
                     <h2>Daftar Harga Layanan</h2>
                     <p>Reprehenderit nemo quod tempore doloribus ratione distinctio quis quidem vitae sunt reiciendis, molestias omnis soluta</p>
                </div>
                <div className={["container", "text-center"].join(' ')}>
                    <div className="pricle-box-area">
                    <div className="row">
                        <div className="columns">
                            <div className="column">
                                <div className="single-price-box">
                                    <h4>free</h4>
                                    <h2>$0.00</h2>
                                    <ul className="list-unstyled">
                                        <li>1 Limited active user</li>
                                        <li>1gb Hosting</li>
                                        <li>10 Sub Domain</li>
                                        <li>15 Email</li>
                                        <li>Unlimited Database</li>
                                        <li>First Year Free</li>
                                        <li>SSD Hosting</li>
                                        <li>No Hidden Charge</li>
                                    </ul>
                                    <a href="" className="default-theme-btn purchage-btn">purchage</a>
                                </div>
                            </div>
                            <div className="column">
                                <div className="single-price-box">
                                    <h4>Premium</h4>
                                    <h2>$50.00</h2>
                                    <ul className="list-unstyled">
                                        <li>10 Limited active user</li>
                                        <li>10 gb Hosting</li>
                                        <li>Unlimited Sub Domain</li>
                                        <li>Unlimited Email</li>
                                        <li>Unlimited Database</li>
                                        <li>First Year Free</li>
                                        <li>SSD Hosting</li>
                                        <li>No Hidden Charge</li>
                                    </ul>
                                    <a href="" className="default-theme-btn purchage-btn">purchage</a>
                                </div>
                            </div>
                            <div className="column">
                                <div className="single-price-box">
                                    <h4>Business</h4>
                                    <h2>$100.00</h2>
                                    <ul className="list-unstyled">
                                        <li>Unlimited active user</li>
                                        <li>100 gb Hosting</li>
                                        <li>Unlimited Sub Domain</li>
                                        <li>Unlimited Email</li>
                                        <li>Unlimited Database</li>
                                        <li>First Year Free</li>
                                        <li>SSD Hosting</li>
                                        <li>No Hidden Charge</li>
                                    </ul>
                                    <a href="" className="default-theme-btn purchage-btn">purchage</a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Element>
            <Element name="testimonial" id="testimonial" className={["section-padding", "white-bg"].join(' ')}>
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2>Pengalaman Pengguna Kami</h2>
                            <p>Reprehenderit nemo quod tempore doloribus ratione distinctio quis quidem vitae sunt reiciendis, molestias omnis soluta</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <OwlCarousel
                        ref="car"
                        options={options}
                        events={events}
                    >
                        {this.state.testimonials}
                    </OwlCarousel>

                </div>
            </Element>
            <Element name="promotial" id="promotial">
                <div className={["section-padding", "blue-bg", "promotional-section"].join(' ')}>
                    <div className="container">
                        <div className="row">
                            <div className="section-title">
                                <h2>Liputan Media</h2>
                            </div>
                        </div>
                        <div className="columns">
                           <div className="column">
                                <a href="https://dailysocial.id/post/jubelio-hadirkan-layanan-omni-channel-yang-terhubung-dengan-sistem-pos-dan-akuntansi/">
                                    <img src={DailySocial} alt=""></img>
                                </a>
                           </div>
                           <div className="column">
                                <a href="https://www.techinasia.com/5-saas-startups-exhibiting-tia-jakarta-2017-cool-ideas">
                                    <img src={Tia} alt=""></img>
                                </a>
                           </div>
                           <div className="column">
                                <a href="http://inc-asean.com/editor-picks/indonesian-startup-helps-manage-online-stores/">
                                    <img src={Inc} alt=""></img>
                                </a>
                           </div>
                        </div>
                    </div>
                </div>
            </Element>
        </div>
        )
    }
}