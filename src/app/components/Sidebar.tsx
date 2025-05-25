"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SideBar() {
  return (
    <div className="transition-transform duration-500 hover:scale-105 origin-left">
      <motion.aside
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.75, ease: "easeOut" }}
        className="w-72 h-screen fixed top-0 left-0 p-6 border-r-4 border-b-4"
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          borderRight: "4px solid var(--foreground)",
        }}
      >
        <div
          className="w-50 h-50 rounded-full overflow-hidden border-4 mb-8 hover:scale-105 transition duration-500"
          style={{
            border: "4px solid var(--profile-border)",
          }}
        >
          <Image
            src="/MyPhoto/profile2.jpg"
            alt="Profile Photo"
            width={128}
            height={128}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="text-center mb-8">
          <h4 className="text-lg font-semibold">Yoel Kristiadi</h4>
          Software Engineer
          <span>
            <small className="text-sm text-gray-500 dark:text-gray-400"></small>
          </span>
        </div>

        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2">Profiles</h3>
          <ul className="text-sm font-light list-disc list-inside space-y-1">
            <li>
              <Link
                href="https://github.com/YoelK20"
                target="_blank"
                className="hover:underline"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/yoel-kristiadi-975053310/"
                target="_blank"
                className="hover:underline"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/yoel.kristiadi.9"
                target="_blank"
                className="hover:underline"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/628117011200"
                target="_blank"
                className="hover:underline"
              >
                WhatsApp
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2">Certifications</h3>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>Hacktiv8, Full Stack JS Immersive (08/01/24, No Expiration)</li>
            <li>HackerRank: JavaScript, React, Problem Solving, SQL, CSS</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2">Educations</h3>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>
              08/2024 — Hacktiv8, Tangerang
              <br />
              Full Stack JS Immersive
            </li>
            <li>
              01/2019 — SMK Real Batam, Batam
              <br />
              Computer & Network Engineer
            </li>
          </ul>
        </div>
      </motion.aside>
    </div>
  );
}
