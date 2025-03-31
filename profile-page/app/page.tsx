import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Github, MapPin, Calendar, ExternalLink } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-background mb-6">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Your Name</h1>
          <p className="text-xl mb-4">Professional Title</p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="h-4 w-4" />
            <span>Location</span>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" size="sm" asChild>
              <Link href="mailto:your.email@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Link>
            </Button>
            <Button variant="secondary" size="sm" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button variant="secondary" size="sm" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* About Me */}
            <section>
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    I am a passionate professional with expertise in [your field]. With [X] years of experience, I have
                    developed strong skills in [key skills]. I am dedicated to [your professional goals or values].
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Skill 1</Badge>
                    <Badge>Skill 2</Badge>
                    <Badge>Skill 3</Badge>
                    <Badge>Skill 4</Badge>
                    <Badge>Skill 5</Badge>
                    <Badge>Skill 6</Badge>
                    <Badge>Skill 7</Badge>
                    <Badge>Skill 8</Badge>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg">Degree Name</h3>
                    <p className="text-muted-foreground">University Name</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Year - Year</span>
                    </div>
                    <p className="mt-2">Brief description of your studies or achievements.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">Another Degree/Certification</h3>
                    <p className="text-muted-foreground">Institution Name</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Year - Year</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Job Title</h3>
                        <p className="text-muted-foreground">Company Name</p>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Month Year - Present</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 list-disc pl-5">
                      <li>Accomplishment or responsibility description that showcases your skills and impact.</li>
                      <li>Another key achievement that demonstrates your value to employers.</li>
                      <li>A third bullet point highlighting your contributions or skills developed.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Previous Job Title</h3>
                        <p className="text-muted-foreground">Previous Company</p>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Month Year - Month Year</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 list-disc pl-5">
                      <li>Description of responsibilities and achievements in this role.</li>
                      <li>Specific project or initiative you led or contributed to significantly.</li>
                      <li>Quantifiable results or improvements you helped create.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">Project Name</h3>
                    <p className="text-muted-foreground mb-4">
                      Brief description of the project, its purpose, and your role.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">Another Project</h3>
                    <p className="text-muted-foreground mb-4">
                      Brief description of the project, technologies used, and outcomes.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="text-sm mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </footer>
    </div>
  )
}

