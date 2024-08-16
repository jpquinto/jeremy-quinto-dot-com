'use client';

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import emailjs from "emailjs-com";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Contact = () => {

      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");
      const [status, setStatus] = useState("send");
      const [emailCopied, setEmailCopied] = useState(false);

      const handleCopyEmail = () => {
        navigator.clipboard.writeText("jpq@jeremyquinto.com")
            .then(() => {
                setEmailCopied(true);
                setTimeout(() => setEmailCopied(false), 2000); // Reset copied state after 2 seconds
            })
            .catch((error) => {
                console.error('Error copying email: ', error);
            });
      };

      const handleSubmit = async (event: any) => {
        event.preventDefault(); 

        const emailBody = `From: ${name} (${email})\n\n${message}`;

        try {
          const response = await fetch('/api/sendEmail', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ emailBody }),
          });
      
          if (response.ok) {
              setName("");
              setEmail("");
              setMessage("");
              setStatus("message sent! thanks!");
          } else {
            setStatus("something went wrong! please try again.");
          }
        } catch (error) {
          console.error('Error sending email:', error);
          alert('Failed to send email');
        }
      }

    return (
        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <div className="inline-block text-purple-700 rounded-lg bg-gray-100 px-3 py-1">#contact</div>
                <h2 className="text-3xl tracking-tight md:text-4xl/tight">contact me</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  have a project in mind or just want to say hello? fill out the form below and i&apos;ll get back to you as
                  soon as possible
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                  <Input 
                    className="max-w-lg flex-1"
                    placeholder="name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    aria-label="name"
                  />
                  <Input 
                    className="max-w-lg flex-1"
                    placeholder="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="email"
                  />
                  <Textarea
                    className="max-w-lg flex-1"
                    placeholder="message"
                    onChange={(e) => setMessage(e.target.value)}
                    aria-label="message"
                  />
                  <Button 
                    className="w-full"
                    type="submit"
                    disabled={name === "" || email === "" || message === ""}>
                    {status}
                  </Button>
                </form>
              </div>
              <div className="space-y-2">
                <p className="mx-auto max-w-[600px] text-amber-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  or
                </p>
                <p 
                  role="heading"
                  className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                >
                  click below to send me an email directly
                </p>
                <button className="bg-gradient-to-b from-black/80 to-black/40 bg-clip-text text-transparent drop-shadow-2xl mx-auto max-w-[600px] text-black font-bold text-3xl" onClick={handleCopyEmail}>
                  jpq@jeremyquinto.com
                </button>
                <div className="h-0 relative">
                  <p className={cn("text-amber-700 font-semibold opacity-0 transition-opacity", emailCopied && "opacity-100")}>email copied to clipboard!</p>
                </div>
              </div>
            </div>
        </section>
    )
}