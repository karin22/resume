"use client";
import React, { useEffect, useCallback, useRef } from "react";
import Lottie from "lottie-react";
import HomeAnimation from "@/app/assets/lottie/home.json";
import { PiHandWavingFill } from "react-icons/pi";

const words = ["Front-End", "Full-Stack"];

const Home = () => {
  const currentIndexRef = useRef(0);

  const typingEffect = useCallback(() => {
    const currentIndex = currentIndexRef.current; // Capture the current index
    const word = words[currentIndex].split("");

    const elWord = document.getElementById("word") as HTMLInputElement | null;

    const loopTyping = () => {
      if (word.length > 0 && elWord) {
        elWord.innerHTML += word.shift();
      } else {
        setTimeout(deletingEffect, 5000);
        return false;
      }
      setTimeout(loopTyping, 300);
    };

    loopTyping();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndexRef.current]);

  const deletingEffect = useCallback(() => {
    const currentIndex = currentIndexRef.current; // Capture the current index
    const word = words[currentIndex].split("");
    const elWord = document.getElementById("word") as HTMLInputElement | null;

    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        if (elWord) {
          elWord.innerHTML = word.join("");
        }
      } else {
        currentIndexRef.current =
          currentIndexRef.current + 1 < words.length
            ? currentIndexRef.current + 1
            : 0;
        typingEffect();
        return false;
      }
      setTimeout(loopDeleting, 150);
    };

    loopDeleting();
  }, [typingEffect]);

  useEffect(() => {
    typingEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <header
        id="up"
        className="h-[90dvh] grid place-items-center relative overflow-hidden container"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-12 items-center justify-center h-full">
          <div
            className="order-2 lg:order-1 col-span-6 text-center grid place-items-center"
            data-aos="fade-zoom-in"
          >
            <div>
              <div className="px-10">
                <div className="mx-2 text-center">
                  <div className="flex gap-2 justify-center">
                    <h1 className=" font-extrabold text-5xl leading-tight text-primary dark:text-white">
                      I&apos;m
                    </h1>
                    <div className="text-yellow-400 w-14 text-5xl sayHi">
                      <PiHandWavingFill />
                    </div>
                  </div>

                  <div className="flex">
                    <h1
                      className="font-extrabold text-4xl sm:text-6xl text-gradient typewriter min-h-[50px] sm:min-h-[60px] mt-4"
                      id="word"
                    ></h1>
                  </div>
                </div>
              </div>

              <h1 className="font-extrabold text-3xl sm:text-4xl text-gradient mt-4">
                Developer
              </h1>
            </div>
          </div>
          <div
            className="lg:order-2 col-span-6 grid place-items-center"
            data-aos="flip-left"
          >
            <div className="max-w-[600px] lg:max-w-full">
              <Lottie animationData={HomeAnimation} loop={true} />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Home;
