'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function Home() {

  const textArray = ["Developer", "Designer"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = loop % textArray.length;
      const fullText = textArray[current];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(50); // Faster speed when deleting
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150); // Slower speed when typing
      }

      if (!isDeleting && text === fullText) {
        // Pause at the end of the word before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        // Move to the next word after deleting
        setIsDeleting(false);
        setLoop(loop + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loop, typingSpeed]);

  return (
    <div className="main-div">
      <video src="/Background.mp4" autoPlay loop muted>
      </video>

      <div className="container">

        <nav className="navbar-div">
          <div className="logodiv">
            <Image src={"/BrandLogo.png"} alt="Portfolio" width={180} height={110} priority /> </div>

          <div className="button">
            <Link href="#home">  <button className="hover:text-yellow-500"> Home </button> </Link>
            <Link href="#about">  <button className="hover:text-yellow-500"> About </button> </Link>
            <Link href="#contact">  <button className="hover:text-yellow-500"> Contact </button> </Link>
            {/* <Link href="/">  <button> Projects </button> </Link>
          <Link href="/">  <button> Blog </button> </Link> */}
          </div>
        </nav>

        <main className="main-block">
          <section id="home">

            <div className="section-div">

              <div className="heading">
                <h1>Hi! I'm FrontEnd</h1>

                <div className="animate-text">
                  <span>{text}</span>
                  <span className="animate-blink">|</span>
                </div>

                <Link href="/contact"> <button className="link">Contact Me</button> </Link>
              </div>

              <div className="img">
                <Image src={"/Profile-Picture.png"} alt="Profile Picture" width={400} height={400} className="image" />
              </div>

            </div>
          </section>

          <section id="about">
            
            <div className="about-div">
              <h1 className="heading-about"> About My Self </h1> </div>
            <div>
              <p>Hello! I am Fazilat Jahan, a front-end developer and designer dedicated to crafting beautiful, intuitive digital experiences. With a strong foundation in HTML, CSS, and JavaScript, alongside expertise in frameworks like React and Next.js, I bring designs to life with seamless functionality. My design skills, allow me to create interfaces that are not only visually compelling but also user-centered.

I am driven by a passion for detail and a commitment to delivering high-quality, responsive, and engaging websites. Staying up-to-date with industry trends is essential to me, and I constantly explore new tools and techniques to keep my work innovative. Whether I am developing or designing, my goal is always the same: to make the digital world more accessible and enjoyable for users.

Lets connect and discuss how I can contribute to your next project!</p>

            </div>
          </section>

          <section id="contact">
            <div className="contact-box">
              <form action="" >
                <h1 className="heading-about"> Contact Me </h1>
                
                <div className="input-info">
                  <input type="text" placeholder="Name" required />
                  <input type="email" placeholder="Email" required />
                  <textarea placeholder="Message" required></textarea>
                </div>
                <div className="submit-info">
                  <input type="submit" value="Submit" />
                </div>

              </form>
            </div>

          </section>

        </main>

      </div>
    </div>
  );
}
