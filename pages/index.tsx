import Image from 'next/image'
import illustrationSignUpDesktop from '@/public/illustration-sign-up-desktop.svg'
import iconList from '@/public/icon-list.svg'
import React, { useState } from 'react'
import { z } from 'zod'
import { useRouter } from 'next/router'

const emailValidation = z.string().email()

const Home = () => {
  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(true)
  const router = useRouter()

  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value
    setEmail(newEmail)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    try {
      emailValidation.parse(email)
      setValidEmail(true)
      if (validEmail) {
        router.push(`/sucess?email=${encodeURIComponent(email)}`)
      }
    } catch (error) {
      setValidEmail(false)
    }
  }
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
          <form
            action=""
            method="post"
            onSubmit={handleSubmit}
            className="mt-[32px] "
          >
            <label htmlFor="email" className="">
              <div className="flex justify-between">
                <span className="font-bold text-xs text-darkSlateGray">
                  Email address
                </span>
                {!validEmail && (
                  <span className="font-bold text-xs text-[#ff8c82]">
                    Valid email required
                  </span>
                )}
              </div>
              <br />
              {!validEmail && (
                <input
                  type="text"
                  name="email"
                  placeholder="email@company.com"
                  required
                  value={email}
                  onChange={handleEmailInput}
                  className="h-[54px] w-full border-solid border-[#be7f7a] border-[1px] rounded-lg p-7 mt-[14px] mb-[30px] focus:outline-none focus:border-darkSlateGray bg-[#fee9e8] text-[#c77975]"
                />
              )}
              {validEmail && (
                <input
                  type="text"
                  name="email"
                  placeholder="email@company.com"
                  required
                  value={email}
                  onChange={handleEmailInput}
                  className="h-[54px] w-full border-solid border-grey border-[1px] rounded-lg p-7 mt-[14px] mb-[30px] focus:outline-none focus:border-darkSlateGray"
                />
              )}
            </label>

            <button
              type="submit"
              className="h-[54px] w-full rounded-lg text-white font-bold bg-darkSlateGray hover:bg-gradient-to-r from-[#fe527a] to-tomato"
            >
              Subscribe to monthly newsletter
            </button>
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
