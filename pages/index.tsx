import Image from 'next/image'
import illustrationSignUpDesktop from '@/public/illustration-sign-up-desktop.svg'

const Home = () => {
  return (
    <main>
      <div className="modal">
        <div className="left-side">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Product discovery and building what matters</li>
            <li>And much more!</li>
          </ul>
          <form action="" method="post">
            <label htmlFor="email">
              Email address
              <input type="text" name="email" placeholder="email@company.com" />
            </label>

            <input type="button" value="Subscribe to monthly newsletter" />
          </form>
        </div>
        <div className="right-side">
          <Image src={illustrationSignUpDesktop} alt="Illustration Image" />
        </div>
      </div>
    </main>
  )
}

export default Home
