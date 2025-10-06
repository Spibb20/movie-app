import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full min-h-[200px] py-10 bg-teal-700 flex px-20 gap-[5%]">
      <div className="w-[30%] ">
        <div className="flex gap-2 items-center bg-teal-700 rounded-md">
          <img src="/filmWhite.svg" alt="" height={20} width={20} />
          <p className="text-white">MovieZzZzZ</p>
        </div>
        <p className="text-white">2025 MovieZzZzZ. All Rights Reserved</p>
      </div>
      <div className="w-[65%] flex justify-between">
        <div className="flex flex-col  gap-2">
          <p className="text-white">Contact Information</p>
          <div className="flex gap-2">
            <Image
              src="/maily.svg"
              alt="mailIcon"
              width={16}
              height={16}
            ></Image>
            <div className="text-white">
              <p>Email:</p>
              <p>support@movieZ.com</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Image
              src="/phoneIcon.svg"
              alt="mailIcon"
              width={16}
              height={16}
            ></Image>
            <div className="text-white">
              <p>Phone:</p>
              <p>+976 123-4567</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-white">Follow Us!</p>
        </div>
      </div>
    </div>
  );
};
