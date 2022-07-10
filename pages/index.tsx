import { Fragment } from "react"

import type { NextPage } from "next"
import Head from "next/head"
import Heading from "../components/Heading"
import Socials from "../components/Socials"

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials/`)
  const data = await response.json()
console.log(data)
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { socials: data }
  }
}

const Home: NextPage = ({ socials }) => {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <div className="">
        <div className="max-w-6xl mx-auto px-2">
          <Heading text="Hello" />
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum at nam iste a dolore placeat eaque nobis dolores inventore labore, totam amet veritatis iure magni exercitationem delectus saepe, modi est deserunt repudiandae magnam sunt voluptas doloribus velit. Commodi at adipisci voluptates dignissimos, magni officia? Cum delectus itaque nam assumenda? Sint similique quam deleniti ipsa vero commodi quas aliquid quia quae architecto quos quo, laudantium fugit a alias nobis sunt fugiat nihil, non consequuntur veritatis impedit enim. Sunt officiis non, deserunt error dolorem quibusdam vel. Incidunt quas tenetur odit odio mollitia doloribus neque dolore impedit adipisci, labore earum iste voluptas autem recusandae eveniet unde laborum saepe repellat quos modi soluta. Quod corporis doloremque iure repellat cumque nihil vero quis consectetur numquam, aperiam quasi possimus adipisci veniam totam. Optio ea iure aspernatur animi amet, et dolor officia ullam aliquam, possimus, ipsa sed. Doloribus perferendis odio illum nemo harum ab quisquam animi quaerat, eveniet vero eligendi dolores optio neque molestias aspernatur, natus autem dolorum, totam magnam voluptate est consequuntur. Nostrum nemo libero, accusantium fugiat in id nobis facere impedit assumenda nam doloremque expedita quidem distinctio similique debitis quis voluptates atque ad molestias! Adipisci dignissimos aut autem, maiores itaque optio facere voluptates tempore! Nam, amet sint modi in assumenda necessitatibus, odio aperiam a cum, asperiores unde veniam rerum vel quod laborum! Deserunt ipsum possimus ullam molestiae illo fugiat, mollitia non veritatis sequi nemo voluptate itaque optio eum magni ab recusandae impedit. Illo ullam autem excepturi rerum quaerat et odit? Eum tempore unde facere possimus esse repudiandae? Officiis commodi expedita tempore facere quis quos aspernatur dolorum, optio tenetur ad asperiores in veritatis, et magni a beatae sunt voluptate laborum natus esse quam! Natus excepturi quidem et, quae, aperiam molestiae possimus minus veritatis voluptatum inventore illum unde quas sapiente sed magni consectetur quasi ex dolorem. Dolorem voluptas natus nihil ex. Laborum, ad dicta labore nulla beatae error autem amet repellat soluta dolorum magnam culpa eveniet enim explicabo ratione suscipit, illo temporibus inventore magni corrupti nihil in! Modi eius beatae vitae tenetur minus odio voluptas nobis omnis vero iste ipsam explicabo fuga incidunt quasi quae et repellat recusandae nesciunt eligendi, blanditiis nulla officiis quod provident soluta? Maiores magni rerum accusamus dolorem tenetur maxime quis voluptatibus repellat vel, nemo quam quisquam enim commodi odio in dicta qui consequatur quasi natus possimus id. Suscipit nemo fuga voluptatum voluptas, id quos eveniet, labore ipsam alias temporibus commodi doloribus mollitia. Quisquam unde, sit corporis deleniti neque eligendi, temporibus expedita tempora id rerum ab! Optio porro molestias iste cupiditate in possimus ea illum fugiat obcaecati voluptatibus dolores quisquam velit vero, est adipisci quo tempore officiis qui numquam quam sed praesentium! Nihil deserunt eius aspernatur, eaque, dolores doloremque nulla sed id in, numquam odit voluptatum optio laboriosam totam veritatis accusamus unde non sapiente voluptates? Eos laboriosam doloribus obcaecati, quas maxime explicabo suscipit quibusdam mollitia? Aperiam quidem quibusdam, dolorum soluta totam temporibus eligendi tenetur dolore inventore? Eum id dolorem, doloribus unde, libero sit aspernatur maiores dolore ut illum sequi commodi facilis velit eaque minima quod nulla ipsum voluptatum eligendi iure, tenetur cupiditate dolores. Cum nemo obcaecati iure architecto quis dolores at quos repudiandae suscipit dolorem veniam, eius error commodi rem facilis adipisci inventore ad harum fuga minima amet magni minus perspiciatis! Explicabo eos, minus debitis corrupti reiciendis dicta laborum accusamus deserunt! Molestias consequatur quas porro at expedita, perferendis temporibus nostrum cum, eaque assumenda provident nulla repellendus facere repudiandae nam voluptatem fuga ipsam pariatur omnis praesentium asperiores qui cumque! Error adipisci atque earum quod quo corporis iure quam vel repellat neque, ipsum natus odio facere quae non qui maiores consectetur eaque eveniet cupiditate ex distinctio tenetur et. Quae unde quidem culpa quaerat recusandae cupiditate dolorum. Non minus necessitatibus sequi perspiciatis, voluptate numquam reiciendis tenetur ipsam enim, repellendus odio, debitis explicabo. Nesciunt iusto odio, excepturi dolores adipisci totam architecto? Ut quisquam esse doloremque consectetur, sed ipsam atque molestiae eum illum sapiente nihil deleniti amet dolorem, repudiandae dicta voluptas, labore fuga praesentium earum. Temporibus voluptatibus numquam, modi est voluptas neque tempora debitis aut similique. Autem distinctio at nemo obcaecati similique sed dignissimos quasi enim necessitatibus earum, eius dicta vitae asperiores, recusandae illo. Dolorum doloribus mollitia perspiciatis sit nulla reprehenderit! Quos itaque fuga quae commodi quod tempora at eum cum, ea doloremque nesciunt nemo, exercitationem, aliquid in voluptatibus! Nisi exercitationem laudantium reprehenderit voluptas quia dolorem! Odit facilis eligendi fugit ullam mollitia qui sapiente porro praesentium incidunt veritatis dolor tempora sunt, a corporis nemo sint iusto ad itaque. Ullam sint, odit debitis illo quos, ratione obcaecati incidunt dolor facilis vitae explicabo? Ipsam, tenetur ea iste deserunt obcaecati, fugit at nihil aut culpa incidunt soluta exercitationem eligendi, possimus voluptatem. Molestiae sed autem, omnis culpa voluptatem quod nam quidem quam sunt numquam deleniti fugiat ipsum natus obcaecati minima accusantium commodi ab tenetur iste! Ipsum, aperiam. Placeat sequi odio, at ea debitis laborum numquam excepturi dolorem iste. Ratione veniam in voluptatum odio, nam laboriosam expedita maxime minima facere modi quae explicabo saepe nemo, culpa sapiente qui veritatis suscipit? Molestiae porro explicabo amet! Architecto, molestias illum doloribus ad itaque dicta nobis consectetur vel tempora fuga esse asperiores facere iure saepe soluta repudiandae ab recusandae magnam qui officia debitis totam, magni cupiditate doloremque. Rerum, deleniti eveniet. Amet in, deserunt qui rem eius vitae inventore ipsum natus repellendus voluptatem aspernatur nihil hic et nisi error sit, dolorem voluptatum? Aut omnis veritatis suscipit exercitationem? Nulla tenetur illum laborum hic esse tempora accusamus, voluptatibus asperiores alias aliquid porro ab vitae eius optio libero obcaecati nisi atque iusto inventore accusantium? Ad aperiam quod incidunt reiciendis ratione molestias, omnis delectus repudiandae soluta neque voluptate, pariatur ex veritatis accusantium? Aspernatur minima cum, eligendi reprehenderit quae voluptates nihil voluptatibus incidunt maiores esse modi! Nostrum quod totam voluptates cum inventore a expedita deleniti rem dolore assumenda, commodi, saepe optio explicabo error aliquam ullam quisquam aut autem, sapiente tempora? Natus eius dolore recusandae nostrum ipsa eos neque perferendis reiciendis nobis distinctio quas ut quidem dolorem deleniti voluptas amet cupiditate, doloremque ab dignissimos fugit. Iusto distinctio consequuntur quaerat similique cumque illum dolores. Id, sapiente.
          </p>
        </div>
      </div>
      <Socials socials={socials} />
    </Fragment>
  )
}

export default Home
