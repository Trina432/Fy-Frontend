import { Github, Twitter, Linkedin } from "lucide-react";

const socialIcons = [
  { icon: Github, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-polka border-t-[3px] border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-mono mb-4">
              Intervue<span className="bg-neo-yellow px-1">X</span>
            </h3>
            <p className="text-sm font-semibold text-muted-foreground">
              The recruitment and learning platform.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-3 underline decoration-[3px] underline-offset-4">Platform</h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>AI Interviews</li>
              <li>Job Listings</li>
              <li>Campaigns</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-3 underline decoration-[3px] underline-offset-4">Company</h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-3 underline decoration-[3px] underline-offset-4">Connect</h4>
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 neo-border neo-shadow neo-hover bg-background flex items-center justify-center"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t-[3px] border-border text-center">
          <p className="font-bold text-sm">© 2026 IntervueX. No BS hiring.</p>
        </div>
      </div>
    </footer>
  );
};
