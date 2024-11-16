'use client'

import * as React from 'react'
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { FileDown, Moon, Sun } from 'lucide-react'

export default function Component() {
  const [darkMode, setDarkMode] = React.useState(false)
  const [paperSize, setPaperSize] = React.useState<'letter' | 'a4'>('letter')
  const componentRef = useRef<HTMLDivElement>(null)

  const handlePrint = useReactToPrint({
    documentTitle: "resume",
    contentRef: componentRef,
    pageStyle: `
      @page {
        size: ${paperSize === 'letter' ? '215.9mm 279.4mm' : '210mm 297mm'};
        margin: 0;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
        }
      }
    `,
    onPrintError: (error) => console.log(error),
    onAfterPrint: () => console.log('Printed successfully'),
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handlePrintClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handlePrint();
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground">
        {/* Controls */}
        <div className="fixed right-4 top-4 flex gap-2">
          <Button variant="outline" size="icon" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {paperSize === 'letter' ? 'US Letter' : 'A4'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setPaperSize('letter')}>
                US Letter
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPaperSize('a4')}>
                A4
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button onClick={handlePrintClick}>
            <FileDown className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
        </div>

        {/* Resume Content */}
        <div className="mx-auto p-8">
          <div
            ref={componentRef}
            className={`mx-auto bg-background p-20 border-2 border-gray-200 dark:border-gray-800 print:border-0 ${
              paperSize === 'letter'
                ? 'h-[279.4mm] w-[215.9mm]'
                : 'h-[297mm] w-[210mm]'
            }`}
          >
            {/* Header */}
            <header className="mb-8">
              <h1 className="mb-2 text-4xl font-bold">Jason Chang</h1>
              <div className="mb-4 flex items-center gap-2 text-muted-foreground">
                <span>Product Designer</span>
                <span>•</span>
                <span>jchang.cc [password: day&night]</span>
                <span>•</span>
                <span>jason@jchang.cc</span>
              </div>
              <p className="max-w-2xl text-muted-foreground">
                A product designer passionate about engineering timeless experiences.
              </p>
            </header>

            <div className="grid grid-cols-[2fr_1.2fr] gap-16">
              <section>
                <h2 className="mb-2 text-lg font-semibold">Experience</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium">Product Designer at La Visual</h3>
                    <p className="mb-2 text-sm text-muted-foreground">
                      2022 - NOW
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Working with other designers to help various clients conduct research and
                      design better UX. Tasks vary from web apps and websites to branding materials.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium">UI/UX Designer at Huemor</h3>
                    <p className="mb-2 text-sm text-muted-foreground">
                      2019 - 2022
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Collaborated closely with many clients on website designs by understanding
                      their business goals and user personas. Tasks included wireframing, QA, and
                      building sites in Wordpress.
                    </p>
                  </div>
                </div>

                <h2 className="mb-2 mt-12 text-lg font-semibold">Projects</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium">Sagent Lending</h3>
                    <p className="mb-2 text-sm text-muted-foreground">
                      ONGOING
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Assisting a loan-servicing fintech company with designing and shipping a white-
                      label platform sold to big banks. Created design systems and prototypes.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium">NFL+</h3>
                    <p className="mb-2 text-sm text-muted-foreground">
                      2022
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Supported the launch of NFL's new streaming service, NFL+. Tasks include
                      identity design, creating key art, and designing a new landing page. Visit at
                      nfl.com/plus/learn-more
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium">HITT Contracting</h3>
                    <p className="mb-2 text-sm text-muted-foreground">
                      2022
                    </p>
                    <p className="text-sm text-muted-foreground">
                      A website redesign for a big general contractor. We helped set them apart from
                      the competition and meet a new demand for talent. Visit at hitt.com
                    </p>
                  </div>
                </div>
              </section>

              <div className="space-y-8">
                <section>
                  <h2 className="mb-2 text-lg font-semibold">Education</h2>
                  <div>
                    <h3 className="font-medium">Carnegie Mellon University</h3>
                    <p className="mb-1 text-sm text-muted-foreground">
                      B.S. in Information Systems
                    </p>
                    <p className="text-sm text-muted-foreground">2015 - 2018</p>
                  </div>
                </section>

                <section>
                  <h2 className="mb-2 text-lg font-semibold">Skills & Tools</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium">Design</h3>
                      <p className="text-sm text-muted-foreground">
                        Product Design, Interaction Design, Graphic Design, Design Sketching, Illustration
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Software</h3>
                      <p className="text-sm text-muted-foreground">
                        Figma, Webflow, Wordpress, Photoshop, Illustrator
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Development</h3>
                      <p className="text-sm text-muted-foreground">
                        HTML/CSS, JavaScript, Java, Python, Mandarin
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}