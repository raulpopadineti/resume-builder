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
            className={`mx-auto bg-background p-16 border-2 border-gray-200 dark:border-gray-800 rounded-xl shadow-lg print:border-0 print:shadow-none ${
              paperSize === "letter"
                ? "h-[279.4mm] w-[215.9mm]"
                : "h-[297mm] w-[210mm]"
            }`}
          >
            {/* Header */}
            <header className="mb-8">
              <h1 className="mb-2 text-4xl font-semibold tracking-tight">
                Raul Popadineți
              </h1>
              <p className="max-w-[650px] text-sm font-medium mb-1">
                I'm a senior software engineer with over a decade of experience
                developing and maintaining web applications serving millions of
                users.
              </p>
              <div className="mb-4 text-sm flex items-center gap-2">
                <a href="https://raulp.co" className="underline">
                  raulp.co
                </a>{" "}
                (password: light&dark)
                <span className="text-xs font-medium">|</span>
                <a href="mailto:raulp@hey.com" className="underline">
                  raulp@hey.com
                </a>
              </div>

              {/* <div>
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
              </div> */}
            </header>

            <div className="mb-8 border-b border-gray-300 dark:border-gray-800" />
            {/* 
            <div className="space-y-8 mb-8">
              <section>
                <h2 className="mb-2 text-md font-bold">Education</h2>
                <div>
                  <h3 className="text-sm font-semibold">
                    Carnegie Mellon University{" "}
                    <span className="font-medium text-muted-foreground">
                      2015 - 2018
                    </span>
                  </h3>
                  <p className="text-sm">B.S. in Information Systems</p>
                </div>
              </section>
            </div> */}

            <div className="grid grid-cols-[1fr_1fr] gap-16 mb-8">
              <section>
                <div className="mb-8">
                  <h2 className="mb-4 text-base font-semibold">Education</h2>
                  <div>
                    <h3 className="text-sm font-semibold">
                      Politehnica Timișoara University{" "}
                      <span className="font-medium text-muted-foreground">
                        2008 - 2012
                      </span>
                    </h3>
                    <p className="text-sm">B.S. in Computer Science</p>
                  </div>
                </div>
                <h2 className="mb-4 text-base font-semibold">Experience</h2>

                <div className="space-y-5">
                  <Experience
                    title="Senior Software Engineer at Gumroad (Antiwork)"
                    period="2021 – Present | Contract"
                    bullets={[
                      "Worked on Gumroad's content editor used by tens of thousands of creators daily.",
                      "Developed and delivered Gumroad's Year in Review email to over 50,000 creators.",
                      "Developed and shipped Flexile's IRS tax filing feature, ensuring compliance for over 1,500 US and foreign investors and contractors.",
                    ]}
                  />

                  <Experience
                    title="Founder & CEO at Sunergos"
                    period="2017 – Present | Full-time"
                    bullets={[
                      "Founded and bootstrapped a software company developing impactful solutions for remote teams and local communities.",
                    ]}
                  />

                  <Experience
                    title="Team Lead & Senior Software Engineer at Hubstaff"
                    period="2015 – 2020 | Contract"
                    bullets={[
                      "Led a team of 6 engineers to build and maintain Hubstaff's flagship product, a time tracking and invoicing platform used by over 100,000 users.",
                    ]}
                  />

                  <Experience
                    title="Cofounder & Software Engineer at Codenapse"
                    period="2012 – 2015 | Full-time"
                    bullets={[
                      "Delivered and shipped custom software solutions to clients in the US and Europe.",
                    ]}
                  />
                </div>
              </section>

              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="mb-4 text-md font-semibold">Skills & Tools</h2>
                  <p className="text-sm">
                    HTML/CSS, JavaScript, Vue, React, Hotwire, Next.js, Ruby,
                    Rails, PostgreSQL, MySQL, Prisma, Heroku, AWS, CI/CD, Ionic
                  </p>
                </div>
                <section>
                  <div className="mb-8">
                    <h2 className="mb-4 text-base font-semibold">Projects</h2>

                    <div className="space-y-5">
                      <Experience
                        title="Git Digest"
                        period="2024"
                        bullets={[
                          "Code changes explained for team leaders and founders, sent directly to their inboxes.",
                        ]}
                        variant="paragraph"
                      />

                      <Experience
                        title="Econub"
                        period="2021 - Present"
                        bullets={[
                          "The most curated recycling map of Timișoara.",
                        ]}
                        variant="paragraph"
                      />

                      <Experience
                        title="Fair Remote"
                        period="2021"
                        bullets={["A transparent remote jobs board."]}
                        variant="paragraph"
                      />

                      <Experience
                        title="Calm Companies"
                        period="2021"
                        bullets={[
                          "A directory of companies that have a calm work culture.",
                        ]}
                        variant="paragraph"
                      />

                      <Experience
                        title="Loripsum"
                        period="2020"
                        bullets={[
                          "A simple Lorem Ipsum generator Homebrew command.",
                        ]}
                        variant="paragraph"
                      />

                      <Experience
                        title="Quote of the Day"
                        period="2018"
                        bullets={[
                          "A mobile app that shows a new contemplation idea every day.",
                        ]}
                        variant="paragraph"
                      />
                    </div>
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
