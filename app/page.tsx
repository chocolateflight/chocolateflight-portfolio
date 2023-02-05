import Image from 'next/image';
import portrait from '../public/images/portrait.jpg';

export default function Home() {
  return (
    <main className='h-full'>
      <div className='flex flex-col items-center h-full'>
        <Image src={portrait} alt='Portrait' className='w-[200px] rounded-full' />
        <h1 className='text-2xl text-white'>Hello next 13</h1>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quis recusandae?
          Ipsam maxime accusamus reprehenderit omnis possimus, expedita vel iste quo
          modi? Temporibus, commodi esse aspernatur explicabo architecto culpa est. Animi
          delectus ratione incidunt adipisci deleniti corporis error distinctio, odio
          ipsa dolore nisi pariatur eum porro repudiandae perferendis maxime nesciunt
          esse sequi, reprehenderit aperiam? Atque neque similique veniam fuga quis.
          Quisquam odio cumque mollitia nesciunt voluptatibus quae quam unde beatae eum
          officia voluptatem, quod placeat? Repellendus aliquam ad deserunt eaque tempore
          cum, veritatis placeat recusandae magnam, quia facilis, molestiae est.
          Recusandae expedita reprehenderit incidunt error! Esse obcaecati totam corrupti
          repellendus quis vel laudantium temporibus atque maiores? Laborum ea tempora
          accusantium pariatur inventore non minima, reiciendis similique amet
          praesentium, repudiandae iste. Soluta ad corrupti laborum dolores facere,
          doloremque vel magnam amet delectus a accusantium libero aliquid recusandae
          fuga tenetur tempora sunt qui atque? Enim, aliquam quia quaerat nesciunt quam
          nihil hic. Nostrum suscipit quis nisi quae vel qui dignissimos animi blanditiis
          nam ipsa pariatur error consequatur cumque, doloremque sit! Nesciunt vero
          asperiores eaque praesentium reprehenderit totam, minus hic nisi eum ipsa!
          Laboriosam aliquam nostrum cupiditate explicabo temporibus dolor dicta pariatur
          quia libero adipisci id voluptas molestias veritatis at modi reiciendis,
          aliquid laudantium exercitationem dolores nihil autem a totam architecto!
          Animi, similique.
        </p>
      </div>
    </main>
  );
}
