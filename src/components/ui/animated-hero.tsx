import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["bold", "impactful", "disruptive", "modern", "scalable"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-neo-white">
      <div className="container mx-auto px-4">
        <div className="flex gap-1 md:gap-2 items-center justify-center flex-col py-1 md:py-2">
          <div className="flex gap-1 md:gap-2 flex-col items-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl max-w-4xl tracking-tighter text-center font-display font-bold uppercase leading-[1.1]">
              <span className="text-neo-black block">Building digital</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center h-[1.4em] md:pb-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold text-neo-purple underline decoration-neo-yellow decoration-2 md:decoration-4 underline-offset-1 md:underline-offset-2"
                    initial={{ opacity: 0, y: "100%" }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? "-100%" : "100%",
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-neo-black block">experiences</span>
            </h1>

            <p className="text-[10px] md:text-sm lg:text-base leading-relaxed tracking-tight text-neo-black/80 max-w-lg text-center font-body font-medium border-l-4 border-neo-cyan pl-4 mt-0.5">
              We are a collective of designers and developers who refuse to build boring software. 
              We create high-performance digital products that demand attention.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto mt-0.5">
            <Button size="sm" className="gap-3 w-full sm:w-auto font-bold uppercase text-xs md:text-sm" variant="outline">
              Jump on a call <PhoneCall className="w-3 h-3" />
            </Button>
            <Button size="sm" className="gap-3 w-full sm:w-auto font-bold uppercase text-xs md:text-sm" variant="neo">
              Start Project <MoveRight className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
