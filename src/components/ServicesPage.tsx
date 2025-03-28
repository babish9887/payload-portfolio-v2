import React, { useEffect } from 'react'
import { FaCode } from 'react-icons/fa'
import { GiAutoRepair } from 'react-icons/gi'
import { MdDesignServices, MdDevices } from 'react-icons/md'

const cardBlackStyle =
  'w-[5rem] relative  aspect-square bg-slate-800  rounded-full flex justify-center items-center'
const cardCyanStyle =
  'w-[5rem] relative aspect-square bg-cyan-300  rounded-full flex justify-center items-center  '
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ServicesPage = () => {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.services',
        scroller: 'body',
        start: 'top 80%',
        end: 'top -20%',
        scrub: 2,
      },
    })

    tl2.fromTo(
      '.line1-left',
      {
        x: -300,
        opacity: 0,
        duration: 1,
        rotate: -6,
      },
      {
        opacity: 1,
        x: 0,
        rotate: 0,
      },
    )

    tl2.fromTo(
      '.line1-right',
      {
        x: 300,
        opacity: 0,
        duration: 1,
        rotate: 6,
      },
      {
        opacity: 1,
        x: 0,
        rotate: 0,
      },
      '-=0.3',
    )

    tl2.fromTo(
      '.line2-left',
      {
        x: -300,
        opacity: 0,
        duration: 1,
        rotate: -6,
      },
      {
        opacity: 1,
        x: 0,
        rotate: 0,
      },
    )

    tl2.fromTo(
      '.line2-right',
      {
        x: 300,
        opacity: 0,
        duration: 1,
        rotate: 6,
      },
      {
        opacity: 1,
        x: 0,
        rotate: 0,
      },
      '-=0.3',
    )
  }, [])

  return (
    <div
      id="services"
      className="section relative w-full flex h-auto justify-center items-center lg:p-10 sm:p-5 pb-10 "
    >
      <div className="p-5  pt-10 w-full max-w-[1200px] flex flex-col justify-center items-center gap-12 lg:gap-y-16 border-0 border-t border-gray-800 ">
        <h1 className="heading serviceHeading text-center self-center font-bold mb-4 uppercase md:text-[5rem] text-[3.5rem] sm:text-[4rem]  text-slate-700">
          Services
        </h1>

        <div className="services grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 ">
          <div className="service line1-left group opacity-0">
            <div className={`${cardBlackStyle}`}>
              <FaCode className="text-5xl" />
              <div className="overlay absolute top-0 left-0 bg-transparent w-full h-full border-2 border-dashed border-white rounded-full transition-all group-hover:rotate-[180deg] ease-out duration-500"></div>
            </div>

            <h1 className="text-center text-4xl text-cyan-400 font-semibold">Web Development</h1>
            <div className="desc text-center text-lg">
              <p>
                Crafting custom websites with a focus on functionality and performance. From
                building dynamic applications to ensuring seamless integrations, I deliver solutions
                tailored to your unique needs.
              </p>
            </div>
          </div>

          <div className="service-oppose flex flex-col justify-center items-center gap-y-8  w-full sm:min-w-[350px] aspect-[1/0.75] bg-cyan-400 p-12 sm:p-8 rounded-3xl line1-right group opacity-0">
            <div className={`${cardCyanStyle}`}>
              <MdDesignServices className="text-5xl text-black" />
              <div className="overlay absolute top-0 left-0 bg-transparent w-full h-full border-2 border-dashed border-black rounded-full transition-all group-hover:rotate-[-180deg] ease-out duration-500 "></div>
            </div>
            <h1 className="text-center text-4xl text-black font-semibold">Website Design</h1>
            <div className="desc text-center text-black  text-lg">
              <p>
                Creating visually stunning and user-friendly designs that captivate your audience. I
                focus on aesthetics and usability to ensure your website stands out and provides a
                great user experience.
              </p>
            </div>
          </div>

          <div className="service-oppose flex flex-col justify-center items-center gap-y-8  w-full sm:min-w-[350px] aspect-[1/0.75] bg-cyan-400 p-12 sm:p-8 rounded-3xl line2-left group opacity-0">
            <div className={`${cardCyanStyle}`}>
              <MdDevices className="text-5xl text-black" />
              <div className="overlay absolute top-0 left-0 bg-transparent w-full h-full border-2 border-dashed border-black rounded-full transition-all group-hover:rotate-[-180deg] ease-out duration-500"></div>
            </div>
            <h1 className="text-center text-4xl text-black font-semibold">Responsive Design</h1>
            <div className="desc text-center text-black  text-lg">
              <p>
                Designing websites that look and perform beautifully on any device. I ensure your
                site is optimized for desktops, tablets, and smartphones, providing a seamless user
                experience across all screen sizes.
              </p>
            </div>
          </div>

          <div className="service line2-right group opacity-0">
            <div className={`${cardBlackStyle}`}>
              <GiAutoRepair className="text-5xl" />
              <div className="overlay absolute top-0 left-0 bg-transparent w-full h-full border-2 border-dashed border-white rounded-full transition-all group-hover:rotate-[180deg] ease-out duration-500"></div>
            </div>
            <h1 className="text-center text-4xl text-cyan-400 font-semibold">
              Website Maintenance
            </h1>
            <div className="desc text-center  text-lg">
              <p>
                Providing ongoing support to keep your website secure, up-to-date, and running
                smoothly. From regular updates to troubleshooting issues, I ensure your site remains
                in top condition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
