"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input, TextArea } from "./ui/input";
import { cn } from "@/utils/cn";
import emailjs from "@emailjs/browser";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function ConatctForm() {
  const [isSubmiting , setIsSubmiting] = useState(false)
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    setIsSubmiting(true)
    e.preventDefault();

    emailjs.send(
      'service_njfbsu4', // Replace with your EmailJS service ID
      'template_rmmxwit', // Replace with your EmailJS template ID
      formData,
      'D-3nw_HoYu3RYBiKM' // Replace with your EmailJS user ID
    ).then((result) => {
      setIsSubmiting(false)
        // console.log(result.text);
        // alert("Message sent successfully!");
      }, (error) => {
      setIsSubmiting(false)

        // console.log(error.text);
        // alert("An error occurred, please try again.");
      });
  };
  return (
    <>
       <h1 className="text-4xl sm:text-4xl md:text-4xl my-8 lg:text-5xl xl:text-6xl font-bold text-center mb-16 mt-16">
      Contact Us
      </h1>
      <div className=" w-screen lg:w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      {/* <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
    </p> */}

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
                id="firstname"
                placeholder="Tyler"
                type="text"
                value={formData.firstname}
                onChange={handleChange}
              />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
                id="lastname"
                placeholder="Durden"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
              />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
              id="email"
              placeholder="example@xyz.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="mobile">Mobile Number</Label>
          <Input
              id="mobile"
              placeholder="Enter your mobile number"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
            />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Message</Label>
          <TextArea
              id="message"
              placeholder="Message"
              type="text"
              value={formData.message}
              onChange={handleChange}
            />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={isSubmiting}
          >
            {isSubmiting ? "Submitting..." : "Send →"}
          <BottomGradient />
        </button>

        {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" /> */}
      </form>
    </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
