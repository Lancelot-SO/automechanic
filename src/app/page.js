import Image from "next/image";
import Carousel from "./components/Carousel";
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between px-20 py-6 bg-[#F7F3F7]'>
      {/* section one */}
      <section className='w-full flex flex-row'>
        <div className='w-3/4'>
          <div>
            <h3 className='text-2xl'>
              <strong>Best </strong>Offer
            </h3>
          </div>
          <div>
            <Carousel />
          </div>
        </div>
        <div>
          <div>
            <strong>Latest</strong> offers
          </div>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ul>
        </div>
      </section>
      {/* section two */}
      <section>section two</section>
      {/* section three */}
      <section>section three </section>
    </main>
  );
}
