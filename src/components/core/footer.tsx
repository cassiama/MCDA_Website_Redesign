import Image from "next/image";

export default function Footer() {
    return (
        <footer>
          <div className="quick-links">
            <a href="/about">About</a>
            <a href="/events">Events</a>
            <a href="/sponsors">Sponsors</a>
            <a href="/contact">Contact</a>
            <a href="/donate">Donate</a>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/mcdiversityalliance/">Facebook</a>
            <a href="https://www.instagram.com/mcdiversityalliance/">Instagram</a>
            <a href="https://www.vreel.page/mcdiversityalliance">VReel</a>
            <a href="mailto:Mcdiversityalliance@gmail.com">Email</a>
          </div>
          <div className="newsletter-subscribe">
            <span>Subscribe to Our Newsletter:</span>
            <div className="input-group">
              <input placeholder="Enter your email here" />
              <button>Subscribe</button>
            </div>
          </div>
          <div>©{new Date().getFullYear()} Monmouth County Diversity Alliance</div>
        </footer>
    );
}