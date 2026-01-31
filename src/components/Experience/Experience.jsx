import uniqid from "uniqid";
import React from "react";
import { useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences } from "@/portfolio";

const Experience = () => {
  useEffect(() => {
    const all = document.querySelectorAll(".spotlight-card");

    const handleMouseMove = (ev) => {
      all.forEach((e) => {
        const blob = e.querySelector(".blob");
        const fblob = e.querySelector(".fake-blob");

        if (!blob || !fblob) return;

        const rec = fblob.getBoundingClientRect();

        blob.style.opacity = "1";

        blob.animate(
          [
            {
              transform: `translate(${
                ev.clientX - rec.left - rec.width / 2
              }px, ${ev.clientY - rec.top - rec.height / 2}px)`,
            },
          ],
          {
            duration: 300,
            fill: "forwards",
          },
        );
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <section id="experiences" className="mt-16 md:mt-20">
      <h2 className="text-4xl font-bold text-center mb-10 uppercase">
        Experiences
      </h2>

      <div className="flex flex-col gap-5 items-center justify-center">
        {experiences.map((item) => (
          <div key={uniqid()} className="h-max w-max">
            <div className="spotlight-card group bg-border relative overflow-hidden rounded-xl p-px transition-all duration-300 ease-in-out">
              <Card className="group-hover:bg-card/90 max-w-sm md:max-w-lg border-none transition-all duration-300 ease-in-out group-hover:backdrop-blur-[20px]">
                <CardHeader>
                  <CardTitle className="text-xl/8">
                    {item.role}
                    <span className="text-sm font-normal">{" at "}</span>
                    <span className="text-primary">{item.company}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {item.description.map((desc) => (
                    <p key={uniqid()} className="py-0.5">
                      {desc}
                    </p>
                  ))}
                  <div className="flex items-center justify-between pt-5">
                    <span className="font-semibold text-sm text-primary">
                      {item.duration}
                    </span>
                    <span className="text-sm">{item.location}</span>
                  </div>
                </CardContent>
              </Card>
              <div className="blob absolute top-0 left-0 size-20 rounded-full bg-primary/60 opacity-0 blur-2xl transition-all duration-300 ease-in-out dark:bg-primary/60" />
              <div className="fake-blob absolute top-0 left-0 size-20 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
