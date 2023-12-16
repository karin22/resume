"use client";

import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { IoIosSend } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLine } from "react-icons/fa";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import CorrectAnimation from "@/app/assets/lottie/correct.json";
import moment from "moment";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const [isInValidEmail, setIsInValidEmail] = useState(false);
  const [isInValidTopic, setIsInValidTopic] = useState(false);
  const isValidEmail = useRef(false);
  const isValidTopic = useRef(false);

  useEffect(() => {
    isValidEmail.current = !isInValidEmail;
    isValidTopic.current = !isInValidTopic;
  }, [isInValidEmail, isInValidTopic]);

  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const submit = useCallback(() => {
    setIsInValidEmail(!email || !validateEmail(email));
    setIsInValidTopic(!topic);

    if (email && validateEmail(email) && topic) {
      SentNotification();
    }
  }, [email, topic, message]);

  const SentNotification = async () => {
    console.log({
      NEXT_PUBLIC_ENV_LINE_TOKEN: process.env.NEXT_PUBLIC_ENV_LINE_TOKEN,
    });

    const res = await fetch("/api/line-notify", {
      method: "POST",
      body: `message=Email: ${email} 
        Topic: ${topic} 
        Message: ${message} 
        Date: ${moment().format("MMMM Do YYYY, h:mm:ss a")}`,
    });

    if (res.status === 200) {
      setSubmitted(true);
    }
  };

  return (
    <section className="sm:pt-40 sm:pb-20 py-20 px-4 lg:mx-0 grid place-items-center overflow-hidden container">
      <div className="w-full">
        <div className="grid grid-cols-2 gap-6">
          <div className="mb-10 sm:mb-0 col-span-2 sm:col-span-1 text-primary dark:text-white grid justify-center">
            <div>
              <h1
                className="font-extrabold text-3xl sm:text-4xl text-gradient mb-6"
                data-aos="fade-zoom-in"
              >
                Contact
              </h1>
              <div className="grid gap-6">
                <a
                  href="mailto:karin.piml@gmail.com"
                  target="blank"
                  className="flex gap-4 items-center w-max cursor-pointer"
                  data-aos="fade-zoom-in"
                >
                  <MdEmail className="text-red-600 h-10 w-10" />
                  <div className="text-2xl">karin.piml@gmail.com</div>
                </a>
                <a
                  href="tel:0908693439"
                  target="blank"
                  className="flex gap-4 items-center w-max cursor-pointer"
                  data-aos="fade-zoom-in"
                >
                  <BsTelephoneFill className="text-blue-700 h-10 w-10" />{" "}
                  <div className="text-2xl">0908693439 </div>
                </a>
                <a
                  href="http://line.me/ti/p/~Not_KP"
                  target="blank"
                  className="flex gap-4 items-center w-max cursor-pointer"
                  data-aos="fade-zoom-in"
                >
                  <FaLine className="text-green-500 h-10 w-10" />
                  <div className="text-2xl">Not_KP</div>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            className="col-span-2 min-h-[472px] relative sm:col-span-1 grid place-items-center  border-2 border-primary dark:border-white rounded-xl shadow-lg  p-6"
          >
            {submitted ? (
              <div
                className="top-0 left-0 right-0 bottom-0 absolute z-50  rounded-xl p-1"
                style={{ backgroundColor: "rgb(255, 255, 255, 0.8)" }}
              >
                <Lottie animationData={CorrectAnimation} loop={true} />
              </div>
            ) : (
              ""
            )}
            <div className="w-full grid gap-6">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="Email"
                    value="email"
                    className="text-gradient text-lg uppercase"
                  />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  color={isInValidEmail ? "failure" : "info"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="Topic"
                    value="topic"
                    className="text-gradient text-lg uppercase"
                  />
                </div>
                <TextInput
                  id="topic"
                  type="text"
                  required
                  color={isInValidTopic ? "failure" : "info"}
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="Message"
                    value="message"
                    className="text-gradient text-lg uppercase"
                  />
                </div>
                <Textarea
                  id="message"
                  rows={4}
                  className="min-h-[100px]"
                  color="info"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="grid justify-center">
                <Button
                  className="bg-primary dark:bg-white w-20 h-20 rounded-full hover:opacity-80 hover:shadow-lg"
                  onClick={submit}
                >
                  <IoIosSend className="w-10 h-10 text-white dark:text-primary" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
