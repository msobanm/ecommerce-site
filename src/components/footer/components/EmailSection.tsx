import React from "react"
import { IoMdSend } from "react-icons/io"
import Button from "../../Button"

const EmailSection = () => {
  return (
    <div className="flex justify-center flex-1">
      <div className="flex flex-col gap-5 w-3/4 ">
        <h2 className="">Email us your thoughts, Directly into our inbox</h2>
        <div className="flex space-x-2 w-3/4">
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 w-full border border-white rounded focus:outline-none focus:border-secondary-2 text-primary"
          />
          <Button
            title={<IoMdSend />}
            onClick={() => console.log("send button clicked!")}
          />
        </div>
      </div>
    </div>
  )
}

export default EmailSection
