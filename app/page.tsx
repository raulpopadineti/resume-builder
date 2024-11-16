"use client";

import * as React from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDownToLine, Moon, Sun } from "lucide-react";
import { Experience } from "@/components/Experience";

export default function Component() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [paperSize, setPaperSize] = React.useState<"letter" | "a4">("letter");
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    documentTitle: "resume",
    contentRef: componentRef,
    pageStyle: `
      @page {
        size: ${paperSize === "letter" ? "215.9mm 279.4mm" : "210mm 297mm"};
        margin: 0;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
        }
      }
    `,
    onPrintError: (error) => console.log(error),
    onAfterPrint: () => console.log("Printed successfully"),
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handlePrintClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handlePrint();
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        {/* Controls */}
        <div className="fixed right-4 top-4 flex gap-2">
          <Button variant="outline" size="icon" onClick={toggleDarkMode}>
            {darkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {paperSize === "letter" ? "US Letter" : "A4"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setPaperSize("letter")}>
                US Letter
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPaperSize("a4")}>
                A4
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button onClick={handlePrintClick}>
            <ArrowDownToLine className="h-4 w-4" />
            Export PDF
          </Button>
        </div>

        {/* Resume Content */}
        <div className="mx-auto p-8">
          <div
            ref={componentRef}
            className={`mx-auto bg-background p-12 border-2 border-gray-200 dark:border-gray-800 rounded-xl shadow-lg print:border-0 print:shadow-none ${
              paperSize === "letter"
                ? "h-[279.4mm] w-[215.9mm]"
                : "h-[297mm] w-[210mm]"
            }`}
          >
            {/* Header */}
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold">Jason Chang</h1>
              <p className="max-w-[500px] text-sm font-semibold">
                I work with founders to design and ship timeless
                products.
              </p>
              <div className="mb-4 text-sm flex items-center gap-2">
                <span>Product Designer</span>
                <span className="text-xs font-medium">|</span>
                <span>jchang.cc (day&night)</span>
                <span className="text-xs font-medium">|</span>
                <span>jason@jchang.cc</span>
              </div>
              
              <div>
                <span className="text-sm font-semibold">Design </span>
                <span className="text-sm font-medium text-muted-foreground">
                  Figma, Adobe Creative Suite, Blender
                </span>
              </div>
              <div>
                <span className="text-sm font-semibold">Development </span>
                <span className="text-sm font-medium text-muted-foreground">
                  HTML/CSS, JavaScript, Python, Cursor
                </span>
              </div>
            </header>

            <div className="mb-8 border-b border-gray-200 dark:border-gray-800" />

            <div className="space-y-8 mb-8">
              <section>
                <h2 className="mb-2 text-md font-semibold text-muted-foreground">
                  Education
                </h2>
                <div>
                  <h3 className="text-sm font-semibold">Carnegie Mellon University <span className="font-medium text-muted-foreground">2015 - 2018</span></h3>
                  <p className="text-sm">B.S. in Information Systems</p>
                </div>
              </section>
            </div>

            <div className="grid grid-cols-[1fr_1fr] gap-16 mb-8">
              <section>
                <h2 className="mb-2 text-md font-semibold text-muted-foreground">
                  Experience
                </h2>

                <div className="space-y-6">
                  <Experience
                    title="Product Designer at Gumroad (Antiwork)"
                    period="2024 – Present | Contract" 
                    bullets={[
                      "Working with other designers to help various clients conduct research and design better UX",
                      "Tasks vary from web apps and websites to branding materials",
                    ]}
                  />

                  <Experience
                    title="UI/UX Designer at Procreate"
                    period="2023 – Present"
                    bullets={[
                      "Lead design for all aspects of user experience for Procreate's digital platforms",
                      "Advise on product design and brand architecture",
                    //   "Launched new flagship animation app, Procreate Dreams",
                    //   "Launched new Help Center site and redesigned many aspects of our marketing site"
                    ]}
                  />

                  <Experience
                    title="Product Designer at La Visual"
                    period="2022 – 2023"
                    bullets={[
                      "Working with other designers to help various clients conduct research and design better UX",
                      "Tasks vary from web apps and websites to branding materials",
                    ]}
                  />

                  <Experience
                    title="UI/UX Designer at Huemor"
                    period="2019 – 2022"
                    bullets={[
                      "Designed and shipped websites for clients in tech, construction, and many other industries.",
                    ]}
                  />
                </div>
              </section>

              <div className="space-y-8">
                <section>
                  <h2 className="mb-2 text-md font-semibold text-muted-foreground">
                    Projects
                  </h2>

                  <div className="space-y-6">
                    <Experience
                      title="Sagent Lending"
                      period="ONGOING"
                      bullets={[
                        "Assisting a loan-servicing fintech company with designing and shipping a white-label platform sold to big banks. Created design systems and prototypes.",
                      ]}
                    />

                    <Experience
                      title="NFL+"
                      period="2022"
                      bullets={[
                        "Supported the launch of NFL's new streaming service, NFL+. Tasks include identity design, creating key art, and designing a new landing page. Visit at nfl.com/plus/learn-more"
                      ]}
                    />

                    <Experience
                      title="HITT Contracting" 
                      period="2022"
                      bullets={[
                        "A website redesign for a big general contractor. We helped set them apart from the competition and meet a new demand for talent. Visit at hitt.com"
                      ]}
                    />
                  </div>
                </section>
              </div>
            </div>

            {/* <div className="space-y-8">
              <section>
                <h2 className="mb-2 text-md font-semibold text-muted-foreground">
                    Skills & Tools
                  </h2>
                  <div className="space-y-0">
                    <div>
                      <span className="text-sm font-medium">Design </span><span className="text-sm text-muted-foreground">
                        Product Design, Interaction Design, Graphic Design,
                        Design Sketching, Illustration
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold">Design </span>
                      <span className="text-sm text-muted-foreground">
                        Figma, Adobe Creative Suite
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold">Development </span>
                      <span className="text-sm text-muted-foreground">
                        HTML/CSS, JavaScript, Python, Cursor
                      </span>
                    </div>
                  </div>
              </section>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
