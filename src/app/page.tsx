"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardLeft = {
    hidden: { x: -300, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardRight = {
    hidden: { x: 300, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="dark:black min-h-screen w-full pl-[310px] pt-2 flex flex-col gap-4"
    >
      {/* Card pertama */}
      <div className="flex gap-4 items-start">
        <motion.div variants={cardLeft} className="relative cursor-pointer dark:text-white max-w-[800px] w-full">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-black rounded-lg dark:bg-gray-200"></span>
          <div className="relative p-6 bg-white dark:bg-black border-2 border-black dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
            <div className="flex items-center">
              <h3 className="font-bold">Introduction :</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              My name is Yoel Kristiadi, born in 2000 and originally from Batam, Indonesia.
              My interest in technology started at a young age, sparked by my passion for games and their modifications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              I have over 4 years of experience in repairing and analyzing electronic hardware, particularly smartphones,
              and internship experience as a PC/laptop technician.
            </p>
          </div>
        </motion.div>

        <motion.div variants={cardRight} className="ml-64 w-[200px]">
          <Image src="/Gifs/Torchic.gif" alt="GIF 1" width={200} height={200} className="rounded-lg" />
        </motion.div>
      </div>

      {/* Card kedua */}
      <div className="flex gap-4 items-end mt-5">
        <motion.div variants={cardLeft} className="ml-56 w-[200px]">
          <Image src="/Gifs/Combusken.gif" alt="GIF 2" width={200} height={200} className="rounded-lg" />
        </motion.div>

        <motion.div variants={cardRight} className="relative cursor-pointer dark:text-white max-w-[800px] w-full ml-auto mr-6">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-black rounded-lg dark:bg-gray-200"></span>
          <div className="relative p-6 bg-white dark:bg-black border-2 border-black dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
            <div className="flex items-center">
              <h3 className="font-bold">Work Experience :</h3>
            </div>
            <table className="w-full text-left text-gray-600 dark:text-white mt-4 border border-collapse">
              <thead>
                <tr>
                  <th className="pb-2 border-2 p-2">Period</th>
                  <th className="pb-2 border-2 p-2">Position</th>
                  <th className="pb-2 border-2 p-2">Company</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-2 p-2">02/2018 - 07/2018</td>
                  <td className="border-2 p-2">Intern Technician</td>
                  <td className="border-2 p-2">PT. Duta Computer. | Batam, Indonesia</td>
                </tr>
                <tr>
                  <td className="border-2 p-2">11/2019 - 03/2024</td>
                  <td className="border-2 p-2">Repair Technician</td>
                  <td className="border-2 p-2">PT. Sat Nusapersada Tbk. | Batam, Indonesia</td>
                </tr>
                <tr>
                  <td className="border-2 p-2">3/2025 - Current</td>
                  <td className="border-2 p-2">Asst. Process Engineer</td>
                  <td className="border-2 p-2">PT. OSI Electronics. | Batam, Indonesia</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Card ketiga */}
      <div className="flex gap-4 items-start mt-10">
        <motion.div variants={cardLeft} className="relative cursor-pointer dark:text-white max-w-[700px] w-full">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-black rounded-lg dark:bg-gray-200"></span>
          <div className="relative p-6 bg-white dark:bg-black border-2 border-black dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
            <h3 className="font-bold mb-4">Skills :</h3>
            <table className="w-full text-left text-gray-600 border dark:text-white border-collapse">
              <thead>
                <tr>
                  <th className="pb-2 border-2 p-2">Skill List</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border-2 p-2">Web Development</td></tr>
                <tr><td className="border-2 p-2">Mobile Apps Development</td></tr>
                <tr><td className="border-2 p-2">Visualisation & Reporting</td></tr>
                <tr><td className="border-2 p-2">Critical Analysis</td></tr>
                <tr><td className="border-2 p-2">Knowledge of ERP Systems</td></tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div variants={cardRight} className="ml-64 w-[400px]">
          <Image src="/Gifs/Blaziken.gif" alt="GIF 3" width={400} height={400} className="rounded-lg" />
        </motion.div>
      </div>
    </motion.div>
  );
}
