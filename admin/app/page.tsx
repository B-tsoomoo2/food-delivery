"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "@/lib/services/auth/signIn";

import { useState } from "react";

export default function Home() {
  return (
    <div className="w-360 mx-auto border border-red-500 h-screen flex justify-between">
      <div></div>
      {/* <SignIn /> */}
      <div>
        <div className="w-125 border border-red-400 overflow-hidden rounded-4xl">
          <img
            src="/images/img.png"
            height={100}
            width={100}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
