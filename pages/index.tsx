import Image from 'next/image'
import illustrationSignUpDesktop from '@/public/illustration-sign-up-desktop.svg'
import iconList from '@/public/icon-list.svg'

const Home = () => {
  return (
    <main className="bg-charcoalGrey flex justify-center items-center h-screen">
      <div className="modal bg-white w-[930px] h-[645px] rounded-3xl flex">
        <div className="left-side ml-16 mt-[115px] w-[360px] mr-[70px]">
          <h1 className="text-[40px] text-darkSlateGray font-bold mb-[18px]">
            Stay updated!
          </h1>
          <p className="mb-[18px] ">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul>
            <li className="flex mb-[13px]">
              <Image src={iconList} alt="Icon list" />
              <span className="ml-[18px]">
                Product discovery and building what matters
              </span>
            </li>
            <li className="flex mb-[13px]">
              <Image src={iconList} alt="Icon list" />
              <span className="ml-[18px]">
                Measuring to ensure updates are a success
              </span>
            </li>
            <li className="flex mb-[13px]">
              <Image src={iconList} alt="Icon list" />
              <span className="ml-[18px]">And much more!</span>
            </li>
          </ul>
          <form action="" method="post" className="mt-[32px] ">
            <label htmlFor="email" className="">
              <span className="font-bold text-xs text-darkSlateGray">
                Email address
              </span>
              <br />
              <input
                type="text"
                name="email"
                placeholder="email@company.com"
                className="h-[54px] w-full border-solid border-grey border-[1px] rounded-lg p-7 mt-[14px] mb-[30px] focus:outline-none focus:border-darkSlateGray"
              />
            </label>

            <input
              type="button"
              value="Subscribe to monthly newsletter"
              className="h-[54px] w-full rounded-lg text-white font-bold bg-darkSlateGray hover:bg-gradient-to-r from-[#fe527a] to-tomato hover:transition-all"
            />
          </form>
        </div>
        <div className="right-side flex justify-center items-center ml-3">
          <Image src={illustrationSignUpDesktop} alt="Illustration Image" />
        </div>
      </div>
    </main>
  )
}

export default Home
