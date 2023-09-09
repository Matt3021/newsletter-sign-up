import Image from 'next/image'
import iconList from '@/public/icon-list.svg'

const Sucess = () => {
  return (
    <div className="bg-charcoalGrey w-screen h-screen flex justify-center items-center">
      <main className="w-[510px] h-[510px] bg-white rounded-3xl py-14 px-14">
        <div className="mb-12">
          <Image src={iconList} alt="Icon image" width={64} height={64} />
        </div>
        <h1 className="text-5xl font-bold text-darkSlateGray mb-9">
          Thanks for subscribing!
        </h1>
        <p className="mb-10">
          A confirmation email has been sent to
          <strong> ash@loremcompany.com.</strong> Please open it and click the
          button inside to confirm your subscription.
        </p>
        <button
          type="submit"
          className="h-[54px] w-full rounded-lg text-white font-bold bg-darkSlateGray hover:bg-gradient-to-r from-[#fe527a] to-tomato"
        >
          Dismiss message
        </button>
      </main>
    </div>
  )
}

export default Sucess
