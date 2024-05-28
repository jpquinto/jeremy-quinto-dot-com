import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export const Contact = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <div className="inline-block text-purple-700 rounded-lg bg-gray-100 px-3 py-1">#contact</div>
              <h2 className="text-3xl tracking-tight md:text-4xl/tight"><span className="text-amber-600">async function</span> contactMe</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                have a project in mind or just want to say hello? fill out the form below and i'll get back to you as
                soon as possible
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col space-y-4">
                <Input className="max-w-lg flex-1" placeholder="name" type="text" />
                <Input className="max-w-lg flex-1" placeholder="email" type="email" />
                <Textarea className="max-w-lg flex-1" placeholder="message" />
                <Button className="w-full" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
    )
}