import { Avatar } from "flowbite-react";
export default function About() {
  return (
    <section className="lg:py-32 py-20 px-6 lg:mx-0 grid place-items-center overflow-hidden">
      <div>
        <h1
          className="font-extrabold text-3xl sm:text-4xl text-gradient mb-6"
          data-aos="fade-zoom-in"
        >
          About
        </h1>
      </div>
      <Avatar
        img="/images/karin.webp"
        alt="karin"
        size="xl"
        rounded
        bordered
        data-aos="flip-left"
      />
      <h1
        className="font-extrabold text-gradient  text-4xl my-6 pt-6"
        data-aos="fade-zoom-in"
      >
        KARIN PIMLOY
      </h1>
      <p
        className="text-primary dark:text-white container text-about-detail px-10"
        data-aos="fade-zoom-in"
      >
        {" "}
        I graduated from Prince of Songkla University with a degree in Software
        Engineering. Now that I’m 25 years old and have experience 3 years a
        Front-end, I can develop a responsive web with HTML, and javascript
        frameworks (Vue, Nuxt, React) and I can develop a back-end with
        NodeJS(Basic). I'm a productive team player and strong communication
        skills.
      </p>
    </section>
  );
}
