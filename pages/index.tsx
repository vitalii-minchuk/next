import { Fragment } from "react"

import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

import Heading from "../components/Heading"
import Socials from "../components/Socials"
import { SocialsType } from "../types"
import NextImg from "../public/nextImg.jpg"

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials/`)
    const data = await response.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { socials: data }
    }
  } catch (error) {
    return {
      props: { socials: null }
    }
  }

}

interface IHome {
  socials: SocialsType[]
}

const Home: NextPage<IHome> = ({ socials }) => {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <div className="">
        <div className="max-w-6xl mx-auto px-2">
          <Heading text="Hello" />
          <h4 className="text-lg my-3">Lorem ipsum dolor sit, amet consectetur. Recusandae laboriosam et earum.</h4>
          <div className="text-sm w-full my-3 space-y-4">
            <div className="w-3/4 h-auto p-0 m-1 float-left rounded-md overflow-hidden 
            -ml-[15%] [shape-outside:circle()] sm:w-2/3 
            sm:[shape-outside:circle(70%_at_20%_30%)] md:w-[450px] md:m-0 md:mr-3
            md:[shape-outside:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]"
            >
            <Image 
              src={NextImg}
              className=" object-cover object-center [clip-path:circle()] 
              [shape-outside:circle()] sm:[clip-path:circle(70%_at_20%_30%)] 
              sm:[shape-outside:circle(70%_at_20%_30%)]
              md:[clip-path:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]
              md:[shape-outside:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]"
              alt="next image"
              placeholder="blur"
              layout="responsive"
            />
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet sit accusantium non corrupti commodi sequi dignissimos? Maiores eius, dolor vel aspernatur recusandae asperiores pariatur porro rerum, culpa neque mollitia voluptatum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero, earum, est ab aspernatur qui quaerat delectus labore tempora temporibus perferendis quisquam. Non accusamus repellendus temporibus itaque, mollitia a quos fugiat magni ducimus ea maiores necessitatibus dolorum quis aliquam nisi obcaecati quaerat? Nostrum, ipsum?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis numquam modi nulla recusandae rerum fuga suscipit totam. Quod, eius? Quaerat amet velit eos incidunt vitae laudantium, excepturi quae obcaecati dolor veritatis eaque provident sunt a libero aliquid dolorem qui maiores repellat sequi facere, ex cumque ab? Distinctio corporis earum amet.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium ex natus, odio, alias quae assumenda, hic quod iure quia dolores minima fugiat tempora!</p>
          </div>
          <h4 className="text-lg my-3">Lorem ipsum dolor sit amet</h4>
          <div className="text-sm space-y-4 columns-3xs selection:bg-indigo-900 selection:text-indigo-200">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum animi explicabo, in, enim ea, delectus tempora minima ducimus quas recusandae culpa totam similique voluptate. Voluptatum quaerat vel officia quos iure autem inventore laboriosam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laborum accusamus deserunt quis, ad repellendus illo omnis, illum dolores possimus natus eveniet earum nam, mollitia officiis! Facere sapiente est iure illum quos, a soluta et qui dignissimos ducimus, velit iusto, officia animi! Debitis, distinctio fuga ullam sit impedit suscipit! Dolorum consequatur quae esse aliquid mollitia. Quisquam facere doloremque ab tempore repudiandae commodi delectus labore? In iure debitis distinctio est illum, aut tempore neque quis quaerat aliquid fugiat facilis eaque enim.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, quas? Eos quasi repudiandae esse sapiente consectetur illum provident, aliquid unde, distinctio quia illo veniam delectus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, atque accusantium? Atque vero maiores veritatis optio illum ab minus quis tempora hic magni repellat illo vel fugiat iste cum harum temporibus, non ducimus dolorem et placeat reiciendis cumque expedita. Reprehenderit quis voluptas, quisquam neque fugit ratione tempore hic ea nihil?</p>
          </div>
        </div>
      </div>
      <Socials socials={socials} />
    </Fragment>
  )
}

export default Home
